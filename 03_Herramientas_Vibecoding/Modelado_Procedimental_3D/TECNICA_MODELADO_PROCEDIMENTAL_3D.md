# Manual Técnico: Modelado 3D Procedimental de Alta Fidelidad en WebGL / Three.js
**Autor:** Antigravity AI & Equipo de Planeamiento y Control de las Organizaciones  
**Proyecto:** Seminario de Integración y Aplicación / Planeamiento Organizacional (CURZAS - UNCo)  
**Fecha:** Octubre 2026  
**Clasificación:** Herramientas Vibecoding • Pipeline 3D Autónomo

---

## 1. Fundamento y Filosofía de la Técnica

### ¿Por qué sustituir assets estáticos (SVG / GLTF pesados) por Modelado Procedimental?
En presentaciones y tableros interactivos de misión crítica, depender de imágenes SVG estáticas o modelos 3D pesados (`.gltf` / `.obj`) introduce múltiples puntos de fallo:
1. **Fallas de renderizado y referencias rotas:** Errores de parsing XML en SVG (`[x] Diagrama Conceptual Vectorial`), paths rotos y diferencias de render entre navegadores.
2. **Falta de vida e interactividad:** Una imagen plana no permite orbitar a 360°, modificar la altura del relieve en tiempo real, rastrear punteros por raycasting ni animar flujos topológicos de datos.
3. **Cero dependencias externas:** El modelado procedimental se compila **directamente en memoria GPU** a partir de código JavaScript puro mediante la API de Three.js. No hay llamadas de red adicionales, la carga es instantánea (0 ms de stutter) y el archivo es 100% autocontenido.

---

## 2. Los 7 Pilares Arquitectónicos de la Técnica

```
┌────────────────────────────────────────────────────────────────────────┐
│               ARQUITECTURA PROCEDIMENTAL THREE.JS                      │
├──────────────────────────┬──────────────────────────┬──────────────────┤
│   1. GEOMETRÍA DE FORMAS │   2. TOPOLOGÍA DE RED    │  3. INTERACCIÓN  │
│   • Coordenadas polígono │   • Nodos espaciales     │  • Raycasting    │
│   • Extrusión con bisel  │   • Arcos paramétricos   │  • Tooltips      │
│   • EdgesGeometry        │   • Pulsos animados (t)  │  • Picking HSL   │
└──────────────────────────┴──────────────────────────┴──────────────────┘
```

### Pilar 1: Coordenadas Poligonales Normalizadas y Geometría Extruida
Cada pieza (departamento, módulo organizacional o pilar conceptual) se modela como un polígono 2D en el plano $(X, Z)$ usando `THREE.Shape()`.
Posteriormente se aplica `THREE.ExtrudeGeometry()` con chaflán y biselado cinético:

```javascript
const shape = new THREE.Shape();
coords.forEach((pt, idx) => {
  if (idx === 0) shape.moveTo(pt[0], pt[1]);
  else shape.lineTo(pt[0], pt[1]);
});
shape.closePath();

const extrudeSettings = {
  steps: 1,
  depth: 2.2,             // Espesor del bloque tridimensional
  bevelEnabled: true,
  bevelThickness: 0.35,   // Biselado elegante de borde
  bevelSize: 0.30,
  bevelSegments: 3
};

const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
geometry.rotateX(Math.PI / 2); // Acostar la forma horizontalmente
```

### Pilar 2: Delineado de Aristas de Alta Precisión (`EdgesGeometry`)
Para otorgar ese acabado nítido de maqueta de ingeniería o arquitectura sin artefactos de z-fighting:

```javascript
const edgesGeom = new THREE.EdgesGeometry(geometry, 25); // Umbral de ángulo de 25°
const edgesMat = new THREE.LineBasicMaterial({
  color: 0x334155,
  transparent: true,
  opacity: 0.55
});
const wireframe = new THREE.LineSegments(edgesGeom, edgesMat);
mesh.add(wireframe);
```

### Pilar 3: Tipografía Nítida mediante Canvas Sprites (Retina 2X)
En lugar de geometrías de texto 3D pesadas que se distorsionan con la perspectiva, se utiliza un canvas 2D dinámico renderizado a alta resolución ($512 \times 128$) montado en un `THREE.Sprite`:

```javascript
function createTextSprite(text, fontSize = 28, color = "#0f3460", isBold = true) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${isBold ? "bold" : "normal"} ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Sombra suave para máxima legibilidad contra cualquier fondo
  ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
  ctx.shadowBlur = 6;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(16, 4, 1);
  return sprite;
}
```

### Pilar 4: Enlaces Topológicos y Trazado Discontinuo (`LineDashedMaterial`)
Las interconexiones entre nodos (territoriales o subsistémicos) se trazan con líneas punteadas que comunican flujo de datos:

```javascript
const p1 = new THREE.Vector3(nodeA.x, 3.4, nodeA.z);
const p2 = new THREE.Vector3(nodeB.x, 3.4, nodeB.z);

const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
const lineMat = new THREE.LineDashedMaterial({
  color: 0x0284c7, // Cyan intenso
  dashSize: 1.2,
  gapSize: 0.8,
  linewidth: 2
});
const line = new THREE.Line(lineGeo, lineMat);
line.computeLineDistances(); // Obligatorio para renderizar el patrón dashed
scene.add(line);
```

### Pilar 5: Pulsos Cinemáticos con Trayectoria Parabólica
Cada paquete de datos o flujo de información viaja de forma continua siguiendo una ecuación de interpolación con arco de elevación:

$$\vec{P}(t) = \vec{P}_A + (\vec{P}_B - \vec{P}_A) \cdot t$$
$$Y(t) = Y_{\text{base}} + \sin(t \cdot \pi) \cdot h_{\text{arco}}$$

```javascript
// En el bucle animate():
pulses.forEach(p => {
  p.userData.progress += delta * 0.45;
  if (p.userData.progress > 1.0) p.userData.progress = 0;

  const edge = ENLACES[p.userData.edgeIndex];
  const pA = nodeMap[edge[0]].coords;
  const pB = nodeMap[edge[1]].coords;
  const t = p.userData.progress;

  p.position.x = pA[0] + (pB[0] - pA[0]) * t;
  p.position.z = -pA[1] + (-pB[1] - (-pA[1])) * t;
  p.position.y = 3.6 + Math.sin(t * Math.PI) * 0.6; // Arco parabólico
});
```

### Pilar 6: Raycasting y Picking de Precisión con Highlight HSL
Permite inspeccionar cada bloque al pasar el cursor o hacer clic sin necesidad de recargar el DOM:

```javascript
raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObjects(interactiveMeshes, false);

if (intersects.length > 0) {
  const hit = intersects[0].object;
  if (hoveredMesh !== hit) {
    if (hoveredMesh) hoveredMesh.material.color.setHex(hoveredMesh.userData.baseColor);
    hoveredMesh = hit;
    // Resaltado armónico: añade un toque sutil de saturación y brillo
    hoveredMesh.material.color.offsetHSL(0, 0.05, 0.08);
  }
}
```

### Pilar 7: Control Dinámico de Relieve (3D Extrusion vs. Flat Map)
Una simple animación de escala en el eje $Y$ permite alternar entre vista volumétrica y plano cartográfico:

```javascript
function toggleExtrusion(is3D) {
  Object.keys(meshes).forEach(key => {
    meshes[key].scale.y = is3D ? 1.0 : 0.15;
  });
}
```

---

## 3. Guía de Implementación Paso a Paso para Nuevos Objetos

1. **Definir la Matriz de Polígonos:**
   Trazar en papel o coordenadas relativas los vértices en sentido horario o antihorario de las figuras que componen el modelo.
2. **Definir la Paleta PBR:**
   Asignar colores institucionales con `roughness: 0.35` y `metalness: 0.10` para un acabado sobrio y académico.
3. **Incorporar al `window.Presentation3D_Objects["anim_XX"]`:**
   Implementar los métodos `build(engine, group)` y `animate(engine, t)`.
4. **Registrar Sprites y Nodos:**
   Ubicar las etiquetas `createTextSprite` en los centros geométricos con elevación $Y > 0$.
5. **Añadir Pulsos Cinemáticos:**
   Conectar los enlaces estratégicos mediante la estructura de datos `edges` y animar los pulsos en `animate()`.

---

## 4. Repositorio de Coordenadas de Referencia (Provincia de Río Negro)

Para futuras réplicas cartográficas, las coordenadas exactas de los 13 departamentos rionegrinos son:

| Departamento | Cabecera | Color Hex | Coordenadas Clave |
|---|---|---|---|
| **General Roca** | General Roca | `#E8B8B5` | `[[-9, 26], [-9, 58], [2, 58], [2, 44], [6, 40], [13, 38], [13, 32], [-1, 26]]` |
| **El Cuy** | El Cuy | `#E5DAC6` | `[[-28, 12], [-22, 23], [-16, 27], [-9, 26], [-1, 26], [13, 32], [13, 26], [-7, 13], [-17, 3], [-24, 8]]` |
| **Avellaneda** | Choele Choel | `#F7E3B5` | `[[13, 38], [33, 34], [34, 20], [8, 17], [13, 26], [13, 32]]` |
| **Pichi Mahuida** | Río Colorado | `#D8C7B5` | `[[33, 34], [68, 30], [67, 18], [34, 20]]` |
| **Conesa** | Gral. Conesa | `#CDE8D5` | `[[34, 20], [67, 18], [64, 4], [35, 7]]` |
| **Adolfo Alsina** | Viedma (CURZA) | `#BCD5E6` | `[[48, 4], [64, 4], [67, -13], [74, -14], [72, -22], [57, -18], [48, -4]]` |
| **San Antonio** | San Antonio Oeste | `#B5DFD5` | `[[30, 7], [48, 4], [48, -4], [40, -4], [43, -11], [39, -15], [42, -37], [30, -37], [30, 7]]` |
| **Valcheta** | Valcheta | `#D8CCE4` | `[[12, 17], [30, 7], [30, -37], [12, -37], [12, 17]]` |
| **9 de Julio** | Sierra Colorada | `#EFE2C6` | `[[-2, 16], [12, 17], [12, -37], [1, -37], [1, -6], [-2, 4]]` |
| **25 de Mayo** | Maquinchao | `#D2DEC3` | `[[-7, 13], [-2, 4], [1, -6], [1, -37], [-19, -37], [-19, -26], [-29, -17], [-24, -8], [-17, 3]]` |
| **Pilcaniyeu** | Pilcaniyeu | `#C8C3DE` | `[[-35, 1], [-28, 12], [-24, 8], [-29, -17], [-49, -17], [-49, -13], [-44, -4], [-40, 2]]` |
| **Bariloche** | Bariloche | `#B8C9DB` | `[[-67, -10], [-55, -9], [-49, -13], [-49, -17], [-54, -18], [-54, -28], [-68, -28], [-68, -10]]` |
| **Ñorquinco** | Ñorquinco | `#F3DEB0` | `[[-54, -18], [-49, -17], [-29, -17], [-19, -26], [-37, -37], [-53, -37], [-54, -28]]` |


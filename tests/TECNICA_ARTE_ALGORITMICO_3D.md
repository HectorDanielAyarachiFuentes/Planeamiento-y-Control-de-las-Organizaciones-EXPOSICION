# MANUAL MAESTRO DE ARTE ALGORÍTMICO Y MATEMÁTICA GENERATIVA 3D
## Integración de Sistemas Procedurales Matemáticos en Esculturas WebGL (Three.js)
**Cátedra:** Planeamiento y Control de las Organizaciones — CURZAS (UNCo)  
**Autor:** Antigravity AI Engine para Héctor Daniel Ayarachi Fuentes  
**Fecha:** 2026  

---

## 1. Filosofía del Arte Algorítmico en Esculturas 3D

El **Arte Algorítmico (*Algorithmic Art*)** no consiste en incrustar imágenes fijas ni texturas fotográficas planas, sino en **hacer visible la matemática que gobierna los sistemas complejos** mediante código procedural que evoluciona en tiempo real o genera tramas de infinita resolución geométrica.

En una exposición académica de nivel posgrado/licenciatura sobre **Planeamiento Organizacional, Poligobernanza y Planificación Estratégica Situacional (Matus)**, las esculturas físicas de museo (mármol, bronce, granito, cristal) adquieren una nueva dimensión cognitiva cuando incorporan:
1. **Pergaminos y Cuadrantes Vivos:** Texturas procedurales cuyos diagramas se trazan a partir de ecuaciones matemáticas (campos de fuerza, atractores, ondas de interferencia).
2. **Halos y Estructuras Paramétricas 3D:** Nubes de partículas, líneas de corriente de flujo vectorial (*flow fields*) y anillos orbitales que orbitan las columnas clásicas expresando el dinamismo institucional.

---

## 2. Los 5 Pilares Matemáticos Fundamentales

### A. Campos de Flujo Vectorial por Ruido (*Vector Flow Fields*)
Representa la dinámica del flujo de información, la resistencia burocrática y las trayectorias de los actores en el territorio.

* **Fórmula de ángulo director:**
  $$\theta(x, y) = \text{PerlinNoise}\left(\frac{x}{s}, \frac{y}{s}, t\right) \times 2\pi \times k$$
* **Vector de velocidad de cada partícula:**
  $$\vec{v} = \langle \cos(\theta), \sin(\theta) \rangle \times v_{\text{max}}$$
* **Aplicación:** Modela cómo los recursos humanos y los expedientes navegan las rutinas administrativas o los 10 nodos territoriales de Río Negro sorteando cuellos de botella.

### B. Curvas Paramétricas Armónicas de Lissajous y Rosa Polar
Representa la búsqueda de armonía entre subsistemas organizacionales (Longo: planificación, mérito, rendimiento, compensaciones).

* **Curva de Lissajous:**
  $$x(t) = A \sin(a \cdot t + \delta), \quad y(t) = B \sin(b \cdot t)$$
* **Rosa Polar Multilobular:**
  $$r(\phi) = R_0 + A \cos(k \cdot \phi + \omega t)$$
* **Aplicación:** Cuadrantes de latón grabado, diales de medición de capacidades estatales e insignias de co-gobierno universitario.

### C. Atractor Caótico de Lorenz (Planificación Estratégica Situacional)
Representa el concepto central de **Carlos Matus**: el sistema organizativo nunca converge a un punto fijo de equilibrio estático, sino que orbita perpetuamente alrededor de cuencas de atracción (Viabilidad Política, Viabilidad Institucional, Viabilidad Técnica).

* **Sistema de Ecuaciones Diferenciales:**
  $$\frac{dx}{dt} = \sigma (y - x)$$
  $$\frac{dy}{dt} = x (\rho - z) - y$$
  $$\frac{dz}{dt} = x y - \beta z$$
  *(con parámetros clásicos $\sigma = 10, \rho = 28, \beta = 8/3$)*
* **Aplicación:** Trazado de cintas de fibra dorada que bailan en el aire alrededor de la maqueta de la Escuela Situacional.

### D. Interferencia de Ondas y Resonancia de Poligobernanza
Modela la coproducción de valor público de Luis Aguilar Villanueva y la red de 10 Nodos del CURZAS.

* **Campo Escalar de Amplitud:**
  $$\Psi(x, y, t) = \sum_{i=1}^{N} \frac{A_i}{\sqrt{d_i + \epsilon}} \sin\left(k \cdot d_i - \omega t + \phi_i\right)$$
  donde $d_i = \sqrt{(x - x_i)^2 + (y - y_i)^2}$ es la distancia Euclidiana al nodo $i$.
* **Aplicación:** Grabado sobre medallones centrales de cristal o placas de base de mármol mostrando líneas equipotenciales de influencia territorial.

### E. Tesselación de Voronoi y Relajación Estocástica de Lloyd
Representa la división departamental y la cobertura de los nodos universitarios en la Línea Sur y Valles.

* **Fórmula de Voronoi:**
  $$\text{Región}(P_i) = \{ X \in \mathbb{R}^2 \mid d(X, P_i) \le d(X, P_j) \; \forall j \neq i \}$$
* **Aplicación:** Generación automática de celdas orgánicas que definen las áreas de influencia pedagógica y socioproductiva de cada sede.

---

## 3. Pipeline de Integración en Three.js

Para lograr un rendimiento ultra-fluido (60 FPS estables) sin saturar la GPU ni añadir dependencias de librerías externas pesadas (como p5.js en runtime 3D), la técnica se implementa mediante dos vías nativas de Three.js:

```
┌─────────────────────────────────────────────────────────────┐
│                 PIPELINE ALGORÍTMICO 3D                     │
├──────────────────────────────┬──────────────────────────────┤
│  VÍA 1: TEXTURA CANVAS 2D    │  VÍA 2: GEOMETRÍA PARAMÉTRICA│
│  (Pergaminos / Diales / PBR) │  (Partículas / Trayectorias) │
├──────────────────────────────┼──────────────────────────────┤
│ • Canvas dinámico 1024x1024  │ • THREE.BufferGeometry       │
│ • Ecuaciones matemáticas 2D  │ • Float32Array (pos, color)  │
│ • Acumulación estocástica    │ • THREE.LineSegments / Points│
│ • Mapeo a CanvasTexture      │ • Shaders aditivos o PBR     │
│ • Asignado a map/roughness   │ • Integración Runge-Kutta 4  │
└──────────────────────────────┴──────────────────────────────┘
```

### Código Estándar 1: Generador de Textura Matemática Procedural (Canvas)
```javascript
function createGenerativeLissajousTexture(title, sub) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Fondo marfil pergamino con micro-grano
  ctx.fillStyle = "#faf7ee";
  ctx.fillRect(0, 0, 1024, 1024);

  // Trazado de Curvas Armónicas Compuestas (Lissajous / Harmonograph)
  ctx.save();
  ctx.translate(512, 512);
  ctx.strokeStyle = "rgba(180, 131, 36, 0.45)"; // Dorado envejecido
  ctx.lineWidth = 1.5;

  const totalPoints = 3600;
  ctx.beginPath();
  for (let i = 0; i <= totalPoints; i++) {
    const t = (i / totalPoints) * Math.PI * 16;
    // Superposición de 3 frecuencias no commensurables
    const x = Math.sin(t * 1.98) * 320 * Math.exp(-0.0004 * t) + Math.cos(t * 3.01) * 70;
    const y = Math.sin(t * 3.00 + Math.PI/3) * 320 * Math.exp(-0.0004 * t) + Math.sin(t * 5.02) * 60;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  return tex;
}
```

### Código Estándar 2: Nube Paramétrica de Campo de Fuerzas 3D
```javascript
function createParametricFlowCloud(count = 1200, radius = 1.2) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const c1 = new THREE.Color(0xd4af37); // Oro
  const c2 = new THREE.Color(0x38bdf8); // Cian patagónico

  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3]     = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const mixed = c1.clone().lerp(c2, (y + radius) / (2 * radius));
    colors[i * 3]     = mixed.r;
    colors[i * 3 + 1] = mixed.g;
    colors[i * 3 + 2] = mixed.b;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.024,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  return new THREE.Points(geom, mat);
}
```

---

## 4. Guía de Aplicación por Tipo de Filmina y Escultura

| Eje Temático | Escultura Base | Técnica Algorítmica Matemática a Incorporar |
| :--- | :--- | :--- |
| **Apertura e Institucional** | Gran Tomo, Atril y Credencial | Armónicos de Lissajous grabados al calor en filigranas de pergamino y cinta fractal. |
| **Burocracia Weberiana y Autonomía** | Columnas Clásicas y Balanzas | Curvas de equilibrio estático catenarias y cuadrantes de precisión matemática polar. |
| **Territorio y Red de Nodos** | Relieve 3D de Río Negro | Celdas de Voronoi dinámicas y líneas geodésicas de fibra óptica con pulsos sinusoidales. |
| **PES de Carlos Matus** | Esfera Armilar y Astrolabio | Órbitas del Atractor de Lorenz (Viabilidad Política, Institucional y Económica). |
| **Talento y Longo / Capacidades** | Prismas de Cristal Óptico | Dispersión espectral matemática de Fresnel y vectores radiales de capacidades estatales. |

---

## 5. Reglas de Oro para Mantener la Excelencia Estética

1. **Nunca perder la solidez física del museo:** La matemática generativa complementa el bronce, el mármol de Carrara y la madera noble; **no debe verse como un videojuego espacial ni como líneas de neón descontroladas**.
2. **Sutileza de opacidades y brillos:** Mantener las líneas matemáticas en tonalidades oro envejecido (`#d4af37`), zafiro patagónico (`#0284c7`) y marfil cálido (`#faf7ee`) con opacidades entre `0.25` y `0.65`.
3. **Optimización estricta:** Reutilizar texturas generadas proceduralmente con cachés o computarlas una sola vez en el `build()` para no degradar los 60 FPS en computadoras portátiles o tablets.


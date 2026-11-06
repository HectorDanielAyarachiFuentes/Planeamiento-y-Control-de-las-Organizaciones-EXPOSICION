const fs = require('fs');

// 1. Update bloque5.js
const bloque5Path = 'js/objetos/bloque5.js';
let b5 = fs.readFileSync(bloque5Path, 'utf8');

const pAnim21 = b5.indexOf('window.Presentation3D_Objects["anim_21"] = {');
const pAnim22 = b5.indexOf('window.Presentation3D_Objects["anim_22"] = {');

if (pAnim21 === -1 || pAnim22 === -1) {
  console.error("anim_21 or anim_22 not found in bloque5.js!");
  process.exit(1);
}

// Find comment before anim_22
const pComment22 = b5.lastIndexOf('// ──', pAnim22);

const newAnim21Code = `window.Presentation3D_Objects["anim_21"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.65, 0.22, -1.22);

    const fodaGroup = new THREE.Group();
    fodaGroup.position.set(0, -0.15, 0);

    // 1. Base monumental de dos niveles (grada delantera y terraza trasera elevada)
    const baseBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.62, 0.10, 1.62),
      engine.graniteMat(0x0f172a)
    );
    baseBlock.position.y = -0.85;
    fodaGroup.add(baseBlock);

    // Terraza escalonada para la fila trasera (Fortalezas y Oportunidades elevadas)
    // De esta manera sus carteles y placas frontales quedan 100% despejadas y visibles
    const backTerrace = new THREE.Mesh(
      new THREE.BoxGeometry(1.56, 0.32, 0.78),
      engine.graniteMat(0x1e293b)
    );
    backTerrace.position.set(0, -0.64, -0.42);
    fodaGroup.add(backTerrace);

    const quadrants = [
      {
        x: -0.46,
        z: -0.42,
        y: -0.14, // Fila trasera elevada (+0.32)
        h: 0.65,
        letter: "F",
        title: "FORTALEZAS",
        sub: "Arraigo Territorial • Docencia",
        badge: "INTERNA POSITIVA",
        col: 0x10b981
      },
      {
        x: 0.46,
        z: -0.42,
        y: -0.14, // Fila trasera elevada (+0.32)
        h: 0.65,
        letter: "O",
        title: "OPORTUNIDADES",
        sub: "Educación Híbrida • Demanda Regional",
        badge: "EXTERNA POSITIVA",
        col: 0x0284c7
      },
      {
        x: -0.46,
        z: 0.42,
        y: -0.46, // Fila delantera baja
        h: 0.58,
        letter: "D",
        title: "DEBILIDADES",
        sub: "Silos y Fragmentación de Datos",
        badge: "INTERNA NEGATIVA",
        col: 0xf59e0b
      },
      {
        x: 0.46,
        z: 0.42,
        y: -0.46, // Fila delantera baja
        h: 0.58,
        letter: "A",
        title: "AMENAZAS",
        sub: "Ajuste Fiscal SPU • Salarios",
        badge: "EXTERNA NEGATIVA",
        col: 0xef4444
      }
    ];

    engine.anim21_quads = [];

    quadrants.forEach((q) => {
      const qGroup = new THREE.Group();
      qGroup.position.set(q.x, q.y, q.z);

      // Bloque de mármol Carrara biselado
      const block = new THREE.Mesh(
        new THREE.BoxGeometry(0.56, q.h, 0.56),
        engine.marbleMat(0xf8fafc, 0.22)
      );
      block.castShadow = true;
      block.receiveShadow = true;
      qGroup.add(block);

      // Marco superior con el color heráldico del cuadrante
      const border = new THREE.Mesh(
        new THREE.BoxGeometry(0.58, 0.025, 0.58),
        engine.brassMat(q.col)
      );
      border.position.y = q.h / 2 + 0.012;
      qGroup.add(border);

      // Gema brillante octaédrica
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.10, 1),
        new THREE.MeshStandardMaterial({
          color: q.col,
          emissive: q.col,
          emissiveIntensity: 0.65,
          roughness: 0.15,
          metalness: 0.8
        })
      );
      gem.position.y = q.h / 2 + 0.15;
      qGroup.add(gem);

      // Chapa técnica grabada en la cara frontal del cuadrante
      const plaque = engine.createEngravedPlaque(
        0.46,
        0.18,
        q.title,
        q.sub,
        [q.badge],
        { theme: "dark" }
      );
      plaque.position.set(0, 0, 0.29);
      qGroup.add(plaque);

      // Cartela superior compacta flotante
      const label = engine.createLabelSprite(
        q.title,
        q.badge,
        "#0f2d59",
        false,
        { x: 0.52 }
      );
      label.position.set(0, q.h / 2 + 0.32, 0);
      qGroup.add(label);

      fodaGroup.add(qGroup);
      engine.anim21_quads.push({ group: qGroup, gem });
    });

    // Separadores en cruz de latón pulido (Ejes de la Matriz)
    const crossX = new THREE.Mesh(
      new THREE.BoxGeometry(1.62, 0.03, 0.04),
      engine.brassMat(0xd4af37)
    );
    crossX.position.set(0, -0.42, 0);
    fodaGroup.add(crossX);

    const crossZ = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.03, 1.62),
      engine.brassMat(0xd4af37)
    );
    crossZ.position.set(0, -0.42, 0);
    fodaGroup.add(crossZ);

    // Placa monumental frontal de la matriz
    const plaqueFront = engine.createEngravedPlaque(
      0.88,
      0.24,
      "MATRIZ FODA SITUADA EN EL CURZAS",
      "Diagnóstico Estratégico Organizacional • Fuerzas y Desafíos",
      ["ANÁLISIS INSTITUCIONAL RIGUROSO"],
      { theme: "dark" }
    );
    plaqueFront.position.set(0, -0.68, 0.90);
    plaqueFront.rotation.x = -Math.PI * 0.12;
    fodaGroup.add(plaqueFront);

    // Rótulo superior institucional
    const headerTitle = engine.createLabelSprite(
      "DIAGNÓSTICO SITUADO: MATRIZ FODA",
      "Fortalezas, Oportunidades, Debilidades y Amenazas en el CURZAS",
      "#0f2d59",
      true,
      { x: 1.40 }
    );
    headerTitle.position.set(0, 1.05, 0);
    g.add(headerTitle);

    g.add(fodaGroup);
  },

  animate(engine, t) {
    if (engine.anim21_quads) {
      engine.anim21_quads.forEach((q, i) => {
        if (q.gem) {
          q.gem.rotation.y = t * (0.8 + i * 0.2);
          const p = 1.0 + Math.sin(t * 3 + i) * 0.10;
          q.gem.scale.set(p, p, p);
        }
      });
    }
  }
};
`;

const updatedBloque5 = b5.slice(0, pAnim21) + newAnim21Code + '\n' + b5.slice(pComment22);
fs.writeFileSync(bloque5Path, updatedBloque5, 'utf8');
console.log("Successfully updated anim_21 in bloque5.js!");

// 2. Update camera_config.js for anim_21
const camPath = 'js/objetos/camera_config.js';
let camContent = fs.readFileSync(camPath, 'utf8');
camContent = camContent.replace(
  /anim_21:\s*\{[^}]+\}/,
  'anim_21: { pos: [2.1, 2.2, 5.8], lookAt: [1.5, -0.25, 0] }'
);
fs.writeFileSync(camPath, camContent, 'utf8');
console.log("Successfully updated camera_config.js for anim_21!");


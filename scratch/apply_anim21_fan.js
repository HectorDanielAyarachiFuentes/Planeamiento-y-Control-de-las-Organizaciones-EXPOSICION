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

const pComment22 = b5.lastIndexOf('// ──', pAnim22);

const newAnim21Code = `window.Presentation3D_Objects["anim_21"] = {
  build(engine, g) {
    // Basamento monumental amplio de museo (radio 1.75)
    engine.createMuseumPlinth(g, 1.75, 0.22, -1.22);

    const fodaGroup = new THREE.Group();
    fodaGroup.position.set(0, -0.15, 0);

    // Zócalo base circular de granito y bisel áureo
    const basePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.68, 1.72, 0.08, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.3)
    );
    basePlate.position.y = -0.85;
    fodaGroup.add(basePlate);

    const baseRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.70, 0.015, 16, 48),
      engine.brassMat(0xd4af37)
    );
    baseRim.rotation.x = Math.PI / 2;
    baseRim.position.y = -0.81;
    fodaGroup.add(baseRim);

    // Cuadrantes en disposición de anfiteatro abierto (Abanico FODA):
    // Cada cuadrante posee su propio carril visual horizontal independiente.
    // Ningún pedestal, placa o cartel se superpone con otro: visibilidad 100% directa y legible a primera vista.
    const quadrants = [
      {
        x: -0.88,
        z: -0.22,
        y: -0.24, // Fila trasera izquierda elevada
        rotY: 0.24, // Orientado hacia el centro de la escena
        h: 0.68,
        letter: "F",
        title: "FORTALEZAS",
        sub: "Arraigo Territorial • Docencia",
        badge: "INTERNA POSITIVA",
        col: 0x10b981
      },
      {
        x: -0.29,
        z: 0.24,
        y: -0.46, // Fila delantera izquierda
        rotY: 0.08,
        h: 0.58,
        letter: "D",
        title: "DEBILIDADES",
        sub: "Silos y Fragmentación de Datos",
        badge: "INTERNA NEGATIVA",
        col: 0xf59e0b
      },
      {
        x: 0.29,
        z: 0.24,
        y: -0.46, // Fila delantera derecha
        rotY: -0.08,
        h: 0.58,
        letter: "A",
        title: "AMENAZAS",
        sub: "Ajuste Fiscal SPU • Salarios",
        badge: "EXTERNA NEGATIVA",
        col: 0xef4444
      },
      {
        x: 0.88,
        z: -0.22,
        y: -0.24, // Fila trasera derecha elevada
        rotY: -0.24, // Orientado hacia el centro de la escena
        h: 0.68,
        letter: "O",
        title: "OPORTUNIDADES",
        sub: "Educación Híbrida • Demanda",
        badge: "EXTERNA POSITIVA",
        col: 0x0284c7
      }
    ];

    engine.anim21_quads = [];

    quadrants.forEach((q) => {
      const qGroup = new THREE.Group();
      qGroup.position.set(q.x, q.y, q.z);
      qGroup.rotation.y = q.rotY;

      // Zócalo inferior de caoba noble
      const baseChassis = engine.createMachinedChassis(0.52, 0.08, 0.52, { color: 0x2e1204 });
      baseChassis.position.y = -q.h / 2 + 0.04;
      qGroup.add(baseChassis);

      // Bloque fuste de mármol Carrara biselado
      const block = new THREE.Mesh(
        new THREE.BoxGeometry(0.48, q.h - 0.10, 0.48),
        engine.marbleMat(0xf8fafc, 0.22)
      );
      block.position.y = 0.02;
      block.castShadow = true;
      block.receiveShadow = true;
      qGroup.add(block);

      // Marco superior con el color heráldico del cuadrante
      const border = new THREE.Mesh(
        new THREE.BoxGeometry(0.50, 0.035, 0.50),
        engine.brassMat(q.col)
      );
      border.position.y = q.h / 2 - 0.02;
      qGroup.add(border);

      // Gema brillante octaédrica
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.09, 1),
        new THREE.MeshStandardMaterial({
          color: q.col,
          emissive: q.col,
          emissiveIntensity: 0.65,
          roughness: 0.15,
          metalness: 0.8
        })
      );
      gem.position.y = q.h / 2 + 0.12;
      qGroup.add(gem);

      // Chapa técnica grabada en la cara frontal del cuadrante (visibilidad 100% directa)
      const plaque = engine.createEngravedPlaque(
        0.44,
        0.18,
        q.title,
        q.sub,
        [q.badge],
        { theme: "dark" }
      );
      plaque.position.set(0, 0.02, 0.25);
      qGroup.add(plaque);

      // Cartela superior compacta flotante (proporcional y sin colisiones)
      const label = engine.createLabelSprite(
        q.title,
        q.badge,
        "#0f2d59",
        false,
        { x: 0.50 }
      );
      label.position.set(0, q.h / 2 + 0.28, 0);
      qGroup.add(label);

      fodaGroup.add(qGroup);
      engine.anim21_quads.push({ group: qGroup, gem });
    });

    // Enlaces de latón que articulan los ejes estratégicos FODA
    const axisMat = engine.brassMat(0xd4af37);
    const linkFront = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.58, 12),
      axisMat
    );
    linkFront.rotation.z = Math.PI / 2;
    linkFront.position.set(0, -0.46, 0.24);
    fodaGroup.add(linkFront);

    const linkLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.68, 12),
      axisMat
    );
    linkLeft.rotation.x = Math.PI / 4;
    linkLeft.position.set(-0.58, -0.35, 0.01);
    fodaGroup.add(linkLeft);

    const linkRight = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.68, 12),
      axisMat
    );
    linkRight.rotation.x = -Math.PI / 4;
    linkRight.position.set(0.58, -0.35, 0.01);
    fodaGroup.add(linkRight);

    // Placa monumental frontal de la matriz (orientada ergonómicamente hacia el espectador)
    const plaqueFront = engine.createEngravedPlaque(
      0.96,
      0.26,
      "MATRIZ FODA SITUADA EN EL CURZAS",
      "Diagnóstico Estratégico Organizacional • Fuerzas y Desafíos",
      ["ANÁLISIS INSTITUCIONAL RIGUROSO"],
      { theme: "dark" }
    );
    plaqueFront.position.set(0, -0.66, 0.96);
    plaqueFront.rotation.x = -Math.PI * 0.14;
    fodaGroup.add(plaqueFront);

    // Rótulo superior institucional
    const headerTitle = engine.createLabelSprite(
      "DIAGNÓSTICO SITUADO: MATRIZ FODA",
      "Fortalezas, Oportunidades, Debilidades y Amenazas en el CURZAS",
      "#0f2d59",
      true,
      { x: 1.45 }
    );
    headerTitle.position.set(0, 1.02, 0);
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
console.log("Applied amphitheater layout to anim_21 in bloque5.js!");

// 2. Update camera_config.js for anim_21
const camPath = 'js/objetos/camera_config.js';
let camContent = fs.readFileSync(camPath, 'utf8');
camContent = camContent.replace(
  /anim_21:\s*\{[^}]+\}/,
  'anim_21: { pos: [2.0, 1.7, 6.0], lookAt: [1.5, -0.15, 0] }'
);
fs.writeFileSync(camPath, camContent, 'utf8');
console.log("Updated camera_config.js for anim_21!");


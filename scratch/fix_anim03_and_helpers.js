const fs = require('fs');

// 1. Update helpers.js
let helpersContent = fs.readFileSync('js/objetos/helpers.js', 'utf8');
const oldHelperLine = '      depthTest: false,\n      depthWrite: false';
const oldHelperLineCRLF = '      depthTest: false,\r\n      depthWrite: false';
const newHelperLine = '      depthTest: opts?.depthTest !== undefined ? opts.depthTest : true,\n      depthWrite: false';
const newHelperLineCRLF = '      depthTest: opts?.depthTest !== undefined ? opts.depthTest : true,\r\n      depthWrite: false';

if (helpersContent.includes(oldHelperLineCRLF)) {
  helpersContent = helpersContent.replace(oldHelperLineCRLF, newHelperLineCRLF);
} else if (helpersContent.includes(oldHelperLine)) {
  helpersContent = helpersContent.replace(oldHelperLine, newHelperLine);
} else {
  console.error("Target depthTest line not found in helpers.js!");
  process.exit(1);
}
fs.writeFileSync('js/objetos/helpers.js', helpersContent, 'utf8');
console.log("Updated helpers.js with dynamic depthTest!");

// 2. Update bloque1.js anim_03
let bloque1Content = fs.readFileSync('js/objetos/bloque1.js', 'utf8');

const pAnim03Start = bloque1Content.indexOf('window.Presentation3D_Objects["anim_03"] = {');
const pAnim04Start = bloque1Content.indexOf('window.Presentation3D_Objects["anim_04"] = {');

if (pAnim03Start === -1 || pAnim04Start === -1) {
  console.error("anim_03 or anim_04 not found in bloque1.js!");
  process.exit(1);
}

// Find comment before anim_04
const pAnim04Comment = bloque1Content.lastIndexOf('// ──', pAnim04Start);

const newAnim03Code = `window.Presentation3D_Objects["anim_03"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.85, 0.22, -1.22);

    const foundationGroup = new THREE.Group();
    foundationGroup.position.set(0, -0.15, 0);

    // Escalinata de Cimientos en perspectiva diagonal progresiva:
    // Los 4 pilares avanzan de izquierda a derecha (X), de adelante hacia atrás (Z)
    // y de menor a mayor altura (h).
    // Ningún pilar tapa a otro y los carteles tienen separación total en pantalla.
    const items = [
      { x: -0.96, z: 0.24, h: 0.58, labelOffset: 0.24, title: "I. AUTONOMÍA", sub: "Art. 75 inc. 19 CN" },
      { x: -0.32, z: 0.08, h: 0.76, labelOffset: 0.26, title: "II. BUROCRACIA", sub: "Weberiana Profesional" },
      { x: 0.32, z: -0.08, h: 0.96, labelOffset: 0.28, title: "III. AUTONOMÍA VS NGP", sub: "Resguardo vs Mercado" },
      { x: 0.96, z: -0.24, h: 1.18, labelOffset: 0.30, title: "IV. ACCOUNTABILITY", sub: "Horizontal/Vertical/Social" }
    ];

    engine.anim03_blocks = [];

    items.forEach((item, idx) => {
      const blockGroup = new THREE.Group();
      blockGroup.position.set(item.x, -0.85 + item.h / 2, item.z);

      // Zócalo inferior de caoba noble
      const baseChassis = engine.createMachinedChassis(0.56, 0.08, 0.56, { color: 0x2e1204 });
      baseChassis.position.y = -item.h / 2 + 0.04;
      blockGroup.add(baseChassis);

      // Fuste cúbico de mármol Carrara veteado
      const blockMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.50, item.h - 0.12, 0.50),
        engine.marbleMat(0xfdfbf7, 0.28)
      );
      blockMesh.position.y = 0.02;
      blockMesh.castShadow = true;
      blockMesh.receiveShadow = true;
      blockGroup.add(blockMesh);

      // Chapa técnica grabada en la cara frontal del cimiento
      const plaque = engine.createEngravedPlaque(
        0.44,
        0.18,
        item.title,
        item.sub,
        [\`PILAR AVANCE 1 (\${idx + 1}/4)\`],
        { theme: "dark" }
      );
      plaque.position.set(0, 0.02, 0.26);
      blockGroup.add(plaque);

      // Tapa superior de latón moldurado
      const topCap = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.035, 0.52),
        engine.brassMat(0xd4af37)
      );
      topCap.position.y = item.h / 2 - 0.02;
      blockGroup.add(topCap);

      // Artefacto distintivo de ingeniería sobre la cima
      if (idx === 0) {
        // I: Brújula náutica / compás y pergamino
        const compass = new THREE.Mesh(
          new THREE.CylinderGeometry(0.11, 0.11, 0.028, 24),
          engine.goldMat(0xffd700)
        );
        compass.position.y = item.h / 2 + 0.03;
        blockGroup.add(compass);
      } else if (idx === 1) {
        // II: Aro armilar astronómico
        const ring = engine.createBrassArmillaryRing(0.12, 0.010);
        ring.position.y = item.h / 2 + 0.13;
        ring.rotation.x = Math.PI / 4;
        blockGroup.add(ring);
      } else if (idx === 2) {
        // III: Dial de precisión de diagnóstico
        const dial = engine.createGraduatedDial(0.10, {
          title: "PCO",
          sub: "AVANCE 1",
          divisions: 30,
          theme: "light"
        });
        dial.position.y = item.h / 2 + 0.03;
        blockGroup.add(dial);
      } else if (idx === 3) {
        // IV: Obelisco prismático de cristal óptico con luz cenital
        const prism = new THREE.Mesh(
          new THREE.ConeGeometry(0.10, 0.28, 4),
          engine.glassMat(0x38bdf8, { roughness: 0.05, opacity: 0.85 })
        );
        prism.position.y = item.h / 2 + 0.16;
        blockGroup.add(prism);

        const beaconLight = new THREE.PointLight(0x38bdf8, 0.8, 1.2);
        beaconLight.position.y = item.h / 2 + 0.16;
        blockGroup.add(beaconLight);
      }

      // Etiqueta flotante proporcionada con escala ajustada (ancho 0.58)
      const label = engine.createLabelSprite(
        item.title,
        item.sub,
        "#0f2d59",
        false,
        { x: 0.58 }
      );
      label.position.set(0, item.h / 2 + (item.labelOffset || 0.26), 0);
      blockGroup.add(label);

      foundationGroup.add(blockGroup);
      engine.anim03_blocks.push(blockGroup);
    });

    g.add(foundationGroup);
  },

  animate(engine, t) {
    if (engine.anim03_blocks) {
      engine.anim03_blocks.forEach((b, idx) => {
        b.rotation.y = Math.sin(t * 0.8 + idx * 0.7) * 0.03;
      });
    }
  }
};
`;

const updatedBloque1 = bloque1Content.slice(0, pAnim03Start) + newAnim03Code + '\n' + bloque1Content.slice(pAnim04Comment);
fs.writeFileSync('js/objetos/bloque1.js', updatedBloque1, 'utf8');
console.log("Updated bloque1.js anim_03!");

// 3. Update camera_config.js for anim_03
let camContent = fs.readFileSync('js/objetos/camera_config.js', 'utf8');
camContent = camContent.replace(
  /anim_03:\s*\{[^}]+\}/,
  'anim_03: { pos: [2.0, 1.5, 6.2], lookAt: [1.5, 0.0, 0] }'
);
fs.writeFileSync('js/objetos/camera_config.js', camContent, 'utf8');
console.log("Updated camera_config.js anim_03!");


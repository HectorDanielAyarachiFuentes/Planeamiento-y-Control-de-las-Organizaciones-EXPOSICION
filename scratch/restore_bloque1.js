const fs = require('fs');

const current = fs.readFileSync('js/objetos/bloque1.js', 'utf8');
const backup = fs.readFileSync('backup_objetos_3d/objetos/bloque1.js', 'utf8');

// 1. Textures & preamble from current (since we already enhanced them to Retina 2X and 16x anisotropy)
const pAnim01Current = current.indexOf('window.Presentation3D_Objects["anim_01"]');
const preamble = current.slice(0, pAnim01Current);

// 2. anim_01 from backup with Planeamiento y Control updates
const p01Backup = backup.indexOf('window.Presentation3D_Objects["anim_01"]');
const p02Backup = backup.indexOf('window.Presentation3D_Objects["anim_02"]');
let anim01Code = backup.slice(p01Backup, p02Backup);

anim01Code = anim01Code.replace(
  '"PROYECTO INTEGRAL DE TFG",\r\n      "CURZAS — Universidad Nacional del Comahue",',
  '"INFORME INTEGRAL DE PLANEAMIENTO",\r\n      "CURZAS — Universidad Nacional del Comahue",'
);
anim01Code = anim01Code.replace(
  '"PROYECTO INTEGRAL DE TFG",\n      "CURZAS — Universidad Nacional del Comahue",',
  '"INFORME INTEGRAL DE PLANEAMIENTO",\n      "CURZAS — Universidad Nacional del Comahue",'
);

// 3. anim_02 from backup with Hector Ayarachi updates and wide plaque (0.84)
const p03Backup = backup.indexOf('window.Presentation3D_Objects["anim_03"]');
let anim02Code = backup.slice(p02Backup, p03Backup);

anim02Code = anim02Code.replace(
  'const infoPlaque = engine.createEngravedPlaque(\r\n      0.80,',
  'const infoPlaque = engine.createEngravedPlaque(\r\n      0.84,'
);
anim02Code = anim02Code.replace(
  'const infoPlaque = engine.createEngravedPlaque(\n      0.80,',
  'const infoPlaque = engine.createEngravedPlaque(\n      0.84,'
);
anim02Code = anim02Code.replace(
  '["CURZAS", "UNIVERSIDAD NACIONAL DEL COMAHUE", "TFG 2026/2027"]',
  '["CURZAS", "UNIVERSIDAD NACIONAL DEL COMAHUE", "PLANEAMIENTO 2026"]'
);
anim02Code = anim02Code.replace('sub: "DEFENSA",', 'sub: "EXPOSICIÓN",');
anim02Code = anim02Code.replace(
  '"HÉCTOR DANIEL AYARACHI FUENTES",\r\n      "Tec. Sup. en RRHH • Legajo 8252 • CURZAS-UNCo",',
  '"HÉCTOR DANIEL AYARACHI FUENTES",\r\n      "Tec. Sup. en RRHH • Licenciatura en RRHH • CURZAS",'
);
anim02Code = anim02Code.replace(
  '"HÉCTOR DANIEL AYARACHI FUENTES",\n      "Tec. Sup. en RRHH • Legajo 8252 • CURZAS-UNCo",',
  '"HÉCTOR DANIEL AYARACHI FUENTES",\n      "Tec. Sup. en RRHH • Licenciatura en RRHH • CURZAS",'
);

// 4. anim_03 with stepped podium (shorter in front z=+0.36, taller in back z=-0.38)
const p04Backup = backup.indexOf('window.Presentation3D_Objects["anim_04"]');
let anim03Code = backup.slice(p03Backup, p04Backup);

// Update anim_03 to Planeamiento y Control 2026 items with stepped podium
const steppedAnim03 = `window.Presentation3D_Objects["anim_03"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.85, 0.22, -1.22);

    const foundationGroup = new THREE.Group();
    foundationGroup.position.set(0, -0.15, 0);

    // Gradas escalonadas de museo:
    // Los 2 pilares más bajos ADELANTE (z = +0.36), los 2 más altos ATRÁS (z = -0.38).
    // De esta manera las placas grabadas y carteles azules quedan 100% despejados y visibles en perspectiva
    const items = [
      { x: -0.55, z: 0.36, h: 0.58, labelOffset: 0.26, title: "I. AUTONOMÍA", sub: "Art. 75 inc. 19 CN" },
      { x: 0.55, z: 0.36, h: 0.74, labelOffset: 0.28, title: "II. BUROCRACIA", sub: "Weberiana Profesional" },
      { x: -0.55, z: -0.38, h: 1.02, labelOffset: 0.42, title: "III. AUTONOMÍA VS NGP", sub: "Resguardo vs Mercado" },
      { x: 0.55, z: -0.38, h: 1.22, labelOffset: 0.44, title: "IV. ACCOUNTABILITY", sub: "Horizontal/Vertical/Social" }
    ];

    engine.anim03_blocks = [];

    items.forEach((item, idx) => {
      const blockGroup = new THREE.Group();
      blockGroup.position.set(item.x, -0.85 + item.h / 2, item.z);

      // Zócalo inferior de caoba noble
      const baseChassis = engine.createMachinedChassis(0.66, 0.08, 0.66, { color: 0x2e1204 });
      baseChassis.position.y = -item.h / 2 + 0.04;
      blockGroup.add(baseChassis);

      // Fuste cúbico de mármol Carrara veteado
      const blockMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.60, item.h - 0.12, 0.60),
        engine.marbleMat(0xfdfbf7, 0.28)
      );
      blockMesh.position.y = 0.02;
      blockMesh.castShadow = true;
      blockMesh.receiveShadow = true;
      blockGroup.add(blockMesh);

      // Chapa técnica grabada en la cara frontal del cimiento
      const plaque = engine.createEngravedPlaque(
        0.52,
        0.20,
        item.title,
        item.sub,
        [\`PILAR AVANCE 1 (\${idx + 1}/4)\`],
        { theme: "dark" }
      );
      plaque.position.set(0, 0.02, 0.31);
      blockGroup.add(plaque);

      // Tapa superior de latón moldurado
      const topCap = new THREE.Mesh(
        new THREE.BoxGeometry(0.62, 0.035, 0.62),
        engine.brassMat(0xd4af37)
      );
      topCap.position.y = item.h / 2 - 0.02;
      blockGroup.add(topCap);

      // Artefacto distintivo de ingeniería sobre la cima
      if (idx === 0) {
        // I: Brújula náutica / compás y pergamino
        const compass = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 0.03, 24),
          engine.goldMat(0xffd700)
        );
        compass.position.y = item.h / 2 + 0.03;
        blockGroup.add(compass);
      } else if (idx === 1) {
        // II: Aro armilar astronómico
        const ring = engine.createBrassArmillaryRing(0.14, 0.012);
        ring.position.y = item.h / 2 + 0.15;
        ring.rotation.x = Math.PI / 4;
        blockGroup.add(ring);
      } else if (idx === 2) {
        // III: Dial de precisión de diagnóstico
        const dial = engine.createGraduatedDial(0.11, {
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
          new THREE.ConeGeometry(0.12, 0.32, 4),
          engine.glassMat(0x38bdf8, { roughness: 0.05, opacity: 0.85 })
        );
        prism.position.y = item.h / 2 + 0.18;
        blockGroup.add(prism);

        const beaconLight = new THREE.PointLight(0x38bdf8, 0.8, 1.2);
        beaconLight.position.y = item.h / 2 + 0.18;
        blockGroup.add(beaconLight);
      }

      // Etiqueta flotante con desfase vertical escalonado
      const label = engine.createLabelSprite(item.title, item.sub, "#0f2d59", false);
      label.position.set(0, item.h / 2 + (item.labelOffset || 0.30), 0);
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

// 5. anim_04 and anim_05 from current
const pAnim04Current = current.indexOf('window.Presentation3D_Objects["anim_04"]');
const anim04And05 = current.slice(pAnim04Current);

// Combine all 5 cleanly
const fullBloque1 = preamble + anim01Code + '\n' + anim02Code + '\n' + steppedAnim03 + '\n// ──────────────────────────────────────────────────────────────────────────\n// 4. SEGUNDA PARTE: MARCO TEÓRICO Y ANTECEDENTES (Díptico)\n// ──────────────────────────────────────────────────────────────────────────\n' + anim04And05;

fs.writeFileSync('js/objetos/bloque1.js', fullBloque1, 'utf8');
console.log('Successfully restored and updated all 5 sculptures in bloque1.js!');


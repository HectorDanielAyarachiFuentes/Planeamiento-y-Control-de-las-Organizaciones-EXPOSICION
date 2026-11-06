const fs = require('fs');
const https = require('https');
const vm = require('vm');

function fetch(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(d));
      r.on('error', rej);
    });
  });
}

async function testAnim21Full() {
  const threeCode = await fetch('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
  const sandbox = {
    console: console,
    Math: Math,
    parseFloat: parseFloat,
    parseInt: parseInt,
    Array: Array,
    Object: Object,
    String: String,
    window: {}
  };
  sandbox.window = sandbox;

  sandbox.document = {
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          width: 1024,
          height: 512,
          getContext: () => ({
            fillRect: () => {},
            strokeRect: () => {},
            clearRect: () => {},
            fill: () => {},
            stroke: () => {},
            beginPath: () => {},
            closePath: () => {},
            arc: () => {},
            moveTo: () => {},
            lineTo: () => {},
            quadraticCurveTo: () => {},
            bezierCurveTo: () => {},
            scale: () => {},
            rotate: () => {},
            translate: () => {},
            save: () => {},
            restore: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
            roundRect: () => {},
            fillText: () => {},
            measureText: () => ({ width: 120 })
          })
        };
      }
      return {};
    }
  };

  vm.createContext(sandbox);
  vm.runInContext(threeCode, sandbox);
  vm.runInContext(fs.readFileSync('js/objetos/materials.js', 'utf8'), sandbox);
  vm.runInContext(fs.readFileSync('js/objetos/helpers.js', 'utf8'), sandbox);

  const mockEngine = Object.assign({
    createProceduralTexture: () => new sandbox.THREE.Texture()
  }, sandbox.Scene3DMaterials, sandbox.Scene3DHelpers);
  sandbox.mockEngine = mockEngine;

  const candidateCode = `
    const g = new THREE.Group();
    const engine = mockEngine;

    // Basamento monumental amplio de museo (radio 1.75)
    engine.createMuseumPlinth(g, 1.75, 0.22, -1.22);

    const fodaGroup = new THREE.Group();
    fodaGroup.position.set(0, -0.15, 0);

    // Zócalo base en semicírculo / gradas de anfiteatro
    const basePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.68, 1.72, 0.08, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.3)
    );
    basePlate.position.y = -0.85;
    fodaGroup.add(basePlate);

    // Borde de latón pulido del zócalo
    const baseRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.70, 0.015, 16, 48),
      engine.brassMat(0xd4af37)
    );
    baseRim.rotation.x = Math.PI / 2;
    baseRim.position.y = -0.81;
    fodaGroup.add(baseRim);

    // Cuadrantes en abanico abierto (Anfiteatro FODA):
    // Ningún cuadrante tapa a otro; los 4 tienen su propio carril visual horizontal
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

      // Marco superior con el color del cuadrante
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

      // Chapa técnica grabada en la cara frontal del cuadrante (completamente visible a primera vista)
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

      // Cartela superior compacta flotante
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

    // Enlaces de latón curvados que conectan el sistema FODA
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

    // Placa monumental frontal de la matriz (en el frente del zócalo, ángulo de lectura ergonómico)
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
    console.log("anim_21 fan built successfully! Children count:", g.children.length);
  `;

  vm.runInContext(candidateCode, sandbox);
}

testAnim21Full().catch(err => {
  console.error("Test error:", err);
  process.exit(1);
});


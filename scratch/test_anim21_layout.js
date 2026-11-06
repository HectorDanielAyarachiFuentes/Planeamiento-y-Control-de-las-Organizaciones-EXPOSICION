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

async function testAnim21() {
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

    engine.createMuseumPlinth(g, 1.65, 0.22, -1.22);

    const fodaGroup = new THREE.Group();
    fodaGroup.position.set(0, -0.15, 0);

    // Base monumental de dos niveles (grada delantera y terraza trasera)
    const baseBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.65, 0.10, 1.65),
      engine.graniteMat(0x0f172a)
    );
    baseBlock.position.y = -0.85;
    fodaGroup.add(baseBlock);

    // Terraza elevada para la fila trasera (Fortalezas y Oportunidades)
    const backTerrace = new THREE.Mesh(
      new THREE.BoxGeometry(1.58, 0.28, 0.78),
      engine.graniteMat(0x1e293b)
    );
    backTerrace.position.set(0, -0.66, -0.42);
    fodaGroup.add(backTerrace);

    const quadrants = [
      {
        x: -0.46,
        z: -0.42,
        y: -0.14, // Elevado: visible por encima de la fila delantera
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
        y: -0.14, // Elevado: visible por encima de la fila delantera
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
        y: -0.46, // Nivel frontal
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
        y: -0.46, // Nivel frontal
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

      // Bloque del cuadrante de mármol biselado
      const block = new THREE.Mesh(
        new THREE.BoxGeometry(0.56, q.h, 0.56),
        engine.marbleMat(0xf8fafc, 0.22)
      );
      block.castShadow = true;
      block.receiveShadow = true;
      qGroup.add(block);

      // Marco superior con el color del cuadrante
      const border = new THREE.Mesh(
        new THREE.BoxGeometry(0.58, 0.025, 0.58),
        engine.brassMat(q.col)
      );
      border.position.y = q.h / 2 + 0.012;
      qGroup.add(border);

      // Gema brillante con la letra del FODA
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
        0.48,
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
        { x: 0.54 }
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
    console.log("anim_21 successfully built! Children count:", g.children.length);
  `;

  vm.runInContext(candidateCode, sandbox);
}

testAnim21().catch(err => {
  console.error("Test error:", err);
  process.exit(1);
});


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

async function testAnim06() {
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
          width: 2048,
          height: 1024,
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

  const codeCandidate = `
    const g = new THREE.Group();
    const engine = mockEngine;

    // 1. Plinth
    engine.createMuseumPlinth(g, 1.95);

    // 1. Mar Argentino / Océano Atlántico Sur
    const oceanPlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.90, 1.92, 0.05, 64),
      engine.graniteMat(0x060c18, 0.25, 0.4)
    );
    oceanPlate.position.y = -1.11;
    g.add(oceanPlate);

    const oceanRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.92, 0.024, 16, 64),
      engine.brassMat(0xd4af37)
    );
    oceanRim.rotation.x = Math.PI / 2;
    oceanRim.position.y = -1.10;
    g.add(oceanRim);

    const seaWater = new THREE.Mesh(
      new THREE.CylinderGeometry(1.88, 1.88, 0.02, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        roughness: 0.12,
        metalness: 0.15,
        transparent: true,
        opacity: 0.75
      })
    );
    seaWater.position.y = -1.08;
    g.add(seaWater);

    // Cartela cartográfica técnica en latón grabado de alta definición
    const cartouche = engine.createEngravedPlaque(
      0.88,
      0.36,
      "PROVINCIA DE RÍO NEGRO",
      "Sede Central Viedma + 10 Nodos Territoriales (Res. CD 135/22)",
      ["CENTRO UNIVERSITARIO REGIONAL ZONA ATLÁNTICA", "CURZAS • UNCo"],
      { theme: "dark" }
    );
    cartouche.position.set(-0.95, -0.68, 0.95);
    cartouche.rotation.x = -Math.PI * 0.15;
    g.add(cartouche);

    // Rosa de los vientos
    const compassRose = engine.createGraduatedDial(0.22, {
      title: "N",
      sub: "SUR",
      divisions: 36,
      theme: "dark"
    });
    compassRose.rotation.x = -Math.PI / 2;
    compassRose.position.set(-1.18, -1.06, -0.70);
    g.add(compassRose);

    // 1.B. Territorio Continental Argentino
    const argShape = new THREE.Shape();
    argShape.moveTo(-0.54, 1.18);
    argShape.lineTo(-0.48, 1.32);  // Paso de Socompa / Susques (Jujuy Oeste)
    argShape.lineTo(-0.44, 1.45);  // Altiplano jujeño occidental
    argShape.lineTo(-0.40, 1.55);  // Pico norte: La Quiaca / Santa Catalina (Jujuy Norte)
    argShape.lineTo(-0.35, 1.52);  // Yavi / Límite Salta-Jujuy
    argShape.lineTo(-0.25, 1.42);  // Chaco Salteño / Río Bermejo
    argShape.lineTo(-0.10, 1.38);  // Límite Salta-Formosa sobre Río Pilcomayo
    argShape.lineTo(0.06, 1.43);   // Formosa central
    argShape.lineTo(0.18, 1.47);   // Clorinda / Confluencia Pilcomayo y Paraguay
    argShape.lineTo(0.16, 1.32);   // Formosa Capital / Río Paraguay
    argShape.lineTo(0.14, 1.16);   // Resistencia / Corrientes (Confluencia Paraná-Paraguay)
    argShape.lineTo(0.22, 1.22);   // Costa norte correntina hacia Ituzaingó
    argShape.lineTo(0.30, 1.32);   // Posadas / Inicio del brazo de Misiones
    argShape.lineTo(0.36, 1.44);   // Misiones sobre el Río Paraná (Eldorado)
    argShape.lineTo(0.40, 1.56);   // Cataratas del Iguazú / Puerto Iguazú (Extremo Norte de Misiones)
    argShape.lineTo(0.46, 1.44);   // Bernardo de Irigoyen (Extremo Oriental de Argentina)
    argShape.lineTo(0.38, 1.26);   // Límite este misionero sobre Río Uruguay
    argShape.lineTo(0.28, 1.08);   // Costa del Río Uruguay (Corrientes este)
    argShape.lineTo(0.24, 0.86);   // Entre Ríos este / Concordia
    argShape.lineTo(0.28, 0.68);   // Gualeguaychú y desembocadura
    argShape.lineTo(0.42, 0.55);   // Río de la Plata y Delta del Paraná
    argShape.lineTo(0.55, 0.22);   // Bahía Samborombón y Cabo San Antonio
    argShape.lineTo(0.40, -0.05);  // Costa bonaerense / Mar del Plata
    argShape.lineTo(0.18, -0.32);  // Bahía Blanca
    argShape.lineTo(0.36, -0.45);  // Golfo San Matías y Punta Bermeja (Río Negro)
    argShape.lineTo(0.28, -0.72);  // Península Valdés (Chubut)
    argShape.lineTo(0.15, -1.02);  // Golfo San Jorge (Comodoro Rivadavia)
    argShape.lineTo(0.08, -1.35);  // Ría de Puerto Deseado y San Julián
    argShape.lineTo(-0.02, -1.65); // Cabo Vírgenes y Estrecho de Magallanes
    argShape.lineTo(0.12, -1.78);  // Tierra del Fuego (Costa Atlántica)
    argShape.lineTo(-0.05, -1.90); // Canal Beagle / Ushuaia
    argShape.lineTo(-0.16, -1.78); // Límite internacional fueguino
    argShape.lineTo(-0.25, -1.45); // Cordillera patagónica austral (Santa Cruz)
    argShape.lineTo(-0.35, -0.95); // Cordillera de Chubut (Esquel / Los Alerces)
    argShape.lineTo(-0.42, -0.50); // Cordillera rionegrina (Bariloche / El Bolsón)
    argShape.lineTo(-0.40, -0.15); // Cordillera neuquina (San Martín / Chos Malal)
    argShape.lineTo(-0.48, 0.35);  // Cordillera de Cuyo (Mendoza / Aconcagua)
    argShape.lineTo(-0.52, 0.85);  // Cordillera sanjuanina y riojana
    argShape.closePath();

    const argExtrudeOpts = {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.010,
      bevelSegments: 1
    };
    const argGeo = new THREE.ExtrudeGeometry(argShape, argExtrudeOpts);
    const argMesh = new THREE.Mesh(argGeo, engine.marbleMat(0x2d3748));
    argMesh.rotation.x = -Math.PI / 2;
    argMesh.position.set(0.12, -1.06, 0.15);
    g.add(argMesh);

    // 1.C. Islas Malvinas
    const malvinasGroup = new THREE.Group();
    malvinasGroup.position.set(0.68, -1.05, 1.25);

    const malvinasPlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.25, 0.025, 32),
      engine.graniteMat(0x0a1424, 0.2, 0.4)
    );
    malvinasPlinth.position.y = -0.012;
    malvinasGroup.add(malvinasPlinth);

    const malvinasRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.245, 0.010, 12, 32),
      engine.brassMat(0xd4af37)
    );
    malvinasRim.rotation.x = Math.PI / 2;
    malvinasRim.position.y = 0.002;
    malvinasGroup.add(malvinasRim);

    const malvinasMat = engine.brassMat(0xeab308, 0.22, 0.85);

    const granMalvinaShape = new THREE.Shape();
    granMalvinaShape.moveTo(-0.11, 0.06);
    granMalvinaShape.lineTo(-0.04, 0.11);
    granMalvinaShape.lineTo(-0.02, 0.04);
    granMalvinaShape.lineTo(-0.03, -0.06);
    granMalvinaShape.lineTo(-0.08, -0.09);
    granMalvinaShape.lineTo(-0.12, -0.04);
    granMalvinaShape.closePath();

    const granMalvinaMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(granMalvinaShape, { depth: 0.045, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 2 }),
      malvinasMat
    );
    granMalvinaMesh.rotation.x = -Math.PI / 2;
    malvinasGroup.add(granMalvinaMesh);

    const soledadShape = new THREE.Shape();
    soledadShape.moveTo(0.01, 0.05);
    soledadShape.lineTo(0.07, 0.12);
    soledadShape.lineTo(0.12, 0.07);
    soledadShape.lineTo(0.11, -0.01);
    soledadShape.lineTo(0.06, -0.02);
    soledadShape.lineTo(0.10, -0.09);
    soledadShape.lineTo(0.03, -0.10);
    soledadShape.lineTo(0.02, -0.03);
    soledadShape.closePath();

    const soledadMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(soledadShape, { depth: 0.045, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 2 }),
      malvinasMat
    );
    soledadMesh.rotation.x = -Math.PI / 2;
    malvinasGroup.add(soledadMesh);

    const malvinasLabel = engine.createLabelSprite(
      "ISLAS MALVINAS",
      "51°45'S 59°00'O • Soberanía Arg.",
      { theme: "dark", fontSize: 24, fontScale: 1.0 }
    );
    malvinasLabel.position.set(0, 0.28, 0);
    malvinasGroup.add(malvinasLabel);

    g.add(malvinasGroup);

    // 1.D. Sector Antártico Argentino ("Porción de pizza")
    const antartidaGroup = new THREE.Group();
    antartidaGroup.position.set(0.98, -1.05, 0.22);
    antartidaGroup.rotation.y = -0.18;

    const wedgeShape = new THREE.Shape();
    wedgeShape.moveTo(0, -0.46);
    wedgeShape.lineTo(-0.25, 0.32);
    wedgeShape.quadraticCurveTo(0, 0.44, 0.25, 0.32);
    wedgeShape.lineTo(0, -0.46);
    wedgeShape.closePath();

    const wedgeGeo = new THREE.ExtrudeGeometry(wedgeShape, {
      depth: 0.035,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 2
    });
    const wedgeBaseMesh = new THREE.Mesh(wedgeGeo, engine.graniteMat(0x0c1e36, 0.18, 0.5));
    wedgeBaseMesh.rotation.x = -Math.PI / 2;
    antartidaGroup.add(wedgeBaseMesh);

    const wedgeLineGeo = new THREE.BufferGeometry().setFromPoints(wedgeShape.getPoints(36));
    const wedgeLineMat = new THREE.LineBasicMaterial({ color: 0xd4af37, linewidth: 2 });
    const wedgeFrame = new THREE.Line(wedgeLineGeo, wedgeLineMat);
    wedgeFrame.rotation.x = -Math.PI / 2;
    wedgeFrame.position.y = 0.045;
    antartidaGroup.add(wedgeFrame);

    const southPoleMarker = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.022, 0.04, 16),
      engine.brassMat(0xd4af37)
    );
    southPoleMarker.position.set(0, 0.055, 0.46);
    antartidaGroup.add(southPoleMarker);

    const southPoleOrb = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.1, metalness: 0.9, emissive: 0xb45309, emissiveIntensity: 0.4 })
    );
    southPoleOrb.position.set(0, 0.085, 0.46);
    antartidaGroup.add(southPoleOrb);

    const peninsulaShape = new THREE.Shape();
    peninsulaShape.moveTo(-0.03, -0.18);
    peninsulaShape.lineTo(-0.08, 0.02);
    peninsulaShape.lineTo(-0.12, 0.18);
    peninsulaShape.lineTo(-0.09, 0.28);
    peninsulaShape.lineTo(-0.06, 0.24);
    peninsulaShape.lineTo(-0.05, 0.14);
    peninsulaShape.lineTo(-0.02, 0.02);
    peninsulaShape.lineTo(0.05, -0.10);
    peninsulaShape.lineTo(0.02, -0.18);
    peninsulaShape.closePath();

    const peninsulaGeo = new THREE.ExtrudeGeometry(peninsulaShape, {
      depth: 0.045,
      bevelEnabled: true,
      bevelThickness: 0.010,
      bevelSize: 0.008,
      bevelSegments: 2
    });
    const peninsulaMesh = new THREE.Mesh(
      peninsulaGeo,
      new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.22,
        metalness: 0.15,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.12
      })
    );
    peninsulaMesh.rotation.x = -Math.PI / 2;
    peninsulaMesh.position.y = 0.038;
    antartidaGroup.add(peninsulaMesh);

    const antartidaLabel = engine.createLabelSprite(
      "ANTÁRTIDA ARGENTINA",
      "Sector 25°O - 74°O • Polo Sur (Ley 26.653)",
      { theme: "dark", fontSize: 24, fontScale: 1.05 }
    );
    antartidaLabel.position.set(0, 0.36, -0.05);
    antartidaGroup.add(antartidaLabel);

    g.add(antartidaGroup);

    console.log("anim_06 candidate built successfully! Children count:", g.children.length);
  `;

  vm.runInContext(codeCandidate, sandbox);
}

testAnim06().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});

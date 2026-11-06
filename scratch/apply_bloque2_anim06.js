const fs = require('fs');

const filePath = 'js/objetos/bloque2.js';
let content = fs.readFileSync(filePath, 'utf8');

const target = `    // 1.B. Territorio Continental Argentino en Relieve Escultórico
    const argShape = new THREE.Shape();
    argShape.moveTo(-0.45, 1.35);  // Norte: La Quiaca (Jujuy)
    argShape.lineTo(0.20, 1.42);   // Iguazú (Misiones)
    argShape.lineTo(0.35, 1.25);   // Meseta misionera
    argShape.lineTo(0.25, 0.90);   // Corrientes y Entre Ríos
    argShape.lineTo(0.42, 0.55);   // Río de la Plata y Delta
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
    argShape.lineTo(-0.58, 1.20);  // Puna catamarqueña y salteña
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
    malvinasGroup.position.set(0.55, -1.05, 1.15);

    const soledadShape = new THREE.Shape();
    soledadShape.moveTo(0.02, 0.04);
    soledadShape.lineTo(0.06, 0.08);
    soledadShape.lineTo(0.09, 0.05);
    soledadShape.lineTo(0.08, -0.04);
    soledadShape.lineTo(0.03, -0.06);
    soledadShape.closePath();

    const soledadMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(soledadShape, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.005, bevelSegments: 2 }),
      engine.marbleMat(0xfdfbf7)
    );
    soledadMesh.rotation.x = -Math.PI / 2;
    malvinasGroup.add(soledadMesh);

    const granMalvinaShape = new THREE.Shape();
    granMalvinaShape.moveTo(-0.08, 0.03);
    granMalvinaShape.lineTo(-0.04, 0.07);
    granMalvinaShape.lineTo(-0.02, 0.02);
    granMalvinaShape.lineTo(-0.04, -0.05);
    granMalvinaShape.lineTo(-0.07, -0.04);
    granMalvinaShape.closePath();

    const granMalvinaMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(granMalvinaShape, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.005, bevelSegments: 2 }),
      engine.marbleMat(0xfdfbf7)
    );
    granMalvinaMesh.rotation.x = -Math.PI / 2;
    malvinasGroup.add(granMalvinaMesh);

    g.add(malvinasGroup);`;

const replacement = `    // 1.B. Territorio Continental Argentino en Relieve Escultórico Bicontinental (Ley 26.653)
    const argShape = new THREE.Shape();
    // Inicia en Puna de Atacama / Límite Paso San Francisco (Catamarca / Salta)
    argShape.moveTo(-0.54, 1.18);
    argShape.lineTo(-0.48, 1.32);  // Paso de Socompa / Susques (Jujuy Oeste)
    argShape.lineTo(-0.44, 1.45);  // Altiplano jujeño occidental
    // Pico norte septentrional: La Quiaca / Santa Catalina (Jujuy Norte)
    argShape.lineTo(-0.40, 1.55);
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
    // Cataratas del Iguazú / Puerto Iguazú (Extremo Norte de Misiones)
    argShape.lineTo(0.40, 1.56);
    // Bernardo de Irigoyen (Extremo Oriental de Argentina)
    argShape.lineTo(0.46, 1.44);
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

    // 1.C. Islas Malvinas en Medallón Cartográfico Náutico (Ley 26.653)
    const malvinasGroup = new THREE.Group();
    malvinasGroup.position.set(0.68, -1.05, 1.25);

    // Medallón base de zócalo oceánico con bisel de latón
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

    // Relieve escultórico en alto contraste de latón / bronce noble
    const malvinasMat = engine.brassMat(0xeab308, 0.22, 0.85);

    // Isla Gran Malvina (Oeste)
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

    // Isla Soledad (Este, con Seno Choiseul y Península Lafonia)
    const soledadShape = new THREE.Shape();
    soledadShape.moveTo(0.01, 0.05);
    soledadShape.lineTo(0.07, 0.12);
    soledadShape.lineTo(0.12, 0.07);
    soledadShape.lineTo(0.11, -0.01);
    soledadShape.lineTo(0.06, -0.02); // Seno Choiseul
    soledadShape.lineTo(0.10, -0.09); // Península Lafonia
    soledadShape.lineTo(0.03, -0.10);
    soledadShape.lineTo(0.02, -0.03);
    soledadShape.closePath();

    const soledadMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(soledadShape, { depth: 0.045, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 2 }),
      malvinasMat
    );
    soledadMesh.rotation.x = -Math.PI / 2;
    malvinasGroup.add(soledadMesh);

    // Etiqueta flotante Retina de alta definición para Islas Malvinas
    const malvinasLabel = engine.createLabelSprite(
      "ISLAS MALVINAS",
      "51°45'S 59°00'O • Soberanía Arg.",
      { theme: "dark", fontSize: 24, fontScale: 1.0 }
    );
    malvinasLabel.position.set(0, 0.28, 0);
    malvinasGroup.add(malvinasLabel);

    g.add(malvinasGroup);

    // 1.D. Sector Antártico Argentino ("Porción de Pizza" Polar Bicontinental • Ley 26.653)
    // Delimitado por Meridianos 25°O y 74°O, Paralelo 60°S y Polo Sur Geográfico (90°S)
    const antartidaGroup = new THREE.Group();
    antartidaGroup.position.set(0.98, -1.05, 0.22);
    antartidaGroup.rotation.y = -0.18; // Orientación diagonal hacia la cámara

    // Cuña polar ("Porción de pizza")
    const wedgeShape = new THREE.Shape();
    wedgeShape.moveTo(0, -0.46);
    wedgeShape.lineTo(-0.25, 0.32);
    wedgeShape.quadraticCurveTo(0, 0.44, 0.25, 0.32);
    wedgeShape.lineTo(0, -0.46);
    wedgeShape.closePath();

    // Placa base de la cuña en pizarra polar profunda
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

    // Marco perimetral dorado de la cuña polar
    const wedgeLineGeo = new THREE.BufferGeometry().setFromPoints(wedgeShape.getPoints(36));
    const wedgeLineMat = new THREE.LineBasicMaterial({ color: 0xd4af37, linewidth: 2 });
    const wedgeFrame = new THREE.Line(wedgeLineGeo, wedgeLineMat);
    wedgeFrame.rotation.x = -Math.PI / 2;
    wedgeFrame.position.y = 0.045;
    antartidaGroup.add(wedgeFrame);

    // Polo Sur Geográfico: hito con pedestal y esfera dorada
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

    // Península Antártica (Tierra de San Martín) en relieve escultórico blanco hielo
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

    // Cartela / Etiqueta flotante de alta definición del Sector Antártico
    const antartidaLabel = engine.createLabelSprite(
      "ANTÁRTIDA ARGENTINA",
      "Sector 25°O - 74°O • Polo Sur (Ley 26.653)",
      { theme: "dark", fontSize: 24, fontScale: 1.05 }
    );
    antartidaLabel.position.set(0, 0.36, -0.05);
    antartidaGroup.add(antartidaLabel);

    g.add(antartidaGroup);`;

// Normalize line endings to test match
const normContent = content.replace(/\r\n/g, '\n');
const normTarget = target.replace(/\r\n/g, '\n');
const normReplacement = replacement.replace(/\r\n/g, '\n');

if (!normContent.includes(normTarget)) {
  console.error("Target NOT found in js/objetos/bloque2.js!");
  process.exit(1);
}

// Perform replacement while preserving CRLF
const updatedNorm = normContent.replace(normTarget, normReplacement);
const updatedCRLF = updatedNorm.replace(/\n/g, '\r\n');

fs.writeFileSync(filePath, updatedCRLF, 'utf8');
console.log("Successfully updated anim_06 in js/objetos/bloque2.js!");


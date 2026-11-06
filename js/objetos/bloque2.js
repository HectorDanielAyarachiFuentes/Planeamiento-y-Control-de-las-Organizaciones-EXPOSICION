/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE II: ESCULTURAS 6 A 10
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente de la Sección 2 (Tiempo 1):
 * 6. anim_06: Maqueta Geodésica de la República Argentina y Río Negro (Conservada Oficial)
 * 7. anim_07: Red de Aulas Híbridas y Terminales Conectadas (Res. CD-CURZA N° 196/2022)
 * 8. anim_08: Prisma de Ruptura y Refracción Epistemológica (Wainerman & Sautu, 2011)
 * 9. anim_09: Balanza Dual de Tensión Normativa (Art. 75 Cesantía vs. Art. 76 Capacitación)
 * 10. anim_10: Pentágono Orbital de Factibilidad (Núcleo Pregunta y 5 Sellos de Viabilidad)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 6. EL CURZAS EN EL TERRITORIO: Maqueta Geodésica de Argentina y Río Negro
//    (Mapas continentales, Malvinas, Antártida y alto relieve de Río Negro)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_06"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.95);

    // 1. Mar Argentino / Océano Atlántico Sur (Bandeja elíptica de granito negro y cristal)
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

    // Rosa de los vientos / Dial de orientación geodésica
    const compassRose = engine.createGraduatedDial(0.22, {
      title: "N",
      sub: "SUR",
      divisions: 36,
      theme: "dark"
    });
    compassRose.rotation.x = -Math.PI / 2;
    compassRose.position.set(-1.18, -1.06, -0.70);
    g.add(compassRose);

    // 1.B. Territorio Continental Argentino en Relieve Escultórico Bicontinental (Ley 26.653)
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

    g.add(antartidaGroup);

    // 2. PROVINCIA DE RÍO NEGRO EN ALTO RELIEVE DE LATÓN DORADO
    const rnShape = new THREE.Shape();
    rnShape.moveTo(-0.26, -0.12);
    rnShape.lineTo(0.08, -0.14);
    rnShape.lineTo(0.28, -0.18);
    rnShape.lineTo(0.36, -0.25);
    rnShape.lineTo(0.25, -0.33);
    rnShape.lineTo(0.23, -0.42);
    rnShape.lineTo(-0.36, -0.42);
    rnShape.lineTo(-0.38, -0.38);
    rnShape.lineTo(-0.34, -0.28);
    rnShape.lineTo(-0.24, -0.19);
    rnShape.closePath();

    const rnGeo = new THREE.ExtrudeGeometry(rnShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.015, bevelSegments: 1 });
    const rnMesh = new THREE.Mesh(rnGeo, engine.brassMat(0xd4af37));
    rnMesh.rotation.x = -Math.PI / 2;
    rnMesh.position.set(0, -1.00, 0);
    g.add(rnMesh);

    // 3. SEDES DEL CURZAS: Viedma y los 10 Nodos Territoriales (Res. CD N° 135/2022)
    engine.sedes06 = [
      { id: "viedma", nombre: "VIEDMA", subtitulo: "Sede Central Académica", tipo: "Sede Cabecera", x: 0.36, z: 0.25, isCentral: true, colorGem: 0xffd700 },
      { id: "san_antonio", nombre: "SAN ANTONIO OESTE", subtitulo: "Costa Atlántica / Golfo San Matías", tipo: "Nodo Territorial", x: 0.23, z: 0.28, isCentral: false, colorGem: 0x38bdf8 },
      { id: "sierra_grande", nombre: "SIERRA GRANDE", subtitulo: "Costa Atlántica Sur", tipo: "Nodo Territorial", x: 0.24, z: 0.40, isCentral: false, colorGem: 0x38bdf8 },
      { id: "conesa", nombre: "GENERAL CONESA", subtitulo: "Valle Conesa / Nexo Vial", tipo: "Nodo Territorial", x: 0.25, z: 0.20, isCentral: false, colorGem: 0x38bdf8 },
      { id: "lamarque", nombre: "LAMARQUE", subtitulo: "Valle Medio / Isla Choele", tipo: "Nodo Territorial", x: 0.10, z: 0.16, isCentral: false, colorGem: 0x38bdf8 },
      { id: "valcheta", nombre: "VALCHETA", subtitulo: "Portal Línea Sur", tipo: "Nodo Territorial", x: 0.08, z: 0.32, isCentral: false, colorGem: 0x38bdf8 },
      { id: "ramos_mexia", nombre: "RAMOS MEXÍA", subtitulo: "Meseta Central / RN 23", tipo: "Nodo Territorial", x: -0.02, z: 0.30, isCentral: false, colorGem: 0x38bdf8 },
      { id: "sierra_colorada", nombre: "SIERRA COLORADA", subtitulo: "Centro Geográfico Provincial", tipo: "Nodo Territorial", x: -0.10, z: 0.30, isCentral: false, colorGem: 0x38bdf8 },
      { id: "los_menucos", nombre: "LOS MENUCOS", subtitulo: "Región Sur Central / RP 8", tipo: "Nodo Territorial", x: -0.18, z: 0.30, isCentral: false, colorGem: 0x38bdf8 },
      { id: "maquinchao", nombre: "MAQUINCHAO", subtitulo: "Línea Sur Centro-Oeste", tipo: "Nodo Territorial", x: -0.26, z: 0.31, isCentral: false, colorGem: 0x38bdf8 },
      { id: "comallo", nombre: "COMALLO", subtitulo: "Línea Sur Pre-cordillera", tipo: "Nodo Territorial", x: -0.33, z: 0.30, isCentral: false, colorGem: 0x38bdf8 }
    ];

    engine.nodeGems06 = [];
    engine.nodeArcs06 = [];
    const viedmaPos = new THREE.Vector3(0.36, -0.56, 0.25);

    // Luz cálida de Sede Viedma
    const viedmaLight = new THREE.PointLight(0xffd700, 1.3, 1.8);
    viedmaLight.position.set(0.36, -0.48, 0.25);
    g.add(viedmaLight);

    // Luz dinámica de escaneo radar (1 sola luz que viaja entre nodos, evitando recompilar shaders)
    const radarPingLight = new THREE.PointLight(0x38bdf8, 0.9, 1.2);
    radarPingLight.position.set(0.36, -0.68, 0.25);
    g.add(radarPingLight);
    engine.anim06_radarLight = radarPingLight;

    engine.sedes06.forEach((sede) => {
      const pinGroup = new THREE.Group();
      if (sede.isCentral) {
        // Obelisco Viedma
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.065, 0.42, 24), engine.marbleMat(0xffffff));
        col.position.y = -0.72;
        pinGroup.add(col);

        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 20, 20),
          new THREE.MeshStandardMaterial({
            color: 0xffd700,
            roughness: 0.08,
            metalness: 0.35,
            emissive: 0xb45309,
            emissiveIntensity: 0.35,
            transparent: true,
            opacity: 0.90
          })
        );
        orb.position.y = -0.48;
        pinGroup.add(orb);
        engine.nodeGems06.push({ mesh: orb, sede });
      } else {
        // Balizas Nodos
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.16, 12), engine.brassMat());
        mast.position.y = -0.80;
        pinGroup.add(mast);

        const gem = new THREE.Mesh(
          new THREE.SphereGeometry(0.026, 16, 16),
          new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x0284c7,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.1
          })
        );
        gem.position.y = -0.70;
        pinGroup.add(gem);
        engine.nodeGems06.push({ mesh: gem, sede });

        // Arco de transmisión
        const nodeTarget = new THREE.Vector3(sede.x, -0.70, sede.z);
        const dist = viedmaPos.distanceTo(nodeTarget);
        const mid = new THREE.Vector3().addVectors(viedmaPos, nodeTarget).multiplyScalar(0.5);
        mid.y = -0.52 + dist * 0.55;

        const curve = new THREE.QuadraticBezierCurve3(viedmaPos, mid, nodeTarget);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 24, 0.0032, 6, false),
          new THREE.MeshStandardMaterial({ color: 0xe6b800, roughness: 0.2, metalness: 0.8, emissive: 0x996515, emissiveIntensity: 0.15, transparent: true, opacity: 0.75 })
        );
        g.add(tube);

        const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.012, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfffad0 }));
        pulse.position.copy(nodeTarget);
        g.add(pulse);

        engine.nodeArcs06.push({ mesh: tube, curve, pulse, target: nodeTarget });
      }

      pinGroup.position.set(sede.x, 0, sede.z);
      g.add(pinGroup);
    });

    const activeHalo = new THREE.Mesh(
      new THREE.RingGeometry(0.025, 0.048, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
    );
    activeHalo.rotation.x = -Math.PI / 2;
    activeHalo.position.set(0.36, -0.865, 0.25);
    g.add(activeHalo);
    engine.nodeActiveHalo06 = activeHalo;
  },

  animate(engine, t) {
    if (engine.sedes06 && engine.sedes06.length > 0) {
      const cycleDuration = 3.0;
      const activeIdx = Math.floor(t / cycleDuration) % engine.sedes06.length;

      if (activeIdx !== engine.activeNodeIndex06) {
        engine.activeNodeIndex06 = activeIdx;
        const activeNode = engine.sedes06[activeIdx];
        if (window.updateNodeHUD) {
          window.updateNodeHUD(activeNode);
        }
      }

      const activeNode = engine.sedes06[activeIdx];
      if (engine.nodeActiveHalo06) {
        engine.nodeActiveHalo06.position.set(activeNode.x, -0.865, activeNode.z);
        const s = 1.0 + Math.sin(t * 5) * 0.22;
        engine.nodeActiveHalo06.scale.set(s, s, s);
      }

      if (engine.anim06_radarLight) {
        engine.anim06_radarLight.position.set(activeNode.x, -0.68, activeNode.z);
        engine.anim06_radarLight.color.setHex(activeNode.isCentral ? 0xffd700 : 0x38bdf8);
        engine.anim06_radarLight.intensity = 0.85 + Math.sin(t * 5) * 0.3;
      }

      if (engine.nodeGems06) {
        engine.nodeGems06.forEach((item, idx) => {
          if (idx === activeIdx) {
            item.mesh.scale.set(1.35, 1.35, 1.35);
          } else {
            item.mesh.scale.set(1.0, 1.0, 1.0);
          }
        });
      }

      if (engine.nodeArcs06) {
        engine.nodeArcs06.forEach((item, arcIdx) => {
          const prog = (t * 0.45 + arcIdx * 0.10) % 1.0;
          if (item.curve && item.pulse) {
            item.pulse.position.copy(item.curve.getPoint(prog));
          }
        });
      }
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 7. DOCENCIA HÍBRIDA: Red Territorial de los 10 Nodos Regionales
//    (Res. CD N° 135/2022 y Res. CD-CURZA N° 196/2022 • Cogestión Municipal)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_07"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.40);

    const netGroup = new THREE.Group();
    netGroup.position.set(0, -0.15, 0);

    // Servidor / Terminal Central Sede Viedma (Esbelta columna clásica y esfera Moodle)
    const centralCol = engine.createClassicalColumn(0.88, 0.085, 0xd4af37, true);
    centralCol.position.set(0, -0.44, 0);
    netGroup.add(centralCol);

    // Chapa técnica grabada en la base del servidor central
    const plaqueNet = engine.createEngravedPlaque(
      0.78,
      0.26,
      "RED DE AULAS HÍBRIDAS",
      "Sede Central Viedma • 10 Nodos Conectados (Res. CD 196/22)",
      ["TELECOMUNICACIONES CURZAS"],
      { theme: "dark" }
    );
    plaqueNet.position.set(0, -0.88, 0.42);
    g.add(plaqueNet);

    // Fino aro armilar orbital en el remate
    const centralRing = engine.createBrassArmillaryRing(0.24, 0.008);
    centralRing.position.set(0, 0.18, 0);
    netGroup.add(centralRing);
    engine.anim07_centralRing = centralRing;

    // Dial de sincronismo y latencia de telecomunicaciones en el servidor
    const syncDial = engine.createGraduatedDial(0.12, {
      title: "SYNC",
      sub: "100%",
      divisions: 24,
      isPercentage: true,
      theme: "dark"
    });
    syncDial.position.set(0, 0.38, 0);
    syncDial.rotation.x = Math.PI / 2;
    netGroup.add(syncDial);

    // Núcleo holográfico luminoso del servidor Moodle / Videoconferencias
    const serverGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 20, 20),
      new THREE.MeshStandardMaterial({
        color: 0xffd700,
        emissive: 0xd97706,
        emissiveIntensity: 0.45,
        roughness: 0.10,
        metalness: 0.25,
        transparent: true,
        opacity: 0.92
      })
    );
    serverGlobe.position.set(0, 0.18, 0);
    netGroup.add(serverGlobe);

    const centralLight = new THREE.PointLight(0xffd700, 1.4, 2.0);
    centralLight.position.set(0, 0.18, 0);
    netGroup.add(centralLight);

    // 1 sola luz dinámica de barrido de radar (elimina el overhead de 10 luces fijas)
    const radarSweepLight = new THREE.PointLight(0x38bdf8, 1.1, 1.5);
    radarSweepLight.position.set(1.15, -0.27, 0);
    netGroup.add(radarSweepLight);
    engine.anim07_sweepLight = radarSweepLight;

    // ÚNICA Cartela Maestra Superior (despejada, limpia y sin sobrecarga)
    const labelMaster = engine.createLabelSprite(
      "RED TERRITORIAL DE NODOS REGIONALES",
      "Sede Central Viedma • 10 Nodos Conectados (Res. CD 135/22 y 196/22)",
      "#0f2d59",
      true
    );
    labelMaster.position.set(0, 1.15, 0);
    g.add(labelMaster);

    // Los 10 Nodos Territoriales oficiales (Res. CD N° 135/2022)
    engine.nodos07 = [
      { id: "los_menucos", nombre: "LOS MENUCOS", subtitulo: "Región Sur Central", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "sierra_colorada", nombre: "SIERRA COLORADA", subtitulo: "Centro Geográfico", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "valcheta", nombre: "VALCHETA", subtitulo: "Portal Línea Sur", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "ramos_mexia", nombre: "RAMOS MEXÍA", subtitulo: "Meseta de Somuncura", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "san_antonio", nombre: "SAN ANTONIO OESTE", subtitulo: "Costa Atlántica", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "conesa", nombre: "GENERAL CONESA", subtitulo: "Valle Conesa / Nexo Vial", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "lamarque", nombre: "LAMARQUE", subtitulo: "Valle Medio", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "maquinchao", nombre: "MAQUINCHAO", subtitulo: "Línea Sur Centro-Oeste", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "comallo", nombre: "COMALLO", subtitulo: "Línea Sur Pre-cordillera", tipo: "Nodo Territorial", col: 0x38bdf8 },
      { id: "sierra_grande", nombre: "SIERRA GRANDE", subtitulo: "Costa Atlántica Sur", tipo: "Nodo Territorial", col: 0x38bdf8 }
    ];

    engine.anim07_lasers = [];
    engine.anim07_termBeacons = [];
    const rRing = 1.15;

    engine.nodos07.forEach((nodo, idx) => {
      const angle = (idx / engine.nodos07.length) * Math.PI * 2;
      const x = Math.cos(angle) * rRing;
      const z = Math.sin(angle) * rRing;

      // Baliza esbelta de aula híbrida: mástil de latón pulido con gema de cristal
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(x, -0.65, z);

      // Micro-base de latón
      const pinBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.045, 0.08, 16),
        engine.brassMat(0xd4af37)
      );
      pinBase.position.y = 0.04;
      nodeGroup.add(pinBase);

      // Mástil delgado
      const pinMast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.007, 0.007, 0.28, 12),
        engine.brassMat(0xffd700)
      );
      pinMast.position.y = 0.22;
      nodeGroup.add(pinMast);

      // Gema cristalina luminosa de la terminal con emisión intrínseca
      const beaconOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.032, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.5,
          roughness: 0.15,
          metalness: 0.1
        })
      );
      beaconOrb.position.set(0, 0.38, 0);
      nodeGroup.add(beaconOrb);

      const targetWorldY = -0.65 + 0.38; // -0.27
      engine.anim07_termBeacons.push({ mesh: beaconOrb, node: nodo, x, z });

      netGroup.add(nodeGroup);

      // Fino rayo de fibra óptica de transmisión sincrónica
      const lineCurve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0.18, 0),
        new THREE.Vector3(x, targetWorldY, z)
      );
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(lineCurve, 20, 0.0028, 6, false),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
      );
      netGroup.add(tube);

      const pulseBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.010, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
      );
      pulseBall.position.copy(lineCurve.v1);
      netGroup.add(pulseBall);

      engine.anim07_lasers.push({ tube, curve: lineCurve, pulse: pulseBall });
    });

    // Halo fino de radar de escaneo activo
    const radarRing = new THREE.Mesh(
      new THREE.RingGeometry(0.035, 0.055, 24),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
    );
    radarRing.rotation.x = -Math.PI / 2;
    radarRing.position.set(rRing, -0.27, 0);
    netGroup.add(radarRing);
    engine.anim07_radarRing = radarRing;

    g.add(netGroup);
  },

  animate(engine, t) {
    if (engine.anim07_centralRing) {
      engine.anim07_centralRing.rotation.y = t * 0.6;
      engine.anim07_centralRing.rotation.x = Math.sin(t * 0.3) * 0.25;
    }

    if (engine.anim07_lasers) {
      engine.anim07_lasers.forEach((item, i) => {
        const prog = (t * 0.7 + i * 0.1) % 1.0;
        if (item.curve && item.pulse) {
          item.pulse.position.copy(item.curve.getPoint(prog));
        }
        if (item.tube) {
          item.tube.material.opacity = 0.35 + Math.sin(t * 3 + i) * 0.25;
        }
      });
    }

    if (engine.nodos07 && engine.nodos07.length > 0) {
      const cycleDuration = 2.6;
      const activeIdx = Math.floor(t / cycleDuration) % engine.nodos07.length;

      if (activeIdx !== engine.activeNodeIndex07) {
        engine.activeNodeIndex07 = activeIdx;
        const activeNode = engine.nodos07[activeIdx];
        if (window.updateNodeHUD) {
          window.updateNodeHUD(activeNode);
        }
      }

      if (engine.anim07_sweepLight && engine.anim07_radarRing) {
        const beacon = engine.anim07_termBeacons[activeIdx];
        if (beacon) {
          engine.anim07_radarRing.position.set(beacon.x, -0.27, beacon.z);
          const s = 1.0 + Math.sin(t * 6) * 0.20;
          engine.anim07_radarRing.scale.set(s, s, s);

          engine.anim07_sweepLight.position.set(beacon.x, -0.27, beacon.z);
          engine.anim07_sweepLight.intensity = 1.0 + Math.sin(t * 6) * 0.35;

          engine.anim07_termBeacons.forEach((b, idx) => {
            if (idx === activeIdx) {
              b.mesh.scale.set(1.4, 1.4, 1.4);
              if (b.mesh.material.emissiveIntensity !== undefined) {
                b.mesh.material.emissiveIntensity = 1.0;
              }
            } else {
              b.mesh.scale.set(1.0, 1.0, 1.0);
              if (b.mesh.material.emissiveIntensity !== undefined) {
                b.mesh.material.emissiveIntensity = 0.40;
              }
            }
          });
        }
      }
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────────────────
// 8. IDENTIFICACIÓN DEL MODELO: Burocracia Weberiana Profesional
//    (Estructura Jerárquica, Procedimentalismo Normativo y Empleo Público Reglado)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_08"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const weberGroup = new THREE.Group();
    weberGroup.position.set(0, -0.15, 0);

    // 1. Pirámide Escalonada de la Jerarquía de Autoridad (4 Niveles Estatutarios)
    // Decanato -> Secretarías -> Direcciones -> Departamentos Disciplinares
    const tiers = [
      { y: -0.85, w: 1.20, h: 0.16, d: 1.20, label: "IV. DEPARTAMENTOS", sub: "Cátedras y Docencia", col: 0x1e293b },
      { y: -0.65, w: 0.95, h: 0.16, d: 0.95, label: "III. DIRECCIONES", sub: "Línea Operativa y Alumnos", col: 0x0f2d59 },
      { y: -0.45, w: 0.70, h: 0.16, d: 0.70, label: "II. SECRETARÍAS", sub: "Académica, Extensión, CyT", col: 0xb48324 },
      { y: -0.25, w: 0.45, h: 0.16, d: 0.45, label: "I. DECANATO", sub: "Máxima Autoridad Ejecutiva", col: 0xd4af37 }
    ];

    tiers.forEach((t, i) => {
      const stepMesh = new THREE.Mesh(
        new THREE.BoxGeometry(t.w, t.h, t.d),
        engine.marbleMat(i % 2 === 0 ? 0xf8fafc : 0xf1f5f9, 0.22)
      );
      stepMesh.position.y = t.y;
      stepMesh.castShadow = true;
      stepMesh.receiveShadow = true;
      weberGroup.add(stepMesh);

      // Moldura perimetral dorada en cada nivel jerárquico
      const rim = new THREE.Mesh(
        new THREE.BoxGeometry(t.w + 0.02, 0.02, t.d + 0.02),
        engine.brassMat(0xd4af37)
      );
      rim.position.y = t.y + t.h / 2;
      weberGroup.add(rim);

      // Cartela conmemorativa del nivel en la cara frontal
      const plaque = engine.createEngravedPlaque(
        t.w * 0.75,
        0.11,
        t.label,
        t.sub,
        [`NIVEL ${4 - i} ESTATUTARIO`],
        { theme: "dark" }
      );
      plaque.position.set(0, t.y, t.d / 2 + 0.012);
      weberGroup.add(plaque);
    });

    // 2. Columnas Gemelas del Empleo Público Reglado (CCT 366/06 y CCT 1246/15)
    // Columna Izquierda: CCT Nodocente (Dec. 366/06) - Carrera y Estabilidad
    const colNodocente = engine.createClassicalColumn(0.95, 0.08, 0x0284c7, true);
    colNodocente.position.set(-0.75, -0.38, 0.35);
    weberGroup.add(colNodocente);

    const plaqueNodocente = engine.createEngravedPlaque(
      0.48,
      0.18,
      "CCT NODOCENTE",
      "Dec. 366/06 • Estabilidad",
      ["CARRERA ADMINISTRATIVA"],
      { theme: "dark" }
    );
    plaqueNodocente.position.set(-0.75, -0.90, 0.50);
    weberGroup.add(plaqueNodocente);

    // Columna Derecha: CCT Docente (Dec. 1246/15) - Carrera Académica y Concursos
    const colDocente = engine.createClassicalColumn(0.95, 0.08, 0xd4af37, true);
    colDocente.position.set(0.75, -0.38, 0.35);
    weberGroup.add(colDocente);

    const plaqueDocente = engine.createEngravedPlaque(
      0.48,
      0.18,
      "CCT DOCENTE",
      "Dec. 1246/15 • Concursos",
      ["LIBERTAD DE CÁTEDRA"],
      { theme: "dark" }
    );
    plaqueDocente.position.set(0.75, -0.90, 0.50);
    weberGroup.add(plaqueDocente);

    // 3. El Gran Códice de la Legalidad y Foliado (En la cima de la pirámide)
    const codexGroup = new THREE.Group();
    codexGroup.position.set(0, 0.08, 0);

    const codexBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.06, 0.30),
      engine.graniteMat(0x0f172a)
    );
    codexGroup.add(codexBase);

    // Libro abierto de Actos Administrativos Fundados
    const bookSpine = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.28, 16),
      engine.brassMat(0xd4af37)
    );
    bookSpine.rotation.z = Math.PI / 2;
    bookSpine.position.y = 0.05;
    codexGroup.add(bookSpine);

    const leftPage = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.02, 0.26),
      engine.marbleMat(0xfaf8f5, 0.15)
    );
    leftPage.position.set(-0.10, 0.07, 0);
    leftPage.rotation.z = 0.15;
    codexGroup.add(leftPage);

    const rightPage = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.02, 0.26),
      engine.marbleMat(0xfaf8f5, 0.15)
    );
    rightPage.position.set(0.10, 0.07, 0);
    rightPage.rotation.z = -0.15;
    codexGroup.add(rightPage);

    // Sello oficial flotante de legalidad y foliado
    const seal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.015, 24),
      engine.goldMat(0xffd700)
    );
    seal.position.set(0, 0.22, 0);
    codexGroup.add(seal);
    engine.anim08_seal = seal;

    weberGroup.add(codexGroup);

    // Rótulo monumental superior
    const headerTitle = engine.createLabelSprite(
      "BUROCRACIA WEBERIANA PROFESIONAL",
      "Jerarquía • Principio de Legalidad • Estabilidad Reglada",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(weberGroup);
  },

  animate(engine, t) {
    if (engine.anim08_seal) {
      engine.anim08_seal.rotation.y = t * 0.8;
      engine.anim08_seal.position.y = 0.22 + Math.sin(t * 3) * 0.025;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 9. AUTONOMÍA UNIVERSITARIA FRENTE A LA DESCENTRALIZACIÓN NGP
//    (Ley de Educación Superior 24.521 y el Freno a la Gerencialización)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_09"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const autonomyGroup = new THREE.Group();
    autonomyGroup.position.set(0, -0.15, 0);

    // 1. Zócalo Circular de Granito Noble
    const baseDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.30, 0.12, 48),
      engine.graniteMat(0x0a192f)
    );
    baseDisk.position.y = -0.90;
    autonomyGroup.add(baseDisk);

    // 2. Los 4 Pilares del Co-Gobierno Cuadricameral (LES 24.521)
    const claustros = [
      { angle: 0, title: "CLAUSTRO DOCENTE", sub: "Profesores y Auxiliares", col: 0xd4af37 },
      { angle: Math.PI / 2, title: "CLAUSTRO NODOCENTE", sub: "Personal de Apoyo (CCT 366/06)", col: 0x0284c7 },
      { angle: Math.PI, title: "CLAUSTRO ESTUDIANTIL", sub: "Centros y Representación", col: 0x10b981 },
      { angle: (3 * Math.PI) / 2, title: "CLAUSTRO GRADUADOS", sub: "Vinculación Profesional", col: 0x8b5cf6 }
    ];

    const radius = 0.78;
    engine.anim09_pillars = [];

    claustros.forEach((c) => {
      const px = Math.cos(c.angle) * radius;
      const pz = Math.sin(c.angle) * radius;

      const col = engine.createClassicalColumn(0.95, 0.085, c.col, true);
      col.position.set(px, -0.38, pz);
      autonomyGroup.add(col);

      // Placa grabada al pie de cada columna
      const plaque = engine.createEngravedPlaque(
        0.44,
        0.16,
        c.title,
        c.sub,
        ["CO-GOBIERNO UNCo"],
        { theme: "dark" }
      );
      plaque.position.set(px * 1.18, -0.84, pz * 1.18);
      plaque.lookAt(px * 2, -0.84, pz * 2);
      autonomyGroup.add(plaque);
    });

    // 3. Entablamento y Cúpula Circular de la Autonomía (Protege contra el Mercado NGP)
    const domeRoof = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.15, 0.10, 48),
      engine.brassMat(0xd4af37)
    );
    domeRoof.position.y = 0.15;
    autonomyGroup.add(domeRoof);

    // Corona superior de laurel dorado y texto LES 24.521
    const lawBanner = engine.createEngravedPlaque(
      0.88,
      0.24,
      "LEY DE EDUCACIÓN SUPERIOR N° 24.521",
      "Art. 29: Autonomía Académica e Institucional • Autarquía Financiera",
      ["BLINDAJE CONTRA LA GERENCIALIZACIÓN NGP"],
      { theme: "dark" }
    );
    lawBanner.position.set(0, 0.42, 0.45);
    autonomyGroup.add(lawBanner);

    // 4. Llama Sagrada Central de la Libertad Académica y Cogobierno
    const fireBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.35, 24),
      engine.marbleMat(0xf8fafc)
    );
    fireBase.position.y = -0.65;
    autonomyGroup.add(fireBase);

    const flameMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.14, 2),
      new THREE.MeshStandardMaterial({
        color: 0xffedd5,
        emissive: 0xf59e0b,
        emissiveIntensity: 1.2,
        roughness: 0.1,
        metalness: 0.2
      })
    );
    flameMesh.position.y = -0.35;
    autonomyGroup.add(flameMesh);
    engine.anim09_flame = flameMesh;

    // Aro orbital armilar protector
    const shieldRing = engine.createBrassArmillaryRing(0.55, 0.015);
    shieldRing.position.y = -0.35;
    autonomyGroup.add(shieldRing);
    engine.anim09_ring = shieldRing;

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "AUTONOMÍA UNIVERSITARIA (LES 24.521)",
      "Co-Gobierno Cuadricameral • Freno a la Gerencialización de Mercado",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(autonomyGroup);
  },

  animate(engine, t) {
    if (engine.anim09_flame) {
      engine.anim09_flame.rotation.y = t * 1.2;
      engine.anim09_flame.rotation.x = Math.sin(t * 2) * 0.15;
      const pulse = 1.0 + Math.sin(t * 4) * 0.12;
      engine.anim09_flame.scale.set(pulse, pulse * 1.15, pulse);
    }
    if (engine.anim09_ring) {
      engine.anim09_ring.rotation.y = -t * 0.5;
      engine.anim09_ring.rotation.z = Math.sin(t * 0.6) * 0.2;
    }
    if (engine.anim09_lorenz) {
      engine.anim09_lorenz.rotation.y = t * 0.22;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 10. DIMENSIÓN INSTRUMENTAL DE LA NGP: Ecosistema SIU y SUDOCU
//     (Sistemas Universitarios, Trazabilidad, Firma Digital y Automatización)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_10"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.50, 0.22, -1.22);

    const ecoGroup = new THREE.Group();
    ecoGroup.position.set(0, -0.15, 0);

    // 1. Núcleo Central: Monolito Hexagonal de SUDOCU (Firma Digital y Trazabilidad)
    const sudocuCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.36, 0.85, 6),
      new THREE.MeshStandardMaterial({
        color: 0x0f2d59,
        roughness: 0.15,
        metalness: 0.85,
        emissive: 0x0284c7,
        emissiveIntensity: 0.35
      })
    );
    sudocuCore.position.y = -0.35;
    sudocuCore.castShadow = true;
    ecoGroup.add(sudocuCore);
    engine.anim10_core = sudocuCore;

    // Prisma de Cristal Óptico Central de Firma Digital y Hash Criptográfico
    const cryptoPrism = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18, 1),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.05,
        metalness: 0.95,
        transparent: true,
        opacity: 0.90
      })
    );
    cryptoPrism.position.y = 0.28;
    ecoGroup.add(cryptoPrism);
    engine.anim10_prism = cryptoPrism;

    const plaqueSudocu = engine.createEngravedPlaque(
      0.68,
      0.22,
      "SUDOCU (SISTEMA DE GESTIÓN)",
      "Expedientes Electrónicos • Firma Digital • Trazabilidad",
      ["NÚCLEO DOCUMENTAL UNCo"],
      { theme: "dark" }
    );
    plaqueSudocu.position.set(0, -0.88, 0.48);
    ecoGroup.add(plaqueSudocu);

    // 2. Anillo Orbital de Módulos del Ecosistema SIU
    const siuModules = [
      { name: "SIU-GUARANÍ", role: "Gestión Académica de Alumnos", col: 0x0284c7, angle: 0 },
      { name: "SIU-MAPUCHE", role: "Gestión de Personal y Sueldos", col: 0x10b981, angle: (2 * Math.PI) / 5 },
      { name: "SIU-PILAGÁ", role: "Presupuesto, Finanzas y Contabilidad", col: 0xf59e0b, angle: (4 * Math.PI) / 5 },
      { name: "SIU-SANAVIRÓN", role: "Cobranzas y Facturación", col: 0x8b5cf6, angle: (6 * Math.PI) / 5 },
      { name: "SIU-DIAGUITA", role: "Compras, Contrataciones y Patrimonio", col: 0xec4899, angle: (8 * Math.PI) / 5 }
    ];

    engine.anim10_satellites = [];
    const orbitR = 0.95;

    // Pista orbital dorada
    const orbitTrack = new THREE.Mesh(
      new THREE.TorusGeometry(orbitR, 0.012, 16, 80),
      engine.brassMat(0xd4af37)
    );
    orbitTrack.rotation.x = Math.PI / 2;
    orbitTrack.position.y = -0.35;
    ecoGroup.add(orbitTrack);

    siuModules.forEach((mod) => {
      const satGroup = new THREE.Group();

      const satMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 24, 24),
        new THREE.MeshStandardMaterial({
          color: mod.col,
          emissive: mod.col,
          emissiveIntensity: 0.45,
          roughness: 0.2,
          metalness: 0.6
        })
      );
      satGroup.add(satMesh);

      // Aro de datos alrededor del orbe
      const satRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.13, 0.008, 12, 32),
        engine.brassMat(0xd4af37)
      );
      satRing.rotation.x = Math.PI / 3;
      satGroup.add(satRing);

      // Cartela flotante del módulo
      const label = engine.createLabelSprite(mod.name, mod.role, "#0f2d59", false);
      label.position.set(0, 0.20, 0);
      satGroup.add(label);

      // Haz láser de datos conectando con SUDOCU
      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0) // actualizado dinámicamente
      ]);
      const beamLine = new THREE.Line(
        beamGeo,
        new THREE.LineBasicMaterial({ color: mod.col, transparent: true, opacity: 0.65 })
      );
      ecoGroup.add(beamLine);

      ecoGroup.add(satGroup);
      engine.anim10_satellites.push({ group: satGroup, baseAngle: mod.angle, line: beamLine, mesh: satMesh });
    });

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "DIMENSIÓN INSTRUMENTAL: ECOSISTEMA SIU & SUDOCU",
      "Interoperabilidad Documental • Trazabilidad • Cero Papel",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(ecoGroup);
  },

  animate(engine, t) {
    if (engine.anim10_core) {
      engine.anim10_core.rotation.y = t * 0.3;
    }
    if (engine.anim10_prism) {
      engine.anim10_prism.rotation.y = -t * 1.5;
      engine.anim10_prism.rotation.x = Math.sin(t * 2) * 0.25;
      engine.anim10_prism.position.y = 0.28 + Math.sin(t * 3) * 0.04;
    }
    if (engine.anim10_satellites) {
      const orbitR = 0.95;
      engine.anim10_satellites.forEach((sat, i) => {
        const curAngle = sat.baseAngle + t * 0.35;
        const sx = Math.cos(curAngle) * orbitR;
        const sz = Math.sin(curAngle) * orbitR;
        const sy = -0.35 + Math.sin(t * 2 + i) * 0.06;
        sat.group.position.set(sx, sy, sz);

        // Actualizar línea de conexión hacia el núcleo
        if (sat.line) {
          const positions = sat.line.geometry.attributes.position.array;
          positions[0] = sx;
          positions[1] = sy;
          positions[2] = sz;
          positions[3] = 0;
          positions[4] = -0.35;
          positions[5] = 0;
          sat.line.geometry.attributes.position.needsUpdate = true;
        }
      });
    }
  }
};

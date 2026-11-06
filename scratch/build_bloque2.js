const fs = require('fs');

const b2 = fs.readFileSync('js/objetos/bloque2.js', 'utf8');
const endOfAnim07 = b2.indexOf('// 8. DESNATURALIZACIÓN');
const headerAnd0607 = b2.substring(0, endOfAnim07);

const updatedAnim080910 = `// ──────────────────────────────────────────────────────────────────────────
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
        [\`NIVEL \${4 - i} ESTATUTARIO\`],
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
`;

fs.writeFileSync('js/objetos/bloque2.js', headerAnd0607 + updatedAnim080910, 'utf8');
console.log('Successfully updated bloque2.js with anim_08, anim_09, anim_10!');


const fs = require('fs');
const path = require('path');

const bloque5Path = path.join(__dirname, '../js/objetos/bloque5.js');
let content = fs.readFileSync(bloque5Path, 'utf8');

// Buscamos dónde termina anim_24 (alrededor de la línea 600)
const idxAnim24End = content.indexOf('window.Presentation3D_Objects["anim_25"] = {');
if (idxAnim24End === -1) {
  throw new Error('Could not find anim_25 declaration in bloque5.js');
}

const prefix = content.substring(0, idxAnim24End);

const newScenesCode = `// ──────────────────────────────────────────────────────────────────────────
// 25. ECOSISTEMA DE CONTROL PÚBLICO: AGN, UAI ESTATUTARIA Y SIGEN RES. 311/2026
//     (Fiscalización Externa, Rango Estatutario Único y Alertas SISAC)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_25"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const auditGroup = new THREE.Group();
    auditGroup.position.set(0, -0.15, 0);

    // Chasis de granito oscuro noble con bisel de bronce
    const chassis = engine.createMachinedChassis(1.76, 0.12, 0.78, { color: 0x0f172a });
    chassis.position.y = -0.92;
    auditGroup.add(chassis);

    // 1. Columna Izquierda: Control Externo AGN (Art. 85 CN, SAF 809)
    const agnCol = new THREE.Group();
    agnCol.position.set(-0.62, -0.35, 0);
    const colLeft = engine.createClassicalColumn(0.85, 0.08, 0x1e3a8a, true);
    agnCol.add(colLeft);
    const agnSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 24, 24),
      engine.glassMat(0x2563eb)
    );
    agnSphere.position.set(0, 0.52, 0);
    agnCol.add(agnSphere);
    auditGroup.add(agnCol);

    // 2. Columna Central: UAI Estatutaria UNCo (Rango Estatutario Único, Cr. Oscar Rebolledo)
    const uaiCol = new THREE.Group();
    uaiCol.position.set(0, -0.22, 0.08); // Más elevada y adelantada
    const colMid = engine.createClassicalColumn(1.05, 0.09, 0xd4af37, true);
    uaiCol.add(colMid);
    // Corona dorada y gema de luz institucional
    const crown = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.15, 0.08, 24),
      engine.goldMat(0xffd700)
    );
    crown.position.set(0, 0.60, 0);
    uaiCol.add(crown);
    const uaiGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.16, 2),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xd4af37,
        emissiveIntensity: 0.8,
        roughness: 0.15,
        metalness: 0.8
      })
    );
    uaiGem.position.set(0, 0.72, 0);
    uaiCol.add(uaiGem);
    auditGroup.add(uaiCol);
    engine.anim25_gem = uaiGem;

    // 3. Columna Derecha: Órgano Rector Interno SIGEN (Res. 299 y 311/2026, SISAC)
    const sgnCol = new THREE.Group();
    sgnCol.position.set(0.62, -0.35, 0);
    const colRight = engine.createClassicalColumn(0.85, 0.08, 0xb45309, true);
    sgnCol.add(colRight);
    const ringSgn = engine.createBrassArmillaryRing(0.18, 0.012);
    ringSgn.position.set(0, 0.52, 0);
    sgnCol.add(ringSgn);
    auditGroup.add(sgnCol);
    engine.anim25_ring = ringSgn;

    // Puente armilar superior que une el ecosistema de control
    const archCurve = new THREE.Mesh(
      new THREE.TorusGeometry(0.64, 0.014, 16, 48, Math.PI),
      engine.brassMat(0xd4af37)
    );
    archCurve.position.set(0, 0.16, 0);
    auditGroup.add(archCurve);

    // Placa frontal de museo
    const plaque = engine.createEngravedPlaque(
      0.85,
      0.22,
      "ECOSISTEMA DE CONTROL PÚBLICO",
      "AGN Externa • UAI Estatutaria UNCo • SIGEN Res. 311/2026 y SISAC",
      ["UNIDAD V • CONTROL Y AUDITORÍA"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    auditGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "ORGANISMOS DE CONTROL Y AUDITORÍA",
      "AGN • UAI Estatutaria UNCo • SIGEN 2026",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(auditGroup);
  },

  animate(engine, t) {
    if (engine.anim25_gem) {
      engine.anim25_gem.rotation.y = t * 1.2;
      const s = 1.0 + Math.sin(t * 2.5) * 0.08;
      engine.anim25_gem.scale.set(s, s, s);
    }
    if (engine.anim25_ring) {
      engine.anim25_ring.rotation.x = t * 0.8;
      engine.anim25_ring.rotation.y = t * 1.0;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 26. LA BALANZA PARITARIA DE EVALUACIÓN LABORAL Y BRECHA DE MEDICIÓN
//     (CCT 366/06 Nodocente APUNC vs CCT 1246/15 Docente y Enfoque Mayne)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_26"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const balanceGroup = new THREE.Group();
    balanceGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.68, 0.12, 0.72, { color: 0x1e293b });
    chassis.position.y = -0.92;
    balanceGroup.add(chassis);

    // Pilar maestro central dórico de mármol y latón
    const pillar = engine.createClassicalColumn(1.0, 0.085, 0xd4af37, true);
    pillar.position.set(0, -0.32, 0);
    balanceGroup.add(pillar);

    // Pivote y fulcro de latón
    const fulcrum = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.18, 24),
      engine.goldMat(0xffd700)
    );
    fulcrum.rotation.z = Math.PI / 2;
    fulcrum.position.set(0, 0.26, 0);
    balanceGroup.add(fulcrum);

    // Brazo oscilante de la balanza
    const beamGroup = new THREE.Group();
    beamGroup.position.set(0, 0.26, 0);

    const beamMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.022, 1.26, 24),
      engine.brassMat(0xd4af37)
    );
    beamMesh.rotation.z = Math.PI / 2;
    beamGroup.add(beamMesh);

    // Aguja superior indicadora de equilibrio
    const needle = new THREE.Mesh(
      new THREE.ConeGeometry(0.025, 0.24, 16),
      engine.goldMat(0xffd700)
    );
    needle.position.set(0, 0.12, 0);
    beamGroup.add(needle);

    // Platillo Izquierdo: Nodocente (CCT 366/06 - Diferimiento APUNC)
    const panLeft = new THREE.Group();
    panLeft.position.set(-0.58, -0.38, 0);
    const dishL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.16, 0.035, 32),
      engine.brassMat(0xd4af37)
    );
    panLeft.add(dishL);
    const scrollNodoc = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.06, 0.14),
      engine.marbleMat(0x10b981) // Verde esmeralda paritario
    );
    scrollNodoc.position.y = 0.045;
    panLeft.add(scrollNodoc);
    beamGroup.add(panLeft);

    // Platillo Derecho: Docente (CCT 1246/15 - Reválidas y Guaraní)
    const panRight = new THREE.Group();
    panRight.position.set(0.58, -0.38, 0);
    const dishR = new THREE.Mesh(
      new THREE.CylinderGeometry(0.20, 0.16, 0.035, 32),
      engine.brassMat(0xd4af37)
    );
    panRight.add(dishR);
    const bookDoc = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.06, 0.14),
      engine.marbleMat(0x0284c7) // Azul académico
    );
    bookDoc.position.y = 0.045;
    panRight.add(bookDoc);
    beamGroup.add(panRight);

    balanceGroup.add(beamGroup);
    engine.anim26_beam = beamGroup;
    engine.anim26_panL = panLeft;
    engine.anim26_panR = panRight;

    // Placa frontal de museo
    const plaque = engine.createEngravedPlaque(
      0.85,
      0.22,
      "EVALUACIÓN LABORAL Y CONVENIOS",
      "CCT 366/06 (APUNC) vs CCT 1246/15 (Docentes) • Brecha de Medición",
      ["TELMA RAMÍREZ • JOHN MAYNE"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    balanceGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "EVALUACIÓN DEL DESEMPEÑO EN RR. HH.",
      "Paritaria UNCo-APUNC • Carrera Docente • Contribución",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(balanceGroup);
  },

  animate(engine, t) {
    if (engine.anim26_beam) {
      const angle = Math.sin(t * 1.2) * 0.07;
      engine.anim26_beam.rotation.z = angle;
      if (engine.anim26_panL && engine.anim26_panR) {
        engine.anim26_panL.rotation.z = -angle;
        engine.anim26_panR.rotation.z = -angle;
      }
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 27. TABLERO DE CONTROL PRELIMINAR DE RR. HH.: 4 KPIS ESTRATÉGICOS
//     (Tiempos, Calidad, Capacitación y Nodos Territoriales • Ramírez & Mayne)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_27"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const kpiGroup = new THREE.Group();
    kpiGroup.position.set(0, -0.15, 0);

    // Chasis de ébano pulido circular
    const basePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.90, 0.12, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    basePlate.position.y = -0.88;
    kpiGroup.add(basePlate);

    const baseRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.88, 0.016, 16, 48),
      engine.brassMat(0xd4af37)
    );
    baseRim.rotation.x = Math.PI / 2;
    baseRim.position.y = -0.82;
    kpiGroup.add(baseRim);

    // Torre Matriz Central: 4 Prismas de Cuadrante para los 4 KPIs
    const kpiCards = [
      {
        id: "KPI-1",
        label: "TIEMPOS <= 5d",
        sub: "SUDOCU a Mapuche",
        x: -0.38,
        z: -0.38,
        h: 0.65,
        col: 0x06b6d4 // Cian procesos
      },
      {
        id: "KPI-2",
        label: "CALIDAD >= 99%",
        sub: "Liquidación Sin Error",
        x: 0.38,
        z: -0.38,
        h: 0.80,
        col: 0xf59e0b // Dorado calidad
      },
      {
        id: "KPI-3",
        label: "CAPACITACIÓN >= 90%",
        sub: "Formación Nodocente",
        x: -0.38,
        z: 0.38,
        h: 0.70,
        col: 0x8b5cf6 // Violeta competencias
      },
      {
        id: "KPI-4",
        label: "NODOS >= 95%",
        sub: "Continuidad 10 Nodos",
        x: 0.38,
        z: 0.38,
        h: 0.75,
        col: 0x10b981 // Verde territorial
      }
    ];

    engine.anim27_pillars = [];

    kpiCards.forEach((k) => {
      const colG = new THREE.Group();
      colG.position.set(k.x, -0.42 + k.h / 2, k.z);

      // Prisma de cristal semafórico
      const prism = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, k.h, 0.32),
        new THREE.MeshStandardMaterial({
          color: k.col,
          roughness: 0.25,
          metalness: 0.4,
          transparent: true,
          opacity: 0.88
        })
      );
      colG.add(prism);

      // Aro dorado perimetral
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.20, 0.012, 16, 32),
        engine.brassMat(0xd4af37)
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = k.h / 2 + 0.02;
      colG.add(ring);

      kpiGroup.add(colG);
      engine.anim27_pillars.push(prism);
    });

    // Anillo armilar rotatorio orbital de John Mayne
    const orbitalRing = engine.createBrassArmillaryRing(0.72, 0.018);
    orbitalRing.position.set(0, 0.15, 0);
    kpiGroup.add(orbitalRing);
    engine.anim27_orbital = orbitalRing;

    // Placa frontal de museo
    const plaque = engine.createEngravedPlaque(
      0.85,
      0.22,
      "TABLERO DE CONTROL DE RECURSOS HUMANOS",
      "4 KPIs: Tiempos (<=5d), Calidad (>=99%), Capacitación (>=90%), Nodos (>=95%)",
      ["TELMA RAMÍREZ (2023) • JOHN MAYNE (2016)"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    kpiGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "TABLERO DE COMANDO PRELIMINAR DE RR. HH.",
      "Eficiencia de Procesos • Calidad Salarial • Red Territorial",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(kpiGroup);
  },

  animate(engine, t) {
    if (engine.anim27_orbital) {
      engine.anim27_orbital.rotation.y = t * 0.7;
      engine.anim27_orbital.rotation.x = Math.sin(t * 0.9) * 0.2;
    }
    if (engine.anim27_pillars) {
      engine.anim27_pillars.forEach((p, idx) => {
        const s = 1.0 + Math.sin(t * 2 + idx * 1.5) * 0.04;
        p.scale.set(s, 1.0, s);
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 28. BUCLE DE CONTROL Y RETROALIMENTACIÓN PARA EL APRENDIZAJE INSTITUCIONAL
//     (Operación -> Tablero -> Auditoría UAI/SISAC -> Evaluación Pragmática)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_28"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.55, 0.22, -1.22);

    const loopGroup = new THREE.Group();
    loopGroup.position.set(0, -0.15, 0);

    // Chasis base
    const chassis = engine.createMachinedChassis(1.68, 0.12, 0.75, { color: 0x0f172a });
    chassis.position.y = -0.92;
    loopGroup.add(chassis);

    // Doble Aro Toroidal de Retroalimentación Continua (Möbius de Aprendizaje)
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.024, 24, 64),
      engine.brassMat(0xd4af37)
    );
    ring1.rotation.x = Math.PI / 4;
    ring1.position.set(0, 0.15, 0);
    loopGroup.add(ring1);
    engine.anim28_ring1 = ring1;

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.020, 24, 64),
      engine.glassMat(0x0284c7)
    );
    ring2.rotation.y = Math.PI / 3;
    ring2.position.set(0, 0.15, 0);
    loopGroup.add(ring2);
    engine.anim28_ring2 = ring2;

    // Engranajes centrales de latón que simbolizan el aprendizaje institucional (Feinstein)
    const gearCenter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.06, 24),
      engine.goldMat(0xffd700)
    );
    gearCenter.rotation.x = Math.PI / 2;
    gearCenter.position.set(0, 0.15, 0);
    loopGroup.add(gearCenter);
    engine.anim28_gear = gearCenter;

    // 4 Nodos esféricos de las fases del circuito (Operación, Tablero, UAI/SISAC, Evaluación)
    const phases = [
      { x: 0, y: 0.65, z: 0, col: 0x0284c7, label: "1. Operación SUDOCU" },
      { x: 0.52, y: 0.15, z: 0, col: 0xf59e0b, label: "2. Tablero 4 KPIs" },
      { x: 0, y: -0.35, z: 0, col: 0xef4444, label: "3. UAI / SISAC" },
      { x: -0.52, y: 0.15, z: 0, col: 0x10b981, label: "4. Aprendizaje Feinstein" }
    ];

    phases.forEach((ph) => {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 16, 16),
        engine.glassMat(ph.col)
      );
      orb.position.set(ph.x, ph.y, ph.z);
      loopGroup.add(orb);
    });

    // Placa frontal de museo
    const plaque = engine.createEngravedPlaque(
      0.85,
      0.22,
      "BUCLE DE CONTROL Y RETROALIMENTACIÓN",
      "De la Auditoría Punitiva al Aprendizaje Institucional Continuo",
      ["MARTÍNEZ NOGUEIRA • FEINSTEIN • RES. SIGEN 311/2026"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    loopGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "CIRCUITO DE CONTROL Y RETROALIMENTACIÓN",
      "SUDOCU/Mapuche -> Tablero -> UAI/SISAC -> Decisión Estratégica",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(loopGroup);
  },

  animate(engine, t) {
    if (engine.anim28_ring1) {
      engine.anim28_ring1.rotation.z = t * 0.8;
      engine.anim28_ring1.rotation.y = Math.sin(t * 0.6) * 0.3;
    }
    if (engine.anim28_ring2) {
      engine.anim28_ring2.rotation.z = -t * 0.6;
    }
    if (engine.anim28_gear) {
      engine.anim28_gear.rotation.z = t * 1.2;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 29. EL GRAN ATRIL CEREMONIAL DE GRADUACIÓN Y MEDALLÓN LAUREADO UNCo
//     (Agradecimiento al Equipo Docente y Apertura al Tribunal Examinador)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_29"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const thankGroup = new THREE.Group();
    thankGroup.position.set(0, -0.15, 0);

    // 1. Atril Ceremonial de Graduación de Caoba y Bronce
    const lectorChassis = engine.createMachinedChassis(1.10, 0.85, 0.60, { color: 0x2e1204 });
    lectorChassis.position.y = -0.45;
    thankGroup.add(lectorChassis);

    // 2. Corona de Laureles de Oro de la UNCo
    const laurelRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.38, 0.035, 16, 48),
      engine.goldMat(0xffd700)
    );
    laurelRing.position.set(0, 0.42, 0);
    thankGroup.add(laurelRing);
    engine.anim29_laurel = laurelRing;

    // Gran Medallón Laureado Central
    const medal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.03, 32),
      engine.brassMat(0xd4af37)
    );
    medal.rotation.x = Math.PI / 2;
    medal.position.set(0, 0.42, 0);
    thankGroup.add(medal);

    // 3. Tomo de Tesina Abierto al Tribunal Examinador
    const bookSpine = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.35, 16),
      engine.brassMat(0xd4af37)
    );
    bookSpine.rotation.z = Math.PI / 2;
    bookSpine.position.set(0, 0.05, 0.25);
    thankGroup.add(bookSpine);

    const pLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.02, 0.32),
      engine.marbleMat(0xfaf8f5, 0.15)
    );
    pLeft.position.set(-0.13, 0.08, 0.25);
    pLeft.rotation.z = 0.20;
    thankGroup.add(pLeft);

    const pRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.02, 0.32),
      engine.marbleMat(0xfaf8f5, 0.15)
    );
    pRight.position.set(0.13, 0.08, 0.25);
    pRight.rotation.z = -0.20;
    thankGroup.add(pRight);

    // Placa frontal de agradecimiento actualizada a los 5 Avances
    const plaque = engine.createEngravedPlaque(
      0.85,
      0.22,
      "MUCHAS GRACIAS POR SU ATENCIÓN",
      "Cátedra de Planeamiento y Control de las Organizaciones • CURZAS - UNCo",
      ["DEFENSA INTEGRAL • APERTURA AL TRIBUNAL"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    thankGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "SÍNTESIS FINAL Y DEFENSA DE CÁTEDRA",
      "Avances 1, 2, 3, 4 y 5 • Apertura al Tribunal Examinador",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(thankGroup);
  },

  animate(engine, t) {
    if (engine.anim29_laurel) {
      engine.anim29_laurel.rotation.y = t * 0.6;
      engine.anim29_laurel.position.y = 0.42 + Math.sin(t * 2) * 0.025;
    }
  }
};
`;

const finalBloque5 = prefix + newScenesCode;
fs.writeFileSync(bloque5Path, finalBloque5, 'utf8');
console.log('Successfully updated js/objetos/bloque5.js with anim_25, anim_26, anim_27, anim_28, anim_29!');

/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE V: ESCULTURAS 21 A 25
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente de Diagnóstico FODA, Stakeholders, Capacidades y Cierre:
 * 21. anim_21: El Monolito Tetraédrico FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)
 * 22. anim_22: El Radar Concéntrico de Stakeholders en RRHH (Poder vs. Interés en la Transformación)
 * 23. anim_23: El Tetrápilo Monumental de Capacidades Estatales (Julián Bertranou: 4 Pilares)
 * 24. anim_24: El Faro Monumental de Valor Público y Dictamen de Viabilidad (Sello de Aprobación)
 * 25. anim_25: El Atril Ceremonial de Graduación y Medallón Laureado UNCo (Apertura al Tribunal)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 21. MATRIZ FODA SITUADA EN EL CONTEXTO DEL CURZAS
//     (Fortalezas, Oportunidades, Debilidades y Amenazas Presupuestarias)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_21"] = {
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

// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_22"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const radarGroup = new THREE.Group();
    radarGroup.position.set(0, -0.15, 0);

    // 1. Radar Circular de Mármol con 3 Anillos de Influencia / Poder
    const baseDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.28, 0.08, 48),
      engine.graniteMat(0x0f172a)
    );
    baseDisk.position.y = -0.85;
    radarGroup.add(baseDisk);

    // Tres Anillos Concéntricos de Latón (Alto Poder, Medio, Periférico)
    for (let i = 1; i <= 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(i * 0.35, 0.010, 16, 64),
        engine.brassMat(0xd4af37)
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.80;
      radarGroup.add(ring);
    }

    // 2. Balizas de los 5 Grupos de Stakeholders
    const actors = [
      { r: 0.32, angle: 0.3, name: "DIRECCIÓN RRHH", sub: "Alto Poder / Alto Interés", col: 0xd4af37 },
      { r: 0.45, angle: 1.8, name: "GREMIOS (APUNC)", sub: "Poder de Negociación CCT", col: 0xef4444 },
      { r: 0.70, angle: 3.5, name: "CÁTEDRAS DOCENTES", sub: "Autonomía de Cátedra", col: 0x0284c7 },
      { r: 0.85, angle: 4.8, name: "MUNICIPIOS DE NODOS", sub: "Cesión de Recursos", col: 0x10b981 },
      { r: 0.98, angle: 5.9, name: "ESTUDIANTADO", sub: "Destinatarios Finales", col: 0x8b5cf6 }
    ];

    engine.anim22_beacons = [];

    actors.forEach((act) => {
      const bGroup = new THREE.Group();
      const px = Math.cos(act.angle) * act.r;
      const pz = Math.sin(act.angle) * act.r;
      bGroup.position.set(px, -0.55, pz);

      // Mástil de latón
      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 0.50, 16),
        engine.brassMat(act.col)
      );
      bGroup.add(mast);

      // Esfera del actor
      const gem = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 16, 16),
        new THREE.MeshStandardMaterial({
          color: act.col,
          emissive: act.col,
          emissiveIntensity: 0.55,
          roughness: 0.2,
          metalness: 0.7
        })
      );
      gem.position.y = 0.26;
      bGroup.add(gem);

      // Cartela identificatoria
      const label = engine.createLabelSprite(act.name, act.sub, "#0f2d59", false);
      label.position.set(0, 0.44, 0);
      bGroup.add(label);

      radarGroup.add(bGroup);
      engine.anim22_beacons.push({ group: bGroup, gem, angle: act.angle, r: act.r });
    });

    // Haz de escaneo giratorio del radar
    const scanLine = new THREE.Mesh(
      new THREE.BoxGeometry(1.05, 0.015, 0.03),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 })
    );
    scanLine.position.set(0.52, -0.78, 0);
    const scanArm = new THREE.Group();
    scanArm.add(scanLine);
    radarGroup.add(scanArm);
    engine.anim22_scanArm = scanArm;

    // Placa frontal
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "MAPEO DE STAKEHOLDERS EN RRHH",
      "Matriz de Poder vs. Interés • Alianzas Estratégicas y Factibilidad",
      ["GESTIÓN DE ACTORES EN LA PLANIFICACIÓN"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    radarGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "MAPEO DE ACTORES CLAVE (STAKEHOLDERS)",
      "Análisis de Fuerzas, Intereses y Grados de Influencia en el CURZAS",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(radarGroup);
  },

  animate(engine, t) {
    if (engine.anim22_scanArm) {
      engine.anim22_scanArm.rotation.y = t * 1.0;
    }
    if (engine.anim22_beacons) {
      engine.anim22_beacons.forEach((b, i) => {
        if (b.gem) {
          const s = 1.0 + Math.sin(t * 3 + i) * 0.12;
          b.gem.scale.set(s, s, s);
        }
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 23. EVALUACIÓN DE CAPACIDADES ESTATALES SEGÚN BERTRANOU
//     (Capacidades Político-Relacionales, Administrativas, Técnicas y Fiscales)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_23"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const capGroup = new THREE.Group();
    capGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.72, 0.10, 0.76, { color: 0x1e293b });
    chassis.position.y = -0.92;
    capGroup.add(chassis);

    // Las 4 Columnas Dóricas de las Capacidades Estatales (Julián Bertranou)
    const capacities = [
      {
        x: -0.68,
        title: "I. POLÍTICO-RELACIONAL",
        sub: "Acuerdos con Municipios • Legitimidad",
        badge: "CONSENSO SOCIAL",
        col: 0x0284c7
      },
      {
        x: -0.23,
        title: "II. ADMINISTRATIVA",
        sub: "Procesos, Expedientes y CCT",
        badge: "RIGOR NORMATIVO",
        col: 0xd4af37
      },
      {
        x: 0.23,
        title: "III. TÉCNICA",
        sub: "Experticia Profesional y Cátedras",
        badge: "SABER OPERATIVO",
        col: 0x10b981
      },
      {
        x: 0.68,
        title: "IV. FISCAL / FINANCIERA",
        sub: "Presupuesto, Sueldos y Aranceles",
        badge: "SOSTENIBILIDAD",
        col: 0xf59e0b
      }
    ];

    engine.anim23_pillars = [];

    capacities.forEach((cp) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(cp.x, -0.38, 0);

      // Columna dórica clásica de mármol Carrara
      const col = engine.createClassicalColumn(0.95, 0.08, cp.col, true);
      pGroup.add(col);

      // Capitel con gema de capacidad
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08, 1),
        new THREE.MeshStandardMaterial({
          color: cp.col,
          emissive: cp.col,
          emissiveIntensity: 0.65,
          roughness: 0.1,
          metalness: 0.85
        })
      );
      gem.position.y = 0.52;
      pGroup.add(gem);

      // Placa grabada al pie
      const plaque = engine.createEngravedPlaque(
        0.44,
        0.18,
        cp.title,
        cp.sub,
        [cp.badge],
        { theme: "dark" }
      );
      plaque.position.set(0, -0.50, 0.40);
      pGroup.add(plaque);

      capGroup.add(pGroup);
      engine.anim23_pillars.push({ group: pGroup, gem });
    });

    // Arquitrabe monumental superior unificador (El Estado con Capacidad Efectiva)
    const architrave = new THREE.Mesh(
      new THREE.BoxGeometry(1.65, 0.14, 0.35),
      engine.marbleMat(0xf8fafc, 0.2)
    );
    architrave.position.set(0, 0.22, 0);
    capGroup.add(architrave);

    // Frontispicio con el nombre de Julián Bertranou
    const fronton = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.16, 1.65, 3),
      engine.brassMat(0xd4af37)
    );
    fronton.rotation.z = Math.PI / 2;
    fronton.position.set(0, 0.35, 0);
    capGroup.add(fronton);

    // Placa frontal explicativa
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "EVALUACIÓN DE CAPACIDADES ESTATALES",
      "Julián Bertranou: Capacidad Político-Relacional, Administrativa, Técnica y Fiscal",
      ["ESTADO EN ACCIÓN Y SOSTENIBILIDAD"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    capGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "CAPACIDADES ESTATALES (BERTRANOU)",
      "Político-Relacional • Administrativa • Técnica • Fiscal",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    // Arte Algorítmico: Campo de flujo de las 3 Capacidades Estatales (Bertranou)
    if (engine.createVectorFlowParticles) {
      const flow23 = engine.createVectorFlowParticles(260, 0.90, 1.2, 0xfbbf24, 0x10b981);
      flow23.position.set(0, 0.15, 0);
      g.add(flow23);
      engine.anim23_flow = flow23;
    }

    g.add(capGroup);
  },

  animate(engine, t) {
    if (engine.anim23_pillars) {
      engine.anim23_pillars.forEach((p, i) => {
        if (p.gem) {
          p.gem.rotation.y = t * (0.8 + i * 0.25);
          const s = 1.0 + Math.sin(t * 3 + i) * 0.10;
          p.gem.scale.set(s, s, s);
        }
      });
    }
    if (engine.anim23_flow && engine.updateVectorFlow) {
      engine.updateVectorFlow(engine.anim23_flow, t);
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 24. SÍNTESIS ESTRATÉGICA Y DICTAMEN DE VIABILIDAD DEL AVANCE 2
//     (Conclusiones Integrales sobre la Modernización y Sostenibilidad)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_24"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const rulingGroup = new THREE.Group();
    rulingGroup.position.set(0, -0.15, 0);

    // El Gran Faro de Valor Público y Modernización
    const lighthouse = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.38, 1.15, 24),
      engine.marbleMat(0xf8fafc, 0.22)
    );
    lighthouse.position.set(0, -0.28, 0);
    lighthouse.castShadow = true;
    rulingGroup.add(lighthouse);

    // Baliza superior de 24 facetas con haz rotatorio de luz
    const lamp = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18, 2),
      new THREE.MeshStandardMaterial({
        color: 0xffedd5,
        emissive: 0xf59e0b,
        emissiveIntensity: 1.0,
        roughness: 0.1,
        metalness: 0.3
      })
    );
    lamp.position.set(0, 0.40, 0);
    rulingGroup.add(lamp);
    engine.anim24_lamp = lamp;

    // Aro giratorio de valor público
    const ring = engine.createBrassArmillaryRing(0.38, 0.015);
    ring.position.set(0, 0.40, 0);
    rulingGroup.add(ring);
    engine.anim24_ring = ring;

    // El Gran Sello de Dictamen de Viabilidad Aprobado
    const sealMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.035, 32),
      engine.goldMat(0xffd700)
    );
    sealMesh.rotation.x = Math.PI / 4;
    sealMesh.position.set(0, -0.15, 0.40);
    rulingGroup.add(sealMesh);

    // Placa frontal con el dictamen de viabilidad
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "DICTAMEN DE VIABILIDAD ESTRATÉGICA",
      "Viabilidad Política, Institucional y Tecnológica Plena para el CURZAS",
      ["TESINA DE GRADO • APROBADA"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    rulingGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "SÍNTESIS Y DICTAMEN DE VIABILIDAD",
      "Conclusiones Integrales del Avance 1 y Avance 2",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(rulingGroup);
  },

  animate(engine, t) {
    if (engine.anim24_lamp) {
      engine.anim24_lamp.rotation.y = t * 1.5;
      const p = 1.0 + Math.sin(t * 3) * 0.10;
      engine.anim24_lamp.scale.set(p, p, p);
    }
    if (engine.anim24_ring) {
      engine.anim24_ring.rotation.y = -t * 0.6;
      engine.anim24_ring.rotation.x = Math.sin(t * 0.8) * 0.2;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 25. AGRADECIMIENTO A LA CÁTEDRA Y APERTURA DE PREGUNTAS
//     (Agradecimiento al Equipo Docente y Apertura al Diálogo Académico)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_25"] = {
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
    engine.anim25_laurel = laurelRing;

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

    // Placa frontal de agradecimiento
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "MUCHAS GRACIAS POR SU ATENCIÓN",
      "Cátedra de Planeamiento y Control de las Organizaciones • CURZAS - UNCo",
      ["ESPACIO ABIERTO A PREGUNTAS DEL TRIBUNAL"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    thankGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "AGRADECIMIENTO Y DEFENSA ORAL",
      "Apertura al Tribunal Examinador • CURZAS - UNCo",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(thankGroup);
  },

  animate(engine, t) {
    if (engine.anim25_laurel) {
      engine.anim25_laurel.rotation.y = t * 0.6;
      engine.anim25_laurel.position.y = 0.42 + Math.sin(t * 2) * 0.025;
    }
  }
};

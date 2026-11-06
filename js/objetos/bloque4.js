/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE IV: ESCULTURAS 16 A 20
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente de Adhocracias, Co-Gobierno y Planificación Situacional (PES):
 * 16. anim_16: La Matriz Adhocrática de Proyectos (Secretarías de Extensión y CyT • 'Nodos en Red')
 * 17. anim_17: El Reloj Dual de Gobernanza (Consejo Directivo Deliberativo vs. Gestión Ejecutiva Ágil)
 * 18. anim_18: El Tablero Estratégico de Carlos Matus (Planificador Dentro del Juego Social y Fuerzas Vivas)
 * 19. anim_19: El Tetraedro Helicoidal de los Cuatro Momentos PES (M1 Explicativo -> M4 Táctico-Operacional)
 * 20. anim_20: Los Pilares del Trabajo Universitario (Docentes y Nodocentes como Sujetos Estratégicos)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 16. SECRETARÍAS DE EXTENSIÓN Y CyT COMO ADHOCRACIAS MATRICIALES
//     (Estructuras Flexibles, Redes Territoriales y Proyecto 'Nodos en Red')
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_16"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const adhGroup = new THREE.Group();
    adhGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.72, 0.10, 0.76, { color: 0x1e293b });
    chassis.position.y = -0.92;
    adhGroup.add(chassis);

    // Eje Central Giratorio: Gimbal de Tres Aros Concéntricos (Extensión, Investigación, Vinculación)
    const gimbal = new THREE.Group();
    gimbal.position.set(0, 0, 0);

    const rings = [
      { r: 0.72, w: 0.016, col: 0x0284c7 },
      { r: 0.54, w: 0.014, col: 0xd4af37 },
      { r: 0.38, w: 0.012, col: 0x10b981 }
    ];

    engine.anim16_rings = [];

    rings.forEach((rg, i) => {
      const ringMesh = new THREE.Mesh(
        new THREE.TorusGeometry(rg.r, rg.w, 16, 64),
        engine.brassMat(rg.col)
      );
      ringMesh.rotation.x = Math.PI / 4 + i * 0.4;
      gimbal.add(ringMesh);
      engine.anim16_rings.push(ringMesh);
    });

    // 4 Cápsulas de Cristal de Proyectos Insignia en Órbita Adhocrática
    const projects = [
      { name: "NODOS EN RED", sub: "Pequeños Productores Valcheta/SAO", col: 0x10b981, angle: 0 },
      { name: "MESA HÍDRICA DPA", sub: "Gestión de Cuencas y Riego", col: 0x0284c7, angle: Math.PI / 2 },
      { name: "PROYECTO INTA", sub: "Innovación Agropecuaria Situada", col: 0xf59e0b, angle: Math.PI },
      { name: "VINCULACIÓN MUN.", sub: "Aulas Híbridas y Logística", col: 0xd4af37, angle: (3 * Math.PI) / 2 }
    ];

    engine.anim16_pods = [];
    const podR = 0.65;

    projects.forEach((pj) => {
      const podGroup = new THREE.Group();

      const podMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.09, 1),
        new THREE.MeshStandardMaterial({
          color: pj.col,
          emissive: pj.col,
          emissiveIntensity: 0.55,
          roughness: 0.15,
          metalness: 0.8
        })
      );
      podGroup.add(podMesh);

      // Cartela del proyecto
      const label = engine.createLabelSprite(pj.name, pj.sub, "#0f2d59", false);
      label.position.set(0, 0.18, 0);
      podGroup.add(label);

      gimbal.add(podGroup);
      engine.anim16_pods.push({ group: podGroup, angle: pj.angle, mesh: podMesh });
    });

    adhGroup.add(gimbal);
    engine.anim16_gimbal = gimbal;

    // Placa frontal grabada
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "SECRETARÍAS COMO ADHOCRACIAS MATRICIALES",
      "Extensión y CyT • Proyecto 'Nodos en Red' • Flexibilidad de Misión",
      ["MINTZBERG • WEISBORD • UNCo"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    adhGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "ADHOCRACIAS MATRICIALES EN CURZAS",
      "Estructuras Flexibles de Proyecto Frente al Aislamiento Burocrático",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    // Arte Algorítmico: Flujo de proyectos adhocráticos territoriales
    if (engine.createVectorFlowParticles) {
      const flow16 = engine.createVectorFlowParticles(240, 0.95, 1.2, 0x10b981, 0x0284c7);
      flow16.position.set(0, 0.15, 0);
      g.add(flow16);
      engine.anim16_flow = flow16;
    }

    g.add(adhGroup);
  },

  animate(engine, t) {
    if (engine.anim16_gimbal) {
      engine.anim16_gimbal.rotation.y = t * 0.4;
    }
    if (engine.anim16_rings) {
      engine.anim16_rings.forEach((r, i) => {
        r.rotation.z = t * (0.3 + i * 0.15);
      });
    }
    if (engine.anim16_pods) {
      const podR = 0.65;
      engine.anim16_pods.forEach((p, i) => {
        const a = p.angle + t * 0.6;
        p.group.position.set(Math.cos(a) * podR, Math.sin(t * 2 + i) * 0.08, Math.sin(a) * podR);
        if (p.mesh) p.mesh.rotation.y = t * 1.5;
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 17. PARADOJA DEL CO-GOBIERNO Y PUENTES DE POLIGOBERNANZA
//     (Tiempos Deliberativos Colegiados vs. Demandas Operativas de Gestión)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_17"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const clockGroup = new THREE.Group();
    clockGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.72, 0.10, 0.76, { color: 0x1e293b });
    chassis.position.y = -0.92;
    clockGroup.add(chassis);

    // 1. EL GRAN ENGRANAJE DEL CONSEJO DIRECTIVO (Lento, deliberativo, democrático)
    const gearLarge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.06, 28),
      engine.brassMat(0xd4af37)
    );
    gearLarge.position.set(-0.45, -0.20, 0);
    gearLarge.rotation.x = Math.PI / 2;
    clockGroup.add(gearLarge);
    engine.anim17_gearLarge = gearLarge;

    // Núcleo del Consejo Directivo con 4 claustros
    const labelLarge = engine.createLabelSprite(
      "CONSEJO DIRECTIVO",
      "Tiempos Deliberativos Colegiados • Burocracia Democrática",
      "#0f2d59",
      false
    );
    labelLarge.position.set(-0.45, 0.55, 0);
    clockGroup.add(labelLarge);

    // 2. EL PIÑÓN RÁPIDO DE GESTIÓN TERRITORIAL (Ágil, operativo, continuo)
    const gearSmall = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.06, 16),
      engine.brassMat(0x0284c7)
    );
    gearSmall.position.set(0.45, -0.20, 0);
    gearSmall.rotation.x = Math.PI / 2;
    clockGroup.add(gearSmall);
    engine.anim17_gearSmall = gearSmall;

    const labelSmall = engine.createLabelSprite(
      "GESTIÓN OPERATIVA",
      "Respuesta Ágil en Territorio • 10 Nodos",
      "#0f2d59",
      false
    );
    labelSmall.position.set(0.45, 0.55, 0);
    clockGroup.add(labelSmall);

    // 3. El Árbol de Transmisión / Puente de Poligobernanza (Sincroniza ambos ritmos)
    const bridgeShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 0.90, 16),
      engine.goldMat(0xffd700)
    );
    bridgeShaft.rotation.z = Math.PI / 2;
    bridgeShaft.position.set(0, -0.20, 0.12);
    clockGroup.add(bridgeShaft);

    // Embrague central de amortiguación institucional
    const clutch = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 0.6,
        roughness: 0.15,
        metalness: 0.85
      })
    );
    clutch.position.set(0, -0.20, 0.12);
    clockGroup.add(clutch);
    engine.anim17_clutch = clutch;

    // Placa frontal de la paradoja
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "PARADOJA DEL CO-GOBIERNO Y PUENTES DE POLIGOBERNANZA",
      "Tiempos Deliberativos del Plenario vs. Velocidad Territorial de las Secretarías",
      ["ARTICULACIÓN Y COHESIÓN INSTITUCIONAL"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    clockGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "TIEMPOS DELIBERATIVOS VS. GESTIÓN",
      "La Paradoja de Co-Gobierno y los Puentes de Poligobernanza",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(clockGroup);
  },

  animate(engine, t) {
    if (engine.anim17_gearLarge) {
      engine.anim17_gearLarge.rotation.z = t * 0.25; // Gira lento
    }
    if (engine.anim17_gearSmall) {
      engine.anim17_gearSmall.rotation.z = -t * 0.75; // Gira 3 veces más rápido
    }
    if (engine.anim17_clutch) {
      engine.anim17_clutch.rotation.y = t * 1.5;
      const p = 1.0 + Math.sin(t * 3) * 0.08;
      engine.anim17_clutch.scale.set(p, p, p);
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 18. DE LA PLANIFICACIÓN NORMATIVA A LA SITUACIONAL (PES)
//     (Aportes Teóricos de Carlos Matus para Contextos Complejos y de Conflicto)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_18"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const pesGroup = new THREE.Group();
    pesGroup.position.set(0, -0.15, 0);

    // 1. El Tablero de Ajedrez Estratégico de Matus (Tablero de Cuadrantes)
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(1.30, 0.08, 1.30),
      engine.graniteMat(0x0f172a)
    );
    board.position.y = -0.82;
    pesGroup.add(board);

    // Cuadrícula grabada de escaques de mármol Carrara y latón
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const cell = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 0.015, 0.28),
          (r + c) % 2 === 0 ? engine.marbleMat(0xf8fafc, 0.2) : engine.brassMat(0xd4af37)
        );
        cell.position.set(-0.45 + c * 0.30, -0.77, -0.45 + r * 0.30);
        pesGroup.add(cell);
      }
    }

    // 2. La Pieza Central del Planificador Inmerso en el Juego (No observador exterior)
    const actorKing = new THREE.Group();
    actorKing.position.set(0, -0.40, 0);

    const kingBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.10, 0.14, 0.35, 24),
      engine.goldMat(0xffd700)
    );
    actorKing.add(kingBase);

    const kingCrown = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12, 1),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.7,
        roughness: 0.1,
        metalness: 0.9
      })
    );
    kingCrown.position.y = 0.25;
    actorKing.add(kingCrown);

    const kingLabel = engine.createLabelSprite(
      "EL ACTOR DENTRO DEL JUEGO",
      "Carlos Matus • El Planificador como Jugador Estratégico",
      "#0f2d59",
      false
    );
    kingLabel.position.set(0, 0.50, 0);
    actorKing.add(kingLabel);

    pesGroup.add(actorKing);
    engine.anim18_king = actorKing;

    // 3. Cuatro Vectores de Conflicto y Oponentes Estratégicos (Fuerzas Sociales)
    const forces = [
      { x: -0.45, z: 0.45, name: "RECURSOS", sub: "Control Fiscal SPU", col: 0xef4444 },
      { x: 0.45, z: 0.45, name: "VOLUNTAD", sub: "Consenso Gremial", col: 0xf59e0b },
      { x: -0.45, z: -0.45, name: "TERRITORIO", sub: "Presión Municipal", col: 0x0284c7 },
      { x: 0.45, z: -0.45, name: "TIEMPO", sub: "Horizonte 2026/27", col: 0x10b981 }
    ];

    forces.forEach((fc) => {
      const piece = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.08, 0.22, 16),
        engine.brassMat(fc.col)
      );
      piece.position.set(fc.x, -0.66, fc.z);
      pesGroup.add(piece);

      // Flecha de fuerza vectorial apuntando al centro
      const dir = new THREE.Vector3(-fc.x, 0, -fc.z).normalize();
      const arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(fc.x, -0.50, fc.z), 0.22, fc.col, 0.06, 0.04);
      pesGroup.add(arrow);
    });

    // Placa frontal de Matus
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "PLANIFICACIÓN SITUACIONAL (PES)",
      "Carlos Matus: Gobernar es lidiar con el conflicto • El planificador es un jugador",
      ["SUPERACIÓN DE LA PLANIFICACIÓN NORMATIVA LIBRESCA"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    pesGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "DE LA PLANIFICACIÓN NORMATIVA A LA PES",
      "Incertidumbre, Juego Social y Conflicto de Voluntades (Matus)",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    // Arte Algorítmico: Atractor de Lorenz de las 3 Viabilidades (PES de Carlos Matus)
    if (engine.createLorenzAttractor) {
      const lorenz18 = engine.createLorenzAttractor(0.026, 2600, 0xfbbf24, 0x38bdf8);
      lorenz18.position.set(0, 0.25, 0);
      g.add(lorenz18);
      engine.anim18_lorenz = lorenz18;
    }

    g.add(pesGroup);
  },

  animate(engine, t) {
    if (engine.anim18_king) {
      engine.anim18_king.rotation.y = t * 0.5;
      engine.anim18_king.position.y = -0.40 + Math.sin(t * 2) * 0.025;
    }
    if (engine.anim18_lorenz) {
      engine.anim18_lorenz.rotation.y = t * 0.28;
      engine.anim18_lorenz.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 19. LOS CUATRO MOMENTOS DE LA PES APLICADOS AL CURZAS
//     (Momento Explicativo, Normativo, Estratégico y Táctico-Operacional)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_19"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const mGroup = new THREE.Group();
    mGroup.position.set(0, -0.15, 0);

    // 4 Escalones Helicoidales / Momentos del Método PES
    const moments = [
      { y: -0.75, angle: 0, title: "M1: EXPLICATIVO", desc: "Fue, es y tiende a ser • Diagnóstico", col: 0xef4444 },
      { y: -0.45, angle: Math.PI / 2, title: "M2: NORMATIVO", desc: "Debe ser • El Diseño de Objetivos", col: 0x0284c7 },
      { y: -0.15, angle: Math.PI, title: "M3: ESTRATÉGICO", desc: "Puede ser • Viabilidad y Alianzas", col: 0xf59e0b },
      { y: 0.15, angle: (3 * Math.PI) / 2, title: "M4: TÁCTICO", desc: "Hacer • Coyuntura y Operaciones", col: 0x10b981 }
    ];

    engine.anim19_steps = [];
    const radius = 0.58;

    // Columna vertebral central de mármol
    const spine = engine.createClassicalColumn(1.30, 0.12, 0xd4af37, true);
    spine.position.set(0, -0.30, 0);
    mGroup.add(spine);

    moments.forEach((m, idx) => {
      const stepGroup = new THREE.Group();

      const px = Math.cos(m.angle) * radius;
      const pz = Math.sin(m.angle) * radius;
      stepGroup.position.set(px, m.y, pz);

      // Peldaño voladizo de mármol y latón
      const stepSlab = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.08, 0.32),
        engine.marbleMat(0xf8fafc, 0.2)
      );
      stepGroup.add(stepSlab);

      const stepBorder = new THREE.Mesh(
        new THREE.BoxGeometry(0.44, 0.02, 0.34),
        engine.brassMat(m.col)
      );
      stepBorder.position.y = 0.04;
      stepGroup.add(stepBorder);

      // Gema indicadora del momento
      const gem = new THREE.Mesh(
        new THREE.SphereGeometry(0.065, 16, 16),
        new THREE.MeshStandardMaterial({
          color: m.col,
          emissive: m.col,
          emissiveIntensity: 0.6,
          roughness: 0.15,
          metalness: 0.8
        })
      );
      gem.position.y = 0.14;
      stepGroup.add(gem);

      // Cartela con el nombre del momento
      const plaque = engine.createEngravedPlaque(
        0.44,
        0.16,
        m.title,
        m.desc,
        [`MOMENTO ${idx + 1} PES`],
        { theme: "dark" }
      );
      plaque.position.set(0, -0.15, 0.18);
      stepGroup.add(plaque);

      mGroup.add(stepGroup);
      engine.anim19_steps.push({ group: stepGroup, gem, baseY: m.y });
    });

    // Flecha helicoidal ascendente que une los 4 momentos en bucle continuo
    const helixCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(radius, -0.75, 0),
      new THREE.Vector3(0, -0.45, radius),
      new THREE.Vector3(-radius, -0.15, 0),
      new THREE.Vector3(0, 0.15, -radius),
      new THREE.Vector3(radius, 0.45, 0)
    ]);

    const helixTube = new THREE.Mesh(
      new THREE.TubeGeometry(helixCurve, 64, 0.014, 8, false),
      engine.brassMat(0xd4af37)
    );
    mGroup.add(helixTube);

    // Partícula viajera en la hélice
    const runner = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfffad0 })
    );
    mGroup.add(runner);
    engine.anim19_runner = { mesh: runner, curve: helixCurve };

    // Placa frontal de los momentos
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "LOS CUATRO MOMENTOS DEL MÉTODO PES",
      "Proceso No Lineal • Bucle Continuo de Planificación y Gobierno",
      ["METODOLOGÍA DE CARLOS MATUS"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    mGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "LOS 4 MOMENTOS DE LA PES EN CURZAS",
      "M1 Explicativo -> M2 Normativo -> M3 Estratégico -> M4 Táctico",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(mGroup);
  },

  animate(engine, t) {
    if (engine.anim19_runner) {
      const prog = (t * 0.35) % 1.0;
      engine.anim19_runner.mesh.position.copy(engine.anim19_runner.curve.getPoint(prog));
    }
    if (engine.anim19_steps) {
      engine.anim19_steps.forEach((st, i) => {
        if (st.gem) {
          const s = 1.0 + Math.sin(t * 3 + i) * 0.12;
          st.gem.scale.set(s, s, s);
        }
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 20. TRABAJADORES COMO ACTORES ESTRATÉGICOS Y VIABILIDAD
//     (El Personal Nodocente y Docente en la Construcción de Viabilidad)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_20"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const workerGroup = new THREE.Group();
    workerGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.72, 0.10, 0.76, { color: 0x1e293b });
    chassis.position.y = -0.92;
    workerGroup.add(chassis);

    // 1. Columna Izquierda: Estamento Nodocente (Soporte Técnico y Administrativo)
    const colNodocente = engine.createClassicalColumn(0.95, 0.09, 0x0284c7, true);
    colNodocente.position.set(-0.55, -0.38, 0);
    workerGroup.add(colNodocente);

    const plaqueNoDoc = engine.createEngravedPlaque(
      0.48,
      0.18,
      "PERSONAL NODOCENTE",
      "Soporte Administrativo y Aulas Híbridas",
      ["ACTOR ESTRATÉGICO 1"],
      { theme: "dark" }
    );
    plaqueNoDoc.position.set(-0.55, -0.85, 0.42);
    workerGroup.add(plaqueNoDoc);

    // 2. Columna Derecha: Estamento Docente (Academia e Investigación)
    const colDocente = engine.createClassicalColumn(0.95, 0.09, 0xd4af37, true);
    colDocente.position.set(0.55, -0.38, 0);
    workerGroup.add(colDocente);

    const plaqueDoc = engine.createEngravedPlaque(
      0.48,
      0.18,
      "PERSONAL DOCENTE",
      "Cátedras, Carreras y Extensión Territorial",
      ["ACTOR ESTRATÉGICO 2"],
      { theme: "dark" }
    );
    plaqueDoc.position.set(0.55, -0.85, 0.42);
    workerGroup.add(plaqueDoc);

    // 3. Arquitrabe de la Viabilidad Institucional sostenido por ambos estamentos
    const architrave = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 0.14, 0.35),
      engine.marbleMat(0xf8fafc, 0.2)
    );
    architrave.position.set(0, 0.16, 0);
    workerGroup.add(architrave);

    // Frontispicio dorado con el lema de viabilidad
    const tympanum = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.16, 1.45, 3),
      engine.brassMat(0xd4af37)
    );
    tympanum.rotation.z = Math.PI / 2;
    tympanum.position.set(0, 0.30, 0);
    workerGroup.add(tympanum);

    // Gema central de Viabilidad Organizacional (Sin trabajadores, no hay viabilidad)
    const viabilityGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.14, 1),
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.85
      })
    );
    viabilityGem.position.set(0, 0.52, 0);
    workerGroup.add(viabilityGem);
    engine.anim20_gem = viabilityGem;

    // Placa frontal central
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "LOS TRABAJADORES COMO SUJETOS ESTRATÉGICOS",
      "No son meros ejecutores: son constructores de la viabilidad organizacional",
      ["CLAVE DE ÉXITO EN LA GESTIÓN PÚBLICA"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    workerGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "TRABAJADORES Y CONSTRUCCIÓN DE VIABILIDAD",
      "El Personal Universitario como Sujeto Activo de la Planificación",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(workerGroup);
  },

  animate(engine, t) {
    if (engine.anim20_gem) {
      engine.anim20_gem.rotation.y = t * 1.0;
      engine.anim20_gem.position.y = 0.52 + Math.sin(t * 2.5) * 0.03;
    }
  }
};

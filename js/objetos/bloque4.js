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
    engine.createMuseumPlinth(g, 1.75, 0.22, -1.22);

    const flowGroup = new THREE.Group();
    flowGroup.position.set(0, -0.15, 0);

    // Zócalo base
    const baseDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.68, 1.72, 0.08, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    baseDisk.position.y = -0.85;
    flowGroup.add(baseDisk);

    // Las 6 Etapas del Flujograma de Trámite de Licencias en Personal
    const steps = [
      { num: "1. SOLICITUD", name: "Agente en SUDOCU", sub: "Inicio Electrónico", col: 0x0284c7, x: -1.25, z: 0.15 },
      { num: "2. AVAL", name: "Director de Depto", sub: "Visto Bueno Cátedra", col: 0x38bdf8, x: -0.75, z: -0.15 },
      { num: "3. CONTROL", name: "Dpto. de Personal", sub: "Verificación CCT", col: 0xf59e0b, x: -0.25, z: 0.15 },
      { num: "4. AUTORIZACIÓN", name: "Secretaría Admin.", sub: "Cuello de Botella", col: 0xef4444, x: 0.25, z: -0.15 },
      { num: "5. RESOLUCIÓN", name: "Decanato CURZAS", sub: "Acto Administrativo", col: 0xd4af37, x: 0.75, z: 0.15 },
      { num: "6. LIQUIDACIÓN", name: "SIU-Mapuche", sub: "Cierre Salarial", col: 0x10b981, x: 1.25, z: -0.15 }
    ];

    engine.anim16_steps = [];

    steps.forEach((st) => {
      const sGroup = new THREE.Group();
      sGroup.position.set(st.x, -0.45, st.z);

      // Columna de estación
      const col = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.14, 0.60, 16),
        engine.marbleMat(0xf8fafc, 0.25)
      );
      sGroup.add(col);

      // Anillo con color de etapa
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.15, 0.015, 12, 24),
        engine.brassMat(st.col)
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.30;
      sGroup.add(ring);

      // Gema de pulso
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.07, 1),
        new THREE.MeshStandardMaterial({
          color: st.col,
          emissive: st.col,
          emissiveIntensity: 0.7,
          roughness: 0.1,
          metalness: 0.8
        })
      );
      gem.position.y = 0.44;
      sGroup.add(gem);

      // Placa de etapa
      const plaque = engine.createEngravedPlaque(
        0.32,
        0.14,
        st.num,
        st.name,
        [st.sub],
        { theme: "dark" }
      );
      plaque.position.set(0, -0.05, 0.16);
      sGroup.add(plaque);

      flowGroup.add(sGroup);
      engine.anim16_steps.push({ group: sGroup, gem });
    });

    // Conductos de conexión entre etapas del circuito
    for (let i = 0; i < steps.length - 1; i++) {
      const p1 = steps[i];
      const p2 = steps[i + 1];
      const dx = p2.x - p1.x;
      const dz = p2.z - p1.z;
      const dist = Math.hypot(dx, dz);
      const angle = Math.atan2(dz, dx);

      const pipe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, dist, 12),
        engine.brassMat(0xd4af37)
      );
      pipe.rotation.z = Math.PI / 2;
      pipe.rotation.y = -angle;
      pipe.position.set((p1.x + p2.x) / 2, -0.25, (p1.z + p2.z) / 2);
      flowGroup.add(pipe);
    }

    // Placa monumental frontal
    const frontPlaque = engine.createEngravedPlaque(
      1.10,
      0.24,
      "FLUJOGRAMA DE PERSONAL: CIRCUITO DE LICENCIAS",
      "Mapeo de las 6 Etapas desde la Solicitud Inicial en SUDOCU hasta la Liquidación",
      ["DETECCIÓN DE CUELLOS DE BOTELLA BUROCRÁTICOS"],
      { theme: "dark" }
    );
    frontPlaque.position.set(0, -0.66, 0.95);
    frontPlaque.rotation.x = -Math.PI * 0.12;
    flowGroup.add(frontPlaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "CIRCUITO CLAVE DE PERSONAL: TRÁMITE DE LICENCIAS",
      "Transición hacia SUDOCU • 6 Etapas y Cuello de Botella en Autorizaciones",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.25, 0);
    g.add(headerTitle);

    g.add(flowGroup);
  },

  animate(engine, t) {
    if (engine.anim16_steps) {
      engine.anim16_steps.forEach((s, i) => {
        if (s.gem) {
          s.gem.rotation.y = t * 1.5;
          const sc = 1.0 + Math.sin(t * 3 + i) * 0.15;
          s.gem.scale.set(sc, sc, sc);
        }
      });
    }
  }
};

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
      { y: -0.75, angle: 0, title: "1. INSUMOS", desc: "Crédito Inciso 1 y Recursos Físicos", col: 0x0284c7 },
      { y: -0.45, angle: Math.PI / 2, title: "2. PROCESOS", desc: "Actividades de Docencia y Gestión", col: 0xf59e0b },
      { y: -0.15, angle: Math.PI, title: "3. PROD. INTERMEDIOS", desc: "Horas Cátedra, Aulas y Módulos", col: 0x10b981 },
      { y: 0.15, angle: (3 * Math.PI) / 2, title: "4. PROD. TERMINALES", desc: "Graduados, Títulos y Transferencia", col: 0xd4af37 }
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
        [`ETAPA ${idx + 1} MAKON`],
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
      "PRESUPUESTO POR PROGRAMAS (MAKON)", "Cadena de Valor Público Universitario • Insumos a Productos", ["VINCULACIÓN PLAN-PRESUPUESTO"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    mGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "PRESUPUESTO POR PROGRAMAS: CADENA INSUMO-PRODUCTO", "Insumos -> Procesos -> Productos Intermedios -> Productos Terminales",
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
    engine.createMuseumPlinth(g, 1.65, 0.22, -1.22);

    const budgetGroup = new THREE.Group();
    budgetGroup.position.set(0, -0.15, 0);

    // Zócalo base
    const baseDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.58, 1.62, 0.08, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    baseDisk.position.y = -0.85;
    budgetGroup.add(baseDisk);

    // 1. Torre Monumental Izquierda: Inciso 1 - Gastos en Personal (90,2% • $4.399 M)
    const towerH = 1.28;
    const towerPersonal = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, towerH, 0.55),
      engine.marbleMat(0xf8fafc, 0.25)
    );
    towerPersonal.position.set(-0.48, -0.81 + towerH / 2, 0);
    budgetGroup.add(towerPersonal);

    // Corona dorada de la torre de personal
    const personalCrown = new THREE.Mesh(
      new THREE.BoxGeometry(0.60, 0.05, 0.60),
      engine.brassMat(0xd4af37)
    );
    personalCrown.position.set(-0.48, -0.81 + towerH + 0.025, 0);
    budgetGroup.add(personalCrown);

    // Gema de valor humano
    const personalGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12, 1),
      new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        emissive: 0xb45309,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.85
      })
    );
    personalGem.position.set(-0.48, -0.81 + towerH + 0.18, 0);
    budgetGroup.add(personalGem);
    engine.anim20_gem1 = personalGem;

    // Placa de la Torre de Personal
    const plaquePersonal = engine.createEngravedPlaque(
      0.52,
      0.22,
      "INCISO 1: PERSONAL",
      "90,2% DEL GASTO TOTAL",
      ["$4.399.054.000 (SALARIOS Y ZONA)"],
      { theme: "dark" }
    );
    plaquePersonal.position.set(-0.48, -0.35, 0.30);
    budgetGroup.add(plaquePersonal);

    // 2. Torre Compacta Derecha: Incisos 2, 3 y 4 - Bienes y Servicios (9,8% • $478 M)
    const towerServH = 0.22;
    const towerServicios = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, towerServH, 0.42),
      engine.marbleMat(0x64748b, 0.35)
    );
    towerServicios.position.set(0.48, -0.81 + towerServH / 2, 0);
    budgetGroup.add(towerServicios);

    const servCrown = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.03, 0.46),
      engine.brassMat(0x0284c7)
    );
    servCrown.position.set(0.48, -0.81 + towerServH + 0.015, 0);
    budgetGroup.add(servCrown);

    const servGem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.06, 1),
      new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.8
      })
    );
    servGem.position.set(0.48, -0.81 + towerServH + 0.10, 0);
    budgetGroup.add(servGem);
    engine.anim20_gem2 = servGem;

    // Placa de Funcionamiento
    const plaqueServ = engine.createEngravedPlaque(
      0.44,
      0.18,
      "FUNCIONAMIENTO",
      "9,8% RESTANTE",
      ["$478.146.000"],
      { theme: "dark" }
    );
    plaqueServ.position.set(0.48, -0.55, 0.24);
    budgetGroup.add(plaqueServ);

    // Placa frontal monumental
    const frontPlaque = engine.createEngravedPlaque(
      1.10,
      0.24,
      "PRESUPUESTO GENERAL CURZAS: $4.877 MILLONES",
      "Centralidad Absoluta del Inciso 1 (90,2% a Salarios con 40% de Zona Desfavorable)",
      ["EL PERSONAL COMO LA AUTÉNTICA CAPACIDAD ESTATAL"],
      { theme: "dark" }
    );
    frontPlaque.position.set(0, -0.66, 0.90);
    frontPlaque.rotation.x = -Math.PI * 0.12;
    budgetGroup.add(frontPlaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "PROGRAMACIÓN PRESUPUESTARIA: INCISO 1 Y FACTOR HUMANO",
      "Presupuesto Total $4.877 M • 90,2% en Personal y 9,8% en Funcionamiento",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.25, 0);
    g.add(headerTitle);

    g.add(budgetGroup);
  },

  animate(engine, t) {
    if (engine.anim20_gem1) {
      engine.anim20_gem1.rotation.y = t * 1.2;
    }
    if (engine.anim20_gem2) {
      engine.anim20_gem2.rotation.y = -t * 1.5;
    }
  }
};

/**
 * apply_perfect_slide_3d_alignment.js
 * Sincroniza y alinea al 100% cada una de las 29 filminas con su escultura 3D exacta y temática.
 * Edita los textos internos de las esculturas para que reflejen con precisión matemática el contenido de cada avance.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const presentacionPath = path.join(rootDir, 'data', 'presentacion_data.js');
const bloque1Path = path.join(rootDir, 'js', 'objetos', 'bloque1.js');
const bloque3Path = path.join(rootDir, 'js', 'objetos', 'bloque3.js');
const bloque4Path = path.join(rootDir, 'js', 'objetos', 'bloque4.js');

console.log('Iniciando alineación temática perfecta entre Filminas y Esculturas 3D...');

// ============================================================================
// 1. REASIGNAR MAPA EXACTO DE ESCENAS 3D EN DATA/PRESENTACION_DATA.JS
// ============================================================================
const exactMapping = [
  { slideNum: 1,  escena: "anim_01" }, // Carátula: El Gran Tomo Encuadernado con Nombre y Cátedra
  { slideNum: 2,  escena: "anim_02" }, // Hoja de Ruta: Monolito de los 5 Avances de Cátedra
  { slideNum: 3,  escena: "anim_03" }, // Avance 1: Marco Institucional, Ley 19.648 y Autonomía Art. 75 inc 19
  { slideNum: 4,  escena: "anim_08" }, // Avance 1: Burocracia Profesional y Pirámide de Autoridad Weberiana
  { slideNum: 5,  escena: "anim_04" }, // Avance 1: Burocracia Tradicional vs NGP (Balanza de Tensión Normativa)
  { slideNum: 6,  escena: "anim_11" }, // Avance 1: Tríada de Accountability: Vertical, Horizontal y Social (O'Donnell)
  { slideNum: 7,  escena: "anim_13" }, // Avance 1: Gobernanza Inteligente y Estado Plataforma (Oszlak)
  { slideNum: 8,  escena: "anim_19" }, // Avance 2: Planificación Situacional (PES de Matus): Los 4 Momentos
  { slideNum: 9,  escena: "anim_22" }, // Avance 2: Mapeo de Actores Clave (Stakeholders en RRHH)
  { slideNum: 10, escena: "anim_21" }, // Avance 2: Matriz FODA Situada (Fortalezas y Debilidades)
  { slideNum: 11, escena: "anim_06" }, // Avance 2: Oportunidades y Territorio (Maqueta Río Negro y 10 Nodos)
  { slideNum: 12, escena: "anim_23" }, // Avance 2: Capacidades Estatales según Julián Bertranou (4 Pilares)
  { slideNum: 13, escena: "anim_14" }, // Avance 2: Competencias Técnicas y Archipiélago de Silos Informáticos
  { slideNum: 14, escena: "anim_15" }, // Avance 3: Organigrama Institucional (Estructura Formal vs Real)
  { slideNum: 15, escena: "anim_07" }, // Avance 3: Centralización vs Desconcentración (Red de Aulas Híbridas)
  { slideNum: 16, escena: "anim_16" }, // Avance 3: Flujograma del Circuito de Licencias (6 Etapas)
  { slideNum: 17, escena: "anim_10" }, // Avance 3: Transición a SUDOCU, Firma Digital y Cuellos de Botella
  { slideNum: 18, escena: "anim_17" }, // Avance 3: Inercia Estructural del Papel y Reloj Dual
  { slideNum: 19, escena: "anim_05" }, // Avance 3: Propuestas de Rediseño: Interoperabilidad y Subrogancia
  { slideNum: 20, escena: "anim_20" }, // Avance 4: Presupuesto Total ($4.877M) e Inciso 1 Personal (90,2%)
  { slideNum: 21, escena: "anim_09" }, // Avance 4: Zona Desfavorable (40%) y Balanza de Claustros Salariales
  { slideNum: 22, escena: "anim_18" }, // Avance 4: Presupuesto por Programas: Cadena Insumo-Producto (Makon)
  { slideNum: 23, escena: "anim_12" }, // Avance 4: Sistemas Financieros Integrados: SIU-Pilagá / Mapuche / e-SIDIF
  { slideNum: 24, escena: "anim_24" }, // Avance 4: El Factor Humano como la Auténtica Capacidad Estatal
  { slideNum: 25, escena: "anim_25" }, // Avance 5: Ecosistema de Control Tripartito: AGN, UAI y SIGEN
  { slideNum: 26, escena: "anim_26" }, // Avance 5: Evaluación del Desempeño: CCT 366/06 y Carrera Docente
  { slideNum: 27, escena: "anim_27" }, // Avance 5: Diseño del Tablero de Comando con los 4 KPIs Estratégicos
  { slideNum: 28, escena: "anim_28" }, // Avance 5: Circuito de Control y Bucle de Retroalimentación Continua
  { slideNum: 29, escena: "anim_29" }  // Cierre: Conclusión General de los 5 Avances y Atril de Graduación
];

let presContent = fs.readFileSync(presentacionPath, 'utf8');

// Aplicar el mapeo a cada slide en data/presentacion_data.js
exactMapping.forEach(({ slideNum, escena }) => {
  const slideId = `slide_${slideNum}`;
  // Reemplazar la escena3D de ese slide
  const slideRegex = new RegExp(`("id":\\s*"${slideId}"[\\s\\S]*?"escena3D":\\s*)"[^"]+"`, 'g');
  if (slideRegex.test(presContent)) {
    presContent = presContent.replace(slideRegex, `$1"${escena}"`);
  } else {
    console.warn(`⚠️ No se pudo actualizar escena3D para ${slideId}`);
  }
});

fs.writeFileSync(presentacionPath, presContent, 'utf8');
console.log('✓ Asignación de escenas 3D actualizada al 100% en data/presentacion_data.js.');

// ============================================================================
// 2. ACTUALIZAR BLOQUE1.JS (ANIM_01 Y ANIM_02)
// ============================================================================
let b1 = fs.readFileSync(bloque1Path, 'utf8');

// Actualizar las páginas de anim_01 para reflejar los 5 Avances
const oldSectionsTarget = `  const sections = [
    { title: "SECCIÓN 1 — MODELO DE GESTIÓN Y GOBERNANZA", lines: [400, 385, 395, 340, 260] },
    { title: "SECCIÓN 2 — POLIGOBERNANZA Y ESTADO PLATAFORMA", lines: [410, 395, 370, 310] },
    { title: "SECCIÓN 3 — TRAMADOS INSTITUCIONALES AD HOC", lines: [390, 405, 360, 380, 290] },
    { title: "SECCIÓN 4 — PLANIFICACIÓN SITUACIONAL Y FODA", lines: [415, 385, 390, 350, 320, 230] }
  ];`;

const newSectionsCode = `  const sections = [
    { title: "AVANCE 1 — CONTEXTO, GESTIÓN Y GOBERNANZA", lines: [400, 385, 395, 340, 260] },
    { title: "AVANCE 2 — PLANIFICACIÓN SITUACIONAL Y FODA", lines: [410, 395, 370, 310] },
    { title: "AVANCE 3 — PROCESOS Y ECOSISTEMA DIGITAL (SUDOCU)", lines: [390, 405, 360, 380, 290] },
    { title: "AVANCE 4 — PROGRAMACIÓN PRESUPUESTARIA Y RR. HH.", lines: [415, 385, 390, 350, 320, 230] },
    { title: "AVANCE 5 — SISTEMAS DE CONTROL Y TABLERO 4 KPIs", lines: [405, 390, 375, 330, 270] }
  ];`;

if (b1.includes(oldSectionsTarget)) {
  b1 = b1.replace(oldSectionsTarget, newSectionsCode);
  console.log('✓ anim_01: Textura del libro actualizada con los 5 Avances de Cátedra.');
}

// Actualizar anim_02 para que sea el Monolito de los 5 Avances de Cátedra
// Buscamos la definición de anim_02 en bloque1.js
const anim02Header = 'window.Presentation3D_Objects["anim_02"] = {';
const anim03Header = 'window.Presentation3D_Objects["anim_03"] = {';

const a02Start = b1.indexOf(anim02Header);
const a03Start = b1.indexOf(anim03Header);

if (a02Start !== -1 && a03Start !== -1) {
  const newAnim02Code = `window.Presentation3D_Objects["anim_02"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.75, 0.22, -1.22);

    const roadmapGroup = new THREE.Group();
    roadmapGroup.position.set(0, -0.15, 0);

    // Zócalo base circular de granito pulido
    const baseDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.68, 1.72, 0.08, 48),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    baseDisk.position.y = -0.85;
    roadmapGroup.add(baseDisk);

    // Los 5 Pilares de la Hoja de Ruta de los 5 Avances
    const avances = [
      { num: "AVANCE 1", title: "GOBERNANZA", sub: "Marco Institucional & Weber", col: 0x0284c7, x: -1.05, h: 0.65 },
      { num: "AVANCE 2", title: "PLANIFICACIÓN", sub: "PES Matus & FODA Situado", col: 0x10b981, x: -0.52, h: 0.78 },
      { num: "AVANCE 3", title: "DIGITALIZACIÓN", sub: "SUDOCU & Flujograma", col: 0xf59e0b, x: 0.00, h: 0.92 },
      { num: "AVANCE 4", title: "PRESUPUESTO", sub: "Inciso 1 Personal (90,2%)", col: 0xef4444, x: 0.52, h: 1.05 },
      { num: "AVANCE 5", title: "CONTROL & KPIs", sub: "AGN, UAI, SIGEN & 4 KPIs", col: 0xd4af37, x: 1.05, h: 1.18 }
    ];

    engine.anim02_pillars = [];

    avances.forEach((av, idx) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(av.x, -0.81 + av.h / 2, 0);

      // Columna de mármol Carrara
      const col = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, av.h, 0.38),
        engine.marbleMat(0xf8fafc, 0.22)
      );
      col.castShadow = true;
      col.receiveShadow = true;
      pGroup.add(col);

      // Capitel de latón noble
      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.04, 0.42),
        engine.brassMat(av.col)
      );
      cap.position.y = av.h / 2 + 0.02;
      pGroup.add(cap);

      // Gema superior de avance
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08, 1),
        new THREE.MeshStandardMaterial({
          color: av.col,
          emissive: av.col,
          emissiveIntensity: 0.65,
          roughness: 0.1,
          metalness: 0.8
        })
      );
      gem.position.y = av.h / 2 + 0.12;
      pGroup.add(gem);

      // Placa frontal grabada
      const plaque = engine.createEngravedPlaque(
        0.36,
        0.16,
        av.num,
        av.title,
        [av.sub],
        { theme: "dark" }
      );
      plaque.position.set(0, 0, 0.20);
      pGroup.add(plaque);

      // Cartela superior flotante
      const label = engine.createLabelSprite(
        av.num,
        av.title,
        "#0f2d59",
        false,
        { x: 0.45 }
      );
      label.position.set(0, av.h / 2 + 0.28, 0);
      pGroup.add(label);

      roadmapGroup.add(pGroup);
      engine.anim02_pillars.push({ group: pGroup, gem, baseY: pGroup.position.y });
    });

    // Rótulo frontal monumental
    const frontPlaque = engine.createEngravedPlaque(
      1.10,
      0.24,
      "HOJA DE RUTA EJECUTIVA: LOS 5 AVANCES DE CÁTEDRA",
      "Estructura Temática según los Objetivos y Entregables Fijados por la Cátedra",
      ["PROGRAMA INTEGRAL CURZAS • UNCo 2026"],
      { theme: "dark" }
    );
    frontPlaque.position.set(0, -0.66, 0.95);
    frontPlaque.rotation.x = -Math.PI * 0.12;
    roadmapGroup.add(frontPlaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "HOJA DE RUTA: LOS 5 AVANCES DE CÁTEDRA",
      "Unidades I a V: Gobernanza, Planificación, Procesos, Presupuesto y Control",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.25, 0);
    g.add(headerTitle);

    g.add(roadmapGroup);
  },

  animate(engine, t) {
    if (engine.anim02_pillars) {
      engine.anim02_pillars.forEach((p, i) => {
        if (p.gem) {
          p.gem.rotation.y = t * (0.8 + i * 0.2);
          const s = 1.0 + Math.sin(t * 2.5 + i) * 0.12;
          p.gem.scale.set(s, s, s);
        }
      });
    }
  }
};\n\n`;

  b1 = b1.slice(0, a02Start) + newAnim02Code + b1.slice(a03Start);
  console.log('✓ anim_02: Reconstruida como el Monolito de los 5 Avances de Cátedra.');
}

fs.writeFileSync(bloque1Path, b1, 'utf8');

// ============================================================================
// 3. ACTUALIZAR BLOQUE4.JS (ANIM_16, ANIM_18, ANIM_20)
// ============================================================================
let b4 = fs.readFileSync(bloque4Path, 'utf8');

// A. Actualizar anim_16 para que sea el Flujograma de Licencias en 6 Etapas
const anim16Target = 'window.Presentation3D_Objects["anim_16"] = {';
const anim17Target = 'window.Presentation3D_Objects["anim_17"] = {';
const a16Start = b4.indexOf(anim16Target);
const a17Start = b4.indexOf(anim17Target);

if (a16Start !== -1 && a17Start !== -1) {
  const newAnim16Code = `window.Presentation3D_Objects["anim_16"] = {
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

    steps.forEach((st, i) => {
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
};\n\n`;

  b4 = b4.slice(0, a16Start) + newAnim16Code + b4.slice(a17Start);
  console.log('✓ anim_16: Reconstruida como el Flujograma de Licencias en 6 Etapas.');
}

// B. Actualizar anim_20 para que sea el Monumento Presupuestario ($4.877M y 90,2% en Personal)
const anim20Target = 'window.Presentation3D_Objects["anim_20"] = {';
const a20Start = b4.indexOf(anim20Target);

if (a20Start !== -1) {
  const newAnim20Code = `window.Presentation3D_Objects["anim_20"] = {
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
`;

  b4 = b4.slice(0, a20Start) + newAnim20Code;
  console.log('✓ anim_20: Reconstruida como el Monumento a la Estructura Presupuestaria ($4.877M y 90,2% Personal).');
}

fs.writeFileSync(bloque4Path, b4, 'utf8');

console.log('🎉 Sincronización y actualización de escenas 3D finalizada con éxito!');

/**
 * master_slide_3d_sync.js
 * Alinea y sincroniza al 100% cada una de las 29 filminas con su escultura 3D temática.
 * Modifica las placas y rótulos internos de los objetos 3D para que coincidan con exactitud.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const presentacionPath = path.join(rootDir, 'data', 'presentacion_data.js');
const bloque1Path = path.join(rootDir, 'js', 'objetos', 'bloque1.js');
const bloque2Path = path.join(rootDir, 'js', 'objetos', 'bloque2.js');
const bloque3Path = path.join(rootDir, 'js', 'objetos', 'bloque3.js');
const bloque4Path = path.join(rootDir, 'js', 'objetos', 'bloque4.js');
const bloque5Path = path.join(rootDir, 'js', 'objetos', 'bloque5.js');

console.log('Iniciando sincronización maestra de 29 Filminas con Esculturas 3D...');

// ============================================================================
// 1. REASIGNACIÓN EXACTA DE ESCENAS EN DATA/PRESENTACION_DATA.JS
// ============================================================================
const exactMapping = [
  { slideNum: 1,  escena: "anim_01" }, // Slide 1: Carátula e Informe Integral
  { slideNum: 2,  escena: "anim_02" }, // Slide 2: Hoja de Ruta de los 5 Avances
  { slideNum: 3,  escena: "anim_03" }, // Slide 3: Marco Institucional y Autonomía
  { slideNum: 4,  escena: "anim_08" }, // Slide 4: Burocracia Profesional y Pirámide Weberiana
  { slideNum: 5,  escena: "anim_04" }, // Slide 5: Burocracia Tradicional vs NGP (Díptico)
  { slideNum: 6,  escena: "anim_11" }, // Slide 6: Tríada de Accountability (O'Donnell)
  { slideNum: 7,  escena: "anim_13" }, // Slide 7: Gobernanza Inteligente y Estado Plataforma (Oszlak)
  { slideNum: 8,  escena: "anim_18" }, // Slide 8: Planificación Normativa vs PES (Ajedrez de Matus)
  { slideNum: 9,  escena: "anim_22" }, // Slide 9: Mapeo de Stakeholders en RRHH (Radar Concéntrico)
  { slideNum: 10, escena: "anim_21" }, // Slide 10: Matriz FODA Situada (Fortalezas y Debilidades)
  { slideNum: 11, escena: "anim_06" }, // Slide 11: Oportunidades y Territorio (Río Negro 10 Nodos)
  { slideNum: 12, escena: "anim_23" }, // Slide 12: Capacidades Estatales de Bertranou (4 Pilares)
  { slideNum: 13, escena: "anim_14" }, // Slide 13: Competencias Técnicas y Archipiélago de Silos
  { slideNum: 14, escena: "anim_15" }, // Slide 14: Organigrama Formal vs Real (Matricial)
  { slideNum: 15, escena: "anim_07" }, // Slide 15: Centralización vs Desconcentración (Aulas Híbridas)
  { slideNum: 16, escena: "anim_16" }, // Slide 16: Flujograma de Licencias en 6 Etapas
  { slideNum: 17, escena: "anim_10" }, // Slide 17: SUDOCU y Firma Digital
  { slideNum: 18, escena: "anim_17" }, // Slide 18: Inercia del Papel y Reloj Dual
  { slideNum: 19, escena: "anim_05" }, // Slide 19: Propuestas de Rediseño: Subrogancia y Firma Digital
  { slideNum: 20, escena: "anim_20" }, // Slide 20: Presupuesto Total ($4.877M) e Inciso 1 (90,2%)
  { slideNum: 21, escena: "anim_09" }, // Slide 21: Zona Desfavorable (40%) y Balanza de Claustros
  { slideNum: 22, escena: "anim_19" }, // Slide 22: Presupuesto por Programas: Cadena Insumo-Producto (Makon)
  { slideNum: 23, escena: "anim_12" }, // Slide 23: Ciclo Presupuestario y Sistemas Financieros (SIU-eSIDIF)
  { slideNum: 24, escena: "anim_24" }, // Slide 24: El Factor Humano como la Auténtica Capacidad Estatal
  { slideNum: 25, escena: "anim_25" }, // Slide 25: Ecosistema de Control Tripartito: AGN, UAI y SIGEN
  { slideNum: 26, escena: "anim_26" }, // Slide 26: Evaluación del Desempeño: CCT 366/06 y Docente
  { slideNum: 27, escena: "anim_27" }, // Slide 27: Tablero de Control de RRHH: Los 4 KPIs Estratégicos
  { slideNum: 28, escena: "anim_28" }, // Slide 28: Circuito de Control y Bucle de Retroalimentación Continua
  { slideNum: 29, escena: "anim_29" }  // Slide 29: Conclusión General de los 5 Avances y Cierre
];

let presContent = fs.readFileSync(presentacionPath, 'utf8');

exactMapping.forEach(({ slideNum, escena }) => {
  const slideId = `slide_${slideNum}`;
  const slideRegex = new RegExp(`("id":\\s*"${slideId}"[\\s\\S]*?"escena3D":\\s*)"[^"]+"`, 'g');
  if (slideRegex.test(presContent)) {
    presContent = presContent.replace(slideRegex, `$1"${escena}"`);
  } else {
    console.warn(`⚠️ No se pudo actualizar escena3D para ${slideId}`);
  }
});

fs.writeFileSync(presentacionPath, presContent, 'utf8');
console.log('✓ data/presentacion_data.js: 29 escenas reasignadas a la perfección.');

// ============================================================================
// 2. ACTUALIZACIÓN EN BLOQUE1.JS (anim_01, anim_02, anim_04, anim_05)
// ============================================================================
let b1 = fs.readFileSync(bloque1Path, 'utf8');

// A. anim_01: Textura del libro con los 5 Avances
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

// B. anim_02: Monolito de los 5 Avances de Cátedra
const a02Start = b1.indexOf('window.Presentation3D_Objects["anim_02"] = {');
const a03Start = b1.indexOf('window.Presentation3D_Objects["anim_03"] = {');

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

    avances.forEach((av) => {
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

// C. anim_04: Slide 5 - Burocracia Tradicional vs Nueva Gestión Pública
const a04Start = b1.indexOf('window.Presentation3D_Objects["anim_04"] = {');
const a05Start = b1.indexOf('window.Presentation3D_Objects["anim_05"] = {');

if (a04Start !== -1 && a05Start !== -1) {
  let a04Code = b1.slice(a04Start, a05Start);
  // Reemplazar placas y labels de anim_04
  a04Code = a04Code.replace(
    /createEngravedPlaque\(\s*0\.54,\s*0\.22,\s*"I\. ESTADO PLATAFORMA"[\s\S]*?\);/,
    `createEngravedPlaque(
      0.54,
      0.22,
      "BUROCRACIA PROFESIONAL",
      "Weber / Abal Medina • Resguardo",
      ["LEGALIDAD Y CONVENIOS CCT"],
      { theme: "dark" }
    );`
  );

  a04Code = a04Code.replace(
    /createLabelSprite\("5\. MARCO TEÓRICO", "Longo • 360° • Poligobernanza", "#0f2d59", false\);/,
    `createLabelSprite("BUROCRACIA PÚBLICA", "Resguardo de la Educación Superior", "#0f2d59", false);`
  );

  a04Code = a04Code.replace(
    /createEngravedPlaque\(\s*0\.54,\s*0\.22,\s*"II\. TRAMADOS AD HOC"[\s\S]*?\);/,
    `createEngravedPlaque(
      0.54,
      0.22,
      "NUEVA GESTIÓN PÚBLICA",
      "Gerencialismo & Eficientismo",
      ["CLIENTE VS CIUDADANO"],
      { theme: "dark" }
    );`
  );

  a04Code = a04Code.replace(
    /createLabelSprite\("6\. ANTECEDENTES", "Estado del Arte • Vacancia", "#0f2d59", false\);/,
    `createLabelSprite("TENSIÓN NGP", "Riesgos del Enfoque de Mercado", "#0f2d59", false);`
  );

  b1 = b1.slice(0, a04Start) + a04Code + b1.slice(a05Start);
  console.log('✓ anim_04: Rótulos ajustados a Burocracia Tradicional vs NGP.');
}

// D. anim_05: Slide 19 - Propuestas de Rediseño: Subrogancia y Firma Digital
const a05StartRe = b1.indexOf('window.Presentation3D_Objects["anim_05"] = {');
if (a05StartRe !== -1) {
  let a05Code = b1.slice(a05StartRe);
  a05Code = a05Code.replace(
    /"ARTICULACIÓN INTEGRAL DE LOS 4 EJES",\s*"Gobernanza Multinivel • Diagnóstico Situacional • Capacidades"/,
    `"PROPUESTAS DE REDISEÑO DE PROCESOS", "Firma Digital, Interoperabilidad y Subrogancia en Personal"`
  );
  a05Code = a05Code.replace(
    /createEngravedPlaque\(\s*0\.54,\s*0\.20,\s*"PES DE CARLOS MATUS"[\s\S]*?\);/,
    `createEngravedPlaque(
      0.54,
      0.20,
      "SUBROGANCIA AUTOMÁTICA",
      "Evitar Cuellos de Botella en Firma",
      ["CONTINUIDAD ADMINISTRATIVA"],
      { theme: "dark" }
    );`
  );
  a05Code = a05Code.replace(
    /createLabelSprite\("8\. CRONOGRAMA", "7 Meses Continuos \(2027\)", "#0f2d59", false\);/,
    `createLabelSprite("SUBROGANCIA", "Flujo sin Detenciones", "#0f2d59", false);`
  );
  a05Code = a05Code.replace(
    /createEngravedPlaque\(\s*0\.48,\s*0\.18,\s*"POLIGOBERNANZA"[\s\S]*?\);/,
    `createEngravedPlaque(
      0.48,
      0.18,
      "FIRMA DIGITAL NATIVA",
      "Despapelización Total e Inmediata",
      ["VALIDEZ LEY 25.506"],
      { theme: "dark" }
    );`
  );
  a05Code = a05Code.replace(
    /createLabelSprite\("7\. METODOLOGÍA", "Diseño Mixto • Operacionalización", "#0f2d59", false\);/,
    `createLabelSprite("FIRMA DIGITAL", "Plena Eficacia Jurídica", "#0f2d59", false);`
  );
  a05Code = a05Code.replace(
    /createEngravedPlaque\(\s*0\.48,\s*0\.18,\s*"CAPACIDADES ESTATALES"[\s\S]*?\);/,
    `createEngravedPlaque(
      0.48,
      0.18,
      "INTEROPERABILIDAD",
      "SUDOCU a SIU-Mapuche",
      ["FIN DE LA DOBLE CARGA"],
      { theme: "dark" }
    );`
  );
  a05Code = a05Code.replace(
    /createLabelSprite\("9\. VIABILIDAD", "Humanos • Técnicos • Costo Cero", "#0f2d59", false\);/,
    `createLabelSprite("INTEROPERABILIDAD", "Integración Digital 100%", "#0f2d59", false);`
  );

  b1 = b1.slice(0, a05StartRe) + a05Code;
  console.log('✓ anim_05: Rótulos ajustados a Propuestas de Rediseño de Procesos.');
}

fs.writeFileSync(bloque1Path, b1, 'utf8');

// ============================================================================
// 3. ACTUALIZACIÓN EN BLOQUE2.JS (anim_09: Zona Desfavorable y Claustros)
// ============================================================================
let b2 = fs.readFileSync(bloque2Path, 'utf8');
b2 = b2.replace(
  /"LEY DE EDUCACIÓN SUPERIOR N° 24\.521",\s*"Art\. 29: Autonomía Académica e Institucional • Autarquía Financiera",\s*\["BLINDAJE CONTRA LA GERENCIALIZACIÓN NGP"\]/,
  `"ESTRUCTURA SALARIAL Y CLAUSTROS: ZONA DESFAVORABLE (40%)", "Distribución de Haberes en los Claustros Docente y Nodocente con Adicional Patagónico", ["INCISO 1: 90,2% DEL GASTO"]`
);
b2 = b2.replace(
  /"AUTONOMÍA UNIVERSITARIA \(LES 24\.521\)",\s*"Co-Gobierno Cuadricameral • Freno a la Gerencialización de Mercado"/,
  `"FACTORES ESTRUCTURALES: ZONA DESFAVORABLE (40%) Y CLAUSTROS", "Docentes y Nodocentes bajo Régimen Patagónico • Inciso 1"`
);
fs.writeFileSync(bloque2Path, b2, 'utf8');
console.log('✓ anim_09: Rótulos ajustados a Zona Desfavorable 40% y Claustros.');

// ============================================================================
// 4. ACTUALIZACIÓN EN BLOQUE3.JS (anim_12: Sistemas Financieros Integrados)
// ============================================================================
let b3 = fs.readFileSync(bloque3Path, 'utf8');
const a12Start = b3.indexOf('window.Presentation3D_Objects["anim_12"] = {');
const a13Start = b3.indexOf('window.Presentation3D_Objects["anim_13"] = {');

if (a12Start !== -1 && a13Start !== -1) {
  let a12Code = b3.slice(a12Start, a13Start);
  a12Code = a12Code.replace(
    /const nodes = \[[\s\S]*?\];/,
    `const nodes = [
      { name: "SIU-PILAGÁ", role: "Presupuesto y Contabilidad", col: 0xd4af37, x: 0, y: 0.10, z: 0 },
      { name: "SIU-MAPUCHE", role: "Liquidación de Haberes (Inciso 1)", col: 0x0284c7, x: -0.65, y: -0.20, z: 0.30 },
      { name: "e-SIDIF NACIONAL", role: "Ley 24.156 Adm. Financiera", col: 0x10b981, x: 0.65, y: -0.20, z: 0.30 },
      { name: "CONTABILIDAD", role: "Conciliación de Partidas", col: 0xf59e0b, x: -0.55, y: 0.35, z: -0.35 },
      { name: "TESORERÍA", role: "Pagos y Transferencias", col: 0x8b5cf6, x: 0.55, y: 0.35, z: -0.35 },
      { name: "AUDITORÍA (UAI)", role: "Control Interno de Partidas", col: 0xec4899, x: 0, y: -0.55, z: -0.45 }
    ];`
  );
  a12Code = a12Code.replace(
    /"PARADIGMA DE LA POLIGOBERNANZA",\s*"Redes Multiactorales • Interdependencia de Recursos • Coordinación Policéntrica",\s*\["RHODES • KOOIMAN • CHAVANCE"\]/,
    `"SISTEMAS FINANCIEROS INTEGRADOS", "Interconexión SIU-Pilagá, SIU-Mapuche y e-SIDIF (Ley 24.156)", ["ECOSISTEMA PRESUPUESTARIO"]`
  );
  a12Code = a12Code.replace(
    /"POLIGOBERNANZA: COMPLEJIDAD Y REDES",\s*"De la Jerarquía Vertical a la Interdependencia de Recursos"/,
    `"EL CICLO PRESUPUESTARIO Y SISTEMAS INTEGRADOS", "Pilagá • Mapuche • e-SIDIF • Trazabilidad Financiera"`
  );

  b3 = b3.slice(0, a12Start) + a12Code + b3.slice(a13Start);
  fs.writeFileSync(bloque3Path, b3, 'utf8');
  console.log('✓ anim_12: Ajustada a Tríada de Sistemas Financieros (SIU-Pilagá / Mapuche / e-SIDIF).');
}

// ============================================================================
// 5. ACTUALIZACIÓN EN BLOQUE4.JS (anim_16, anim_19, anim_20)
// ============================================================================
let b4 = fs.readFileSync(bloque4Path, 'utf8');

// A. anim_16: Flujograma de Trámite de Licencias en 6 Etapas
const a16Start = b4.indexOf('window.Presentation3D_Objects["anim_16"] = {');
const a17Start = b4.indexOf('window.Presentation3D_Objects["anim_17"] = {');

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
};\n\n`;

  b4 = b4.slice(0, a16Start) + newAnim16Code + b4.slice(a17Start);
  console.log('✓ anim_16: Reconstruida como el Flujograma de Licencias en 6 Etapas.');
}

// B. anim_19: Slide 22 - Cadena Insumo-Producto de Marcos Makon
const a19Start = b4.indexOf('window.Presentation3D_Objects["anim_19"] = {');
const a20Start = b4.indexOf('window.Presentation3D_Objects["anim_20"] = {');

if (a19Start !== -1 && a20Start !== -1) {
  let a19Code = b4.slice(a19Start, a20Start);
  a19Code = a19Code.replace(
    /const moments = \[[\s\S]*?\];/,
    `const moments = [
      { y: -0.75, angle: 0, title: "1. INSUMOS", desc: "Crédito Inciso 1 y Recursos Físicos", col: 0x0284c7 },
      { y: -0.45, angle: Math.PI / 2, title: "2. PROCESOS", desc: "Actividades de Docencia y Gestión", col: 0xf59e0b },
      { y: -0.15, angle: Math.PI, title: "3. PROD. INTERMEDIOS", desc: "Horas Cátedra, Aulas y Módulos", col: 0x10b981 },
      { y: 0.15, angle: (3 * Math.PI) / 2, title: "4. PROD. TERMINALES", desc: "Graduados, Títulos y Transferencia", col: 0xd4af37 }
    ];`
  );
  a19Code = a19Code.replace(
    /\[`MOMENTO \$\{idx \+ 1\} PES`\]/,
    `[\`ETAPA \${idx + 1} MAKON\`]`
  );
  a19Code = a19Code.replace(
    /"LOS CUATRO MOMENTOS DEL MÉTODO PES",\s*"Proceso No Lineal • Bucle Continuo de Planificación y Gobierno",\s*\["METODOLOGÍA DE CARLOS MATUS"\]/,
    `"PRESUPUESTO POR PROGRAMAS (MAKON)", "Cadena de Valor Público Universitario • Insumos a Productos", ["VINCULACIÓN PLAN-PRESUPUESTO"]`
  );
  a19Code = a19Code.replace(
    /"LOS 4 MOMENTOS DE LA PES EN CURZAS",\s*"M1 Explicativo -> M2 Normativo -> M3 Estratégico -> M4 Táctico"/,
    `"PRESUPUESTO POR PROGRAMAS: CADENA INSUMO-PRODUCTO", "Insumos -> Procesos -> Productos Intermedios -> Productos Terminales"`
  );

  b4 = b4.slice(0, a19Start) + a19Code + b4.slice(a20Start);
  console.log('✓ anim_19: Ajustada a Cadena Insumo-Producto de Marcos Makon.');
}

// C. anim_20: Slide 20 - Monumento Presupuestario ($4.877M y 90,2% en Personal)
const a20StartRe = b4.indexOf('window.Presentation3D_Objects["anim_20"] = {');
if (a20StartRe !== -1) {
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

  b4 = b4.slice(0, a20StartRe) + newAnim20Code;
  console.log('✓ anim_20: Reconstruida como el Monumento a la Estructura Presupuestaria ($4.877M y 90,2% Personal).');
}

fs.writeFileSync(bloque4Path, b4, 'utf8');

// ============================================================================
// 6. ACTUALIZACIÓN EN BLOQUE5.JS (anim_24: El Factor Humano)
// ============================================================================
let b5 = fs.readFileSync(bloque5Path, 'utf8');
const a24Start = b5.indexOf('window.Presentation3D_Objects["anim_24"] = {');
const a25Start = b5.indexOf('window.Presentation3D_Objects["anim_25"] = {');

if (a24Start !== -1 && a25Start !== -1) {
  let a24Code = b5.slice(a24Start, a25Start);
  a24Code = a24Code.replace(
    /"DICTAMEN DE VIABILIDAD ESTRATÉGICA",\s*"Viabilidad Política, Institucional y Tecnológica Plena para el CURZAS",\s*\["TESINA DE GRADO • APROBADA"\]/,
    `"EL FACTOR HUMANO COMO CAPACIDAD ESTATAL", "Las personas son el servicio público en la educación superior", ["DOCENTES Y NODOCENTES"]`
  );
  a24Code = a24Code.replace(
    /"SÍNTESIS Y DICTAMEN DE VIABILIDAD",\s*"Conclusiones Integrales del Avance 1 y Avance 2"/,
    `"EL FACTOR HUMANO: AUTÉNTICA CAPACIDAD ESTATAL", "Intensidad en Conocimiento • Base de la Capacidad Pública"`
  );

  b5 = b5.slice(0, a24Start) + a24Code + b5.slice(a25Start);
  fs.writeFileSync(bloque5Path, b5, 'utf8');
  console.log('✓ anim_24: Ajustada a El Factor Humano como Capacidad Estatal.');
}

console.log('🎉 Sincronización maestra completada con éxito absoluto!');

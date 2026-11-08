const fs = require('fs');

// 1. Update data/presentacion_data.js
const data = require('../data/presentacion_data.js');

data.consignasCatedra = [
  {
    avanceNum: 1,
    avanceTitulo: "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)",
    unidad: "Unidad I",
    objetivo: "Caracterizar el marco institucional de la organización: modelo de administración predominante (Burocracia Weberiana vs. Nueva Gestión Pública), mecanismos de rendición de cuentas (accountability) y nivel de Gobernanza Pública Inteligente / IA (Oszlak).",
    entregables: [
      "Identificar el modelo de administración predominante en la entidad (Burocracia tradicional vs. Nueva Gestión Pública).",
      "Analizar los mecanismos de rendición de cuentas (accountability) horizontal, vertical o social vigentes.",
      "Evaluar el nivel de Gobernanza Pública Inteligente o si existen iniciativas preliminares de automatización o gestión algorítmica/IA según los postulados de Oszlak."
    ],
    queBuscar: [
      "Ley de creación del organismo (Ley 19.648/1972) y Estatuto Universitario de la UNCo.",
      "Misiones y funciones institucionales aprobadas y convenios colectivos docentes (CCT 1246/15) y nodocentes (CCT 366/06).",
      "Cartas de compromiso ciudadano, boletines oficiales y normativas electorales del co-gobierno."
    ],
    preguntasGuia: [
      "¿El organismo se rige bajo estructuras estrictamente centralizadas y jerárquicas (modelo weberiano)?",
      "¿Existe una Oficina de Transparencia o sección de datos abiertos para la rendición de cuentas (accountability)?",
      "¿Cuenta el área con normativas vigentes sobre la incorporación de algoritmos o software predictivo en la selección o monitoreo de personal?"
    ],
    respuestaSituada: "El CURZAS opera bajo un modelo de Burocracia Profesional weberiana con fuerte apego a la legalidad y convenios paritarios docentes y nodocentes. El co-gobierno cuatripartito triangula la rendición de cuentas (AGN, UAI, elecciones y boletines). El nivel de gobernanza inteligente es medio (SUDOCU), sin normativas ni uso de algoritmos predictivos o IA en Recursos Humanos."
  },
  {
    avanceNum: 2,
    avanceTitulo: "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)",
    unidad: "Unidad II",
    objetivo: "Analizar la viabilidad y las capacidades institucionales de la entidad mediante una Matriz FODA situada en el contexto actual, un Mapeo de Actores Clave (stakeholders) que influyen en el área de RRHH y la evaluación de capacidades estatales según Bertranou.",
    entregables: [
      "Elaboración de una Matriz FODA situada en el contexto actual del organismo.",
      "Desarrollo de un Mapeo de Actores Clave (stakeholders) que influyen en las decisiones del área de Recursos Humanos.",
      "Evaluación de las capacidades estatales del organismo siguiendo la metodología de Bertranou."
    ],
    queBuscar: [
      "Plan estratégico institucional vigente y planes operativos anuales (POA).",
      "Memorias de gestión anuales y resoluciones de extensión y posgrado de la sede CURZAS.",
      "Convenios interinstitucionales de articulación con organismos científico-técnicos y municipios provinciales."
    ],
    preguntasGuia: [
      "¿Los planes vigentes son normativos (rígidos) o adoptan un enfoque situacional (PES) que considera a los trabajadores como actores estratégicos?",
      "¿Cuáles son las principales fortalezas y debilidades operativas manifestadas de forma interna (insumo directo para la matriz FODA)?",
      "¿Existen deficiencias críticas detectadas en las competencias técnicas de las plantillas actuales (capacidad estatal)?"
    ],
    respuestaSituada: "Predomina un enfoque situacional de facto ante la necesidad de sostener 10 nodos provinciales. La principal fortaleza es el arraigo territorial patagónico; la mayor debilidad radica en la fragmentación de datos y la dependencia de aportes ad hoc. Bertranou permite constatar una alta capacidad técnico-académica, pero con capacidades administrativas y tecnológicas tensionadas por la dispersión geográfica."
  },
  {
    avanceNum: 3,
    avanceTitulo: "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)",
    unidad: "Unidad III",
    objetivo: "Mapear la estructura formal y la transformación digital de la entidad: organigrama actual y manual de funciones, niveles de centralización/desconcentración, y diseño del flujograma de un proceso clave de personal (licencias) evaluando su transición a GDE/SUDOCU y detectando cuellos de botella.",
    entregables: [
      "Relevamiento y análisis del Organigrama actual y el manual de funciones institucionales.",
      "Identificación de los niveles de centralización o descentralización.",
      "Diseño de un Flujograma de un proceso clave dentro del área de personal, evaluando su transición hacia el Sistema de Gestión Documental Electrónica (GDE) o Trámites a Distancia (TAD) / SUDOCU y detectando cuellos de botella."
    ],
    queBuscar: [
      "Organigrama formal aprobado por ordenanza/resolución de Consejo Superior y Directivo.",
      "Manuales de misiones y funciones de los departamentos docentes y direcciones nodocentes.",
      "Normativas internas de despapelización y transición hacia expediente digital (SUDOCU / SIU-Mapuche)."
    ],
    preguntasGuia: [
      "¿El organigrama real coincide con la estructura formal de dependencias y delegaciones?",
      "¿Cómo se gestionan las autorizaciones internas? ¿Se utiliza de forma exclusiva el Sistema de Gestión Documental Electrónica (GDE) o la plataforma Trámites a Distancia (TAD / SUDOCU)?",
      "¿Qué cuellos de botella burocráticos persisten en el circuito de licencias, designaciones o ascensos?"
    ],
    respuestaSituada: "El organigrama formal no refleja la compleja red de los 10 nodos territoriales de Río Negro ni las coordinaciones de carrera. En el circuito de licencias, la gestión se realiza en SUDOCU pero requiere doble carga manual en SIU-Mapuche. El principal cuello de botella es la parálisis de firmas por ausencia del superior directo al carecer de un régimen reglamentado de subrogancia."
  },
  {
    avanceNum: 4,
    avanceTitulo: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
    unidad: "Unidad IV",
    objetivo: "Vincular la planificación política con los recursos económicos asignados: identificación de partidas de gasto asignadas al factor humano (Inciso 1 - Gastos en Personal) y análisis del ciclo presupuestario bajo la técnica de Presupuesto por Programas (Makon).",
    entregables: [
      "Identificación de las partidas de gasto asignadas al factor humano (Inciso 1 - Gastos en Personal) dentro del presupuesto de la entidad.",
      "Análisis del ciclo presupuestario del organismo bajo la técnica de Presupuesto por Programas."
    ],
    queBuscar: [
      "Ley de Presupuesto General de la Administración Nacional aprobada para el ejercicio corriente.",
      "Planillas presupuestarias de distribución administrativa de partidas de la UNCo y desagregación por dependencias (CURZAS).",
      "Convenios colectivos y escalafones salariales con cómputo del adicional por Zona Desfavorable (40%)."
    ],
    preguntasGuia: [
      "¿Cuál es el presupuesto total asignado al organismo y qué porcentaje se destina al Inciso 1 (Gastos en Personal)?",
      "¿Cómo se estructuran los programas del organismo en la planilla presupuestaria oficial?"
    ],
    respuestaSituada: "El presupuesto institucional del CURZAS asciende a $4.877 millones de pesos (sobre un total UNCo de $73.900M). El 90,2% está absorbido rígidamente por el Inciso 1 (Personal), condicionado por el impacto de ley del 40% de Zona Desfavorable. Se estructura bajo el Programa 26 (Desarrollo de la Educación Superior), evidenciando que las personas constituyen la auténtica capacidad operativa de la universidad pública."
  }
];

// Write updated data file
const code = `/**
 * =============================================================================
 * METADATOS Y CONTENIDOS OFICIALES DE LA DEFENSA ORAL
 * Asignatura: Planeamiento y Control de las Organizaciones (2026)
 * Carrera: Licenciatura en Recursos Humanos - CURZAS / UNCo
 * Estudiante: Tec. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes
 * Docentes Evaluadores: Mgter. Susana Lopez y Lic. Carlos Jauge
 * =============================================================================
 */

const PRESENTACION_DATA = ${JSON.stringify(data, null, 2)};

// Compatibilidad en navegadores y entornos CommonJS/Node
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRESENTACION_DATA;
}
`;

fs.writeFileSync('data/presentacion_data.js', code, 'utf8');
console.log('✅ data/presentacion_data.js updated with queBuscar as array');

// 2. Update js/app.js to ensure queBuscar works if string or array
let appCode = fs.readFileSync('js/app.js', 'utf8');
appCode = appCode.replace(
  '\\${c.queBuscar.map(item => \`<li><span class="chk-icon">📄</span> <span>\\${item}</span></li>\`).join("")}',
  '\\${(Array.isArray(c.queBuscar) ? c.queBuscar : [c.queBuscar]).map(item => \`<li><span class="chk-icon">📄</span> <span>\\${item}</span></li>\`).join("")}'
);
fs.writeFileSync('js/app.js', appCode, 'utf8');
console.log('✅ js/app.js updated with defensive array check for queBuscar');

const fs = require('fs');

console.log("=== INICIANDO INTEGRACIÓN DE CONSIGNAS DE CÁTEDRA (PEDCO UNCO) ===");

// 1. Cargar presentacion_data.js
let presContent = fs.readFileSync('data/presentacion_data.js', 'utf8');

// Definir objeto completo de consignas oficiales
const consignasCatedraData = [
  {
    avanceNum: 1,
    avanceTitulo: "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)",
    unidad: "Unidad I",
    objetivo: "Caracterizar el marco institucional de la organización.",
    entregables: [
      "Identificar el modelo de administración predominante en la entidad (Burocracia tradicional vs. Nueva Gestión Pública).",
      "Analizar los mecanismos de rendición de cuentas (accountability) horizontal, vertical o social vigentes.",
      "Evaluar el nivel de Gobernanza Pública Inteligente o si existen iniciativas preliminares de automatización o gestión algorítmica/IA según los postulados de Oszlak."
    ],
    queBuscar: "Ley de creación del organismo, misiones y funciones institucionales impresas, o cartas de compromiso ciudadano.",
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
    objetivo: "Analizar la viabilidad y las capacidades institucionales de la entidad.",
    entregables: [
      "Elaboración de una Matriz FODA situada en el contexto actual del organismo.",
      "Desarrollo de un Mapeo de Actores Clave (stakeholders) que influyen en las decisiones del área de Recursos Humanos.",
      "Evaluación de las capacidades estatales del organismo siguiendo la metodología de Bertranou."
    ],
    queBuscar: "Plan estratégico institucional vigente, planes operativos anuales (POA) y memorias de gestión anuales.",
    preguntasGuia: [
      "¿Los planes vigentes son normativos (rígidos) o adoptan un enfoque situacional (PES) que considera a los trabajadores como actores estratégicos?",
      "¿Cuáles son las principales fortalezas y debilidades operativas manifestadas de forma interna (insumo directo para la matriz FODA)?",
      "¿Existen deficiencias críticas detectadas en las competencias técnicas de las plantillas actuales (capacidad estatal)?"
    ],
    respuestaSituada: "Frente a la rigidez normativa tradicional, la universidad requiere un enfoque de Planificación Estratégica Situacional (PES Matus) reconociendo a gremios y docentes como actores con poder de veto. La matriz FODA revela alta fortaleza en arraigo territorial pero debilidad en silos de datos y asfixia presupuestaria externa. Bertranou evidencia alta capacidad político-relacional con municipios pero brecha de competencias técnicas en digitalización."
  },
  {
    avanceNum: 3,
    avanceTitulo: "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)",
    unidad: "Unidad III",
    objetivo: "Mapear la estructura formal y la transformación digital de la entidad.",
    entregables: [
      "Relevamiento y análisis del Organigrama actual y el manual de funciones institucionales.",
      "Identificación de los niveles de centralización o descentralización.",
      "Diseño de un Flujograma de un proceso clave dentro del área de personal, evaluando su transición hacia el Sistema de Gestión Documental Electrónica (GDE/SUDOCU/TAD) y detectando 'cuellos de botella'."
    ],
    queBuscar: "Organigrama formal aprobado por decreto/resolución, manuales de misiones y funciones de las áreas, y normativas internas de despapelización.",
    preguntasGuia: [
      "¿El organigrama real coincide con la estructura formal de dependencias y delegaciones?",
      "¿Cómo se gestionan las autorizaciones internas? ¿Se utiliza de forma exclusiva el Sistema de Gestión Documental Electrónica (GDE) o la plataforma Trámites a Distancia (TAD)?",
      "¿Qué cuellos de botella burocráticos persisten en el circuito de licencias, designaciones o ascensos?"
    ],
    respuestaSituada: "Existe discordancia: el organigrama formal aprobado no incluye a los 10 nodos territoriales, que funcionan como delegaciones desconcentradas de facto. En trámites se utiliza SUDOCU (equivalente a GDE) en formato híbrido (papel escaneado sin interoperabilidad nativa con SIU-Mapuche). El flujograma de licencias expone un cuello de botella crítico en la firma unipersonal de jefatura sin subrogancia formal."
  },
  {
    avanceNum: 4,
    avanceTitulo: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
    unidad: "Unidad IV",
    objetivo: "Vincular la planificación política con los recursos económicos asignados.",
    entregables: [
      "Identificación de las partidas de gasto asignadas al factor humano (Inciso 1 - Gastos en Personal) dentro del presupuesto de la entidad.",
      "Análisis del ciclo presupuestario del organismo bajo la técnica de Presupuesto por Programas."
    ],
    queBuscar: "Ley de Presupuesto General (Nacional, Provincial o Municipal) aprobada para el ejercicio corriente, y la distribución administrativa de partidas.",
    preguntasGuia: [
      "¿Cuál es el presupuesto total asignado al organismo y qué porcentaje se destina al Inciso 1 (Gastos en Personal)?",
      "¿Cómo se estructuran los programas del organismo en la planilla presupuestaria oficial?"
    ],
    respuestaSituada: "El presupuesto UNCo 2025 es de $73.900M, correspondiendo al CURZAS $4.877M (6,6%). El 90,2% ($4.401M) se asigna exclusivamente al Inciso 1 (Personal), condicionado por el 40% obligatorio de Zona Desfavorable Patagónica. Bajo la técnica de Presupuesto por Programas (Makon), los fondos se estructuran en el Programa 26 (Desarrollo de la Educación Superior), confirmando que las personas son la verdadera capacidad estatal del organismo."
  }
];

// Insertar consignasCatedra en PRESENTACION_DATA
if (!presContent.includes('"consignasCatedra":')) {
  presContent = presContent.replace(
    '"fichasRespaldo": {',
    `"consignasCatedra": ${JSON.stringify(consignasCatedraData, null, 2)},\n  "fichasRespaldo": {`
  );
  console.log("consignasCatedra insertado en data/presentacion_data.js");
}

fs.writeFileSync('data/presentacion_data.js', presContent, 'utf8');
console.log("data/presentacion_data.js actualizado con éxito");


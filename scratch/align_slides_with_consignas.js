const fs = require('fs');
const path = require('path');

const presData = require('../data/presentacion_data.js');

// Verificamos que presData tenga 29 filminas
console.log('Current slides count:', presData.slides.length);

// 1. Slide 1: Apertura
presData.slides[0].puntosClave = [
  "Expositor: Téc. Sup. en Recursos Humanos Héctor Daniel Ayarachi Fuentes (Ciclo de Licenciatura • Legajo N° 8252)",
  "Casa de Estudios: CURZAS — Centro Universitario Regional Zona Atlántica y Sur (UNCo • Sede Viedma)",
  "Espacio de Cátedra: Planeamiento y Control de las Organizaciones 2026 (Mgter. Susana Lopez • Lic. Carlos Jauge)",
  "Propósito de la Exposición: Responder en 17 minutos a las consignas, preguntas guía y entregables oficiales de los 5 Avances"
];
presData.slides[0].guionOrador = "Muy buenos días, estimada profesora Mgter. Susana Lopez y estimado profesor Lic. Carlos Jauge. Mi nombre es Héctor Daniel Ayarachi Fuentes, Técnico Superior en Recursos Humanos y cursante de la Licenciatura en el CURZAS. Hoy presento la defensa integral de nuestra cursada estructurada rigurosamente en torno a las consignas y preguntas guía que nos plantearon para los 5 Avances, respondiendo en 17 minutos qué investigamos, qué respondimos en cada caso y qué problemas reales detectamos en el CURZAS.";

// 2. Slide 2: Hoja de Ruta Ejecutiva con las Consignas Oficiales
presData.slides[1].titulo = "Los 5 Avances de Cátedra: Consignas Oficiales y Respuestas Situadas";
presData.slides[1].subtitulo = "Estructura Temática según los Objetivos y Entregables Fijados por la Cátedra (Unidades I a V)";
presData.slides[1].puntosClave = [
  "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Modelo weberiano vs NGP, accountability horizontal/vertical/social y nivel de gobernanza inteligente / IA según Oszlak.",
  "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Planificación normativa vs PES de Matus, Matriz FODA situada, actores clave en RRHH y capacidades estatales (Bertranou).",
  "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): Organigrama formal vs real, centralización/desconcentración, y flujograma de licencias en SUDOCU con cuellos de botella.",
  "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): Presupuesto total, absorción del 90,2% por el Inciso 1 (Personal), 40% de Zona Desfavorable y Presupuesto por Programas (Makon, Prog. 26).",
  "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V): Auditoría AGN/UAI estatutaria/SIGEN (Res. 311/2026), evaluación docente vs nodocente, 4 KPIs y bucle de retroalimentación."
];
presData.slides[1].guionOrador = "Para ordenar estrictamente la exposición y responder a las consignas sin divagar, organizamos la defensa en 5 bloques: el Avance 1 responde sobre el modelo weberiano y la ausencia de IA; el Avance 2 responde sobre la planificación situacional, el FODA y las capacidades de Bertranou; el Avance 3 desglosa el organigrama y el flujograma de licencias en SUDOCU; el Avance 4 analiza los números presupuestarios del Inciso 1; y el Avance 5 formaliza el control de la UAI estatutaria y nuestro Tablero de 4 KPIs.";

// ==============================================================================
// BLOQUE I: AVANCE 1 (Filminas 3 a 7)
// ==============================================================================

// Slide 3: Marco Institucional
presData.slides[2] = {
  id: "slide_3",
  numero: 3,
  bloque: "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
  esquema: "Marco Institucional y Vocación Autonómica",
  badge: "AVANCE 1 • MARCO INSTITUCIONAL",
  titulo: "Marco Institucional: Ley de Creación, Estatuto y Autonomía",
  subtitulo: "Qué Buscar según la Cátedra: Ley N° 19.648, Estatuto UNCo y Art. 75 inc. 19 CN",
  puntosClave: [
    "🎯 Objetivo de Cátedra: Caracterizar el marco institucional de la organización como unidad académica pública descentralizada.",
    "🔎 Qué Buscar en la Entidad: Ley de creación de la UNCo (Ley N° 19.648/1972), Estatuto Universitario (Ord. N° 470/93) y ordenanzas del Consejo Superior.",
    "🏛️ Respuesta Situada en CURZAS: Casa de altos estudios con sede central en Viedma y despliegue sobre la Costa Atlántica y Línea Sur; gratuidad y autonomía garantizada por el Art. 75 inc. 19 de la Constitución Nacional.",
    "🗳️ Régimen de Gobierno: Conducción democrática colegiada bajo el modelo de co-gobierno cuatripartito (docentes, nodocentes, graduados y estudiantes) en Consejo Directivo y Superior."
  ],
  metadatosFooter: "Avance 1 • Caracterización Institucional y Marco Legal • Ley 19.648 y Estatuto UNCo",
  escena3D: "anim_03",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Iniciamos el Avance 1 respondiendo al objetivo de caracterizar el marco institucional. Buscamos la ley de creación 19.648 y el Estatuto de la UNCo. Constatamos que el CURZAS opera como una unidad académica descentralizada con sede en Viedma, cuya misión democratizadora en la Patagonia está blindada por la autonomía universitaria del artículo 75 inciso 19 de la Constitución y por un co-gobierno democrático cuatripartito."
};

// Slide 4: Entregable 1 - Burocracia Weberiana y Jerarquía
presData.slides[3] = {
  id: "slide_4",
  numero: 4,
  bloque: "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
  esquema: "Burocracia Weberiana Profesional",
  badge: "AVANCE 1 • ENTREGABLE 1: WEBER",
  titulo: "Modelo de Administración: Burocracia Profesional y Legalidad",
  subtitulo: "Respuesta a la Pregunta Guía sobre Estructuras Jerárquicas y Modelo Weberiano",
  puntosClave: [
    "❓ Pregunta Guía Cátedra: ¿El organismo se rige bajo estructuras estrictamente centralizadas y jerárquicas (modelo weberiano)?",
    "🏛️ Respuesta Situada en CURZAS: Sí, se rige bajo una Burocracia Profesional de impronta weberiana con fuerte apego a la legalidad formal, expediente foliado y dictamen jurídico vinculante previo.",
    "📜 Estabilidad y Convenios Paritarios: El empleo se encuentra estrictamente reglado por el CCT Nodocente (Dec. 366/06) y CCT Docente (Dec. 1246/15), blindando la estabilidad contra la discrecionalidad política.",
    "⚖️ Jerarquía y Autonomía de Cátedra: Coexisten procedimientos administrativos centralizados y jerárquicos con una amplia autonomía académica y científica garantizada a los docentes por ley."
  ],
  metadatosFooter: "Avance 1 • Burocracia Tradicional de Base Profesional • Weber / Abal Medina",
  escena3D: "anim_04",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta guía de si rige un modelo weberiano: constatamos que sí, en el CURZAS predomina una Burocracia Profesional Weberiana. Cada acto requiere expediente foliado y dictamen legal. Lejos de ser un defecto, esta burocracia asegura que tanto docentes como nodocentes ingresen por concurso público y gocen de estabilidad tutelada por sus convenios colectivos, evitando despidos arbitrarios."
};

// Slide 5: Entregable 1 - Burocracia Tradicional vs NGP
presData.slides[4] = {
  id: "slide_5",
  numero: 5,
  bloque: "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
  esquema: "Burocracia Tradicional vs. NGP",
  badge: "AVANCE 1 • ENTREGABLE 1: NGP",
  titulo: "Modelo Predominante: Burocracia Tradicional frente a la NGP",
  subtitulo: "La Universidad Pública como Derecho Humano frente al Gerencialismo Mercantil",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Identificar el modelo de administración predominante en la entidad (Burocracia tradicional vs. Nueva Gestión Pública).",
    "🏛️ Respuesta Situada en CURZAS: El modelo predominante es la Burocracia Profesional de Bien Público, rechazando los postulados mercantiles y gerenciales de la Nueva Gestión Pública (NGP).",
    "🚫 Inexistencia de Lógicas de Mercado: En el CURZAS no existen vouchers educativos, contratos salariales atados a productividad individual, arancelamiento ni tercerización de servicios sustantivos.",
    "💻 Incorporación Instrumental de Software: La modernización técnica de la NGP solo influyó en la incorporación operativa del ecosistema informático SIU, pero sin alterar la vocación pública de la entidad."
  ],
  metadatosFooter: "Avance 1 • Análisis de Modelos de Gestión • Burocracia vs NGP • Cao & Blutman",
  escena3D: "anim_05",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para el entregable de comparar Burocracia Tradicional vs. Nueva Gestión Pública: respondimos categóricamente que en el CURZAS no rige la NGP. No existen vouchers ni estudiantes tratados como clientes. La educación es un bien público y un derecho social. La única influencia de las reformas modernizadoras fue instrumental: incorporar los sistemas informáticos del SIU, pero bajo una lógica de servicio estatal."
};

// Slide 6: Entregable 2 - Rendición de Cuentas (Accountability)
presData.slides[5] = {
  id: "slide_6",
  numero: 6,
  bloque: "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
  esquema: "Rendición de Cuentas (Accountability)",
  badge: "AVANCE 1 • ENTREGABLE 2: CONTROL",
  titulo: "Mecanismos de Rendición de Cuentas (Accountability) Vigentes",
  subtitulo: "Respuesta a la Pregunta Guía sobre Oficina de Transparencia y Datos Abiertos",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Analizar los mecanismos de rendición de cuentas (accountability) horizontal, vertical o social vigentes.",
    "❓ Pregunta Guía Cátedra: ¿Existe una Oficina de Transparencia o sección de datos abiertos para la rendición de cuentas (accountability)?",
    "🏛️ Respuesta Situada en CURZAS: Triangulación de controles: Horizontal (Auditoría UAI estatutaria y AGN externa), Vertical (elecciones de co-gobierno cada 2 y 4 años) y Social (boletines oficiales).",
    "⚠️ Diagnóstico Crítico: El CURZAS cuenta con portal institucional, pero NO existe una Oficina formal de Transparencia Activa ni una plataforma de Datos Abiertos para consulta ciudadana."
  ],
  metadatosFooter: "Avance 1 • Rendición de Cuentas y Transparencia Activa • Guillermo O'Donnell",
  escena3D: "anim_06",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Sobre los mecanismos de rendición de cuentas solicitados en el entregable 2: constatamos una triple accountability: horizontal mediante auditorías de la UAI y la AGN; vertical mediante el voto obligatorio en las elecciones de claustros; y social publicando resoluciones. Sin embargo, respondiendo a la pregunta guía: no existe una Oficina formal de Transparencia ni portal de datos abiertos automatizado."
};

// Slide 7: Entregable 3 - Gobernanza Pública Inteligente y Gestión Algorítmica / IA
presData.slides[6] = {
  id: "slide_7",
  numero: 7,
  bloque: "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
  esquema: "Gobernanza Inteligente e IA (Oszlak)",
  badge: "AVANCE 1 • ENTREGABLE 3: IA",
  titulo: "Gobernanza Inteligente y Gestión Algorítmica / IA (Oszlak)",
  subtitulo: "Respuesta a la Pregunta Guía sobre Normativas de Software Predictivo en RR. HH.",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Evaluar el nivel de Gobernanza Pública Inteligente o si existen iniciativas preliminares de automatización o gestión algorítmica/IA según Oszlak.",
    "❓ Pregunta Guía Cátedra: ¿Cuenta el área con normativas vigentes sobre la incorporación de algoritmos o software predictivo en la selección o monitoreo de personal?",
    "🏛️ Respuesta Situada en CURZAS: Madurez digital media: implementación de SUDOCU (expedientes) y SIU-Mapuche, pero operando en silos desconectados sin interoperabilidad inteligente en tiempo real.",
    "🚫 Ausencia Total de IA en Personal: NO existen normativas ni software predictivo/algorítmico en RR. HH.; la selección y el monitoreo se realizan exclusivamente por jurados humanos colegiados y paritarios."
  ],
  metadatosFooter: "Avance 1 • El Estado en la Era Exponencial • Oscar Oszlak (2020)",
  escena3D: "anim_07",
  diagramaSVG: "assets/red-territorial-nodos.svg",
  maqueta3D: "prueba_rionegro_3d.html",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para el entregable 3 sobre Gobernanza Inteligente e Inteligencia Artificial según Oscar Oszlak: evaluamos la madurez digital del CURZAS como media. Se usa expediente digital SUDOCU y Mapuche, pero respondiendo a la pregunta docente: no existen normativas ni algoritmos predictivos para seleccionar o monitorear personal. Todos los concursos se resuelven por comisiones humanas paritarias."
};

// ==============================================================================
// BLOQUE II: AVANCE 2 (Filminas 8 a 13)
// ==============================================================================

// Slide 8: Planificación Normativa vs Situacional (PES)
presData.slides[7] = {
  id: "slide_8",
  numero: 8,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Planificación Normativa vs. PES (Matus)",
  badge: "AVANCE 2 • PES MATUS",
  titulo: "Enfoque de Planificación: Modelo Normativo vs. Situacional (PES)",
  subtitulo: "Respuesta a la Pregunta Guía sobre Trabajadores como Actores Estratégicos",
  puntosClave: [
    "🎯 Objetivo de Cátedra: Analizar la viabilidad y las capacidades institucionales de la entidad.",
    "❓ Pregunta Guía Cátedra: ¿Los planes vigentes son normativos (rígidos) o adoptan un enfoque situacional (PES) que considera a los trabajadores como actores estratégicos?",
    "🏛️ Respuesta Situada en CURZAS: La institución superó de facto la planificación normativa tradicional rígida y adoptó un enfoque situacional (PES de Carlos Matus).",
    "🤝 Actores con Poder de Veto: Quien planifica no tiene el monopolio del poder; docentes y nodocentes son actores estratégicos con intereses propios; la viabilidad técnica exige concertación política paritaria."
  ],
  metadatosFooter: "Avance 2 • Teoría de la Planificación Estratégica Situacional • Carlos Matus",
  escena3D: "anim_08",
  diagramaSVG: "assets/subsistemas_longo.svg",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Pasamos al Avance 2 respondiendo a la pregunta sobre el enfoque de planificación. Demostramos que el plan normativo clásico fracasó porque creía que la realidad se decretaba desde un escritorio. El CURZAS adopta el enfoque situacional de Carlos Matus: el poder está compartido y los trabajadores docentes y nodocentes son actores estratégicos con quienes hay que construir consensos paritarios."
};

// Slide 9: Entregable 2 - Mapeo de Actores Clave (Stakeholders en RRHH)
presData.slides[8] = {
  id: "slide_9",
  numero: 9,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Mapeo de Actores Clave en RR. HH.",
  badge: "AVANCE 2 • ENTREGABLE 2: ACTORES",
  titulo: "Mapeo de Actores Clave (Stakeholders) en Recursos Humanos",
  subtitulo: "Fuerzas Políticas, Gremiales e Institucionales que Inciden en las Decisiones de Personal",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Desarrollo de un Mapeo de Actores Clave (stakeholders) que influyen en las decisiones del área de Recursos Humanos.",
    "🏛️ Claustros de Alto Poder e Interés: Consejo Directivo (aprueba plantas y llamados a concurso), Decanato, gremio nodocente APUNC y gremios docentes ADUNC / CEDIUNCO.",
    "🌐 Actores de Despliegue Territorial: Asistentes Técnico-Pedagógicos de los 10 nodos provinciales e intendencias municipales asociadas en la Línea Sur y Costa.",
    "⚖️ Arenas de Negociación: Las decisiones sobre licencias, coberturas y concursos no son actos unilaterales, sino transacciones políticas reguladas por actas paritarias."
  ],
  metadatosFooter: "Avance 2 • Mapeo de Stakeholders y Arenas de Poder • Carlos Matus",
  escena3D: "anim_09",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "En el entregable 2 realizamos el mapeo de actores clave en Recursos Humanos. Mapeamos a quienes concentran alto poder y alto interés: el Consejo Directivo, el Decanato, y fundamentalmente los sindicatos APUNC y ADUNC. En el territorio se suman los Asistentes Pedagógicos de los 10 nodos y los municipios. Ninguna medida de personal prospera sin concertar en estas arenas de poder compartido."
};

// Slide 10: Entregable 1 - Matriz FODA Situada: Fortalezas y Debilidades Operativas Internas
presData.slides[9] = {
  id: "slide_10",
  numero: 10,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Matriz FODA Situada (Interna)",
  badge: "AVANCE 2 • ENTREGABLE 1: FODA",
  titulo: "Matriz FODA Situada: Fortalezas y Debilidades Operativas",
  subtitulo: "Respuesta a la Pregunta Guía sobre Fortalezas y Debilidades Internas en el CURZAS",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Elaboración de una Matriz FODA situada en el contexto actual del organismo.",
    "❓ Pregunta Guía Cátedra: ¿Cuáles son las principales fortalezas y debilidades operativas manifestadas de forma interna (insumo directo para la matriz FODA)?",
    "⭐ Fortalezas Internas Detectadas: Fuerte arraigo territorial en 10 nodos de Río Negro, gratuidad universitaria, estabilidad de planta paritaria y alta vocación de servicio.",
    "⚠️ Debilidades Internas Detectadas: Silos de información y fragmentación entre áreas, doble carga manual de datos (SIU/SIGEVA) y dispersión geográfica de las plantillas."
  ],
  metadatosFooter: "Avance 2 • Matriz FODA Situada • Diagnóstico Operativo Interno 2026",
  escena3D: "anim_10",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta sobre la Matriz FODA y los factores internos: detectamos como principal fortaleza el extraordinario arraigo territorial del CURZAS y el compromiso de sus docentes y nodocentes; y como debilidad crítica la existencia de silos informáticos y la sobrecarga provocada por cargar los mismos datos dos y tres veces a mano en distintas plataformas."
};

// Slide 11: Entregable 1 (Cont.) - Matriz FODA Situada: Oportunidades y Amenazas del Entorno
presData.slides[10] = {
  id: "slide_11",
  numero: 11,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Matriz FODA Situada (Externa)",
  badge: "AVANCE 2 • FODA: ENTORNO",
  titulo: "Matriz FODA Situada: Oportunidades y Amenazas Externas",
  subtitulo: "Demanda Territorial Regional frente al Severo Ajuste Presupuestario Nacional",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Completar el análisis situacional incorporando las variables del entorno externo que condicionan la gestión.",
    "🚀 Oportunidades Externas: Creciente demanda comunitaria de educación universitaria en parajes aislados, alianzas estratégicas con municipios y expansión de aulas híbridas.",
    "🛑 Amenazas Externas Críticas: Ajuste presupuestario nacional del CIN/SPU, congelamiento salarial, caída del poder adquisitivo y aumento severo de costos de energía y transporte en sedes.",
    "💡 Conclusión Situacional: El valor público y la legitimidad social de la Red de 10 Nodos constituyen el escudo político del CURZAS para resistir los recortes de fondos de Nación."
  ],
  metadatosFooter: "Avance 2 • Análisis del Entorno Situacional Patagónico • CURZAS - UNCo",
  escena3D: "anim_11",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Completando el FODA en el plano externo: la gran oportunidad es la enorme demanda de carreras universitarias en parajes patagónicos y los convenios con intendencias locales. La gran amenaza es el severo recorte de fondos nacionales del Tesoro y la licuación de salarios. El CURZAS se defiende demostrando que su presencia territorial es indispensable para Río Negro."
};

// Slide 12: Entregable 3 - Evaluación de Capacidades Estatales según Bertranou
presData.slides[11] = {
  id: "slide_12",
  numero: 12,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Capacidades Estatales (Bertranou)",
  badge: "AVANCE 2 • ENTREGABLE 3: CAPACIDAD",
  titulo: "Evaluación de Capacidades Estatales según Julián Bertranou",
  subtitulo: "Diagnóstico en Tres Dimensiones: Político-Relacional, Administrativa y Técnico-Analítica",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Evaluación de las capacidades estatales del organismo siguiendo la metodología de Bertranou.",
    "🤝 Capacidad Político-Relacional (ALTA): Excelente capacidad de concertación democrática en co-gobierno, acuerdos paritarios sólidos y alianzas fluidas con municipios rionegrinos.",
    "📋 Capacidad Administrativo-Organizacional (MEDIA-ALTA): Riguroso apego a la legalidad y trámites estandarizados, pero ralentizada por la inercia del papel.",
    "📊 Capacidad Técnico-Analítica (MEDIA): Elevada solvencia en saberes disciplinares docentes, pero con déficit de herramientas para analítica de datos e inteligencia en RR. HH."
  ],
  metadatosFooter: "Avance 2 • Metodología de Capacidades Estatales • Julián Bertranou (2015)",
  escena3D: "anim_12",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "En el entregable 3 aplicamos la metodología de Julián Bertranou para evaluar capacidades estatales. Diagnosticamos: Capacidad Político-Relacional Alta por la legitimidad democrática del co-gobierno; Capacidad Administrativa Media-Alta por el apego a la ley; y Capacidad Técnico-Analítica Media, donde detectamos la necesidad de incorporar analítica de datos en la gestión."
};

// Slide 13: Entregable 3 (Cont.) - Competencias Técnicas de las Plantillas
presData.slides[12] = {
  id: "slide_13",
  numero: 13,
  bloque: "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
  esquema: "Competencias Técnicas en Plantillas",
  badge: "AVANCE 2 • COMPETENCIAS TÉCNICAS",
  titulo: "Diagnóstico de Competencias Técnicas y Brecha Digital en Personal",
  subtitulo: "Respuesta a la Pregunta Guía sobre Deficiencias Críticas en las Plantillas Actuales",
  puntosClave: [
    "❓ Pregunta Guía Cátedra: ¿Existen deficiencias críticas detectadas en las competencias técnicas de las plantillas actuales (capacidad estatal)?",
    "🏛️ Respuesta Situada en CURZAS: Sí, se constató una brecha digital en sectores del personal nodocente de mayor antigüedad frente a la obligatoriedad de los sistemas SUDOCU y SIU.",
    "🔍 Causa Raíz Diagnosticada: La implementación del expediente electrónico se ejecutó de forma abrupta sin planes sistemáticos previos de alfabetización informática situada.",
    "🛠️ Propuesta de Nivelación: Plan de formación continua acordado en paritaria particular UNCo-APUNC con certificación de competencias y soporte informático en nodos."
  ],
  metadatosFooter: "Avance 2 • Diagnóstico de Competencias en Recursos Humanos • Bertranou",
  escena3D: "anim_13",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta sobre deficiencias en competencias técnicas: detectamos una brecha digital en agentes nodocentes de mayor antigüedad frente al uso obligatorio de SUDOCU y Mapuche. Esto se debió a que los sistemas se implementaron sin capacitación previa adecuada. Planteamos un programa de alfabetización digital obligatoria acordado en paritaria con el gremio APUNC."
};

// ==============================================================================
// BLOQUE III: AVANCE 3 (Filminas 14 a 19)
// ==============================================================================

// Slide 14: Entregable 1 - Organigrama Formal vs Real
presData.slides[13] = {
  id: "slide_14",
  numero: 14,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "Organigrama Formal vs. Real",
  badge: "AVANCE 3 • ENTREGABLE 1: ESTRUCTURA",
  titulo: "Organigrama Institucional: Estructura Formal vs. Estructura Real",
  subtitulo: "Respuesta a la Pregunta Guía sobre la Coincidencia entre Organigrama y Realidad",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Relevamiento y análisis del Organigrama actual y el manual de funciones institucionales.",
    "❓ Pregunta Guía Cátedra: ¿El organigrama real coincide con la estructura formal de dependencias y delegaciones?",
    "🏛️ Respuesta Situada en CURZAS: NO, no coincide. El organigrama formal aprobado por ordenanza responde a un esquema departamental rígido y centralizado exclusivamente en Viedma.",
    "🌐 La Red Territorial de Facto: En la realidad operativa, el CURZAS funciona como una red desconcentrada de 10 nodos territoriales coordinados por Asistentes Pedagógicos no formalizados en el organigrama."
  ],
  metadatosFooter: "Avance 3 • Análisis de Estructuras Organizacionales • Organigrama Formal vs Real",
  escena3D: "anim_14",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Ingresamos al Avance 3 respondiendo la pregunta sobre el organigrama. Nuestra respuesta es contundente: el organigrama formal no coincide con la realidad. La estructura oficial de papel muestra oficinas tradicionales en Viedma, pero en la realidad el CURZAS se despliega en una red viva de 10 nodos territoriales que sostienen carreras en toda la provincia sin estar dibujados en el organigrama formal."
};

// Slide 15: Entregable 2 - Centralización y Desconcentración en la Gestión del Personal
presData.slides[14] = {
  id: "slide_15",
  numero: 15,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "Centralización vs. Desconcentración",
  badge: "AVANCE 3 • ENTREGABLE 2: AUTORIZACIONES",
  titulo: "Centralización y Desconcentración en la Gestión del Personal",
  subtitulo: "Respuesta a la Pregunta Guía sobre Gestión de Autorizaciones Internas",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Identificación de los niveles de centralización o descentralización.",
    "❓ Pregunta Guía Cátedra: ¿Cómo se gestionan las autorizaciones internas?",
    "🏛️ Centralización Normativa (Rectorado): La fijación de la planta de cargos, pautas paritarias y topes presupuestarios están centralizados en el Rectorado y el Consejo Superior en Neuquén.",
    "🏛️ Desconcentración Operativa (CURZAS): El Decanato y el Consejo Directivo en Viedma autorizan contrataciones transitorias, llamados a concurso, licencias ordinarias y traslados de personal."
  ],
  metadatosFooter: "Avance 3 • Niveles de Centralización y Desconcentración Operativa • CURZAS",
  escena3D: "anim_15",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "En el entregable 2 analizamos la centralización y cómo se gestionan las autorizaciones. Existe centralización normativa en Neuquén para crear cargos y fijar salarios; pero existe desconcentración operativa en el CURZAS Viedma, donde el Decanato y las Secretarías autorizan licencias, coberturas y designaciones mediante resoluciones decanales locales."
};

// Slide 16: Entregable 3 - Flujograma del Circuito Clave: Trámite de Licencias
presData.slides[15] = {
  id: "slide_16",
  numero: 16,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "Flujograma de Trámite de Licencias",
  badge: "AVANCE 3 • ENTREGABLE 3: FLUJOGRAMA",
  titulo: "Flujograma del Circuito Clave de Personal: Trámite de Licencias",
  subtitulo: "Mapeo Detallado de las 6 Etapas desde la Solicitud Inicial hasta la Liquidación",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Diseño de un Flujograma de un proceso clave dentro del área de personal.",
    "🔄 Circuito Operativo Relevado: 1. Solicitud electrónica del agente → 2. Emisión de certificado médico → 3. Intervención médica laboral → 4. Visto bueno superior → 5. Resolución Decanal → 6. Impacto en Sueldos.",
    "💻 Soporte Tecnológico: La tramitación del expediente se procesa en el sistema SUDOCU, mientras que el cómputo de días y liquidación se ejecuta en SIU-Mapuche.",
    "⏱️ Duración Media Relevada: El trámite insume entre 12 y 18 días hábiles, dilatándose significativamente cuando intervienen juntas médicas en parajes alejados."
  ],
  metadatosFooter: "Avance 3 • Flujograma de Procesos de Personal • Relevamiento Situado 2026",
  escena3D: "anim_16",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para el entregable 3 modelamos el flujograma del circuito de licencias médicas del personal. Relevamos 6 etapas: desde que el agente solicita la licencia y presenta el certificado, pasando por la junta médica y el visto bueno de la jefatura, hasta la resolución decanal y su impacto en SIU-Mapuche. El proceso demora entre 12 y 18 días hábiles debido a la dispersión geográfica."
};

// Slide 17: Entregable 3 (Cont.) - Transición a GDE / SUDOCU y Cuellos de Botella
presData.slides[16] = {
  id: "slide_17",
  numero: 17,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "GDE/SUDOCU y Cuellos de Botella",
  badge: "AVANCE 3 • CUELLOS DE BOTELLA",
  titulo: "Transición a SUDOCU y Cuellos de Botella en Personal",
  subtitulo: "Respuesta a la Pregunta Guía sobre Uso Exclusivo de GDE/TAD y Trabas Burocráticas",
  puntosClave: [
    "❓ Preguntas Guía Cátedra: ¿Se utiliza de forma exclusiva GDE o TAD? ¿Qué cuellos de botella burocráticos persisten en el circuito de licencias, designaciones o ascensos?",
    "🏛️ Respuesta Situada en CURZAS: La UNCo utiliza SUDOCU (Sistema Universitario de Gestión Documental del CIN), no la plataforma GDE ni TAD del Poder Ejecutivo Nacional.",
    "🛑 Cuello de Botella 1 (Parálisis de Firmas): Inexistencia de un régimen reglamentado de subrogancia automática; si el titular de firma está de viaje o con licencia, el expediente queda paralizado.",
    "🛑 Cuello de Botella 2 (Doble Carga Manual): Desconexión técnica entre SUDOCU y SIU-Mapuche; los actos aprobados deben cargarse manualmente, provocando demoras en el pago de haberes."
  ],
  metadatosFooter: "Avance 3 • Ecosistema Digital Universitario • SUDOCU vs GDE / SIU-Mapuche",
  escena3D: "anim_17",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta sobre el uso de GDE o TAD y cuellos de botella: en el CURZAS no se usa GDE nacional sino SUDOCU. Identificamos dos cuellos de botella críticos: primero, la parálisis de firmas por falta de subrogancia reglamentada si una autoridad viaja; y segundo, que el expediente aprobado en SUDOCU debe volver a cargarse a mano en Mapuche porque no interoperan."
};

// Slide 18: Inercia Estructural y Racionalidad Limitada
presData.slides[17] = {
  id: "slide_18",
  numero: 18,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "Inercia Estructural y Racionalidad",
  badge: "AVANCE 3 • INERCIA Y RUTINAS",
  titulo: "Inercia Estructural, Falsa Digitalización y 'Salir del Paso'",
  subtitulo: "Causas Organizacionales de la Persistencia del Papel en Recursos Humanos",
  puntosClave: [
    "📑 Diagnóstico de Cátedra: Evaluar las resistencias organizacionales y la transición real hacia la despapelización en la entidad.",
    "📄 La Falsa Digitalización: En licencias, los certificados médicos aún se expiden en recetarios de papel que luego son escaneados a PDF; se digitalizó el soporte pero no el proceso clínico.",
    "⏳ Inercia Estructural (Campos et al.): Persistencia de la cultura del expediente físico y el sello de mesa de entradas por temor a la nulidad legal o reclamos gremiales.",
    "🧩 Racionalidad Limitada y 'Salir del Paso' (Forester y Lindblom): Ante la urgencia de liquidar salarios, los operadores recurren a soluciones ad hoc y comunicaciones informales."
  ],
  metadatosFooter: "Avance 3 • Inercia Estructural y Racionalidad Limitada • Campos / Forester",
  escena3D: "anim_18",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Indagamos las causas profundas de estos cuellos de botella. Detectamos una 'falsa digitalización': se sigue pidiendo el certificado médico en papel para después escanearlo a PDF. Esto responde a la inercia estructural de la que hablan Campos y Carro: miedo a que una firma electrónica sea cuestionada. Para cumplir con los plazos salariales, el personal recurre a salir del paso como describe John Forester."
};

// Slide 19: Propuestas Estratégicas de Rediseño
presData.slides[18] = {
  id: "slide_19",
  numero: 19,
  bloque: "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
  esquema: "Propuestas de Rediseño",
  badge: "AVANCE 3 • PROPUESTAS",
  titulo: "Propuestas de Rediseño: Firma Digital, Interoperabilidad y Subrogancia",
  subtitulo: "Soluciones Concretas para Eliminar los Cuellos de Botella Relevados en Personal",
  puntosClave: [
    "🔑 1. Firma Digital Criptográfica (Ley 25.506): Reemplazar el escaneo de firmas ológrafas por firma digital con infraestructura PKI, garantizando plena validez jurídica sin papel.",
    "🔌 2. Pasarela API SUDOCU → SIU-Mapuche: Automatizar el traspaso de licencias aprobadas al sistema de sueldos sin intervención manual humana, eliminando errores de liquidación.",
    "📜 3. Ordenanza de Subrogancia Automática: Reglamentar un plazo máximo de 48 horas para que ante ausencia de la autoridad, el expediente pase automáticamente al reemplazante legal.",
    "👥 4. Capacitación Paritaria Situada: Implementar talleres obligatorios en horario laboral con el gremio APUNC para nivelar competencias informáticas sin generar exclusión."
  ],
  metadatosFooter: "Avance 3 • Propuestas Estratégicas de Rediseño • Firma Digital y Pasarelas API",
  escena3D: "anim_19",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para superar estos cuellos de botella formulamos cuatro propuestas concretas: implementar Firma Digital con plena validez de la Ley 25.506; crear una pasarela informática automática entre SUDOCU y SIU-Mapuche; dictar una ordenanza de subrogancia automática para que los expedientes no se frenen; y acordar en paritaria un plan de capacitación informática con APUNC."
};

// ==============================================================================
// BLOQUE IV: AVANCE 4 (Filminas 20 a 24)
// ==============================================================================

// Slide 20: Entregable 1 - Presupuesto Total y Centralidad del Inciso 1 (Personal)
presData.slides[19] = {
  id: "slide_20",
  numero: 20,
  bloque: "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
  esquema: "Presupuesto Total e Inciso 1 (90,2%)",
  badge: "AVANCE 4 • ENTREGABLE 1: INCISO 1",
  titulo: "Presupuesto del CURZAS y Centralidad del Inciso 1 (Personal)",
  subtitulo: "Respuesta a la Pregunta Guía sobre Presupuesto Total y Porcentaje a Sueldos",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Identificación de las partidas de gasto asignadas al factor humano (Inciso 1 - Gastos en Personal) dentro del presupuesto de la entidad.",
    "❓ Pregunta Guía Cátedra: ¿Cuál es el presupuesto total asignado al organismo y qué porcentaje se destina al Inciso 1 (Gastos en Personal)?",
    "💰 Presupuesto Total del CURZAS: $4.877 Millones de pesos en el ejercicio corriente (representa el 6,6% del total de la UNCo de $73.900M).",
    "🏛️ Absorción del Inciso 1 (Personal): El 90,2% ($4.401 Millones) se destina exclusivamente al pago de salarios; apenas un 9,8% queda disponible para gastos operativos de funcionamiento."
  ],
  metadatosFooter: "Avance 4 • Ejecución Presupuestaria Oficial y Concentración en Personal • CURZAS",
  escena3D: "anim_20",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "En el Avance 4 abrimos los números presupuestarios respondiendo a la pregunta guía: el CURZAS administra $4.877 millones de pesos. El hallazgo más contundente es que el 90,2% de esos fondos se destina al Inciso 1, es decir, a pagar salarios de docentes y nodocentes. Nos queda menos de un 10% para afrontar tarifas de luz, gas, limpieza y viajes en toda la provincia."
};

// Slide 21: Factores Estructurales: Zona Desfavorable (40%) y Planta
presData.slides[20] = {
  id: "slide_21",
  numero: 21,
  bloque: "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
  esquema: "Zona Desfavorable (40%) y Planta",
  badge: "AVANCE 4 • ZONA Y ESTAMENTOS",
  titulo: "Factores Estructurales: Zona Desfavorable (40%) y Claustros",
  subtitulo: "Por qué el Gasto en Personal es Mayor en la Patagonia y cómo se Distribuye",
  puntosClave: [
    "🏔️ Plus por Zona Desfavorable Patagónica (40%): Suplemento remunerativo obligatorio fijado por ley nacional para compensar el elevado costo de vida patagónico.",
    "💵 Impacto Financiero Directo: De cada $100 pesos liquidados en salarios por el CURZAS, $40 pesos corresponden al plus de zona geográfica obligatoria.",
    "👥 Distribución por Claustros: El 68% de la masa salarial remunera al claustro docente y el 32% al personal nodocente, técnico y de maestranza.",
    "🔒 Rigidez Presupuestaria Ineludible: Los salarios están tutelados por convenios paritarios y leyes nacionales; el Inciso 1 no es una variable de ajuste financiero."
  ],
  metadatosFooter: "Avance 4 • Composición Salarial y Plus de Zona Patagónica • CCT 366/06 y 1246/15",
  escena3D: "anim_21",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "¿Por qué el gasto en personal es tan elevado? Principalmente por la Zona Desfavorable Patagónica, un plus del 40% fijado por ley que compensa el costo de vida del sur. Además, el 68% de esa masa salarial sostiene a los docentes que dictan clases y el 32% al personal nodocente que mantiene abiertas las aulas y laboratorios en Viedma y los nodos."
};

// Slide 22: Entregable 2 - Presupuesto por Programas (Metodología Marcos Makon)
presData.slides[21] = {
  id: "slide_22",
  numero: 22,
  bloque: "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
  esquema: "Presupuesto por Programas (Makon)",
  badge: "AVANCE 4 • ENTREGABLE 2: PROGRAMAS",
  titulo: "Presupuesto por Programas: La Cadena Insumo-Producto",
  subtitulo: "Respuesta a la Pregunta Guía sobre la Estructura de Programas en la Planilla Oficial",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Análisis del ciclo presupuestario del organismo bajo la técnica de Presupuesto por Programas.",
    "❓ Pregunta Guía Cátedra: ¿Cómo se estructuran los programas del organismo en la planilla presupuestaria oficial?",
    "🏛️ Programa 26 Oficial: 'Desarrollo de la Educación Superior' como unidad programática rectora de la Ley de Presupuesto General de la Administración Nacional.",
    "🔗 Cadena Insumo → Proceso → Producto (Marcos Makon / CEPAL): Los recursos financieros del Inciso 1 financian horas cátedra y laboratorios para producir graduados calificados y ciencia comunitaria."
  ],
  metadatosFooter: "Avance 4 • Presupuesto por Programas y Matriz Insumo-Producto • Marcos Makon",
  escena3D: "anim_22",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta de cómo se estructuran los programas en la planilla oficial: aplicamos la metodología de Marcos Makon. Todo se encuadra en el Programa 26 nacional, 'Desarrollo de la Educación Superior'. Los insumos financieros se transforman en productos concretos: nuevos técnicos y licenciados graduados e investigaciones volcadas a Río Negro."
};

// Slide 23: Ciclo Presupuestario y Ecosistema de Sistemas Financieros
presData.slides[22] = {
  id: "slide_23",
  numero: 23,
  bloque: "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
  esquema: "Ciclo Presupuestario y Sistemas SIU",
  badge: "AVANCE 4 • SISTEMAS FINANCIEROS",
  titulo: "El Ciclo Presupuestario y los Sistemas Financieros Integrados",
  subtitulo: "Interconexión entre SIU-Pilagá, SIU-Mapuche y la Plataforma e-SIDIF (Ley 24.156)",
  puntosClave: [
    "📑 Ciclo Presupuestario (Schweinheim): Formulación del crédito por CIN/SPU → Aprobación parlamentaria → Ejecución diaria de gastos → Control de cierre y rendición.",
    "💻 Ecosistema Integrado: SIU-Pilagá (gestión contable de compras y pagos) se conecta con SIU-Mapuche (nómina salarial, aportes y adicionales).",
    "🏛️ Enlace con el Tesoro Nacional: Traspaso a la plataforma e-SIDIF para habilitar las transferencias mensuales de la Cuenta Única del Tesoro.",
    "🛡️ Control de Legalidad Financiera: Fiscalización permanente de la Unidad de Auditoría Interna (UAI) y la Auditoría General de la Nación (AGN)."
  ],
  metadatosFooter: "Avance 4 • Sistemas Integrados de Administración Financiera • Ley 24.156",
  escena3D: "anim_23",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "El recorrido de los fondos sigue el ciclo de la Ley 24.156 explicado por Guillermo Schweinheim. El presupuesto opera mediante sistemas informáticos cruzados: el SIU-Pilagá administra los fondos de funcionamiento, el SIU-Mapuche liquida los salarios y ambos se comunican con el e-SIDIF de Nación para recibir las partidas del Tesoro."
};

// Slide 24: Síntesis de la Unidad IV - El Factor Humano como Capacidad Estatal
presData.slides[23] = {
  id: "slide_24",
  numero: 24,
  bloque: "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
  esquema: "El Factor Humano como Capacidad",
  badge: "AVANCE 4 • SÍNTESIS FINANCIERA",
  titulo: "El Factor Humano como la Auténtica Capacidad Estatal",
  subtitulo: "Por qué en la Universidad Pública las Personas son el Servicio en Sí Mismo",
  puntosClave: [
    "⚖️ Tensión Financiera Ineludible: Planificar proyectos académicos ambiciosos en un contexto de restricción fiscal extrema y congelamiento presupuestario nacional.",
    "💡 Desmitificación del 'Gasto': En una fábrica los sueldos son un costo operativo; en el CURZAS el personal docente y nodocente es el servicio público en sí mismo.",
    "🏛️ La Verdadera Capacidad Estatal (Bertranou): Sin profesores que crucen la estepa ni nodocentes que sostengan los servidores y las aulas, no hay universidad.",
    "🔒 Conclusión de la Unidad IV: El 90,2% en salarios demuestra que defender el presupuesto universitario es defender la capacidad misma del Estado para garantizar derechos."
  ],
  metadatosFooter: "Avance 4 • Síntesis Estratégica: Planificación, Presupuesto y Personas • CURZAS",
  escena3D: "anim_24",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Llegamos a la conclusión medular del Avance 4: en una fábrica los salarios pueden ser un costo, pero en la universidad pública las personas son el servicio mismo. Sin el docente que viaja a Los Menucos o el nodocente que abre la sede en Viedma, no existe el CURZAS. Por eso, el 90,2% en salarios demuestra que el factor humano es la auténtica capacidad estatal de la universidad."
};

// ==============================================================================
// BLOQUE V: AVANCE 5 (Filminas 25 a 28)
// ==============================================================================

// Slide 25: Entregable 1 - Organismos de Control Externo e Interno
presData.slides[24] = {
  id: "slide_25",
  numero: 25,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Ecosistema de Control Externo e Interno",
  badge: "AVANCE 5 • ENTREGABLE 1: CONTROL",
  titulo: "Ecosistema de Control: AGN, UAI Estatutaria y Reactivación SIGEN",
  subtitulo: "Respuesta a la Pregunta Guía sobre Auditorías y Observaciones en Personal",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Identificación de los organismos de control que auditan externamente (AGN) o internamente (SIGEN o unidades de auditoría locales) a la entidad.",
    "❓ Preguntas Guía Cátedra: ¿Qué organismos auditan a la entidad? ¿Cuándo fue la última auditoría formal y qué observaciones se formularon al área de personal?",
    "🏛️ Control Externo (AGN - Art. 85 CN): Auditoría posterior externa de estados contables y Cuenta de Inversión (SAF 809, último informe integral consolidado 2021).",
    "🛡️ UAI con Rango Estatutario Único: La UNCo es pionera al blindar en su Estatuto la independencia funcional de su UAI (Cr. Oscar Rebolledo), formulando el PAT 2027 sin subordinación política.",
    "📜 Reactivación SIGEN (Res. N° 299 y 311/2026): El órgano rector instruye auditar prioritariamente 'Personal y Salarios' en el PAT 2027 y exige el seguimiento de observaciones en SISAC."
  ],
  metadatosFooter: "Avance 5 • Ecosistema de Control Público • Ley 24.156, Estatuto UNCo y Res. SIGEN 311/2026",
  escena3D: "anim_25",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Iniciamos el Avance 5 respondiendo la pregunta sobre qué organismos auditan al CURZAS y qué observaciones existen. Contamos con control externo de la AGN sobre la Cuenta de Inversión del SAF 809. Pero lo más distintivo es que la UNCo otorgó rango estatutario a su Unidad de Auditoría Interna, garantizando su independencia. Además, la Resolución SIGEN 311 de octubre de 2026 reactivó el control rector, exigiendo auditar prioritariamente la nómina salarial en el PAT 2027 y cargar desvíos en el sistema SISAC."
};

// Slide 26: Evaluación Laboral y Brecha de Medición
presData.slides[25] = {
  id: "slide_26",
  numero: 26,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Evaluación Laboral y Brecha de Medición",
  badge: "AVANCE 5 • EVALUACIÓN LABORAL",
  titulo: "Evaluación del Desempeño: CCT 366/06, Carrera Docente y Brecha de Medición",
  subtitulo: "Respuesta a la Pregunta Guía sobre Metas Cuantitativas y Rendimiento Laboral",
  puntosClave: [
    "❓ Pregunta Guía Cátedra: ¿Qué metas cuantitativas o indicadores clave de desempeño (KPIs) utiliza formalmente la institución para evaluar el rendimiento laboral?",
    "🏛️ Estamento Docente (CCT Dec. 1246/15): Se evalúa formal y periódicamente mediante concursos públicos, reválidas de cátedra, informes anuales, categorización SIGEVA y encuestas en Guaraní.",
    "⚠️ Estamento Nodocente (CCT Dec. 366/06 Título IX): Las actas paritarias UNCo-APUNC evidencian un diferimiento histórico en la calificación anual ordinaria, suplido por ascensos por antigüedad.",
    "📊 Brecha de Medición Estratégica (Telma Ramírez): La institución opera con registros administrativos de insumo (cargos en Mapuche), careciendo de indicadores cuantitativos de resultado o calidad de servicio."
  ],
  metadatosFooter: "Avance 5 • Evaluación del Desempeño y Convenios Colectivos • CCT 366/06 y CCT 1246/15",
  escena3D: "anim_26",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Respondiendo a la pregunta sobre qué metas o KPIs utiliza la institución para evaluar el rendimiento laboral: detectamos una asimetría estructural. Mientras los docentes son evaluados por concursos, reválidas periódicas y encuestas de cátedra; en el sector nodocente existe un diferimiento histórico en la aplicación del régimen de calificación del CCT 366 acordado en paritaria con APUNC. Como advierte Telma Ramírez, el CURZAS administra cargos pero carece de indicadores de resultado."
};

// Slide 27: Entregable 2 - Tablero de Control Preliminar de RR. HH. con 4 KPIs
presData.slides[26] = {
  id: "slide_27",
  numero: 27,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Tablero de Control de RR. HH. (4 KPIs)",
  badge: "AVANCE 5 • ENTREGABLE 2: TABLERO",
  titulo: "Diseño del Tablero de Control de RR. HH.: Los 4 KPIs Estratégicos",
  subtitulo: "Propuesta de Indicadores Clave de Eficiencia, Calidad Salarial y Despliegue Territorial",
  puntosClave: [
    "📑 Entregable Específico Cátedra: Diseño de un Tablero de Control preliminar que incluya al menos 3 Indicadores Clave de Gestión (KPIs) específicos para medir la eficiencia de los recursos humanos.",
    "⏱️ KPI-1 (Eficiencia de Procesos): Tiempo medio de tramitación de novedades en personal (SUDOCU a Mapuche) — Línea base: ~12 días hábiles → Meta: <= 5 días hábiles.",
    "🎯 KPI-2 (Calidad Salarial y Control): Tasa de liquidaciones mensuales sin observaciones ni rectificativas — Línea base: ~94,0% → Meta: >= 99,0% (Monitoreo SISAC).",
    "📚 KPI-3 (Formación Digital): Cobertura de capacitación digital del personal nodocente en SUDOCU/SIU — Línea base: ~45,0% → Meta: >= 90,0% anual (Paritaria APUNC).",
    "🌐 KPI-4 (Contribución Territorial - Mayne): Continuidad pedagógica y cobertura docente en los 10 nodos regionales — Línea base: ~82,0% → Meta: >= 95,0%."
  ],
  metadatosFooter: "Avance 5 • Tablero de Control de Gestión en Recursos Humanos • Telma Ramírez y John Mayne",
  escena3D: "anim_27",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para cumplir el entregable de diseñar el Tablero de Control con al menos 3 KPIs, propusimos 4 indicadores estratégicos basados en Telma Ramírez y John Mayne: el KPI 1 reduce a menos de 5 días el trámite de novedades entre SUDOCU y Mapuche; el KPI 2 eleva al 99% las liquidaciones sin errores para evitar observaciones de la UAI y el SISAC; el KPI 3 capacita al 90% del personal nodocente; y el KPI 4 garantiza el 95% de continuidad pedagógica en los 10 nodos territoriales."
};

// Slide 28: Circuito de Control y Bucle de Retroalimentación
presData.slides[27] = {
  id: "slide_28",
  numero: 28,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Circuito de Control y Retroalimentación",
  badge: "AVANCE 5 • BUCLE DE CONTROL",
  titulo: "Circuito de Control y Bucle de Retroalimentación Continua",
  subtitulo: "Articulación entre Operación, Tablero, Auditoría (PAT 2027) y Aprendizaje Institucional",
  puntosClave: [
    "🔄 Eslabones 1 y 2 (Operación y Tablero): Registro diario en SUDOCU/Mapuche y visualización semafórica de los 4 KPIs en el Tablero de Comando para alertas tempranas.",
    "🛡️ Eslabón 3 (Auditoría Basada en Riesgos): Control preventivo de la UAI estatutaria bajo pautas de la Res. SIGEN 311/2026 y carga obligatoria de compromisos en el sistema SISAC.",
    "💡 Eslabón 4 (Evaluación Pragmática - Feinstein): Superación de la auditoría punitiva; uso de hallazgos para enriquecer la concertación paritaria UNCo-APUNC y apoyar a los nodos.",
    "↺ Bucle de Retroalimentación Integral: Los desvíos detectados corrigen la Planificación Situacional (Avance 2), los procesos de personal (Avance 3) y la defensa presupuestaria (Avance 4)."
  ],
  metadatosFooter: "Avance 5 • Bucle de Retroalimentación y Aprendizaje Organizacional • Martínez Nogueira y Feinstein",
  escena3D: "anim_28",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "La evaluación solo tiene sentido si retroalimenta la gestión. Modelamos un circuito en 4 eslabones: la operación diaria en SUDOCU y Mapuche alimenta el Tablero; la UAI audita con enfoque de riesgos bajo la Resolución SIGEN 311 y reporta al SISAC; y finalmente la conducción aplica una evaluación pragmática según Feinstein. El bucle de retroalimentación vuelve a conectar con el PES del Avance 2, los procesos del Avance 3 y el presupuesto del Avance 4."
};

// ==============================================================================
// BLOQUE VI: CIERRE (Filmina 29)
// ==============================================================================

// Slide 29: Conclusión General de los 5 Avances
presData.slides[28] = {
  id: "slide_29",
  numero: 29,
  bloque: "CIERRE: CONCLUSIONES INTEGRALES Y DEFENSA",
  esquema: "Conclusión General de los 5 Avances",
  badge: "SÍNTESIS FINAL Y PREGUNTAS",
  titulo: "Conclusión General: Síntesis Crítica de los 5 Avances de Cátedra",
  subtitulo: "Qué Hicimos, Hallazgos Clave y el Problema Detectado Más Importante en Cada Unidad",
  puntosClave: [
    "1️⃣ Avance 1 (Unidad I - Contexto y Gobernanza): Caracterizamos el modelo institucional • Lo más destacado: Burocracia Profesional que garantiza legalidad y convenios paritarios • Problema crítico: Riesgo de endogamia en co-gobierno y gobernanza digital incipiente (sin datos abiertos ni IA en RRHH).",
    "2️⃣ Avance 2 (Unidad II - Planificación Situacional): Diagnóstico situacional, FODA, actores y capacidades estatales • Lo más destacado: Red viva de 10 Nodos en Río Negro y planificación PES (Matus) • Problema crítico: Silos de datos interinstitucionales (SIU/SIGEVA) y brecha digital territorial en plantillas nodocentes.",
    "3️⃣ Avance 3 (Unidad III - Procesos y Ecosistema Digital): Mapeamos estructura formal vs real y flujograma de licencias • Lo más destacado: Visibilización de la estructura real desconcentrada en territorio frente al organigrama de jure • Problema crítico: Parálisis de licencias por falta de subrogancia y falsa digitalización (papel escaneado sin interoperabilidad).",
    "4️⃣ Avance 4 (Unidad IV - Presupuesto y Factor Humano): Presupuesto por programas (Prog. 26) y centralidad del Inciso 1 • Lo más destacado: El 90,2% del gasto va a salarios, confirmando que las personas son la capacidad estatal • Problema crítico: Asfixia operativa (solo 9,8% para funcionamiento) y rigidez del 40% de Zona Desfavorable ante el ajuste fiscal.",
    "5️⃣ Avance 5 (Unidad V - Control, Tablero y Evaluación): Ecosistema de control y diseño de Tablero de RR. HH. • Lo más destacado: UAI con rango estatutario único y reactivación SIGEN (Res. 311/2026 y SISAC) • Problema crítico: Diferimiento histórico en la evaluación nodocente (APUNC) y ausencia previa de un Tablero de Control de gestión.",
    "🎓 Apertura al Tribunal y Agradecimiento: Reconocimiento sincero a los evaluadores Mgter. Susana Lopez y Lic. Carlos Jauge por su excelencia formativa • Apertura a la deliberación y preguntas del Tribunal."
  ],
  metadatosFooter: "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes • Ciclo Lectivo 2026 • CURZAS - UNCo",
  escena3D: "anim_29",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para concluir esta defensa integral en 17 minutos, resumimos los 5 Avances respondiendo puntualmente a lo solicitado:\nEn el Avance 1 validamos una Burocracia Profesional que resguarda la legalidad y los convenios paritarios; el problema crítico detectado es el riesgo de endogamia y la falta de datos abiertos.\nEn el Avance 2 articulamos la planificación situacional de Matus con la red de 10 nodos; el desafío detectado son los silos de datos y la dispersión geográfica.\nEn el Avance 3 contrastamos el organigrama con la realidad; detectamos los cuellos de botella por falta de subrogancia y la falsa digitalización del papel escaneado.\nEn el Avance 4 comprobamos que el 90,2% del presupuesto va al Inciso 1 por el plus de zona del 40%, demostrando que el personal es la auténtica capacidad del Estado; el problema es la asfixia del 9,8% de funcionamiento.\nY en el Avance 5 consolidamos el control con una UAI de rango estatutario y la Resolución SIGEN 311/2026, proponiendo un Tablero de 4 KPIs y un bucle de retroalimentación para superar la brecha histórica de evaluación nodocente.\nAgradezco sinceramente a la profesora Susana Lopez y al profesor Carlos Jauge por su acompañamiento académico. Quedo a su entera disposición para las preguntas del Tribunal."
};

// Guardamos en data/presentacion_data.js
const header = `/**
 * =============================================================================
 * METADATOS Y CONTENIDOS OFICIALES DE LA DEFENSA ORAL
 * Asignatura: Planeamiento y Control de las Organizaciones (2026)
 * Carrera: Licenciatura en Recursos Humanos - CURZAS / UNCo
 * Estudiante: Tec. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes
 * Docentes Evaluadores: Mgter. Susana Lopez y Lic. Carlos Jauge
 * =============================================================================
 */

const PRESENTACION_DATA = `;

const footer = `;

// Compatibilidad en navegadores y entornos CommonJS/Node
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRESENTACION_DATA;
}
`;

const outputContent = header + JSON.stringify(presData, null, 2) + footer;
fs.writeFileSync(path.join(__dirname, '../data/presentacion_data.js'), outputContent, 'utf8');
console.log('Successfully aligned all 29 slides in data/presentacion_data.js with exact consignas and situated responses!');

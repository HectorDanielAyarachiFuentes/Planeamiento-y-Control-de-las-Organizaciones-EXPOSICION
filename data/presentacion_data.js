/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN — CÁTEDRA PLANEAMIENTO Y CONTROL 2026
 * Universidad Nacional del Comahue — CURZAS
 * Licenciatura en Recursos Humanos
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ESTRUCTURA CANÓNICA BASADA EN EL AVANCE 2 (CONEXIÓN CON LA POLIGOBERNANZA):
 * 1. Apertura Protocolar y Carátula Oficial (Filmina 1)
 * 2. Presentación del Estudiante y Trayectoria (Filmina 2)
 * 3. Hoja de Ruta del Avance 1: Contexto, Modelo de Administración y Control (Filmina 3)
 * 4. Hoja de Ruta del Avance 2: Poligobernanza, Estado Plataforma y Adhocracias (Filmina 4)
 * 5. Articulación Integral de Ejes Teóricos y Metodológicos (Filmina 5)
 * 6. EJE I: El CURZAS en el Territorio: Sede Viedma y los 10 Nodos Regionales (Filmina 6)
 * 7. EJE I: Mapeo Territorial y Nodos de Río Negro (Filmina 7)
 * 8. EJE I: Modelo de Administración: Burocracia Tradicional Weberiana Profesional (Filmina 8)
 * 9. EJE I: Autonomía Universitaria frente a la Descentralización Gerencial NGP (Filmina 9)
 * 10. EJE I: Dimensión Instrumental de la NGP: Modernización Digital SIU y SUDOCU (Filmina 10)
 * 11. EJE I: Rendición de Cuentas (Accountability): Horizontal, Vertical y Social (Filmina 11)
 * 12. EJE II: Paradigma de la Poligobernanza (Cao & Blutman): Redes Multiactorales (Filmina 12)
 * 13. EJE II: Desafío 1: El "Estado Plataforma" e Interoperabilidad frente a Silos (Filmina 13)
 * 14. EJE II: Diagnóstico Empírico en CURZAS: Silos Informáticos con CONICET/INTA (Filmina 14)
 * 15. EJE II: Desafío 2: "Tramados Institucionales Ad Hoc" frente a la Rigidez (Filmina 15)
 * 16. EJE II: Evidencia Territorial: Secretarías como Adhocracias Matriciales (Filmina 16)
 * 17. EJE II: Paradoja del Co-Gobierno: De la Endogamia a los Puentes Reticulares (Filmina 17)
 * 18. EJE III: De la Planificación Normativa a la Estratégica Situacional (PES Matus) (Filmina 18)
 * 19. EJE III: Los Cuatro Momentos de la PES aplicados al CURZAS (Filmina 19)
 * 20. EJE III: Los Trabajadores como Actores Estratégicos: Viabilidad Política (Filmina 20)
 * 21. EJE III: Matriz FODA Situada en el Contexto del CURZAS (Filmina 21)
 * 22. EJE III: Mapeo de Actores Clave (Stakeholders) en Recursos Humanos (Filmina 22)
 * 23. EJE III: Evaluación de Capacidades Estatales según Bertranou (Filmina 23)
 * 24. CIERRE: Síntesis Estratégica del Avance 2 y Desafíos de Planeamiento (Filmina 24)
 * 25. AGRADECIMIENTOS: Agradecimiento a la Cátedra y Apertura de Preguntas (Filmina 25)
 */

const PRESENTACION_DATA = {
  meta: {
    institucion: "Universidad Nacional del Comahue",
    sede: "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)",
    departamento: "Departamento de Administración Pública",
    carrera: "Licenciatura en Recursos Humanos",
    materia: "Planeamiento y Control de las Organizaciones",
    titulo: "Informe Integral de Planeamiento y Gestión Organizacional",
    subtitulo: "Diagnóstico Institucional, Modelos de Gestión y Poligobernanza en el CURZAS (UNCo) — Avance 2",
    autor: "Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes",
    legajo: "Legajo N° 8252 — DNI N° 35.492.138",
    email: "hectordanielayarachifuentes@gmail.com",
    docentes: [
      { nombre: "Mgter. Susana Lopez", rol: "Docente Titular de Cátedra" },
      { nombre: "Lic. Carlos Jauge", rol: "Docente de Cátedra" }
    ],
    normativaMarco: "Estatuto General UNCo • Ley de Educación Superior N° 24.521 • Ley 24.156 • CCT Dec. 366/06 y 1246/15",
    ano: "2026",
    lugar: "Viedma, Río Negro — República Argentina"
  },

  timing: {
    totalMinutos: 30,
    alertaAmarillaMinutos: 20,
    alertaRojaMinutos: 27,
    promedioPorSlideMin: 1.2
  },

  fichasRespaldo: {
    autores: [
      {
        autor: "Horacio Cao & Gustavo Blutman (2019, 2021)",
        concepto: "Poligobernanza, Estado Plataforma, interoperabilidad de datos y tramados institucionales ad hoc frente a la rigidez departamental en territorios complejos."
      },
      {
        autor: "Carlos Matus (1993, 2007)",
        concepto: "Planificación Estratégica Situacional (PES): Los cuatro momentos (Explicativo, Normativo, Estratégico, Táctico), juego social, actores con intereses propios y unión indisoluble de viabilidad técnica y política."
      },
      {
        autor: "Julián Bertranou (2015)",
        concepto: "Capacidades estatales en tres dimensiones operativas: capacidad político-relacional (alianzas y consensos), administrativo-organizacional (rutinas y legalidad) y técnico-analítica (saberes y competencias)."
      },
      {
        autor: "Oscar Oszlak (2020)",
        concepto: "El Estado en la era exponencial: interoperabilidad de sistemas (IOP), principio de 'una sola vez' (once-only) y ventanillas únicas digitales para evitar islas burocráticas."
      },
      {
        autor: "Luis F. Aguilar Villanueva (2006)",
        concepto: "Gobernanza reticular: coproducción horizontal de valor público y articulación bottom-up entre universidad, municipios y comunidad frente a modelos tecnocráticos verticales."
      },
      {
        autor: "Juan Manuel Abal Medina (2014)",
        concepto: "Modelos de administración pública: burocracia weberiana profesional, críticas a la Nueva Gestión Pública (NGP) y dimensiones de rendición de cuentas (accountability)."
      },
      {
        autor: "Jorge Hintze (2018)",
        concepto: "Estructuras matriciales y gestión por proyectos: flexibilidad organizativa temporal para dar respuestas rápidas sin desarticular la burocracia permanente."
      },
      {
        autor: "Francisco Longo (2006)",
        concepto: "Subsistemas de gestión del empleo público: alineación estratégica entre planificación, rendimiento, compensaciones y relaciones laborales."
      }
    ],

    normativa: [
      {
        norma: "Constitución Nacional (Art. 75 inc. 19)",
        descripcion: "Garantiza la autonomía y autarquía de las Universidades Nacionales como resguardo democrático frente al poder político central."
      },
      {
        norma: "Ley de Educación Superior N° 24.521",
        descripcion: "Marco legal para el co-gobierno democrático universitario, concursos públicos y gratuidad de los estudios de grado."
      },
      {
        norma: "Estatuto General de la UNCo (Ord. 470/93)",
        descripcion: "Régimen del co-gobierno cuatripartito (Docentes, Nodocentes, Estudiantes, Graduados) y competencias del Consejo Directivo y Decanato."
      },
      {
        norma: "Decreto PEN N° 366/2006 (CCT Nodocente)",
        descripcion: "Convenio Colectivo de Trabajo General para el Personal Nodocente de las Universidades Nacionales. Protege carrera y estabilidad laboral."
      },
      {
        norma: "Decreto PEN N° 1246/2015 (CCT Docente)",
        descripcion: "Convenio Colectivo de Trabajo Docente. Garantiza estabilidad, concursos de carrera docente y tutela gremial en comisiones paritarias."
      },
      {
        norma: "Ley 24.156 de Administración Financiera",
        descripcion: "Regula el control interno (UAI / SIGEN) y el control externo legislativo (Auditoría General de la Nación - AGN)."
      },
      {
        norma: "Resolución CD-CURZA N° 196/2022",
        descripcion: "Reglamenta las mediaciones tecnológicas, la presencialidad remota sincrónica y el soporte tutorial en la Red de Nodos Territoriales."
      }
    ],

    nodosTerritoriales: [
      {
        sede: "Sede Cabecera: Viedma",
        detalle: "Capital provincial y asiento del Decanato, Secretarías, Consejo Directivo y soporte central administrativo del CURZAS."
      },
      {
        sede: "Nodo San Antonio Oeste (Zona Atlántica)",
        detalle: "Vinculación con el sector pesquero, portuario y turístico; oferta formativa territorializada."
      },
      {
        sede: "Nodo Sierra Grande (Costa Atlántica Sur)",
        detalle: "Polo productivo minero e industrial en reactivación; aula híbrida con soporte tecnológico."
      },
      {
        sede: "Nodo General Conesa (Valle Inferior)",
        detalle: "Nexo logístico y agropecuario sobre el Río Negro; articulación con cooperativas locales."
      },
      {
        sede: "Nodo Río Colorado (Valle Norte)",
        detalle: "Portal norte de la provincia; articulación en carreras de ciclo y articulación universitaria."
      },
      {
        sede: "Nodo Valcheta (Portal de la Línea Sur)",
        detalle: "Puerta de entrada a la estepa rionegrina; proyecto extensionista 'Nodos en Red' con pequeños productores."
      },
      {
        sede: "Nodo Ramos Mexía (Meseta de Somuncura)",
        detalle: "Comunidad de la estepa profunda a más de 400 km de Viedma; cursadas virtuales sincrónicas."
      },
      {
        sede: "Nodo Sierra Colorada (Centro Geográfico)",
        detalle: "Ubicación en el corazón de Río Negro sobre la Ruta Nacional 23; nexo de comunicaciones."
      },
      {
        sede: "Nodo Los Menucos (Cruce de Rutas 6 y 23)",
        detalle: "Centro neurálgico del comercio ganadero y artesanal en la región sur rionegrina."
      },
      {
        sede: "Nodo Maquinchao e Ing. Jacobacci (Línea Sur Alta)",
        detalle: "Zona de clima extremo y gran dispersión territorial; rol clave de los Asistentes Técnico-Pedagógicos."
      }
    ],

    faq: [
      {
        pregunta: "¿El CURZAS funciona como un 'Estado Plataforma' interoperable o persisten silos informáticos?",
        respuesta: "Persiste un modelo de sistemas aislados de información. Si bien la UNCo ha consolidado la digitalización interna con SIU (Guaraní, Mapuche, Diaguita) y SUDOCU, no existen pasarelas API automatizadas en tiempo real con CONICET (SIGEVA) ni con INTA, forzando a los investigadores a duplicar tareas manualmente."
      },
      {
        pregunta: "¿Cómo quiebran las Secretarías de Extensión y Ciencia y Técnica la rigidez departamental?",
        respuesta: "Operan como adhocracias matriciales y 'puentes de poligobernanza'. Mientras los departamentos disciplinares tienen tiempos deliberativos prolongados, las Secretarías articulan tramados ad hoc con municipios y productores mediante los 10 nodos regionales (como el proyecto 'Nodos en Red')."
      },
      {
        pregunta: "¿Por qué el modelo de Planificación Normativa resulta insuficiente según Carlos Matus?",
        respuesta: "Porque asume que quien planifica posee el monopolio del poder y opera en un sistema cerrado. La Planificación Estratégica Situacional (PES) demuestra que los trabajadores docentes y nodocentes son actores estratégicos con poder de veto y representación en co-gobierno, exigiendo construir viabilidad política."
      },
      {
        pregunta: "¿Cuál es el diagnóstico de las Capacidades Estatales del CURZAS según Bertranou?",
        respuesta: "Capacidad Político-Relacional: Alta (fuerte legitimidad democrática y alianzas territoriales); Capacidad Administrativa: Media-Alta (solvencia en rutinas formales y tramitación digital, pero con sobrecarga en Viedma); Capacidad Técnica: Media (brechas en analítica digital y entornos híbridos)."
      },
      {
        pregunta: "¿Cómo resuelve dialécticamente el Avance 2 la paradoja del co-gobierno endogámico?",
        respuesta: "El co-gobierno corre el riesgo de replegarse como un silo corporativo cerrado en disputas internas. Las Secretarías de Extensión y CyT actúan como 'puentes de poligobernanza' que oxigenan la institución al conectar la deliberación con las demandas socio-productivas vivas de la región."
      }
    ]
  },

  slides: [
    // ═════════════════════════════════════════════════════════════════════════
    // SECCIÓN 1: APERTURA INSTITUCIONAL Y HOJA DE RUTA (Filminas 1 a 5)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "slide_1",
      numero: 1,
      bloque: "APERTURA INSTITUCIONAL",
      esquema: "Carátula Oficial y Encuadre",
      badge: "PLANEAMIENTO 2026 • CURZAS",
      titulo: "Informe Integral de Planeamiento y Gestión Organizacional",
      subtitulo: "Diagnóstico Institucional, Modelos de Gestión y Poligobernanza en el CURZAS (UNCo) — Avance 2",
      puntosClave: [
        "Unidad Académica: Centro Universitario Regional Zona Atlántica y Sur (CURZAS) • Universidad Nacional del Comahue.",
        "Cátedra y Carrera: Planeamiento y Control de las Organizaciones (2026) • Licenciatura en Recursos Humanos.",
        "Equipo Docente: Mgter. Susana Lopez (Docente Titular) — Lic. Carlos Jauge (Docente de Cátedra).",
        "Estudiante: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes (Legajo 8252 — DNI 35.492.138 • Viedma, Río Negro)."
      ],
      metadatosFooter: "Carátula Institucional Oficial • Cátedra Planeamiento y Control 2026 • Viedma",
      escena3D: "anim_01",
      guionOrador: "Estimados profesores Mgter. Susana Lopez y Lic. Carlos Jauge, presento a continuación el Informe Integral de Planeamiento y Gestión Organizacional correspondiente al Avance 2 de la cátedra. Este trabajo aborda el diagnóstico situado del CURZAS articulando los marcos teóricos de la administración pública, la poligobernanza, la planificación situacional de Carlos Matus y las capacidades estatales de Julián Bertranou."
    },
    {
      id: "slide_2",
      numero: 2,
      bloque: "APERTURA INSTITUCIONAL",
      esquema: "Perfil y Posicionamiento del Estudiante",
      badge: "AUTOR Y TRAYECTORIA",
      titulo: "Héctor Daniel Ayarachi Fuentes: Trayectoria y Motivación",
      subtitulo: "Perspectiva Profesional en la Gestión Estratégica del Empleo Público Universitario",
      puntosClave: [
        "Formación de Base: Técnico Superior en Recursos Humanos, desempeñándose en el ámbito de la gestión y administración pública.",
        "Formación de Grado: Estudiante avanzado del Ciclo de Licenciatura en Recursos Humanos en el CURZAS (UNCo).",
        "Motivación de Cátedra: Analizar de forma crítica y situada la estructura burocrática, la red territorial y la viabilidad política de la universidad pública.",
        "Compromiso Académico: Aportar evidencia empírica rigurosa y herramientas de planeamiento que fortalezcan el valor social del CURZAS en la Patagonia Norte."
      ],
      metadatosFooter: "Legajo N° 8252 • DNI N° 35.492.138 • CURZAS - UNCo",
      escena3D: "anim_02",
      guionOrador: "Como Técnico Superior en Recursos Humanos y cursante de la Licenciatura en el CURZAS, mi enfoque parte de una doble mirada: la experiencia cotidiana en la administración y el rigor conceptual que nos brinda la cátedra. Mi objetivo es examinar cómo las tensiones entre burocracia, territorio y tecnología condicionan la capacidad del Estado para generar valor público."
    },
    {
      id: "slide_3",
      numero: 3,
      bloque: "HOJA DE RUTA DE CÁTEDRA",
      esquema: "Síntesis del Avance 1",
      badge: "AVANCE 1: MATRIZ Y CONTROL",
      titulo: "Hoja de Ruta del Avance 1: Modelo de Gestión y Accountability",
      subtitulo: "Caracterización Institucional, Burocracia Profesional y Mecanismos de Rendición de Cuentas",
      puntosClave: [
        "Marco Institucional: Autonomía y autarquía consagrada en el Art. 75 inc. 19 de la CN y Ley 24.521; co-gobierno democrático cuatripartito.",
        "Modelo Predominante: Burocracia Tradicional Weberiana de Base Profesional (Cao & Blutman, 2019; Abal Medina, 2014) con rígido apego reglamentario.",
        "Autonomía vs. NGP: Distinción crítica entre la autonomía democrática universitaria y la fragmentación mercantilista de la Nueva Gestión Pública.",
        "Mecanismos de Control: Análisis de la rendición de cuentas (O'Donnell) en sus dimensiones horizontal (UAI/AGN), vertical (elecciones) y social (transparencia)."
      ],
      metadatosFooter: "Avance 1 • Síntesis Teórica y Empírica • CURZAS - UNCo",
      escena3D: "anim_03",
      guionOrador: "En el Avance 1 sentamos las bases institucionales del CURZAS caracterizándolo como una Burocracia Profesional Weberiana regulada por convenios colectivos. Demostramos que la autonomía universitaria no debe confundirse con la descentralización gerencial de la NGP, y mapeamos los mecanismos de rendición de cuentas tanto internos como externos."
    },
    {
      id: "slide_4",
      numero: 4,
      bloque: "HOJA DE RUTA DE CÁTEDRA",
      esquema: "Estructura del Avance 2",
      badge: "AVANCE 2: POLIGOBERNANZA",
      titulo: "Hoja de Ruta del Avance 2: Poligobernanza y Viabilidad",
      subtitulo: "Estado Plataforma, Tramados Ad Hoc y Evaluación Situacional del CURZAS",
      puntosClave: [
        "Eje 1 — Estado Plataforma e Interoperabilidad: Diagnóstico de silos informáticos y falta de pasarelas API con CONICET (SIGEVA) e INTA.",
        "Eje 2 — Tramados Institucionales Ad Hoc: Redes flexibles de las Secretarías de Extensión y CyT frente a la lentitud departamental (10 Nodos Regionales).",
        "Eje 3 — Viabilidad y Capacidades: Matriz FODA situada, Mapeo de Stakeholders en RRHH y evaluación de capacidades estatales según Julián Bertranou.",
        "Enfoque Metodológico: Superación de la planificación normativa tradicional mediante la Planificación Estratégica Situacional (PES) de Carlos Matus."
      ],
      metadatosFooter: "Avance 2 • Conexión con la Poligobernanza • Tres Ejes Integradores",
      escena3D: "anim_04",
      guionOrador: "El Avance 2 da un salto cualitativo al conectar al CURZAS con la teoría de la Poligobernanza de Cao y Blutman. Planteamos dos dilemas centrales: la interoperabilidad digital frente a los silos de datos, y la capacidad de articular tramados temporales flexibles frente a la rigidez departamental, concluyendo con una evaluación integral de viabilidad y capacidades estatales."
    },
    {
      id: "slide_5",
      numero: 5,
      bloque: "HOJA DE RUTA DE CÁTEDRA",
      esquema: "Articulación Teórico-Empírica",
      badge: "MARCO TEÓRICO INTEGRAL",
      titulo: "Articulación Integral: Gobernanza, Mapeo y Capacidades",
      subtitulo: "Triangulación Epistemológica entre Autores Clave de la Administración Pública",
      puntosClave: [
        "Poligobernanza y Estado Plataforma: Horacio Cao, Gustavo Blutman (2019, 2021) y Oscar Oszlak (2020) para el análisis de redes e interoperabilidad.",
        "Gobernanza Reticular y Coproducción: Luis F. Aguilar Villanueva (2006) y Jorge Hintze (2018) para estructuras matriciales y acuerdos con gobiernos locales.",
        "Planificación Situacional (PES): Carlos Matus (1993, 2007) para concebir el planeamiento como cálculo interactivo en una arena de poder compartido.",
        "Capacidades Estatales: Julián Bertranou (2015) para diagnosticar las dimensiones político-relacional, administrativa y técnico-analítica del organismo."
      ],
      metadatosFooter: "Marco Teórico de Cátedra • Consistencia Epistemológica",
      escena3D: "anim_05",
      guionOrador: "La consistencia de nuestro informe descansa en una sólida triangulación teórica. No aplicamos recetas abstractas; integramos a Cao y Blutman para entender la poligobernanza patagónica, a Matus para evaluar la viabilidad política de los actores gremiales, y a Bertranou para calibrar con realismo las capacidades institucionales instaladas."
    },

    // ═════════════════════════════════════════════════════════════════════════
    // SECCIÓN 2: EJE I — MODELO DE GESTIÓN Y RENDICIÓN DE CUENTAS (Filminas 6 a 11)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "slide_6",
      numero: 6,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Caracterización Territorial",
      badge: "EJE I • TERRITORIO Y GESTIÓN",
      titulo: "El CURZAS en el Territorio: Sede Viedma y los 10 Nodos",
      subtitulo: "Unidad Académica Descentralizada con Presencia Estratégica en Río Negro",
      puntosClave: [
        "Radio de Acción: Sede cabecera en Viedma (Comarca Atlántica) con despliegue histórico sobre la vasta geografía de la Línea Sur rionegrina.",
        "Misión Primordial: Democratización del acceso a la educación superior pública, formación profesional y transferencia científica en territorio.",
        "Estructura Descentralizada: Red de 10 Nodos Regionales sostenidos mediante convenios de cooperación con municipios y comisiones de fomento.",
        "Complejidad Operativa: Extensas distancias logísticas (más de 600 km entre cabeceras), asimetrías de conectividad y dispersión de la matrícula."
      ],
      metadatosFooter: "Avance 1 & 2 • Identificación Organizacional • CURZAS - UNCo",
      escena3D: "anim_06",
      guionOrador: "El CURZAS es una unidad académica singular dentro de la UNCo. Desde su sede central en Viedma coordina una red descentralizada de 10 nodos en la estepa y la costa atlántica. Esta dispersión territorial es su mayor fortaleza democratizadora, pero al mismo tiempo su mayor desafío de gestión administrativa y logística."
    },
    {
      id: "slide_7",
      numero: 7,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Mapeo Territorial de Nodos",
      badge: "MAPA TERRITORIAL",
      titulo: "Mapeo Territorial y Nodos Regionales de Río Negro",
      subtitulo: "Distribución de Sedes, Convenios Municipales y Asistentes Técnico-Pedagógicos",
      puntosClave: [
        "Región Línea Sur: Ingeniero Jacobacci, Maquinchao, Los Menucos, Sierra Colorada, Ramos Mexía y Valcheta.",
        "Región Atlántica y Valles: Viedma (Central), San Antonio Oeste, Sierra Grande, General Conesa y Río Colorado.",
        "Oferta Académica Situada: Licenciatura en Recursos Humanos (CCC), Licenciatura en Arte y Sociedad, ciclos y tecnicaturas.",
        "Figura Operativa Clave: Asistentes Técnico-Pedagógicos locales designados por concurso para coordinar aulas híbridas y soporte estudiantil."
      ],
      metadatosFooter: "Figura 1: Mapeo de Nodos Regionales de Río Negro • CURZAS - UNCo",
      escena3D: "anim_07",
      diagramaSVG: "assets/red-territorial-nodos.svg",
      maqueta3D: "prueba_rionegro_3d.html",
      guionOrador: "Como ilustra el mapa oficial de Río Negro, los 10 nodos cubren desde la costa atlántica hasta la precordillera. Gracias a la designación de Asistentes Técnico-Pedagógicos en cada pueblo, los estudiantes de la estepa acceden a carreras como la Licenciatura en Recursos Humanos sin verse forzados a migrar hacia los grandes centros urbanos."
    },
    {
      id: "slide_8",
      numero: 8,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Matriz Burocrática Tradicional",
      badge: "MODELO ADMINISTRATIVO",
      titulo: "Identificación del Modelo: Burocracia Weberiana Profesional",
      subtitulo: "Estructura Jerárquica, Procedimentalismo Normativo y Empleo Público Reglado",
      puntosClave: [
        "Jerarquía y Centralización: Líneas estatutarias de autoridad taxativas (Decanato → Secretarías → Direcciones → Departamentos).",
        "Principio de Legalidad: Invalidez del acto administrativo sin resolución fundada, foliado de expedientes y dictámenes jurídicos previos.",
        "Carrera Administrativa y Estabilidad: Empleo amparado por CCT Nodocente (Dec. 366/06) y CCT Docente (Dec. 1246/15) con concursos públicos.",
        "Base Profesional: Alta autonomía técnica y docente en la ejecución pedagógica combinada con un rígido control burocrático de procesos."
      ],
      metadatosFooter: "Avance 1 • Burocracia Profesional • Cao & Blutman / Abal Medina",
      diagramaSVG: "assets/subsistemas_longo.svg",
      escena3D: "anim_08",
      guionOrador: "El modelo de administración que predomina en el CURZAS es una Burocracia Tradicional Weberiana de Base Profesional. Cada trámite exige estricta formalidad jurídica, y tanto docentes como nodocentes gozan de estabilidad garantizada por convenios colectivos nacionales que impiden la discrecionalidad o el despido arbitrario."
    },
    {
      id: "slide_9",
      numero: 9,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Autonomía vs. Gerencialismo",
      badge: "AUTONOMÍA VS NGP",
      titulo: "Autonomía Universitaria frente a la Descentralización NGP",
      subtitulo: "Resguardo Democrático y Pluralismo vs. Fragmentación Mercantilista de Mercado",
      puntosClave: [
        "Autonomía Constitucional: Conquista de la Reforma de 1918 (Art. 75 inc. 19 CN) como escudo protector contra el poder político central de turno.",
        "Descentralización NGP: Técnica gerencial de fragmentación en agencias o 'unidades de negocios' que compiten por presupuesto y tratan al ciudadano como cliente.",
        "Inexistencia de Lógicas Mercantiles: En el CURZAS no existen vouchers educativos, contratos individuales por productividad ni arancelamiento de grado.",
        "Co-Gobierno Democrático: Los cuatro claustros deliberan y asignan recursos de forma colegiada orientados al bien común social."
      ],
      metadatosFooter: "Avance 1 • Análisis Conceptual Riguroso • Cao & Blutman (2019)",
      escena3D: "anim_09",
      guionOrador: "Es imperativo no confundir la autonomía universitaria con la descentralización de la Nueva Gestión Pública. Mientras la NGP fragmenta el Estado en unidades de negocio que compiten mercantilmente, la autonomía del CURZAS es una garantía política de libertad académica y cogobierno democrático sin fines de lucro."
    },
    {
      id: "slide_10",
      numero: 10,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Modernización Digital de Procesos",
      badge: "MODERNIZACIÓN DIGITAL",
      titulo: "Dimensión Instrumental de la NGP: Ecosistema SIU y SUDOCU",
      subtitulo: "Incorporación de Herramientas Tecnológicas para la Transparencia y la Celeridad",
      puntosClave: [
        "Adopción No Doctrinaria: La NGP no impacta en la doctrina mercantil sino en la incorporación instrumental de herramientas de optimización.",
        "Ecosistema SIU Integral: Guaraní (gestión académica estudiantil), Mapuche (recursos humanos), Diaguita (compras) y Mocoví (presupuesto).",
        "Gestión Documental SUDOCU: Despapelización de expedientes, firma digital de resoluciones y trazabilidad integral de trámites en tiempo real.",
        "Acreditación y Calidad: Procesos periódicos de autoevaluación y rendición por estándares académicos ante la CONEAU."
      ],
      metadatosFooter: "Avance 1 • Innovación Tecnológica en la Gestión Pública • UNCo",
      escena3D: "anim_10",
      guionOrador: "La influencia de la NGP en el CURZAS ha sido estrictamente instrumental. Se incorporaron plataformas informáticas de punta como el ecosistema SIU y el sistema de expedientes digitales SUDOCU, permitiendo despapelizar trámites y dotar de transparencia a los actos administrativos."
    },
    {
      id: "slide_11",
      numero: 11,
      bloque: "EJE I: MODELO Y CONTROL",
      esquema: "Dimensiones de Accountability",
      badge: "ACCOUNTABILITY",
      titulo: "Mecanismos de Rendición de Cuentas (Accountability)",
      subtitulo: "Triangulación de Controles: Horizontal, Vertical y Social (Guillermo O'Donnell)",
      puntosClave: [
        "Control Horizontal (Intraestatal): Auditoría Interna UNCo (UAI), control externo de la Auditoría General de la Nación (AGN) y fiscalización del Consejo Directivo.",
        "Control Vertical (Electoral): Elecciones directas y ponderadas de autoridades ejecutivas (Decano/a) y renovación periódica de consejeros de los cuatro claustros.",
        "Control Social y Diagonal (Ciudadanía): Acceso a la información pública, boletines oficiales transparentes y rendición en asambleas y proyectos de extensión.",
        "Equilibrio de Poderes: Ninguna autoridad unipersonal puede contraer compromisos presupuestarios sin la aprobación del cuerpo colegiado soberano."
      ],
      metadatosFooter: "Avance 1 • Matriz de Rendición de Cuentas • O'Donnell / Abal Medina",
      escena3D: "anim_11",
      guionOrador: "El control institucional en el CURZAS se despliega en tres planos: el horizontal, a través de auditorías de la AGN y la UAI; el vertical, mediante elecciones democráticas de claustros; y el social, publicando actos en boletines oficiales. Esto asegura un estricto balance republicano de frenos y contrapesos."
    },

    // ═════════════════════════════════════════════════════════════════════════
    // SECCIÓN 3: EJE II — POLIGOBERNANZA, PLATAFORMA Y TRAMADOS AD HOC (Filminas 12 a 17)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "slide_12",
      numero: 12,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Marco Teórico de la Poligobernanza",
      badge: "EJE II • POLIGOBERNANZA",
      titulo: "Paradigma de la Poligobernanza: Redes y Complejidad",
      subtitulo: "Superación del Modelo Jerárquico Centralizado en Territorios Heterogéneos",
      puntosClave: [
        "Postulado de Cao y Blutman (2019, 2021): Las problemáticas públicas actuales son hipercomplejas, multicausales y desbordan a la burocracia cerrada.",
        "Redes Multiactorales: El Estado deja de ser una cúspide solitaria para articularse con municipios, cooperativas, comunidades y centros científicos.",
        "Poligobernanza Territorial: Gestión situada de la diversidad patagónica donde la toma de decisiones se co-construye de abajo hacia arriba (bottom-up).",
        "Dos Desafíos Críticos para el CURZAS: Convertirse en un Estado Plataforma interoperable y estructurar tramados institucionales ad hoc flexibles."
      ],
      metadatosFooter: "Avance 2 • Teoría de la Poligobernanza • Horacio Cao & Gustavo Blutman",
      escena3D: "anim_12",
      guionOrador: "Ingresamos al núcleo del Avance 2 con la Poligobernanza de Cao y Blutman. Frente a problemas territoriales complejos como la sequía o la brecha digital en la Línea Sur, las jerarquías verticales fracasan. Se requieren redes colaborativas multiactorales que integren al Estado, la universidad y los municipios locales."
    },
    {
      id: "slide_13",
      numero: 13,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Desafío 1: Estado Plataforma",
      badge: "ESTADO PLATAFORMA",
      titulo: "Desafío 1: El 'Estado Plataforma' e Interoperabilidad (IOP)",
      subtitulo: "Ecosistemas Sociotécnicos de Datos Abiertos y el Principio de 'Una Sola Vez'",
      puntosClave: [
        "Concepto de Estado Plataforma: La administración pública como infraestructura articuladora abierta que comparte datos mediante APIs estandarizadas.",
        "Interoperabilidad de Sistemas (Oszlak, 2020): Capacidad técnica y normativa para que bases de datos heterogéneas dialoguen automáticamente en tiempo real.",
        "Principio de 'Una Sola Vez' (Once-Only): Ningún ciudadano, docente o investigador debe presentar un dato que el Estado ya posea en otra repartición.",
        "Superación de Islas Burocráticas: Reducción drástica de costos de transacción y erradicación del monopolio de la información en ventanillas cerradas."
      ],
      metadatosFooter: "Avance 2 • Eje 1 de Análisis • Cao & Blutman / Oscar Oszlak",
      escena3D: "anim_13",
      guionOrador: "El primer gran desafío analizado es el del Estado Plataforma. Como plantea Oszlak, un Estado moderno debe actuar como una plataforma tecnológica donde las bases de datos interoperan automáticamente. El ciudadano o investigador no debería tener que cargar el mismo dato dos veces en distintas ventanillas públicas."
    },
    {
      id: "slide_14",
      numero: 14,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Diagnóstico Empírico de Silos",
      badge: "DIAGNÓSTICO SILOS",
      titulo: "Diagnóstico en CURZAS: Silos Informáticos y Duplicación",
      subtitulo: "Inexistencia de Pasarelas API Automáticas con CONICET (SIGEVA) e INTA",
      puntosClave: [
        "Veredicto Empírico: En el CURZAS persiste un modelo fragmentado de sistemas aislados de información frente al sistema científico nacional.",
        "Carga Manual Duplicada: Los docentes-investigadores con doble pertenencia (UNCo - CONICET / INTA) deben tipear sus antecedentes dos o tres veces por separado.",
        "Falta de Pasarela API en Tiempo Real: Mientras la UNCo opera con SIU, CONICET exige SIGEVA y el INTA sus sistemas propios (SIGA/SIGEP) sin interoperabilidad.",
        "Consecuencias Regionales: Relevamientos socio-productivos fragmentados en la Línea Sur y pérdida de capacidad analítica para decisiones públicas."
      ],
      metadatosFooter: "Avance 2 • Dictamen Eje 1 • Silos Informáticos y Costos Transaccionales",
      escena3D: "anim_14",
      guionOrador: "Al contrastar el marco conceptual con la realidad del CURZAS, el veredicto es concluyente: persisten los silos de información. Los investigadores que trabajan en el CIT Río Negro o en el INTA deben cargar manualmente sus publicaciones en dos o tres plataformas distintas porque no existe una pasarela API automática."
    },
    {
      id: "slide_15",
      numero: 15,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Desafío 2: Tramados Ad Hoc",
      badge: "TRAMADOS AD HOC",
      titulo: "Desafío 2: 'Tramados Institucionales Ad Hoc' y Flexibilidad",
      subtitulo: "Superación de la Rigidez Departamental mediante Estructuras Matriciales por Proyectos",
      puntosClave: [
        "Tramados Institucionales Ad Hoc (Cao & Blutman): Arreglos organizacionales dinámicos, flexibles y temporales construidos en función de metas concretas.",
        "Rigidez Departamental Tradicional: Las estructuras disciplinares estables resultan lentas para dar respuestas ágiles ante crisis o demandas socio-productivas.",
        "Gestión Matricial por Proyectos (Jorge Hintze, 2018): Movilización transversal de recursos interdisciplinarios sin destruir la estructura permanente.",
        "Gobernanza Reticular (Aguilar Villanueva): Articulación horizontal entre universidad, intendencias comarcales y productores locales."
      ],
      metadatosFooter: "Avance 2 • Eje 2 de Análisis • Cao & Blutman / Hintze / Aguilar Villanueva",
      escena3D: "anim_15",
      guionOrador: "El segundo desafío se refiere a los tramados institucionales ad hoc. Las problemáticas de la Línea Sur no pueden esperar los meses que demanda la burocracia departamental. Se requieren dispositivos matriciales por proyecto que articulen rápidamente saberes universitarios con capacidades municipales."
    },
    {
      id: "slide_16",
      numero: 16,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Evidencia Territorial Adhocrática",
      badge: "EVIDENCIA TERRITORIAL",
      titulo: "Secretarías de Extensión y CyT como Adhocracias Matriciales",
      subtitulo: "Proyecto 'Nodos en Red', Pequeños Productores y Mesas Interinstitucionales",
      puntosClave: [
        "Veredicto Empírico: Las Secretarías de Extensión y de Ciencia y Técnica del CURZAS sí configuran tramados ad hoc y redes flexibles temporales.",
        "Caso Testigo: Proyecto 'Nodos en Red: experiencias sustentables de producción para pequeños productores' (Valcheta, San Antonio Oeste y Conesa).",
        "Mesas Técnicas de Emergencia: Articulación temporal con el Departamento Provincial de Aguas (DPA), INTA y cooperativas rurales por crisis hídrica.",
        "Coproducción de Valor: El CURZAS actúa como nodo facilitador en una red horizontal donde el saber académico dialoga con el saber empírico comunitario."
      ],
      metadatosFooter: "Avance 2 • Dictamen Eje 2 • Proyecto Nodos en Red y Mesas Técnicas",
      escena3D: "anim_16",
      guionOrador: "La evidencia empírica confirma que las Secretarías de Extensión y de Ciencia y Técnica del CURZAS operan como auténticas adhocracias. El proyecto 'Nodos en Red' en Valcheta y Conesa o las mesas hídricas con el DPA y el INTA demuestran cómo la universidad se despliega en territorio rompiendo el aislamiento burocrático."
    },
    {
      id: "slide_17",
      numero: 17,
      bloque: "EJE II: POLIGOBERNANZA",
      esquema: "Dialéctica y Puentes de Poligobernanza",
      badge: "PUENTES RETICULARES",
      titulo: "Paradoja del Co-Gobierno y Puentes de Poligobernanza",
      subtitulo: "Superación del Silo Corporativo Endogámico mediante la Coproducción Territorial",
      puntosClave: [
        "La Paradoja del Co-Gobierno (Avance 1): Órgano soberano democrático que corre el riesgo recurrente de replegarse como un silo corporativo endogámico.",
        "La Solución Dialéctica (Avance 2): Las Secretarías sustantivas operan como verdaderos 'puentes de poligobernanza' que salvan a la institución de la inercia interna.",
        "Conexión Democracia-Territorio: El co-gobierno aporta legitimidad política, mientras las secretarías transfieren valor hacia los 10 nodos y municipios.",
        "Oxigenación de la Agenda: Las demandas vivas de la sociedad patagónica reingresan al Consejo Directivo transformadas en nuevas carreras y proyectos."
      ],
      metadatosFooter: "Avance 2 • Síntesis Conceptual Dialéctica • Co-Gobierno y Poligobernanza",
      escena3D: "anim_17",
      guionOrador: "Aquí resolvemos la paradoja planteada en el Avance 1: el co-gobierno corre el riesgo de volverse endogámico si se encierra en disputas de poder interno. Las Secretarías de Extensión y CyT funcionan como puentes de poligobernanza que oxigenan la institución conectándola con las demandas vivas de los 10 nodos."
    },

    // ═════════════════════════════════════════════════════════════════════════
    // SECCIÓN 4: EJE III — PLANIFICACIÓN SITUACIONAL, FODA Y CAPACIDADES (Filminas 18 a 23)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "slide_18",
      numero: 18,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Crítica a la Planificación Normativa",
      badge: "EJE III • PES DE MATUS",
      titulo: "De la Planificación Normativa a la Situacional (PES)",
      subtitulo: "Superación del Diagnóstico Tecnocrático Rígido en Arenas de Poder Compartido",
      puntosClave: [
        "Límites de la Planificación Normativa Tradicional: Asume falsamente un sistema cerrado, estabilidad macroeconómica y monopolio del poder.",
        "Postulado de Carlos Matus (1993, 2007): Quien planifica no está solo en el tablero; convive con otros actores que también juegan, planifican y tienen poder.",
        "Explicación Situacional: La realidad no se describe desde una objetividad neutral; se explica desde la posición, intereses y recursos de cada actor.",
        "Imperativo para el CURZAS: Los planes formales (Plan Estratégico y POAs) son normativos, pero la gestión real exige planificación situacional."
      ],
      metadatosFooter: "Avance 2 • Eje 3 de Análisis • Planificación Estratégica Situacional",
      escena3D: "anim_18",
      guionOrador: "Pasamos al Eje 3 adoptando la Planificación Estratégica Situacional de Carlos Matus. La planificación tradicional normativa fracasa porque cree que un burócrata puede decretar el futuro desde un escritorio. Matus nos enseña que en la universidad pública el poder está compartido y el conflicto es parte constitutiva de la realidad."
    },
    {
      id: "slide_19",
      numero: 19,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Los Cuatro Momentos de Matus",
      badge: "LOS CUATRO MOMENTOS",
      titulo: "Los Cuatro Momentos de la PES aplicados al CURZAS",
      subtitulo: "Explicativo, Normativo, Estratégico y Táctico-Operacional en la Gestión Universitaria",
      puntosClave: [
        "1. Momento Explicativo (¿Fue, es y será?): Diagnóstico de problemas nodales (asfixia presupuestaria nacional, sobrecarga en Viedma y silos de datos).",
        "2. Momento Normativo (¿Debiera ser?): Diseño del horizonte deseable: un CURZAS territorializado, transparente, interoperable y de calidad pública.",
        "3. Momento Estratégico (¿Puedo hacer?): Construcción articulada de viabilidad política (alianzas con gremios y municipios) y económica.",
        "4. Momento Táctico-Operacional (¿Hacer?): Mediación diaria entre el plan y las contingencias reales (clima en la estepa, inflación y conectividad)."
      ],
      metadatosFooter: "Avance 2 • Matriz de los Cuatro Momentos de la PES • Carlos Matus",
      escena3D: "anim_19",
      guionOrador: "Matus estructura la PES en cuatro momentos dinámicos. En el momento explicativo identificamos los cuellos de botella; en el normativo fijamos el horizonte democratizador; en el estratégico tejemos viabilidad política con gremios e intendencias; y en el táctico resolvemos las urgencias cotidianas de la estepa."
    },
    {
      id: "slide_20",
      numero: 20,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Trabajadores como Actores Clave",
      badge: "ACTORES ESTRATÉGICOS",
      titulo: "Trabajadores como Actores Estratégicos y Viabilidad",
      subtitulo: "Unión Indisoluble entre Viabilidad Técnica y Viabilidad Política en Paritarias",
      puntosClave: [
        "Sujetos del Juego Social: Los docentes y nodocentes no son recursos pasivos ejecutores de órdenes; son actores estratégicos con capacidad de veto y propuesta.",
        "Institucionalidad Gremial: Representación claustral en el Consejo Directivo y negociación salarial y laboral en Comisiones Paritarias Particulares (APUNC/ADUNC).",
        "Viabilidad Técnica vs. Política: Un proyecto técnicamente impecable fracasará si carece de construcción de consenso y legitimidad con los trabajadores.",
        "Coproducción Institucional: Cualquier reforma en digitalización o expansión territorial debe concertarse en mesas de trabajo paritarias conjuntas."
      ],
      metadatosFooter: "Avance 2 • Poder Compartido y Viabilidad Política • Carlos Matus",
      escena3D: "anim_20",
      guionOrador: "Un aporte central de Matus es reconocer a los trabajadores como actores estratégicos. En el CURZAS, ni los docentes ni los nodocentes acatan reglamentos a ciegas: tienen poder de veto en comisiones paritarias. Cualquier innovación de planeamiento debe unir la solvencia técnica con la concertación política."
    },
    {
      id: "slide_21",
      numero: 21,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Matriz FODA Situada",
      badge: "MATRIZ FODA SITUADA",
      titulo: "Matriz FODA Situada en el Contexto del CURZAS",
      subtitulo: "Cruce Estratégico entre Factores Endógenos y Contingencias Críticas del Entorno",
      puntosClave: [
        "Fortalezas: Presencia territorial activa en 10 nodos, legitimidad democrática del co-gobierno, estabilidad por CCT y modernización por SIU/SUDOCU.",
        "Debilidades: Silos informáticos sin interoperabilidad (CONICET/INTA), sobrecarga administrativa en Viedma y brechas en competencias digitales avanzadas.",
        "Oportunidades: Alta demanda formativa en el interior, alianzas de poligobernanza con intendencias y consolidación de la docencia híbrida.",
        "Amenazas: Asfixia presupuestaria nacional, congelamiento de partidas de funcionamiento, erosión salarial y déficit de conectividad en la estepa."
      ],
      metadatosFooter: "Avance 2 • Matriz FODA Situada del CURZAS • Relevamiento Empírico 2026",
      escena3D: "anim_21",
      guionOrador: "Nuestra Matriz FODA situada expone con crudeza la realidad del organismo. Por el lado interno, contrastamos la fortaleza de los 10 nodos y el co-gobierno con la debilidad de los silos y la sobrecarga laboral. Por el lado externo, la gran oportunidad de demanda comunitaria choca contra la amenaza del severo desfinanciamiento nacional."
    },
    {
      id: "slide_22",
      numero: 22,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Mapeo de Stakeholders de RRHH",
      badge: "MAPEO DE STAKEHOLDERS",
      titulo: "Mapeo de Actores Clave (Stakeholders) en Recursos Humanos",
      subtitulo: "Matriz de Poder, Interés y Estrategias de Negociación Paritaria en el Empleo Público",
      puntosClave: [
        "Gremios Nodocente (APUNC) y Docente (ADUNC): Poder Muy Alto / Interés Muy Alto; defensa del CCT, condiciones seguras, salarios y concursos.",
        "Consejo Directivo y Superior: Poder Muy Alto / Interés Muy Alto; deliberación política, aprobación de estructuras y fiscalización presupuestaria.",
        "Decanato y Secretarías: Poder Muy Alto / Interés Alto; gobernabilidad operativa y articulación de las demandas de la sede y los nodos.",
        "Actores Externos: SPU (control fiscal estricto de masa salarial) y Municipios de Nodos (cesión de espacios físicos, insumos y logística comarcal)."
      ],
      metadatosFooter: "Avance 2 • Mapeo de Actores y Fuerzas Sociales • Gestión de RRHH",
      escena3D: "anim_22",
      guionOrador: "El mapeo de actores de recursos humanos demuestra que la gestión del empleo en el CURZAS es un campo de fuerzas. Los gremios APUNC y ADUNC tienen poder muy alto para vetar o viabilizar medidas, el Decanato lidera la articulación cotidiana, y los municipios de los nodos aportan la infraestructura edilicia imprescindible."
    },
    {
      id: "slide_23",
      numero: 23,
      bloque: "EJE III: PES Y CAPACIDADES",
      esquema: "Capacidades Estatales de Bertranou",
      badge: "CAPACIDADES ESTATALES",
      titulo: "Evaluación de Capacidades Estatales según Bertranou",
      subtitulo: "Diagnóstico Operacional: Capacidad Político-Relacional, Administrativa y Técnico-Analítica",
      puntosClave: [
        "1. Capacidad Político-Relacional (Desempeño ALTO): Notoria aptitud para canalizar conflictos en co-gobierno, acuerdos paritarios y convenios nodales.",
        "2. Capacidad Administrativa-Organizacional (Desempeño MEDIO-ALTO): Solvencia procedimental en tramitación SIU/SUDOCU, con sobrecarga en la planta central.",
        "3. Capacidad Técnica-Analítica (Desempeño MEDIO): Alta calificación académica disciplinar pero con deficiencias críticas en analítica de datos y entornos híbridos.",
        "Rigidez Escalafonaria: Dificultad del escalafón tradicional para incorporar perfiles tecnológicos de vanguardia (ingenieros de datos y ciberseguridad)."
      ],
      metadatosFooter: "Avance 2 • Metodología de Julián Bertranou (2015) • Diagnóstico Situado",
      escena3D: "anim_23",
      guionOrador: "Aplicando la metodología de Julián Bertranou, evaluamos las capacidades del CURZAS en tres planos: su capacidad político-relacional es Alta gracias al cogobierno; su capacidad administrativa es Media-Alta en rutinas regladas; pero su capacidad técnica-analítica es Media debido a brechas en analítica digital y entornos híbridos."
    },

    // ═════════════════════════════════════════════════════════════════════════
    // SECCIÓN 5: CIERRE, SÍNTESIS Y CONCLUSIONES (Filminas 24 y 25)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "slide_24",
      numero: 24,
      bloque: "CIERRE Y CONCLUSIONES",
      esquema: "Síntesis Estratégica del Avance 2",
      badge: "SÍNTESIS ESTRATÉGICA",
      titulo: "Síntesis Estratégica y Dictamen de Viabilidad del Avance 2",
      subtitulo: "Articulación de los Tres Ejes: Interoperabilidad, Tramados Ad Hoc y PES Situada",
      puntosClave: [
        "Superar Silos de Información: Urgencia de implementar pasarelas API con CONICET e INTA para viabilizar el principio de 'una sola vez'.",
        "Consolidar la Poligobernanza Reticular: Proteger el rol de las Secretarías de Extensión y CyT como adhocracias que evitan la endogamia burocrática.",
        "Planificación Situacional Permanente: Institucionalizar la PES de Matus para que las metas estratégicas contemplen la viabilidad política paritaria.",
        "Plan Situado de Capacitación Laboral: Acordar con APUNC y ADUNC programas de formación continua en analítica de datos, pedagogía híbrida y procesos."
      ],
      metadatosFooter: "Avance 2 • Dictamen Estratégico Final de Planeamiento • CURZAS - UNCo",
      escena3D: "anim_24",
      guionOrador: "En conclusión, el Avance 2 demuestra que el futuro del CURZAS reside en articular su formidable potencia de poligobernanza territorial con la modernización de sus capacidades técnicas e interoperables. El camino no es la imposición burocrática, sino la planificación situacional que empodere al personal mediante capacitación y concertación paritaria."
    },
    {
      id: "slide_25",
      numero: 25,
      bloque: "AGRADECIMIENTOS Y PREGUNTAS",
      esquema: "Cierre Protocolar de la Exposición",
      badge: "CIERRE Y PREGUNTAS",
      titulo: "Agradecimiento a la Cátedra y Apertura de Preguntas",
      subtitulo: "Planeamiento y Control de las Organizaciones 2026 • CURZAS — UNCo",
      puntosClave: [
        "Agradecimiento Institucional: A la docente titular Mgter. Susana Lopez y al docente Lic. Carlos Jauge por las orientaciones y correcciones del avance.",
        "Reconocimiento al Co-Gobierno: A la comunidad universitaria del CURZAS (docentes, nodocentes, estudiantes y graduados) por su vocación pública.",
        "Disposición Académica: Quedo a entera disposición de la cátedra para responder interrogantes, debatir los dictámenes y profundizar los ejes analíticos.",
        "Compromiso Futuro: Continuar articulando la teoría de las organizaciones con la práctica real del empleo público en la Patagonia."
      ],
      metadatosFooter: "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes • Ciclo Lectivo 2026",
      escena3D: "anim_25",
      guionOrador: "Agradezco profundamente a la Mgter. Susana Lopez y al Lic. Carlos Jauge por su acompañamiento docente y rigurosas devoluciones. Quedo ahora a su total disposición para responder preguntas, profundizar en cualquiera de los ejes o debatir los dictámenes teóricos y metodológicos presentados. Muchas gracias."
    }
  ]
};

// Compatibilidad en navegadores y entornos CommonJS/Node
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRESENTACION_DATA;
}

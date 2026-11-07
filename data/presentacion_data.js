/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN — CÁTEDRA PLANEAMIENTO Y CONTROL 2026
 * Universidad Nacional del Comahue — CURZAS
 * Licenciatura en Recursos Humanos
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * ESTRUCTURA INTEGRAL CONSOLIDADA DE LOS 4 AVANCES:
 * 1. Presentación y Quiénes Somos (Filmina 1)
 * 2. Hoja de Ruta Ejecutiva: Los 4 Avances en Síntesis Somera (Filmina 2)
 * 3. AVANCE 1: Identificación y Marco Institucional del CURZAS (Filmina 3)
 * 4. AVANCE 1: Modelo Administrativo: Burocracia Weberiana Profesional (Filmina 4)
 * 5. AVANCE 1: Autonomía Universitaria frente a la NGP (Filmina 5)
 * 6. AVANCE 1: Rendición de Cuentas (Accountability) y Paradoja del Co-Gobierno (Filmina 6)
 * 7. AVANCE 1: Mapeo Territorial y Nodos de Río Negro — Visor 3D & SVG (Filmina 7)
 * 8. AVANCE 2: Paradigma de la Poligobernanza: Redes Territoriales Complejas (Filmina 8)
 * 9. AVANCE 2: Desafío 1: Estado Plataforma frente a Silos de Datos (Filmina 9)
 * 10. AVANCE 2: Desafío 2: Tramados Institucionales Ad Hoc y Adhocracias (Filmina 10)
 * 11. AVANCE 2: De la Planificación Normativa a la Situacional (PES Matus) (Filmina 11)
 * 12. AVANCE 2: Matriz FODA Situada del CURZAS (Filmina 12)
 * 13. AVANCE 2: Mapeo de Stakeholders y Capacidades Estatales (Bertranou) (Filmina 13)
 * 14. AVANCE 3: Estructura Orgánica: Organigrama Formal vs Real (Filmina 14)
 * 15. AVANCE 3: Centralización y Desconcentración en Recursos Humanos (Filmina 15)
 * 16. AVANCE 3: Flujograma del Circuito de Licencias de Personal (Filmina 16)
 * 17. AVANCE 3: Transición al Ecosistema Electrónico y Cuellos de Botella (Filmina 17)
 * 18. AVANCE 3: Inercia Estructural (Campos) y Salir del Paso (Forester) (Filmina 18)
 * 19. AVANCE 3: Propuestas de Rediseño: Firma Digital e Interoperabilidad (Filmina 19)
 * 20. AVANCE 4: Presupuesto Universitario y Centralidad del Inciso 1 (Filmina 20)
 * 21. AVANCE 4: Zona Desfavorable Patagónica (40%) y Masa Salarial (Filmina 21)
 * 22. AVANCE 4: Presupuesto por Programas: Cadena Insumo-Producto (Makon) (Filmina 22)
 * 23. AVANCE 4: Ciclo Presupuestario y Sistemas Integrados (SIU / Ley 24.156) (Filmina 23)
 * 24. AVANCE 4: El Factor Humano como la Auténtica Capacidad Estatal (Filmina 24)
 * 25. CIERRE: Conclusiones Integrales, Agradecimiento y Apertura a Preguntas (Filmina 25)
 * =============================================================================
 */

const PRESENTACION_DATA = {
  "meta": {
    "institucion": "Universidad Nacional del Comahue",
    "sede": "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)",
    "departamento": "Departamento de Administración Pública",
    "carrera": "Licenciatura en Recursos Humanos",
    "materia": "Planeamiento y Control de las Organizaciones",
    "titulo": "Informe Integral de Planeamiento y Gestión Organizacional",
    "subtitulo": "Diagnóstico Situado, Estructura Burocrática, Poligobernanza y Presupuesto en el CURZAS (UNCo) — Avances 1, 2, 3 y 4",
    "autor": "Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes",
    "legajo": "Legajo N° 8252 — DNI N° 35.492.138",
    "email": "hectordanielayarachifuentes@gmail.com",
    "docentes": [
      {
        "nombre": "Mgter. Susana Lopez",
        "rol": "Docente Titular de Cátedra"
      },
      {
        "nombre": "Lic. Carlos Jauge",
        "rol": "Docente de Cátedra"
      }
    ],
    "normativaMarco": "Estatuto General UNCo • Ley 24.521 • Ley 24.156 • Ley 25.506 • CCT Dec. 366/06 y 1246/15",
    "ano": "2026",
    "lugar": "Viedma, Río Negro — República Argentina"
  },
  "timing": {
    "totalMinutos": 30,
    "alertaAmarillaMinutos": 20,
    "alertaRojaMinutos": 27,
    "promedioPorSlideMin": 1.2
  },
  "fichasRespaldo": {
    "autores": [
      {
        "autor": "Horacio Cao & Gustavo Blutman (2019, 2021)",
        "concepto": "Poligobernanza, Estado Plataforma, interoperabilidad de datos y tramados institucionales ad hoc frente a la rigidez departamental en territorios complejos."
      },
      {
        "autor": "Carlos Matus (1993, 2007)",
        "concepto": "Planificación Estratégica Situacional (PES): Los cuatro momentos (Explicativo, Normativo, Estratégico, Táctico), juego social, actores con intereses propios y unión indisoluble de viabilidad técnica y política."
      },
      {
        "autor": "Marcos Makon (CEPAL / ILPES)",
        "concepto": "Técnica de Presupuesto por Programas: Articulación de la cadena Insumo-Proceso-Producto y medición del producto terminal en el sector público."
      },
      {
        "autor": "Guillermo Schweinheim (2018)",
        "concepto": "Sistema presupuestario y de administración financiera en Argentina (Ley 24.156): Rigidez estructural del gasto en personal y ciclo presupuestario."
      },
      {
        "autor": "Julián Bertranou (2015)",
        "concepto": "Capacidades estatales en tres dimensiones operativas: capacidad político-relacional (alianzas y consensos), administrativo-organizacional (rutinas y legalidad) y técnico-analítica (saberes y competencias)."
      },
      {
        "autor": "Oscar Oszlak (2020)",
        "concepto": "El Estado en la era exponencial: interoperabilidad de sistemas (IOP), principio de 'una sola vez' (once-only) y ventanillas únicas digitales para evitar islas burocráticas."
      },
      {
        "autor": "Campos, Carro, Duran y Fernández",
        "concepto": "Inercia estructural en las organizaciones públicas: Resistencia cultural al cambio y persistencia de rutinas frente a los ecosistemas electrónicos."
      },
      {
        "autor": "John Forester (y Charles Lindblom)",
        "concepto": "Racionalidad limitada y la práctica de 'salir del paso' (muddling through): Respuestas pragmáticas y parches cotidianos ante la escasez de tiempo y recursos."
      },
      {
        "autor": "Jorge Hintze (2018)",
        "concepto": "Estructuras matriciales y gestión por proyectos: Flexibilidad organizativa temporal para dar respuestas rápidas sin desarticular la burocracia permanente."
      },
      {
        "autor": "Juan Manuel Abal Medina (2014)",
        "concepto": "Modelos de administración pública: Burocracia weberiana profesional, críticas a la Nueva Gestión Pública (NGP) y dimensiones de rendición de cuentas."
      }
    ],
    "normativa": [
      {
        "norma": "Constitución Nacional (Art. 75 inc. 19)",
        "descripcion": "Garantiza la autonomía y autarquía de las Universidades Nacionales como resguardo democrático frente al poder político central."
      },
      {
        "norma": "Ley de Educación Superior N° 24.521",
        "descripcion": "Marco legal para el co-gobierno democrático universitario, concursos públicos y gratuidad de los estudios de grado."
      },
      {
        "norma": "Ley 24.156 de Administración Financiera",
        "descripcion": "Regula los sistemas de presupuesto, tesorería, crédito público y contabilidad, así como el control interno (UAI/SIGEN) y externo (AGN)."
      },
      {
        "norma": "Ley 25.506 de Firma Digital",
        "descripcion": "Establece la eficacia jurídica y valor probatorio pleno de la firma digital con infraestructura de clave pública (PKI), superando el escaneo manual."
      },
      {
        "norma": "Decreto PEN N° 366/2006 (CCT Nodocente)",
        "descripcion": "Convenio Colectivo de Trabajo General para el Personal Nodocente de las Universidades Nacionales. Protege carrera, estabilidad y plus de Zona Desfavorable (40%)."
      },
      {
        "norma": "Decreto PEN N° 1246/2015 (CCT Docente)",
        "descripcion": "Convenio Colectivo de Trabajo Docente. Garantiza estabilidad por concurso, carrera académica y tutela en comisiones paritarias con plus de Zona Patagónica."
      },
      {
        "norma": "Estatuto General de la UNCo (Ord. 470/93)",
        "descripcion": "Régimen del co-gobierno cuatripartito (Docentes, Nodocentes, Estudiantes, Graduados) y competencias del Consejo Directivo y Decanato."
      },
      {
        "norma": "Resolución CD-CURZA N° 196/2022",
        "descripcion": "Reglamenta las mediaciones tecnológicas, la presencialidad remota sincrónica y el soporte tutorial en la Red de 10 Nodos Territoriales."
      }
    ],
    "nodosTerritoriales": [
      {
        "sede": "Sede Cabecera: Viedma",
        "detalle": "Capital provincial y asiento del Decanato, Secretarías, Consejo Directivo y soporte central administrativo del CURZAS."
      },
      {
        "sede": "Nodo San Antonio Oeste (Zona Atlántica)",
        "detalle": "Vinculación con el sector pesquero, portuario y turístico; oferta formativa territorializada."
      },
      {
        "sede": "Nodo Sierra Grande (Costa Atlántica Sur)",
        "detalle": "Polo productivo minero e industrial en reactivación; aula híbrida con soporte tecnológico."
      },
      {
        "sede": "Nodo General Conesa (Valle Inferior)",
        "detalle": "Nexo logístico y agropecuario sobre el Río Negro; articulación con cooperativas locales."
      },
      {
        "sede": "Nodo Río Colorado (Valle Norte)",
        "detalle": "Portal norte de la provincia; articulación en carreras de ciclo y articulación universitaria."
      },
      {
        "sede": "Nodo Valcheta (Portal de la Línea Sur)",
        "detalle": "Puerta de entrada a la estepa rionegrina; proyecto extensionista 'Nodos en Red' con pequeños productores."
      },
      {
        "sede": "Nodo Ramos Mexía (Meseta de Somuncura)",
        "detalle": "Comunidad de la estepa profunda a más de 400 km de Viedma; cursadas virtuales sincrónicas."
      },
      {
        "sede": "Nodo Sierra Colorada (Centro Geográfico)",
        "detalle": "Corazón geográfico de Río Negro; nodo administrativo de enlace y punto de encuentro comarcal."
      },
      {
        "sede": "Nodo Los Menucos (Región Sur Central)",
        "detalle": "Cabecera logística de la estepa central; centro neurálgico para cursadas híbridas de la Meseta."
      },
      {
        "sede": "Nodo Ingeniero Jacobacci (Línea Sur Andina)",
        "detalle": "Extremo sudoeste de la Línea Sur; nodo universitario histórico junto a la traza ferroviaria."
      }
    ],
    "faq": [
      {
        "pregunta": "¿El CURZAS funciona como un 'Estado Plataforma' interoperable o persisten silos informáticos?",
        "respuesta": "Persiste un modelo de sistemas aislados de información. Si bien la UNCo ha consolidado la digitalización interna con SIU (Guaraní, Mapuche, Diaguita) y SUDOCU, no existen pasarelas API automatizadas en tiempo real con CONICET (SIGEVA) ni con INTA, forzando a los investigadores a duplicar tareas manualmente."
      },
      {
        "pregunta": "¿Cómo quiebran las Secretarías de Extensión y Ciencia y Técnica la rigidez departamental?",
        "respuesta": "Operan como adhocracias matriciales y 'puentes de poligobernanza'. Mientras los departamentos disciplinares tienen tiempos deliberativos prolongados, las Secretarías articulan tramados ad hoc con municipios y productores mediante los 10 nodos regionales (como el proyecto 'Nodos en Red')."
      },
      {
        "pregunta": "¿Por qué el modelo de Planificación Normativa resulta insuficiente según Carlos Matus?",
        "respuesta": "Porque asume falsamente que el planificador tiene el monopolio del poder y la certeza del entorno. En el CURZAS el poder está compartido democráticamente con gremios (APUNC/ADUNC), estudiantes y autoridades. La PES demuestra que cualquier proyecto técnico debe construir viabilidad política paritaria."
      },
      {
        "pregunta": "¿Cuál es el diagnóstico de las Capacidades Estatales del CURZAS según Bertranou?",
        "respuesta": "Presenta una Capacidad Político-Relacional Alta (resolución democrática en co-gobierno), una Capacidad Administrativa-Organizacional Media-Alta (apego estricto a la legalidad y trámites) y una Capacidad Técnico-Analítica Media (alta especialización académica pero con déficit en analítica de datos)."
      },
      {
        "pregunta": "¿Por qué el organigrama formal oficial invisibiliza a la red de 10 nodos territoriales?",
        "respuesta": "Porque la estructura formal de jure responde a ordenanzas históricas centralizadas en Viedma. En la práctica real de facto, la red de 10 nodos funciona mediante convenios con intendencias, mediaciones tecnológicas y Asistentes Pedagógicos, operando como la mayor fuerza democratizadora de la institución sin tener reflejo en el organigrama formal."
      },
      {
        "pregunta": "¿Cuál es el cuello de botella más crítico detectado en el circuito de licencias y el expediente digital?",
        "respuesta": "La desconexión entre el gestor documental SUDOCU y el sistema de liquidación de sueldos SIU-Mapuche. Cuando una licencia es aprobada digitalmente, no impacta automáticamente, requiriendo que un operador cargue los datos a mano en Mapuche. Además, el escaneo de certificados en papel actúa como una falsa digitalización que ralentiza los tiempos administrativos."
      },
      {
        "pregunta": "¿Por qué el 90,2% del presupuesto del CURZAS se concentra en el Inciso 1 (Personal)?",
        "respuesta": "Lejos de ser una ineficiencia contable, responde a la naturaleza de la educación superior (donde el servicio público son las personas) y a dos factores estructurales: el plus de Zona Desfavorable Patagónica (40% por ley) y la distribución estamental (68% docentes y 32% nodocentes). Esto confirma con Makon y Schweinheim que el factor humano es la auténtica capacidad estatal del organismo."
      }
    ]
  },
  "slides": [
    {
      "id": "slide_1",
      "numero": 1,
      "bloque": "APERTURA INSTITUCIONAL",
      "esquema": "Presentación y Quiénes Somos",
      "badge": "QUIÉNES SOMOS • CURZAS",
      "titulo": "Informe Integral de Planeamiento y Gestión Organizacional",
      "subtitulo": "Diagnóstico Situado, Estructura Burocrática, Poligobernanza y Presupuesto en el CURZAS (UNCo)",
      "puntosClave": [
        "Expositor: Téc. Sup. en Recursos Humanos Héctor Daniel Ayarachi Fuentes (Ciclo de Licenciatura • Legajo N° 8252)",
        "Casa de Estudios: CURZAS — Centro Universitario Regional Zona Atlántica y Sur (UNCo • Sede Viedma)",
        "Espacio de Cátedra: Planeamiento y Control de las Organizaciones 2026 (Mgter. Susana Lopez • Lic. Carlos Jauge)",
        "Propósito de la Exposición: Defensa integral de los 4 Avances del Diagnóstico Situado Institucional"
      ],
      "metadatosFooter": "Carátula Oficial y Presentación del Estudiante • Cátedra Planeamiento y Control 2026 • Viedma",
      "escena3D": "anim_01",
      "guionOrador": "Muy buenos días, estimada profesora Mgter. Susana Lopez y estimado profesor Lic. Carlos Jauge. Mi nombre es Héctor Daniel Ayarachi Fuentes, soy Técnico Superior en Recursos Humanos y cursante de la Licenciatura aquí en el CURZAS. Hoy tengo el honor de presentarles la defensa integral de nuestro trabajo de cátedra, estructurado en 4 Avances. Nuestro objetivo fue analizar al CURZAS no como una teoría lejana, sino como una organización viva, patagónica y desafiante, examinando su modelo de gestión, su red territorial, sus procesos cotidianos y sus números presupuestarios."
    },
    {
      "id": "slide_2",
      "numero": 2,
      "bloque": "HOJA DE RUTA EJECUTIVA",
      "esquema": "Panorama Global de los 4 Avances",
      "badge": "RESUMEN DE LOS 4 AVANCES",
      "titulo": "Los 4 Avances de Gestión: Diagnóstico Integral del CURZAS",
      "subtitulo": "Lo Más Destacado y Revelador que Detectamos en Cada Etapa del Análisis",
      "puntosClave": [
        "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
        "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Red viva en 10 nodos provinciales, superando silos de datos con CONICET/INTA mediante concertación política situada (Matus).",
        "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): El organigrama formal invisibiliza a los nodos; mapeamos el circuito de licencias y el choque entre digital y carga manual.",
        "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal."
      ],
      "metadatosFooter": "Hoja de Ruta Ejecutiva • Resumen Somero de los 4 Avances • CURZAS - UNCo",
      "escena3D": "anim_02",
      "guionOrador": "Para ser rápidos y ordenados, resumimos en esta filmina los 4 hitos centrales del informe. En el Avance 1 descubrimos una burocracia profesional que cuida la legalidad y la estabilidad laboral. En el Avance 2 conectamos al CURZAS con el territorio mediante la poligobernanza y la planificación de Matus. En el Avance 3 desarmamos el organigrama y detectamos cuellos de botella críticos entre el expediente digital y los sistemas de personal. Y en el Avance 4 pusimos la lupa sobre las cuentas: el 90,2% del presupuesto se destina a salarios, confirmando que las personas no son un gasto, sino el servicio público en sí mismo."
    },
    {
      "id": "slide_3",
      "numero": 3,
      "bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
      "esquema": "Marco Institucional y Vocación",
      "badge": "UNIDAD I • IDENTIFICACIÓN",
      "titulo": "El CURZAS en el Sistema Universitario: Misión y Despliegue",
      "subtitulo": "Unidad Académica Descentralizada con Arraigo Histórico en la Patagonia Norte",
      "puntosClave": [
        "Identidad Institucional: Asiento central en Viedma (capital rionegrina) con influencia sobre la Costa Atlántica y la extensa Línea Sur.",
        "Misión Democratizadora: Llevar educación superior pública, gratuita y de calidad a comunidades aisladas y de baja densidad demográfica.",
        "Marco Autonómico Consagrado: Amparada por el Art. 75 inc. 19 de la Constitución Nacional y la Ley de Educación Superior N° 24.521.",
        "Co-Gobierno Cuatripartito: Conducción democrática colegiada integrada por docentes, nodocentes, estudiantes y graduados."
      ],
      "metadatosFooter": "Avance 1 • Identificación Organizacional y Marco Normativo • CURZAS - UNCo",
      "escena3D": "anim_03",
      "guionOrador": "Iniciamos el desarrollo del Avance 1. El CURZAS es una casa de altos estudios muy singular dentro de la UNCo. Desde Viedma proyecta su labor hacia parajes y ciudades donde antes estudiar una carrera de grado era casi imposible. Esta labor no depende del humor del gobierno de turno: está blindada por la autonomía universitaria consagrada en la Constitución Nacional y por un co-gobierno democrático donde participan todos los claustros."
    },
    {
      "id": "slide_4",
      "numero": 4,
      "bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
      "esquema": "Burocracia Weberiana Profesional",
      "badge": "UNIDAD I • MODELO DE GESTIÓN",
      "titulo": "Matriz Administrativa: Burocracia Profesional y Legalidad",
      "subtitulo": "Procedimentalismo Normativo, Concursos Públicos y Tutela Paritaria",
      "puntosClave": [
        "Apego al Principio de Legalidad: Todo trámite requiere expediente formal foliado, fundamentación reglamentaria y dictamen jurídico.",
        "Estabilidad y Carrera Administrativa: Empleo regido por el CCT Nodocente (Dec. 366/06) y CCT Docente (Dec. 1246/15) que blindan contra el clientelismo.",
        "Base Profesional Especializada: Fuerte autonomía pedagógica y científica conviviendo con procedimientos administrativos estandarizados.",
        "Fortaleza Institucional: Las reglas claras garantizan igualdad de trato, transparencia y neutralidad operativa en el empleo público."
      ],
      "metadatosFooter": "Avance 1 • Burocracia Tradicional de Base Profesional • Weber / Abal Medina",
      "escena3D": "anim_04",
      "guionOrador": "Al preguntarnos qué modelo administrativo rige al CURZAS, la respuesta es clara: una Burocracia Profesional Weberiana. Lejos de ser un defecto, la burocracia aquí es garantía de justicia y transparencia. Cada acto tiene respaldo jurídico y tanto docentes como nodocentes gozan de estabilidad garantizada por convenios colectivos nacionales, lo que evita despidos discrecionales o persecuciones políticas."
    },
    {
      "id": "slide_5",
      "numero": 5,
      "bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
      "esquema": "Autonomía vs. Gerencialismo NGP",
      "badge": "UNIDAD I • AUTONOMÍA VS NGP",
      "titulo": "Autonomía Universitaria frente al Gerencialismo de la NGP",
      "subtitulo": "La Universidad como Bien Público Social frente a las Lógicas de Mercado",
      "puntosClave": [
        "Distinción Esencial: La autonomía universitaria es un escudo democrático de libertad nacido en 1918, no una desregulación de mercado.",
        "Crítica a la NGP: La Nueva Gestión Pública divide al Estado en agencias que compiten y tratan al alumno como usuario o cliente.",
        "Inexistencia de Lógicas Mercantiles: En el CURZAS no hay vouchers educativos, aranceles ni contratos por productividad individual.",
        "Uso Instrumental: La NGP solo influyó en la adopción técnica de plataformas informáticas (ecosistema SIU), sin alterar la vocación pública."
      ],
      "metadatosFooter": "Avance 1 • Análisis Crítico de Modelos de Gestión • Cao & Blutman (2019)",
      "escena3D": "anim_05",
      "guionOrador": "Un debate doctrinario indispensable fue separar la autonomía de la descentralización que pregonaba la Nueva Gestión Pública. La NGP intentó transformar la educación en una mercancía con vouchers y alumnos tratados como clientes. En el CURZAS sostenemos que la educación superior es un bien público y un derecho; por eso la autonomía es resguardo democrático y no gerencialismo de mercado."
    },
    {
      "id": "slide_6",
      "numero": 6,
      "bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
      "esquema": "Rendición de Cuentas y Co-Gobierno",
      "badge": "UNIDAD I • CONTROL Y GOBERNANZA",
      "titulo": "Rendición de Cuentas y la Paradoja del Co-Gobierno",
      "subtitulo": "Controles Republicano, Electoral y Social frente al Riesgo de Endogamia",
      "puntosClave": [
        "Triangulación de Controles (O'Donnell): Control Horizontal (UAI y AGN), Vertical (elecciones de claustros) y Social (boletines abiertos).",
        "Soberanía Colegiada: Las autoridades ejecutivas unipersonales (Decanato) no pueden comprometer fondos sin aval del Consejo Directivo.",
        "La Paradoja del Co-Gobierno: El órgano soberano deliberativo corre el riesgo de volverse endogámico si se encierra en disputas corporativas.",
        "Gobernanza Inteligente (Oszlak): Nivel de madurez tecnológica medio; incipiente aplicación de inteligencia de datos en recursos humanos."
      ],
      "metadatosFooter": "Avance 1 • Mecanismos de Rendición de Cuentas y Co-Gobierno • O'Donnell",
      "escena3D": "anim_06",
      "guionOrador": "El control institucional en el CURZAS se despliega en tres planos: horizontal con auditorías de la AGN y la UAI; vertical mediante elecciones periódicas; y social publicando actos de gobierno. Sin embargo, advertimos una paradoja: el co-gobierno democrático puede volverse endogámico si se distrae en disputas de poder interno y pierde contacto con la sociedad que lo financia."
    },
    {
      "id": "slide_7",
      "numero": 7,
      "bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)",
      "esquema": "Mapeo Territorial y Nodos de Río Negro",
      "badge": "MAPA TERRITORIAL 3D",
      "titulo": "Mapeo Territorial y Nodos Regionales de Río Negro",
      "subtitulo": "Presencia Descentralizada del CURZAS en la Costa Atlántica y la Línea Sur",
      "puntosClave": [
        "Traza Troncal: Sede Viedma y 10 nodos en SAO, Sierra Grande, Conesa, Río Colorado, Valcheta, Ramos Mexía, Sierra Colorada, Los Menucos y Jacobacci.",
        "Alianzas Municipales: Convenios con intendencias locales que aportan infraestructura física y conectividad para las aulas híbridas.",
        "Figura del Asistente Técnico-Pedagógico: Enlace humano clave en cada nodo para acompañar a los estudiantes en territorio.",
        "Herramienta Cartográfica Interactiva: Maqueta 3D y lámina vectorial con modelado físico de los 13 departamentos rionegrinos."
      ],
      "metadatosFooter": "Figura 1: Mapeo de Nodos Regionales de Río Negro • CURZAS - UNCo",
      "escena3D": "anim_07",
      "diagramaSVG": "assets/red-territorial-nodos.svg",
      "maqueta3D": "prueba_rionegro_3d.html",
      "guionOrador": "Como pueden ver en nuestra maqueta interactiva 3D, el CURZAS supera el aislamiento geográfico desplegando 10 nodos por la Línea Sur y la Costa. Gracias a convenios con municipios y al trabajo de los Asistentes Técnico-Pedagógicos, un estudiante de Ramos Mexía o Los Menucos puede cursar su carrera universitaria con soporte virtual sincrónico sin tener que abandonar su familia ni su pueblo."
    },
    {
      "id": "slide_8",
      "numero": 8,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Redes Territoriales Complejas",
      "badge": "UNIDAD II • POLIGOBERNANZA",
      "titulo": "Paradigma de la Poligobernanza: Redes frente a la Jerarquía",
      "subtitulo": "Superación de la Pirámide Tradicional ante Problemas Públicos Complejos (Cao & Blutman)",
      "puntosClave": [
        "Marco Conceptual: Las demandas territoriales superan la capacidad de respuesta de una burocracia aislada (Horacio Cao y Gustavo Blutman).",
        "Co-Producción de Valor Público: El Estado y la universidad actúan como articuladores en redes horizontales con municipios, cooperativas y empresas.",
        "Enfoque de Abajo hacia Arriba (Bottom-Up): Las soluciones se construyen desde la realidad situada de la estepa y los valles.",
        "Superación de la Endogamia: Las demandas vivas del territorio salvan al CURZAS del riesgo de aislamiento institucional."
      ],
      "metadatosFooter": "Avance 2 • Teoría de la Poligobernanza • Horacio Cao & Gustavo Blutman",
      "escena3D": "anim_08",
      "diagramaSVG": "assets/subsistemas_longo.svg",
      "guionOrador": "Pasamos al Avance 2 incorporando la Poligobernanza de Horacio Cao y Gustavo Blutman. En la Patagonia, problemas como la desertificación o la falta de conectividad desbordan a cualquier burocracia cerrada. La universidad no puede pretender dirigir todo desde arriba: debe actuar como nodo facilitador en redes colaborativas donde el saber académico dialoga con el saber comunitario."
    },
    {
      "id": "slide_9",
      "numero": 9,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Estado Plataforma e Interoperabilidad",
      "badge": "UNIDAD II • ESTADO PLATAFORMA",
      "titulo": "Desafío 1: El Estado Plataforma frente a los Silos de Datos",
      "subtitulo": "El Principio de 'Una Sola Vez' y la Falta de Pasarelas API con CONICET e INTA",
      "puntosClave": [
        "Estado Plataforma (Oszlak, 2020): La administración como ecosistema digital interoperable que comparte datos mediante pasarelas seguras (APIs).",
        "Principio 'Una Sola Vez' (Once-Only): Ningún docente o ciudadano debería presentar un dato que el Estado ya tiene registrado.",
        "Hallazgo Empírico en CURZAS: Persistencia de 'silos informáticos'; los investigadores con doble pertenencia cargan sus datos por duplicado en SIU y SIGEVA.",
        "Costo de Transacción: Pérdida de horas de trabajo calificado en tareas manuales repetitivas que la tecnología actual resuelve con facilidad."
      ],
      "metadatosFooter": "Avance 2 • Eje 1: Interoperabilidad de Sistemas • Oscar Oszlak",
      "escena3D": "anim_09",
      "guionOrador": "El primer desafío del Avance 2 es el Estado Plataforma. Oscar Oszlak plantea que el Estado debe compartir datos automáticamente para que nadie cargue dos veces la misma información. En el CURZAS demostramos que esto aún no se cumple: un docente que investiga en CONICET o INTA tiene que cargar a mano sus antecedentes dos o tres veces porque las plataformas no están comunicadas."
    },
    {
      "id": "slide_10",
      "numero": 10,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Tramados Ad Hoc y Adhocracias",
      "badge": "UNIDAD II • ADHOCRACIAS",
      "titulo": "Desafío 2: Tramados Ad Hoc frente a la Rigidez Burocrática",
      "subtitulo": "Secretarías de Extensión y CyT como Estructuras Matriciales Dinámicas (Hintze)",
      "puntosClave": [
        "Tramados Institucionales Ad Hoc (Cao & Blutman): Dispositivos organizacionales flexibles y transitorios armados para metas específicas.",
        "Estructuras Matriciales (Jorge Hintze): Trabajo por proyectos interdisciplinarios sin necesidad de alterar la estructura formal permanente.",
        "Evidencia Territorial: Las Secretarías de Extensión y CyT del CURZAS articulan con el DPA, INTA y comisiones de fomento (Proyecto 'Nodos en Red').",
        "Puentes de Poligobernanza: Estas áreas dinámicas oxigenan la agenda universitaria y vinculan la docencia con las necesidades productivas."
      ],
      "metadatosFooter": "Avance 2 • Eje 2: Flexibilidad Matricial y Proyectos • Jorge Hintze",
      "escena3D": "anim_10",
      "guionOrador": "El segundo desafío trata sobre los tramados ad hoc. Como los departamentos académicos tradicionales son lentos para armar respuestas inmediatas, las Secretarías de Extensión y de Ciencia y Técnica funcionan como estructuras matriciales ágiles. El proyecto 'Nodos en Red' en Valcheta y Conesa probó que es posible articular saberes rápidamente para apoyar a productores locales sin perderse en laberintos burocráticos."
    },
    {
      "id": "slide_11",
      "numero": 11,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Planificación Situacional de Matus",
      "badge": "UNIDAD II • PES MATUS",
      "titulo": "De la Planificación Normativa a la Situacional (PES)",
      "subtitulo": "Los Cuatro Momentos de Matus y la Viabilidad Política en Arenas de Poder Compartido",
      "puntosClave": [
        "Fracaso del Modelo Normativo: Quien planifica no tiene el monopolio de la realidad ni un sistema cerrado; convive con otros actores que también juegan.",
        "Los 4 Momentos de Matus: Momento Explicativo (diagnóstico), Normativo (lo que debe ser), Estratégico (construcción de viabilidad) y Táctico (acción).",
        "Viabilidad Técnica vs Política: Un plan técnicamente brillante fracasa si no construye consensos políticos con los gremios y la comunidad.",
        "Aplicación en CURZAS: Los planes de modernización requieren necesariamente de concertación paritaria docente y nodocente."
      ],
      "metadatosFooter": "Avance 2 • Planificación Estratégica Situacional • Carlos Matus",
      "escena3D": "anim_11",
      "guionOrador": "En el Eje 3 adoptamos la Planificación Estratégica Situacional de Carlos Matus. La planificación clásica cree que el futuro se decreta con un plan rígido. Matus nos enseña que en una universidad el poder está compartido entre decanos, directores, gremios y estudiantes: planificar es un juego social de cálculo interactivo donde la viabilidad política de los trabajadores es condición indispensable del éxito."
    },
    {
      "id": "slide_12",
      "numero": 12,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Matriz FODA Situada",
      "badge": "UNIDAD II • MATRIZ FODA",
      "titulo": "Matriz FODA Situada en el Contexto del CURZAS",
      "subtitulo": "Diagnóstico Realista entre Fortalezas Territoriales y Amenazas del Entorno",
      "puntosClave": [
        "Fortalezas: Red consolidada de 10 nodos, estabilidad por convenios colectivos, legitimidad democrática y ecosistema SIU/SUDOCU.",
        "Debilidades: Silos informáticos, sobrecarga administrativa en Viedma y disparidad de competencias digitales avanzadas.",
        "Oportunidades: Alta demanda de formación superior en la provincia y alianzas estratégicas con municipios y comisiones de fomento.",
        "Amenazas: Congelamiento presupuestario nacional, pérdida del poder adquisitivo de salarios y brecha de conectividad en la estepa."
      ],
      "metadatosFooter": "Avance 2 • Matriz FODA Situada del CURZAS • Relevamiento Empírico 2026",
      "escena3D": "anim_12",
      "guionOrador": "Construimos una Matriz FODA situada que refleja fielmente la coyuntura del CURZAS. En el frente interno, la gran fortaleza de los 10 nodos y la democracia convive con la debilidad de la sobrecarga de tareas. Y en el frente externo, las enormes ganas de estudiar de la comunidad patagónica chocan contra la amenaza del congelamiento presupuestario nacional."
    },
    {
      "id": "slide_13",
      "numero": 13,
      "bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)",
      "esquema": "Stakeholders y Capacidades Estatales",
      "badge": "UNIDAD II • CAPACIDADES",
      "titulo": "Mapeo de Actores y Capacidades Estatales según Bertranou",
      "subtitulo": "Evaluación en Tres Dimensiones: Político-Relacional, Administrativa y Técnico-Analítica",
      "puntosClave": [
        "Mapeo de Fuerzas: Gremios APUNC (nodocente) y ADUNC (docente) con alto poder e interés en la mesa paritaria; municipios como aliados territoriales.",
        "Capacidad Político-Relacional (ALTA): Destacada aptitud para procesar conflictos y alcanzar consensos democráticos y territoriales.",
        "Capacidad Administrativa-Organizacional (MEDIA-ALTA): Solvencia en procedimientos reglados, con rigidez para rediseños ágiles.",
        "Capacidad Técnico-Analítica (MEDIA): Alto saber académico disciplinar, pero con necesidad urgente de capacitación en analítica y gestión de datos."
      ],
      "metadatosFooter": "Avance 2 • Evaluación de Capacidades Estatales • Julián Bertranou (2015)",
      "escena3D": "anim_13",
      "guionOrador": "Completamos el Avance 2 mapeando a los actores clave y midiendo capacidades con Julián Bertranou. La capacidad político-relacional del CURZAS es Alta gracias al co-gobierno y los acuerdos paritarios; la administrativa es Media-Alta en el manejo de rutinas; pero la técnico-analítica es Media, porque aún falta capacitar al personal en analítica de datos e inteligencia aplicada a la gestión."
    },
    {
      "id": "slide_14",
      "numero": 14,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Organigrama Formal vs Real",
      "badge": "UNIDAD III • ORGANIGRAMA",
      "titulo": "Organigrama: Estructura Formal vs Estructura Real",
      "subtitulo": "La Invisibilidad Orgánica de los 10 Nodos y las Respuestas Operativas de Emergencia",
      "puntosClave": [
        "Estructura Formal (De Jure): Organigrama formal en 5 niveles (Consejo Directivo, Decanato, Secretarías, Departamentos y Direcciones).",
        "La Gran Discrepancia Detectada: Los 10 Nodos Territoriales no figuran como áreas ni direcciones en el organigrama formal oficial.",
        "Estructura Real (De Facto): Red viva de nodos sostenida por convenios, mediaciones tecnológicas y Asistentes Pedagógicos en territorio.",
        "Comisiones Ad Hoc: Grupos de trabajo transitorios que funcionan como válvulas de escape ante la lentitud de los departamentos tradicionales."
      ],
      "metadatosFooter": "Avance 3 • Organigrama Formal e Invisibilidad Territorial • CURZAS - UNCo",
      "escena3D": "anim_14",
      "guionOrador": "En el Avance 3 analizamos la estructura interna del CURZAS. Al contrastar el organigrama formal con la práctica cotidiana saltó a la vista un dato sorprendente: los 10 nodos territoriales no figuran formalmente en el organigrama oficial aprobado. La mayor expansión democratizadora de la universidad funciona 'de hecho', apoyada en convenios y en el esfuerzo diario de sus trabajadores."
    },
    {
      "id": "slide_15",
      "numero": 15,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Niveles de Gestión del Personal",
      "badge": "UNIDAD III • NIVELES DE GESTIÓN",
      "titulo": "Centralización y Desconcentración en la Gestión del Personal",
      "subtitulo": "Dependencia Normativa de Sede Central (Neuquén) y Ejecución Operativa en Viedma",
      "puntosClave": [
        "Centralización Normativa y Tecnológica: El Rectorado y Consejo Superior en Neuquén fijan políticas marco, pasarelas SIU y convenios generales.",
        "Desconcentración Operativa en CURZAS: La Dirección de Personal en Viedma liquida sueldos locales, tramita legajos y gestiona novedades.",
        "Tensión Centro-Periferia: Más de 1.000 km entre Neuquén y Viedma; demoras en homologaciones y autorizaciones de pauta salarial.",
        "Autonomía de Gestión Territorial: El CURZAS resuelve localmente los concursos y licencias del personal docente y nodocente."
      ],
      "metadatosFooter": "Avance 3 • Niveles de Centralización y Descentralización • Zeller e Impala",
      "escena3D": "anim_15",
      "guionOrador": "Examinamos cómo se distribuyen las decisiones entre Neuquén y Viedma. Existe una centralización normativa en el Rectorado para políticas generales y servidores centrales, pero la ejecución operativa está desconcentrada en el CURZAS. La Dirección de Personal de Viedma atiende el día a día a 1.000 kilómetros de distancia, absorbiendo una enorme carga administrativa."
    },
    {
      "id": "slide_16",
      "numero": 16,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Flujograma del Circuito de Licencias",
      "badge": "UNIDAD III • FLUJOGRAMA",
      "titulo": "Flujograma del Circuito Clave: Trámite de Licencias",
      "subtitulo": "Diagramación Algorítmica, Etapas Operativas y Responsables (CCT 366/06 y 1246/15)",
      "puntosClave": [
        "Proceso Crítico Seleccionado: Circuito integral de licencias médicas, por maternidad y razones particulares del personal.",
        "Etapa 1: Solicitud inicial y acreditación médica mediante certificado (docente/nodocente).",
        "Etapa 2: Intervención de Junta Médica / Reconocimientos Médicos y visado de la Dirección de Personal.",
        "Etapa 3 y 4: Dictamen jurídico, acto resolutivo del Decanato y registro formal en el sistema SIU-Mapuche."
      ],
      "metadatosFooter": "Avance 3 • Diagramación Algorítmica de Procesos • Circuito de Personal",
      "escena3D": "anim_16",
      "guionOrador": "Mapeamos el circuito de licencias del personal, un proceso vital para la continuidad del servicio educativo. Diagramamos sus 4 pasos: desde que el agente presenta el certificado, pasando por la junta médica y la Dirección de Personal, hasta el dictado de la resolución por Decanato y su posterior impacto en el sistema de haberes."
    },
    {
      "id": "slide_17",
      "numero": 17,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Cuellos de Botella Digitales",
      "badge": "UNIDAD III • DIGITALIZACIÓN",
      "titulo": "La Transición al Ecosistema Electrónico y sus Cuellos de Botella",
      "subtitulo": "Del Expediente Físico a SUDOCU: La Paradoja de la Carga Manual Duplicada",
      "puntosClave": [
        "Avance Digital: Implementación de SUDOCU para despapelizar y agilizar la trazabilidad de expedientes en tiempo real.",
        "El Cuello de Botella Detectado: SUDOCU no se conecta automáticamente con SIU-Mapuche; un empleado debe cargar a mano la licencia en el sistema de sueldos.",
        "Falsa Digitalización: Docentes que escanean certificados en papel y suben fotos borrosas, obligando a verificaciones presenciales redundantes.",
        "Desafío de Conectividad: En los nodos de la estepa, los cortes de luz y fibra óptica retrasan la subida de documentación reglamentaria."
      ],
      "metadatosFooter": "Avance 3 • Cuellos de Botella Burocráticos en la Transición Digital • CURZAS",
      "escena3D": "anim_17",
      "guionOrador": "Aquí descubrimos un cuello de botella clave: el sistema de expedientes digitales SUDOCU fue un gran paso, pero no interoperabiliza con el SIU-Mapuche de sueldos. Cuando una licencia es aprobada digitalmente, un operador debe sentarse a cargarla otra vez a mano en Mapuche. Además, el simple escaneo de papeles no es verdadera digitalización: genera demoras y dobles chequeos."
    },
    {
      "id": "slide_18",
      "numero": 18,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Inercia y Salir del Paso",
      "badge": "UNIDAD III • TEORÍA ORGANIZACIONAL",
      "titulo": "Inercia Estructural y Racionalidad Limitada en la Universidad",
      "subtitulo": "Resistencias Culturales al Cambio y la Política de 'Salir del Paso' (John Forester)",
      "puntosClave": [
        "Inercia Estructural (Campos, Carro, Duran y Fernández): Las rutinas burocráticas arraigadas generan resistencia natural a abandonar el papel.",
        "Salir del Paso (Forester / Lindblom): Frente a la urgencia y la escasez de recursos, los operadores aplican parches provisionales en vez de rediseños de fondo.",
        "Miedo a la Pérdida de Control: Desconfianza hacia la firma electrónica frente al tradicional sello y firma con tinta azul.",
        "Brecha Etaria y de Capacitación: Dificultad para capacitar a agentes de más antigüedad sin acompañamiento técnico situado."
      ],
      "metadatosFooter": "Avance 3 • Inercia Estructural y Prácticas de Gestión • Campos / Forester",
      "escena3D": "anim_18",
      "guionOrador": "Los autores de la Unidad 3 explican por qué cuesta tanto modernizar: Campos habla de la 'inercia estructural', esa costumbre que hace que la gente prefiera el sello de goma al archivo digital. Y John Forester describe el hábito de 'salir del paso', donde la falta de tiempo obliga a emparchar problemas urgentes en lugar de rediseñar los procesos a fondo."
    },
    {
      "id": "slide_19",
      "numero": 19,
      "bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)",
      "esquema": "Propuestas de Rediseño",
      "badge": "UNIDAD III • REDISEÑO Y MEJORA",
      "titulo": "Propuestas de Mejora: Firma Digital, Interoperabilidad y Subrogancia",
      "subtitulo": "Soluciones Concretas para un Procedimiento Administrativo Ágil y Garantista",
      "puntosClave": [
        "Plena Validez Criptográfica: Adopción masiva de Firma Digital nativa (Ley 25.506) para eliminar el escaneo de papeles y sellos manuales.",
        "Interoperabilidad API SUDOCU → SIU-Mapuche: Carga automatizada de novedades de licencias autorizadas sin intervención humana repetitiva.",
        "Regulación de la Subrogancia: Mecanismo legal para que las licencias no queden frenadas si una autoridad de firma se encuentra ausente.",
        "Plan de Alfabetización Digital Situada: Talleres conjuntos con el gremio APUNC para nivelar competencias informáticas sin generar exclusión."
      ],
      "metadatosFooter": "Avance 3 • Propuestas Estratégicas de Rediseño • Firma Digital y Pasarelas API",
      "escena3D": "anim_19",
      "guionOrador": "Para superar estos cuellos de botella propusimos tres mejoras concretas: primero, implementar Firma Digital con plena validez legal para suprimir el papel; segundo, crear una pasarela informática automática entre SUDOCU y SIU-Mapuche; y tercero, fijar plazos automáticos de subrogancia para que ningún trámite quede trabado si una autoridad está de viaje."
    },
    {
      "id": "slide_20",
      "numero": 20,
      "bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
      "esquema": "Hegemonía del Inciso 1 (90,2%)",
      "badge": "UNIDAD IV • FINANZAS PÚBLICAS",
      "titulo": "Presupuesto Universitario y la Centralidad del Inciso 1",
      "subtitulo": "El 90,2% del Gasto Destinado a Sueldos: Diagnóstico de Rigidez y Misión Social",
      "puntosClave": [
        "Presupuesto Global UNCo 2025: $73.900 Millones asignados por el PEN (frente a $154.000 Millones solicitados por el Consejo Interuniversitario Nacional).",
        "Participación Histórica del CURZAS: $4.877 Millones (equivalente al 6,6% de la masa presupuestaria total de la universidad).",
        "Hegemonía del Inciso 1 (Personal): 90,2% ($4.401 Millones) destinado exclusivamente a salarios de la planta docente y nodocente.",
        "Gastos de Funcionamiento Mínimos: Solo un 9,8% ($475 Millones) disponible para luz, gas, limpieza, equipamiento y mantenimiento en 10 sedes."
      ],
      "metadatosFooter": "Avance 4 • Ejecución Presupuestaria Oficial y Concentración en Personal • CURZAS",
      "escena3D": "anim_20",
      "guionOrador": "En el Avance 4 abrimos los números presupuestarios. En 2025 el CURZAS administra cerca de $4.877 millones de pesos. El hallazgo más contundente es que el 90,2% de esos recursos se destina al Inciso 1, es decir, a pagar salarios de docentes y nodocentes. Nos queda menos de un 10% para afrontar tarifas de luz, gas, limpieza y viajes en toda la provincia."
    },
    {
      "id": "slide_21",
      "numero": 21,
      "bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
      "esquema": "Zona Desfavorable y Estamentos",
      "badge": "UNIDAD IV • MASA SALARIAL",
      "titulo": "Factores Estructurales: Zona Desfavorable (40%) y Planta",
      "subtitulo": "Por qué el Gasto en Personal es Mayor en la Patagonia y cómo se Distribuye",
      "puntosClave": [
        "El Plus de Zona Desfavorable (40%): Componente remunerativo fijado por ley nacional para compensar el costo de vida patagónico.",
        "Impacto Financiero Directo: De cada $100 pesos en salarios del CURZAS, $40 pesos corresponden al plus de zona geográfica obligatoria.",
        "Distribución por Claustros: El 68% de la masa salarial remunera a los docentes universitarios y el 32% al personal nodocente y técnico.",
        "Rigidez Presupuestaria Ineludible: Los salarios están protegidos por ley y convenios colectivos paritarios; no son variables de ajuste."
      ],
      "metadatosFooter": "Avance 4 • Composición Salarial y Plus de Zona Patagónica • CCT 366/06 y 1246/15",
      "escena3D": "anim_21",
      "guionOrador": "¿Por qué el gasto en personal es tan elevado? Principalmente por la Zona Desfavorable Patagónica, un suplemento del 40% fijado por ley que compensa el costo de vida del sur. Además, el 68% de esa masa salarial sostiene a los docentes que dan clases y el 32% al personal nodocente que mantiene abiertas las aulas y laboratorios."
    },
    {
      "id": "slide_22",
      "numero": 22,
      "bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
      "esquema": "Presupuesto por Programas (Makon)",
      "badge": "UNIDAD IV • TÉCNICA MAKON",
      "titulo": "Presupuesto por Programas: La Cadena Insumo-Producto",
      "subtitulo": "Aplicación de la Metodología de Marcos Makon en la Educación Superior",
      "puntosClave": [
        "Programa 26 Nacional: 'Desarrollo de la Educación Superior' como unidad programática rectora que canaliza las partidas universitarias.",
        "Subprogramas Sustantivos: Formación de Grado y Posgrado, Investigación Científica y Vinculación Tecnológica y Extensión.",
        "Cadena Insumo → Proceso → Producto: Los recursos financieros pagan horas docentes e insumos para producir graduados calificados y ciencia.",
        "El Producto Terminal Universitario: No se mide en rentabilidad económica, sino en profesionales formados y valor social para la región."
      ],
      "metadatosFooter": "Avance 4 • Presupuesto por Programas y Matriz Insumo-Producto • Marcos Makon",
      "escena3D": "anim_22",
      "guionOrador": "Evaluamos el presupuesto con la técnica de Presupuesto por Programas de Marcos Makon. Todo se encuadra en el Programa 26 nacional. Los insumos financieros financian horas cátedra y tecnología que se transforman en productos concretos: nuevos técnicos y licenciados graduados e investigaciones volcadas al desarrollo de Río Negro."
    },
    {
      "id": "slide_23",
      "numero": 23,
      "bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
      "esquema": "Ciclo Presupuestario y Sistemas SIU",
      "badge": "UNIDAD IV • SISTEMAS FINANCIEROS",
      "titulo": "El Ciclo Presupuestario y el Ecosistema Financiero Integrado",
      "subtitulo": "Interconexión entre SIU-Pilagá, SIU-Mapuche y e-SIDIF bajo la Ley 24.156",
      "puntosClave": [
        "Etapas del Ciclo (Schweinheim): Formulación del crédito por el CIN/SPU, aprobación parlamentaria, ejecución diaria y control de cierre.",
        "Ecosistema Integrado: SIU-Pilagá (gestión contable de compras y pagos) se conecta con SIU-Mapuche (nómina salarial y aportes).",
        "Enlace con el Tesoro Nacional: Traspaso a la plataforma e-SIDIF para habilitar las transferencias de la Cuenta Única del Tesoro.",
        "Control de Legalidad Financiera: Fiscalización permanente de la Unidad de Auditoría Interna (UAI) y la Auditoría General de la Nación (AGN)."
      ],
      "metadatosFooter": "Avance 4 • Sistemas Integrados de Administración Financiera • Ley 24.156",
      "escena3D": "anim_23",
      "guionOrador": "El recorrido de los fondos sigue el ciclo de la Ley 24.156 explicado por Guillermo Schweinheim. El presupuesto opera mediante sistemas informáticos cruzados: el SIU-Pilagá administra los fondos de funcionamiento, el SIU-Mapuche liquida los salarios y ambos se comunican con el e-SIDIF de Nación para recibir las partidas del Tesoro."
    },
    {
      "id": "slide_24",
      "numero": 24,
      "bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)",
      "esquema": "El Factor Humano como Capacidad",
      "badge": "UNIDAD IV • SÍNTESIS FINAL",
      "titulo": "El Factor Humano como la Auténtica Capacidad Estatal",
      "subtitulo": "Por qué en la Universidad Pública las Personas son el Servicio en Sí Mismo",
      "puntosClave": [
        "Tensión Ineludible: Planificar proyectos académicos ambiciosos en un contexto de restricción financiera extrema y congelamiento de partidas.",
        "Desmitificación del 'Gasto': En una fábrica los sueldos son un costo operativo; en el CURZAS el personal docente y nodocente es el servicio.",
        "La Verdadera Capacidad Estatal (Bertranou): Sin profesores que crucen la estepa ni nodocentes que sostengan los servidores, no hay universidad.",
        "Conclusión de la Unidad IV: La defensa del presupuesto universitario es la defensa de la capacidad misma del Estado para generar igualdad."
      ],
      "metadatosFooter": "Avance 4 • Síntesis Estratégica: Planificación, Presupuesto y Personas • CURZAS",
      "escena3D": "anim_24",
      "guionOrador": "Llegamos a la conclusión medular del Avance 4: en una fábrica los salarios pueden ser un costo, pero en la universidad pública las personas son el servicio mismo. Sin el docente que viaja a Los Menucos o el nodocente que abre la sede en Viedma, no existe el CURZAS. Por eso, el 90,2% en salarios demuestra que el factor humano es la auténtica capacidad estatal de la universidad."
    },
    {
      "id": "slide_25",
      "numero": 25,
      "bloque": "CIERRE: CONCLUSIONES INTEGRALES Y DEFENSA",
      "esquema": "Cierre Protocolar de la Defensa",
      "badge": "CONCLUSIÓN Y PREGUNTAS",
      "titulo": "Conclusiones Integrales, Agradecimiento y Apertura a Preguntas",
      "subtitulo": "Síntesis de los 4 Avances • Cátedra de Planeamiento y Control de las Organizaciones 2026",
      "puntosClave": [
        "Cierre del Ciclo: Articulación completa de los 4 Avances (Modelo institucional, Poligobernanza territorial, Estructura digital y Presupuesto humano).",
        "Reconocimiento a la Cátedra: Agradecimiento a los docentes Mgter. Susana Lopez y Lic. Carlos Jauge por su rigor metodológico y guía pedagógica.",
        "Compromiso Profesional: Aportar una mirada situada de recursos humanos que combine solidez técnica con vocación transformadora pública.",
        "Apertura a la Deliberación: Quedo a disposición de la cátedra para responder preguntas, profundizar puntos de análisis o debatir propuestas."
      ],
      "metadatosFooter": "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes • Ciclo Lectivo 2026 • CURZAS - UNCo",
      "escena3D": "anim_25",
      "guionOrador": "Para concluir, este trabajo nos demuestra que el CURZAS es una institución viva que desafía distancias y crisis presupuestarias gracias a su gente. Agradezco sinceramente a la profesora Susana Lopez y al profesor Carlos Jauge por sus valiosas devoluciones y exigencia académica. Quedo ahora a su entera disposición para responder preguntas y profundizar en los temas expuestos. Muchísimas gracias."
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

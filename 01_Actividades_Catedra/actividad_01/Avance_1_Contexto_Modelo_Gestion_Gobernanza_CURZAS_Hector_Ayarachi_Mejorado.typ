// ==============================================================================
// CONFIGURACIÓN GENERAL Y TIPOGRAFÍA INSTITUCIONAL
// ==============================================================================
#set document(
  title: "Informe Integral de Planeamiento Organizacional - CURZAS (UNCo)",
  author: "Héctor Daniel Ayarachi Fuentes"
)
#set text(font: "Segoe UI", size: 9.2pt, fill: rgb("#24292f"), lang: "es")
#set par(justify: true, leading: 0.65em)

// Paleta de Colores Institucional
#let primary = rgb("#0f2d59")       // Azul marino institucional profundo
#let accent = rgb("#c89632")        // Dorado elegante / Acento
#let text-main = rgb("#1f2937")     // Gris carbón para lectura descansada
#let text-muted = rgb("#6b7280")    // Gris suave para metadatos y subtítulos
#let bg-card = rgb("#f8fafc")       // Fondo neutro suave
#let border-subtle = rgb("#e2e8f0") // Bordes sutiles

// Componente: Fila de Metadatos con Separador Horizontal
#let meta-row(label, value) = [
  #grid(
    columns: (140pt, 1fr),
    align: (left + horizon, left + horizon),
    text(size: 9pt, weight: "bold", fill: primary)[#label],
    text(size: 9pt, fill: rgb("#323232"))[#value]
  )
  #v(3pt)
  #line(length: 100%, stroke: 0.4pt + border-subtle)
  #v(3pt)
]

// Componente: Banner de Sección / Avance con Integración al Índice
#let avance-banner(titulo, subtitulo) = [
  #v(4pt)
  #heading(level: 1, outlined: true, bookmarked: true)[#titulo]
  #block(
    width: 100%,
    fill: primary,
    inset: (x: 16pt, y: 10pt),
    radius: 4pt,
    [
      #grid(
        columns: (1fr, auto),
        align: (left + horizon, right + horizon),
        [
          #text(fill: white, weight: "bold", size: 11.5pt, tracking: 0.03em)[#titulo] \
          #if subtitulo != "" [
            #v(2pt)
            #text(fill: rgb("#e2e8f0"), size: 8.5pt, style: "italic")[#subtitulo]
          ]
        ],
        text(fill: accent, size: 9pt, weight: "bold")[UNCo — CURZAS]
      )
    ]
  )
  #v(8pt)
]

// Componente: Caja Destacada (Callout - Indivisible)
#let callout(title, body) = [
  #v(4pt)
  #block(
    width: 100%,
    breakable: false,
    fill: bg-card,
    stroke: (left: 3.5pt + primary, rest: 0.5pt + border-subtle),
    inset: (x: 11pt, y: 7.5pt),
    radius: (right: 4pt),
    [
      #text(weight: "bold", fill: primary, size: 8.2pt, tracking: 0.07em)[#upper(title)] \
      #v(2.5pt)
      #text(size: 8.9pt, fill: text-main)[#body]
    ]
  )
  #v(4pt)
]

// Estilos de Títulos y Jerarquía Visual
#show heading.where(level: 1): it => none // Oculto en el cuerpo porque se despliega en el banner estilizado

#show heading.where(level: 2): it => [
  #v(11pt)
  #box(rect(width: 3.5pt, height: 10.5pt, fill: accent, radius: 1pt))
  #h(5pt)
  #text(weight: "bold", size: 10.5pt, fill: primary)[#it.body]
  #v(4pt)
]

#show heading.where(level: 3): it => [
  #v(7pt)
  #text(weight: "bold", size: 9.3pt, fill: primary)[#it.body]
  #v(3pt)
]

// ==============================================================================
// 1. PORTADA INSTITUCIONAL FORMAL (LIMPIA Y SIN ÍNDICE EN PORTADA)
// ==============================================================================
#page(
  paper: "a4",
  margin: (x: 2.3cm, top: 2.4cm, bottom: 2.2cm),
  header: none,
  footer: none
)[
  // Encabezado Institucional con Logotipo Oficial
  #grid(
    columns: (1fr, auto),
    gutter: 16pt,
    align: (left + horizon, right + horizon),
    [
      #text(size: 13pt, weight: "bold", fill: primary, tracking: 0.04em)[UNIVERSIDAD NACIONAL DEL COMAHUE] \
      #v(3pt)
      #text(size: 9.5pt, weight: "semibold", fill: accent)[COMPLEJO UNIVERSITARIO REGIONAL ZONA ATLÁNTICA Y SUR (CURZAS)]
    ],
    image("/assets/img/CURZAS.png", height: 60pt)
  )
  
  #v(6pt)
  #line(length: 100%, stroke: 0.8pt + primary)
  #v(20pt)
  
  // Bloque de Título Principal Integrador
  #block(
    stroke: (left: 3.5pt + primary),
    inset: (left: 14pt, y: 5pt),
    [
      #text(size: 8.5pt, style: "italic", fill: rgb("#646464"), tracking: 0.05em)[CÁTEDRA DE PLANEAMIENTO Y CONTROL DE LAS ORGANIZACIONES] \
      #v(5pt)
      #text(size: 19pt, weight: "bold", fill: primary, hyphenate: false)[
        Informe Integral de Planeamiento y Gestión Organizacional
      ] \
      #v(5pt)
      #text(size: 12pt, fill: rgb("#285082"), weight: "medium")[
        Diagnóstico Institucional, Modelos de Gestión y Poligobernanza en el CURZAS (UNCo)
      ]
    ]
  )
  
  #v(24pt)
  
  // Tabla de Metadatos del Documento
  #meta-row("Estudiante:", "Héctor Daniel Ayarachi Fuentes")
  #meta-row("Equipo Docente:", "Mgter. Susana Lopez — Lic. Carlos Jauge")
  #meta-row("Carrera:", "Licenciatura en Recursos Humanos")
  #meta-row("Institución Analizada:", "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)")
  #meta-row("Sede Académica:", "Viedma, Provincia de Río Negro")
  #meta-row("Marco Teórico:", "Cao & Blutman, Aguilar Villanueva, Abal Medina, Oszlak, Hintze")
  #meta-row("Ciclo Lectivo:", "2026")
  
  #align(bottom + center)[
    #text(size: 8.5pt, fill: rgb("#969696"))[Viedma, Río Negro — República Argentina]
  ]
]

// ==============================================================================
// 2. CUERPO DEL INFORME (PAGINACIÓN VISIBLE DESDE PÁGINA 2)
// ==============================================================================
#counter(page).update(1)

#set page(
  paper: "a4",
  margin: (x: 2.3cm, top: 2.4cm, bottom: 2.4cm),
  header: [
    #grid(
      columns: (1fr, auto),
      align: (left + horizon, right + horizon),
      text(size: 8pt, fill: text-muted)[Planeamiento y Control de las Organizaciones | CURZAS],
      text(size: 8pt, fill: primary, weight: "bold")[UNCo — CURZAS]
    )
    #v(2pt)
    #line(length: 100%, stroke: 0.4pt + border-subtle)
  ],
  footer: [
    #line(length: 100%, stroke: 0.3pt + border-subtle)
    #v(3pt)
    #grid(
      columns: (1fr, auto, 1fr),
      align: (left + horizon, center + horizon, right + horizon),
      text(size: 8pt, fill: text-muted)[Héctor Daniel Ayarachi Fuentes],
      image("/assets/img/CURZAS.png", height: 13pt),
      text(size: 8pt, fill: text-muted)[
        #context [Página #counter(page).display("1") de #counter(page).final().at(0)]
      ]
    )
  ]
)

// ==============================================================================
// SECCIÓN: AVANCE 1
// ==============================================================================

#avance-banner(
  "AVANCE 1: Contexto, Modelo de Gestión y Gobernanza",
  "Caracterización Institucional, Modelo de Administración y Mecanismos de Control"
)

== 1. Identificación y Marco Institucional de la Organización

El objeto de estudio del presente trabajo es el *Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)*, unidad académica territorial dependiente de la *Universidad Nacional del Comahue (UNCo)*, con sede central en la ciudad de Viedma, Provincia de Río Negro. Su radio de influencia abarca la comarca Atlántica y se proyecta sobre la vasta geografía social y productiva de la Línea Sur rionegrina.

El estatus institucional del organismo se asienta en el principio de *autonomía académica e institucional y autarquía económico-financiera*, consagrado en el Artículo 75 inciso 19 de la Constitución Nacional Argentina y regulado por la Ley de Educación Superior N° 24.521. Su estructura y dinámica decisoria se rigen por el Estatuto General de la UNCo (Ordenanza N° 470/1993 y modificatorias), el cual consagra el principio del *co-gobierno democrático cuatripartito* (integrado por docentes, estudiantes, graduados y personal nodocente) como el órgano colegiado soberano para la definición de políticas académicas, normativas y de asignación de recursos.

#callout("Misión Institucional y Despliegue Territorial")[
  El CURZAS tiene como misión primordial la creación, formación y democratización del conocimiento científico, técnico y humanístico en el territorio norpatagónico. Su estructura formal articula departamentos académicos, secretarías sustantivas y de apoyo (Académica, de Investigación y Posgrado, de Extensión y de Administración) y órganos de gobierno colegiados (Consejo Directivo y Decanato).
]

== 2. Identificación del Modelo de Administración Predominante

Para caracterizar el modelo de administración del CURZAS, se coteja su realidad funcional con los paradigmas teóricos analizados por *Cao y Blutman (2019)* y *Abal Medina (2014)*, estableciendo una distinción conceptual rigurosa entre la matriz burocrática clásica, el régimen de autonomía universitaria y la Nueva Gestión Pública (NGP).

=== A. Rasgos de la Burocracia Tradicional Weberiana (Matriz Predominante)

El análisis institucional confirma la prevalencia estructural de una *Burocracia Profesional y Weberiana*:

- *Estructura Jerárquica y Centralizada:* Las líneas de autoridad, reporte y delegación de competencias administrativas se encuentran taxativamente fijadas por el organigrama estatutario (Decanato $arrow.r$ Secretarías $arrow.r$ Direcciones $arrow.r$ Departamentos y Divisiones).
- *Principio de Legalidad y Procedimentalismo Normativo:* Los actos administrativos carecen de validez sin el respaldo de resoluciones fundadas, expedientes foliados y dictámenes jurídicos previos, supeditando la discrecionalidad funcionarial al estricto cumplimiento reglamentario.
- *Estatuto del Empleo Público y Carrera Administrativa:* El trabajo docente y nodocente se encuentra regulado por Convenios Colectivos de Trabajo de alcance nacional (Decretos N° 366/06 y N° 1246/15). El régimen garantiza ingreso y promoción por concursos públicos de oposición y antecedentes, estabilidad laboral absoluta y un sistema escalafonario rígido que previene la arbitrariedad política.

=== B. Autonomía Universitaria frente a la Descentralización Gerencial de la NGP

Un aspecto analítico fundamental radica en no confundir la autonomía universitaria con las reformas gerencialistas de los años noventa. Como demuestran *Cao y Blutman (2019)*, la *Nueva Gestión Pública (NGP)* promueve la descentralización como una técnica de *desagregación funcional y fragmentación estructural*, cuyo objetivo es descomponer la administración central en agencias radiales o "unidades de negocios" autónomas que compitan internamente por recursos presupuestarios, orienten su accionar bajo una lógica mercantil y traten al ciudadano como un mero "cliente".

En contraste, la autonomía y la autarquía presupuestaria que ejerce el CURZAS a través de su Consejo Directivo responden a una *conquista histórica y constitucional preexistente* —arraigada en la Reforma Universitaria de 1918 y blindada por la Constitución Nacional— cuyo fin es constituir un *mecanismo político de resguardo democrático, pluralismo ideológico y libertad académica* frente al poder central del Estado. 

En el CURZAS no existen lógicas de mercado propias de la NGP: el financiamiento no se estructura sobre esquemas de *vouchers*, no existe arancelamiento de grado, los presupuestos no dependen de metas mercantiles de egreso ni se celebran contratos individuales de rendimiento por productividad corporativa.

=== C. Rasgos Instrumentales y Modernizadores de la NGP Presentes en la Gestión

La influencia de la NGP en el organismo no es doctrinaria sino *instrumental*, incorporando herramientas para optimizar la gestión pública:

- *Orientación al Usuario/Estudiante en Servicios Académicos:* Incorporación de plataformas de autogestión y ventanilla virtual mediante el ecosistema SIU (Guaraní para gestión académica, Mocoví para gestión presupuestaria de extensión, Wichi/Diaguita) y el sistema de gestión documental electrónica SUDOCU, simplificando trámites, firmas digitales y tiempos de resolución.
- *Evaluación de Calidad y Rendición por Estándares:* Procesos de autoevaluación institucional y acreditación periódica ante la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), incorporando parámetros de mejora continua y transparencia formativa.

#callout("Dictamen de la Matriz Organizacional")[
  *Conclusión:* El CURZAS se define como una *Burocracia Tradicional Weberiana de Base Profesional*, vertebrada por el autogobierno democrático y complementada con herramientas instrumentales de modernización digital.
]

== 3. Análisis de Mecanismos de Rendición de Cuentas (Accountability)

A partir de la conceptualización de Guillermo O'Donnell sistematizada por *Abal Medina (2014)*, la rendición de cuentas institucional en el CURZAS se despliega en tres dimensiones interconectadas:

#v(2pt)

#table(
  columns: (1.1fr, 2.3fr, 1.6fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.5pt + border-subtle,
  inset: (x: 7pt, y: 5.5pt),
  [#text(fill: white, weight: "bold", size: 8.2pt)[Dimensión]],
  [#text(fill: white, weight: "bold", size: 8.2pt)[Mecanismos Institucionales en CURZAS / UNCo]],
  [#text(fill: white, weight: "bold", size: 8.2pt)[Sustento Normativo / Evidencia]],
  
  [
    *Horizontal* \
    #text(size: 7.2pt, fill: text-muted)[(Control intraestatal e interorgánico)]
  ],
  [
    - Unidad de Auditoría Interna de la UNCo (UAI).
    - Control externo por la Auditoría General de la Nación (AGN) y SIGEN.
    - Contrapesos orgánicos: el Consejo Directivo fiscaliza, aprueba o rechaza la ejecución presupuestaria del Decanato.
  ],
  [
    - Ley 24.156 de Adm. Financiera.
    - Dictámenes de auditoría UAI/AGN.
    - Memoria Anual y Balance de Gestión.
  ],
  
  [
    *Vertical* \
    #text(size: 7.2pt, fill: text-muted)[(Control electoral y representativo)]
  ],
  [
    - Elecciones periódicas, directas y ponderadas para Decano/a y Vicedecano/a.
    - Renovación democrática de los representantes de los cuatro claustros (Docentes, Nodocentes, Estudiantes y Graduados) ante el Consejo Directivo.
  ],
  [
    - Estatuto General de la UNCo.
    - Resoluciones de Junta Electoral y padrones públicos transparentes.
  ],
  
  [
    *Social* \
    #text(size: 7.2pt, fill: text-muted)[(Transparencia y control ciudadano)]
  ],
  [
    - Portal Web de Transparencia Activa y Datos Abiertos.
    - Publicación obligatoria de compras, licitaciones y escalas salariales.
    - Tramitación pública de solicitudes ciudadanas de acceso a la información.
  ],
  [
    - Ley 27.275 de Acceso a la Información Pública.
    - Portal de Transparencia Abierta UNCo.
  ]
)

== 4. Gobernanza y Poligobernanza: La Paradoja del Co-Gobierno Universitario

El análisis de la conducción institucional exige articular los postulados de la *Gobernanza* desarrollados por *Luis Aguilar Villanueva (2006)* con la teoría de la *Poligobernanza y Gobernación Reticular* formulada por *Cao y Blutman (2019, 2021)*.

=== A. Gobernanza Reticular y Poligobernanza en el Marco Teórico

*Aguilar Villanueva (2006)* define la gobernanza como el *proceso de dirección social mediante el cual el gobierno y la sociedad civil interactúan de forma interdependiente*, superando la histórica "insuficiencia directiva del Estado en solitario". La gobernanza implica construir conjuntamente la *intencionalidad social* (los objetivos y valores colectivos) y la *capacidad social* (los recursos y arreglos organizativos para alcanzarlos), transitando desde el monopolio estatal jerárquico hacia sistemas de coordinación reticular y coproducción pública.

Por su parte, *Cao y Blutman (2019, 2021)* profundizan esta visión a través del concepto de *Poligobernanza*, concebida como un modelo de gobernación en red con lógica *bottom-up* (de abajo hacia arriba). Este paradigma propone transformar el Estado en un "Estado plataforma", articulando horizontalmente a organismos públicos con comunidades de práctica, movimientos sociales y organizaciones civiles para romper la inercia, la compartimentación en "silos" y el anquilosamiento normativo que caracteriza a las burocracias tradicionales.

=== B. Análisis Crítico: La Paradoja del Co-Gobierno Institucional

Al examinar la dinámica del CURZAS a la luz de estos conceptos, emerge una *paradoja institucional estructurante*:

1. *El Co-Gobierno como Dirección Social Compartida Interna:* La conformación estatutaria de los órganos colegiados del CURZAS (Consejo Directivo integrado democráticamente por docentes, graduados, estudiantes y nodocentes) representa una experiencia pionera de dirección social compartida incrustada en las entrañas del Estado público.
2. *El Riesgo del "Silo Corporativo Endogámico":* No obstante su virtud democrática interna, la práctica institucional corre el riesgo recurrente de replegarse en una dinámica autorreferencial. En términos de *Cao y Blutman*, las organizaciones burocráticas tienden a operar como "islas" o silos aislados dominados por intereses estamentales, donde las disputas claustrales internas y la reproducción burocrática absorben la energía política, desatendiendo las demandas emergentes del entorno socio-territorial.
3. *El Desafío de la Poligobernanza con la Línea Sur y la Comarca Atlántica:* Para que el co-gobierno trascienda el encapsulamiento burocrático y concrete una verdadera poligobernanza territorial, el CURZAS debe consolidar redes horizontales y proyectos de cocreación con los pequeños productores ganaderos, las cooperativas de trabajo, las comunidades originarias y los municipios de la Línea Sur rionegrina. En este esquema, la *Secretaría de Extensión y Transferencia* se erige como el canal institucional estratégico y la frontera viva donde se debate la superación de la endogamia universitaria.

== 5. Evaluación de Gobernanza Pública Inteligente (Según Oszlak)

A partir de las tesis de *Oscar Oszlak (2020)* sobre la transición del Gobierno Electrónico hacia el *Estado Inteligente* y la Gobernanza Algorítmica, se analizó la penetración de tecnologías disruptivas e Inteligencia Artificial en el organismo.

=== A. Diagnóstico de Madurez Tecnológica

El CURZAS ha consolidado una fase madura de *Gobierno Electrónico e Interoperabilidad Digital* mediante la adopción integral del ecosistema SIU (Guaraní, Mapuche, Diaguita, Mocoví) y el sistema de expedientes digitales SUDOCU. Esto garantiza trazabilidad, firma digital y celeridad procesal, reduciendo sustancialmente el soporte físico en papel.

=== B. Análisis de la Pregunta Guía: Algoritmos e Inteligencia Artificial en Recursos Humanos

#callout("Pregunta de Investigación Institucional")[
  _¿Cuenta el organismo con normativas vigentes sobre la incorporación de algoritmos o software predictivo en la selección o monitoreo de personal?_
]

*Resultados del Relevamiento Normativo y de Gestión:*

- *Inexistencia Absoluta de Algoritmos Predictivos:* En el CURZAS no existen normativas, proyectos piloto ni herramientas de software predictivo o Inteligencia Artificial destinadas a la selección, evaluación de desempeño o monitoreo disciplinario de los trabajadores.
- *Blindaje Paritario y Garantía de Control Humano:* La selección y promoción del personal se rige con exclusividad por jurados y comisiones paritarias integradas por personas humanas, garantizadas por los Convenios Colectivos de Trabajo (Decretos N° 366/06 y N° 1246/15). Existe un consenso institucional y sindical explícito que rechaza la delegación de decisiones laborales en sistemas algorítmicos automatizados.
- *Ubicación en la Escala de Oszlak:* La institución se encuentra plenamente inserta en la etapa de *digitalización de trámites y expedientes*, pero distante de la *Gobernanza Algorítmica y el Estado Inteligente*. Esta distancia no obedece a un mero rezago tecnológico, sino a un blindaje ético, político y gremial orientado a resguardar la transparencia, la imparcialidad y las garantías constitucionales del empleo público.

== 6. Conclusión Sintética del Avance 1

El análisis del CURZAS evidencia una organización pública donde converge una matriz burocrática-profesional weberiana garantista, un régimen de autonomía y co-gobierno democrático conquistado históricamente, e innovaciones tecnológicas orientadas a la modernización de servicios. El desafío estratégico central radica en proyectar su co-gobierno interno hacia redes horizontales de poligobernanza con el territorio de la Línea Sur y la Zona Atlántica rionegrina, preservando la primacía del control humano y paritario frente a los desafíos de la era algorítmica.

#pagebreak()

// ==============================================================================
// SECCIÓN: AVANCE 2 (CONEXIÓN CON LA POLIGOBERNANZA)
// ==============================================================================

#avance-banner(
  "AVANCE 2: Conexión con la Poligobernanza",
  "Estado Plataforma, Interoperabilidad y Tramados Institucionales Ad Hoc"
)

== 1. Introducción y Enfoque Teórico del Avance 2

Avanzando en la aplicación de los marcos contemporáneos sobre modernización y reforma estatal, el presente módulo profundiza la conexión del *CURZAS (UNCo)* con el paradigma de la *Poligobernanza* desarrollado por *Horacio Cao y Gustavo Blutman (2019, 2021)*, complementado con las contribuciones de *Luis F. Aguilar Villanueva (2006)*, *Oscar Oszlak (2020)* y *Jorge Hintze (2018)*. 

El análisis se estructura en torno a dos desafíos organizacionales críticos para la gestión pública universitaria en el territorio norpatagónico: la capacidad de operar bajo la lógica de un *"Estado Plataforma"* interoperable frente a los silos de información, y la conformación de *"Tramados institucionales ad hoc"* para brindar respuestas socio-productivas ágiles frente a la rigidez departamental tradicional.

== 2. Desafío 1: El "Estado Plataforma" e Interoperabilidad frente a los Silos de Información

#callout("Pregunta de Investigación Institucional")[
  _Si pensamos en el "Estado Plataforma" de Cao y Blutman: ¿El CURZAS funciona de manera interoperable compartiendo datos integrados con otros organismos públicos e institutos científicos (como el CONICET o el INTA), o persisten los sistemas aislados de información?_
]

=== A. Marco Conceptual: Del Estado Burocrático al Estado Plataforma

Según *Cao y Blutman (2019, 2021)*, el *Estado Plataforma* representa una superación radical del modelo burocrático cerrado. En lugar de operar como un conjunto de pirámides aisladas que monopolizan trámites y retienen datos en compartimentos estancos, la administración pública se concibe como un *ecosistema digital y sociotécnico articulador*. El Estado provee una infraestructura común, estándares de datos abiertos y arquitecturas de microservicios mediante interfaces de programación de aplicaciones (APIs), permitiendo que diversas áreas gubernamentales, institutos científicos y actores de la sociedad civil colaboren en la coproducción de valor público.

La piedra angular de este modelo es la *Interoperabilidad de Sistemas de Información (IOP)*. Como destacan los autores y ratifica *Oszlak (2020)*, la interoperabilidad no solo asegura la comunicación fluida y segura entre bases de datos heterogéneas, sino que viabiliza el principio de *"una sola vez"* (*once-only*), según el cual ningún ciudadano, productor o investigador debe entregar a una ventanilla estatal información que ya consta en otra dependencia pública.

=== B. Diagnóstico Empírico en el CURZAS: Silos Informáticos y Duplicación Operativa

Al contrastar este modelo con la realidad organizativa del CURZAS y su articulación con los organismos del sistema científico-técnico nacional (*CONICET* e *INTA*), el relevamiento confirma de manera contundente la *persistencia de sistemas aislados de información*:

1. *Silos Informáticos en la Suite de Gestión:* La UNCo opera centralmente con la suite SIU (Guaraní para gestión académica, Mocoví para presupuesto y extensión, Wichi/Diaguita y SUDOCU para expedientes digitales). A nivel de ciencia y tecnología, la Universidad gestiona sus propios registros, mientras que el CONICET exige la carga curricular y de producción en *SIGEVA / CVar* y el INTA maneja sus plataformas propias (*SIGA / SIGEP*).
2. *Persistencia del Trabajo Manual Duplicado:* Aunque el CONICET desarrolló en 2009 un *"módulo de interoperabilidad"* en SIGEVA para convenios específicos con determinadas universidades (como la UBA), *no existe una pasarela API automatizada e institucionalizada en tiempo real* entre las bases de datos de la UNCo y las de CONICET o INTA. Como consecuencia, los docentes-investigadores del CURZAS con doble pertenencia (en el Centro de Investigaciones y Transferencia *CIT Río Negro / CCT Patagonia Norte* o en proyectos radicados en la *Estación Experimental Agropecuaria INTA Valle Inferior*) deben ingresar manualmente sus datos curriculares, memorias de investigación y producciones científicas por duplicado o triplicado en cada sistema por separado.
3. *Duplicación de Relevamientos en la Región Sur y Zona Atlántica:* En el plano socio-territorial, las iniciativas de relevamiento de datos socio-productivos, censos campesinos y mapas de vulnerabilidad agroclimática en la Línea Sur continúan ejecutándose de forma fragmentada por cada organismo. La falta de un repositorio digital interoperable único reproduce las *"islas burocráticas"*, insume costos transaccionales innecesarios y priva a la región de una analítica de datos integrada para la toma de decisiones públicas basadas en evidencia.

#callout("Dictamen sobre el Eje 1")[
  *Conclusión:* En el CURZAS *persiste un modelo de sistemas aislados de información*. Si bien se ha consolidado una fase madura de digitalización interna de trámites (SIU/SUDOCU), la transición hacia un *Estado Plataforma interoperable* con CONICET e INTA permanece como una deuda estructural pendiente.
]

== 3. Desafío 2: "Tramados Institucionales Ad Hoc" frente a la Rigidez Departamental

#callout("Pregunta de Investigación Institucional")[
  _Pensando en los "Tramados institucionales ad hoc": ¿Las secretarías de Extensión o Investigación configuran redes flexibles y temporales con municipios locales para resolver demandas socio-productivas de urgencia regional, rompiendo la rigidez de los departamentos tradicionales?_
]

=== A. Marco Conceptual: Tramados Ad Hoc y Gestión Matricial por Proyectos

El concepto de *tramados institucionales ad hoc* es formulado por *Cao y Blutman (2019, 2021)* en el seno de la teoría de la Poligobernanza. Frente a la naturaleza hipercompleja, volátil y heterogénea de las problemáticas sociales contemporáneas, las estructuras burocráticas jerárquicas y departamentales —diseñadas para administrar rutinas estables y estandarizadas— resultan excesivamente lentas, rígidas e ineficaces.

La Poligobernanza postula la conformación de *arreglos institucionales dinámicos, flexibles y temporales* (adhocracias y estructuras matriciales), donde organismos estatales, gobiernos locales, universidades y comunidades se articulan en red en función de metas concretas. Como analiza *Jorge Hintze (2018)*, estas modalidades por proyecto/programa permiten movilizar recursos interdisciplinarios y brindar respuestas rápidas a demandas de urgencia territorial sin necesidad de alterar la macroestructura burocrática permanente del organismo.

=== B. Evidencia Empírica Territorial: El Rol Articulador de Extensión y Ciencia y Técnica en el CURZAS

La estructura funcional del CURZAS ratifica plenamente este funcionamiento reticular. Frente a los dilatados tiempos administrativos y las deliberaciones reglamentarias de los Departamentos Académicos disciplinares (*Humanidades, Psicopedagogía, Administración, Ciencia y Técnica*), son las *Secretarías de Extensión y de Ciencia y Técnica / Posgrado* las que quiebran el aislamiento estamental y configuran *tramados institucionales ad hoc*:

1. *Proyecto Nodos CURZA Región Sur:* La UNCo desplegó una red institucional descentralizada en localidades estratégicas de la Línea Sur (*Valcheta, Ramos Mexía, Sierra Colorada, Los Menucos, Maquinchao e Ingeniero Jacobacci*). A través de convenios con municipios y comisiones de fomento, y mediante la designación por concurso de *Asistentes Técnico-Pedagógicos locales*, el CURZAS acerca ofertas académicas territorializadas —como los Ciclos de Complementación Curricular en Recursos Humanos y Arte— adaptando la presencia universitaria a la dispersión geográfica regional.
2. *Proyectos de Extensión Territorializados:* Un ejemplo paradigmático de la agenda extensionista del CURZAS es el proyecto *"Nodos en red: experiencias sustentables de producción para pequeños productores"* (liderado por docentes-investigadores del CURZAS como Mgtr. Nancy Osses y Esp. Silvia Martínez). Este dispositivo interviene directamente en territorio junto a pequeños productores de *Valcheta, San Antonio Oeste y General Conesa*, promoviendo la exploración de saberes previos, el acompañamiento técnico, la diversificación productiva y el agregado de valor en origen.
3. *Mesas Técnicas Interinstitucionales y Emergencias Regionales:* Ante problemáticas socio-ambientales críticas (como la crisis hídrica o la vulnerabilidad de la ganadería ovina y caprina), las secretarías conforman mesas ad hoc temporales junto al Departamento Provincial de Aguas (DPA), el INTA y cooperativas rurales para implementar sistemas de captación de agua de lluvia y mejoras en el manejo forrajero.
4. *Aporte de la Gobernanza Reticular (Aguilar Villanueva):* En estas experiencias, el CURZAS no impone soluciones tecnocráticas verticales (*top-down*), sino que se inserta como un nodo articulador en una red horizontal (*bottom-up*), donde el conocimiento científico-académico se negocia y coproduce con los saberes empíricos de las comunidades locales y la capacidad operativa de los gobiernos municipales.

#callout("Dictamen sobre el Eje 2")[
  *Conclusión:* Las Secretarías de Extensión y de Ciencia y Técnica del CURZAS *sí configuran tramados institucionales ad hoc y redes flexibles temporales*, funcionando como auténticas adhocracias matriciales que sortean la rigidez departamental y responden con celeridad a las urgencias socio-productivas de la Patagonia Norte.
]

== 4. Síntesis y Conclusiones del Avance 2

El diagnóstico del Avance 2 evidencia una marcada asimetría en la modernización del CURZAS:
- En la *dimensión informacional y de gestión de datos*, persisten *silos cerrados y cargas manuales duplicadas* que impiden concretar un verdadero *Estado Plataforma* interoperable con CONICET e INTA.
- En la *dimensión socio-territorial*, la institución demuestra una *destacada capacidad de poligobernanza reticular*, impulsada por las Secretarías de Extensión y Ciencia y Técnica a través del *Proyecto Nodos Región Sur* y proyectos productivos territoriales (*Nodos en Red*).

El desafío estratégico futuro radica en superar esta dualidad: robustecer los tramados ad hoc territoriales dotándolos de una infraestructura digital de datos abiertos e interoperabilidad interinstitucional, afianzando al CURZAS como una Universidad Plataforma al servicio del desarrollo patagónico.

#pagebreak()

// ==============================================================================
// 3. HOJA DEDICADA: BIBLIOGRAFÍA Y FUENTES ACADÉMICAS CONSOLIDADAS
// ==============================================================================

#v(15pt)

#rect(
  width: 100%,
  fill: bg-card,
  stroke: 0.5pt + border-subtle,
  radius: 6pt,
  inset: (x: 18pt, y: 18pt)
)[
  #text(weight: "bold", size: 12pt, fill: primary)[Bibliografía y Fuentes Académicas Consultadas]
  #v(6pt)
  #line(length: 100%, stroke: 0.6pt + accent)
  #v(12pt)
  
  #set text(size: 8.7pt, fill: text-main)
  - *Abal Medina, Juan Manuel (2014).* _Manual de Administración Pública._ Buenos Aires: Ariel. Capítulos 1 y 5.
  - *Aguilar Villanueva, Luis F. (2006).* _Gobernanza y Gestión Pública._ México D.F.: Fondo de Cultura Económica.
  - *Cao, Horacio y Blutman, Gustavo (2019).* _Continuidades y rupturas en las ideas sobre reforma y modernización del Estado._ Buenos Aires: INAP / Universidad de Buenos Aires.
  - *Cao, Horacio y Blutman, Gustavo (2021).* _Escenarios futuros para la administración pública: Poligobernanza y Neoweberianismo._ Documentos de Trabajo del INAP.
  - *CONICET (2009).* _Módulo de Interoperabilidad del Sistema Integral de Gestión y Evaluación (SIGEVA)._ Buenos Aires: Consejo Nacional de Investigaciones Científicas y Técnicas.
  - *CURZAS — Universidad Nacional del Comahue (2023).* _Avanza el proyecto Nodos CURZA UNCo Región Sur._ Área de Educación a Distancia y Nodos Territoriales. Disponible en: `https://web.curza.uncoma.edu.ar/educacion-distancia/nodos/avanza-el-proyecto-nodos-region-sur`.
  - *CURZAS — Universidad Nacional del Comahue (2024).* _Proyectos de Extensión: Nodos en red: experiencias sustentables de producción para pequeños productores (Dir. Mgtr. Nancy Osses et al.)._ Secretaría de Extensión y Transferencia. Disponible en: `https://web.curza.uncoma.edu.ar/extension/pe-proyectos`.
  - *Hintze, Jorge (2018).* _Gestión por procesos y diseño de estructuras en la administración pública: La articulación entre estructuras permanentes y proyectos temporales._ Buenos Aires: TOP / INAP.
  - *Oszlak, Oscar (2020).* _El Estado en la era exponencial: Tecnologías disruptivas y gestión pública._ Buenos Aires: Editorial INAP.
  - *Universidad Nacional del Comahue (1993/2023).* _Estatuto de la Universidad Nacional del Comahue (Ordenanza N° 470/1993 y modificatorias)._ Neuquén / Viedma.
  - *Marco Normativo Nacional:*
    - Constitución de la Nación Argentina (Art. 75, inc. 19).
    - Ley de Educación Superior N° 24.521.
    - Ley de Acceso a la Información Pública N° 27.275.
    - Ley de Repositorios Digitales Abiertos de Ciencia y Tecnología N° 26.899.
    - Ley de Administración Financiera del Sector Público Nacional N° 24.156.
    - Decretos N° 366/2006 y N° 1246/2015 (Convenios Colectivos de Trabajo Nodocente y Docente).
]

#pagebreak()

// ==============================================================================
// 4. HOJA DEDICADA: ÍNDICE GENERAL DE CONTENIDOS (AL FINAL DEL DOCUMENTO)
// ==============================================================================

#v(15pt)

#rect(
  width: 100%,
  fill: bg-card,
  stroke: 0.5pt + border-subtle,
  radius: 6pt,
  inset: (x: 18pt, y: 18pt)
)[
  #text(weight: "bold", size: 12pt, fill: primary)[Índice General de Contenidos]
  #v(6pt)
  #line(length: 100%, stroke: 0.6pt + accent)
  #v(12pt)
  
  #outline(
    title: none,
    depth: 2,
    indent: 1.5em
  )
]

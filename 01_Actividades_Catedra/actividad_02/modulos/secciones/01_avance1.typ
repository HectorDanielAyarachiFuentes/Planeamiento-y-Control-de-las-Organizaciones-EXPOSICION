#import "../config/estilos.typ": *
#import "../components/cajas.typ": *

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

#callout-dictamen("Dictamen de la Matriz Organizacional")[
  *Conclusión:* El CURZAS se define como una *Burocracia Tradicional Weberiana de Base Profesional*, vertebrada por el autogobierno democrático y complementada con herramientas instrumentales de modernización digital.
]

== 3. Análisis de Mecanismos de Rendición de Cuentas (Accountability)

A partir de la conceptualización de Guillermo O'Donnell sistematizada por *Abal Medina (2014)*, la rendición de cuentas institucional en el CURZAS se despliega en tres dimensiones interconectadas:

#v(3pt)

#table(
  columns: (1.1fr, 2.3fr, 1.6fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 8.5pt, y: 6pt),
  table.header(
    text(fill: white, weight: "bold", size: 8.3pt)[Dimensión],
    text(fill: white, weight: "bold", size: 8.3pt)[Mecanismos Institucionales en CURZAS / UNCo],
    text(fill: white, weight: "bold", size: 8.3pt)[Sustento Normativo / Evidencia]
  ),
  
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

#callout-pregunta[
  ¿Cuenta el organismo con normativas vigentes sobre la incorporación de algoritmos o software predictivo en la selección o monitoreo de personal?
]

*Resultados del Relevamiento Normativo y de Gestión:*

- *Inexistencia Absoluta de Algoritmos Predictivos:* En el CURZAS no existen normativas, proyectos piloto ni herramientas de software predictivo o Inteligencia Artificial destinadas a la selección, evaluación de desempeño o monitoreo disciplinario de los trabajadores.
- *Blindaje Paritario y Garantía de Control Humano:* La selección y promoción del personal se rige con exclusividad por jurados y comisiones paritarias integradas por personas humanas, garantizadas por los Convenios Colectivos de Trabajo (Decretos N° 366/06 y N° 1246/15). Existe un consenso institucional y sindical explícito que rechaza la delegación de decisiones laborales en sistemas algorítmicos automatizados.
- *Ubicación en la Escala de Oszlak:* La institución se encuentra plenamente inserta en la etapa de *digitalización de trámites y expedientes*, pero distante de la *Gobernanza Algorítmica y el Estado Inteligente*. Esta distancia no obedece a un mero rezago tecnológico, sino a un blindaje ético, político y gremial orientado a resguardar la transparencia, la imparcialidad y las garantías constitucionales del empleo público.

== 6. Conclusión Sintética del Avance 1

El análisis del CURZAS evidencia una organización pública donde converge una matriz burocrática-profesional weberiana garantista, un régimen de autonomía y co-gobierno democrático conquistado históricamente, e innovaciones tecnológicas orientadas a la modernización de servicios. El desafío estratégico central radica en proyectar su co-gobierno interno hacia redes horizontales de poligobernanza con el territorio de la Línea Sur y la Zona Atlántica rionegrina, preservando la primacía del control humano y paritario frente a los desafíos de la era algorítmica.

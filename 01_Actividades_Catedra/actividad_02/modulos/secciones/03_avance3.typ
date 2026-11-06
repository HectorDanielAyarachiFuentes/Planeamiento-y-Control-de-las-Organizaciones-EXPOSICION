#import "../config/estilos.typ": *
#import "../components/cajas.typ": *

// ==============================================================================
// SECCIÓN: AVANCE 3
// ESTRUCTURA ORGÁNICA, FLUJOGRAMA DE PERSONAL Y TRANSFORMACIÓN DIGITAL
// (VERSIÓN CONSOLIDADA: ALCANCE DE DATOS, PRECISIÓN JURÍDICA E INDICADORES)
// ==============================================================================

#avance-banner(
  "AVANCE 3: Estructura Orgánica y Transformación Digital",
  "Mapeo Formal vs. Real, Descentralización, Flujograma de Personal, Cuellos de Botella y Supuestos de Trabajo"
)

// Separador Conceptual de Sección: Presentación de Ejes del Avance 3
#block(
  width: 100%,
  stroke: (left: 3.5pt + primary, rest: 0.5pt + border-subtle),
  fill: bg-card,
  radius: (right: 4pt),
  inset: (x: 14pt, y: 9.5pt),
  [
    #text(weight: "bold", size: 8.8pt, fill: primary)[Ejes Analíticos y Metodológicos del Avance 3 (Versión Revisada)]
    #v(3pt)
    #text(size: 8.3pt, fill: text-muted)[
      • *Metodología:* Alcance y naturaleza de los datos utilizados (datos comprobados vs. supuestos de trabajo analíticos). \
      • *Eje 1:* Relevamiento y Análisis del Organigrama y Manual de Funciones: Estructura Formal vs. Real Emergente (Hintze, INAP). \
      • *Eje 2:* Identificación de los Niveles de Centralización, Desconcentración y Redes Territoriales (Zeller, Hintze). \
      • *Eje 3:* Modelado y Flujograma del Proceso Clave de Personal: Circuito de Licencias Médicas y Extraordinarias. \
      • *Eje 4:* Transición hacia la Gestión Documental Electrónica (SUDOCU/GDE/TAD) y Diagnóstico Exploratorio de Cuellos de Botella. \
      • *Eje 5:* Fundamentación Teórica de la Unidad 3: Inercia Estructural (Campos et al.), Racionalidad Limitada (Forester) y Dimensiones del Análisis Organizacional (INAP / Schlemenson). \
      • *Eje 6:* Propuestas de Rediseño Viables, Validación Institucional y Matriz de Indicadores con Supuestos de Referencia.
    ]
  ]
)
#v(6pt)

== Introducción y Encuadre Teórico-Metodológico del Avance 3

El presente módulo constituye la tercera entrega del diagnóstico institucional integral sobre el *Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)* de la *Universidad Nacional del Comahue (UNCo)*. Mientras que el Avance 1 delimitó la matriz burocrática profesional tradicional y sus contrapesos colegiados (Cao & Blutman, 2019; Abal Medina, 2014), y el Avance 2 evaluó la tensión entre silos informáticos y la respuesta reticular de la poligobernanza territorial (Aguilar Villanueva, 2006; Matus, 1993; Bertranou, 2015), el presente *Avance 3* desciende al núcleo de la *microestructura operativa, el diseño formal y los procesos sustantivos de gestión*.

=== A. Alcance y Naturaleza de los Datos Utilizados

El presente diagnóstico combina el análisis de la estructura organizacional y de las normativas vigentes con un ejercicio analítico y exploratorio sobre la gestión de licencias médicas. Se distingue con precisión entre la información documental formalmente verificada (Estatuto UNCo, Convenios Colectivos, Ordenanzas del Consejo Superior) y las estimaciones o hipótesis operativas empleadas para modelar el circuito administrativo.

Es necesario enfatizar que los valores numéricos, porcentajes de error, cantidades de expedientes y tiempos de tramitación consignados en este trabajo *no surgen de un relevamiento empírico formal, ni de mediciones de campo o auditorías estadísticas directas realizadas en el CURZAS*. Se trata de *hipótesis analíticas y supuestos de trabajo inspirados en problemáticas y patrones habituales observados en diversos ámbitos de la administración pública y del sector privado*, concebidos con un propósito estrictamente pedagógico y de simulación diagnóstica.

En consecuencia, estos valores *no son taxativos ni deben entenderse como datos reales o comprobados de la institución*, dado que no se ha realizado un trabajo de campo empírico para su medición directa. Su validez empírica requeriría una auditoría institucional futura basada en registros administrativos consolidados. Esta distinción transparenta el alcance del trabajo y permite formular una propuesta de control de gestión y modernización procedimental sin atribuir al CURZAS métricas no verificadas.

#v(2pt)

#table(
  columns: (1.2fr, 2fr, 1.8fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 8pt, y: 5.5pt),
  table.header(
    text(fill: white, weight: "bold", size: 8pt)[Tipo de Información],
    text(fill: white, weight: "bold", size: 8pt)[Significado Metodológico],
    text(fill: white, weight: "bold", size: 8pt)[Criterio de Presentación en el Informe]
  ),
  [*Dato normativo verificado*],
  [Comprobado fehacientemente mediante el Estatuto de la UNCo, resoluciones, ordenanzas y CCT vigentes.],
  [#text(style: "italic")[«Según la normativa institucional y ordenanzas analizadas...»]],
  [*Patrón de referencia general*],
  [Dinámicas y problemáticas frecuentes observadas de modo habitual en organizaciones públicas y privadas.],
  [#text(style: "italic")[«A partir de patrones habituales en la administración pública y privada...»]],
  [*Hipótesis de trabajo / Supuesto*],
  [Valores orientativos no taxativos, formulados para modelar cuellos de botella e ilustrar el ejercicio sin implicar un relevamiento directo.],
  [#text(style: "italic")[«Como hipótesis de trabajo y supuesto analítico...»]],
  [*Meta propuesta*],
  [Horizonte de optimización deseado que se busca alcanzar con el rediseño procedimental.],
  [#text(style: "italic")[«Se plantea como meta proyectada del rediseño...»]]
)

#v(2pt)

*Ilustración de aplicación:* Al abordar los tiempos de tramitación, el informe no afirma haber constatado una demora real de 18 días hábiles en el CURZAS, sino que formula: _«Hipótesis de trabajo: a efectos de construir un escenario diagnóstico exploratorio basado en dinámicas análogas de la administración pública y privada, se adopta como supuesto preliminar un plazo de 18 días. Este valor no surge de un relevamiento empírico directo en la institución y requeriría una futura auditoría para su comprobación»_. Asimismo, las reducciones proyectadas y los porcentajes futuros se presentan como metas propuestas sujetas a viabilidad técnica, y no como resultados garantizados.

=== B. Articulación con los Marcos Teóricos de la Unidad 3

El análisis se estructura sobre las contribuciones de los autores centrales del programa:
- La tipología de *modelos organizativos y redes institucionales* de *Jorge Hintze (2001)*, analizando la dinámica del *Ámbito Organizativo (AO)* y los mecanismos de coordinación por relaciones jerárquicas y contractuales.
- La *teoría ecológica del cambio organizativo y el concepto de inercia estructural* de *Silvia Campos, Roberto Carro, Claudia Duran y Hugo Oscar Fernández (2000)* (basados en Hannan y Freeman), examinando las presiones internas y externas que obstaculizan la modernización administrativa.
- La perspectiva de la *racionalidad limitada y la política de salir del paso* de *John Forester (1984)*, identificando cómo las cuatro restricciones (límites cognoscitivos, diferenciación social, conflicto pluralista y distorsiones estructurales) condicionan las decisiones burocráticas cotidianas.
- El enfoque del *Análisis Organizacional y la innovación pública* formulado por el *INAP (1997)* (sobre los aportes de Aldo Schlemenson), analizando las seis dimensiones de la dinámica institucional y el rol del pensamiento lateral.
- El marco jurídico-administrativo de la *organización del Estado y la Administración Pública Nacional* sistematizado por *Norberto Zeller y Darío Impala (2000)*, delimitando las fronteras entre descentralización institucional, autarquía y desconcentración.

== Eje 1: Relevamiento y Análisis del Organigrama y Manual de Funciones

=== A. Sustento Normativo y Estructura Formal del CURZAS

La configuración organizativa formal del CURZAS se encuentra regulada por el *Estatuto General de la UNCo (Ordenanza N° 470/1993 y sus modificatorias)*, las Resoluciones constitutivas del *Consejo Superior* para Unidades Académicas Regionales y el conjunto de Resoluciones internas dictadas por el *Consejo Directivo del CURZAS*.

La estructura formal se divide en cinco niveles jerárquicos y funcionales claramente delimitados:

1. *Nivel de Gobierno Soberano y Deliberativo:* El *Consejo Directivo*, cuerpo colegiado cuatripartito presidido por el/la Decano/a e integrado por representantes de los cuatro claustros (Docentes —profesores y auxiliares—, Estudiantes, Graduados y Personal Nodocente). Define el marco reglamentario local, aprueba planes de estudio a elevar al Consejo Superior y fiscaliza los actos de gestión.
2. *Nivel Ejecutivo y de Representación Institucional:* El *Decanato* y el *Vicedecanato*, secundados por la Asesoría Legal y el Despacho General, encargados de la administración cotidiana, representación institucional y conducción política de la sede.
3. *Nivel de Secretarías Sustantivas y de Gestión:*
  - *Secretaría Académica:* Supervisión de planes de enseñanza, concursos docentes, títulos y certificaciones, articulación con la Dirección de Alumnos y la Biblioteca Central.
  - *Secretaría de Extensión:* Vinculación territorial, transferencias comunitarias, pasantías y coordinación institucional con municipios de la Comarca Atlántica y la Línea Sur.
  - *Secretaría de Investigación y Posgrado:* Convocatorias a Proyectos de Investigación (PI/PIN), carreras de cuarto nivel y articulación con el CIT Río Negro (CONICET).
  - *Secretaría Administrativa (o Dirección General de Administración):* Administración presupuestaria, compras, contrataciones, rendición de cuentas, liquidaciones y despacho financiero.
4. *Nivel de Departamentos Académicos (Unidades Curriculares y Disciplinares):*
  - *Departamento de Administración* (Lic. en Administración Pública, Lic. en Gestión de RRHH, Tecnicaturas afines).
  - *Departamento de Psicopedagogía* (Licenciatura y Profesorado).
  - *Departamento de Humanidades* (Ciencia Política, Lengua y Comunicación).
  - *Departamento de Ciencia y Técnica / Producción Agropecuaria*.
5. *Nivel de Direcciones Operativas y de Apoyo Administrativo:*
  - *Dirección de Personal y Recursos Humanos:* Gestión de legajos, asistencia, licencias, certificaciones de servicios, regímenes jubilatorios y enlace técnico con SIU-Mapuche y Rectorado.
  - *Dirección de Despacho y Mesa de Entradas:* Registro de notas, foliatura, administración de expedientes físicos y electrónicos (SUDOCU) y archivo.
  - *Dirección de Alumnos y Asuntos Estudiantiles:* Tramitación de matrículas, actas de examen en SIU-Guaraní y becas.
  - *Dirección de Biblioteca y Centros de Documentación*.
  - *Dirección de Mantenimiento, Obras y Servicios Generales*.

#v(3pt)

#table(
  columns: (1.2fr, 2.2fr, 1.6fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 8.5pt, y: 6pt),
  table.header(
    text(fill: white, weight: "bold", size: 8.3pt)[Nivel / Área Formal],
    text(fill: white, weight: "bold", size: 8.3pt)[Misiones y Funciones Estatutarias],
    text(fill: white, weight: "bold", size: 8.3pt)[Instrumento Normativo de Respaldo]
  ),
  [
    *Consejo Directivo* \
    #text(size: 7.2pt, fill: text-muted)[Gobierno Colegiado]
  ],
  [
    Dictar ordenanzas y resoluciones internas; aprobar presupuestos anuales de la sede; convalidar jurados de concurso; fijar directrices de docencia, investigación y extensión.
  ],
  [
    Estatuto UNCo (Ord. 470/93, Arts. 56 a 64); Ley N° 24.521 (Art. 53).
  ],
  [
    *Decanato y Vicedecanato* \
    #text(size: 7.2pt, fill: text-muted)[Órgano Ejecutivo]
  ],
  [
    Ejercer la representación jurídica e institucional; ordenar pagos y compras conforme límites de desconcentración; ejecutar resoluciones del Consejo Directivo; designar autoridades de gestión.
  ],
  [
    Estatuto UNCo (Arts. 65 a 71); Resoluciones de Decanato ad-referéndum.
  ],
  [
    *Secretarías de Gestión* \
    #text(size: 7.2pt, fill: text-muted)[Nivel Asesor y Ejecutivo]
  ],
  [
    Conducir las políticas sustantivas (Académica, Extensión, Investigación y Administración); coordinar los departamentos académicos y articular programas interinstitucionales.
  ],
  [
    Estructura Orgánico-Funcional aprobada por Consejo Directivo; Resoluciones CD CURZAS.
  ],
  [
    *Departamentos Docentes* \
    #text(size: 7.2pt, fill: text-muted)[Gestión Curricular]
  ],
  [
    Programar la oferta académica de grado y posgrado; asignar cargas docentes; proponer llamados a concurso regular e interino; supervisar comisiones curriculares de carrera.
  ],
  [
    Reglamento Departamental UNCo (Ord. 028/1987 y complementarias).
  ],
  [
    *Dirección de Personal* \
    #text(size: 7.2pt, fill: text-muted)[Área de Apoyo Crítica]
  ],
  [
    Administrar legajos, registrar asistencia, controlar incompatibilidades horarias, instruir solicitudes de licencias médicas y extraordinarias, y cargar novedades al sistema SIU-Mapuche.
  ],
  [
    Convenio Colectivo Nodocente (Decreto N° 366/2006); Convenio Docente (Decreto N° 1246/2015).
  ]
)

=== B. Manuales de Funciones Institucionales y Agrupamientos Escalafonarios

El régimen de funciones del personal se encuentra estrictamente tipificado por convenios colectivos homologados con fuerza de ley:

- *Personal Nodocente (Decreto Nacional N° 366/2006):* Establece un escalafón único nacional articulado en categorías (de Categoría 1, máxima responsabilidad de Dirección General, a Categoría 7, nivel inicial de auxiliar) distribuidas en cinco agrupamientos funcionales: *Administrativo*, *Técnico*, *Profesional*, *Mantenimiento y Producción*, y *Servicios Generales*. Cada puesto cuenta con misiones y funciones preestablecidas que fijan competencias, alcances de responsabilidad y requisitos de titulación.
- *Personal Docente (Decreto Nacional N° 1246/2015):* Regula las jerarquías académicas (Profesor Titular, Asociado, Adjunto, Jefe de Trabajos Prácticos y Ayudante de Primera) y sus regímenes de dedicación (Exclusiva de 40 hs semanales, Semiexclusiva de 20 hs y Simple de 10 hs), articulando labores de docencia frente a alumnos, investigación científica acreditada y extensión territorial.

=== C. Contraste Crítico: Estructura Formal (De Jure) vs. Estructura Real Emergente (De Facto)

#callout-pregunta[
  ¿El organigrama real coincide con la estructura formal de dependencias y delegaciones institucionales en el CURZAS?
]

#v(3pt)
#align(center)[
  #block(
    width: 100%,
    stroke: 0.5pt + border-subtle,
    radius: 4pt,
    fill: white,
    inset: (x: 4pt, y: 4pt),
    [
      #image("/Actividades/material/actividad_03/organigrama.svg", width: 100%)
      #v(2pt)
      #text(size: 7.8pt, fill: text-muted, style: "italic")[
        *Figura 1:* Organigrama Funcional y Estructural del CURZAS — UNCo: Dependencias Formales (De Jure) vs. Red Territorial Emergente de 10 Nodos Regionales (De Facto) y Área Crítica de Personal.
      ]
    ]
  )
]
#v(4pt)

Al contrastar el organigrama aprobado estatutariamente con el funcionamiento cotidiano y empírico del CURZAS, se evidencian *disparidades estructurales significativas*:

1. *Invisibilidad Orgánica de la Red de Nodos Territoriales:*
  La mayor discrepancia reside en el despliegue geográfico. Como se documentó en el Avance 2, el CURZAS sostiene una red de *10 Nodos Regionales* en la Línea Sur y la Costa Atlántica (documentados en la plataforma web oficial de Educación a Distancia del CURZAS: Los Menucos, Sierra Colorada, Valcheta, Ramos Mexía, San Antonio Oeste, Conesa, etc.). Sin embargo, en el organigrama formal aprobado por el Consejo Superior de la UNCo *no existen Direcciones ni Departamentos específicos para los Nodos*. 
  En la práctica real, esta red opera mediante una *"Coordinación de Educación a Distancia y Nodos"* de carácter informal y la designación o delegación de funciones a *"Asistentes Técnico-Pedagógicos locales"*, los cuales gestionan inscripciones, consultas y entrega de documentación sin respaldo formal en el manual de funciones nodocente.
2. *Comisiones Ad Hoc como Válvulas de Desahogo Burocrático:*
  Frente a la lentitud de los canales estamentales, emergen estructuras paralelas no contempladas en el organigrama:
  - *Comisión Paritaria Particular (COPAR):* Espacio de negociación obligada entre autoridades y sindicatos nodocentes (ATUNyC) y docentes (ADUNC) donde se resuelven de facto reasignaciones funcionales, subrogancias y coberturas de vacantes antes de su tratamiento colegiado.
  - *Comisiones de Seguimiento Curricular:* Creadas ad hoc en las carreras, absorben la tramitación de equivalencias, pases y prórrogas que formalmente deberían instruir los Departamentos Docentes y la Secretaría Académica.
3. *Sobrecarga y Delegación Forzosa en la Dirección de Personal:*
  Dada la distancia geográfica de casi 1.000 kilómetros respecto al Rectorado central en Neuquén, la *Dirección de Personal del CURZAS* asume cotidianamente labores de asesoramiento previsional, cálculo de liquidaciones complejas, instrucción de licencias de largo tratamiento y resolución de controversias laborales que, en el manual de misiones y funciones formal, están reservadas con exclusividad a la *Dirección General de Personal* y a la *Dirección de Asuntos Jurídicos* del Rectorado. Esta delegación informal es tolerada por la superioridad para evitar la paralización operativa de la sede.

#callout-dictamen("Dictamen sobre el Eje 1: Brecha Estructural")[
  *Conclusión:* El organigrama real *no coincide plenamente* con la estructura formal. Mientras que la estructura formal refleja una burocracia departamental estática concebida para la sede Viedma en la década de 1990, la estructura real opera como un *sistema adaptativo híbrido*, recurriendo a coordinaciones de facto, comisiones ad hoc y delegaciones tácitas para gestionar la complejidad territorial y tecnológica contemporánea.
]

== Eje 2: Identificación de los Niveles de Centralización y Descentralización

Para abordar la geometría de poder y decisión en el CURZAS, se aplica la distinción entre *centralización, desconcentración y descentralización* formulada por *Zeller e Impala (2000)* e integrada con la teoría de los *ámbitos organizativos (AO)* de *Jorge Hintze (2001)*.

#v(3pt)

#table(
  columns: (1.1fr, 2.3fr, 1.6fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 8.5pt, y: 6pt),
  table.header(
    text(fill: white, weight: "bold", size: 8.3pt)[Nivel Institucional],
    text(fill: white, weight: "bold", size: 8.3pt)[Régimen de Autoridad y Dinámica Operativa],
    text(fill: white, weight: "bold", size: 8.3pt)[Clasificación Teórica (Zeller / Hintze)]
  ),
  [
    *Nivel Macro* \
    #text(size: 7.2pt, fill: text-muted)[Estado Nacional $arrow.r$ UNCo]
  ],
  [
    La Universidad Nacional del Comahue goza de autonomía académica e institucional plena y autarquía económico-financiera garantizada por la Constitución Nacional (Art. 75 inc. 19). El Poder Ejecutivo Nacional no ejerce tutela jerárquica directa; sólo audita fondos a través de la AGN y fija pautas salariales en paritarias generales.
  ],
  [
    *Descentralización Institucional Plena y Autarquía* \
    Entidad pública autónoma con personería jurídica propia (Zeller e Impala, 2000).
  ],
  [
    *Nivel Meso* \
    #text(size: 7.2pt, fill: text-muted)[Rectorado UNCo $arrow.r$ CURZAS]
  ],
  [
    - *Centralización Política y Normativa:* El Consejo Superior y el Rectorado centralizan la aprobación final de carreras, paritarias salariales, distribución de la masa presupuestaria global y servidores centrales (SIU-Mapuche). \
    - *Desconcentración Operativa:* El CURZAS posee autonomía de gobierno local (Consejo Directivo soberano para emitir resoluciones), pero en el plano económico y de personal actúa como unidad desconcentrada sujeta a topes de autorización de gasto.
  ],
  [
    *Desconcentración Funcional y Gobierno Local Colegiado* \
    Transferencia interna de competencias de gestión sin autonomía presupuestaria plena.
  ],
  [
    *Nivel Micro* \
    #text(size: 7.2pt, fill: text-muted)[CURZAS Viedma $arrow.r$ Nodos]
  ],
  [
    El CURZAS no reproduce sedes burocráticas pesadas en los pueblos de la provincia, sino que articula convenios de cogestión con intendencias y comisiones de fomento. La sede Viedma centraliza la validez académica de las actas y títulos, mientras que los Nodos desconcentran la atención al usuario, conectividad y tutoría pedagógica.
  ],
  [
    *Modelo de Red Institucional Interorganizacional* (Hintze, 2001) \
    Articulación de actores autónomos en un Ámbito Organizativo común mediante vínculos contractuales y cooperación.
  ]
)

=== A. Centralización Informática vs. Desconcentración en la Gestión de Recursos Humanos

En la administración de los recursos humanos se expresa con máxima nitidez la tensión centro-periferia:
- *Centralización Tecnológica:* El servidor maestro del sistema informático de nómina salarial (*SIU-Mapuche*) se encuentra físicamente localizado y administrado por la Dirección General de Tecnologías de Información en el Rectorado central en la ciudad de Neuquén. Ninguna modificación presupuestaria de planta permanente ni alta de cargo docente regular puede concretarse sin la intervención y validación del nivel central.
- *Desconcentración Administrativa Territorial:* La *Dirección de Personal del CURZAS* en Viedma es la responsable exclusiva del control de ausentismo, recepción de partes médicos, conformación física y digital de legajos y aplicación local de los CCT. Sin embargo, carece de autonomía para autorizar pagos directos, dependiendo de que las novedades cargadas en la sede sean liquidadas e impactadas por la Tesorería General del Rectorado.

#callout-dictamen("Dictamen sobre el Eje 2: Geometría de Centralización")[
  *Conclusión:* El CURZAS opera bajo un régimen de *desconcentración operativa subordinada a una centralización estratégica-normativa* por parte del Rectorado de la UNCo, complementado en su despliegue territorial por un *modelo de red institucional* con los municipios rionegrinos.
]

#pagebreak()

== Eje 3: Flujograma de un Proceso Clave del Área de Personal: Circuito de Licencias

=== A. Selección y Justificación del Proceso

Dentro de las competencias sustantivas del Área de Personal, el circuito de *Tramitación, Homologación, Concesión y Asentamiento de Licencias Médicas (de Corto y Largo Tratamiento) y Extraordinarias del Personal Docente y Nodocente* (conforme Artículos 39 a 52 del Decreto N° 366/2006 y Artículos 48 a 55 del Decreto N° 1246/2015) constituye el proceso más crítico por tres razones fundamentales:

1. *Impacto Financiero Directo:* Determina la justificación o descuento de haberes en la liquidación mensual de sueldos procesada por el sistema SIU-Mapuche.
2. *Continuidad del Servicio Académico e Institucional:* Una demora en el procesamiento de una licencia médica docente prolongada paraliza el llamado a designación interina de un reemplazante, perjudicando el dictado de clases a los estudiantes.
3. *Heterogeneidad de Actores y Sistemas Involucrados:* Conecta al agente solicitante, al superior jerárquico de área, a los profesionales de Medicina Laboral / Salud Ocupacional, a la Dirección de Personal del CURZAS, al Decanato y, finalmente, a la Dirección General de Liquidaciones del Rectorado en Neuquén.

=== B. Diagramación Algorítmica y Flujograma Visual del Circuito

#align(center)[
  #block(
    width: 100%,
    fill: bg-card,
    stroke: 0.6pt + border-subtle,
    radius: 5pt,
    inset: (x: 12pt, y: 10pt),
    [
      #text(weight: "bold", size: 9pt, fill: primary)[Flujograma del Circuito de Tramitación de Licencias Médicas en el CURZAS (UNCo)]
      #v(2pt)
      #text(size: 7.8pt, fill: text-muted)[Modelado de flujo con carriles de actores (*swimlanes*) y transición al ecosistema electrónico]
      #v(8pt)

      // Swimlane 1: Agente Solicitante
      #rect(width: 100%, fill: rgb("#eff6ff"), stroke: 0.5pt + primary, radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: primary)[CARRIL 1: Agente (Docente / Nodocente)],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 1: Solicitud y Carga.* Presenta aviso de inasistencia antes de las 9:00 hs. Inicia trámite en *SUDOCU* adjuntando certificado médico digitalizado dentro de las 48-72 hs reglamentarias.
            ]
          ]
        )
      ]
      #v(3pt)
      #text(size: 9pt, fill: accent)[$arrow.b$]
      #v(3pt)

      // Swimlane 2: Superior Jerárquico
      #rect(width: 100%, fill: rgb("#f8fafc"), stroke: 0.5pt + border-line, radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: rgb("#334155"))[CARRIL 2: Superior Jerárquico],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 2: Visto Bueno de Área.* El Director/a de Departamento o Secretario/a toma conocimiento del aviso en SUDOCU, evalúa la cobertura de tareas y estampa su firma electrónica de elevación.
            ]
          ]
        )
      ]
      #v(3pt)
      #text(size: 9pt, fill: accent)[$arrow.b$]
      #v(3pt)

      // Swimlane 3: Salud Ocupacional / Medicina Laboral
      #rect(width: 100%, fill: rgb("#fffbeb"), stroke: 0.5pt + rgb("#d97706"), radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: rgb("#b45309"))[CARRIL 3: Salud Ocupacional],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 3: Homologación Médica.* Médico/a laboral analiza diagnóstico y días prescriptos.
              \ #text(size: 7.2pt, fill: rgb("#92400e"), weight: "bold")[¿Requiere Junta Médica o supera los días de corto tratamiento?] \
              $diamond$ *NO:* Emite dictamen favorable y fija días con goce de haberes. \
              $diamond$ *SÍ:* Convoca a Junta Médica presencial/remota en Viedma o Neuquén.
            ]
          ]
        )
      ]
      #v(3pt)
      #text(size: 9pt, fill: accent)[$arrow.b$]
      #v(3pt)

      // Swimlane 4: Dirección de Personal
      #rect(width: 100%, fill: rgb("#f0fdf4"), stroke: 0.5pt + rgb("#16a34a"), radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: rgb("#15803d"))[CARRIL 4: Dirección de Personal],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 4: Verificación Escalafonaria y Proyecto de Acto.* Controla antigüedad, régimen de licencias disponibles y elabora el proyecto de Disposición/Resolución en SUDOCU.
            ]
          ]
        )
      ]
      #v(3pt)
      #text(size: 9pt, fill: accent)[$arrow.b$]
      #v(3pt)

      // Swimlane 5: Decanato
      #rect(width: 100%, fill: rgb("#faf5ff"), stroke: 0.5pt + rgb("#9333ea"), radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: rgb("#7e22ce"))[CARRIL 5: Decanato / Vicedecanato],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 5: Emisión de Acto Administrativo.* El/la Decano/a suscribe la Resolución mediante Firma Digital y se asienta el número de resolución electrónica oficial en el registro de SUDOCU.
            ]
          ]
        )
      ]
      #v(3pt)
      #text(size: 9pt, fill: accent)[$arrow.b$]
      #v(3pt)

      // Swimlane 6: Cierre, Notificación e Impacto en SIU-Mapuche
      #rect(width: 100%, fill: rgb("#eff6ff"), stroke: 0.5pt + primary, radius: 3pt, inset: 6pt)[
        #grid(
          columns: (110pt, 1fr),
          align: (left + horizon, left + horizon),
          text(size: 7.6pt, weight: "bold", fill: primary)[CARRIL 6: Registro y Nómina Salarial],
          [
            #rect(fill: white, stroke: 0.4pt + border-line, radius: 2pt, inset: 4pt)[
              *Paso 6: Notificación Electrónica y Carga en SIU-Mapuche.* \
              1. Notificación fehaciente al buzón de SUDOCU y correo institucional del agente. \
              2. *Carga Manual en SIU-Mapuche:* Un operador nodocente transcripta los códigos de licencia y fechas de goce/descuento de sueldo antes del cierre de novedades de Rectorado.
            ]
          ]
        )
      ]
      #v(4pt)
      #text(size: 7.2pt, fill: text-muted, style: "italic")[
        *Figura 1:* Mapeo estructurado por carriles (*swimlanes*) del circuito de licencias en el CURZAS (UNCo).
      ]
    ]
  )
]

=== C. Matriz Operativa de Etapas, Insumos y Responsables

#table(
  columns: (45pt, 85pt, 110pt, 100pt, 75pt),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 6pt, y: 5pt),
  table.header(
    text(fill: white, weight: "bold", size: 7.5pt)[Fase],
    text(fill: white, weight: "bold", size: 7.5pt)[Responsable],
    text(fill: white, weight: "bold", size: 7.5pt)[Actividad Principal],
    text(fill: white, weight: "bold", size: 7.5pt)[Sistema / Plataforma],
    text(fill: white, weight: "bold", size: 7.5pt)[Plazo Estimado\*]
  ),
  [1. Aviso], [Agente], [Aviso de inasistencia médica y carga de certificado.], [SUDOCU / Correo], [0 - 48 hs reglamentarias],
  [2. VB], [Jefe Depto. / Sec.], [Toma de razón y autorización de cobertura de tareas.], [SUDOCU (Bandeja)], [24 - 48 hs estimadas],
  [3. Médico], [Salud Ocupacional], [Homologación clínica del diagnóstico y días acordados.], [SUDOCU / Form. Médico], [48 - 72 hs estimadas],
  [4. Legal], [Dir. Personal], [Verificación de topes anuales y confección de proyecto.], [SUDOCU / Legajo], [24 - 48 hs estimadas],
  [5. Firma], [Decanato], [Suscripción de Resolución Decanal con firma digital.], [SUDOCU (Firma Token)], [48 - 96 hs estimadas],
  [6. Carga], [Operador Personal], [Asentamiento en SIU-Mapuche y notificación digital.], [SIU-Mapuche / Mail], [24 - 48 hs estimadas]
)
#v(2pt)
#text(size: 7.2pt, fill: text-muted, style: "italic")[
  \* _Nota Metodológica sobre Plazos:_ Los valores consignados corresponden a *tiempos de referencia hipotéticos* utilizados para modelar el circuito operativo en condiciones regulares de trámite en sede central Viedma, sujetos a validación mediante mediciones de campo.
]

== Eje 4: Transición al Ecosistema Electrónico (SUDOCU / GDE / TAD) y Cuellos de Botella

=== A. Análisis de las Autorizaciones Internas y Sistemas de Gestión Documental

#callout-pregunta[
  ¿Cómo se gestionan las autorizaciones internas? ¿Se utiliza de forma exclusiva el Sistema de Gestión Documental Electrónica (GDE) o la plataforma Trámites a Distancia (TAD)?
]

Para responder a este interrogante, es imperativo establecer una rigurosa *distinción institucional y tecnológica*:

1. *Diferenciación Conceptual: GDE/TAD vs. SUDOCU:*
  - *GDE y TAD (Poder Ejecutivo Nacional):* El *Sistema de Gestión Documental Electrónica (GDE)* y la plataforma *Trámites a Distancia (TAD)* son las plataformas oficiales impuestas por el Decreto PEN N° 1063/2016 para la Administración Pública Nacional centralizada y descentralizada. 
  - *SUDOCU (Sistema Universitario Nacional):* Las Universidades Nacionales, en virtud de su autonomía constitucional (Art. 75 inc. 19 CN), *no fueron compelidas a utilizar GDE/TAD*. A través de un acuerdo federal en el *Consejo Interuniversitario Nacional (CIN)*, el sistema universitario adoptó el *SUDOCU (Sistema Único de Documentación de las Universidades)*, desarrollado originariamente por la Universidad Nacional de General Sarmiento (UNGS) y mantenido por el consorcio SIU. SUDOCU gestiona expedientes, trámites, resoluciones y firmas electrónicas integradas al resto de los módulos universitarios (Guaraní, Mapuche, Diaguita).
2. *Diagnóstico en el CURZAS: Coexistencia del "Modelo Híbrido Burocrático" (Doble Vía):*
  El análisis procedimental indica que en el CURZAS, al igual que en diversas dependencias públicas y privadas en transición tecnológica, *no se utiliza de forma exclusiva el sistema documental electrónico*. Aunque formalmente las ordenanzas de la UNCo estipulan la obligatoriedad de SUDOCU y las normativas de despapelización prohíben la carátula de expedientes de papel, en la gestión de personal persiste un *modelo híbrido*:
  - Los agentes inician el trámite de licencia vía SUDOCU adjuntando la fotografía o escaneo del certificado médico.
  - Sin embargo, la Dirección de Personal y el servicio médico continúan *exigiendo la entrega física del certificado médico original en papel con firma ológrafa del médico particular dentro de las 48-72 horas* en la ventanilla administrativa.
  - Este requisito obedece a un temor fundado en requerimientos de auditoría previsional (ANSES) o del Tribunal de Cuentas / AGN, los cuales históricamente han reclamado el documento físico pericial ante licencias de largo tratamiento o jubilaciones por invalidez. Como resultado, conviven dos expedientes: uno digital en la nube de SUDOCU y una carpeta física con comprobantes en papel archivada en un armario metálico.

=== B. Detección y Análisis Exhaustivo de los Cuellos de Botella Burocráticos

#callout-pregunta[
  ¿Qué cuellos de botella burocráticos persisten en el circuito de licencias, designaciones o ascensos?
]

A partir del análisis formal del procedimiento y de la contrastación con dinámicas burocráticas típicas observadas en ámbitos públicos y privados, se plantean como hipótesis analíticas exploratorias *cuatro cuellos de botella críticos* que podrían ralentizar la gestión administrativa:

#v(2pt)

#table(
  columns: (1.2fr, 2.2fr, 1.6fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 8.5pt, y: 6pt),
  table.header(
    text(fill: white, weight: "bold", size: 8.3pt)[Cuello de Botella],
    text(fill: white, weight: "bold", size: 8.3pt)[Mecanismo de Bloqueo / Supuesto Observado],
    text(fill: white, weight: "bold", size: 8.3pt)[Efecto Burocrático Hipotético]
  ),
  [
    *1. Homologación Médica en Territorio Disperso* \
    #text(size: 7.2pt, fill: text-muted)[Vacío prestacional en Nodos]
  ],
  [
    En los 10 Nodos Regionales de la Línea Sur y Costa (Los Menucos, Valcheta, etc.), la UNCo no cuenta con médicos laborales contratados. Los agentes presentan certificados de salas de primeros auxilios u hospitales rurales. Estos deben ser convalidados por la Junta Médica del CURZAS en Viedma o del Rectorado en Neuquén. Ante la imposibilidad de viajar a Viedma, el expediente digital queda demorado (*rango temporal estimado preliminar: 15 a 30 días hábiles*) esperando que un médico laboral homologue a distancia la patología.
  ],
  [
    Incertidumbre sobre la liquidación de haberes; riesgo de cómputo erróneo como "inasistencia injustificada" con descuento temporal de sueldo.
  ],
  [
    *2. Firma Digital Escalonada y Rigidez Secuencial* \
    #text(size: 7.2pt, fill: text-muted)[Ausencia de pase concurrente]
  ],
  [
    En SUDOCU, la ruta de firmas del acto resolutivo está configurada de manera estrictamente lineal (Sec. Académica $arrow.r$ Dir. Personal $arrow.r$ Sec. Administrativa $arrow.r$ Decanato). Si un funcionario viaja a paritarias a Neuquén, se encuentra de licencia o su token criptográfico falla, el expediente se detiene indefinidamente en su bandeja sin derivación automática por caducidad de plazo.
  ],
  [
    Parálisis del trámite durante semanas; acumulación de resoluciones en cola que dilatan el reconocimiento de licencias especiales o suplencias.
  ],
  [
    *3. Brecha de Interoperabilidad SUDOCU $arrow.r$ Mapuche* \
    #text(size: 7.2pt, fill: text-muted)[Falta de pasarela API automática]
  ],
  [
    A pesar de pertenecer a la familia SIU, la aprobación de la resolución en SUDOCU *no dispara automáticamente la novedad salarial en el sistema SIU-Mapuche*. Un operador nodocente de Personal debe leer la resolución digital en pantalla y transcribir manualmente los códigos de licencia y fechas de descuento en Mapuche antes del día 20 de cada mes (fecha límite de novedades de Rectorado).
  ],
  [
    Sobrecarga operativa, duplicación del esfuerzo humano y generación de errores de tipeo que obligan a realizar engorrosas liquidaciones retroactivas.
  ],
  [
    *4. Demoras en Concursos de Ascenso y Designaciones* \
    #text(size: 7.2pt, fill: text-muted)[Burocracia Paritaria (CCT 366/06)]
  ],
  [
    En las coberturas de vacantes por ascenso o licencias prolongadas, el procedimiento exige convocatoria a la Comisión Paritaria Particular (COPAR), confección de actas, sorteo de veedores gremiales (ATUNyC) y jurados. Como supuesto de trabajo preliminar sujeto a contrastación empírica, este circuito insume un *plazo orientativo hipotético de entre 4 y 8 meses* de tramitación administrativa.
  ],
  [
    Cargos críticos cubiertos mediante "asignaciones transitorias de funciones" sin regularización escalafonaria, precarizando la gestión de mandos medios.
  ]
)

#callout-dictamen("Dictamen sobre el Eje 4: Cuellos de Botella")[
  *Conclusión:* La transición a SUDOCU resolvió el extravío material de papeles, pero *los cuellos de botella se desplazaron hacia las interfaces humanas e institucionales*: la desconexión con el sistema de sueldos (Mapuche), la rigidez de las cadenas de firma y la falta de cobertura médica en el territorio.
]

#pagebreak()

== Eje 5: Fundamentación Teórica con los Autores de la Unidad 3

=== A. La Inercia Estructural como Resistencia al Ecosistema Digital (Campos, Carro, Duran y Fernández)

La persistencia del "expediente papel de respaldo" y la resistencia a confiar plenamente en el soporte informático no deben interpretarse como un simple capricho de los empleados o autoridades del CURZAS. A la luz de la *Teoría Ecológica de las Organizaciones* expuesta por *Campos et al. (2000)* (a partir de las tesis seminales de Michael Hannan y John Freeman), este fenómeno responde al concepto de *inercia estructural*:

- *Fuerzas Internas de Inercia:* Las organizaciones públicas maduras presentan elevadas barreras internas al cambio:
  1. *Inversión en Rutinas Históricas:* Décadas de sedimentación de prácticas administrativas basadas en el sello manual, la firma con tinta y el foliado correlativo crean esquemas mentales y hábitos difíciles de desarticular.
  2. *Restricciones Políticas y Acuerdos Normativos:* Los Convenios Colectivos de Trabajo consagran derechos adquiridos y procedimientos estables. Cualquier alteración de tareas impuesta por un software es percibida por los gremios como una flexibilización laboral encubierta o una alteración de las condiciones laborales acordadas.
  3. *Costos de Reconversión de Competencias:* La brecha de habilidades digitales en los agentes de categorías superiores genera temor y desconfianza hacia la trazabilidad total que impone el sistema digital.
- *Fuerzas Externas de Inercia:* Las presiones ambientales del sector público refuerzan la inercia:
  1. *Incertidumbre Normativa y de Auditoría:* Los organismos de control externo (AGN, SIGEN) y la previsión social (ANSES) históricamente han exigido expedientes físicos foliados para validar la legalidad del gasto y el otorgamiento de jubilaciones. Ante la duda de si un expediente electrónico será observado en una auditoría futura, los funcionarios optan por mantener el resguardo en papel.
  2. *Búsqueda de Legitimación Ambiental:* En términos de la ecología organizacional, las burocracias públicas priorizan la *legitimidad y confiabilidad formal* por encima de la eficiencia o la celeridad. El papel brinda una "fachada de legalidad consagrada" que neutraliza el riesgo de reproche administrativo o judicial.

=== B. Racionalidad Limitada y la Política de "Salir del Paso" (John Forester)

El análisis del comportamiento administrativo en el CURZAS confirma el postulado de *John Forester (1984)* en su análisis clásico sobre la racionalidad en la administración pública: la toma de decisiones está a años luz del modelo de "racionalidad exhaustiva o sinóptica" (que asume información perfecta, metas unívocas y optimización matemática). Los funcionarios y operadores del área de personal operan bajo una *racionalidad limitada y fragmentada*, aplicando la estrategia de *salir del paso* (*muddling through*) a través de cuatro restricciones universales:

1. *Límites Cognoscitivos:* La Dirección de Personal debe procesar centenas de novedades mensuales bajo una maraña de normativas superpuestas (leyes laborales, convenios colectivos docentes y nodocentes, ordenanzas de la UNCo, resoluciones del Ministerio). Ante la imposibilidad humana de dominar exhaustivamente cada variable técnica, el personal recurre a *rutinas heurísticas y soluciones satisfactorias* ("siempre se liquidó así"), minimizando el esfuerzo analítico.
2. *Diferenciación Social y Choque de Racionalidades:* En el CURZAS coexisten dos lógicas profesionales divergentes:
  - *La racionalidad procedimental-normativa* de la Dirección de Personal, obsesionada con los plazos legales, la autenticidad probatoria del certificado y el resguardo frente al CCT.
  - *La racionalidad sustantiva-académica* de los Directores de Departamento y Secretarías, focalizada en que no se interrumpa el dictado de las clases ni se perjudique a los alumnos. \
  Esta divergencia genera tensiones constantes: lo que para Personal es un "estricto apego reglamentario", para el Departamento Académico es una "traba burocrática insensible".
3. *Conflicto Pluralista de Intereses:* La universidad es un microcosmos político donde conviven intereses contrapuestos (claustro docente, claustro nodocente, autoridades de gestión, sindicatos ADUNC y ATUNyC). Las decisiones respecto a licencias dudosas, ascensos o designaciones interinas no son cálculos técnicos neutros, sino el producto de un *regateo y negociación política continua*. Se recurre a compromisos provisorios y soluciones de compromiso ad hoc para mantener la paz social en la sede.
4. *Distorsiones Estructurales e Información Asimétrica:* Existen desbalances de poder y canales de comunicación opacos entre la sede periférica en Viedma y el Rectorado central en Neuquén. Las modificaciones presupuestarias o los criterios de liquidación a menudo se informan tarde o de manera ambigua desde la sede central, obligando a los operadores locales a "navegar en la niebla" y resolver contingencias sobre la marcha mediante la política de salir del paso.

=== C. Dimensiones del Análisis Organizacional e Innovación Pública (INAP / Schlemenson)

Aplicando el marco metodológico del *INAP (1997)* (basado en el modelo de análisis multidimensional de organizaciones públicas y los aportes de Aldo Schlemenson), la problemática del Área de Personal del CURZAS se desagrega en sus dimensiones constitutivas:

#v(2pt)

#table(
  columns: (95pt, 1.6fr, 1.4fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 7pt, y: 5.5pt),
  table.header(
    text(fill: white, weight: "bold", size: 8pt)[Dimensión (INAP)],
    text(fill: white, weight: "bold", size: 8pt)[Manifestación Empírica en el CURZAS],
    text(fill: white, weight: "bold", size: 8pt)[Desafío para el Analista Organizacional]
  ),
  [
    *1. El Proyecto*
  ],
  [
    Disparidad entre el proyecto explícito de modernización digital (UNCo 100% electrónica) y los objetivos implícitos de resguardo legal conservador y control presencial.
  ],
  [
    Alinear los objetivos estratégicos de modernización con incentivos de gestión claros y certidumbre jurídica en los trámites.
  ],
  [
    *2. La Estructura*
  ],
  [
    Desfasaje entre el organigrama estático de los 90 y la red territorial dinámica de los 10 Nodos; manuales de funciones desconectados de las herramientas informáticas.
  ],
  [
    Rediseñar la estructura formal, oficializando la coordinación de nodos y tipificando puestos digitales en el escalafón nodocente.
  ],
  [
    *3. Condiciones de Trabajo*
  ],
  [
    Sobrecarga mental por doble registro (papel y digital), equipamiento informático obsoleto en ciertas oficinas y estrés por la falta de conectividad en los nodos rurales.
  ],
  [
    Inversión en infraestructura técnica, ergonomía y provisión de equipamiento seguro de firma digital para todas las jefaturas.
  ],
  [
    *4. Integración Psicosocial*
  ],
  [
    Sensación de vulnerabilidad en los agentes nodocentes ante la trazabilidad total de SUDOCU; desconfianza en la validez del certificado médico remitido por foto.
  ],
  [
    Implementar procesos de escucha activa y construcción de consensos para disipar ansiedades grupales ante el cambio tecnológico.
  ],
  [
    *5. El Sistema Político*
  ],
  [
    Equilibrio de poder entre el Decanato y las representaciones sindicales (ATUNyC / ADUNC); paritarias como órgano de co-decisión de las condiciones de trabajo.
  ],
  [
    Incorporar a los gremios desde el diseño de los procesos de despapelización, transformándolos en socios de la modernización.
  ],
  [
    *6. El Contexto*
  ],
  [
    Asfixia presupuestaria de las Universidades Nacionales por parte del gobierno nacional; dispersión geográfica de 1.000 km respecto a Neuquén y 300 km en la Línea Sur.
  ],
  [
    Diseñar soluciones de bajo costo basadas en software libre y convenios interinstitucionales con organismos provinciales y municipales.
  ]
)

- *Creatividad y Pensamiento Lateral:* Como postula el documento del INAP, los bloqueos burocráticos no se superan insistiendo en el pensamiento vertical (imponer más circulares o sanciones formales), sino activando el *pensamiento lateral*. En lugar de pelear contra la inercia del papel, se debe rediseñar el flujo informático para que el sistema electrónico ofrezca mayor seguridad jurídica que el archivo físico.

=== D. Modelos Organizativos y Mecanismos de Coordinación (Jorge Hintze)

El análisis del CURZAS confirma la tipología de *Jorge Hintze (2001)*:
- *Coexistencia de Modelos en el Ámbito Organizativo:* En la sede central de Viedma predomina el *modelo funcional* tradicional, articulado por *relaciones jerárquicas* verticales de autoridad (órdenes, circulares, resoluciones).
- *Transición a Redes Institucionales:* Para operar en el territorio norpatagónico (Línea Sur), el CURZAS se despliega como un *modelo de red institucional*, donde la coordinación no se basa en la jerarquía (el Decano no tiene autoridad sobre los intendentes de la Línea Sur), sino en *relaciones contractuales* (convenios específicos de colaboración) y *mecanismos de cooperación mutua*. La falla del sistema burocrático estriba en pretender gestionar los nodos territoriales con la lógica jerárquica de la sede central, en lugar de dotarlos de plataformas telemáticas descentralizadas y reglas de juego compartidas.

== Eje 6: Propuestas Estratégicas de Rediseño, Precisiones Jurídicas y Matriz de Indicadores

A partir del diagnóstico situacional y las dimensiones del análisis organizacional, se formulan propuestas de rediseño viables, ajustadas a derecho y respaldadas por una batería de indicadores con supuestos de trabajo explícitos.

=== A. Precisiones Jurídicas sobre la Validez Probatoria: Del Escaneo a la Firma Digital

#callout("Distinción Técnico-Jurídica Crítica (Ley N° 25.506 y CCCN)")[
  Para rediseñar el trámite de licencias médicas sin vulnerar la legalidad administrativa, es indispensable diferenciar tres figuras jurídicas que en la práctica administrativa suelen confundirse:
  1. *Documento Digitalizado / Escaneado Simple:* Es una mera reproducción digital fotográfica (imagen o PDF plano sin firma criptográfica). Jurídicamente constituye un *instrumento particular no firmado* (Art. 287 del Código Civil y Comercial de la Nación). Carece de presunción legal de autoría y de integridad; su fuerza probatoria queda sujeta a la apreciación judicial o cotejo con el original físico. Por tanto, *una resolución decanal no puede otorgar por sí sola "validez plena e incontrovertible" a un escaneo*, pues ello violaría normas de fondo y las directrices de auditoría de la AGN y la ANSES.
  2. *Documento Firmado Digitalmente (Ley N° 25.506):* Documento emitido mediante un certificado digital emitido por certificador licenciado. Goza de *presunción de autoría e integridad* (Arts. 7 y 8 Ley 25.506), equivaliendo plenamente a la firma ológrafa con inversión de la carga de la prueba.
  3. *Certificados Médicos Telemáticos (Ley N° 27.553):* La Ley Nacional de Recetas y Certificados Médicos Electrónicos exige que los certificados emitidos por profesionales de salud cuenten con firma electrónica o digital verificable en el Registro Federal de Profesionales de Salud (REFEPS).
]

A partir de este marco, la propuesta de supresión del papel se articula de forma jurídicamente viable en dos vertientes, *sujeta a la convalidación reglamentaria de Asuntos Jurídicos de la UNCo*:
- *Para Certificados Médicos Emitidos Digitalmente:* Aceptación automática e incorporación directa a SUDOCU cuando cuenten con firma digital verificable conforme Ley 27.553.
- *Para Certificados Emitidos en Papel Ológrafo:* Habilitar en SUDOCU un régimen de *Declaración Jurada del Agente con Deber de Custodia Personal del Original*. El agente escanea el documento para la instrucción inmediata del expediente bajo apercibimiento administrativo, pero *conserva en su poder el original físico en calidad de depositario legal* durante el plazo de prescripción laboral (2 a 5 años). La Dirección de Personal queda facultada a solicitar la exhibición física únicamente por muestreo aleatorio o ante fundadas sospechas de adulteración pericial. Esto suprime la ventanilla física y el doble archivo sin desproteger la legalidad.

=== B. Viabilidad Técnica de la Interoperabilidad SUDOCU $arrow.r$ SIU-Mapuche

La interoperabilidad se plantea como una *línea de desarrollo sujeta a evaluación técnica y aprobación por el Consorcio SIU / CIN y la Dirección General de TICs de la UNCo*, no como una solución inmediata llave en mano:

1. *Arquitectura e Interfaces:* Utilizar las APIs REST oficiales y los servicios de autenticación federada *SIU-Araí*. Al firmarse la Resolución en SUDOCU, un servicio web transmitirá la novedad estructurada en formato JSON hacia el módulo de novedades de SIU-Mapuche.
2. *Capa de Control y Trazabilidad Transaccional:* Para no vulnerar los principios de control interno (Ley N° 24.156), la integración *no inyectará los datos a ciegas en la nómina liquidada*. La información impactará en una *"Bandeja de Novedades Electrónicas Pre-Aprobadas"* en Mapuche. El operador liquidador verificará la consistencia del paquete de novedades y dará su conformidad mediante un proceso de validación ágil, con bitácora de auditoría (*logs* de usuario, fecha y firma).

=== C. Subrogancia Legal y Regulación del Silencio Administrativo

El pase automático ante demoras debe deslindar con rigor qué actos admiten elevación tácita y cuáles requieren dictamen expreso:
- *Actos de Mero Trámite Preparatorio:* En el visto bueno del Director de Departamento o Secretario (Carril 2), que sólo toma conocimiento de la inasistencia, se establece un *pase automático por vencimiento de plazo* a las 48 horas sin objeción fundada, elevando el expediente a Personal con constancia informática de elevación tácita.
- *Actos Sustantivos e Indelegables:* En la homologación clínica (Salud Ocupacional) y la firma de la Resolución Decanal (Decanato), *no es jurídicamente admisible el silencio positivo*, pues rige el principio del debido proceso adjetivo (Art. 1 Ley 19.549) y la responsabilidad del funcionario. En estos casos, el sistema disparará una *alerta de semáforo rojo* a las 48 horas y habilitará automáticamente la *subrogancia legal reglamentada* (Vicedecano/a o funcionario formalmente habilitado por resolución de reemplazo).

=== D. Matriz de Indicadores de Desempeño: Supuestos de Referencia y Métodos de Verificación

Para estructurar la futura evaluación empírica del procedimiento, se presenta la siguiente matriz dividida en indicadores propuestos, supuestos de referencia iniciales y métodos de verificación para la construcción de una línea de base comprobada:

#v(2pt)

#table(
  columns: (90pt, 1.25fr, 75pt, 1.25fr, 72pt),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { rgb("#f1f5f9") } else { white },
  stroke: (x, y) => if y == 0 { (bottom: 1.5pt + accent) } else { (top: 0.75pt + rgb("#cbd5e1"), bottom: 0.25pt + rgb("#e2e8f0"), left: 0.3pt + rgb("#e2e8f0"), right: 0.3pt + rgb("#e2e8f0")) },
  align: (col, row) => if row == 0 { left + horizon } else { left + top },
  inset: (x: 5.5pt, y: 5.5pt),
  table.header(
    text(fill: white, weight: "bold", size: 7.2pt)[Indicador Propuesto],
    text(fill: white, weight: "bold", size: 7.2pt)[Definición Operativa],
    text(fill: white, weight: "bold", size: 7.2pt)[Valor de Ref. Estimativo (Supuesto Inicial)],
    text(fill: white, weight: "bold", size: 7.2pt)[Método de Verificación (Línea de Base Comprobada)],
    text(fill: white, weight: "bold", size: 7.2pt)[Metas de Rediseño (6 m / 12 m)]
  ),
  [
    *1. Tiempo Medio de Tramitación* \
    #text(size: 6.8pt, fill: text-muted)[Código: TM-TLM]
  ],
  [
    Días hábiles promedio entre el aviso del agente y su impacto definitivo en SIU-Mapuche.
  ],
  [
    *Valor de referencia hipotético:* 18 días hábiles
  ],
  [
    Relevamiento de una muestra de 50 expedientes en SUDOCU en un período de 90 días, calculando la diferencia de marcas de tiempo entre carátula y pase final.
  ],
  [
    • 6m: 8 días \
    • 12m: $<= 3$ días
  ],
  [
    *2. Duplicación Documental en Papel* \
    #text(size: 6.8pt, fill: text-muted)[Código: TD-DP]
  ],
  [
    Proporción de trámites con certificado físico archivado en legajo de Personal además del digital.
  ],
  [
    *Supuesto de duplicación:* 100%, sujeto a verificación
  ],
  [
    Auditoría física por muestreo aleatorio sobre el archivo de la Dirección de Personal respecto al total de licencias iniciadas en el mes.
  ],
  [
    • 6m: 25% \
    • 12m: $< 5\%$
  ],
  [
    *3. Incidencia de Errores de Nómina* \
    #text(size: 6.8pt, fill: text-muted)[Código: TE-ARN]
  ],
  [
    Porcentaje de liquidaciones de sueldo con descuentos indebidos por licencias no cargadas a término.
  ],
  [
    *Escenario estimativo:* 14% de novedades
  ],
  [
    Cotejo entre los reclamos formales presentados ante la Dirección de Personal y el total de licencias médicas del período liquidado.
  ],
  [
    • 6m: 5% \
    • 12m: $< 1\%$
  ],
  [
    *4. Expedientes en Cola de Firma* \
    #text(size: 6.8pt, fill: text-muted)[Código: VE-BF]
  ],
  [
    Cantidad mensual promedio de expedientes con permanencia $> 48$ hs en bandejas de autoridades.
  ],
  [
    *Cantidad ilustrativa:* 22 expedientes
  ],
  [
    Extracción automatizada de reportes de auditoría de bandejas activas en la base de datos de SUDOCU.
  ],
  [
    • 6m: 6 exp. \
    • 12m: 0 exp. (subrogancias)
  ],
  [
    *5. Resoluciones con Firma Digital* \
    #text(size: 6.8pt, fill: text-muted)[Código: PR-FD]
  ],
  [
    Porcentaje de resoluciones de personal firmadas con certificado digital de Ley 25.506.
  ],
  [
    *Línea base estimada:* 70% de resoluciones
  ],
  [
    Revisión del registro oficial de actos administrativos del Decanato foliados digitalmente en SUDOCU.
  ],
  [
    • 6m: 95% \
    • 12m: 100%
  ],
  [
    *6. Cobertura Médica en Nodos* \
    #text(size: 6.8pt, fill: text-muted)[Código: CT-HMN]
  ],
  [
    Porcentaje de Nodos con homologación médica descentralizada vía convenio provincial.
  ],
  [
    *Supuesto inicial:* 0% (traslado forzoso), sujeto a verificación documental
  ],
  [
    Verificación de convenios bilaterales vigentes entre la UNCo y los hospitales cabecera de Río Negro.
  ],
  [
    • 6m: 50% (5 nodos) \
    • 12m: 100% (10 nodos)
  ]
)

#v(4pt)

#callout-dictamen("Dictamen Estratégico Final del Avance 3")[
  El rediseño organizacional del CURZAS debe conjugar *viabilidad técnica, apego estricto a las garantías jurídicas y metas verificables de gestión*. Solo mediante una gobernanza informada por indicadores empíricos contrastables, el reconocimiento de la validez documental conforme a derecho, la articulación en red con la salud pública provincial y la interoperabilidad estandarizada por el CIN, la universidad transformará su inercia burocrática tradicional en una gestión pública ágil, inclusiva y transparente en el territorio norpatagónico.
]

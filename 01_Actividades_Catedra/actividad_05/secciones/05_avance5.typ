#import "/Actividades/entregables/actividad_02/modulos/config/estilos.typ": *
#import "/Actividades/entregables/actividad_02/modulos/components/cajas.typ": *

#show table: set par(justify: false)
#show table: set text(hyphenate: false)

// ==============================================================================
// SECCIÓN: AVANCE 5 — SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN
// UNIDAD V — VERSIÓN PRECISA, ACTUALIZADA A OCTUBRE 2026 Y CON CIERRE VISUAL
// ==============================================================================

#avance-banner(
  "AVANCE 5: Sistemas de Control, Tablero de Comando y Evaluación",
  "Medición del Desempeño, Auditoría y Transparencia en el CURZAS — UNCo (Unidad V)"
)

La evaluación y el control constituyen el cierre del ciclo de planeamiento institucional. Siguiendo a *Martínez Nogueira (2016)* y *Feinstein (2016)*, evaluar en el sector público excede la verificación formal de legalidad: implica contrastar intenciones con consecuencias reales para alimentar el aprendizaje organizacional y la rendición de cuentas. En un organismo donde el Inciso 1 absorbe el 90,2% del presupuesto y conviven la autonomía universitaria (Art. 75 inc. 19 CN), la poligobernanza en 10 nodos territoriales y la transición digital (SUDOCU/SIU-Mapuche), la medición mediante tableros e indicadores (*Ramírez, 2023*) y el *análisis de contribución* (*Mayne, 2016*) resultan indispensables para evaluar la eficiencia del factor humano.

== 1. Organismos de Control Externo e Interno y Auditoría sobre Personal

#callout-pregunta[
  ¿Qué organismos auditan externa e internamente al organismo? ¿Cuándo fue la última auditoría formal realizada al organismo y qué observaciones se le formularon al área de personal?
]

En el marco de la *Ley N° 24.156* de Administración Financiera, la *Ley de Educación Superior N° 24.521* (Art. 59 bis) y el *Estatuto de la UNCo* (Ord. N° 470/93 y modif.), el CURZAS —como unidad académica de la Entidad/SAF 809 UNCo— se encuentra sujeto a un esquema mixto de fiscalización externa, interna y académica:

#v(2pt)
#align(left)[
  #text(weight: "bold", fill: primary, size: 8.6pt)[Tabla 5.1: Ecosistema de Organismos de Control Externo e Interno en el CURZAS / UNCo] \
  #text(size: 7.4pt, fill: text-muted, style: "italic")[Fuente: Elaboración propia en base a Ley 24.156, Ley 24.521, Estatuto UNCo, SIGEN (2025; Res. 299 y 311/2026) y registros AGN/UNCo.]
]
#v(2pt)

#table(
  columns: (72pt, 98pt, 105pt, 1.5fr),
  fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
  stroke: 0.45pt + border-subtle,
  align: left + top,
  inset: (x: 6.5pt, y: 5pt),
  table.header(
    text(fill: white, weight: "bold", size: 7.8pt)[Tipo de Control],
    text(fill: white, weight: "bold", size: 7.8pt)[Organismo Auditor],
    text(fill: white, weight: "bold", size: 7.8pt)[Dependencia y Norma],
    text(fill: white, weight: "bold", size: 7.8pt)[Alcance y Particularidad en el CURZAS / UNCo]
  ),
  [*Control Externo*],
  [*Auditoría General de la Nación (AGN)*],
  [Congreso de la Nación (Art. 85 CN, Ley 24.156, Art. 59 bis LES).],
  [Control posterior externo de estados contables, Cuenta de Inversión (SAF 809), transferencias del Tesoro (Fuente 11) y convenios específicos. Es el órgano externo reconocido por el CIN en resguardo de la autonomía.],
  [*Control Interno Propio*],
  [*Unidad de Auditoría Interna (UAI — UNCo)*],
  [Consejo Superior / Estatuto UNCo (Titular: Cr. Oscar Rebolledo).],
  [La UNCo es pionera al otorgar *rango estatutario* a su UAI, blindando su independencia funcional respecto del Rectorado de turno. Formula su PAT 2027 auditando legalidad, riesgos, haberes y seguimiento en *SISAC* en todas las sedes, incluido el CURZAS.],
  [*Órgano Rector de Control Interno*],
  [*Sindicatura General de la Nación (SIGEN)*],
  [PEN (*Normas SIGEN 2025*; *Res. 299 y 311/2026*, B.O. oct. 2026).],
  [Fija pautas técnicas de auditoría basada en riesgos (Principios 7, 8 y 12). Su competencia universitaria (restringida por dictamen PTN 2022 y rehabilitada a fines de 2024) se consolidó con la *Res. SIGEN N° 311/2026*, priorizando el rubro *"Personal y salarios"* en los PAT 2027.],
  [*Evaluación de Calidad*],
  [*CONEAU*],
  [Art. 44 Ley N° 24.521 (cada 6 años).],
  [Evaluación institucional externa sobre docencia, investigación, extensión y planta académica en Viedma y nodos regionales.]
)
#v(4pt)

*Última Auditoría Formal y Observaciones al Área de Personal:*
- *Periodicidad y marco normativo vigente (actualización octubre de 2026):* Según registros institucionales de la UNCo y del buscador oficial de la AGN, las revisiones externas integrales recientes de la *AGN* sobre la universidad se ubican en torno al ejercicio *2021* (junto con el seguimiento anual del SAF 809 en la Cuenta de Inversión y exámenes especiales), complementadas de forma continua por la *UAI estatutaria de la UNCo*. A partir de fines de 2024, la *SIGEN* reactivó su esquema de fiscalización sobre las universidades nacionales mediante dictamen de la Procuración del Tesoro de la Nación. Este marco se consolidó formalmente mediante las *Resoluciones SIGEN N° 299/2026* (B.O. 02/10/2026) y *N° 311/2026* (sancionada el 13/10/2026 y publicada en el B.O. N° 36.013 el 15/10/2026 bajo los _"Lineamientos complementarios SGN y pautas gerenciales Universidades Nacionales – UAI 2027"_). En dichas directivas, el órgano rector instruye expresamente a las UAI universitarias a incorporar en sus *Planes Anuales de Trabajo (PAT) 2027* la auditoría basada en riesgos sobre el rubro prioritario *Personal y Nómina Salarial*, exigiendo además el registro y monitoreo de observaciones y medidas correctivas en el sistema *SISAC* (Sistema de Seguimiento de Acciones Correctivas).
- *Foco y observaciones en Recursos Humanos:* Dado que la masa salarial absorbe entre el *90,2% y el 95%* de los recursos universitarios, las fiscalizaciones internas (UAI / *SIGEN 2025–2026*) sobre el Área de Personal —en sintonía con la Res. 311/2026— se concentran en: *(a)* trazabilidad entre los actos administrativos de designaciones, altas, bajas, presentismo y licencias (en transición de papel a *SUDOCU*) y su liquidación mensual efectiva en *SIU-Mapuche*; *(b)* control de legajos, dedicaciones, topes horarios e incompatibilidades docentes; y *(c)* correcta aplicación del *CCT 366/06*, *CCT 1246/15* y el adicional legal del 40% por Zona Desfavorable Patagónica. *Precisiones metodológicas:* En los repositorios abiertos de la AGN no constan informes individuales desagregados exclusivamente para la oficina de personal de la sede CURZAS Viedma, canalizándose los hallazgos operativos a nivel central de la Entidad 809 UNCo.

== 2. Evaluación Laboral Vigente y Tablero de Control Preliminar de RR. HH.

#callout-pregunta[
  ¿Qué metas cuantitativas o indicadores clave de desempeño (KPIs) utiliza formalmente la institución para evaluar el rendimiento laboral? Diseño de un Tablero de Control preliminar con al menos 3 KPIs específicos para medir la eficiencia de los recursos humanos.
]

*Diagnóstico de los Mecanismos Formales de Evaluación Vigentes:*
1. *Estamento Nodocente (CCT Decreto N° 366/06, Título IX):* El convenio prevé evaluaciones anuales de desempeño basadas en conocimiento del puesto, puntualidad, trabajo en equipo y capacitación. No obstante, las actas paritarias particulares entre la *UNCo y APUNC* evidencian un *diferimiento histórico* en la aplicación sistemática de dicha calificación ordinaria, suplido mediante mecanismos compensatorios y promociones paritarias por antigüedad.
2. *Estamento Docente (CCT Decreto N° 1246/15 y Estatuto UNCo):* Se evalúa mediante concursos públicos, reválidas periódicas, informes académicos anuales, categorización de investigación (SIGEVA) y encuestas estudiantiles de cátedra registradas en *SIU-Guaraní*.
3. *Brecha de Medición Estratégica:* Tal como advierte *Telma Ramírez (2023)*, el CURZAS opera principalmente con *registros administrativos de insumo y cumplimiento formal* (cantidad de cargos en *SIU-Mapuche* y Anuarios Estadísticos), careciendo de un *Tablero de Comando* con metas cuantitativas e indicadores de eficiencia, calidad y contribución (*Mayne, 2016*) vinculados al desempeño real del factor humano.

*Diseño de Tablero de Control Preliminar de Eficiencia en RR. HH. (CURZAS — UNCo):*
Siguiendo los criterios de pertinencia, validez y economía informativa de *Ramírez (2023)* y la ficha técnica de la *Guía Metodológica de Indicadores (PI-2027)*, se propone un tablero inicial con *4 KPIs* articulados a la matriz insumo-proceso-producto (*Avance 4*) y al ecosistema digital (*Avance 3*):

#v(2pt)
#block(breakable: false)[
  #align(left)[
    #text(weight: "bold", fill: primary, size: 8.6pt)[Tabla 5.2: Tablero de Control Preliminar de Eficiencia en Recursos Humanos — CURZAS (UNCo)] \
    #text(size: 7.4pt, fill: text-muted, style: "italic")[Fuente: Elaboración propia en base a Ramírez (2023), Mayne (2016) y Guía Metodológica para Diseño de Indicadores (PI-2027).]
  ]
  #v(2pt)

  #table(
    columns: (60pt, 90pt, 127pt, 80pt, 92pt),
    fill: (col, row) => if row == 0 { primary } else if calc.even(row) { bg-card } else { white },
    stroke: 0.45pt + border-subtle,
    align: left + top,
    inset: (x: 5pt, y: 4pt),
    table.header(
      text(fill: white, weight: "bold", size: 7.6pt)[Código / Tipo],
      text(fill: white, weight: "bold", size: 7.6pt)[Indicador (KPI)],
      text(fill: white, weight: "bold", size: 7.6pt)[Fórmula de Cálculo],
      text(fill: white, weight: "bold", size: 7.6pt)[Base → Meta],
      text(fill: white, weight: "bold", size: 7.6pt)[Frecuencia y Fuente]
    ),
    [*KPI-1* \ #text(size: 7pt, fill: text-muted)[Eficiencia de Procesos]],
    [*Tiempo Medio de Tramitación de Novedades de Personal*],
    [(Sumatoria de días hábiles desde alta/licencia en *SUDOCU* hasta impacto en *SIU-Mapuche*) / Total trámites\*],
    [Base: \~12 días\* \ *Meta: $<=$ 5 días hábiles*],
    [Mensual \ Logs SUDOCU y SIU-Mapuche],
    [*KPI-2* \ #text(size: 7pt, fill: text-muted)[Calidad y Control Interno]],
    [*Tasa de Liquidaciones Sin Observaciones ni Ajustes*],
    [(Liquidaciones mensuales sin rectificativas ni errores de carga / Total liquidaciones emitidas) × 100],
    [Base: \~94,0% \ *Meta: $>=$ 99,0%*],
    [Mensual \ Reportes Personal / UAI / SISAC],
    [*KPI-3* \ #text(size: 7pt, fill: text-muted)[Eficiencia y Capacitación]],
    [*Cobertura de Capacitación Digital del Personal (SUDOCU / SIU)*],
    [(Agentes nodocentes y de nodos certificados en herramientas digitales / Planta activa total) × 100],
    [Base: \~45,0% \ *Meta: $>=$ 90,0% anual*],
    [Semestral \ Paritaria / CCT 366/06],
    [*KPI-4* \ #text(size: 7pt, fill: text-muted)[Contribución Territorial]],
    [*Índice de Continuidad Docente en Nodos Regionales*],
    [(Comisiones y tutorías efectivamente sostenidas en los 10 nodos / Comisiones programadas) × 100],
    [Base: \~82,0% \ *Meta: $>=$ 95,0%*],
    [Cuatrimestral \ SIU-Guaraní y Coord. Nodos]
  )
  #v(2pt)
  #text(size: 6.9pt, fill: text-muted)[
    \* _Nota metodológica y trazabilidad:_ Las líneas base aproximadas #text(style: "normal", weight: "bold")[(\~)] son estimaciones diagnósticas preliminares (Avances 2 y 3) para parametrizar la medición inicial. En KPI-1, la base de #text(style: "normal", weight: "semibold")[\~12 días] refiere al promedio global de novedades de personal (altas, bajas y licencias ordinarias), diferenciándose de la línea base de #text(style: "normal", weight: "semibold")[\~18 días] hábiles estimada en el indicador TM-TLM de la Tabla 3.7 (Avance 3) para licencias médicas complejas con intervención de junta médica.
  ]
]
#v(4pt)

// ==============================================================================
// ESQUEMA VISUAL: FIGURA 5.1 — CIRCUITO DE CONTROL Y RETROALIMENTACIÓN
// ==============================================================================
#block(
  width: 100%,
  breakable: false,
  fill: bg-card,
  stroke: 0.5pt + border-subtle,
  radius: 5pt,
  inset: (x: 10pt, y: 7pt),
  [
    #align(center)[
      #text(weight: "bold", fill: primary, size: 8.6pt)[Figura 5.1: Circuito de Control, Auditoría (PAT 2027 / SISAC) y Retroalimentación en el CURZAS] \
      #text(size: 7.3pt, fill: text-muted, style: "italic")[Fuente: Elaboración propia en base a Ramírez (2023), Mayne (2016), Feinstein (2016) y Res. SIGEN N° 311/2026.]
    ]
    #v(5pt)
    #table(
      columns: (1fr, 14pt, 1fr, 14pt, 1fr, 14pt, 1fr),
      stroke: (x, y) => if calc.even(x) { 0.8pt + (if x == 6 { accent } else { primary }) } else { none },
      fill: (x, y) => if calc.even(x) { white } else { none },
      align: (x, y) => if calc.even(x) { center + top } else { center + horizon },
      inset: (x, y) => if calc.even(x) { (x: 5pt, y: 5pt) } else { 0pt },
      [
        #text(size: 7.2pt, weight: "bold", fill: primary)[1. OPERACIÓN Y REGISTRO]\
        #v(2pt)
        #text(size: 6.8pt, fill: text-main)[Novedades de RR. HH. en *SUDOCU*, nómina en *SIU-Mapuche* y cursadas en *SIU-Guaraní* (Sede + Nodos).]
      ],
      text(size: 11pt, weight: "bold", fill: accent)[→],
      [
        #text(size: 7.2pt, weight: "bold", fill: primary)[2. TABLERO DE COMANDO]\
        #v(2pt)
        #text(size: 6.8pt, fill: text-main)[Monitoreo de *4 KPIs* (*Ramírez*): tiempos ($<= 5$d), calidad ($>= 99%$), formación y contribución en nodos (*Mayne*).]
      ],
      text(size: 11pt, weight: "bold", fill: accent)[→],
      [
        #text(size: 7.2pt, weight: "bold", fill: primary)[3. AUDITORÍA Y RIESGOS]\
        #v(2pt)
        #text(size: 6.8pt, fill: text-main)[Control *UAI* estatutaria (PAT 2027, *Res. SIGEN 311/2026*), seguimiento en *SISAC* y control externo *AGN*.]
      ],
      text(size: 11pt, weight: "bold", fill: accent)[→],
      [
        #text(size: 7.2pt, weight: "bold", fill: rgb("#9a6e1a"))[4. EVALUACIÓN PRAGMÁTICA]\
        #v(2pt)
        #text(size: 6.8pt, fill: text-main)[Aprendizaje institucional (*Feinstein*): ajustes en paritaria *UNCo–APUNC* y apoyo a los 10 Nodos.]
      ]
    )
    #v(5pt)
    #rect(width: 100%, fill: bg-dictamen, stroke: (left: 2.5pt + accent, rest: 0.4pt + border-subtle), radius: 3pt, inset: (x: 8pt, y: 4.5pt))[
      #align(center)[
        #text(size: 7.0pt, weight: "semibold", fill: primary)[
          ↺ Bucle de Retroalimentación: Los hallazgos del Tablero y las alertas del SISAC retroalimentan la Planificación Situacional (Avance 2), el rediseño de flujos SUDOCU (Avance 3) y la defensa del Inciso 1 / Inciso 3 (Avance 4).
        ]
      ]
    ]
  ]
)
#v(3pt)

#callout-dictamen("Dictamen Final de Control y Evaluación (Unidad V)")[
  *Síntesis:* El CURZAS posee una sólida arquitectura de legalidad —respaldada por una *UAI con rango estatutario* única en el país, las nuevas pautas de control sobre personal (*Res. SIGEN N° 311/2026* y sistema *SISAC*) y el control externo de la *AGN*—, pero exhibe un déficit de *evaluación pragmática de gestión* (*Feinstein, 2016*). Implementar el Tablero de Comando y su circuito de retroalimentación permite cerrar la brecha entre la planificación política (*Avance 2*), los procesos digitales (*Avance 3*) y la rigidez presupuestaria del Inciso 1 (*Avance 4*), transformando el control burocrático en aprendizaje institucional continuo al servicio de la comunidad patagónica.
]

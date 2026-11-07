#import "/Actividades/entregables/actividad_02/modulos/config/estilos.typ": *
#import "/Actividades/entregables/actividad_02/modulos/components/cajas.typ": *

// 1. Portada Institucional Formal
#include "/Actividades/entregables/actividad_02/modulos/secciones/00_portada.typ"

// 2. Hoja Dedicada: Índice General de Contenidos
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
    #v(3pt)
    #line(length: 100%, stroke: 0.5pt + border-line)
  ],
  footer: [
    #line(length: 100%, stroke: 0.3pt + border-subtle)
    #v(3pt)
    #grid(
      columns: (1fr, auto, 1fr),
      align: (left + horizon, center + horizon, right + horizon),
      text(size: 8pt, fill: text-muted)[Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes],
      image("/assets/img/CURZAS.png", height: 13pt),
      text(size: 8pt, fill: text-muted)[
        #context [Página #counter(page).display("1") de #counter(page).final().at(0)]
      ]
    )
  ]
)

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

#pagebreak()

// 3. Cuerpo del Informe Modularizado (Versión Integral Consolidada: Avances 1, 2, 3 y 4)
#include "/Actividades/entregables/actividad_02/modulos/secciones/01_avance1.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/02_avance2_correccion.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/03_avance3.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/04_avance4.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/05_bibliografia.typ"


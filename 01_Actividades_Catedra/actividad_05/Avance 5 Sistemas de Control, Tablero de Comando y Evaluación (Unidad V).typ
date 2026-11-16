#import "/Actividades/entregables/actividad_02/modulos/config/estilos.typ": *
#import "/Actividades/entregables/actividad_02/modulos/components/cajas.typ": *

#set text(font: "Segoe UI", size: 9.2pt, fill: rgb("#24292f"), lang: "es")
#set par(justify: true, leading: 0.65em)
#show heading.where(level: 1): it => none
#show heading.where(level: 2): it => [
  #v(14pt)
  #box(rect(width: 3.5pt, height: 10.5pt, fill: accent, radius: 1pt))
  #h(5pt)
  #text(weight: "bold", size: 10.5pt, fill: primary)[#it.body]
  #v(4pt)
]
#show heading.where(level: 3): it => [
  #v(10pt)
  #text(weight: "bold", size: 9.3pt, fill: primary)[#it.body]
  #v(3pt)
]
#show heading.where(level: 4): it => [
  #v(8pt)
  #text(weight: "bold", size: 8.8pt, fill: rgb("#174075"))[#it.body]
  #v(3pt)
]
#show heading.where(level: 5): it => [
  #v(6pt)
  #text(weight: "bold", size: 8.4pt, fill: rgb("#0f2d59"))[#it.body]
  #v(2.5pt)
]

// 1. Portada Institucional Formal (Versión Final Integrada Unidades I a V)
#include "secciones/00_portada.typ"

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
  
  #show outline.entry.where(level: 1): set block(above: 1.0em)
  #show outline.entry.where(level: 1): set text(weight: "bold", fill: primary)
  #outline(
    title: none,
    depth: 2,
    indent: 1.5em
  )
]

#pagebreak()

// 3. Cuerpo del Informe Modularizado (Versión Integral Consolidada: Avances 1, 2, 3, 4 y 5)
#include "/Actividades/entregables/actividad_02/modulos/secciones/01_avance1.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/02_avance2_correccion.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/03_avance3.typ"
#pagebreak()
#include "/Actividades/entregables/actividad_02/modulos/secciones/04_avance4.typ"
#pagebreak()
#include "secciones/05_avance5.typ"
#pagebreak()
#include "secciones/06_bibliografia.typ"


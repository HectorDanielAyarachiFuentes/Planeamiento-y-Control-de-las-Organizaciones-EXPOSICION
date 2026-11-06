#import "../config/estilos.typ": *

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
    inset: (x: 16pt, y: 11pt),
    radius: 4pt,
    [
      #grid(
        columns: (1fr, auto),
        align: (left + horizon, right + horizon),
        [
          #text(fill: white, weight: "bold", size: 12pt, tracking: 0.03em)[#titulo] \
          #if subtitulo != "" [
            #v(3pt)
            #text(fill: rgb("#e2e8f0"), size: 8.8pt, style: "italic")[#subtitulo]
          ]
        ],
        text(fill: accent, size: 9pt, weight: "bold")[UNCo — CURZAS]
      )
    ]
  )
  #v(10pt)
]

// Componente: Caja Destacada General (Callout - Indivisible)
#let callout(title, body) = [
  #v(6pt)
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
  #v(6pt)
]

// Componente: Caja para Preguntas de Investigación Institucional
#let callout-pregunta(body) = [
  #v(7pt)
  #block(
    width: 100%,
    breakable: false,
    fill: bg-pregunta,
    stroke: (left: 3.5pt + primary, rest: 0.5pt + border-line),
    inset: (x: 12pt, y: 8.5pt),
    radius: (right: 4pt),
    [
      #text(weight: "bold", fill: primary, size: 8.2pt, tracking: 0.08em)[PREGUNTA DE INVESTIGACIÓN INSTITUCIONAL] \
      #v(3pt)
      #text(size: 8.9pt, fill: text-main, style: "italic")[#body]
    ]
  )
  #v(7pt)
]

// Componente: Caja para Dictámenes y Conclusiones de Eje
#let callout-dictamen(title, body) = [
  #v(7pt)
  #block(
    width: 100%,
    breakable: false,
    fill: bg-dictamen,
    stroke: (left: 3.5pt + accent, rest: 0.5pt + border-subtle),
    inset: (x: 12pt, y: 8.5pt),
    radius: (right: 4pt),
    [
      #text(weight: "bold", fill: rgb("#9a6e1a"), size: 8.2pt, tracking: 0.08em)[#upper(title)] \
      #v(3pt)
      #text(size: 8.9pt, fill: text-main)[#body]
    ]
  )
  #v(7pt)
]

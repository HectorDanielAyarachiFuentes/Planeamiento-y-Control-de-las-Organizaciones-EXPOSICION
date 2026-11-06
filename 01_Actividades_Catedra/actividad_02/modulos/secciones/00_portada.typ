#import "../config/estilos.typ": *
#import "../components/cajas.typ": *

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
  #meta-row("Estudiante:", "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes")
  #meta-row("Equipo Docente:", "Mgter. Susana Lopez — Lic. Carlos Jauge")
  #meta-row("Carrera:", "Licenciatura en Recursos Humanos")
  #meta-row("Institución Analizada:", "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)")
  #meta-row("Sede Académica:", "Viedma, Provincia de Río Negro")
  #meta-row("Marco Teórico:", "Bertranou, Matus, Cao & Blutman, Aguilar Villanueva, Abal Medina, Oszlak, Hintze, Forester, INAP, Campos et al., Zeller")
  #meta-row("Ciclo Lectivo:", "2026")
  
  #align(bottom + center)[
    #text(size: 8.5pt, fill: rgb("#969696"))[Viedma, Río Negro — República Argentina]
  ]
]

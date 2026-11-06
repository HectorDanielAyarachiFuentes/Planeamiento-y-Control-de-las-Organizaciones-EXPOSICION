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
#let border-line = rgb("#cbd5e1")   // Gris claro para líneas divisorias institucionales (0.5pt)
#let bg-pregunta = rgb("#f0f4f9")   // Azul pastel muy suave para preguntas de investigación
#let bg-dictamen = rgb("#fdfcf7")   // Fondo cálido sutil para dictámenes y conclusiones de eje

// Estilos de Títulos y Jerarquía Visual (Regla del Doble Espacio Anterior: espacio superior >> inferior)
#show heading.where(level: 1): it => none // Oculto en el cuerpo porque se despliega en el banner estilizado

#show heading.where(level: 2): it => [
  #v(16pt)
  #box(rect(width: 3.5pt, height: 10.5pt, fill: accent, radius: 1pt))
  #h(5pt)
  #text(weight: "bold", size: 10.5pt, fill: primary)[#it.body]
  #v(5pt)
]

#show heading.where(level: 3): it => [
  #v(12pt)
  #text(weight: "bold", size: 9.3pt, fill: primary)[#it.body]
  #v(4pt)
]

#show heading.where(level: 4): it => [
  #v(9pt)
  #text(weight: "bold", size: 8.8pt, fill: rgb("#174075"))[#it.body]
  #v(3pt)
]

#show heading.where(level: 5): it => [
  #v(7pt)
  #text(weight: "bold", size: 8.4pt, fill: rgb("#0f2d59"))[#it.body]
  #v(2.5pt)
]

# 🏛️ Arquitectura Modular del Documento Typst — Avance 2 (CURZAS / UNCo)

Este documento sirve como **guía de arquitectura y manual técnico para agentes de Inteligencia Artificial (IA) y mantenedores humanos**. Explica la estructura de archivos, el sistema de diseño visual y las reglas de extensión para el informe académico de Planeamiento Organizacional.

---

## 📂 Mapa de Estructura de Directorios

```text
Actividades/entregables/actividad_02/
├── Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.pdf   # Entregable Final Compilado
└── modulos/
    ├── Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.typ   # Archivo Principal (Entrypoint Orquestador)
    ├── ESTRUCTURA_PROYECTO_IA.md                                                 # Guía técnica para IA y Desarrolladores
    ├── assets/
    │   └── RioNegro.svg                                                          # Mapa oficial SVG de Río Negro y Nodos Regionales
    ├── config/
    │   └── estilos.typ                                                       # Paleta de colores, tipografía, show rules y metadata
    ├── components/
    │   └── cajas.typ                                                         # Componentes visuales reutilizables (callouts, banners, meta-rows)
    └── secciones/
        ├── 00_portada.typ                                                    # Carátula Institucional limpia
        ├── 01_avance1.typ                                                    # Módulo de Contenido del Avance 1
        ├── 02_avance2.typ                                                    # Módulo de Contenido del Avance 2 (Ejes 1, 2 y 3)
        └── 03_bibliografia.typ                                               # Fuentes bibliográficas y normativas consolidadas
```

---

## 🎨 1. Sistema de Diseño Visual y Tokens (`modulos/config/estilos.typ`)

Todos los colores, fuentes y reglas de visualización se encuentran centralizados en [`estilos.typ`](file:///c:/Users/Ramoncito/.antigravity-ide/Planeamiento%20Organizacional/Actividades/entregables/actividad_02/modulos/config/estilos.typ).

### 🎨 Paleta de Colores Oficial (HEX / RGB)
* **`primary` (`#0f2d59`):** Azul Marino Institucional. Usado en títulos, banners, bordes de callout y encabezados de tabla.
* **`accent` (`#c89632`):** Dorado Elegante. Usado para acentos visuales, barras de subtítulo y dictámenes.
* **`text-main` (`#1f2937`):** Gris Carbón. Color principal de lectura.
* **`text-muted` (`#6b7280`):** Gris Suave. Usado en metadatos, pies de página y leyendas.
* **`bg-card` (`#f8fafc`):** Fondo Neutro Suave para tablas y cajas.
* **`border-subtle` (`#e2e8f0`):** Bordes sutiles de 0.5pt.
* **`bg-pregunta` (`#f0f4f9`):** Fondo pastel suave para cajas de preguntas de investigación.
* **`bg-dictamen` (`#fdfcf7`):** Fondo cálido suave para conclusiones y dictámenes teóricos.

### 📐 Tipografía y Jerarquía
* **Fuente Base:** `Segoe UI`, tamaño `9.2pt`, interlineado `0.65em`, justificado completo.
* **Jerarquía de Encabezados:**
  * `Heading Level 1`: Oculto en el flujo normal, se renderiza a través de `#avance-banner(...)`.
  * `Heading Level 2`: Subtítulo principal con indicador lateral dorado de `3.5pt`.
  * `Heading Level 3`: Subtítulo secundario en azul primario (`9.3pt`, `bold`).
  * `Heading Level 4 & 5`: Encabezados menores en tonalidades de azul profundo.

---

## 🧩 2. Componentes Reutilizables (`modulos/components/cajas.typ`)

Los componentes de interfaz de usuario en Typst están definidos en [`cajas.typ`](file:///c:/Users/Ramoncito/.antigravity-ide/Planeamiento%20Organizacional/Actividades/entregables/actividad_02/modulos/components/cajas.typ):

1. **`meta-row(label, value)`:**
   Renderiza una fila de metadatos con etiqueta en negrita primaria y divisor inferior horizontal sutil.
2. **`avance-banner(titulo, subtitulo)`:**
   Crea un banner azul institucional con título nivel 1 que automáticamente se añade al Índice de Contenidos.
3. **`callout(title, body)`:**
   Caja de destacado general con borde izquierdo en color `primary` de `3.5pt`. Indivisible entre páginas (`breakable: false`).
4. **`callout-pregunta(body)`:**
   Caja en tono azul pastel dedicada a las Preguntas de Investigación Institucionales de la cátedra.
5. **`callout-dictamen(title, body)`:**
   Caja en tono cálido con borde izquierdo en dorado `accent` (`#c89632`) para conclusiones teóricas y dictámenes de eje.

---

## 🔄 3. Mecanismo de Importación e Inclusión en Typst

### Archivo Principal (`modulos/Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.typ`)
Funciona como el **orquestador central**:
```typst
#import "config/estilos.typ": *
#import "components/cajas.typ": *

#include "secciones/00_portada.typ"
// (Configuración del índice y encabezados/pies de página)
#include "secciones/01_avance1.typ"
#pagebreak()
#include "secciones/02_avance2.typ"
#pagebreak()
#include "secciones/03_bibliografia.typ"
```

### Submódulos de Sección (`01_avance1.typ`, `02_avance2.typ`, etc.)
Cada sección importará los estilos y componentes en sus primeras líneas:
```typst
#import "../config/estilos.typ": *
#import "../components/cajas.typ": *
```

---

## 🚀 4. Guía para la IA / Mantenedores al Extender el Documento

Cuando la IA o un desarrollador deba **agregar una nueva sección o corregir texto**:

1. **NO editar el archivo principal para redactar contenidos.** El archivo `.typ` orquestador solo debe estructurar el flujo general.
2. **Para agregar el Avance 3 u otras secciones:**
   * Crear un nuevo archivo en `modulos/secciones/03_avance3.typ`.
   * Incluir al inicio las líneas `#import "../config/estilos.typ": *` y `#import "../components/cajas.typ": *`.
   * Agregar `#avance-banner("AVANCE 3: ...", "...")` como encabezado.
   * Utilizar los componentes `callout-pregunta` y `callout-dictamen` para mantener la identidad del informe.
   * Agregar `#pagebreak()` e `#include "secciones/03_avance3.typ"` en el archivo principal `modulos/Avance_2_...typ`.
3. **Manejo de Imágenes:**
   * Las imágenes institucionales globales residen en `/assets/img/CURZAS.png`.
   * Las imágenes locales de la actividad residen en `modulos/assets/` (se acceden como `../assets/RioNegro.svg` desde `modulos/secciones/`).

---

## ⚙️ 5. Comando de Compilación y Validación

Para compilar el proyecto y generar la versión PDF final en `entregables/actividad_02/`:

```powershell
# Opción 1: Compilación con binario de Typst CLI (si está en el PATH)
typst compile --root "." "Actividades\entregables\actividad_02\modulos\Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.typ" "Actividades\entregables\actividad_02\Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.pdf"

# Opción 2: Compilación con paquete de Python 'typst' (Recomendado en este entorno)
python -c "import typst; typst.compile('Actividades/entregables/actividad_02/modulos/Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.typ', output='Actividades/entregables/actividad_02/Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi.pdf', root='.')"
```

*Nota: Siempre verificar que el PDF se actualice correctamente en `entregables/avance 2/` sin errores de compilación.*

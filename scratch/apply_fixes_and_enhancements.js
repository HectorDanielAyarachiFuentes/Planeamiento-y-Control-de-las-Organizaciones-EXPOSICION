/**
 * apply_fixes_and_enhancements.js
 * 1. Mejora el icono SVG de Accesibilidad con un diseño estilizado, profesional y proporcionado (emblema circular WCAG / Apple / ONU).
 * 2. Habilita la lectura completa de todos los botones de la interfaz (botones de cerrar, navegación, herramientas, pestañas, controles).
 * 3. Corrige todas las referencias remanentes de "4 Avances" a "5 Avances" (en Filmina 1, Filmina 2 y Pestaña de Consignas).
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'css', 'styles.css');
const appPath = path.join(rootDir, 'js', 'app.js');
const dataPath = path.join(rootDir, 'data', 'presentacion_data.js');

console.log('Iniciando aplicación de mejoras y correcciones...');

// ============================================================================
// 1. MEJORAR ICONO SVG EN INDEX.HTML
// ============================================================================
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Nuevo icono SVG estético y profesional (emblema circular inclusivo con figura humana redondeada y proporciones áureas)
const newSvgPerson = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9.5" stroke-width="1.6" opacity="0.85"/>
              <circle cx="12" cy="7" r="2.1" fill="currentColor" stroke="none"/>
              <path d="M5.8 11.2c1.9-1 4-1.5 6.2-1.5s4.3.5 6.2 1.5" stroke-width="1.8"/>
              <path d="M12 9.5v5.2" stroke-width="2"/>
              <path d="M9 20l3-5.3 3 5.3" stroke-width="1.8"/>
            </svg>`;

const newSvgDockPerson = `<svg class="tts-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9.5" stroke-width="1.6" opacity="0.85"/>
        <circle cx="12" cy="7" r="2.1" fill="currentColor" stroke="none"/>
        <path d="M5.8 11.2c1.9-1 4-1.5 6.2-1.5s4.3.5 6.2 1.5" stroke-width="1.8"/>
        <path d="M12 9.5v5.2" stroke-width="2"/>
        <path d="M9 20l3-5.3 3 5.3" stroke-width="1.8"/>
      </svg>`;

// Reemplazar icono en #btn-toggle-tts
const oldBtnRegex = /(<button class="btn-tool" id="btn-toggle-tts"[\s\S]*?>)[\s\S]*?(<span class="tool-text">Accesible<\/span>)/;
if (oldBtnRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldBtnRegex, `$1\n            ${newSvgPerson}\n            $2`);
  console.log('✓ Icono SVG de #btn-toggle-tts actualizado a diseño estilizado con emblema circular.');
}

// Reemplazar icono en dock flotante
const oldDockSvgRegex = /<svg class="tts-dock-icon"[\s\S]*?<\/svg>/;
if (oldDockSvgRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldDockSvgRegex, newSvgDockPerson);
  console.log('✓ Icono SVG de dock flotante actualizado a diseño estilizado.');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');

// ============================================================================
// 2. CORREGIR "4 AVANCES" EN DATA/PRESENTACION_DATA.JS
// ============================================================================
let dataContent = fs.readFileSync(dataPath, 'utf8');
if (dataContent.includes('"esquema": "Panorama Global de los 4 Avances"')) {
  dataContent = dataContent.replace(
    '"esquema": "Panorama Global de los 4 Avances"',
    '"esquema": "Panorama Global de los 5 Avances"'
  );
  console.log('✓ Corregido esquema en Filmina 2: "Panorama Global de los 5 Avances".');
  fs.writeFileSync(dataPath, dataContent, 'utf8');
}

// ============================================================================
// 3. CORREGIR "4 AVANCES" Y EXPANDIR LECTURA DE BOTONES EN JS/APP.JS
// ============================================================================
let appContent = fs.readFileSync(appPath, 'utf8');

// A. Corregir tarjeta de Filmina 1: "Defensa Integral de los 4 Avances" -> "5 Avances"
if (appContent.includes('title: "Defensa Integral de los 4 Avances"')) {
  appContent = appContent.replace(
    'title: "Defensa Integral de los 4 Avances",\r\n          sub: "Diagnóstico Situado, Estructura Burocrática, Poligobernanza y Presupuesto",',
    'title: "Defensa Integral de los 5 Avances",\r\n          sub: "Gobernanza, Planificación Situacional, Procesos Digitales, Presupuesto y Sistemas de Control",'
  );
  appContent = appContent.replace(
    'title: "Defensa Integral de los 4 Avances",\n          sub: "Diagnóstico Situado, Estructura Burocrática, Poligobernanza y Presupuesto",',
    'title: "Defensa Integral de los 5 Avances",\n          sub: "Gobernanza, Planificación Situacional, Procesos Digitales, Presupuesto y Sistemas de Control",'
  );
  console.log('✓ Corregida tarjeta de Filmina 1: "Defensa Integral de los 5 Avances".');
}

// B. Corregir cabecera de consignas en el drawer: "4 Avances" -> "5 Avances" y "4 Unidades" -> "5 Unidades"
if (appContent.includes('<span class="consigna-total-badge">4 Avances</span>')) {
  appContent = appContent.replace(
    '<span class="consigna-total-badge">4 Avances</span>',
    '<span class="consigna-total-badge">5 Avances</span>'
  );
  appContent = appContent.replace(
    'para cada una de las 4 Unidades de la investigación en el CURZAS.',
    'para cada una de las 5 Unidades de la investigación en el CURZAS.'
  );
  console.log('✓ Corregidas referencias de cabecera en pestaña de consignas a 5 Avances y 5 Unidades.');
}

// C. Reemplazar handlePointerOverTTS y handleFocusInTTS con la nueva lógica completa y getAccessibleLabelForElement
const methodIdx = appContent.indexOf('handlePointerOverTTS(e) {');
if (methodIdx !== -1) {
  const startIdx = appContent.lastIndexOf('  /**', methodIdx);
  const endIdx = appContent.lastIndexOf('  /**', appContent.indexOf('readCurrentSlide() {', methodIdx));

  if (startIdx !== -1 && endIdx !== -1) {
    const newTTSMethods = `  /**
   * Obtiene la etiqueta accesible, clara y bien estructurada para cualquier elemento,
   * incluyendo botones de cerrar, botones de herramientas, navegación, pestañas, controles y texto.
   */
  getAccessibleLabelForElement(target) {
    if (!target) return "";

    // 1. Botones de cerrar (cruces ✕ o botones de cierre en modales, notas, visor y dock)
    const isCloseBtn = target.matches(".btn-close, .btn-notes-close, .notes-close, .tts-dock-close") ||
                       target.closest(".btn-close, .btn-notes-close, .notes-close, .tts-dock-close") ||
                       (target.tagName === "BUTTON" && (target.id.includes("close") || target.className.includes("close")));

    if (isCloseBtn) {
      const btn = target.closest("button") || target;
      const titleAttr = btn.getAttribute("title") || btn.getAttribute("aria-label");
      if (titleAttr && titleAttr.trim()) {
        return \`Botón: \${this.cleanShortcutHint(titleAttr)}\`;
      }
      if (btn.id === "btn-close-notes") return "Botón: Cerrar teleprómpter del orador";
      if (btn.id === "btn-close-drawer") return "Botón: Cerrar respaldo metodológico";
      if (btn.id === "btn-close-svg") return "Botón: Cerrar visor de diagramas";
      if (btn.id === "btn-close-doc") return "Botón: Cerrar visor de documento";
      if (btn.id === "btn-close-shortcuts") return "Botón: Cerrar ventana de atajos";
      if (btn.id === "btn-close-slides-index") return "Botón: Cerrar índice de filminas";
      if (btn.id === "tts-btn-close") return "Botón: Desactivar modo de accesibilidad";
      return "Botón: Cerrar";
    }

    // 2. Botones de navegación y acción principales
    const isButtonOrInteractive = target.matches("button, a, [role='button'], input, .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge") ||
                                  target.closest("button, a, [role='button'], .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge");

    if (isButtonOrInteractive) {
      const btn = target.closest("button, a, [role='button'], .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge") || target;

      // Pestañas del Drawer de Respaldo
      if (btn.classList.contains("drawer-tab")) {
        const tabNames = {
          "autores": "Autores clave",
          "normativa": "Normativa y estatuto",
          "territorio": "Red territorial",
          "faq": "Preguntas frecuentes del jurado",
          "svgs": "Diagramas y dispositivos",
          "consignas": "Consignas oficiales PEDCO",
          "avance4": "Avance 4 Presupuesto",
          "catedra": "Material de cátedra"
        };
        const tabKey = btn.getAttribute("data-tab");
        const tabTitle = tabNames[tabKey] || btn.innerText || btn.textContent || "";
        const isActive = btn.classList.contains("active");
        return \`Pestaña: \${tabTitle}\${isActive ? ", seleccionada" : ""}\`;
      }

      // Estaciones del indicador inferior
      if (btn.classList.contains("station-dot")) {
        const slideIdx = btn.getAttribute("data-slide-index") || "";
        const isActive = btn.classList.contains("active");
        return \`Estación: Filmina \${slideIdx}\${isActive ? ", filmina actual" : ""}\`;
      }

      // Contador de filminas / índice general
      if (btn.id === "slide-counter-badge") {
        return "Botón: Abrir índice de los 5 Avances y 29 filminas";
      }

      // Controles de cronómetro
      if (btn.id === "btn-timer-toggle") return "Botón: Iniciar o pausar cronómetro";
      if (btn.id === "btn-timer-reset") return "Botón: Reiniciar cronómetro a 17 minutos";

      // Botones de navegación de filminas
      if (btn.id === "btn-prev" || btn.id === "btn-notes-prev") return "Botón: Filmina anterior";
      if (btn.id === "btn-next" || btn.id === "btn-notes-next") return "Botón: Filmina siguiente";

      // Herramientas de visualización y orador
      if (btn.id === "btn-view-text") return "Botón: Ver texto, priorizar lectura amplia";
      if (btn.id === "btn-view-3d") return "Botón: Ver objeto, centrar escultura 3D";
      if (btn.id === "btn-reset-3d") return "Botón: Centrar y restablecer rotación 3D";
      if (btn.id === "btn-toggle-notes") return "Botón: Abrir guion y teleprómpter del orador";
      if (btn.id === "btn-toggle-drawer") return "Botón: Abrir respaldo metodológico para el jurado";
      if (btn.id === "btn-toggle-tts") return "Botón: Modo accesibilidad y lector de voz";
      if (btn.id === "btn-toggle-fullscreen") return "Botón: Pantalla completa";
      if (btn.id === "btn-toggle-shortcuts") return "Botón: Ver atajos de teclado";

      // Controles del teleprómpter
      if (btn.id === "btn-read-notes-tts") return "Botón: Leer guion del orador en voz alta";
      if (btn.id === "btn-notes-font-inc") return "Botón: Aumentar tamaño de letra";
      if (btn.id === "btn-notes-font-dec") return "Botón: Disminuir tamaño de letra";

      // Controles de zoom y visor SVG
      if (btn.id === "btn-svg-zoom-in") return "Botón: Acercar diagrama";
      if (btn.id === "btn-svg-zoom-out") return "Botón: Alejar diagrama";
      if (btn.id === "btn-svg-reset") return "Botón: Restablecer zoom al cien por ciento";
      if (btn.id === "btn-svg-fit") return "Botón: Ajustar diagrama al tamaño de la pantalla";
      if (btn.id === "btn-svg-maximize" || btn.id === "btn-doc-maximize") return "Botón: Maximizar visor";

      // Controles del dock flotante
      if (btn.id === "tts-btn-read-slide") return "Botón: Leer contenido de la filmina actual";
      if (btn.id === "tts-btn-read-notes") return "Botón: Leer guion del orador";
      if (btn.id === "tts-btn-pause") return "Botón: Pausar o reanudar lectura de voz";
      if (btn.id === "tts-btn-stop") return "Botón: Detener voz";
      if (btn.id === "tts-btn-close") return "Botón: Desactivar modo accesibilidad";

      // Si tiene aria-label o title
      const ariaLabel = btn.getAttribute("aria-label");
      if (ariaLabel && ariaLabel.trim()) {
        return \`Botón: \${this.cleanShortcutHint(ariaLabel)}\`;
      }
      const title = btn.getAttribute("title");
      if (title && title.trim()) {
        return \`Botón: \${this.cleanShortcutHint(title)}\`;
      }

      // Si tiene texto interno visible
      const rawText = btn.innerText || btn.textContent || "";
      const clean = rawText.replace(/[✕xX▶◀→←⏱🎯💡❓🏛️⚙️🛑📊📁🔍📌🔑⚖️✨🚨🏢]/g, " ").replace(/\\s+/g, " ").trim();
      if (clean && clean.length > 0) {
        return \`Botón: \${clean}\`;
      }
    }

    // 3. Enlaces
    if (target.tagName === "A" || target.closest("a")) {
      const link = target.closest("a") || target;
      const title = link.getAttribute("title") || link.getAttribute("aria-label") || link.innerText || link.textContent || "";
      return \`Enlace: \${title.trim()}\`;
    }

    // 4. Elementos de contenido textual estándar
    const ariaLabel = target.getAttribute("aria-label");
    if (ariaLabel && ariaLabel.trim().length > 2) {
      return ariaLabel;
    }

    const title = target.getAttribute("title");
    if (title && title.trim().length > 2 && (!target.innerText || target.innerText.trim().length <= 2)) {
      return title;
    }

    return target.innerText || target.textContent || "";
  }

  /**
   * Limpia abreviaturas o paréntesis de atajos de teclado para que suenen elegantes al hablar
   */
  cleanShortcutHint(text) {
    if (!text) return "";
    let str = String(text);
    str = str.replace(/\\(Tecla\\s*([A-Z0-9?]+)\\)/gi, ", tecla $1");
    str = str.replace(/\\(([A-Z0-9?])\\)/gi, ", tecla $1");
    str = str.replace(/\\(Esc\\)/gi, ", tecla Escape");
    str = str.replace(/\\([←→↑↓\\/ \\wáéíóúÁÉÍÓÚ-]+\\)/g, "");
    return str.replace(/\\s+/g, " ").trim();
  }

  /**
   * Escucha el paso del ratón por elementos de texto o botones interactivos para narrarlos
   */
  handlePointerOverTTS(e) {
    if (!this.ttsActive) return;

    // Selectores amplios que incluyen botones, controles interactivos y contenido
    const selector = [
      // Botones y controles
      "button",
      "a",
      "[role='button']",
      ".btn-close",
      ".btn-tool",
      ".btn-nav",
      ".btn-notes-action",
      ".btn-font-size",
      ".btn-teleprompter-nav",
      ".btn-svg-tool",
      ".btn-doc-tool",
      ".drawer-tab",
      ".station-dot",
      ".slide-counter-badge",
      ".tts-dock-btn",
      ".tts-dock-close",
      // Contenido de filmina
      ".slide-bullet-item",
      ".slide-bullets li",
      ".slide-bullets p",
      ".slide-title",
      ".slide-subtitle",
      ".slide-badge",
      ".slide-meta-badge",
      ".intro-card",
      ".card-situada",
      ".grid-card",
      ".flujo-step",
      ".foda-card",
      ".actor-card",
      ".conclusion-summary-card",
      ".avance-summary-card",
      ".hud-card",
      ".station-badge",
      // Teleprómpter y notas
      ".teleprompter-speech-card",
      ".speech-para",
      ".teleprompter-obj-card",
      ".teleprompter-obj-title",
      ".teleprompter-obj-text",
      // Drawer y referencias
      ".drawer-card",
      ".biblio-item",
      ".faq-card",
      ".consigna-card",
      ".consigna-line"
    ].join(", ");

    const target = e.target.closest(selector);
    if (!target) return;

    // Si es un botón o interactivo, tomar el contenedor interactivo
    const actionableTarget = target.closest("button, a, [role='button']") || target;

    if (this.ttsCurrentTarget === actionableTarget) return;

    clearTimeout(this.ttsHoverTimeout);
    this.ttsHoverTimeout = setTimeout(() => {
      this.ttsCurrentTarget = actionableTarget;
      const textToRead = this.getAccessibleLabelForElement(actionableTarget);
      if (textToRead && textToRead.trim().length > 1) {
        this.speakText(textToRead, actionableTarget);
      }
    }, 180);
  }

  /**
   * Accesibilidad por teclado: Al tabular sobre elementos o botones, narrarlos de inmediato
   */
  handleFocusInTTS(e) {
    if (!this.ttsActive) return;
    const target = e.target;
    if (!target) return;
    const actionableTarget = target.closest("button, a, [role='button']") || target;
    const textToRead = this.getAccessibleLabelForElement(actionableTarget);
    if (textToRead && textToRead.trim().length > 1) {
      this.speakText(textToRead, actionableTarget);
    }
  }

`;

    appContent = appContent.slice(0, startIdx) + newTTSMethods + appContent.slice(endIdx);
    console.log('✓ Lógica completa de lectura de botones y controles interactivos integrada en js/app.js.');
  } else {
    console.warn('⚠️ No se pudieron calcular startIdx y endIdx.');
  }
}

fs.writeFileSync(appPath, appContent, 'utf8');

// ============================================================================
// 4. ACTUALIZAR ESTILOS EN CSS/STYLES.CSS PARA RESALTADO DE BOTONES REDONDOS
// ============================================================================
let cssContent = fs.readFileSync(cssPath, 'utf8');

if (!cssContent.includes('button.btn-close.tts-reading-target')) {
  const roundButtonsCss = `
/* Resaltado de botones redondos y de cierre en modo accesible */
button.btn-close.tts-reading-target,
.tts-dock-close.tts-reading-target,
.station-dot.tts-reading-target,
.btn-tool-icon-only.tts-reading-target {
  border-radius: 50% !important;
  background-color: rgba(2, 132, 199, 0.22) !important;
  outline-offset: 2px !important;
}

.btn-tool.tts-reading-target,
.btn-nav.tts-reading-target,
.drawer-tab.tts-reading-target,
.tts-dock-btn.tts-reading-target {
  background-color: rgba(2, 132, 199, 0.16) !important;
  outline: 2.5px solid #0284c7 !important;
  outline-offset: 2px !important;
}
`;
  cssContent += roundButtonsCss;
  console.log('✓ Reglas CSS de resaltado adaptativo para botones agregadas en css/styles.css.');
}

// Actualizar comentarios de "4 AVANCES" a "5 AVANCES"
cssContent = cssContent.replace('FILMINA 2: HOJA DE RUTA EJECUTIVA DE LOS 4 AVANCES', 'FILMINA 2: HOJA DE RUTA EJECUTIVA DE LOS 5 AVANCES');
cssContent = cssContent.replace('FILMINA 25: CONCLUSIÓN GENERAL DE LOS 4 AVANCES', 'FILMINA 25: CONCLUSIÓN GENERAL DE LOS 5 AVANCES');

fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('🎉 Todas las tareas aplicadas con éxito!');

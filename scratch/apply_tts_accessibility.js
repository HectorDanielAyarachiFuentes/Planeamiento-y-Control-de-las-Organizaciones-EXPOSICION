/**
 * apply_tts_accessibility.js
 * Aplica la implementación del Modo Accesibilidad con Lector de Voz Nativo (Web Speech API)
 * con icono de persona, lectura interactiva al apuntar con el cursor, y lectura de notas del orador.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'css', 'styles.css');
const appPath = path.join(rootDir, 'js', 'app.js');

console.log('Iniciando integración de Modo Accesible con Lector de Voz...');

// 1. MODIFICAR INDEX.HTML
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// A. Agregar #btn-toggle-tts en tool-group-academic si no está presente
if (!indexHtml.includes('id="btn-toggle-tts"')) {
  const ttsButtonHtml = `          <button class="btn-tool" id="btn-toggle-tts" title="Lector de Voz Accesible / Screen Reader (Tecla A)" aria-label="Modo Accesibilidad: Lector de Voz" aria-pressed="false">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <!-- Icono Universal de Persona / Accesibilidad -->
              <circle cx="12" cy="4.2" r="2.4"/>
              <path d="M12 6.6v7.4"/>
              <path d="M5.5 10.5h13"/>
              <path d="M8 20.5l4-6.5 4 6.5"/>
            </svg>
            <span class="tool-text">Accesible</span>
            <span class="tool-key">A</span>
          </button>\n`;
  
  const drawerBtnRegex = /(<button class="btn-tool" id="btn-toggle-drawer"[\s\S]*?<\/button>)/;
  if (drawerBtnRegex.test(indexHtml)) {
    indexHtml = indexHtml.replace(drawerBtnRegex, `$1\n${ttsButtonHtml}`);
    console.log('✓ Botón #btn-toggle-tts insertado en barra inferior (tool-group-academic).');
  } else {
    console.warn('⚠️ No se encontró #btn-toggle-drawer en index.html');
  }
}

// B. Agregar botón en teleprompter header para leer notas
if (!indexHtml.includes('id="btn-read-notes-tts"')) {
  const fontControlsTarget = `<div class="notes-font-controls"`;
  const readNotesBtnHtml = `<button class="btn-notes-action" id="btn-read-notes-tts" title="Leer guion y notas en voz alta (Voz nativa)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>Leer Guion</span>
        </button>\n        `;
  indexHtml = indexHtml.replace(fontControlsTarget, `${readNotesBtnHtml}${fontControlsTarget}`);
  console.log('✓ Botón #btn-read-notes-tts insertado en encabezado del teleprómpter.');
}

// C. Agregar fila de atajo en shortcuts-modal
if (!indexHtml.includes('Lector de Voz Accesible (Cursor y Notas)')) {
  const shortcutTarget = `<div class="shortcut-row"><kbd>M</kbd><span>Respaldo Metodológico (Jurado)</span></div>`;
  const shortcutRowHtml = `\n      <div class="shortcut-row"><kbd>A</kbd><span>Lector de Voz Accesible (Cursor y Notas)</span></div>`;
  indexHtml = indexHtml.replace(shortcutTarget, `${shortcutTarget}${shortcutRowHtml}`);
  console.log('✓ Atajo Tecla A agregado en shortcuts-modal.');
}

// D. Agregar Dock Flotante de Accesibilidad
if (!indexHtml.includes('id="tts-floating-dock"')) {
  const dockHtml = `
  <!-- Dock Flotante de Accesibilidad y Control de Voz (TTS) -->
  <aside class="tts-floating-dock" id="tts-floating-dock" aria-label="Control de Lectura de Voz Accesible" style="display: none;">
    <div class="tts-dock-badge">
      <span class="tts-dock-pulse" aria-hidden="true"></span>
      <svg class="tts-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="4.2" r="2.4"/>
        <path d="M12 6.6v7.4"/>
        <path d="M5.5 10.5h13"/>
        <path d="M8 20.5l4-6.5 4 6.5"/>
      </svg>
      <div class="tts-dock-text">
        <span class="tts-dock-title">Lector de Voz Accesible Activo</span>
        <span class="tts-dock-subtitle">Apunta con el cursor para escuchar el contenido</span>
      </div>
    </div>
    <div class="tts-dock-actions">
      <button class="tts-dock-btn" id="tts-btn-read-slide" title="Leer filmina actual en voz alta">
        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><polygon points="6 4 16 10 6 16"/></svg>
        <span>Filmina</span>
      </button>
      <button class="tts-dock-btn" id="tts-btn-read-notes" title="Leer guion y notas del orador">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
          <rect x="7" y="2.5" width="6" height="8.5" rx="3"/>
          <path d="M4.5 8v1a5.5 5.5 0 0 0 11 0V8"/>
        </svg>
        <span>Notas</span>
      </button>
      <button class="tts-dock-btn" id="tts-btn-pause" title="Pausar o reanudar locución">
        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><rect x="5" y="4" width="3.5" height="12"/><rect x="11.5" y="4" width="3.5" height="12"/></svg>
        <span id="tts-btn-pause-text">Pausar</span>
      </button>
      <button class="tts-dock-btn tts-dock-btn-stop" id="tts-btn-stop" title="Detener lectura de voz">
        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><rect x="5" y="5" width="10" height="10" rx="1"/></svg>
        <span>Detener</span>
      </button>
      <button class="tts-dock-close" id="tts-btn-close" title="Desactivar modo accesibilidad (A)">✕</button>
    </div>
  </aside>\n`;

  const scriptTagTarget = '<!-- Librerías Externas y Módulos de la Aplicación -->';
  indexHtml = indexHtml.replace(scriptTagTarget, `${dockHtml}\n  ${scriptTagTarget}`);
  console.log('✓ Dock flotante #tts-floating-dock insertado.');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');

// 2. MODIFICAR CSS/STYLES.CSS
let cssContent = fs.readFileSync(cssPath, 'utf8');
if (!cssContent.includes('.tts-floating-dock')) {
  const ttsCss = `
/* ==========================================================================
   MODO ACCESIBILIDAD UNIVERSAL: LECTOR DE VOZ NATIVO (TTS & SCREEN READER)
   ========================================================================== */

/* Botón de la barra inferior con icono de persona */
.btn-tool#btn-toggle-tts {
  position: relative;
  transition: all 0.25s ease;
}

.btn-tool#btn-toggle-tts.active {
  background: rgba(14, 116, 144, 0.14) !important;
  border-color: #0284c7 !important;
  color: #0369a1 !important;
  box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.22), 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}

.btn-tool#btn-toggle-tts.active .btn-icon {
  stroke: #0284c7 !important;
  animation: tts-person-pulse 2.2s infinite ease-in-out;
}

@keyframes tts-person-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.18);
  }
}

/* Indicador visual de elemento apuntado y leído */
.tts-reading-target {
  outline: 2.5px solid #0284c7 !important;
  outline-offset: 3px !important;
  background-color: rgba(2, 132, 199, 0.09) !important;
  border-radius: 6px !important;
  box-shadow: 0 0 16px rgba(2, 132, 199, 0.25) !important;
  transition: background-color 0.18s ease, outline 0.18s ease, box-shadow 0.18s ease !important;
}

/* En modo accesibilidad activo */
body.tts-mode-active .slide-bullet-item:hover,
body.tts-mode-active .teleprompter-speech-card:hover,
body.tts-mode-active .speech-para:hover,
body.tts-mode-active .card-situada:hover {
  cursor: pointer;
}

/* Botón en el teleprómpter para escuchar notas */
.btn-notes-action {
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #8f6b1e;
  border-radius: 6px;
  padding: 0.35rem 0.65rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
}

.btn-notes-action:hover {
  background: rgba(212, 175, 55, 0.22);
  border-color: var(--gold-main);
  color: #5c4410;
  transform: translateY(-1px);
}

.btn-notes-action.active-reading {
  background: #0284c7 !important;
  border-color: #0369a1 !important;
  color: #ffffff !important;
  box-shadow: 0 0 10px rgba(2, 132, 199, 0.4);
}

/* Dock flotante de accesibilidad y control de voz */
.tts-floating-dock {
  position: fixed;
  bottom: clamp(68px, 9vh, 85px);
  left: 50%;
  transform: translateX(-50%) translateY(25px);
  background: rgba(15, 23, 42, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(2, 132, 199, 0.5);
  color: #f8fafc;
  border-radius: 999px;
  padding: 0.35rem 0.5rem 0.35rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(2, 132, 199, 0.2);
  z-index: 1050;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 95vw;
}

.tts-floating-dock.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.tts-dock-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.tts-dock-pulse {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: tts-dock-pulse-anim 1.8s infinite ease-in-out;
  flex-shrink: 0;
}

@keyframes tts-dock-pulse-anim {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

.tts-dock-icon {
  width: 19px;
  height: 19px;
  stroke: #38bdf8;
  flex-shrink: 0;
}

.tts-dock-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.tts-dock-title {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.tts-dock-subtitle {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  color: #94a3b8;
}

.tts-dock-actions {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.3rem;
}

.tts-dock-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
  border-radius: 999px;
  padding: 0.3rem 0.65rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.tts-dock-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.tts-dock-btn.active {
  background: #0284c7;
  border-color: #38bdf8;
  color: #ffffff;
  box-shadow: 0 0 8px rgba(2, 132, 199, 0.4);
}

.tts-dock-btn-stop {
  color: #f87171;
}

.tts-dock-btn-stop:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.4);
}

.tts-dock-close {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  margin-left: 0.2rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.18s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tts-dock-close:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 768px) {
  .tts-floating-dock {
    bottom: 75px;
    flex-wrap: wrap;
    border-radius: 14px;
    padding: 0.5rem 0.8rem;
    gap: 0.5rem;
    justify-content: center;
  }
  .tts-dock-subtitle {
    display: none;
  }
}
`;
  cssContent += ttsCss;
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('✓ Estilos de accesibilidad agregados a css/styles.css.');
}

// 3. MODIFICAR JS/APP.JS
let appJs = fs.readFileSync(appPath, 'utf8');

// A. Agregar inicialización de variables TTS en constructor
if (!appJs.includes('this.ttsActive = false;')) {
  const constructorInitTarget = 'this.currentViewMode = "default";';
  const ttsVars = `this.currentViewMode = "default";

    // Variables de Modo Accesibilidad y Lector de Voz Nativo (Web Speech API)
    this.ttsActive = false;
    this.ttsSynth = (typeof window !== "undefined" && "speechSynthesis" in window) ? window.speechSynthesis : null;
    this.ttsVoice = null;
    this.ttsIsSpeaking = false;
    this.ttsIsPaused = false;
    this.ttsHoverTimeout = null;
    this.ttsCurrentTarget = null;
    this.ttsUtterance = null;
    this.ttsSequentialTimer = null;`;
  appJs = appJs.replace(constructorInitTarget, ttsVars);
  console.log('✓ Variables TTS añadidas al constructor en js/app.js.');
}

// B. Inicializar elementos del DOM de TTS en initDOMElements
if (!appJs.includes('this.btnToggleTTS = document.getElementById("btn-toggle-tts");')) {
  const domTarget = 'this.btnCloseShortcuts = document.getElementById("btn-close-shortcuts");';
  const ttsDom = `this.btnCloseShortcuts = document.getElementById("btn-close-shortcuts");

    // Elementos del Modo Accesible y Lector de Voz
    this.btnToggleTTS = document.getElementById("btn-toggle-tts");
    this.ttsFloatingDock = document.getElementById("tts-floating-dock");
    this.ttsBtnReadSlide = document.getElementById("tts-btn-read-slide");
    this.ttsBtnReadNotes = document.getElementById("tts-btn-read-notes");
    this.ttsBtnPause = document.getElementById("tts-btn-pause");
    this.ttsBtnPauseText = document.getElementById("tts-btn-pause-text");
    this.ttsBtnStop = document.getElementById("tts-btn-stop");
    this.ttsBtnClose = document.getElementById("tts-btn-close");
    this.btnReadNotesTTS = document.getElementById("btn-read-notes-tts");`;
  appJs = appJs.replace(domTarget, ttsDom);
  console.log('✓ Enlaces DOM de TTS añadidos a initDOMElements en js/app.js.');
}

// C. Llamar a initTTS en bindEvents
if (!appJs.includes('this.initTTS();')) {
  const bindEventsStart = 'bindEvents() {';
  appJs = appJs.replace(bindEventsStart, `bindEvents() {\n    this.initTTS();`);
  console.log('✓ this.initTTS() llamado en bindEvents().');
}

// D. Enlazar eventos de botones TTS y tecla 'A' en bindEvents()
if (!appJs.includes('this.btnToggleTTS.addEventListener("click"')) {
  const keyShortcutsHook = '} else if (e.key.toLowerCase() === "m") {';
  const ttsKeyHook = `} else if (e.key.toLowerCase() === "a") {
        this.toggleTTS();
      } else if (e.key.toLowerCase() === "m") {`;
  appJs = appJs.replace(keyShortcutsHook, ttsKeyHook);

  const eventsHook = 'this.btnToggleDrawer.addEventListener("click", () => this.toggleDrawer());';
  const ttsEvents = `this.btnToggleDrawer.addEventListener("click", () => this.toggleDrawer());

    // Eventos del Lector de Voz Accesible
    if (this.btnToggleTTS) {
      this.btnToggleTTS.addEventListener("click", () => this.toggleTTS());
    }
    if (this.ttsBtnReadSlide) {
      this.ttsBtnReadSlide.addEventListener("click", () => this.readCurrentSlide());
    }
    if (this.ttsBtnReadNotes) {
      this.ttsBtnReadNotes.addEventListener("click", () => this.readCurrentNotes());
    }
    if (this.btnReadNotesTTS) {
      this.btnReadNotesTTS.addEventListener("click", () => this.readCurrentNotes());
    }
    if (this.ttsBtnPause) {
      this.ttsBtnPause.addEventListener("click", () => this.pauseResumeTTS());
    }
    if (this.ttsBtnStop) {
      this.ttsBtnStop.addEventListener("click", () => this.stopTTS());
    }
    if (this.ttsBtnClose) {
      this.ttsBtnClose.addEventListener("click", () => this.toggleTTS(false));
    }

    // Escucha inteligente de puntero y cursor para lectura dinámica
    document.addEventListener("pointerover", (e) => this.handlePointerOverTTS(e));
    document.addEventListener("focusin", (e) => this.handleFocusInTTS(e));`;
  appJs = appJs.replace(eventsHook, ttsEvents);
  console.log('✓ Eventos y listeners de TTS vinculados en bindEvents().');
}

// E. Añadir métodos completos de TTS DENTRO de la clase PresentationApp
if (!appJs.includes('initTTS() {')) {
  const ttsMethods = `
  // ─── MÓDULO DE ACCESIBILIDAD Y LECTOR DE VOZ NATIVO (TTS) ──────────────────

  /**
   * Inicializa el sintetizador de voz nativo y selecciona voz en español preferente
   */
  initTTS() {
    if (!this.ttsSynth) return;
    const updateVoices = () => {
      const voices = this.ttsSynth.getVoices();
      if (!voices || voices.length === 0) return;
      // Priorizar español argentino (es-AR), luego latinoamericano (es-419), luego cualquier español
      this.ttsVoice = voices.find(v => v.lang === "es-AR") ||
                      voices.find(v => v.lang === "es-419") ||
                      voices.find(v => v.lang && v.lang.startsWith("es-")) ||
                      voices.find(v => v.lang && v.lang.startsWith("es")) ||
                      null;
    };
    updateVoices();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  /**
   * Activa o desactiva el Modo Accesibilidad con lector de voz
   */
  toggleTTS(forceState) {
    const nextState = forceState !== undefined ? forceState : !this.ttsActive;
    this.ttsActive = nextState;

    if (this.btnToggleTTS) {
      this.btnToggleTTS.classList.toggle("active", this.ttsActive);
      this.btnToggleTTS.setAttribute("aria-pressed", this.ttsActive ? "true" : "false");
    }

    if (this.ttsFloatingDock) {
      if (this.ttsActive) {
        this.ttsFloatingDock.style.display = "flex";
        // Permitir que el navegador aplique display antes de la animación de opacidad
        setTimeout(() => this.ttsFloatingDock.classList.add("visible"), 20);
      } else {
        this.ttsFloatingDock.classList.remove("visible");
        setTimeout(() => {
          if (!this.ttsActive) this.ttsFloatingDock.style.display = "none";
        }, 250);
      }
    }

    document.body.classList.toggle("tts-mode-active", this.ttsActive);

    if (this.ttsActive) {
      this.speakText("Modo accesibilidad activado. Apunta con el cursor sobre cualquier texto, título o nota para escucharlo.");
    } else {
      this.stopTTS();
      // Limpiar resaltados visuales
      document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));
    }
  }

  /**
   * Normaliza y limpia textos para una dicción fluida y natural en español
   */
  normalizeTextForSpeech(rawText) {
    if (!rawText) return "";
    let txt = String(rawText);

    // 1. Eliminar iconos, emojis y símbolos decorativos que traban el lector
    txt = txt.replace(/[\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/gu, " ");
    txt = txt.replace(/[▶✓→←⏱🎯💡❓🏛️⚙️🛑📊📁🔍📌🔑⚖️✨🚨🏢]/g, " ");

    // 2. Diccionario de expansión fonética académica y de administración pública
    const replacements = [
      { regex: /\\bRR\\.?\\s*HH\\.?\\b/gi, word: "Recursos Humanos" },
      { regex: /\\bUNCo\\b/g, word: "Universidad Nacional del Comahue" },
      { regex: /\\bCURZAS\\b/g, word: "Curzas" },
      { regex: /\\bCCT\\b/g, word: "Convenio Colectivo de Trabajo" },
      { regex: /\\bSUDOCU\\b/g, word: "Sudocu" },
      { regex: /\\bSIU-Guaraní\\b/gi, word: "SIU Guaraní" },
      { regex: /\\bSIU-Mapuche\\b/gi, word: "SIU Mapuche" },
      { regex: /\\bSIU\\b/g, word: "S.I.U." },
      { regex: /\\bGDE\\b/g, word: "Gestión Documental Electrónica" },
      { regex: /\\bTAD\\b/g, word: "Trámites a Distancia" },
      { regex: /\\bPES\\b/g, word: "Planificación Estratégica Situacional" },
      { regex: /\\bPOA\\b/g, word: "Plan Operativo Anual" },
      { regex: /\\bFODA\\b/g, word: "Matriz Foda" },
      { regex: /\\bSIGEN\\b/g, word: "Sigen" },
      { regex: /\\bAGN\\b/g, word: "Auditoría General de la Nación" },
      { regex: /\\bKPIs?\\b/gi, word: "Indicadores Clave de Desempeño" },
      { regex: /\\bTICs?\\b/gi, word: "Tecnologías de la Información" },
      { regex: /\\bIA\\b/g, word: "Inteligencia Artificial" },
      { regex: /\\bDec\\.?\\s*(\\d+)/gi, word: "Decreto $1" },
      { regex: /\\bArt\\.?\\s*(\\d+)/gi, word: "Artículo $1" },
      { regex: /\\bRes\\.?\\s*(\\d+)/gi, word: "Resolución $1" },
      { regex: /\\bN°\\s*(\\d+)/gi, word: "Número $1" },
      { regex: /\\bNº\\s*(\\d+)/gi, word: "Número $1" },
      { regex: /%/g, word: " por ciento " }
    ];

    replacements.forEach(r => {
      txt = txt.replace(r.regex, r.word);
    });

    // Limpieza de espacios múltiples y barras
    txt = txt.replace(/[|•·_~]/g, " ");
    txt = txt.replace(/\\s+/g, " ").trim();
    return txt;
  }

  /**
   * Sintetiza un texto en voz alta y resalta visualmente el elemento correspondiente
   */
  speakText(text, targetElement = null, onEndCallback = null) {
    if (!this.ttsSynth) return;

    const cleanText = this.normalizeTextForSpeech(text);
    if (!cleanText || cleanText.length < 2) return;

    // Detener cualquier locución previa
    this.ttsSynth.cancel();
    if (this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }

    // Gestionar resaltado visual
    document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));
    if (targetElement) {
      targetElement.classList.add("tts-reading-target");
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (this.ttsVoice) {
      utterance.voice = this.ttsVoice;
    } else {
      utterance.lang = "es-AR";
    }

    utterance.rate = 1.02;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.ttsIsSpeaking = true;
      this.ttsIsPaused = false;
      this.updateTTSDockPlayPause(false);
    };

    utterance.onend = () => {
      this.ttsIsSpeaking = false;
      this.ttsIsPaused = false;
      if (targetElement) {
        targetElement.classList.remove("tts-reading-target");
      }
      this.updateTTSDockPlayPause(false);
      if (typeof onEndCallback === "function") {
        onEndCallback();
      }
    };

    utterance.onerror = () => {
      this.ttsIsSpeaking = false;
      this.ttsIsPaused = false;
      if (targetElement) {
        targetElement.classList.remove("tts-reading-target");
      }
      this.updateTTSDockPlayPause(false);
    };

    this.ttsUtterance = utterance;
    this.ttsSynth.speak(utterance);
  }

  /**
   * Pausa o reanuda la lectura de voz actual
   */
  pauseResumeTTS() {
    if (!this.ttsSynth) return;
    if (this.ttsSynth.speaking) {
      if (this.ttsSynth.paused) {
        this.ttsSynth.resume();
        this.ttsIsPaused = false;
        this.updateTTSDockPlayPause(false);
      } else {
        this.ttsSynth.pause();
        this.ttsIsPaused = true;
        this.updateTTSDockPlayPause(true);
      }
    }
  }

  /**
   * Detiene de inmediato la locución y limpia los resaltados
   */
  stopTTS() {
    if (this.ttsSynth) {
      this.ttsSynth.cancel();
    }
    if (this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }
    this.ttsIsSpeaking = false;
    this.ttsIsPaused = false;
    document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));
    const btnNotes = document.getElementById("btn-read-notes-tts");
    if (btnNotes) btnNotes.classList.remove("active-reading");
    this.updateTTSDockPlayPause(false);
  }

  /**
   * Actualiza el texto e icono del botón Pausar/Reanudar en el dock
   */
  updateTTSDockPlayPause(isPaused) {
    if (!this.ttsBtnPauseText) return;
    this.ttsBtnPauseText.textContent = isPaused ? "Reanudar" : "Pausar";
  }

  /**
   * Escucha el paso del ratón por elementos de texto legibles para narrarlos
   */
  handlePointerOverTTS(e) {
    if (!this.ttsActive) return;

    // Selectores de contenido significativo para narrar
    const selector = [
      ".slide-bullet-item",
      ".slide-bullets li",
      ".slide-bullets p",
      ".slide-title",
      ".slide-subtitle",
      ".slide-badge",
      ".slide-meta-badge",
      ".teleprompter-speech-card",
      ".speech-para",
      ".teleprompter-obj-card",
      ".teleprompter-obj-title",
      ".teleprompter-obj-text",
      ".card-situada",
      ".grid-card",
      ".flujo-step",
      ".foda-card",
      ".drawer-card",
      ".biblio-item",
      ".faq-card",
      ".consigna-card",
      ".conclusion-summary-card",
      ".avance-summary-card",
      ".hud-card",
      ".station-badge"
    ].join(", ");

    const target = e.target.closest(selector);
    if (!target) return;

    if (this.ttsCurrentTarget === target) return;

    clearTimeout(this.ttsHoverTimeout);
    this.ttsHoverTimeout = setTimeout(() => {
      this.ttsCurrentTarget = target;
      const textToRead = target.innerText || target.textContent;
      if (textToRead && textToRead.trim().length > 3) {
        this.speakText(textToRead, target);
      }
    }, 180);
  }

  /**
   * Accesibilidad por teclado: Al tabular sobre elementos, narrarlos de inmediato
   */
  handleFocusInTTS(e) {
    if (!this.ttsActive) return;
    const target = e.target;
    if (!target) return;
    const text = target.getAttribute("aria-label") || target.innerText || target.textContent;
    if (text && text.trim().length > 2) {
      this.speakText(text, target);
    }
  }

  /**
   * Lee en voz alta la filmina actual completa (título, subtítulo y puntos clave)
   */
  readCurrentSlide() {
    const slide = this.data.slides[this.currentSlideIndex];
    if (!slide) return;

    const parts = [
      \`Filmina \${this.currentSlideIndex + 1} de \${this.totalSlides}.\`,
      slide.titulo,
      slide.subtitulo || "",
      "Contenido principal:"
    ];

    if (Array.isArray(slide.bullets)) {
      slide.bullets.forEach((b, idx) => {
        if (typeof b === "string") {
          parts.push(\`Punto \${idx + 1}: \${b}\`);
        } else if (b && b.label) {
          parts.push(\`\${b.label}: \${b.desc || ""}\`);
        }
      });
    }

    const fullText = parts.filter(p => p.trim()).join(". ");
    this.speakText(fullText, this.cardElement);
  }

  /**
   * Lee en voz alta el guion sugerido para el orador y el objetivo pedagógico de la filmina
   */
  readCurrentNotes() {
    const slide = this.data.slides[this.currentSlideIndex];
    if (!slide) return;

    // Asegurar que el modal o teleprómpter esté abierto para sincronizar visualmente
    if (!this.notesModal.classList.contains("open")) {
      this.toggleNotes(true);
    }

    const btnNotes = document.getElementById("btn-read-notes-tts");
    if (btnNotes) btnNotes.classList.add("active-reading");

    const paragraphs = [];
    if (slide.esquema) {
      paragraphs.push({ text: \`Objetivo Pedagógico de la filmina \${this.currentSlideIndex + 1}: \${slide.esquema}\`, el: document.querySelector(".teleprompter-obj-card") });
    }

    const speechElements = document.querySelectorAll(".speech-para");
    if (speechElements.length > 0) {
      speechElements.forEach((el) => {
        paragraphs.push({ text: el.innerText || el.textContent, el: el });
      });
    } else if (slide.guionOrador) {
      const splitParas = slide.guionOrador.split("\\n").filter(p => p.trim());
      splitParas.forEach(p => paragraphs.push({ text: p, el: this.notesBody }));
    }

    if (paragraphs.length === 0) {
      this.speakText("No hay notas ni guion registrado para esta filmina.");
      return;
    }

    // Lectura secuencial párrafo a párrafo con auto-scroll y resaltado activo
    let currentIndex = 0;
    const readNext = () => {
      if (currentIndex >= paragraphs.length) {
        if (btnNotes) btnNotes.classList.remove("active-reading");
        return;
      }

      const item = paragraphs[currentIndex];
      if (item.el && typeof item.el.scrollIntoView === "function") {
        item.el.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      currentIndex++;
      this.speakText(item.text, item.el, () => {
        this.ttsSequentialTimer = setTimeout(readNext, 350);
      });
    };

    readNext();
  }
`;

  // Insertar antes del cierre de la clase PresentationApp (que está antes de DOMContentLoaded)
  const domLoadTarget = '// Inicializar la aplicación al cargar el DOM';
  const lastBraceBeforeDomLoad = appJs.lastIndexOf('}', appJs.indexOf(domLoadTarget));
  
  if (lastBraceBeforeDomLoad !== -1) {
    appJs = appJs.slice(0, lastBraceBeforeDomLoad) + ttsMethods + '\n}\n\n\n' + appJs.slice(appJs.indexOf(domLoadTarget));
    console.log('✓ Métodos de TTS integrados correctamente DENTRO de PresentationApp en js/app.js.');
  } else {
    console.error('❌ Error: No se pudo localizar el cierre de PresentationApp.');
  }
}

fs.writeFileSync(appPath, appJs, 'utf8');
console.log('🎉 Modificaciones aplicadas con éxito a index.html, css/styles.css y js/app.js!');

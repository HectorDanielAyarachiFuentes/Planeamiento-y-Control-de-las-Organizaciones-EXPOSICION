const fs = require('fs');

console.log('🎙️ Applying Opción 1: Teleprómpter Lateral Derecho (Presenter View Sidebar)...\n');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

const oldModalRegex = /<!-- Modal Flotante: Guion y Notas del Orador[\s\S]*?<\/aside>/;

const newTeleprompterHtml = `<!-- Teleprómpter Lateral Derecho: Panel de Orador (Presenter View / Atril Digital) -->
  <aside class="notes-modal teleprompter-sidebar" id="notes-modal" aria-label="Teleprómpter y Guion del Orador">
    <div class="notes-header">
      <div class="notes-header-left">
        <div class="notes-badge">
          <svg class="btn-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="2.5" width="6" height="8.5" rx="3"/>
            <path d="M4.5 8v1a5.5 5.5 0 0 0 11 0V8"/>
            <path d="M10 14.5v3M7 17.5h6"/>
          </svg>
          <span>TELEPRÓMPTER • PANEL DEL ORADOR</span>
        </div>
        <div class="notes-meta-pills">
          <span class="notes-slide-pill" id="notes-slide-num">Filmina 1 / 25</span>
          <span class="notes-time-pill" id="notes-slide-time">⏱️ ~1.5 min</span>
        </div>
      </div>
      <div class="notes-header-right">
        <div class="notes-font-controls" title="Ajustar tamaño de letra para leer de pie">
          <button class="btn-font-size" id="btn-notes-font-dec" title="Disminuir tamaño de letra">A-</button>
          <button class="btn-font-size" id="btn-notes-font-inc" title="Aumentar tamaño de letra">A+</button>
        </div>
        <button class="btn-close" id="btn-close-notes" title="Cerrar teleprómpter (Tecla N)">
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l10 10M15 5L5 15"/></svg>
        </button>
      </div>
    </div>
    
    <div class="notes-body" id="notes-body"></div>

    <div class="notes-footer">
      <button class="btn-teleprompter-nav" id="btn-notes-prev" title="Ir a filmina anterior (←)">
        <span>◀ Anterior</span>
      </button>
      <span class="teleprompter-hint">Atajo: Tecla <strong>N</strong></span>
      <button class="btn-teleprompter-nav" id="btn-notes-next" title="Ir a filmina siguiente (→)">
        <span>Siguiente ▶</span>
      </button>
    </div>
  </aside>`;

if (oldModalRegex.test(html)) {
  html = html.replace(oldModalRegex, newTeleprompterHtml);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✅ index.html updated: Teleprompter sidebar markup added');
} else {
  console.error('❌ Could not find oldModalRegex in index.html');
}

// 2. UPDATE js/app.js
let appCode = fs.readFileSync('js/app.js', 'utf8');

// A) Update applySlideDOM for notesBody
const oldNotesBodyRegex = /this\.notesBody\.innerHTML = `[\s\S]*?`;\s*}/;
const newNotesBodyCode = `const slideNumEl = document.getElementById("notes-slide-num");
    if (slideNumEl) {
      slideNumEl.textContent = \`Filmina \${index + 1} / \${this.totalSlides}\`;
    }
    const slideTimeEl = document.getElementById("notes-slide-time");
    if (slideTimeEl) {
      slideTimeEl.textContent = slide.tiempoSugerido || "⏱️ ~1.5 min";
    }

    this.notesBody.innerHTML = \`
      <div class="teleprompter-obj-card">
        <div class="teleprompter-obj-header">
          <span class="teleprompter-obj-badge">🎯 OBJETIVO PEDAGÓGICO • FILMINA \${index + 1}</span>
        </div>
        <h4 class="teleprompter-obj-title">\${slide.titulo}</h4>
        <p class="teleprompter-obj-text">\${slide.esquema}</p>
      </div>
      <div class="teleprompter-speech-card">
        <div class="speech-card-header">
          <span class="speech-card-badge">🗣️ Guion Sugerido para la Exposición</span>
          <span class="speech-reading-mode">Oratoria Guiada</span>
        </div>
        <div class="speech-card-content" id="speech-card-content">
          \${slide.guionOrador ? slide.guionOrador.split('\\n').filter(p => p.trim()).map(p => \`<p class="speech-para">\${p}</p>\`).join('') : '<p>Sin guion registrado para esta filmina.</p>'}
        </div>
      </div>
    \`;
  }`;

if (oldNotesBodyRegex.test(appCode)) {
  appCode = appCode.replace(oldNotesBodyRegex, newNotesBodyCode);
  console.log('✅ js/app.js updated: applySlideDOM teleprompter rendering added');
} else {
  console.error('❌ Could not match oldNotesBodyRegex in js/app.js');
}

// B) Add font resize and nav controls to bindEvents
if (!appCode.includes('btn-notes-font-inc')) {
  const bindEventsHook = '    this.btnToggleNotes.addEventListener("click", () => this.toggleNotes());';
  const newEventsCode = `    this.btnToggleNotes.addEventListener("click", () => this.toggleNotes());
    
    // Controles de tamaño de letra y navegación del teleprómpter
    this.teleprompterFontSize = 1.05; // rem base
    const btnFontInc = document.getElementById("btn-notes-font-inc");
    const btnFontDec = document.getElementById("btn-notes-font-dec");
    if (btnFontInc) {
      btnFontInc.addEventListener("click", (e) => {
        e.stopPropagation();
        this.teleprompterFontSize = Math.min(1.45, this.teleprompterFontSize + 0.1);
        const content = document.getElementById("speech-card-content");
        if (content) content.style.fontSize = \`\${this.teleprompterFontSize}rem\`;
      });
    }
    if (btnFontDec) {
      btnFontDec.addEventListener("click", (e) => {
        e.stopPropagation();
        this.teleprompterFontSize = Math.max(0.85, this.teleprompterFontSize - 0.1);
        const content = document.getElementById("speech-card-content");
        if (content) content.style.fontSize = \`\${this.teleprompterFontSize}rem\`;
      });
    }
    const btnNotesPrev = document.getElementById("btn-notes-prev");
    const btnNotesNext = document.getElementById("btn-notes-next");
    if (btnNotesPrev) {
      btnNotesPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        this.prevSlide();
      });
    }
    if (btnNotesNext) {
      btnNotesNext.addEventListener("click", (e) => {
        e.stopPropagation();
        this.nextSlide();
      });
    }`;
  appCode = appCode.replace(bindEventsHook, newEventsCode);
  console.log('✅ js/app.js updated: bindEvents teleprompter controls added');
}

fs.writeFileSync('js/app.js', appCode, 'utf8');

// 3. UPDATE css/styles.css
let css = fs.readFileSync('css/styles.css', 'utf8');

// Replace old .notes-modal rules in base styles (lines 1184-1230)
const oldBaseNotesRegex = /\/\* ─── MODAL DE GUION DEL ORADOR[\s\S]*?\.notes-body\s*\{[\s\S]*?color:\s*#1e293b;\s*\}/;

const newTeleprompterCss = `/* ─── TELEPRÓMPTER LATERAL DERECHO (PRESENTER VIEW SIDEBAR / ATRIL DIGITAL) ─── */
.notes-modal.teleprompter-sidebar {
  position: fixed;
  top: clamp(48px, 6.2vh, 62px);
  bottom: clamp(52px, 7vh, 70px);
  right: 0;
  left: auto !important;
  width: clamp(380px, 34vw, 540px);
  max-width: calc(100vw - 1rem);
  max-height: none !important;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 2.5px solid var(--gold-main);
  border-top: 1px solid var(--card-border-subtle);
  border-bottom: 1px solid var(--card-border-subtle);
  border-right: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: -15px 0 45px rgba(15, 23, 42, 0.14), -2px 0 12px rgba(180, 131, 36, 0.08);
  padding: 0 !important;
  z-index: 70;
  display: flex !important;
  flex-direction: column !important;
  transform: translateX(105%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
}

.notes-modal.teleprompter-sidebar.open {
  transform: translateX(0);
  pointer-events: auto;
  visibility: visible;
  animation: none !important;
}

.notes-modal .notes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.7rem, 1.3vh, 1rem) clamp(1rem, 1.8vw, 1.35rem);
  background: linear-gradient(135deg, #091124 0%, #172554 100%);
  color: #ffffff;
  border-bottom: 1.5px solid rgba(212, 175, 55, 0.45);
  margin-bottom: 0 !important;
  flex-shrink: 0;
  gap: 0.6rem;
}

.notes-header-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.notes-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-serif);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--gold-light);
}

.notes-meta-pills {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.notes-slide-pill {
  background: var(--gold-main);
  color: #ffffff;
  font-family: var(--font-serif);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}

.notes-time-pill {
  background: rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 600;
  padding: 1px 7px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.notes-header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notes-font-controls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 4px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-font-size {
  background: transparent;
  border: none;
  color: #f8fafc;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-font-size:hover {
  background: var(--gold-main);
  color: #ffffff;
}

.notes-modal .btn-close {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.notes-modal .btn-close:hover {
  background: var(--gold-main);
  border-color: var(--gold-main);
}

.notes-modal .notes-body {
  flex: 1 1 auto;
  overflow-y: auto !important;
  padding: clamp(0.85rem, 1.6vh, 1.25rem) clamp(1rem, 1.8vw, 1.35rem) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.8rem !important;
  scrollbar-width: thin;
  scrollbar-color: rgba(180, 131, 36, 0.4) transparent;
}

.teleprompter-obj-card {
  background: rgba(248, 250, 252, 0.95);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-left: 3.5px solid var(--gold-main);
  border-radius: 6px;
  padding: 0.65rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
}

.teleprompter-obj-badge {
  font-family: var(--font-serif);
  font-size: 0.66rem;
  font-weight: 700;
  color: var(--gold-main);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.teleprompter-obj-title {
  font-family: var(--font-title);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--oxford-blue);
  margin: 0;
  line-height: 1.32;
}

.teleprompter-obj-text {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 400;
  color: #475569;
  margin: 0;
  line-height: 1.45;
}

.teleprompter-speech-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.95rem 1.1rem;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.03);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.speech-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #cbd5e1;
  padding-bottom: 0.45rem;
}

.speech-card-badge {
  font-family: var(--font-serif);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--oxford-blue);
  letter-spacing: 0.04em;
}

.speech-reading-mode {
  font-family: var(--font-sans);
  font-size: 0.66rem;
  font-weight: 700;
  color: #166534;
  background: #dcfce7;
  padding: 1px 7px;
  border-radius: 4px;
}

.speech-card-content {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.72;
  color: #1e293b;
  font-weight: 400;
  transition: font-size 0.2s ease;
}

.speech-para {
  margin: 0 0 0.75rem 0;
  line-height: 1.72;
}

.speech-para:last-child {
  margin-bottom: 0;
}

.notes-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 1rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
  gap: 0.5rem;
}

.btn-teleprompter-nav {
  background: #ffffff;
  border: 1px solid var(--gold-border);
  border-radius: 5px;
  padding: 0.35rem 0.75rem;
  font-family: var(--font-serif);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--oxford-blue);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-teleprompter-nav:hover {
  background: var(--gold-main);
  color: #ffffff;
  border-color: var(--gold-main);
  box-shadow: 0 2px 8px rgba(180, 131, 36, 0.2);
}

.teleprompter-hint {
  font-size: 0.7rem;
  color: #64748b;
  font-family: var(--font-sans);
}`;

if (oldBaseNotesRegex.test(css)) {
  css = css.replace(oldBaseNotesRegex, newTeleprompterCss);
  console.log('✅ css/styles.css updated: Base notes-modal replaced with teleprompter sidebar');
} else {
  console.error('❌ Could not match oldBaseNotesRegex in css/styles.css');
}

// Also update mobile media query (lines around 2242)
const mobileNotesRegex = /\.notes-modal\s*\{\s*left:\s*0\.5rem;\s*right:\s*0\.5rem;\s*bottom:[\s\S]*?padding:\s*0\.9rem\s*1rem;[^\}]*\}/;
const mobileTeleprompterCss = `.notes-modal.teleprompter-sidebar {
    top: auto !important;
    bottom: calc(5.2rem + env(safe-area-inset-bottom)) !important;
    left: 0.6rem !important;
    right: 0.6rem !important;
    width: auto !important;
    max-width: calc(100vw - 1.2rem) !important;
    max-height: min(480px, 65vh) !important;
    border-radius: 12px !important;
    border: 1.5px solid var(--gold-main) !important;
    transform: translateY(115%) !important;
    box-shadow: 0 -8px 30px rgba(15, 23, 42, 0.2) !important;
  }
  .notes-modal.teleprompter-sidebar.open {
    transform: translateY(0) !important;
  }`;

if (mobileNotesRegex.test(css)) {
  css = css.replace(mobileNotesRegex, mobileTeleprompterCss);
  console.log('✅ css/styles.css updated: Mobile teleprompter styling adapted');
}

fs.writeFileSync('css/styles.css', css, 'utf8');
console.log('\n🎉 ALL TELEPROMPTER SIDEBAR UPDATES APPLIED SUCCESSFULLY!');

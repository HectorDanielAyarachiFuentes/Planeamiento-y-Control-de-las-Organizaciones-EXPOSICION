const fs = require('fs');

console.log('🚀 Adding Avance 4 (PDF) tab to index.html, js/app.js, and css/styles.css...\n');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('data-tab="avance4"')) {
  const targetCRLF = '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\r\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>';
  const targetLF = '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>';

  const replacementCRLF = '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\r\n      <button class="drawer-tab" data-tab="avance4">Avance 4 (PDF) 📑</button>\r\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>';
  const replacementLF = '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\n      <button class="drawer-tab" data-tab="avance4">Avance 4 (PDF) 📑</button>\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>';

  if (html.includes(targetCRLF)) {
    html = html.replace(targetCRLF, replacementCRLF);
    console.log('✅ Added Avance 4 tab to index.html (CRLF)');
  } else if (html.includes(targetLF)) {
    html = html.replace(targetLF, replacementLF);
    console.log('✅ Added Avance 4 tab to index.html (LF)');
  } else {
    // Fallback: replace just consignas tab
    html = html.replace(
      'data-tab="consignas">Consignas PEDCO 📋</button>',
      'data-tab="consignas">Consignas PEDCO 📋</button>\r\n      <button class="drawer-tab" data-tab="avance4">Avance 4 (PDF) 📑</button>'
    );
    console.log('✅ Added Avance 4 tab to index.html (Fallback)');
  }

  fs.writeFileSync('index.html', html, 'utf8');
} else {
  console.log('ℹ️ index.html already has data-tab="avance4"');
}

// 2. UPDATE js/app.js
let appCode = fs.readFileSync('js/app.js', 'utf8');

// A) Add to renderDrawerTab
if (!appCode.includes('tabType === "avance4"')) {
  const hook = '} else if (tabType === "consignas") {';
  const newBranch = `} else if (tabType === "avance4") {
      this.renderAvance4Tab();
    } else if (tabType === "consignas") {`;
  appCode = appCode.replace(hook, newBranch);
  console.log('✅ Added tabType === "avance4" to renderDrawerTab in js/app.js');
}

// B) Add renderAvance4Tab implementation before toggleDocMaximize
if (!appCode.includes('renderAvance4Tab(')) {
  const methodHook = '  toggleDocMaximize() {';
  const renderAvance4Method = `  // ─── PESTAÑA: AVANCE 4 Y DOCUMENTOS OFICIALES ENTREGADOS (PDF) ─────────────
  renderAvance4Tab(selectedAvanceNum = 4) {
    this.drawerContent.innerHTML = "";

    const avancesDocs = [
      {
        num: 4,
        unidad: "Unidad IV",
        titulo: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
        subtitulo: "Inciso 1 (Personal), Presupuesto por Programas y Capacidad Estatal",
        ruta: "01_Actividades_Catedra/actividad_04/Avance 4 Programación Presupuestaria y Factor Humano (Unidad IV).pdf",
        nombre: "Avance 4 Programación Presupuestaria y Factor Humano (Unidad IV).pdf",
        tamano: "1.38 MB",
        ext: "pdf",
        desc: "Documento oficial presentado a la cátedra. Vincula la planificación política con las partidas presupuestarias, analiza la absorción del 90,2% por el Inciso 1 (Personal), el impacto legal del adicional del 40% por Zona Desfavorable y la estructuración del Programa 26 (Desarrollo de la Educación Superior) según Marcos Makon."
      },
      {
        num: 3,
        unidad: "Unidad III",
        titulo: "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)",
        subtitulo: "Organigrama Formal vs Real, Flujograma de Licencias y Transición SUDOCU",
        ruta: "01_Actividades_Catedra/actividad_03/Avance_3_Estructura_Organigrama_Flujograma_GDE_CURZAS_Hector_Ayarachi.pdf",
        nombre: "Avance_3_Estructura_Organigrama_Flujograma_GDE_CURZAS_Hector_Ayarachi.pdf",
        tamano: "1.08 MB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad III. Releva la discordancia entre la estructura formal y la red real de 10 nodos provinciales, mapea el circuito de licencias y detecta los cuellos de botella por falta de subrogancia."
      },
      {
        num: 2,
        unidad: "Unidad II",
        titulo: "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)",
        subtitulo: "Matriz FODA Situada, Mapeo de Actores Clave y Capacidades Estatales (Bertranou)",
        ruta: "01_Actividades_Catedra/actividad_02/Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Correccion.pdf",
        nombre: "Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Correccion.pdf",
        tamano: "1.20 MB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad II. Aborda la transición de la planificación normativa al PES de Matus, la red viva de 10 nodos en Río Negro y la evaluación de capacidades estatales."
      },
      {
        num: 1,
        unidad: "Unidad I",
        titulo: "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)",
        subtitulo: "Marco Autonómico, Burocracia Profesional y Tutela Paritaria frente a la NGP",
        ruta: "01_Actividades_Catedra/actividad_01/Avance_1_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Mejorado.pdf",
        nombre: "Avance_1_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Mejorado.pdf",
        tamano: "455 KB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad I. Caracteriza el modelo de Burocracia Profesional, la tutela paritaria (CCT 366/06 y 1246/15) y los mecanismos de rendición de cuentas en el co-gobierno."
      }
    ];

    const currentDoc = avancesDocs.find(d => d.num === selectedAvanceNum) || avancesDocs[0];
    const safeUrl = encodeURI(currentDoc.ruta);

    const container = document.createElement("div");
    container.className = "avance-pdf-drawer-container";

    container.innerHTML = \`
      <!-- Encabezado con información del Documento Oficial -->
      <div class="avance-pdf-header-box">
        <div class="avance-pdf-title-row">
          <span class="avance-pdf-badge">DOCUMENTO OFICIAL ENTREGADO • AVANCE \${currentDoc.num}</span>
          <span class="avance-pdf-size">\${currentDoc.tamano} • PDF OFICIAL</span>
        </div>
        <h3 class="avance-pdf-title">\${currentDoc.titulo}</h3>
        <p class="avance-pdf-sub">\${currentDoc.subtitulo}</p>
        <p class="avance-pdf-desc">\${currentDoc.desc}</p>
        <div class="avance-pdf-actions">
          <button class="btn-avance-pdf-modal" id="btn-open-current-avance-modal">
            👁️ Visualizar en Pantalla Completa
          </button>
          <a class="btn-avance-pdf-newtab" href="\${safeUrl}" target="_blank" rel="noopener">
            ↗ Abrir en Pestaña Nueva
          </a>
          <a class="btn-avance-pdf-download" href="\${safeUrl}" download="\${currentDoc.nombre}">
            ⬇️ Descargar PDF
          </a>
        </div>
      </div>

      <!-- Barra selectora de Avances Entregados -->
      <div class="avance-switcher-bar">
        <span class="switcher-label">Seleccionar Entrega:</span>
        \${avancesDocs.map(d => \`
          <button class="btn-switch-avance \${d.num === currentDoc.num ? 'active' : ''}" data-avance="\${d.num}">
            Avance \${d.num} (\${d.num === 4 ? 'Unidad IV' : d.num === 3 ? 'Unidad III' : d.num === 2 ? 'Unidad II' : 'Unidad I'})
          </button>
        \`).join('')}
      </div>

      <!-- Visor Embebido Interactivo del PDF -->
      <div class="avance-pdf-embed-wrapper">
        <div class="embed-topbar">
          <span class="embed-topbar-title">📄 Visor Interactivo Integrado • \${currentDoc.nombre}</span>
          <button class="btn-embed-expand" title="Ver en Pantalla Completa">⛶ Maximizar</button>
        </div>
        <iframe class="avance-pdf-iframe" src="\${safeUrl}#toolbar=1&navpanes=1&scrollbar=1" title="Visor \${currentDoc.titulo}"></iframe>
      </div>
    \`;

    // Eventos
    container.querySelector("#btn-open-current-avance-modal").addEventListener("click", () => {
      this.openDocModal(currentDoc);
    });

    container.querySelector(".btn-embed-expand").addEventListener("click", () => {
      this.openDocModal(currentDoc);
    });

    container.querySelectorAll(".btn-switch-avance").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const num = parseInt(e.currentTarget.dataset.avance, 10);
        this.renderAvance4Tab(num);
      });
    });

    this.drawerContent.appendChild(container);
  }

  toggleDocMaximize() {`;

  appCode = appCode.replace(methodHook, renderAvance4Method);
  fs.writeFileSync('js/app.js', appCode, 'utf8');
  console.log('✅ Added renderAvance4Tab implementation to js/app.js');
} else {
  console.log('ℹ️ js/app.js already has renderAvance4Tab');
}

// 3. UPDATE css/styles.css
let css = fs.readFileSync('css/styles.css', 'utf8');

const stylesToAdd = `
/* ─── PESTAÑA: AVANCE 4 Y DOCUMENTOS OFICIALES (PDF) ─── */
.avance-pdf-drawer-container {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  width: 100%;
}

.avance-pdf-header-box {
  background: linear-gradient(135deg, #091124 0%, #172554 100%);
  color: #ffffff;
  padding: 1.15rem 1.35rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.45);
  box-shadow: 0 4px 18px rgba(9, 17, 36, 0.25);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.avance-pdf-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.avance-pdf-badge {
  font-family: var(--font-serif);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 2px 7px;
  border-radius: 3px;
  background: var(--gold-dim);
  color: var(--gold-light);
  border: 1px solid var(--gold-border);
}

.avance-pdf-size {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
}

.avance-pdf-title {
  font-family: var(--font-title);
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.1rem 0 0 0;
  line-height: 1.32;
}

.avance-pdf-sub {
  font-family: var(--font-serif);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gold-light);
  margin: 0;
  letter-spacing: 0.02em;
}

.avance-pdf-desc {
  font-family: var(--font-body);
  font-size: 0.81rem;
  font-weight: 400;
  color: #cbd5e1;
  line-height: 1.48;
  margin: 0.2rem 0 0.35rem 0;
}

.avance-pdf-actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.btn-avance-pdf-modal {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.48rem 0.85rem;
  border-radius: 5px;
  background: var(--gold-main);
  color: #ffffff;
  font-family: var(--font-serif);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  border: 1px solid var(--gold-main);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-avance-pdf-modal:hover {
  background: #996e14;
  box-shadow: 0 4px 12px rgba(180, 131, 36, 0.3);
}

.btn-avance-pdf-newtab,
.btn-avance-pdf-download {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.48rem 0.75rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #f8fafc;
  font-family: var(--font-sans);
  font-size: 0.76rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-avance-pdf-newtab:hover,
.btn-avance-pdf-download:hover {
  background: rgba(255, 255, 255, 0.22);
  color: #ffffff;
}

.avance-switcher-bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  padding: 0.45rem 0.75rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.switcher-label {
  font-family: var(--font-serif);
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-right: 0.2rem;
}

.btn-switch-avance {
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.28rem 0.65rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: var(--oxford-blue);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-switch-avance:hover {
  border-color: var(--gold-main);
  color: var(--gold-main);
}

.btn-switch-avance.active {
  background: var(--oxford-blue);
  color: #ffffff;
  border-color: var(--oxford-blue);
}

.avance-pdf-embed-wrapper {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.embed-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.85rem;
  background: #f1f5f9;
  border-bottom: 1px solid #cbd5e1;
}

.embed-topbar-title {
  font-family: var(--font-serif);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--oxford-blue);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-embed-expand {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.22rem 0.55rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: var(--oxford-blue);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-embed-expand:hover {
  background: var(--gold-dim);
  border-color: var(--gold-main);
  color: var(--gold-main);
}

.avance-pdf-iframe {
  width: 100%;
  height: 560px;
  border: none;
  background: #525659;
}
`;

if (!css.includes('PESTAÑA: AVANCE 4 Y DOCUMENTOS OFICIALES')) {
  css += '\n' + stylesToAdd;
  fs.writeFileSync('css/styles.css', css, 'utf8');
  console.log('✅ Added styles for Avance 4 PDF tab in css/styles.css');
} else {
  console.log('ℹ️ css/styles.css already has styles for Avance 4 PDF tab');
}

console.log('\n🎉 ALL UPDATES COMPLETED SUCCESSFULLY!');


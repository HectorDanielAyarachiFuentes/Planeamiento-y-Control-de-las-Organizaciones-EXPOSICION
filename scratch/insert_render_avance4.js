const fs = require('fs');

let appCode = fs.readFileSync('js/app.js', 'utf8');

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

const targetMethodHook = '  toggleDocMaximize() {';
appCode = appCode.replace(targetMethodHook, renderAvance4Method);
fs.writeFileSync('js/app.js', appCode, 'utf8');
console.log('✅ Added renderAvance4Tab definition to js/app.js');


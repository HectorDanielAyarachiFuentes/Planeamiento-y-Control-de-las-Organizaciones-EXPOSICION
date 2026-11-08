const fs = require('fs');

let code = fs.readFileSync('js/app.js', 'utf8');

if (!code.includes('renderConsignasTab() {')) {
  const classEndHook = '  toggleDocMaximize() {';
  const newMethods = `  // ─── PESTAÑA: CONSIGNAS PEDCO Y REQUERIMIENTOS DE CÁTEDRA ─────────────
  renderConsignasTab() {
    this.drawerContent.innerHTML = "";

    const consignas = (this.data && this.data.consignasCatedra) || [];

    // Encabezado institucional
    const headerBox = document.createElement("div");
    headerBox.className = "consigna-header-box";
    headerBox.innerHTML = \`
      <div class="consigna-header-title">
        <span>📋 Consignas Oficiales de Cátedra (PEDCO UNCo)</span>
        <span class="consigna-total-badge">4 Avances</span>
      </div>
      <p class="consigna-header-desc">
        Requerimientos metodológicos, entregables obligatorios, fuentes documentales y preguntas de investigación formuladas por la Cátedra para cada una de las 4 Unidades de la investigación en el CURZAS.
      </p>
    \`;
    this.drawerContent.appendChild(headerBox);

    if (consignas.length === 0) {
      const emptyCard = document.createElement("div");
      emptyCard.className = "ref-card";
      emptyCard.innerHTML = \`<p>No se encontraron consignas cargadas en los datos de la presentación.</p>\`;
      this.drawerContent.appendChild(emptyCard);
      return;
    }

    const slideTargets = {
      1: { index: 2, range: "Filminas 3 a 7" },
      2: { index: 7, range: "Filminas 8 a 13" },
      3: { index: 13, range: "Filminas 14 a 19" },
      4: { index: 19, range: "Filminas 20 a 24" }
    };

    consignas.forEach((c) => {
      const card = document.createElement("div");
      card.className = "ref-card consigna-detail-card";
      card.id = \`consigna-card-\${c.avanceNum}\`;
      
      const target = slideTargets[c.avanceNum] || { index: 0, range: "Filminas" };

      card.innerHTML = \`
        <div class="consigna-card-topbar">
          <span class="consigna-card-chip">AVANCE \${c.avanceNum}</span>
          <span class="consigna-card-unidad">\${c.unidad}</span>
        </div>
        <h4 class="consigna-card-title">\${c.avanceTitulo}</h4>

        <div class="consigna-block">
          <div class="consigna-block-label">🎯 Objetivo de Cátedra:</div>
          <p class="consigna-block-text">\${c.objetivo}</p>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">📑 Entregables Específicos:</div>
          <ul class="consigna-checklist">
            \${c.entregables.map(item => \`<li><span class="chk-icon">✓</span> <span>\${item}</span></li>\`).join("")}
          </ul>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">🔎 Qué Buscar en el Organismo (Fuentes):</div>
          <ul class="consigna-checklist sources-list">
            \${c.queBuscar.map(item => \`<li><span class="chk-icon">📄</span> <span>\${item}</span></li>\`).join("")}
          </ul>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">❓ Preguntas Guía Formuladas:</div>
          <ul class="consigna-checklist questions-list">
            \${c.preguntasGuia.map(item => \`<li><span class="chk-icon">❓</span> <span>\${item}</span></li>\`).join("")}
          </ul>
        </div>

        <div class="consigna-block answer-block">
          <div class="consigna-block-label">🏛️ Respuesta y Diagnóstico Situado (CURZAS):</div>
          <p class="consigna-answer-text">\${c.respuestaSituada}</p>
        </div>

        <div class="consigna-card-actions">
          <button class="btn-goto-consigna-slides" data-slide-index="\${target.index}">
            🚀 Ir a Filminas del Avance (\${target.range})
          </button>
        </div>
      \`;

      card.querySelector(".btn-goto-consigna-slides").addEventListener("click", () => {
        this.closeDrawer();
        this.goToSlide(target.index);
      });

      this.drawerContent.appendChild(card);
    });
  }

  openConsignasDrawer(avanceNum = null) {
    this.openDrawer();
    document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
    const tabBtn = document.querySelector('.drawer-tab[data-tab="consignas"]');
    if (tabBtn) tabBtn.classList.add("active");
    this.renderConsignasTab();
    if (avanceNum) {
      setTimeout(() => {
        const el = document.getElementById(\`consigna-card-\${avanceNum}\`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }

  toggleDocMaximize() {`;

  code = code.replace(classEndHook, newMethods);
  fs.writeFileSync('js/app.js', code, 'utf8');
  console.log('✅ Added renderConsignasTab and openConsignasDrawer to PresentationApp');
} else {
  console.log('Already has renderConsignasTab() {');
}


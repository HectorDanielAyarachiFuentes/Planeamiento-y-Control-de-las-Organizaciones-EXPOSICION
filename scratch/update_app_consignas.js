const fs = require('fs');

let code = fs.readFileSync('js/app.js', 'utf8');

// 1. Replace avances block in applySlideDOM
const oldAvancesBlockRegex = /const avances = \[\s*\{[\s\S]*?\];\s*avances\.forEach\(\(a\) => \{[\s\S]*?this\.bulletsElement\.appendChild\(li\);\s*\}\);/;

const newAvancesBlock = `const avances = [
        {
          num: "AVANCE 1",
          numVal: 1,
          eje: "Unidad I",
          title: "Contexto, Modelo de Gestión y Gobernanza",
          objetivo: "Caracterizar el marco institucional: Weber vs NGP, accountability y gobernanza inteligente / IA (Oszlak).",
          pregunta: "¿Estructura weberiana o NGP? ¿Transparencia activa? ¿Normativas sobre IA en RRHH?",
          text: "Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
          targetSlide: 2,
          slideRange: "3 a 7"
        },
        {
          num: "AVANCE 2",
          numVal: 2,
          eje: "Unidad II",
          title: "Diagnóstico y Planificación Estratégica Situacional",
          objetivo: "Analizar viabilidad y capacidades estatales (Bertranou), FODA situado y mapeo de actores clave.",
          pregunta: "¿Planes normativos rígidos o PES situacional (Matus)? ¿Competencias críticas en plantillas?",
          text: "Red viva en 10 nodos provinciales, superando silos de datos con CONICET/INTA mediante concertación política y metodología PES.",
          targetSlide: 7,
          slideRange: "8 a 13"
        },
        {
          num: "AVANCE 3",
          numVal: 3,
          eje: "Unidad III",
          title: "Diseño Organizacional, Procesos y Ecosistema Digital",
          objetivo: "Mapear estructura formal vs real, flujograma de proceso clave (licencias) y transición a GDE/SUDOCU con cuellos de botella.",
          pregunta: "¿El organigrama formal coincide con el real? ¿Trámites 100% digitales o persistencia del papel?",
          text: "Organigrama real frente al formal; trazabilidad del circuito de licencias y superación de la inercia del papel mediante interoperabilidad.",
          targetSlide: 13,
          slideRange: "14 a 19"
        },
        {
          num: "AVANCE 4",
          numVal: 4,
          eje: "Unidad IV",
          title: "Programación Presupuestaria y Factor Humano",
          objetivo: "Vincular presupuesto y factor humano: Inciso 1 (Personal) y ciclo presupuestario por programas (Makon).",
          pregunta: "¿Cuál es el presupuesto total y qué % va a personal (Inciso 1)? ¿Estructura de programas oficiales?",
          text: "El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal.",
          targetSlide: 19,
          slideRange: "20 a 24"
        }
      ];

      avances.forEach((a) => {
        const li = document.createElement("li");
        li.className = "avance-summary-card";
        li.innerHTML = \`
          <div class="avance-row-header">
            <span class="avance-pill">\${a.num}</span>
            <span class="avance-eje-tag">\${a.eje}</span>
            <h4 class="avance-row-title">\${a.title}</h4>
          </div>
          <div class="avance-consigna-meta">
            <div class="consigna-line">
              <span class="consigna-tag">🎯 Objetivo:</span>
              <span class="consigna-val">\${a.objetivo}</span>
            </div>
            <div class="consigna-line">
              <span class="consigna-tag">❓ Pregunta Guía:</span>
              <span class="consigna-val">\${a.pregunta}</span>
            </div>
          </div>
          <p class="avance-row-text"><span class="bullet-concept">💡 Diagnóstico Situado:</span> \${a.text}</p>
          <div class="avance-card-actions">
            <button class="btn-card-goto-avance" data-slide-index="\${a.targetSlide}" title="Ir a la primera filmina de este avance">
              <span>Filminas \${a.slideRange}</span>
              <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </button>
            <button class="btn-card-open-consigna" data-avance-num="\${a.numVal}" title="Ver consigna oficial y entregables en panel de respaldo">
              <span>Consigna PEDCO 📋</span>
            </button>
          </div>
        \`;

        li.querySelector(".btn-card-goto-avance").addEventListener("click", (e) => {
          e.stopPropagation();
          this.goToSlide(a.targetSlide);
        });

        li.querySelector(".btn-card-open-consigna").addEventListener("click", (e) => {
          e.stopPropagation();
          this.openConsignasDrawer(a.numVal);
        });

        this.bulletsElement.appendChild(li);
      });`;

if (oldAvancesBlockRegex.test(code)) {
  code = code.replace(oldAvancesBlockRegex, newAvancesBlock);
  console.log('✅ Updated avances-mode block in applySlideDOM');
} else {
  console.error('❌ Could not match oldAvancesBlockRegex');
}

// 2. Add consignas tab in renderDrawerTab
if (!code.includes('tabType === "consignas"')) {
  const catedraTabHook = '} else if (tabType === "catedra") {';
  const consignasTabHook = `} else if (tabType === "consignas") {
      this.renderConsignasTab();
    } else if (tabType === "catedra") {`;
  code = code.replace(catedraTabHook, consignasTabHook);
  console.log('✅ Added consignas branch to renderDrawerTab');
}

// 3. Add renderConsignasTab and openConsignasDrawer before class end
if (!code.includes('renderConsignasTab()')) {
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
  console.log('✅ Added renderConsignasTab and openConsignasDrawer to PresentationApp');
}

fs.writeFileSync('js/app.js', code, 'utf8');
console.log('🎉 js/app.js updated successfully!');


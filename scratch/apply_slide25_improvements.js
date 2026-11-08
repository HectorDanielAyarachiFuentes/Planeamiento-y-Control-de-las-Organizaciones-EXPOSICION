const fs = require('fs');

console.log('🔧 Updating js/app.js and css/styles.css for Slide 25 Conclusion...\n');

// 1. UPDATE js/app.js
let appCode = fs.readFileSync('js/app.js', 'utf8');

// Update classList.remove
appCode = appCode.replace(
  'this.bulletsElement.classList.remove("intro-mode", "avances-mode");',
  'this.bulletsElement.classList.remove("intro-mode", "avances-mode", "conclusion-mode");'
);

// Add conclusion branch before "} else {" in applySlideDOM
const conclusionBranch = `    } else if (index === 24 || slide.id === "slide_25" || slide.layout === "conclusion_summary") {
      this.bulletsElement.classList.add("conclusion-mode");
      const conclusiones = [
        {
          num: "AVANCE 1",
          unidad: "Unidad I",
          titulo: "Contexto, Modelo de Gestión y Gobernanza",
          hicimos: "Caracterizamos el marco institucional, la autonomía (Art. 75 inc. 19 CN) y la Burocracia Profesional frente a la NGP.",
          destacado: "Burocracia Profesional sólida que tutela la legalidad, estabilidad laboral y convenios paritarios, blindada del gerencialismo mercantil.",
          problema: "Riesgo de endogamia en co-gobierno y gobernanza digital incipiente (sin portal de datos abiertos ni IA en RRHH)."
        },
        {
          num: "AVANCE 2",
          unidad: "Unidad II",
          titulo: "Diagnóstico y Planificación Estratégica Situacional",
          hicimos: "Elaboramos FODA situado, mapeo de actores clave y evaluación de capacidades estatales según Bertranou.",
          destacado: "Despliegue territorial democratizador de la Red de 10 Nodos en Río Negro y adopción del PES (Matus) con los trabajadores.",
          problema: "Persistencia de silos de datos interinstitucionales (doble carga SIU/SIGEVA) y brecha digital en personal de mayor antigüedad."
        },
        {
          num: "AVANCE 3",
          unidad: "Unidad III",
          titulo: "Diseño Organizacional, Procesos y Ecosistema Digital",
          hicimos: "Mapeamos estructura formal vs real, manual de funciones y flujograma del circuito clave de licencias del personal.",
          destacado: "Visibilización de la estructura real desconcentrada en territorio frente a un organigrama formal desactualizado.",
          problema: "Parálisis del trámite por falta de subrogancia ante ausencia de jefaturas y falsa digitalización (papel escaneado sin interoperabilidad)."
        },
        {
          num: "AVANCE 4",
          unidad: "Unidad IV",
          titulo: "Programación Presupuestaria y Factor Humano",
          hicimos: "Analizamos el presupuesto por programas (Makon, Programa 26) y el impacto del Inciso 1 (Personal).",
          destacado: "El 90,2% del gasto va a salarios docentes/nodocentes, demostrando que las personas son la auténtica capacidad estatal del CURZAS.",
          problema: "Extrema rigidez presupuestaria (solo 9,8% para funcionamiento) y fuerte impacto del 40% de Zona Desfavorable ante el ajuste nacional."
        }
      ];

      conclusiones.forEach((c) => {
        const li = document.createElement("li");
        li.className = "conclusion-summary-card";
        li.innerHTML = \`
          <div class="conclusion-card-header">
            <span class="conclusion-pill">\${c.num}</span>
            <span class="conclusion-unidad">\${c.unidad}</span>
            <h4 class="conclusion-card-title">\${c.titulo}</h4>
          </div>
          <div class="conclusion-card-body">
            <div class="conclusion-row">
              <span class="conclusion-label">🔍 Qué hicimos:</span>
              <span class="conclusion-text">\${c.hicimos}</span>
            </div>
            <div class="conclusion-row destacado">
              <span class="conclusion-label">⭐ Lo más destacado:</span>
              <span class="conclusion-text">\${c.destacado}</span>
            </div>
            <div class="conclusion-row problema">
              <span class="conclusion-label">⚠️ Problema crítico:</span>
              <span class="conclusion-text">\${c.problema}</span>
            </div>
          </div>
        \`;
        this.bulletsElement.appendChild(li);
      });

      // Tarjeta de cierre protocolar / Agradecimiento
      const closingCard = document.createElement("li");
      closingCard.className = "conclusion-closing-card";
      closingCard.innerHTML = \`
        <div class="closing-header">
          <span class="closing-badge">APERTURA AL TRIBUNAL</span>
          <h4 class="closing-title">Agradecimiento y Espacio de Preguntas</h4>
        </div>
        <p class="closing-text">
          Agradecimiento sincero a los docentes evaluadores <strong>Mgter. Susana Lopez</strong> y <strong>Lic. Carlos Jauge</strong> por su guía académica. Quedo a entera disposición del Tribunal para responder preguntas y deliberar.
        </p>
      \`;
      this.bulletsElement.appendChild(closingCard);
    } else {`;

if (!appCode.includes('conclusion-mode')) {
  appCode = appCode.replace('    } else {\r\n      const bulletsList = slide.puntosClave', conclusionBranch + '\r\n      const bulletsList = slide.puntosClave');
  if (!appCode.includes('conclusion-mode')) {
    // Try LF
    appCode = appCode.replace('    } else {\n      const bulletsList = slide.puntosClave', conclusionBranch + '\n      const bulletsList = slide.puntosClave');
  }
  fs.writeFileSync('js/app.js', appCode, 'utf8');
  console.log('✅ js/app.js updated with conclusion-mode for Slide 25');
} else {
  console.log('ℹ️ js/app.js already has conclusion-mode');
}

// 2. UPDATE css/styles.css
let css = fs.readFileSync('css/styles.css', 'utf8');

const cssToAdd = `
/* ─── FILMINA 25: CONCLUSIÓN GENERAL DE LOS 4 AVANCES (CONCLUSION-MODE) ─── */
.slide-bullets.conclusion-mode {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(0.38rem, 0.8vh, 0.58rem) !important;
  padding: 0.1rem !important;
}

.slide-bullets.conclusion-mode li.conclusion-summary-card {
  position: relative !important;
  padding: clamp(0.5rem, 0.88vh, 0.72rem) clamp(0.8rem, 1.15vw, 1.1rem) !important;
  background: rgba(255, 255, 255, 0.92) !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-left: 3.5px solid var(--gold-main) !important;
  border-radius: 6px !important;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.2rem !important;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease !important;
}

.slide-bullets.conclusion-mode li.conclusion-summary-card:hover {
  transform: translateX(3px) !important;
  border-color: var(--gold-main) !important;
  background: #ffffff !important;
  box-shadow: 0 4px 16px rgba(180, 131, 36, 0.1) !important;
}

.slide-bullets.conclusion-mode li.conclusion-summary-card::before {
  display: none !important;
}

.conclusion-card-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.conclusion-pill {
  font-family: var(--font-serif);
  font-size: clamp(0.64rem, 0.85vh, 0.7rem);
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--gold-dim);
  color: var(--gold-main);
  border: 1px solid var(--gold-border);
  letter-spacing: 0.06em;
}

.conclusion-unidad {
  font-family: var(--font-serif);
  font-size: clamp(0.66rem, 0.88vh, 0.72rem);
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.conclusion-card-title {
  font-family: var(--font-title);
  font-size: clamp(0.88rem, 1.2vh, 1.02rem);
  font-weight: 600;
  color: var(--oxford-blue);
  margin: 0;
}

.conclusion-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  margin-top: 0.12rem;
}

.conclusion-row {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: clamp(0.72rem, 0.98vh, 0.8rem);
  line-height: 1.38;
}

.conclusion-label {
  font-family: var(--font-serif);
  font-size: clamp(0.66rem, 0.9vh, 0.72rem);
  font-weight: 600;
  color: var(--oxford-blue);
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.conclusion-row.destacado .conclusion-label {
  color: #854d0e;
}

.conclusion-row.problema .conclusion-label {
  color: #b91c1c;
}

.conclusion-text {
  font-family: var(--font-body);
  font-weight: 400;
  color: #334155;
}

.conclusion-row.problema .conclusion-text {
  color: #451a03;
}

.slide-bullets.conclusion-mode li.conclusion-closing-card {
  position: relative !important;
  padding: clamp(0.5rem, 0.88vh, 0.7rem) clamp(0.8rem, 1.15vw, 1.1rem) !important;
  background: linear-gradient(135deg, rgba(253, 252, 247, 0.96) 0%, rgba(245, 240, 225, 0.96) 100%) !important;
  border: 1px solid var(--gold-border) !important;
  border-radius: 6px !important;
  box-shadow: 0 3px 12px rgba(180, 131, 36, 0.08) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.2rem !important;
}

.slide-bullets.conclusion-mode li.conclusion-closing-card::before {
  display: none !important;
}

.closing-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.closing-badge {
  font-family: var(--font-serif);
  font-size: 0.66rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--gold-main);
  color: #ffffff;
  letter-spacing: 0.06em;
}

.closing-title {
  font-family: var(--font-title);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--oxford-blue);
  margin: 0;
}

.closing-text {
  font-family: var(--font-body);
  font-size: clamp(0.74rem, 1.02vh, 0.82rem);
  font-weight: 400;
  color: #334155;
  line-height: 1.42;
  margin: 0;
}
`;

if (!css.includes('FILMINA 25: CONCLUSIÓN GENERAL DE LOS 4 AVANCES')) {
  css += '\n' + cssToAdd;
  fs.writeFileSync('css/styles.css', css, 'utf8');
  console.log('✅ css/styles.css updated with conclusion-mode styles');
} else {
  console.log('ℹ️ css/styles.css already has conclusion-mode styles');
}


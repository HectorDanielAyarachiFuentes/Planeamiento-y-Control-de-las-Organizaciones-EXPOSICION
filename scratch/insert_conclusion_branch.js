const fs = require('fs');

let code = fs.readFileSync('js/app.js', 'utf8');

if (!code.includes('conclusion-summary-card')) {
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

  const targetCRLF = '    } else {\r\n      const bulletsList = slide.puntosClave';
  const targetLF = '    } else {\n      const bulletsList = slide.puntosClave';

  if (code.includes(targetCRLF)) {
    code = code.replace(targetCRLF, conclusionBranch + '\r\n      const bulletsList = slide.puntosClave');
    console.log('✅ Replaced CRLF target');
  } else if (code.includes(targetLF)) {
    code = code.replace(targetLF, conclusionBranch + '\n      const bulletsList = slide.puntosClave');
    console.log('✅ Replaced LF target');
  } else {
    console.error('❌ Could not find target in code');
  }

  fs.writeFileSync('js/app.js', code, 'utf8');
} else {
  console.log('ℹ️ js/app.js already has conclusion-summary-card');
}


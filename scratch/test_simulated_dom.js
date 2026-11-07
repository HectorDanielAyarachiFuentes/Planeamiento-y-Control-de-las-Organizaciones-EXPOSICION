// Test rendering for slides 1, 2, 3
const data = require('../data/presentacion_data.js');

function simulateSlideDOM(slide, index) {
  let bulletsHTML = "";
  if (index === 0 || slide.id === "slide_1" || slide.layout === "intro_showcase") {
    const introCards = [
      {
        badge: "EXPOSITOR",
        icon: "🎓",
        title: "Héctor Daniel Ayarachi Fuentes",
        sub: "Téc. Sup. en Recursos Humanos • Estudiante de Licenciatura",
        meta: "Legajo N° 8252 • CURZAS — Sede Viedma"
      },
      {
        badge: "CASA DE ESTUDIOS",
        icon: "🏛️",
        title: "CURZAS — Sede Viedma",
        sub: "Centro Universitario Regional Zona Atlántica y Sur",
        meta: "Universidad Nacional del Comahue (UNCo)"
      },
      {
        badge: "CÁTEDRA 2026",
        icon: "📚",
        title: "Planeamiento y Control",
        sub: "Ciclo Académico 2026 • Dpto. de Administración Pública",
        meta: "Docentes: Mgter. Susana Lopez • Lic. Carlos Jauge"
      },
      {
        badge: "OBJETIVO DE LA DEFENSA",
        icon: "⚖️",
        title: "Defensa Integral de los 4 Avances",
        sub: "Diagnóstico Situado, Estructura Burocrática, Poligobernanza y Presupuesto",
        meta: "Investigación Institucional Rigurosa • Viedma, Río Negro"
      }
    ];
    bulletsHTML = introCards.map(c => `
      <li class="intro-card">
        <div class="intro-card-header"><span class="intro-card-badge">${c.badge}</span><span class="intro-card-icon">${c.icon}</span></div>
        <h4 class="intro-card-title">${c.title}</h4>
        <p class="intro-card-sub">${c.sub}</p>
        <div class="intro-card-meta">${c.meta}</div>
      </li>
    `).join("");
  } else if (index === 1 || slide.id === "slide_2" || slide.layout === "avances_summary") {
    const avances = [
      { num: "AVANCE 1", eje: "Modelo & Gobernanza", title: "Marco Institucional y Burocracia Profesional", text: "Burocracia profesional que asegura legalidad..." },
      { num: "AVANCE 2", eje: "Poligobernanza & PES", title: "Red Territorial Compleja en 10 Nodos", text: "Superación de silos de datos..." },
      { num: "AVANCE 3", eje: "Estructura & Procesos", title: "Circuitos de Personal y Ecosistema Digital", text: "Organigrama real frente al formal..." },
      { num: "AVANCE 4", eje: "Presupuesto & Personas", title: "Centralidad del Inciso 1 y Factor Humano", text: "90,2% del presupuesto destinado a salarios..." }
    ];
    bulletsHTML = avances.map(a => `
      <li class="avance-summary-card">
        <div class="avance-row-header"><span class="avance-pill">${a.num}</span><span class="avance-eje-tag">${a.eje}</span><h4 class="avance-row-title">${a.title}</h4></div>
        <p class="avance-row-text">${a.text}</p>
      </li>
    `).join("");
  } else {
    bulletsHTML = (slide.puntosClave || []).map(punto => {
      const colonIdx = punto.indexOf(":");
      if (colonIdx > 0 && colonIdx < 50) {
        const concept = punto.slice(0, colonIdx).trim();
        const desc = punto.slice(colonIdx + 1).trim();
        return `<li class="slide-bullet-item"><span class="bullet-concept">${concept}:</span><span class="bullet-desc">${desc}</span></li>`;
      }
      return `<li class="slide-bullet-item"><span class="bullet-desc">${punto}</span></li>`;
    }).join("");
  }
  return bulletsHTML;
}

console.log("=== SLIDE 1 ===");
console.log(simulateSlideDOM(data.slides[0], 0));
console.log("=== SLIDE 2 ===");
console.log(simulateSlideDOM(data.slides[1], 1));
console.log("=== SLIDE 3 ===");
console.log(simulateSlideDOM(data.slides[2], 2));


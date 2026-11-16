const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '../js/app.js');
let content = fs.readFileSync(appPath, 'utf8');

// 1. getDefenseSections() - agregar avance5 y ajustar cierre
const oldSectionTarget = `      {
        id: "avance4",
        code: "AVANCE 4",
        shortLabel: "Avance 4: Unidad IV",
        shortTitle: "AVANCE 4",
        title: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
        range: [19, 23], // filminas 20 a 24
        isEje: true,
        ejeNumber: 4
      },
      {
        id: "cierre",
        code: "CIERRE",
        shortLabel: "Cierre y Defensa",
        shortTitle: "CIERRE",
        title: "Cierre: Conclusiones Integrales y Defensa de Cátedra",
        range: [24, 24], // filmina 25
        isEje: false
      }`;

const newSectionReplacement = `      {
        id: "avance4",
        code: "AVANCE 4",
        shortLabel: "Avance 4: Unidad IV",
        shortTitle: "AVANCE 4",
        title: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
        range: [19, 23], // filminas 20 a 24
        isEje: true,
        ejeNumber: 4
      },
      {
        id: "avance5",
        code: "AVANCE 5",
        shortLabel: "Avance 5: Unidad V",
        shortTitle: "AVANCE 5",
        title: "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)",
        range: [24, 27], // filminas 25 a 28
        isEje: true,
        ejeNumber: 5
      },
      {
        id: "cierre",
        code: "CIERRE",
        shortLabel: "Cierre y Defensa",
        shortTitle: "CIERRE",
        title: "Cierre: Conclusiones Integrales y Defensa de Cátedra",
        range: [28, 28], // filmina 29
        isEje: false
      }`;

if (content.includes(oldSectionTarget)) {
  content = content.replace(oldSectionTarget, newSectionReplacement);
  console.log('1. getDefenseSections updated successfully!');
} else {
  // Intento con normalización de retornos de carro
  const normOld = oldSectionTarget.replace(/\r\n/g, '\n');
  const normContent = content.replace(/\r\n/g, '\n');
  if (normContent.includes(normOld)) {
    content = normContent.replace(normOld, newSectionReplacement.replace(/\r\n/g, '\n'));
    console.log('1. getDefenseSections updated with normalized line endings!');
  } else {
    throw new Error('Could not find oldSectionTarget in js/app.js');
  }
}

// 2. Slide 2: Hoja de ruta - agregar Avance 5 a la lista de avances
const oldAvance4Card = `        {
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
      ];`;

const newAvance5Card = `        {
          num: "AVANCE 4",
          numVal: 4,
          eje: "Unidad IV",
          title: "Programación Presupuestaria y Factor Humano",
          objetivo: "Vincular presupuesto y factor humano: Inciso 1 (Personal) y ciclo presupuestario por programas (Makon).",
          pregunta: "¿Cuál es el presupuesto total y qué % va a personal (Inciso 1)? ¿Estructura de programas oficiales?",
          text: "El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal.",
          targetSlide: 19,
          slideRange: "20 a 24"
        },
        {
          num: "AVANCE 5",
          numVal: 5,
          eje: "Unidad V",
          title: "Sistemas de Control, Tablero de Comando y Evaluación",
          objetivo: "Evaluar el control externo (AGN) e interno (UAI estatutaria, SIGEN), diseñar un Tablero de RR. HH. con 4 KPIs (Ramírez y Mayne) y bucle de retroalimentación (Feinstein).",
          pregunta: "¿Qué organismos auditan y qué observaciones formularon a personal? ¿KPIs formales vigentes? ¿Cómo retroalimenta el control la gestión?",
          text: "UAI con rango estatutario único y reactivación SIGEN (Res. 311/2026); diseño de 4 KPIs estratégicos para superar la brecha histórica de evaluación nodocente y aprendizaje institucional.",
          targetSlide: 24,
          slideRange: "25 a 28"
        }
      ];`;

if (content.includes(oldAvance4Card)) {
  content = content.replace(oldAvance4Card, newAvance5Card);
  console.log('2. Slide 2 avances list updated with Avance 5!');
} else {
  const normOldCard = oldAvance4Card.replace(/\r\n/g, '\n');
  content = content.replace(normOldCard, newAvance5Card.replace(/\r\n/g, '\n'));
  console.log('2. Slide 2 avances list updated with Avance 5 (normalized)!');
}

// 3. Conclusión: actualizar filmina y agregar Avance 5
const oldConclusionCondition = `} else if (index === 24 || slide.id === "slide_25" || slide.layout === "conclusion_summary") {`;
const newConclusionCondition = `} else if (index === this.totalSlides - 1 || slide.id === "slide_29" || slide.layout === "conclusion_summary") {`;

content = content.replace(oldConclusionCondition, newConclusionCondition);
console.log('3a. Conclusion slide index check updated!');

const oldConclusion4Item = `        {
          num: "AVANCE 4",
          unidad: "Unidad IV",
          titulo: "Programación Presupuestaria y Factor Humano",
          hicimos: "Analizamos el presupuesto por programas (Makon, Programa 26) y el impacto del Inciso 1 (Personal).",
          destacado: "El 90,2% del gasto va a salarios docentes/nodocentes, demostrando que las personas son la auténtica capacidad estatal del CURZAS.",
          problema: "Extrema rigidez presupuestaria (solo 9,8% para funcionamiento) y fuerte impacto del 40% de Zona Desfavorable ante el ajuste nacional."
        }
      ];`;

const newConclusion5Item = `        {
          num: "AVANCE 4",
          unidad: "Unidad IV",
          titulo: "Programación Presupuestaria y Factor Humano",
          hicimos: "Analizamos el presupuesto por programas (Makon, Programa 26) y el impacto del Inciso 1 (Personal).",
          destacado: "El 90,2% del gasto va a salarios docentes/nodocentes, demostrando que las personas son la auténtica capacidad estatal del CURZAS.",
          problema: "Extrema rigidez presupuestaria (solo 9,8% para funcionamiento) y fuerte impacto del 40% de Zona Desfavorable ante el ajuste nacional."
        },
        {
          num: "AVANCE 5",
          unidad: "Unidad V",
          titulo: "Sistemas de Control, Tablero de Comando y Evaluación",
          hicimos: "Examinamos el ecosistema AGN/UAI/SIGEN (Res. 311/2026), diagnosticamos la evaluación laboral docente/nodocente y diseñamos un Tablero con 4 KPIs estratégicos.",
          destacado: "Rango estatutario pionero de la UAI en UNCo y bucle de retroalimentación continua que transforma la auditoría punitiva en aprendizaje institucional (Feinstein).",
          problema: "Diferimiento histórico en la aplicación del régimen de calificación nodocente (APUNC) y ausencia previa de un Tablero de Comando con metas de resultado."
        }
      ];`;

if (content.includes(oldConclusion4Item)) {
  content = content.replace(oldConclusion4Item, newConclusion5Item);
  console.log('3b. Conclusion items updated with Avance 5!');
} else {
  const normOldConc = oldConclusion4Item.replace(/\r\n/g, '\n');
  content = content.replace(normOldConc, newConclusion5Item.replace(/\r\n/g, '\n'));
  console.log('3b. Conclusion items updated with Avance 5 (normalized)!');
}

// 4. Ritmo sugerido y tiempo en footer y teleprómpter
const oldFooterRhythm = `<span>⏱️ Ritmo sugerido: ~1.5 min</span>`;
const newFooterRhythm = `<span>⏱️ Ritmo sugerido: ~35-40 seg</span>`;
content = content.replace(oldFooterRhythm, newFooterRhythm);

const oldNotesTime = `slide.tiempoSugerido || "⏱️ ~1.5 min"`;
const newNotesTime = `slide.tiempoSugerido || "⏱️ ~35-40 seg"`;
content = content.replace(oldNotesTime, newNotesTime);
console.log('4. Footer rhythm and notes time updated to ~35-40 seg!');

// 5. slideTargets en renderConsignasTab
const oldSlideTargets = `    const slideTargets = {
      1: { index: 2, range: "Filminas 3 a 7" },
      2: { index: 7, range: "Filminas 8 a 13" },
      3: { index: 13, range: "Filminas 14 a 19" },
      4: { index: 19, range: "Filminas 20 a 24" }
    };`;

const newSlideTargets = `    const slideTargets = {
      1: { index: 2, range: "Filminas 3 a 7" },
      2: { index: 7, range: "Filminas 8 a 13" },
      3: { index: 13, range: "Filminas 14 a 19" },
      4: { index: 19, range: "Filminas 20 a 24" },
      5: { index: 24, range: "Filminas 25 a 28" }
    };`;

if (content.includes(oldSlideTargets)) {
  content = content.replace(oldSlideTargets, newSlideTargets);
  console.log('5. renderConsignasTab slideTargets updated with Avance 5!');
} else {
  const normTargets = oldSlideTargets.replace(/\r\n/g, '\n');
  content = content.replace(normTargets, newSlideTargets.replace(/\r\n/g, '\n'));
  console.log('5. renderConsignasTab slideTargets updated (normalized)!');
}

// 6. renderAvance4Tab: incorporar Avance 5 a avancesDocs y por defecto selectedAvanceNum = 5
const oldAvance4MethodSig = `renderAvance4Tab(selectedAvanceNum = 4) {`;
const newAvance4MethodSig = `renderAvance4Tab(selectedAvanceNum = 5) {`;
content = content.replace(oldAvance4MethodSig, newAvance4MethodSig);

const oldOpenAvance4Sig = `openAvance4Drawer(avanceNum = 4) {`;
const newOpenAvance4Sig = `openAvance4Drawer(avanceNum = 5) {`;
content = content.replace(oldOpenAvance4Sig, newOpenAvance4Sig);

const oldAvancesDocsStart = `    const avancesDocs = [
      {
        num: 4,`;

const newAvancesDocsStart = `    const avancesDocs = [
      {
        num: 5,
        unidad: "Unidad V",
        titulo: "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)",
        subtitulo: "Control Externo/Interno (AGN, UAI, SIGEN Res. 311/2026), 4 KPIs y Bucle de Retroalimentación",
        ruta: "01_Actividades_Catedra/actividad_05/Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf",
        nombre: "Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf",
        tamano: "1.75 MB",
        ext: "pdf",
        desc: "Documento oficial consolidado (versión final octubre 2026). Analiza el ecosistema de fiscalización externa (AGN) e interna (UAI con rango estatutario único y reactivación SIGEN según Resoluciones 299 y 311/2026), la evaluación laboral docente y nodocente (CCT 366/06 y 1246/15), el diseño del Tablero de Control de RR. HH. con 4 KPIs estratégicos (Ramírez y Mayne) y el bucle de retroalimentación para el aprendizaje institucional."
      },
      {
        num: 4,`;

if (content.includes(oldAvancesDocsStart)) {
  content = content.replace(oldAvancesDocsStart, newAvancesDocsStart);
  console.log('6a. renderAvance4Tab avancesDocs updated with Avance 5 PDF!');
} else {
  const normDocs = oldAvancesDocsStart.replace(/\r\n/g, '\n');
  content = content.replace(normDocs, newAvancesDocsStart.replace(/\r\n/g, '\n'));
  console.log('6a. renderAvance4Tab avancesDocs updated (normalized)!');
}

const oldSwitchBtnUnit = `\${d.num === 4 ? 'Unidad IV' : d.num === 3 ? 'Unidad III' : d.num === 2 ? 'Unidad II' : 'Unidad I'}`;
const newSwitchBtnUnit = `\${d.num === 5 ? 'Unidad V' : d.num === 4 ? 'Unidad IV' : d.num === 3 ? 'Unidad III' : d.num === 2 ? 'Unidad II' : 'Unidad I'}`;
content = content.replace(oldSwitchBtnUnit, newSwitchBtnUnit);
console.log('6b. Switcher buttons updated with Unidad V label!');

fs.writeFileSync(appPath, content, 'utf8');
console.log('All changes to js/app.js written successfully!');

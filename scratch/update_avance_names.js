const fs = require('fs');

let content = fs.readFileSync('data/presentacion_data.js', 'utf8');

// 1. Update header comments
content = content.replace(
  /\* 3\. AVANCE 1:[\s\S]*?\* 7\. CIERRE: Conclusiones Integrales, Agradecimiento y Apertura a Preguntas \(Filmina 25\)/,
  `* 3. AVANCE 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I) (Filminas 3 a 7)
 * 4. AVANCE 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II) (Filminas 8 a 13)
 * 5. AVANCE 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III) (Filminas 14 a 19)
 * 6. AVANCE 4: Programación Presupuestaria y Factor Humano (Unidad IV) (Filminas 20 a 24)
 * 7. CIERRE: Conclusiones Integrales, Agradecimiento y Apertura a Preguntas (Filmina 25)`
);

// 2. Update Slide 2 puntosClave
const oldSlide2Bullets = `"Avance 1 (Modelo & Gobernanza): Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
        "Avance 2 (Poligobernanza & PES): Red viva en 10 nodos provinciales, pero con silos de datos con CONICET/INTA y necesidad de concertación política (Matus).",
        "Avance 3 (Estructura & Procesos): El organigrama formal invisibiliza a los nodos; mapeamos el circuito de licencias y el choque entre digital y carga manual.",
        "Avance 4 (Presupuesto & Factor Humano): El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal."`;

const newSlide2Bullets = `"Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
        "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Red viva en 10 nodos provinciales, superando silos de datos con CONICET/INTA mediante concertación política situada (Matus).",
        "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): El organigrama formal invisibiliza a los nodos; mapeamos el circuito de licencias y el choque entre digital y carga manual.",
        "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal."`;

if (content.includes(oldSlide2Bullets)) {
  content = content.replace(oldSlide2Bullets, newSlide2Bullets);
  console.log('Slide 2 bullets replaced successfully');
} else {
  console.log('Warning: oldSlide2Bullets not found verbatim, checking regex...');
}

// 3. Update bloque names
content = content.replace(/"bloque":\s*"AVANCE 1: MODELO Y GOBERNANZA"/g, '"bloque": "AVANCE 1: CONTEXTO, MODELO DE GESTIÓN Y GOBERNANZA (UNIDAD I)"');
content = content.replace(/"bloque":\s*"AVANCE 2: POLIGOBERNANZA Y PES"/g, '"bloque": "AVANCE 2: DIAGNÓSTICO Y PLANIFICACIÓN ESTRATÉGICA SITUACIONAL (UNIDAD II)"');
content = content.replace(/"bloque":\s*"AVANCE 3: ESTRUCTURA Y DIGITALIZACIÓN"/g, '"bloque": "AVANCE 3: DISEÑO ORGANIZACIONAL, PROCESOS Y ECOSISTEMA DIGITAL (UNIDAD III)"');
content = content.replace(/"bloque":\s*"AVANCE 4: PRESUPUESTO Y FACTOR HUMANO"/g, '"bloque": "AVANCE 4: PROGRAMACIÓN PRESUPUESTARIA Y FACTOR HUMANO (UNIDAD IV)"');
content = content.replace(/"bloque":\s*"CIERRE Y CONCLUSIONES"/g, '"bloque": "CIERRE: CONCLUSIONES INTEGRALES Y DEFENSA"');

fs.writeFileSync('data/presentacion_data.js', content, 'utf8');
console.log('data/presentacion_data.js updated successfully!');


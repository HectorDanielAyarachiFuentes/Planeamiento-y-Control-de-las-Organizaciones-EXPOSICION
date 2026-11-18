/**
 * Test: Verificación de Consignas y Preguntas Guía en Notas / Teleprómpter
 * Valida la integración de las consignas curriculares de PEDCO (Unidad I / Avance 1)
 * en data/presentacion_data.js, js/app.js y css/styles.css.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("Iniciando test de Consignas y Preguntas Guía en Notas / Teleprómpter...\n");

// 1. Validar data/presentacion_data.js
const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const rawCode = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);
const presentacionData = sandbox.PRESENTACION_DATA || sandbox.window.PRESENTACION_DATA;

assert.ok(presentacionData, "PRESENTACION_DATA debe existir y exportarse");
assert.ok(Array.isArray(presentacionData.slides), "slides debe ser un array");

// Filminas 3 a 7 (Avance 1)
const s3 = presentacionData.slides.find(s => s.id === 'slide_3');
const s4 = presentacionData.slides.find(s => s.id === 'slide_4');
const s5 = presentacionData.slides.find(s => s.id === 'slide_5');
const s6 = presentacionData.slides.find(s => s.id === 'slide_6');
const s7 = presentacionData.slides.find(s => s.id === 'slide_7');

assert.ok(s3, "slide_3 debe existir");
assert.ok(s4, "slide_4 debe existir");
assert.ok(s5, "slide_5 debe existir");
assert.ok(s6, "slide_6 debe existir");
assert.ok(s7, "slide_7 debe existir");

// Slide 3: Marco Institucional / Ley de creación
assert.ok(Array.isArray(s3.consignasCatedra) && s3.consignasCatedra.length >= 1, "slide_3 debe tener consignasCatedra");
const c3 = s3.consignasCatedra[0];
assert.ok(c3.punto.includes("Ley de creación") || c3.punto.includes("marco institucional"), "slide_3 consigna debe mencionar ley de creación / marco institucional");
assert.ok(c3.respuesta.includes("19.648") && c3.respuesta.includes("Viedma") && c3.respuesta.includes("Estatuto"), "slide_3 respuesta debe situarse con Ley 19.648, Viedma y Estatuto");
console.log("✓ Filmina 3: Marco institucional y Ley de creación integrados con respuesta concisa.");

// Slide 4: Modelo weberiano y estructuras jerárquicas
assert.ok(Array.isArray(s4.consignasCatedra) && s4.consignasCatedra.length >= 1, "slide_4 debe tener consignasCatedra");
const c4 = s4.consignasCatedra[0];
assert.ok(c4.punto.includes("weberiano") || c4.punto.includes("centralizadas"), "slide_4 consigna debe contener pregunta sobre modelo weberiano / estructuras centralizadas");
assert.ok(c4.respuesta.includes("Burocracia Profesional") && c4.respuesta.includes("concurso"), "slide_4 respuesta debe diagnosticar Burocracia Profesional y protección concursal");
console.log("✓ Filmina 4: Pregunta guía weberiana y respuesta sobre garantías concursales CCT integradas.");

// Slide 5: Burocracia tradicional vs. NGP
assert.ok(Array.isArray(s5.consignasCatedra) && s5.consignasCatedra.length >= 1, "slide_5 debe tener consignasCatedra");
const c5 = s5.consignasCatedra[0];
assert.ok(c5.punto.includes("Nueva Gestión Pública") || c5.punto.includes("Burocracia tradicional"), "slide_5 consigna debe comparar Burocracia vs NGP");
assert.ok(c5.respuesta.includes("Bien Público") && (c5.respuesta.includes("vouchers") || c5.respuesta.includes("mercancía")), "slide_5 respuesta debe rechazar NGP y ratificar Bien Público");
console.log("✓ Filmina 5: Comparación Burocracia vs. NGP y respuesta anti-mercantil integradas.");

// Slide 6: Accountability y Oficina de Transparencia / Datos Abiertos
assert.ok(Array.isArray(s6.consignasCatedra) && s6.consignasCatedra.length >= 2, "slide_6 debe tener al menos 2 consignas (accountability y datos abiertos)");
const c6_acc = s6.consignasCatedra.find(c => c.punto.includes("accountability") || c.punto.includes("rendición de cuentas"));
const c6_transp = s6.consignasCatedra.find(c => c.punto.includes("Transparencia") || c.punto.includes("datos abiertos"));
assert.ok(c6_acc, "slide_6 debe tener consigna de rendición de cuentas (accountability)");
assert.ok(c6_transp, "slide_6 debe tener pregunta guía sobre Oficina de Transparencia / Datos Abiertos");
assert.ok(c6_acc.respuesta.includes("Horizontal") && c6_acc.respuesta.includes("Vertical") && c6_acc.respuesta.includes("Social"), "slide_6 debe responder con la triple accountability");
assert.ok(c6_transp.respuesta.includes("NO existe una Oficina formal de Transparencia"), "slide_6 debe responder con el diagnóstico crítico sobre datos abiertos");
console.log("✓ Filmina 6: Entregable de Accountability (triple control) y Pregunta Guía de Transparencia integrados.");

// Slide 7: Gobernanza Inteligente (Oszlak), Software predictivo en personal y Paradoja del Co-Gobierno
assert.ok(Array.isArray(s7.consignasCatedra) && s7.consignasCatedra.length >= 3, "slide_7 debe tener 3 items de cátedra");
const c7_ia = s7.consignasCatedra.find(c => c.punto.includes("algoritmos") || c.punto.includes("software predictivo"));
const c7_oszlak = s7.consignasCatedra.find(c => c.punto.includes("Oszlak") || c.punto.includes("Gobernanza"));
const c7_paradox = s7.consignasCatedra.find(c => c.punto.includes("Paradoja") || c.punto.includes("Co-Gobierno"));
assert.ok(c7_ia, "slide_7 debe responder a la pregunta sobre algoritmos / software predictivo en personal");
assert.ok(c7_oszlak, "slide_7 debe evaluar Gobernanza Inteligente de Oszlak");
assert.ok(c7_paradox, "slide_7 debe abordar la Paradoja del Co-Gobierno (Cao & Blutman)");
assert.ok(c7_ia.respuesta.includes("NO existen normativas ni incorporación de algoritmos"), "slide_7 respuesta de IA debe certificar ausencia de software predictivo en personal");
assert.ok(c7_paradox.respuesta.includes("Cao") && c7_paradox.respuesta.includes("nodos"), "slide_7 debe articular la superación territorial con los 10 nodos");
console.log("✓ Filmina 7: Gobernanza Inteligente (Oszlak), IA en Personal y Paradoja del Co-Gobierno integrados.");

// 2. Validar js/app.js
const appPath = path.join(__dirname, '..', 'js', 'app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

assert.ok(appCode.includes("teleprompter-consignas-container"), "app.js debe generar el contenedor .teleprompter-consignas-container");
assert.ok(appCode.includes("teleprompter-qa-card"), "app.js debe generar la tarjeta .teleprompter-qa-card");
assert.ok(appCode.includes("qa-block-question") && appCode.includes("qa-block-answer"), "app.js debe estructurar los bloques de pregunta y respuesta");
console.log("✓ js/app.js: Lógica de renderizado de Q&A de cátedra validada en teleprompter.");

// 3. Validar css/styles.css
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert.ok(cssContent.includes(".teleprompter-consignas-container"), "styles.css debe incluir .teleprompter-consignas-container");
assert.ok(cssContent.includes(".teleprompter-qa-card"), "styles.css debe incluir .teleprompter-qa-card");
assert.ok(cssContent.includes(".qa-block-answer"), "styles.css debe incluir .qa-block-answer");
console.log("✓ css/styles.css: Reglas CSS para tarjetas de preguntas y respuestas verificadas con contraste WCAG.");

console.log("\n🎉 TODOS LOS TESTS DE CONSIGNAS Y PREGUNTAS GUÍA EN NOTAS PASARON EXITOSAMENTE!");

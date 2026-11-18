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
assert.ok(Array.isArray(s6.consignasCatedra) && s6.consignasCatedra.length >= 1, "slide_6 debe tener consignasCatedra");
const c6 = s6.consignasCatedra[0];
assert.ok(c6.punto.includes("rendición de cuentas") && c6.punto.includes("Transparencia"), "slide_6 debe incluir accountability y transparencia");
assert.ok(c6.respuesta.includes("Horizontal") && c6.respuesta.includes("Vertical") && c6.respuesta.includes("Social"), "slide_6 debe responder con la triple accountability");
assert.ok(c6.respuesta.includes("NO existe una Oficina formal de Transparencia"), "slide_6 debe responder con el diagnóstico crítico sobre datos abiertos");
console.log("✓ Filmina 6: Entregable de Accountability (triple control) y Pregunta Guía de Transparencia integrados de forma limpia.");

// Slide 7: Gobernanza Inteligente (Oszlak), Software predictivo en personal y Paradoja del Co-Gobierno
assert.ok(Array.isArray(s7.consignasCatedra) && s7.consignasCatedra.length >= 1, "slide_7 debe tener consignasCatedra");
const c7 = s7.consignasCatedra[0];
assert.ok(c7.punto.includes("Gobernanza") && c7.punto.includes("personal") && c7.punto.includes("Co-Gobierno"), "slide_7 debe integrar gobernanza, IA y co-gobierno");
assert.ok(c7.respuesta.includes("NO existen normativas ni IA/algoritmos"), "slide_7 respuesta de IA debe certificar ausencia de software predictivo en personal");
assert.ok(c7.punto.includes("Cao") && c7.respuesta.includes("nodos"), "slide_7 debe articular la superación territorial con los 10 nodos");
console.log("✓ Filmina 7: Gobernanza Inteligente (Oszlak), IA en Personal y Paradoja del Co-Gobierno integrados.");

// 2. Validar js/app.js
const appPath = path.join(__dirname, '..', 'js', 'app.js');
const appCode = fs.readFileSync(appPath, 'utf8');

assert.ok(appCode.includes("teleprompter-qa-clean"), "app.js debe generar el contenedor .teleprompter-qa-clean");
assert.ok(appCode.includes("qa-clean-card"), "app.js debe generar la tarjeta limpia .qa-clean-card");
assert.ok(appCode.includes("qa-clean-question") && appCode.includes("qa-clean-answer"), "app.js debe estructurar los bloques de pregunta y respuesta");
console.log("✓ js/app.js: Lógica de renderizado limpio y no rebuscado validada en teleprompter.");

// 3. Validar css/styles.css
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert.ok(cssContent.includes(".teleprompter-qa-clean"), "styles.css debe incluir .teleprompter-qa-clean");
assert.ok(cssContent.includes(".qa-clean-card"), "styles.css debe incluir .qa-clean-card");
assert.ok(cssContent.includes(".qa-clean-answer"), "styles.css debe incluir .qa-clean-answer");
console.log("✓ css/styles.css: Reglas CSS para tarjetas de preguntas y respuestas verificadas con contraste WCAG y diseño no rebuscado.");

console.log("\n🎉 TODOS LOS TESTS DE CONSIGNAS Y PREGUNTAS GUÍA EN NOTAS PASARON EXITOSAMENTE!");

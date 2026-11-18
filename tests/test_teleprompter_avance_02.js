/**
 * Test: Verificación de Consignas y Jerarquía Curricular en Avance 2 (Filminas 8 a 13)
 * Valida que la Filmina 8 inicie con la Matriz FODA (Entregable 1) y continúe
 * en la jerarquía exacta de la cátedra PEDCO:
 * Filmina 8: FODA Interna (Fortalezas y Debilidades)
 * Filmina 9: FODA Externa (Oportunidades y Amenazas)
 * Filmina 10: Mapeo de Actores Clave (Stakeholders en RR. HH.)
 * Filmina 11: Capacidades Estatales según Julián Bertranou
 * Filmina 12: Competencias Técnicas y Brecha Digital en Personal
 * Filmina 13: Enfoque de Planificación: Modelo Normativo vs. Situacional (PES Matus)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("Iniciando test de Jerarquía Curricular de Avance 2 (Filminas 8 a 13)...\n");

const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const rawCode = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);
const presentacionData = sandbox.PRESENTACION_DATA || sandbox.window.PRESENTACION_DATA;

assert.ok(presentacionData, "PRESENTACION_DATA debe existir");

const s8 = presentacionData.slides.find(s => s.id === 'slide_8');
const s9 = presentacionData.slides.find(s => s.id === 'slide_9');
const s10 = presentacionData.slides.find(s => s.id === 'slide_10');
const s11 = presentacionData.slides.find(s => s.id === 'slide_11');
const s12 = presentacionData.slides.find(s => s.id === 'slide_12');
const s13 = presentacionData.slides.find(s => s.id === 'slide_13');

// 1. Filmina 8 DEBE ser la primera consigna: Matriz FODA Interna (Fortalezas y Debilidades)
assert.strictEqual(s8.numero, 8, "slide_8 debe ser la filmina 8");
assert.ok(s8.titulo.includes("FODA") && s8.titulo.includes("Fortalezas"), "slide_8 DEBE ser la Matriz FODA (Fortalezas y Debilidades)");
assert.ok(s8.consignasCatedra[0].punto.includes("fortalezas y debilidades"), "slide_8 debe responder a la pregunta guía de FODA interno");
assert.ok(s8.consignasCatedra[0].respuesta.includes("Fortalezas Internas") && s8.consignasCatedra[0].respuesta.includes("Debilidades Internas"), "slide_8 debe listar F y D al grano");
console.log("✓ Filmina 8: Jerarquía respetada -> Abre Avance 2 respondiendo la primera consigna del FODA interno.");

// 2. Filmina 9 DEBE ser Matriz FODA Externa (Oportunidades y Amenazas)
assert.strictEqual(s9.numero, 9, "slide_9 debe ser la filmina 9");
assert.ok(s9.titulo.includes("FODA") && s9.titulo.includes("Oportunidades"), "slide_9 debe ser la Matriz FODA Externa");
assert.ok(s9.consignasCatedra[0].respuesta.includes("Oportunidades") && s9.consignasCatedra[0].respuesta.includes("Amenazas"), "slide_9 debe listar O y A al grano");
console.log("✓ Filmina 9: Completa la Matriz FODA con el entorno patagónico y presupuesto nacional.");

// 3. Filmina 10 DEBE ser el Entregable 2: Mapeo de Actores Clave (Stakeholders en RR. HH.)
assert.strictEqual(s10.numero, 10, "slide_10 debe ser la filmina 10");
assert.ok(s10.titulo.includes("Actores Clave") || s10.titulo.includes("Stakeholders"), "slide_10 debe ser Mapeo de Actores Clave");
assert.ok(s10.consignasCatedra[0].respuesta.includes("Consejo Directivo") && s10.consignasCatedra[0].respuesta.includes("APUNC"), "slide_10 debe mapear actores clave");
console.log("✓ Filmina 10: Entregable 2 (Mapeo de Actores Clave) validado en su posición jerárquica.");

// 4. Filmina 11 DEBE ser el Entregable 3: Capacidades Estatales según Julián Bertranou
assert.strictEqual(s11.numero, 11, "slide_11 debe ser la filmina 11");
assert.ok(s11.titulo.includes("Bertranou") || s11.titulo.includes("Capacidades Estatales"), "slide_11 debe ser Bertranou");
assert.ok(s11.consignasCatedra[0].respuesta.includes("Político-Relacional") && s11.consignasCatedra[0].respuesta.includes("Administrativo-Organizacional"), "slide_11 debe evaluar las 3 dimensiones de Bertranou");
console.log("✓ Filmina 11: Entregable 3 (Capacidades Estatales según Bertranou) validado.");

// 5. Filmina 12 DEBE ser la Pregunta Guía de Competencias Técnicas y Brecha Digital
assert.strictEqual(s12.numero, 12, "slide_12 debe ser la filmina 12");
assert.ok(s12.titulo.includes("Competencias Técnicas") || s12.titulo.includes("Brecha Digital"), "slide_12 debe ser Competencias Técnicas");
assert.ok(s12.consignasCatedra[0].respuesta.includes("brecha digital") && s12.consignasCatedra[0].respuesta.includes("SUDOCU"), "slide_12 debe responder sobre brecha digital en personal");
console.log("✓ Filmina 12: Pregunta Guía de Competencias Técnicas y Brecha Digital validada.");

// 6. Filmina 13 DEBE ser el Enfoque de Planificación: Modelo Normativo vs. Situacional (PES Matus)
assert.strictEqual(s13.numero, 13, "slide_13 debe ser la filmina 13");
assert.ok(s13.titulo.includes("Situacional") || s13.titulo.includes("PES"), "slide_13 debe ser PES Matus");
assert.ok(s13.diagramaSVG && s13.diagramaSVG.includes("matus"), "slide_13 debe incluir el diagrama SVG de Matus");
assert.ok(s13.consignasCatedra[0].respuesta.includes("Carlos Matus"), "slide_13 debe fundamentar el PES de Carlos Matus");
console.log("✓ Filmina 13: Cierre de Avance 2 con Enfoque Situacional (PES Matus) y viabilidad institucional.");

// 7. Validar el diseño limpio y no rebuscado en js/app.js y css/styles.css
const appCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
const cssCode = fs.readFileSync(path.join(__dirname, '..', 'css', 'styles.css'), 'utf8');

assert.ok(appCode.includes("teleprompter-qa-clean") && appCode.includes("qa-clean-card"), "app.js debe usar la estructura limpia .qa-clean-card");
assert.ok(!appCode.includes("qa-block-question"), "app.js no debe tener bloques anidados qa-block-question");
assert.ok(cssCode.includes(".teleprompter-qa-clean") && cssCode.includes(".qa-clean-card"), "styles.css debe incluir estilos para .qa-clean-card");
console.log("✓ Diseño limpio y no rebuscado: Estructura de tarjeta única sin cajas anidadas verificada.");

console.log("\n🎉 TODOS LOS TESTS DE JERARQUÍA Y DISEÑO LIMPIO PASARON EXITOSAMENTE!");

/**
 * Test: Verificación de Consignas y Jerarquía Curricular en Avance 5 (Filminas 25 a 29)
 * Valida la integración limpia y al grano de los entregables y preguntas guía oficiales de PEDCO:
 * Filmina 25: Organismos de Control (AGN, UAI con rango estatutario, Res. SIGEN 311/2026 y observaciones a personal)
 * Filmina 26: Evaluación del Desempeño Laboral (Docente CCT 1246 vs Nodocente CCT 366) y Brecha de Medición (Telma Ramírez)
 * Filmina 27: Tablero de Control de RR. HH. con 4 KPIs Estratégicos (Tiempos, Calidad, Capacitación y Nodos)
 * Filmina 28: Circuito de Control, SISAC, Evaluación Pragmática (Feinstein) y Bucle de Retroalimentación
 * Filmina 29: Conclusión General y Síntesis Crítica de los 5 Avances Curriculares
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("Iniciando test de Jerarquía Curricular y Consignas de Avance 5 (Filminas 25 a 29)...\n");

const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const rawCode = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);
const presentacionData = sandbox.PRESENTACION_DATA || sandbox.window.PRESENTACION_DATA;

assert.ok(presentacionData, "PRESENTACION_DATA debe existir");

const s25 = presentacionData.slides.find(s => s.id === 'slide_25');
const s26 = presentacionData.slides.find(s => s.id === 'slide_26');
const s27 = presentacionData.slides.find(s => s.id === 'slide_27');
const s28 = presentacionData.slides.find(s => s.id === 'slide_28');
const s29 = presentacionData.slides.find(s => s.id === 'slide_29');

assert.ok(s25 && s26 && s27 && s28 && s29, "Las 5 filminas del Avance 5 / Cierre deben existir");

// 1. Filmina 25: Entregable 1 & Pregunta Guía 1 (Organismos de Control y Observaciones en Personal)
assert.strictEqual(s25.numero, 25, "slide_25 debe ser la filmina 25");
assert.ok(s25.titulo.includes("AGN") && s25.titulo.includes("UAI") && s25.titulo.includes("SIGEN"), "slide_25 debe abordar AGN, UAI y SIGEN");
assert.strictEqual(s25.consignasCatedra.length, 1, "slide_25 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s25.consignasCatedra[0].punto.includes("organismos auditan") && s25.consignasCatedra[0].punto.includes("observaciones se formularon al área de personal"), "slide_25 debe preguntar por organismos y observaciones a personal");
assert.ok(s25.consignasCatedra[0].respuesta.includes("AGN") && s25.consignasCatedra[0].respuesta.includes("UAI Estatutaria") && s25.consignasCatedra[0].respuesta.includes("311/2026"), "slide_25 debe citar AGN, UAI estatutaria y Res. SIGEN 311/2026");
assert.ok(s25.consignasCatedra[0].respuesta.includes("evaluación nodocente"), "slide_25 debe reportar las observaciones a personal");
console.log("✓ Filmina 25: Entregable 1 & Pregunta Guía 1 (Organismos de Control y Observaciones en Personal) validada.");

// 2. Filmina 26: Pregunta Guía 2 (Metas Cuantitativas y Evaluación del Rendimiento Laboral)
assert.strictEqual(s26.numero, 26, "slide_26 debe ser la filmina 26");
assert.ok(s26.titulo.includes("Evaluación del Desempeño") && s26.titulo.includes("Brecha de Medición"), "slide_26 debe ser Evaluación del Desempeño");
assert.strictEqual(s26.consignasCatedra.length, 1, "slide_26 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s26.consignasCatedra[0].punto.includes("metas cuantitativas") && s26.consignasCatedra[0].punto.includes("rendimiento laboral"), "slide_26 debe preguntar por metas cuantitativas y rendimiento");
assert.ok(s26.consignasCatedra[0].respuesta.includes("CCT Dec. 1246/15") && s26.consignasCatedra[0].respuesta.includes("CCT Dec. 366/06"), "slide_26 debe contrastar CCT docente y nodocente");
assert.ok(s26.consignasCatedra[0].respuesta.includes("diferimiento histórico") && s26.consignasCatedra[0].respuesta.includes("Telma Ramírez"), "slide_26 debe diagnosticar el diferimiento con APUNC y la brecha señalada por Ramírez");
console.log("✓ Filmina 26: Pregunta Guía 2 (Metas Cuantitativas, Asimetría CCTs y Brecha de Medición) validada.");

// 3. Filmina 27: Entregable 2 (Tablero de Control de RR. HH. con al menos 3 KPIs)
assert.strictEqual(s27.numero, 27, "slide_27 debe ser la filmina 27");
assert.ok(s27.titulo.includes("Tablero de Control") && s27.titulo.includes("KPIs"), "slide_27 debe ser Tablero de Control");
assert.strictEqual(s27.consignasCatedra.length, 1, "slide_27 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s27.consignasCatedra[0].punto.includes("Tablero de Control") && s27.consignasCatedra[0].punto.includes("al menos 3 Indicadores Clave de Gestión (KPIs)"), "slide_27 debe requerir Tablero con al menos 3 KPIs");
assert.ok(s27.consignasCatedra[0].respuesta.includes("KPI-1") && s27.consignasCatedra[0].respuesta.includes("KPI-2") && s27.consignasCatedra[0].respuesta.includes("KPI-3") && s27.consignasCatedra[0].respuesta.includes("KPI-4"), "slide_27 debe definir los 4 KPIs estratégicos");
assert.ok(s27.consignasCatedra[0].respuesta.includes("<= 5 días") && s27.consignasCatedra[0].respuesta.includes(">= 99,0%"), "slide_27 debe incluir metas concretas de eficiencia y calidad");
console.log("✓ Filmina 27: Entregable 2 (Tablero de Control con 4 KPIs Estratégicos de Personal) validada.");

// 4. Filmina 28: Objetivo General & Circuito de Control y Retroalimentación
assert.strictEqual(s28.numero, 28, "slide_28 debe ser la filmina 28");
assert.ok(s28.titulo.includes("Circuito de Control") && s28.titulo.includes("Retroalimentación"), "slide_28 debe ser Circuito de Control y Retroalimentación");
assert.strictEqual(s28.consignasCatedra.length, 1, "slide_28 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s28.consignasCatedra[0].punto.includes("circuito de control") && s28.consignasCatedra[0].punto.includes("no sean punitivas"), "slide_28 debe abordar el control formativo no punitivo");
assert.ok(s28.consignasCatedra[0].respuesta.includes("4 Eslabones") && s28.consignasCatedra[0].respuesta.includes("Feinstein") && s28.consignasCatedra[0].respuesta.includes("SISAC"), "slide_28 debe incluir los 4 eslabones, Feinstein y SISAC");
console.log("✓ Filmina 28: Objetivo General & Circuito de Control No Punitivo y Bucle de Aprendizaje validada.");

// 5. Filmina 29: Conclusión General & Síntesis Crítica de los 5 Avances
assert.strictEqual(s29.numero, 29, "slide_29 debe ser la filmina 29");
assert.ok(s29.titulo.includes("Conclusión General") && s29.titulo.includes("5 Avances"), "slide_29 debe ser Conclusión General");
assert.strictEqual(s29.consignasCatedra.length, 1, "slide_29 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s29.consignasCatedra[0].punto.includes("5 Unidades") || s29.consignasCatedra[0].punto.includes("5 Avances"), "slide_29 debe consultar síntesis de las 5 unidades");
assert.ok(s29.consignasCatedra[0].respuesta.includes("Avance 1") && s29.consignasCatedra[0].respuesta.includes("Avance 2") && s29.consignasCatedra[0].respuesta.includes("Avance 3") && s29.consignasCatedra[0].respuesta.includes("Avance 4") && s29.consignasCatedra[0].respuesta.includes("Avance 5"), "slide_29 debe sintetizar los 5 avances con situación observada y solución");
console.log("✓ Filmina 29: Conclusión General & Síntesis Crítica Integradora de los 5 Avances validada.");

console.log("\n🎉 TODOS LOS TESTS DE JERARQUÍA CURRICULAR Y CONSIGNAS DE AVANCE 5 PASARON EXITOSAMENTE!");

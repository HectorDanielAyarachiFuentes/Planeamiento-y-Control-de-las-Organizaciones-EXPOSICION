/**
 * Test: Verificación de Consignas y Jerarquía Curricular en Avance 4 (Filminas 20 a 24)
 * Valida la integración limpia y al grano de los entregables y preguntas guía oficiales de PEDCO:
 * Filmina 20: Presupuesto Total ($4.877M) y Centralidad del Inciso 1 (90,2% Personal)
 * Filmina 21: Factores Estructurales: Zona Desfavorable (40%) y Distribución por Claustros (68% / 32%)
 * Filmina 22: Presupuesto por Programas (Makon / CEPAL) y Planilla Oficial (Programa 26)
 * Filmina 23: Ciclo Presupuestario (Schweinheim / Ley 24.156) e Interconexión SIU-Pilagá / Mapuche / e-SIDIF
 * Filmina 24: El Factor Humano como la Auténtica Capacidad Estatal (Bertranou / Matus)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("Iniciando test de Jerarquía Curricular y Consignas de Avance 4 (Filminas 20 a 24)...\n");

const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const rawCode = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);
const presentacionData = sandbox.PRESENTACION_DATA || sandbox.window.PRESENTACION_DATA;

assert.ok(presentacionData, "PRESENTACION_DATA debe existir");

const s20 = presentacionData.slides.find(s => s.id === 'slide_20');
const s21 = presentacionData.slides.find(s => s.id === 'slide_21');
const s22 = presentacionData.slides.find(s => s.id === 'slide_22');
const s23 = presentacionData.slides.find(s => s.id === 'slide_23');
const s24 = presentacionData.slides.find(s => s.id === 'slide_24');

assert.ok(s20 && s21 && s22 && s23 && s24, "Las 5 filminas del Avance 4 deben existir");

// 1. Filmina 20: Entregable 1 & Pregunta Guía 1 (Presupuesto Total e Inciso 1)
assert.strictEqual(s20.numero, 20, "slide_20 debe ser la filmina 20");
assert.ok(s20.titulo.includes("Inciso 1") && s20.titulo.includes("Presupuesto"), "slide_20 debe abordar Presupuesto e Inciso 1");
assert.strictEqual(s20.consignasCatedra.length, 1, "slide_20 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s20.consignasCatedra[0].punto.includes("presupuesto total") && s20.consignasCatedra[0].punto.includes("Inciso 1"), "slide_20 debe preguntar por presupuesto total e Inciso 1");
assert.ok(s20.consignasCatedra[0].respuesta.includes("4.877 Millones") && s20.consignasCatedra[0].respuesta.includes("90,2%"), "slide_20 debe responder $4.877M y 90,2%");
assert.ok(s20.consignasCatedra[0].respuesta.includes("9,8%"), "slide_20 debe cuantificar el margen operativo crítico");
console.log("✓ Filmina 20: Entregable 1 & Pregunta Guía 1 (Presupuesto Total e Inciso 1: 90,2%) validada.");

// 2. Filmina 21: Qué buscar: Zona Desfavorable (40%) y Distribución Claustros
assert.strictEqual(s21.numero, 21, "slide_21 debe ser la filmina 21");
assert.ok(s21.titulo.includes("Zona Desfavorable") && s21.titulo.includes("Claustros"), "slide_21 debe ser Zona y Claustros");
assert.strictEqual(s21.consignasCatedra.length, 1, "slide_21 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s21.consignasCatedra[0].respuesta.includes("40%") && s21.consignasCatedra[0].respuesta.includes("Zona Desfavorable"), "slide_21 debe detallar el 40% patagónico");
assert.ok(s21.consignasCatedra[0].respuesta.includes("68%") && s21.consignasCatedra[0].respuesta.includes("32%"), "slide_21 debe detallar 68% docentes y 32% nodocentes");
console.log("✓ Filmina 21: Qué buscar (Plus Zonal 40% y distribución salarial por claustros) validada.");

// 3. Filmina 22: Entregable 2 & Pregunta Guía 2 (Presupuesto por Programas)
assert.strictEqual(s22.numero, 22, "slide_22 debe ser la filmina 22");
assert.ok(s22.titulo.includes("Presupuesto por Programas"), "slide_22 debe ser Presupuesto por Programas");
assert.strictEqual(s22.consignasCatedra.length, 1, "slide_22 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s22.consignasCatedra[0].punto.includes("programas del organismo") && s22.consignasCatedra[0].punto.includes("planilla presupuestaria oficial"), "slide_22 debe indagar la estructura oficial de programas");
assert.ok(s22.consignasCatedra[0].respuesta.includes("Programa 26") && s22.consignasCatedra[0].respuesta.includes("Marcos Makon"), "slide_22 debe responder con Programa 26 y Marcos Makon");
console.log("✓ Filmina 22: Entregable 2 & Pregunta Guía 2 (Presupuesto por Programas / Programa 26) validada.");

// 4. Filmina 23: Entregable 2 (Ciclo Presupuestario y Sistemas SIU)
assert.strictEqual(s23.numero, 23, "slide_23 debe ser la filmina 23");
assert.ok(s23.titulo.includes("Ciclo Presupuestario") && s23.titulo.includes("Sistemas"), "slide_23 debe ser Ciclo Presupuestario");
assert.strictEqual(s23.consignasCatedra.length, 1, "slide_23 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s23.consignasCatedra[0].punto.includes("ciclo presupuestario") && s23.consignasCatedra[0].punto.includes("Ley 24.156"), "slide_23 debe indagar el ciclo bajo Ley 24.156");
assert.ok(s23.consignasCatedra[0].respuesta.includes("Schweinheim") && s23.consignasCatedra[0].respuesta.includes("SIU-Pilagá") && s23.consignasCatedra[0].respuesta.includes("SIU-Mapuche") && s23.consignasCatedra[0].respuesta.includes("e-SIDIF"), "slide_23 debe integrar Schweinheim, Pilagá, Mapuche y e-SIDIF");
console.log("✓ Filmina 23: Entregable 2 (Ciclo Presupuestario Ley 24.156 e Interconexión de Sistemas) validada.");

// 5. Filmina 24: Objetivo General & Síntesis (Factor Humano como Capacidad Estatal)
assert.strictEqual(s24.numero, 24, "slide_24 debe ser la filmina 24");
assert.ok(s24.titulo.includes("Factor Humano") && s24.titulo.includes("Capacidad Estatal"), "slide_24 debe ser Factor Humano como Capacidad");
assert.strictEqual(s24.consignasCatedra.length, 1, "slide_24 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s24.consignasCatedra[0].punto.includes("vincula la planificación política") && s24.consignasCatedra[0].punto.includes("capacidad estatal"), "slide_24 debe responder al objetivo general de vinculación política-recursos");
assert.ok(s24.consignasCatedra[0].respuesta.includes("Bertranou") && s24.consignasCatedra[0].respuesta.includes("derecho social"), "slide_24 debe fundamentar con Bertranou y educación como derecho social");
console.log("✓ Filmina 24: Objetivo General (Vinculación Planificación-Presupuesto y Factor Humano) validada.");

console.log("\n🎉 TODOS LOS TESTS DE JERARQUÍA CURRICULAR Y CONSIGNAS DE AVANCE 4 PASARON EXITOSAMENTE!");

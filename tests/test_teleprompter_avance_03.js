/**
 * Test: Verificación de Consignas y Jerarquía Curricular en Avance 3 (Filminas 14 a 19)
 * Valida la integración limpia y al grano de los entregables y preguntas guía oficiales de PEDCO:
 * Filmina 14: Organigrama Institucional (Estructura formal vs. real, red de 10 nodos y CCTs)
 * Filmina 15: Centralización vs. Desconcentración y Gestión de Autorizaciones Internas
 * Filmina 16: Flujograma de Proceso Clave de Personal (Trámite de licencias en 6 etapas)
 * Filmina 17: Transición a SUDOCU vs GDE/TAD y Cuellos de Botella (Subrogancia y doble carga)
 * Filmina 18: Inercia Estructural, Falsa Digitalización y "Salir del Paso" (Campos / Forester)
 * Filmina 19: Propuestas de Rediseño (Firma Digital PKI, API, Subrogancia y Capacitación APUNC)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log("Iniciando test de Jerarquía Curricular y Consignas de Avance 3 (Filminas 14 a 19)...\n");

const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const rawCode = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);
const presentacionData = sandbox.PRESENTACION_DATA || sandbox.window.PRESENTACION_DATA;

assert.ok(presentacionData, "PRESENTACION_DATA debe existir");

const s14 = presentacionData.slides.find(s => s.id === 'slide_14');
const s15 = presentacionData.slides.find(s => s.id === 'slide_15');
const s16 = presentacionData.slides.find(s => s.id === 'slide_16');
const s17 = presentacionData.slides.find(s => s.id === 'slide_17');
const s18 = presentacionData.slides.find(s => s.id === 'slide_18');
const s19 = presentacionData.slides.find(s => s.id === 'slide_19');

assert.ok(s14 && s15 && s16 && s17 && s18 && s19, "Las 6 filminas del Avance 3 deben existir");

// 1. Filmina 14: Entregable 1 & Pregunta Guía de Organigrama
assert.strictEqual(s14.numero, 14, "slide_14 debe ser la filmina 14");
assert.ok(s14.titulo.includes("Organigrama") && s14.titulo.includes("Formal vs. Estructura Real"), "slide_14 debe ser Organigrama Formal vs Real");
assert.strictEqual(s14.consignasCatedra.length, 1, "slide_14 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s14.consignasCatedra[0].punto.includes("organigrama real coincide"), "slide_14 punto debe contener la pregunta sobre coincidencia de organigrama");
assert.ok(s14.consignasCatedra[0].respuesta.includes("NO coincide") && s14.consignasCatedra[0].respuesta.includes("10 nodos"), "slide_14 respuesta debe declarar NO coincide y citar los 10 nodos");
assert.ok(s14.consignasCatedra[0].respuesta.includes("Telma Ramírez") && s14.consignasCatedra[0].respuesta.includes("CCT 366/06"), "slide_14 debe vincular la administración burocrática de RRHH y el CCT");
console.log("✓ Filmina 14: Entregable 1 & Pregunta Guía de Organigrama Formal vs Real validada.");

// 2. Filmina 15: Entregable 2 & Pregunta Guía de Centralización vs Desconcentración
assert.strictEqual(s15.numero, 15, "slide_15 debe ser la filmina 15");
assert.ok(s15.titulo.includes("Centralización y Desconcentración"), "slide_15 debe ser Centralización y Desconcentración");
assert.strictEqual(s15.consignasCatedra.length, 1, "slide_15 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s15.consignasCatedra[0].punto.includes("centralización o descentralización") && s15.consignasCatedra[0].punto.includes("autorizaciones internas"), "slide_15 punto debe indagar centralización y autorizaciones");
assert.ok(s15.consignasCatedra[0].respuesta.includes("Centralización Normativa (Neuquén)") && s15.consignasCatedra[0].respuesta.includes("Desconcentración Operativa (Viedma)"), "slide_15 respuesta debe diferenciar Neuquén y Viedma");
console.log("✓ Filmina 15: Entregable 2 & Pregunta Guía de Centralización/Desconcentración y autorizaciones validada.");

// 3. Filmina 16: Entregable 3: Flujograma de Proceso Clave (Licencias)
assert.strictEqual(s16.numero, 16, "slide_16 debe ser la filmina 16");
assert.ok(s16.titulo.includes("Flujograma") && s16.titulo.includes("Licencias"), "slide_16 debe ser Flujograma de Licencias");
assert.strictEqual(s16.consignasCatedra.length, 1, "slide_16 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s16.consignasCatedra[0].punto.includes("Flujograma") && s16.consignasCatedra[0].punto.includes("licencias"), "slide_16 punto debe ser diseño de flujograma de licencias");
assert.ok(s16.consignasCatedra[0].respuesta.includes("6 etapas") && s16.consignasCatedra[0].respuesta.includes("SUDOCU") && s16.consignasCatedra[0].respuesta.includes("SIU-Mapuche"), "slide_16 respuesta debe listar las etapas con SUDOCU y Mapuche");
assert.ok(s16.consignasCatedra[0].respuesta.includes("12 y 18 días hábiles"), "slide_16 debe informar el tiempo medio de tramitación");
console.log("✓ Filmina 16: Entregable 3 (Flujograma de trámite de licencias en 6 etapas) validada.");

// 4. Filmina 17: Preguntas Guía: GDE/TAD vs SUDOCU y Cuellos de Botella
assert.strictEqual(s17.numero, 17, "slide_17 debe ser la filmina 17");
assert.ok(s17.titulo.includes("Transición a SUDOCU") && s17.titulo.includes("Cuellos de Botella"), "slide_17 debe ser SUDOCU y Cuellos de Botella");
assert.strictEqual(s17.consignasCatedra.length, 1, "slide_17 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s17.consignasCatedra[0].punto.includes("GDE o TAD") && s17.consignasCatedra[0].punto.includes("cuellos de botella"), "slide_17 punto debe contener GDE/TAD y trabas");
assert.ok(s17.consignasCatedra[0].respuesta.includes("NO se usa GDE ni TAD") && s17.consignasCatedra[0].respuesta.includes("SUDOCU (CIN)"), "slide_17 respuesta debe confirmar uso exclusivo de SUDOCU");
assert.ok(s17.consignasCatedra[0].respuesta.includes("Parálisis de Firmas") && s17.consignasCatedra[0].respuesta.includes("Doble Carga Manual"), "slide_17 respuesta debe detallar los 2 cuellos de botella");
console.log("✓ Filmina 17: Pregunta Guía de GDE/TAD y Cuellos de Botella (Subrogancia y Doble Carga) validada.");

// 5. Filmina 18: Qué buscar: Despapelización, Inercia Estructural y Salir del Paso
assert.strictEqual(s18.numero, 18, "slide_18 debe ser la filmina 18");
assert.ok(s18.titulo.includes("Inercia Estructural") && s18.titulo.includes("Salir del Paso"), "slide_18 debe ser Inercia y Salir del Paso");
assert.strictEqual(s18.consignasCatedra.length, 1, "slide_18 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s18.consignasCatedra[0].punto.includes("despapelización") && s18.consignasCatedra[0].punto.includes("falsa digitalización"), "slide_18 punto debe buscar despapelización y falsa digitalización");
assert.ok(s18.consignasCatedra[0].respuesta.includes("Falsa Digitalización") && s18.consignasCatedra[0].respuesta.includes("escanean a PDF"), "slide_18 respuesta debe explicar el escaneo de certificados en papel");
assert.ok(s18.consignasCatedra[0].respuesta.includes("Inercia Estructural") && s18.consignasCatedra[0].respuesta.includes("Forester"), "slide_18 respuesta debe fundamentar con Campos y Forester");
console.log("✓ Filmina 18: Diagnóstico de Despapelización, Inercia Estructural y Racionalidad Limitada validado.");

// 6. Filmina 19: Propuestas de Rediseño Situadas
assert.strictEqual(s19.numero, 19, "slide_19 debe ser la filmina 19");
assert.ok(s19.titulo.includes("Propuestas de Rediseño"), "slide_19 debe ser Propuestas de Rediseño");
assert.strictEqual(s19.consignasCatedra.length, 1, "slide_19 debe tener exactamente 1 tarjeta limpia de consigna");
assert.ok(s19.consignasCatedra[0].punto.includes("propuestas concretas de rediseño"), "slide_19 punto debe pedir propuestas de rediseño");
assert.ok(s19.consignasCatedra[0].respuesta.includes("Firma Digital Criptográfica (Ley 25.506)") && s19.consignasCatedra[0].respuesta.includes("Pasarela API"), "slide_19 respuesta debe incluir Firma PKI y API");
assert.ok(s19.consignasCatedra[0].respuesta.includes("Subrogancia Automática") && s19.consignasCatedra[0].respuesta.includes("APUNC"), "slide_19 respuesta debe incluir subrogancia y capacitación APUNC");
console.log("✓ Filmina 19: Propuestas de Rediseño situadas para eliminar cuellos de botella validadas.");

console.log("\n🎉 TODOS LOS TESTS DE JERARQUÍA CURRICULAR Y CONSIGNAS DE AVANCE 3 PASARON EXITOSAMENTE!");

// tests/test_slide_07_paradoja_cogobierno.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Filmina 7: Paradoja del Co-Gobierno & Poligobernanza Integration...");

const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// 1. Verify slide_7 configuration in presentacion_data.js
assert(dataContent.includes('"id": "slide_7"'), "slide_7 must exist in presentacion_data.js");
assert(dataContent.includes('Paradoja del Co-Gobierno'), "slide_7 must reference Paradoja del Co-Gobierno");
assert(dataContent.includes('Cao & Blutman'), "slide_7 must cite Cao & Blutman");
assert(dataContent.includes('silo corporativo endogámico'), "slide_7 points must address the risk of endogamic corporate silo");
assert(dataContent.includes('Salida Hacia la Poligobernanza'), "slide_7 points must provide the territorial poligovernance solution");
console.log("✓ slide_7 includes concise situated points on the Paradoja del Co-Gobierno");

// 2. Verify guionOrador (teleprompter / TTS) synthesis
assert(dataContent.includes('articulamos la \'Paradoja del Co-Gobierno\' de Cao y Blutman'), "slide_7 speech script must deliver the paradox");
assert(dataContent.includes('abrirse a la poligobernanza territorial con los 10 nodos rionegrinos'), "slide_7 speech script must connect to the 10 nodes");
console.log("✓ slide_7 teleprompter speech script concisely integrates the theoretical paradox");

// 3. Verify slide data loads cleanly
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataContent.replace('const PRESENTACION_DATA', 'var PRESENTACION_DATA'), sandbox);
const slide7 = sandbox.PRESENTACION_DATA.slides.find(s => s.id === 'slide_7');
assert(slide7, "slide_7 must be found in parsed slides array");
assert.strictEqual(slide7.numero, 7, "slide_7 must be slide number 7");
assert(slide7.puntosClave.length >= 4, "slide_7 must have well-structured bullet points");
console.log(`✓ slide_7 parsed successfully: "${slide7.titulo}" (${slide7.puntosClave.length} puntos clave)`);

console.log("\n🎉 ALL FILMINA 7 PARADOJA DEL CO-GOBIERNO TESTS PASSED!");

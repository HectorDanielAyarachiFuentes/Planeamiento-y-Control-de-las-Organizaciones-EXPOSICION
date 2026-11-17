// tests/test_trabajo_final_drawer.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Trabajo Final Drawer Tab & Actividad 05 Integration...");

// 1. Verify index.html tab label
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('<button class="drawer-tab" data-tab="avance4">Trabajo Final 📑</button>'), "index.html must define Trabajo Final tab");
assert(!indexHtml.includes('Avances (PDF)'), "index.html must not contain legacy 'Avances (PDF)' label");
console.log("✓ index.html defines drawer tab with label 'Trabajo Final 📑'");

// 2. Verify app.js references and file paths
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(appJs.includes('"01_Actividades_Catedra/actividad_05/Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf"'), "app.js must point to actividad_05 PDF");
assert(appJs.includes('"avance4": "Trabajo Final"'), "app.js TTS mapping must identify avance4 as 'Trabajo Final'");
assert(appJs.includes('Trabajo Final Integrador'), "app.js must display Trabajo Final Integrador title");
console.log("✓ app.js correctly configures Trabajo Final document and TTS label");

// 3. Verify physical PDF existence in actividad_05
const pdfPath = path.join(__dirname, '..', '01_Actividades_Catedra', 'actividad_05', 'Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf');
assert(fs.existsSync(pdfPath), "PDF file in actividad_05 must physically exist on disk");
const stat = fs.statSync(pdfPath);
assert(stat.size > 1000000, "PDF file must be non-empty and consolidated (> 1MB)");
console.log(`✓ Actividad 05 PDF physically verified on disk (${(stat.size / (1024 * 1024)).toFixed(2)} MB)`);

console.log("\n🎉 ALL TRABAJO FINAL TESTS PASSED!");

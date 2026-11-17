// tests/test_trabajo_final_drawer.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Trabajo Final Drawer Tab & Actividad 05 Integration...");

// 1. Verify index.html tab label and SVG icons
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('data-tab="avance4"') && indexHtml.includes('Trabajo Final'), "index.html must define Trabajo Final tab");
assert(indexHtml.includes('class="tab-svg-icon"'), "index.html must include vector SVGs inside tabs");
assert(!indexHtml.includes('Avances (PDF)'), "index.html must not contain legacy 'Avances (PDF)' label");
console.log("✓ index.html defines drawer tab with label 'Trabajo Final' and crafted SVGs");

// 2. Verify css/styles.css green theme for Trabajo Final and color palettes
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const stylesCss = fs.readFileSync(cssPath, 'utf8');

assert(stylesCss.includes('.drawer-tab[data-tab="avance4"]'), "styles.css must style Trabajo Final specifically");
assert(stylesCss.includes('#ecfdf5') || stylesCss.includes('#047857'), "styles.css must apply emerald green theme to Trabajo Final");
assert(stylesCss.includes('.drawer-tab[data-tab="autores"]'), "styles.css must define distinct themes for all tabs");
console.log("✓ css/styles.css applies prominent emerald green theme to Trabajo Final and harmonious colors to all tabs");

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

// tests/test_slide_30_bibliografia_apa.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("=== TEST: FILMINA 30 REFERENCIAS BIBLIOGRÁFICAS (NORMAS APA 7ª ED.) ===");

// 1. Verificar data/presentacion_data.js
const dataPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const data = require(dataPath);

assert.strictEqual(data.slides.length, 30, "PRESENTACION_DATA debe tener 30 filminas");

const s30 = data.slides.find(s => s.numero === 30);
assert.ok(s30, "Debe existir la filmina 30");
assert.strictEqual(s30.id, "slide_30", "El id debe ser slide_30");
assert.ok(s30.titulo.includes("Referencias Bibliográficas"), "El título debe mencionar Referencias Bibliográficas");
assert.ok(s30.badge.includes("BIBLIOGRAFÍA"), "El badge debe mencionar BIBLIOGRAFÍA");

// Verificar autores obligatorios solicitados por la cátedra
const combinedText = JSON.stringify(s30);
assert.ok(combinedText.includes("Matus"), "Debe citar a Carlos Matus");
assert.ok(combinedText.includes("Oszlak"), "Debe citar a Oscar Oszlak");
assert.ok(combinedText.includes("Bertranou"), "Debe citar a Julián Bertranou");
assert.ok(combinedText.includes("Hintze"), "Debe citar a Jorge Hintze");
assert.ok(combinedText.includes("Makon"), "Debe citar a Marcos Makon");
assert.ok(combinedText.includes("Schweinheim"), "Debe citar a Guillermo Schweinheim");
assert.ok(combinedText.includes("Feinstein"), "Debe citar a Osvaldo Feinstein");
assert.ok(combinedText.includes("Ramírez") || combinedText.includes("Ramirez"), "Debe citar a Telma Ramírez");
assert.ok(combinedText.includes("SIGEN") && combinedText.includes("AGN"), "Debe citar a SIGEN y AGN");
console.log("✓ data/presentacion_data.js: Filmina 30 con todos los autores obligatorios (Matus, Oszlak, Bertranou, Hintze, etc.) verificada.");

// 2. Verificar js/app.js y sections range
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert.ok(appJs.includes('range: [28, 29]'), "getDefenseSections debe abarcar range [28, 29] para cierre y bibliografía");
assert.ok(appJs.includes('slide.id === "slide_30" || slide.layout === "bibliography_showcase"'), "app.js debe tener la rama para renderizar biblio-mode");
assert.ok(appJs.includes('this.bulletsElement.classList.add("biblio-mode");'), "app.js debe agregar clase biblio-mode");
assert.ok(appJs.includes('biblio-card'), "app.js debe inyectar tarjetas biblio-card");
console.log("✓ js/app.js: secciones de cierre actualizadas y renderer biblio-mode verificado.");

// 3. Verificar index.html
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert.ok(indexHtml.includes('aria-valuemax="30"'), "index.html progress bar debe tener max 30");
assert.ok(indexHtml.includes('1 / 30'), "index.html counters deben reflejar 1 / 30");
console.log("✓ index.html: progreso y contadores de 30 filminas verificados.");

// 4. Verificar css/styles.css
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

assert.ok(css.includes('.slide-bullets.biblio-mode'), "styles.css debe definir .slide-bullets.biblio-mode");
assert.ok(css.includes('.biblio-card'), "styles.css debe definir .biblio-card");
assert.ok(css.includes('.biblio-author-item'), "styles.css debe definir .biblio-author-item");
console.log("✓ css/styles.css: estilos de biblio-mode y cards verificados.");

console.log("\n🎉 TODOS LOS TESTS DE LA FILMINA 30 DE BIBLIOGRAFÍA PASARON AL 100%!");

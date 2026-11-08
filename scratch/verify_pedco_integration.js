const fs = require('fs');
const assert = require('assert');

console.log('🧪 Starting Verification of PEDCO Consignas Integration...\n');

// 1. Check data/presentacion_data.js
const data = require('../data/presentacion_data.js');
assert(data.consignasCatedra, 'consignasCatedra should exist in presentacion_data.js');
assert.strictEqual(data.consignasCatedra.length, 4, 'consignasCatedra must have 4 items');

const expectedTitles = [
  'Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)',
  'Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)',
  'Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)',
  'Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)'
];

data.consignasCatedra.forEach((c, idx) => {
  assert.strictEqual(c.avanceTitulo, expectedTitles[idx], `Title mismatch at ${idx}`);
  assert(c.objetivo && c.objetivo.length > 20, `Objetivo too short in avance ${c.avanceNum}`);
  assert(Array.isArray(c.entregables) && c.entregables.length >= 2, `Entregables missing in avance ${c.avanceNum}`);
  assert(Array.isArray(c.queBuscar) && c.queBuscar.length >= 2, `queBuscar missing in avance ${c.avanceNum}`);
  assert(Array.isArray(c.preguntasGuia) && c.preguntasGuia.length >= 2, `preguntasGuia missing in avance ${c.avanceNum}`);
  assert(c.respuestaSituada && c.respuestaSituada.length > 30, `respuestaSituada too short in avance ${c.avanceNum}`);
  console.log(`  ✓ Avance ${c.avanceNum} validated: ${c.avanceTitulo}`);
});

// 2. Check 25 slides and 3D scenes
assert.strictEqual(data.slides.length, 25, 'Must have 25 slides');
data.slides.forEach((s, idx) => {
  const expectedScene = `anim_${String(idx + 1).padStart(2, '0')}`;
  assert.strictEqual(s.escena3D, expectedScene, `Slide ${idx + 1} scene mismatch: ${s.escena3D} vs ${expectedScene}`);
});
console.log('  ✓ All 25 slides have valid sequential 3D scenes (anim_01 to anim_25)');

// 3. Check index.html
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('data-tab="consignas"'), 'index.html must have data-tab="consignas"');
console.log('  ✓ index.html contains "Consignas PEDCO 📋" drawer tab');

// 4. Check js/app.js
const appJs = fs.readFileSync('js/app.js', 'utf8');
assert(appJs.includes('tabType === "consignas"'), 'js/app.js must handle tabType === "consignas"');
assert(appJs.includes('renderConsignasTab()'), 'js/app.js must call renderConsignasTab');
assert(appJs.includes('renderConsignasTab() {'), 'js/app.js must define renderConsignasTab()');
assert(appJs.includes('openConsignasDrawer(avanceNum = null)'), 'js/app.js must define openConsignasDrawer');
assert(appJs.includes('avance-consigna-meta'), 'js/app.js must render avance-consigna-meta in Slide 2');
console.log('  ✓ js/app.js contains Slide 2 consigna meta and drawer tab renderer');

// 5. Check css/styles.css
const css = fs.readFileSync('css/styles.css', 'utf8');
assert(css.includes('.avance-consigna-meta'), 'css/styles.css must style .avance-consigna-meta');
assert(css.includes('.consigna-detail-card'), 'css/styles.css must style .consigna-detail-card');
console.log('  ✓ css/styles.css contains styling for consignas metadata & cards');

console.log('\n✨ ALL VERIFICATION TESTS PASSED SUCCESSFULLY! (5/5)');

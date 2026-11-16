const fs = require('fs');
const assert = require('assert');

console.log('🧪 Starting Verification of PEDCO Consignas Integration (5 Avances & 29 Slides)...\n');

// 1. Check data/presentacion_data.js
const data = require('../data/presentacion_data.js');
assert(data.consignasCatedra, 'consignasCatedra should exist in presentacion_data.js');
assert.strictEqual(data.consignasCatedra.length, 5, 'consignasCatedra must have 5 items');

const expectedTitles = [
  'Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)',
  'Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)',
  'Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)',
  'Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)',
  'Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)'
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

// 2. Check 29 slides and 3D scenes
assert.strictEqual(data.slides.length, 29, 'Must have 29 slides');
data.slides.forEach((s, idx) => {
  const expectedScene = `anim_${String(idx + 1).padStart(2, '0')}`;
  assert.strictEqual(s.escena3D, expectedScene, `Slide ${idx + 1} scene mismatch: ${s.escena3D} vs ${expectedScene}`);
  assert(s.guionOrador && s.guionOrador.length > 30, `Slide ${idx + 1} guionOrador missing or too short`);
  assert(s.esquema && s.esquema.length > 5, `Slide ${idx + 1} esquema missing`);
});
console.log('  ✓ All 29 slides have valid sequential 3D scenes (anim_01 to anim_29) and complete speaker notes!');

// 3. Check timing
assert.strictEqual(data.timing.totalMinutos, 17, 'Total minutes must be 17');
console.log('  ✓ Timing configured strictly to 17 minutes');

// 4. Check index.html
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('data-tab="consignas"'), 'index.html must have data-tab="consignas"');
assert(html.includes('17:00'), 'index.html must display 17:00 for timer');
assert(html.includes('1 / 29'), 'index.html must display 1 / 29');
console.log('  ✓ index.html validated: 17:00 timer, 1 / 29 counter, and drawer tabs present');

// 5. Check js/app.js
const appJs = fs.readFileSync('js/app.js', 'utf8');
assert(appJs.includes('tabType === "consignas"'), 'js/app.js must handle tabType === "consignas"');
assert(appJs.includes('renderConsignasTab()'), 'js/app.js must call renderConsignasTab');
assert(appJs.includes('renderConsignasTab() {'), 'js/app.js must define renderConsignasTab()');
assert(appJs.includes('openConsignasDrawer(avanceNum = null)'), 'js/app.js must define openConsignasDrawer');
assert(appJs.includes('avance-consigna-meta'), 'js/app.js must render avance-consigna-meta in Slide 2');
assert(appJs.includes('Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)'), 'js/app.js must include Avance 5 in sections and cards');
console.log('  ✓ js/app.js validated: Slide 2 consigna meta, sections, and drawer tab renderers');

console.log('\n✨ ALL VERIFICATION TESTS PASSED SUCCESSFULLY! (5/5)');

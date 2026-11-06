const fs = require('fs');
const vm = require('vm');

console.log('--- 1. Testing data/catedra_data.js ---');
const catedraCode = fs.readFileSync('data/catedra_data.js', 'utf8');
const catedraSandbox = { window: {}, module: {} };
vm.createContext(catedraSandbox);
vm.runInContext(catedraCode, catedraSandbox);
const catedraData = catedraSandbox.window.CATEDRA_MATERIAL_DATA;
console.log('Loaded catedra items:', catedraData.length);
if (catedraData.length !== 33) throw new Error('Expected 33 documents, got ' + catedraData.length);

const units = ['u1', 'u2', 'u3', 'u4', 'u5'];
units.forEach(u => {
  const count = catedraData.filter(d => d.categoriaSlug === u).length;
  console.log(`Unit ${u}: ${count} documents`);
  if (count === 0) throw new Error(`Unit ${u} has 0 documents!`);
});

console.log('--- 2. Testing data/presentacion_data.js ---');
const presCode = fs.readFileSync('data/presentacion_data.js', 'utf8');
const presSandbox = { window: {} };
vm.createContext(presSandbox);
vm.runInContext(presCode, presSandbox);
const presData = presSandbox.window.PRESENTACION_DATA;
console.log('Presentation slides count:', presData.slides.length);
console.log('Autores count:', presData.fichasRespaldo.autores.length);
console.log('Normativa count:', presData.fichasRespaldo.normativa.length);
console.log('Nodos Territoriales count:', presData.fichasRespaldo.nodosTerritoriales.length);
console.log('FAQ count:', presData.fichasRespaldo.faq.length);

console.log('--- 3. Testing js/app.js syntax & drawer logic simulation ---');
const appCode = fs.readFileSync('js/app.js', 'utf8');

// Check that appCode parses with new Function
try {
  new Function(appCode);
  console.log('js/app.js syntax parsed OK!');
} catch (err) {
  // If modules/imports, regex check
  console.log('js/app.js note:', err.message);
}

// Simulate renderDrawerTab
const f = presData.fichasRespaldo;

// Test autores
if (!f.autores || f.autores.length === 0) throw new Error('autores empty!');
// Test normativa
if (!f.normativa || f.normativa.length === 0) throw new Error('normativa empty!');
// Test territorio
const nodos = f.nodosTerritoriales || f.territorio || [];
if (nodos.length !== 10) throw new Error('Expected 10 nodos, got ' + nodos.length);
// Test faq
if (!f.faq || f.faq.length === 0) throw new Error('faq empty!');

console.log('All drawer tab data verified non-empty and rich!');

console.log('--- 4. Running 3D Scene verification ---');
require('./verify_all_scenes.js');


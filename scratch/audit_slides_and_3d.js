const fs = require('fs');
const content = fs.readFileSync('data/presentacion_data.js', 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);
const slides = sandbox.window.PRESENTACION_DATA.slides;

console.log('Total filminas:', slides.length);
slides.forEach((s, idx) => {
  console.log(`[Filmina ${String(idx + 1).padStart(2, '0')}] (${s.id})`);
  console.log(`  Bloque:   ${s.bloque}`);
  console.log(`  Título:   ${s.titulo}`);
  console.log(`  Subtítulo:${s.subtitulo || ''}`);
  console.log(`  Escena3D: ${s.escena3D}`);
  console.log('---------------------------------------------------------');
});

const fs = require('fs');

const presentacionContent = fs.readFileSync('data/presentacion_data.js', 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(presentacionContent, sandbox);
const slides = sandbox.window.PRESENTACION_DATA.slides;

const files = [
  'js/objetos/bloque1.js',
  'js/objetos/bloque2.js',
  'js/objetos/bloque3.js',
  'js/objetos/bloque4.js',
  'js/objetos/bloque5.js'
];

// Read each file and find object definitions
const objSource = {};
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match `anim_XX:` or `["anim_XX"]:`
  for (let i = 1; i <= 29; i++) {
    const id = 'anim_' + (i < 10 ? '0' + i : i);
    const re = new RegExp(`["']?${id}["']?\\s*:\\s*{([\\s\\S]*?)(?:\\n\\s*\\/\\/\\s*={10,}|\\n\\s*["']?anim_\\d+["']?\\s*:|\\n\\s*};|$)`);
    const m = content.match(re);
    if (m) {
      objSource[id] = {
        file: f,
        code: m[1]
      };
    }
  }
});

slides.forEach((s, idx) => {
  const id = s.escena3D;
  console.log(`========================================================================`);
  console.log(`FILMINA ${idx + 1} (${s.id})`);
  console.log(`  Tema:    [${s.bloque}]`);
  console.log(`  Título:  ${s.titulo}`);
  console.log(`  Subtít:  ${s.subtitulo || ''}`);
  console.log(`  Escena3D:${id}`);
  
  if (objSource[id]) {
    const src = objSource[id];
    console.log(`  Archivo: ${src.file}`);
    // Extract first comments in the code chunk
    const lines = src.code.split('\n');
    const headerComments = lines.slice(0, 15).filter(l => l.trim().startsWith('//') || l.trim().startsWith('*')).map(l => l.trim().replace(/^(\/\/|\*)\s*/, ''));
    console.log(`  Objeto 3D Header:`, headerComments.slice(0, 4).join(' --- '));

    // Extract any CanvasLabel or text calls
    const labels = [];
    const labelMatches = src.code.matchAll(/(?:createCanvasLabel|title|nombre|text|tag):\s*["']([^"']+)["']/g);
    for (const lm of labelMatches) {
      if (!labels.includes(lm[1]) && lm[1].length > 1) labels.push(lm[1]);
    }
    console.log(`  Textos/Labels 3D:`, labels.slice(0, 6).join(' | '));
  } else {
    console.log(`  Archivo: NO ENCONTRADO`);
  }
});

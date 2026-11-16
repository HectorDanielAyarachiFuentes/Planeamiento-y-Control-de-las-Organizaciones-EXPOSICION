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

let allCode = '';
files.forEach(f => {
  allCode += '\n// FILE: ' + f + '\n' + fs.readFileSync(f, 'utf8');
});

slides.forEach((s, idx) => {
  const animKey = s.escena3D;
  console.log(`========================================================================`);
  console.log(`FILMINA ${idx + 1} (${s.id})`);
  console.log(`  Tema:    [${s.bloque}]`);
  console.log(`  Título:  ${s.titulo}`);
  console.log(`  Subtít:  ${s.subtitulo}`);
  console.log(`  Escena:  ${animKey}`);

  // Find where this animKey is defined
  const regex = new RegExp(`["']?${animKey}["']?\\s*:\\s*{([\\s\\S]*?)(?:\\n\\s*\\/\\/\\s*-{10,}|\\n\\s*anim_\\d+|\\n\\s*}\\s*;|$)`);
  const match = allCode.match(regex);
  if (match) {
    const chunk = match[1];
    // Find comments or title strings
    const comments = chunk.match(/\/\/[^\n]*/g) || [];
    const titles = chunk.match(/title:\s*["'][^"']+["']/g) || [];
    console.log(`  3D Obj Comments:`, comments.slice(0, 3).join(' | '));
    console.log(`  3D Obj Titles:  `, titles.slice(0, 5).join(' | '));
  } else {
    console.log(`  3D Obj: [NOT FOUND IN CODE CHUNK]`);
  }
});

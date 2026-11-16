const fs = require('fs');

const files = [
  'js/objetos/bloque1.js',
  'js/objetos/bloque2.js',
  'js/objetos/bloque3.js',
  'js/objetos/bloque4.js',
  'js/objetos/bloque5.js'
];

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  console.log(`=== FILE: ${f} ===`);
  const lines = code.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('function build_anim_') || l.includes('window.createCanvasLabel') || l.includes('title:') || l.includes('titulo:') || l.includes('createTextSprite')) {
      if (l.trim().length < 140) {
        console.log(`  L${idx+1}: ${l.trim()}`);
      }
    }
  });
});

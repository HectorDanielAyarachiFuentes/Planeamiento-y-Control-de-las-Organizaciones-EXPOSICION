const fs = require('fs');

const files = [
  'js/objetos/bloque1.js',
  'js/objetos/bloque2.js',
  'js/objetos/bloque3.js',
  'js/objetos/bloque4.js',
  'js/objetos/bloque5.js'
];

const scenes = {};

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  const matches = [...code.matchAll(/function build_(anim_\d+)/g)];
  matches.forEach(m => {
    scenes[m[1]] = { file: f };
  });
});

console.log('Registered scenes count:', Object.keys(scenes).length);
Object.keys(scenes).sort().forEach(s => {
  console.log(`${s} -> ${scenes[s].file}`);
});

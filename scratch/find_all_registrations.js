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
  console.log('====================================');
  console.log('FILE:', f);
  const regex = /register\w*\(\s*["'](anim_\d+)["']/g;
  let m;
  while ((m = regex.exec(code)) !== null) {
    console.log('  Registers:', m[1]);
  }
  // Also check if objects are defined like anim_XX =
  const regex2 = /(anim_\d+)\s*[:=]/g;
  while ((m = regex2.exec(code)) !== null) {
    console.log('  Contains:', m[1]);
  }
});

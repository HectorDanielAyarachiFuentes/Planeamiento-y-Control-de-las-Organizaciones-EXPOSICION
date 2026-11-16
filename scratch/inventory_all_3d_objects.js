const fs = require('fs');

const files = [
  { file: 'bloque1.js', range: 'anim_01 a anim_05' },
  { file: 'bloque2.js', range: 'anim_06 a anim_10' },
  { file: 'bloque3.js', range: 'anim_11 a anim_15' },
  { file: 'bloque4.js', range: 'anim_16 a anim_20' },
  { file: 'bloque5.js', range: 'anim_21 a anim_29' }
];

files.forEach(({ file }) => {
  const code = fs.readFileSync('js/objetos/' + file, 'utf8');
  console.log('========================================================================');
  console.log('ARCHIVO: js/objetos/' + file);
  
  // Find top comment blocks describing the sculptures
  const topComment = code.match(/\/\*\*[\s\S]*?\*\//);
  if (topComment) {
    console.log(topComment[0].split('\n').slice(0, 15).join('\n'));
  }
});

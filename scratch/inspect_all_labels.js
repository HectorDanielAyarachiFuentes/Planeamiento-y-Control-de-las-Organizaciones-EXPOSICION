const fs = require('fs');
const path = require('path');

const files = [
  'js/objetos/bloque1.js',
  'js/objetos/bloque2.js',
  'js/objetos/bloque3.js',
  'js/objetos/bloque4.js',
  'js/objetos/bloque5.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`=== FILE: ${f} ===`);
  const regex = /window\.Presentation3D_Objects\["([^"]+)"\]\s*=\s*{([\s\S]*?)animate\(/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const sceneId = match[1];
    const body = match[2];
    const plaques = [...body.matchAll(/createEngravedPlaque\([^,]+,[^,]+,\s*"([^"]+)"/g)].map(m => m[1]);
    const labels = [...body.matchAll(/createLabelSprite\(\s*"([^"]+)"/g)].map(m => m[1]);
    console.log(`  ${sceneId}:`);
    if (plaques.length) console.log(`    Plaques: ${plaques.join(' | ')}`);
    if (labels.length) console.log(`    Labels: ${labels.join(' | ')}`);
  }
});

const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque4.js', 'utf8');
console.log('Length of bloque4.js:', s.length);
const matches = [...s.matchAll(/Presentation3D_Objects\["([^"]+)"\]/g)].map(m => m[1]);
console.log('Registered in bloque4:', matches);

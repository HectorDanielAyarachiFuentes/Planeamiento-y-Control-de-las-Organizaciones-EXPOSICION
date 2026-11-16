const fs = require('fs');

console.log('--- anim_05 in bloque1.js ---');
const b1 = fs.readFileSync('js/objetos/bloque1.js', 'utf8');
const a05Start = b1.indexOf('window.Presentation3D_Objects["anim_05"]');
console.log(b1.slice(a05Start, a05Start + 600));

console.log('--- anim_12 in bloque3.js ---');
const b3 = fs.readFileSync('js/objetos/bloque3.js', 'utf8');
const a12Start = b3.indexOf('window.Presentation3D_Objects["anim_12"]');
const a13Start = b3.indexOf('window.Presentation3D_Objects["anim_13"]');
console.log(b3.slice(a12Start, a13Start));

console.log('--- anim_24 in bloque5.js ---');
const b5 = fs.readFileSync('js/objetos/bloque5.js', 'utf8');
const a24Start = b5.indexOf('window.Presentation3D_Objects["anim_24"]');
const a25Start = b5.indexOf('window.Presentation3D_Objects["anim_25"]');
console.log(b5.slice(a24Start, a25Start));

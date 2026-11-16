const fs = require('fs');
const b3 = fs.readFileSync('js/objetos/bloque3.js', 'utf8');
const a13 = b3.indexOf('window.Presentation3D_Objects["anim_13"]');
const a14 = b3.indexOf('window.Presentation3D_Objects["anim_14"]');
console.log(b3.slice(a13, a14));

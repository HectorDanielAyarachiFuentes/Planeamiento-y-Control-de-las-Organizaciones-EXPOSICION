const fs = require('fs');
const b1 = fs.readFileSync('js/objetos/bloque1.js', 'utf8');
const a05Start = b1.indexOf('window.Presentation3D_Objects["anim_05"]');
console.log(b1.slice(a05Start));

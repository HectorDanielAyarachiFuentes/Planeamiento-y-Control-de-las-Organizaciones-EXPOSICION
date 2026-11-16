const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque2.js', 'utf8');
const a9Start = s.indexOf('window.Presentation3D_Objects["anim_09"]');
const a10Start = s.indexOf('window.Presentation3D_Objects["anim_10"]');
console.log(s.slice(a9Start, a10Start));

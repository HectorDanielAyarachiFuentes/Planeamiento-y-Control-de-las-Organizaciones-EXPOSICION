const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque2.js', 'utf8');
const a8Start = s.indexOf('window.Presentation3D_Objects["anim_08"]');
const a9Start = s.indexOf('window.Presentation3D_Objects["anim_09"]');
console.log(s.slice(a8Start, a9Start));

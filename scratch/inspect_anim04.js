const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque1.js', 'utf8');
const a4Start = s.indexOf('window.Presentation3D_Objects["anim_04"]');
const a5Start = s.indexOf('window.Presentation3D_Objects["anim_05"]');
console.log(s.slice(a4Start, a5Start));

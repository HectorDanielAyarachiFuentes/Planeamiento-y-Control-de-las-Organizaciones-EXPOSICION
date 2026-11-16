const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque4.js', 'utf8');
const a19Start = s.indexOf('window.Presentation3D_Objects["anim_19"]');
const a20Start = s.indexOf('window.Presentation3D_Objects["anim_20"]');
console.log(s.slice(a19Start, a20Start));

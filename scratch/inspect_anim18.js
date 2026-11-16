const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque4.js', 'utf8');
const a18Start = s.indexOf('window.Presentation3D_Objects["anim_18"]');
const a19Start = s.indexOf('window.Presentation3D_Objects["anim_19"]');
console.log(s.slice(a18Start, a19Start));

const fs = require('fs');
const s = fs.readFileSync('js/objetos/bloque4.js', 'utf8');
const a20 = s.indexOf('window.Presentation3D_Objects["anim_20"]');
console.log('anim_20 starts at:', a20);
console.log('Rest of file after anim_20 starts:', s.slice(a20, a20 + 200));
console.log('Last 200 chars of file:', s.slice(-200));

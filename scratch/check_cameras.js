const fs = require('fs');
const cam = fs.readFileSync('js/objetos/camera_config.js', 'utf8');
const matches = [...cam.matchAll(/"(anim_\d+)":/g)].map(m => m[1]);
console.log('Camera presets for:', matches);

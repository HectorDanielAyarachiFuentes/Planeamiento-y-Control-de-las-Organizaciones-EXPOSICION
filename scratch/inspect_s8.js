const path = require('path');
const d = require(path.resolve('data/presentacion_data.js'));
const s8 = d.slides.find(s => s.numero === 8);
console.log('Slide 8 in presentacion_data.js:');
console.log(JSON.stringify(s8, null, 2));

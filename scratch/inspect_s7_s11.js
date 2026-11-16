const path = require('path');
const d = require(path.resolve('data/presentacion_data.js'));
const s7 = d.slides.find(s => s.numero === 7);
console.log('Slide 7:', JSON.stringify(s7, null, 2));
const s11 = d.slides.find(s => s.numero === 11);
console.log('Slide 11:', JSON.stringify(s11, null, 2));

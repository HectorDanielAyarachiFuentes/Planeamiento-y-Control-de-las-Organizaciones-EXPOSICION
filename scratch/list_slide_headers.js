const d = require('../data/presentacion_data.js');
d.slides.forEach(s => {
  console.log(`Slide ${s.numero}: bloque="${s.bloque}" | badge="${s.badge}" | titulo="${s.titulo}"`);
});


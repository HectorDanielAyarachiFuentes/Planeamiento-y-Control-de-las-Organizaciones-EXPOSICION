const path = require('path');
const d = require(path.resolve('data/presentacion_data.js'));
d.slides.forEach(s => {
  if (s.diagramaSVG) {
    console.log(`Slide ${s.numero} (${s.id}): "${s.titulo}" -> diagramaSVG: ${s.diagramaSVG}`);
  }
});

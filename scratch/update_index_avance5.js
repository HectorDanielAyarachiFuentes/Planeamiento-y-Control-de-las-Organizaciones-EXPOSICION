const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Barra de progreso y contador general
content = content.replace(
  '<!-- Barra de progreso general de la defensa académica (25 filminas) -->',
  '<!-- Barra de progreso general de la defensa académica (29 filminas) -->'
);
content = content.replace(
  'aria-valuemin="1" aria-valuemax="25" aria-valuenow="1"',
  'aria-valuemin="1" aria-valuemax="29" aria-valuenow="1"'
);
content = content.replace(
  'title="Índice Canónico de los 4 Avances y 25 Filminas (Tecla I)"',
  'title="Índice Canónico de los 5 Avances y 29 Filminas (Tecla I)"'
);
content = content.replace(
  '<strong id="slide-counter">1 / 25</strong>',
  '<strong id="slide-counter">1 / 29</strong>'
);
content = content.replace(
  'aria-label="Estaciones de la Defensa estructuradas en los 4 Avances"',
  'aria-label="Estaciones de la Defensa estructuradas en los 5 Avances"'
);

// 2. Cronómetro 17 minutos
content = content.replace(
  '<!-- Cronómetro Académico de 30 minutos (Defensa Oficial) -->',
  '<!-- Cronómetro Académico de 17 minutos (Defensa Oficial) -->'
);
content = content.replace(
  '<span class="timer-display" id="timer-display">30:00</span>',
  '<span class="timer-display" id="timer-display">17:00</span>'
);
content = content.replace(
  'title="Reiniciar a 30:00"',
  'title="Reiniciar a 17:00"'
);

// 3. Teleprómpter sidebar
content = content.replace(
  '<span class="notes-slide-pill" id="notes-slide-num">Filmina 1 / 25</span>',
  '<span class="notes-slide-pill" id="notes-slide-num">Filmina 1 / 29</span>'
);
content = content.replace(
  '<span class="notes-time-pill" id="notes-slide-time">⏱️ ~1.5 min</span>',
  '<span class="notes-time-pill" id="notes-slide-time">⏱️ ~35-40 seg</span>'
);

// 4. Pestaña del Drawer de Documentos Oficiales
content = content.replace(
  '<button class="drawer-tab" data-tab="avance4">Avance 4 (PDF) 📑</button>',
  '<button class="drawer-tab" data-tab="avance4">Avances (PDF) 📑</button>'
);

// 5. Atajos y Modal de Índice
content = content.replace(
  '<span>Índice Canónico (4 Avances)</span>',
  '<span>Índice Canónico (5 Avances)</span>'
);
content = content.replace(
  '<!-- Modal / Menú Desplegable: Índice Canónico de los 4 Avances (Atajo: I) -->',
  '<!-- Modal / Menú Desplegable: Índice Canónico de los 5 Avances (Atajo: I) -->'
);
content = content.replace(
  'aria-label="Índice Canónico de Filminas y 4 Avances"',
  'aria-label="Índice Canónico de Filminas y 5 Avances"'
);
content = content.replace(
  'Estructura de la Exposición • 4 Avances de Cátedra',
  'Estructura de la Exposición • 5 Avances de Cátedra'
);
content = content.replace(
  '<!-- Se inyecta dinámicamente con los 4 Avances, Apertura y Cierre -->',
  '<!-- Se inyecta dinámicamente con los 5 Avances, Apertura y Cierre -->'
);
content = content.replace(
  '<!-- 3. Base de Datos Externa de Metadatos (25 Filminas + Enlaces SVG) -->',
  '<!-- 3. Base de Datos Externa de Metadatos (29 Filminas + Enlaces SVG) -->'
);

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully updated index.html for 5 Avances, 29 slides, and 17 minutes timer!');

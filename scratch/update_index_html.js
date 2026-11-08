const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('title="Índice Canónico de los 3 Ejes y 25 Filminas (Tecla I)" aria-label="Abrir Índice de Filminas por Ejes"',
                    'title="Índice Canónico de los 4 Avances y 25 Filminas (Tecla I)" aria-label="Abrir Índice de Filminas por Avances"');

html = html.replace('aria-label="Estaciones de la Defensa estructuradas en 3 Ejes"',
                    'aria-label="Estaciones de la Defensa estructuradas en los 4 Avances"');

html = html.replace('<span>Índice Canónico (3 Ejes)</span>',
                    '<span>Índice Canónico (4 Avances)</span>');

html = html.replace('<!-- Modal / Menú Desplegable: Índice Canónico de los 3 Grandes Ejes (Atajo: I) -->',
                    '<!-- Modal / Menú Desplegable: Índice Canónico de los 4 Avances (Atajo: I) -->');

html = html.replace('aria-label="Índice Canónico de Filminas y 3 Ejes"',
                    'aria-label="Índice Canónico de Filminas y 4 Avances"');

html = html.replace('Estructura de la Exposición • 3 Grandes Ejes',
                    'Estructura de la Exposición • 4 Avances de Cátedra');

html = html.replace('<!-- Se inyecta dinámicamente con los 3 Grandes Ejes, Apertura y Cierre -->',
                    '<!-- Se inyecta dinámicamente con los 4 Avances, Apertura y Cierre -->');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');


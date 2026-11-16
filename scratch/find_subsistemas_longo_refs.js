const fs = require('fs');

function searchFile(file, term) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes(term)) {
      console.log(`${file}:${i + 1}: ${l.trim()}`);
    }
  });
}

searchFile('data/presentacion_data.js', 'subsistemas_longo');
searchFile('js/app.js', 'subsistemas_longo');
searchFile('index.html', 'subsistemas_longo');

const fs = require('fs');

function search(file, query) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.toLowerCase().includes(query.toLowerCase())) {
      console.log(`${file}:${i + 1}: ${l.trim()}`);
    }
  });
}

search('js/app.js', 'ver objeto');
search('js/app.js', 'btn-ver-objeto');
search('index.html', 'ver objeto');
search('js/scene3d.js', 'controls');
search('js/scene3d.js', 'camera');
search('js/app.js', 'focusobject');
search('js/app.js', 'objectview');
search('js/app.js', 'volver a la filmina');

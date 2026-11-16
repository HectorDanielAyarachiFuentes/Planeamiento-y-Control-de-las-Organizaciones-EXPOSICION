const fs = require('fs');
const s = fs.readFileSync('js/app.js', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (l.includes('diagramaSVG') || l.includes('diagram-modal') || l.includes('diagram-preview')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});

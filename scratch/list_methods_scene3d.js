const fs = require('fs');
const s = fs.readFileSync('js/scene3d.js', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (l.match(/^\s*[a-zA-Z0-9_]+\s*\(/)) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

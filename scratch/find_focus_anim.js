const fs = require('fs');
const s = fs.readFileSync('js/scene3d.js', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (l.includes('centerXOffset') || l.includes('scaleMultiplier') || l.includes('focusAnim')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});

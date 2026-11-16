const fs = require('fs');
const s = fs.readFileSync('js/app.js', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (l.includes('setFocusMode') || l.includes('btn-view-3d') || l.includes('focusMode')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});

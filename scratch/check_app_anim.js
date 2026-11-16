const fs = require('fs');
const app = fs.readFileSync('js/app.js', 'utf8');
const lines = app.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('anim_06') || l.includes('anim_07')) {
    console.log(`Line ${idx + 1}: ${l}`);
  }
});

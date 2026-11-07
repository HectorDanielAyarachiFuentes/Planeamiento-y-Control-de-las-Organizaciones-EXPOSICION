const fs = require('fs');
const lines = fs.readFileSync('data/presentacion_data.js', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('"id": "slide_1"')) {
    console.log('Line:', i + 1);
    console.log(lines.slice(i, i + 25).join('\n'));
  }
});


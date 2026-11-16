const fs = require('fs');
const s = fs.readFileSync('assets/subsistemas_longo.svg', 'utf8');
console.log('Length of subsistemas_longo.svg:', s.length);
console.log(s.slice(0, 500));

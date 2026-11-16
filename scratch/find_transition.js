const fs = require('fs');
const s = fs.readFileSync('js/scene3d.js', 'utf8');
const lines = s.split('\n');
const start = s.indexOf('transitionTo(');
console.log(s.slice(start, start + 1200));

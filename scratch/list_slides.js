const fs = require('fs');
const content = fs.readFileSync('data/presentacion_data.js', 'utf8');
const slides = [];
const regex = /id:\s*["']([^"']+)["'],\s*numero:\s*(\d+),\s*titulo:\s*["']([^"']+)["']/g;
let m;
while ((m = regex.exec(content)) !== null) {
  slides.push({ id: m[1], num: m[2], title: m[3] });
}
console.log('Total slides found:', slides.length);
slides.forEach(s => console.log(`Filmina ${s.num}: [${s.id}] ${s.title}`));


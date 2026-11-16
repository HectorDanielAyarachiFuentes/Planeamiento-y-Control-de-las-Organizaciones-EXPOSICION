const fs = require('fs');
const content = fs.readFileSync('data/presentacion_data.js', 'utf8');
const slides = [];
const regex = /"id":\s*"(slide_\d+)"[\s\S]*?"numero":\s*(\d+)[\s\S]*?"titulo":\s*"([^"]+)"[\s\S]*?"subtitulo":\s*"([^"]+)"[\s\S]*?"escena3D":\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(content)) !== null) {
  slides.push({ id: m[1], num: parseInt(m[2]), title: m[3], sub: m[4], escena: m[5] });
}
console.log(`Found ${slides.length} slides:`);
slides.forEach(s => {
  console.log(`Slide ${s.num} (${s.id}): "${s.title}" -> current 3D: ${s.escena}`);
});

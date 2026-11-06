const fs = require('fs');
const html = fs.readFileSync('prueba_rionegro_3d.html', 'utf8');
const re = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let m;
const ids = new Set();
while ((m = re.exec(html))) {
  ids.add(m[1]);
}
let allFound = true;
for (let id of ids) {
  const found = html.includes('id="' + id + '"') || html.includes("id='" + id + "'");
  console.log(id, '-->', found ? 'FOUND' : 'MISSING');
  if (!found) allFound = false;
}
console.log('All IDs found:', allFound);


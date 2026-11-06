const fs = require('fs');
let html = fs.readFileSync('prueba_rionegro_3d.html', 'utf8');

const colorMap = {
  '"El Cuy"': '#DDBA98',
  '"Pilcaniyeu"': '#B7A5D8',
  '"Bariloche"': '#7AAED6',
  '"Ñorquinco"': '#E6C580',
  '"25 de Mayo"': '#9ECC92',
  '"9 de Julio"': '#DEBA98',
  '"Valcheta"': '#C89FD6',
  '"San Antonio"': '#76C6B6',
  '"Adolfo Alsina"': '#6BA6DD',
  '"Conesa"': '#87CE9E',
  '"Pichi Mahuida"': '#DBA57B',
  '"Avellaneda"': '#F5C369',
  '"General Roca"': '#EB9588'
};

for (const [name, newHex] of Object.entries(colorMap)) {
  const reg = new RegExp(`("name":\\s*${name}[\\s\\S]*?"colorHex":\\s*)"#[A-Fa-f0-9]{6}"`);
  html = html.replace(reg, `$1"${newHex}"`);
}

// Lighting update
html = html.replace(
  /const ambientLight = new THREE\.AmbientLight\(0xffffff, [0-9.]+\);/,
  'const ambientLight = new THREE.AmbientLight(0xffffff, 0.52);'
);

html = html.replace(
  /const sun = new THREE\.DirectionalLight\(0xfff8ee, [0-9.]+\);/,
  'const sun = new THREE.DirectionalLight(0xfffaee, 0.82);\n    const fillLight = new THREE.DirectionalLight(0xe0e8f5, 0.38);\n    fillLight.position.set(-350, 250, -200);\n    scene.add(fillLight);'
);

// Initial swatch color in info-modal
html = html.replace(
  /id="card-swatch"([^>]*?)style="background-color: #[A-Fa-f0-9]{6};"/,
  'id="card-swatch"$1style="background-color: #6BA6DD;"'
);

fs.writeFileSync('prueba_rionegro_3d.html', html, 'utf8');
console.log('Map colors and lighting successfully updated in prueba_rionegro_3d.html!');


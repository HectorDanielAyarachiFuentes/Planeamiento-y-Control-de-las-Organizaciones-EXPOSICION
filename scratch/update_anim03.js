const fs = require('fs');
let txt = fs.readFileSync('js/objetos/bloque1.js', 'utf8');

const oldBlock = `    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const foundationGroup = new THREE.Group();
    foundationGroup.position.set(0, -0.15, 0);

    const items = [
      { x: -0.42, z: -0.42, h: 0.58, title: "I. AUTONOMÍA", sub: "Art. 75 inc. 19 CN" },
      { x: 0.42, z: -0.42, h: 0.78, title: "II. BUROCRACIA", sub: "Weberiana Profesional" },
      { x: -0.42, z: 0.42, h: 0.98, title: "III. AUTONOMÍA VS NGP", sub: "Resguardo vs Mercado" },
      { x: 0.42, z: 0.42, h: 1.18, title: "IV. ACCOUNTABILITY", sub: "Horizontal/Vertical/Social" }
    ];`;

const newBlock = `    engine.createMuseumPlinth(g, 1.85, 0.22, -1.22);

    const foundationGroup = new THREE.Group();
    foundationGroup.position.set(0, -0.15, 0);

    // Gradas escalonadas: Los 2 pilares más bajos ADELANTE (+Z), los 2 más altos ATRÁS (-Z)
    // Así los carteles y placas azules quedan perfectamente visibles en profundidad
    const items = [
      { x: -0.55, z: 0.36, h: 0.58, labelOffset: 0.26, title: "I. AUTONOMÍA", sub: "Art. 75 inc. 19 CN" },
      { x: 0.55, z: 0.36, h: 0.74, labelOffset: 0.28, title: "II. BUROCRACIA", sub: "Weberiana Profesional" },
      { x: -0.55, z: -0.38, h: 1.02, labelOffset: 0.42, title: "III. AUTONOMÍA VS NGP", sub: "Resguardo vs Mercado" },
      { x: 0.55, z: -0.38, h: 1.22, labelOffset: 0.44, title: "IV. ACCOUNTABILITY", sub: "Horizontal/Vertical/Social" }
    ];`;

if (txt.includes(oldBlock)) {
  txt = txt.replace(oldBlock, newBlock);
} else {
  // Regex fallback
  txt = txt.replace(
    /engine\.createMuseumPlinth\(g,\s*1\.45[\s\S]*?\{ x: 0\.42, z: 0\.42, h: 1\.18, title: "IV\. ACCOUNTABILITY", sub: "Horizontal\/Vertical\/Social" \}\s*\];/,
    newBlock
  );
}

txt = txt.replace(
  'label.position.set(0, item.h / 2 + 0.28, 0);',
  'label.position.set(0, item.h / 2 + (item.labelOffset || 0.30), 0);'
);

fs.writeFileSync('js/objetos/bloque1.js', txt, 'utf8');
console.log('Successfully updated anim_03 in bloque1.js!');


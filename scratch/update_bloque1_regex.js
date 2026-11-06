const fs = require('fs');
let txt = fs.readFileSync('js/objetos/bloque1.js', 'utf8');

txt = txt.replace(
  /canvas\.width = 512;\s*canvas\.height = 768;\s*const ctx = canvas\.getContext\("2d"\);/,
  'canvas.width = 1024;\n  canvas.height = 1536;\n  const ctx = canvas.getContext("2d");\n  ctx.scale(2, 2);'
);

txt = txt.replace(
  /_tfgRightPageTex = new THREE\.CanvasTexture\(canvas\);/,
  '_tfgRightPageTex = new THREE.CanvasTexture(canvas);\n  _tfgRightPageTex.generateMipmaps = true;\n  _tfgRightPageTex.minFilter = THREE.LinearMipmapLinearFilter;\n  _tfgRightPageTex.magFilter = THREE.LinearFilter;\n  _tfgRightPageTex.anisotropy = 16;'
);

txt = txt.replace(
  /const infoPlaque = engine\.createEngravedPlaque\(\s*0\.80,/,
  'const infoPlaque = engine.createEngravedPlaque(\n      0.84,'
);

fs.writeFileSync('js/objetos/bloque1.js', txt, 'utf8');
console.log('Regex update complete!');


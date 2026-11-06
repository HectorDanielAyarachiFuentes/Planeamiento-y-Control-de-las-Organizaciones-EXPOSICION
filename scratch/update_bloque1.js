const fs = require('fs');
let txt = fs.readFileSync('js/objetos/bloque1.js', 'utf8');

txt = txt.replace(
  'canvas.width = 512;',
  'canvas.width = 1024;\n  canvas.height = 1536;\n  const ctx = canvas.getContext("2d");\n  ctx.scale(2, 2);'
);
txt = txt.replace(
  'canvas.height = 768;\n  const ctx = canvas.getContext("2d");',
  '// 2X Retina supersampling'
);
txt = txt.replace(
  'canvas.height = 768;\r\n  const ctx = canvas.getContext("2d");',
  '// 2X Retina supersampling'
);

txt = txt.replace(
  '_tfgRightPageTex = new THREE.CanvasTexture(canvas);',
  '_tfgRightPageTex = new THREE.CanvasTexture(canvas);\n  _tfgRightPageTex.generateMipmaps = true;\n  _tfgRightPageTex.minFilter = THREE.LinearMipmapLinearFilter;\n  _tfgRightPageTex.magFilter = THREE.LinearFilter;\n  _tfgRightPageTex.anisotropy = 16;'
);

txt = txt.replace(
  'const infoPlaque = engine.createEngravedPlaque(\n      0.80,',
  'const infoPlaque = engine.createEngravedPlaque(\n      0.84,'
);
txt = txt.replace(
  'const infoPlaque = engine.createEngravedPlaque(\r\n      0.80,',
  'const infoPlaque = engine.createEngravedPlaque(\r\n      0.84,'
);

fs.writeFileSync('js/objetos/bloque1.js', txt, 'utf8');
console.log('Successfully updated bloque1.js!');

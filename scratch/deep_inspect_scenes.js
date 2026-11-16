const fs = require('fs');
const https = require('https');

function fetch(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(d));
      r.on('error', rej);
    });
  });
}

async function deepInspect() {
  const threeCode = await fetch('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
  const vm = require('vm');
  const sandbox = {
    console: console,
    Math: Math,
    parseFloat: parseFloat,
    parseInt: parseInt,
    Array: Array,
    Object: Object,
    String: String,
    window: {}
  };
  sandbox.window = sandbox;

  // Mock document and canvas for procedural textures
  sandbox.document = {
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          width: 512,
          height: 512,
          getContext: () => ({
            fillRect: () => {},
            strokeRect: () => {},
            clearRect: () => {},
            fill: () => {},
            stroke: () => {},
            beginPath: () => {},
            closePath: () => {},
            arc: () => {},
            moveTo: () => {},
            lineTo: () => {},
            quadraticCurveTo: () => {},
            bezierCurveTo: () => {},
            scale: () => {},
            rotate: () => {},
            translate: () => {},
            save: () => {},
            restore: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
            roundRect: () => {},
            fillText: () => {},
            measureText: () => ({ width: 120 })
          })
        };
      }
      return {};
    }
  };

  vm.createContext(sandbox);
  vm.runInContext(threeCode, sandbox);

  const matCode = fs.readFileSync('js/objetos/materials.js', 'utf8');
  const helpCode = fs.readFileSync('js/objetos/helpers.js', 'utf8');
  const camCode = fs.readFileSync('js/objetos/camera_config.js', 'utf8');

  vm.runInContext(matCode, sandbox);
  vm.runInContext(helpCode, sandbox);
  vm.runInContext(camCode, sandbox);

  ['bloque1.js', 'bloque2.js', 'bloque3.js', 'bloque4.js', 'bloque5.js'].forEach(f => {
    const code = fs.readFileSync('js/objetos/' + f, 'utf8');
    vm.runInContext(code, sandbox);
  });

  const objs = sandbox.Presentation3D_Objects || {};
  const slidesContent = fs.readFileSync('data/presentacion_data.js', 'utf8');
  const pSandbox = { window: {} };
  vm.createContext(pSandbox);
  vm.runInContext(slidesContent, pSandbox);
  const slides = pSandbox.window.PRESENTACION_DATA.slides;

  // Inspect each slide and its 3D object
  slides.forEach((s, idx) => {
    const id = s.escena3D;
    const obj = objs[id];
    console.log(`\n================================================================`);
    console.log(`FILMINA ${idx + 1} (${s.id})`);
    console.log(`  Bloque:    ${s.bloque}`);
    console.log(`  Título:    ${s.titulo}`);
    console.log(`  Subtítulo: ${s.subtitulo || ''}`);
    console.log(`  Escena 3D: ${id} -> ${obj ? 'REGISTRADO' : '¡NO REGISTRADO!'}`);

    if (obj) {
      // Let's inspect the build function by toString or regex
      const buildStr = obj.build.toString();
      // Look for text created, sprite labels, meshes
      const labels = [];
      const labelMatches = buildStr.matchAll(/(?:createCanvasLabel|title|nombre|text|tag|sub|desc):\s*["']([^"']+)["']/g);
      for (const m of labelMatches) {
        if (!labels.includes(m[1]) && m[1].length > 1) labels.push(m[1]);
      }
      console.log(`  Labels encontrados:`, labels.length > 0 ? labels.join(' | ') : '[Sin labels de texto explícitos]');

      // Look for geometric clues
      const geoMatches = [];
      const mMatches = buildStr.matchAll(/THREE\.([A-Za-z]+Geometry)/g);
      for (const m of mMatches) {
        if (!geoMatches.includes(m[1])) geoMatches.push(m[1]);
      }
      console.log(`  Geometrías:`, geoMatches.join(', '));
    }
  });
}

deepInspect().catch(console.error);

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

async function verifyAllScenes() {
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

  // Load materials.js, helpers.js, camera_config.js
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
  const keys = Object.keys(objs);
  console.log('Total registered 3D objects:', keys.length);

  // Mock engine instance with helpers and materials mixed in
  const mockEngine = Object.assign({
    createProceduralTexture: () => new sandbox.THREE.Texture()
  }, sandbox.Scene3DMaterials, sandbox.Scene3DHelpers);

  let successCount = 0;
  for (let i = 1; i <= 25; i++) {
    const id = 'anim_' + (i < 10 ? '0' + i : i);
    if (!objs[id]) {
      console.error(`MISSING: ${id}`);
    } else {
      const group = new sandbox.THREE.Group();
      try {
        objs[id].build(mockEngine, group);
        if (typeof objs[id].animate === 'function') {
          objs[id].animate(0.5);
        }
        console.log(`[PASS] ${id}: built ${group.children.length} children, animated cleanly!`);
        successCount++;
      } catch(err) {
        console.error(`[FAIL] ${id}:`, err.message);
      }
    }
  }
  console.log(`\n========================================`);
  console.log(`Results: ${successCount} / 25 objects verified!`);
  console.log(`========================================`);
}

verifyAllScenes().catch(console.error);

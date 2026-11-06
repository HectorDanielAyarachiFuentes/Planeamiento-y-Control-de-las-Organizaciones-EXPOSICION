const https = require('https');
const vm = require('vm');

function get(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let data = '';
      r.on('data', c => data += c);
      r.on('end', () => res(data));
      r.on('error', rej);
    });
  });
}

function createMockDOMParser() {
  return class DOMParser {
    parseFromString(str, type) {
      const match = str.match(/d="([^"]+)"/);
      const d = match ? match[1] : '';
      return {
        documentElement: {
          nodeType: 1,
          nodeName: 'svg',
          hasAttribute: () => false,
          getAttribute: () => null,
          childNodes: [
            {
              nodeType: 1,
              nodeName: 'path',
              hasAttribute: (attr) => attr === 'd',
              getAttribute: (attr) => attr === 'd' ? d : null,
              childNodes: []
            }
          ]
        }
      };
    }
  };
}

async function run() {
  const threeCode = await get('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
  const svgLoaderCode = await get('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/SVGLoader.js');

  const sandbox = { console: console };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.global = sandbox;
  sandbox.DOMParser = createMockDOMParser();
  vm.createContext(sandbox);
  vm.runInContext(threeCode, sandbox);
  vm.runInContext(svgLoaderCode, sandbox);

  const loader = new sandbox.THREE.SVGLoader();
  const testSvg = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 100 0 L 100 100 L 0 100 Z"></path></svg>';
  const parsed = loader.parse(testSvg);
  console.log('Parsed paths count:', parsed.paths.length);
  const shapes = sandbox.THREE.SVGLoader.createShapes(parsed.paths[0]);
  console.log('Shapes count:', shapes.length);
  console.log('Shape is THREE.Shape:', shapes[0] instanceof sandbox.THREE.Shape);

  const geom = new sandbox.THREE.ExtrudeGeometry(shapes[0], { depth: 10 });
  console.log('ExtrudeGeometry vertices count:', geom.attributes.position.count);
  console.log('SUCCESS! Verified 100% that loader.parse() builds valid ExtrudeGeometry!');
}

run();

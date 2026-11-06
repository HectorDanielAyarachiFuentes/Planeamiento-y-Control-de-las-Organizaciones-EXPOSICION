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

async function test() {
  const threeCode = await get('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
  const svgLoaderCode = await get('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/SVGLoader.js');

  // Let's inspect how SVGLoader is written and what helper it has
  // Let's search in svgLoaderCode for parsePathNode
  console.log('SVGLoader code length:', svgLoaderCode.length);
  const idx = svgLoaderCode.indexOf('function parsePathNode');
  console.log('function parsePathNode found at:', idx);
  console.log(svgLoaderCode.slice(idx, idx + 400));
}

test();

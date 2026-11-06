const fs = require('fs');

let html = fs.readFileSync('prueba_rionegro_3d.html', 'utf8');

const oldDeptLoop = `    DEPARTAMENTOS_DATA.forEach(dept => {
      // Parsear la cadena 'd' del SVG mediante SVGLoader.createShapes
      const fakeNode = {
        getAttribute: (a) => a === 'd' ? dept.d : null,
        hasAttribute: (a) => a === 'd'
      };

      // Instancia de SVGLoader para procesar el path vectorial
      const dummyLoader = new THREE.SVGLoader();
      const pathObj = dummyLoader.parsePathNode(fakeNode);
      const shapes = THREE.SVGLoader.createShapes(pathObj);

      shapes.forEach(shape => {`;

const newDeptLoop = `    const svgLoader = new THREE.SVGLoader();

    DEPARTAMENTOS_DATA.forEach(dept => {
      let shapes = [];
      try {
        const svgXml = \`<svg xmlns="http://www.w3.org/2000/svg"><path d="\${dept.d}"></path></svg>\`;
        const svgData = svgLoader.parse(svgXml);
        if (svgData && svgData.paths) {
          svgData.paths.forEach(p => {
            const shps = THREE.SVGLoader.createShapes(p);
            if (shps && shps.length) shapes.push(...shps);
          });
        }
      } catch (err) {
        console.error("Error al procesar departamento:", dept.name, err);
      }

      shapes.forEach(shape => {`;

const oldRoundRect = `      ctx.fillStyle = isCentral ? '#0f2d59' : '#ffffff';
      ctx.beginPath();
      ctx.roundRect(16, 12, 480, 116, 22);
      ctx.fill();`;

const newRoundRect = `      ctx.fillStyle = isCentral ? '#0f2d59' : '#ffffff';
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(16, 12, 480, 116, 22);
      } else {
        ctx.rect(16, 12, 480, 116);
      }
      ctx.fill();`;

function replaceNormalized(source, find, repl) {
  const normS = source.replace(/\r\n/g, '\n');
  const normF = find.replace(/\r\n/g, '\n');
  const normR = repl.replace(/\r\n/g, '\n');
  if (!normS.includes(normF)) {
    console.error('NOT FOUND:\n', normF);
    process.exit(1);
  }
  const res = normS.replace(normF, normR);
  return source.includes('\r\n') ? res.replace(/\n/g, '\r\n') : res;
}

html = replaceNormalized(html, oldDeptLoop, newDeptLoop);
html = replaceNormalized(html, oldRoundRect, newRoundRect);

fs.writeFileSync('prueba_rionegro_3d.html', html, 'utf8');
console.log('Successfully updated prueba_rionegro_3d.html!');


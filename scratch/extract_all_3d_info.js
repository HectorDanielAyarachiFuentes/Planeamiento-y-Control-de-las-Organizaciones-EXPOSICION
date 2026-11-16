const fs = require('fs');

const files = ['bloque1.js', 'bloque2.js', 'bloque3.js', 'bloque4.js', 'bloque5.js'];

files.forEach(f => {
  const code = fs.readFileSync('js/objetos/' + f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  
  const regex = /window\.Presentation3D_Objects\[["'](anim_\d+)["']\]\s*=\s*{([\s\S]*?)(?=window\.Presentation3D_Objects\[|$)/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    const id = match[1];
    const body = match[2];
    
    // Extract first 15 lines of build()
    const buildIdx = body.indexOf('build(');
    let preview = '';
    if (buildIdx !== -1) {
      preview = body.slice(buildIdx, buildIdx + 400).split('\n').slice(0, 8).join('\n');
    }
    
    // Look for textures, labels, canvas
    const labels = [];
    const labelRegex = /(?:createCanvasLabel|title|nombre|text|tag|desc|fillText):\s*["']([^"']+)["']/g;
    let lm;
    while ((lm = labelRegex.exec(body)) !== null) {
      if (!labels.includes(lm[1]) && lm[1].length > 1) {
        labels.push(lm[1]);
      }
    }

    console.log(`----------------------------------------`);
    console.log(`[${id}]:`);
    console.log(`Preview:\n${preview}`);
    console.log(`Labels found: ${labels.join(' | ')}`);
  }
});

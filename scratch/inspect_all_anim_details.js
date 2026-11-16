const fs = require('fs');

const files = ['bloque1.js', 'bloque2.js', 'bloque3.js', 'bloque4.js', 'bloque5.js'];

files.forEach(f => {
  const code = fs.readFileSync('js/objetos/' + f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  
  // Find all `anim_XX:` definitions
  const regex = /["']?(anim_\d+)["']?\s*:\s*{([\s\S]*?)(?:build\s*\([^)]*\)\s*{([\s\S]*?)animate|animate\s*:)/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    const id = match[1];
    const header = match[2];
    const buildBody = match[3] || '';
    
    // Extract title/comments
    const commentMatch = header.match(/\/\/[^\n]*/g) || [];
    const textLabels = [];
    const labelRegex = /(?:createCanvasLabel|title|nombre|text|tag|desc):\s*["']([^"']+)["']/g;
    let lm;
    while ((lm = labelRegex.exec(buildBody)) !== null) {
      if (!textLabels.includes(lm[1]) && lm[1].length > 1) {
        textLabels.push(lm[1]);
      }
    }
    
    console.log(`${id}:`);
    if (commentMatch.length > 0) console.log(`   Header: ${commentMatch.slice(0, 2).join(' ')}`);
    console.log(`   Labels (${textLabels.length}): ${textLabels.slice(0, 5).join(' | ')}`);
  }
});

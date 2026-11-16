const fs = require('fs');
const path = require('path');

function searchWorkspace(query) {
  const results = [];
  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const f of files) {
      if (f.name === '.git' || f.name === 'node_modules' || f.name === 'scratch') continue;
      const full = path.join(dir, f.name);
      if (f.isDirectory()) {
        walk(full);
      } else if (f.isFile() && (f.name.endsWith('.js') || f.name.endsWith('.html') || f.name.endsWith('.md') || f.name.endsWith('.json') || f.name.endsWith('.svg'))) {
        try {
          const content = fs.readFileSync(full, 'utf8');
          if (content.toLowerCase().includes(query.toLowerCase())) {
            results.push(full);
          }
        } catch (_) {}
      }
    }
  }
  walk('.');
  return results;
}

console.log('Searching for "Longo"...');
console.log(searchWorkspace('longo'));
console.log('Searching for "subsistemas_longo"...');
console.log(searchWorkspace('subsistemas_longo'));

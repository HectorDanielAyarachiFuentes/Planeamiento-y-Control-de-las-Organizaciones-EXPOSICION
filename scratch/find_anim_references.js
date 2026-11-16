const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'scratch') {
      searchDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = [...content.matchAll(/anim_\d+/g)].map(m => m[0]);
      if (matches.length) {
        console.log(`${fullPath}: ${[...new Set(matches)].join(', ')}`);
      }
    }
  }
}

searchDir('.');

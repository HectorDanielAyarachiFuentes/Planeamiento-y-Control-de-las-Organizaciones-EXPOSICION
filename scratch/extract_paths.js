const fs = require('fs');
const svg = fs.readFileSync('assets/red-territorial-nodos.svg', 'utf8');

const gMatch = svg.match(/<g id="g2476">([\s\S]*?)<\/g>/);
if (gMatch) {
  const gContent = gMatch[1];
  const paths = gContent.match(/<path[^>]+>/g) || [];
  console.log('Paths in g2476:', paths.length);
  paths.forEach(p => {
    const id = (p.match(/id="([^"]+)"/) || [])[1];
    const fill = (p.match(/fill:([^;" ]+)/) || [])[1];
    const d = (p.match(/d="([^"]+)"/) || [])[1];
    console.log(id, fill, 'd-length:', d ? d.length : 0);
  });
}


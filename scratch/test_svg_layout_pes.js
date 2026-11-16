const fs = require('fs');

const content = fs.readFileSync('assets/planificacion_matus_pes.svg', 'utf8');

console.log('SVG length:', content.length);

const checks = [
  { 
    name: 'Header title shortened to avoid right badge collision', 
    pass: content.includes('PLANIFICACIÓN NORMATIVA vs. SITUACIONAL (PES)') 
  },
  { 
    name: 'Situacional column header clean without (PES) badge collision', 
    pass: content.includes('2. PLANIFICACIÓN SITUACIONAL') && !content.includes('2. PLANIFICACIÓN SITUACIONAL (PES)') 
  },
  { 
    name: 'Carlos Matus badge moved to footer header row', 
    pass: content.includes('x="754" y="11" width="144" height="24"') 
  },
  { 
    name: 'No badge in bottom lines of footer', 
    pass: !content.includes('x="760" y="58"') 
  },
  { 
    name: 'Actores clave con veto title fits cleanly', 
    pass: content.includes('Trabajadores: Actores Estratégicos con Poder de Veto') 
  }
];

console.table(checks);
const allPass = checks.every(c => c.pass);
console.log('All checks passed:', allPass);
process.exit(allPass ? 0 : 1);

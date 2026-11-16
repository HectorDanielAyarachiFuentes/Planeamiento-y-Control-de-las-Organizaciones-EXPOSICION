const fs = require('fs');
const files = fs.readdirSync('assets');
console.log('Files in assets/:', files);

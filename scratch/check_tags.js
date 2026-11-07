const d = require('../data/presentacion_data.js');
let issues = [];
d.slides.forEach((s, idx) => {
  s.puntosClave.forEach((p, pIdx) => {
    if (/<(b|strong|em|i)>/i.test(p)) {
      issues.push(`Slide ${s.numero} bullet ${pIdx}: has HTML tags`);
    }
  });
});
console.log('Issues found:', issues.length);
if (issues.length) console.log(issues);


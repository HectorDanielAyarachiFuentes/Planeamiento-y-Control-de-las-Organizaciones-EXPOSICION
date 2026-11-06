const fs = require('fs');
const txt = fs.readFileSync('scratch/line_264_content.txt', 'utf8');

['anim_01', 'anim_02', 'anim_03', 'anim_04'].forEach(id => {
  const p1 = txt.indexOf('["' + id + '"]');
  const p2 = txt.indexOf("['" + id + "']");
  console.log(id, 'indexes:', p1, p2);
});


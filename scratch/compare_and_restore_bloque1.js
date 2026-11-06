const fs = require('fs');

const backup = fs.readFileSync('backup_objetos_3d/objetos/bloque1.js', 'utf8');
const current = fs.readFileSync('js/objetos/bloque1.js', 'utf8');

// In backup, find boundaries of anim_01, anim_02, anim_03, anim_04
const p01 = backup.indexOf('window.Presentation3D_Objects["anim_01"]');
const p02 = backup.indexOf('window.Presentation3D_Objects["anim_02"]');
const p03 = backup.indexOf('window.Presentation3D_Objects["anim_03"]');
const p04 = backup.indexOf('window.Presentation3D_Objects["anim_04"]');

console.log('Backup sections:');
console.log('anim_01 length:', p02 - p01);
console.log('anim_02 length:', p03 - p02);
console.log('anim_03 length:', p04 - p03);

fs.writeFileSync('scratch/backup_anim01.js', backup.slice(p01, p02));
fs.writeFileSync('scratch/backup_anim02.js', backup.slice(p02, p03));
fs.writeFileSync('scratch/backup_anim03.js', backup.slice(p03, p04));

console.log('Saved backup_anim01.js, backup_anim02.js, backup_anim03.js');


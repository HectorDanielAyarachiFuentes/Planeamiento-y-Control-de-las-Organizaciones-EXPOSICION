const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('data-tab="consignas"')) {
  html = html.replace(
    '<button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>',
    '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\r\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>'
  );
  if (!html.includes('data-tab="consignas"')) {
    // Try LF fallback
    html = html.replace(
      '<button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>',
      '<button class="drawer-tab" data-tab="consignas">Consignas PEDCO 📋</button>\n      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>'
    );
  }
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✅ index.html updated: Consignas PEDCO tab added');
} else {
  console.log('ℹ️ index.html already has Consignas PEDCO tab');
}


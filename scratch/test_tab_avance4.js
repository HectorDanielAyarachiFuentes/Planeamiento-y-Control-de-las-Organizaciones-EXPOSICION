const fs = require('fs');
const assert = require('assert');

console.log('🧪 Testing renderDrawerTab("avance4") logic...\n');

const appCode = fs.readFileSync('js/app.js', 'utf8');

assert(appCode.includes('tabType === "avance4"'), 'Must have tabType === "avance4" in renderDrawerTab');
assert(appCode.includes('this.renderAvance4Tab()'), 'Must call renderAvance4Tab()');
assert(appCode.includes('renderAvance4Tab(selectedAvanceNum = 4) {'), 'Must define renderAvance4Tab');

console.log('  ✓ app.js contains tabType === "avance4" routing to renderAvance4Tab');

// Check index.html
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('data-tab="avance4"'), 'index.html must have button with data-tab="avance4"');
console.log('  ✓ index.html contains <button class="drawer-tab" data-tab="avance4">Avance 4 (PDF) 📑</button>');

// Check css/styles.css
const css = fs.readFileSync('css/styles.css', 'utf8');
assert(css.includes('.avance-pdf-drawer-container'), 'css must have .avance-pdf-drawer-container');
assert(css.includes('.avance-pdf-iframe'), 'css must have .avance-pdf-iframe');
console.log('  ✓ css/styles.css contains styling for .avance-pdf-drawer-container and .avance-pdf-iframe');

console.log('\n✨ ALL CHECKS FOR AVANCE 4 TAB PASSED CLEANLY!');


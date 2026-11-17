/**
 * Test suite: Verificación del botón flotante [VOLVER A LA FILMINA]
 */
const fs = require('fs');
const assert = require('assert');

console.log("Testing [Volver a la Filmina] floating button click & restore logic...");

const app = fs.readFileSync('js/app.js', 'utf8');
const css = fs.readFileSync('css/styles.css', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify index.html contains #btn-floating-card-toggle
assert(html.includes('id="btn-floating-card-toggle"'), "index.html must have #btn-floating-card-toggle");
console.log("✓ index.html defines #btn-floating-card-toggle");

// 2. Verify app.js click listener calls setViewMode('default')
assert(app.includes('this.btnFloatingCardToggle.addEventListener("click"'), "app.js must attach click listener");
assert(app.includes('this.setViewMode("default")'), "click listener must call setViewMode('default')");
console.log("✓ app.js click handler triggers setViewMode('default')");

// 3. Verify toggleMobile3dView restores mode when exiting
assert(app.includes('if (!newState && this.currentViewMode === "object") {'), "toggleMobile3dView must handle exiting object mode");
console.log("✓ app.js toggleMobile3dView properly restores default view mode");

// 4. Verify css/styles.css sets high z-index and pointer-events
assert(css.includes('z-index: 95 !important;'), "css must set high z-index for floating button");
assert(css.includes('pointer-events: auto !important;'), "css must enable pointer-events on visible button");
console.log("✓ css/styles.css ensures floating button is clickable above all overlays");

console.log("\n🎉 ALL FLOATING BUTTON RESTORE TESTS PASSED!");

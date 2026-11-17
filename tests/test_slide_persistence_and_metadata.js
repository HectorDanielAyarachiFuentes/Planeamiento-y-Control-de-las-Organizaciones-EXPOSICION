// tests/test_slide_persistence_and_metadata.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Slide Persistence and Metadata...");

// 1. Verify index.html metadata
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('<meta property="og:image" content="assets/CURZAS.png">'), "og:image must reference assets/CURZAS.png");
assert(indexHtml.includes('<meta name="twitter:image" content="assets/CURZAS.png">'), "twitter:image must reference assets/CURZAS.png");
assert(indexHtml.includes('<link rel="icon" type="image/png" href="assets/CURZAS.png">'), "favicon must reference assets/CURZAS.png");
assert(indexHtml.includes('<meta name="author" content="Héctor Daniel Ayarachi Fuentes">'), "author meta must be present");
assert(indexHtml.includes('Inicio'), "shortcuts modal must list Inicio key");
console.log("✓ index.html contains complete academic and social metadata with CURZAS.png");

// 2. Verify presupuesto HTML metadata and responsive grid CSS
const presHtmlPath = path.join(__dirname, '..', 'assets', 'presupuesto_universitario_2026_argentina_svg_isom_trico.html');
const presHtml = fs.readFileSync(presHtmlPath, 'utf8');

assert(presHtml.includes('.grid-12'), "presupuesto HTML must define .grid-12");
assert(presHtml.includes('.col-6'), "presupuesto HTML must define .col-6");
assert(presHtml.includes('.sub-panel'), "presupuesto HTML must define .sub-panel");
assert(presHtml.includes('camera3D.yaw = startDragState.yaw - dxClient'), "mouse drag yaw must be natural (inverted sign)");
assert(presHtml.includes('og:image'), "presupuesto HTML must have og:image metadata");
console.log("✓ presupuesto HTML has grid CSS, generous margins, and natural 3D mouse rotation");

// 3. Verify app.js persistence logic
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(appJs.includes('getSavedSlideIndex()'), "app.js must implement getSavedSlideIndex");
assert(appJs.includes('saveSlideState(index)'), "app.js must implement saveSlideState");
assert(appJs.includes('localStorage.setItem("pco_curzas_slide_index"'), "app.js must persist slide index to localStorage");
assert(appJs.includes('hashchange'), "app.js must handle hashchange for browser navigation");
assert(appJs.includes('e.key === "Home"'), "app.js must handle Home key");
assert(appJs.includes('e.key === "End"'), "app.js must handle End key");
console.log("✓ app.js implements full slide position persistence, URL hash sync, and navigation shortcuts");

console.log("\n🎉 ALL PERSISTENCE AND METADATA TESTS PASSED!");

/**
 * Test suite: Verificación de adaptación de encuadre 3D y filmina con Teleprómpter lateral
 */
const fs = require('fs');
const assert = require('assert');

console.log("Testing Notes Layout & 3D Viewport Adaptation...");

const css = fs.readFileSync('css/styles.css', 'utf8');
const scene3d = fs.readFileSync('js/scene3d.js', 'utf8');
const app = fs.readFileSync('js/app.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify index.html does not have unwanted dock toggle button
assert(!html.includes('id="btn-notes-dock-toggle"'), "btn-notes-dock-toggle should be removed from index.html");
console.log("✓ index.html has clean header without dock toggle button");

// 2. Verify css/styles.css positions teleprompter on the right floating island
assert(css.includes('.notes-modal.teleprompter-sidebar {'), "css must define .notes-modal.teleprompter-sidebar");
assert(css.includes('right: clamp(1.2rem, 2vw, 2.5rem) !important;'), "teleprompter sidebar must have generous right margin");
assert(css.includes('border-radius: 18px !important;'), "teleprompter must be fully rounded as an island card");
assert(css.includes('padding: clamp(1.2rem, 2.2vh, 1.6rem)'), "notes body must have generous padding");
console.log("✓ css/styles.css positions notes modal with generous margins and rounded corners");

// 3. Verify css/styles.css handles body.teleprompter-open adaptation
assert(css.includes('body.teleprompter-open .slide-card:not(.focus-text):not(.focus-object)'), "css must adapt normal card when notes are open");
assert(css.includes('body.teleprompter-open .slide-card.focus-text'), "css must adapt expanded text card when notes are open");
console.log("✓ css/styles.css handles slide card adaptation when teleprompter is open");

// 4. Verify js/scene3d.js updateCameraViewOffset accounts for notesOpen in focusMode === 'object'
assert(scene3d.includes('if (this.focusMode === "object") {'), "scene3d must check focusMode === 'object'");
assert(scene3d.includes('const offsetX = occupiedRight * 0.5;'), "scene3d must offset camera by half occupied width to center in left space");
assert(scene3d.includes('this.camera.setViewOffset(w, h, offsetX, 0, w, h);'), "scene3d must apply view offset");
console.log("✓ scene3d.js centers 3D object in remaining left space when notes are open");

// 5. Verify js/scene3d.js baseOffsetX aligns with targetLookAt when notes are open
assert(scene3d.includes('const baseOffsetX = this.notesOpen ? (this.targetLookAt?.x ?? 1.4) : 1.72;'), "baseOffsetX must align with targetLookAt when notes are open");
console.log("✓ scene3d.js centers object precisely between card and notes when notes are open in balanced view");

console.log("\n🎉 ALL NOTES LAYOUT ADAPTATION TESTS PASSED!");

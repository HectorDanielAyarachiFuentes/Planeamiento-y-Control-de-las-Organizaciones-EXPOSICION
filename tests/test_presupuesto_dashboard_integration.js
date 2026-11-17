// test_presupuesto_dashboard_integration.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Presupuesto Dashboard integration in Filmina 20...");

// 1. Verify files exist
const previewSvgPath = path.join(__dirname, '..', 'assets', 'presupuesto_isometrico_preview.svg');
const dashboardHtmlPath = path.join(__dirname, '..', 'assets', 'presupuesto_universitario_2026_argentina_svg_isom_trico.html');
assert(fs.existsSync(previewSvgPath), "assets/presupuesto_isometrico_preview.svg must exist");
assert(fs.existsSync(dashboardHtmlPath), "assets/presupuesto_universitario_2026_argentina_svg_isom_trico.html must exist");
console.log("✓ Assets exist in expected locations");

// 2. Verify data/presentacion_data.js configuration for slide_20
const dataContent = fs.readFileSync(path.join(__dirname, '..', 'data', 'presentacion_data.js'), 'utf8');
assert(dataContent.includes('"id": "slide_20"'), "data must contain slide_20");
assert(dataContent.includes('"diagramaSVG": "assets/presupuesto_isometrico_preview.svg"'), "slide_20 must have diagramaSVG set to preview");
assert(dataContent.includes('"maqueta3D": "assets/presupuesto_universitario_2026_argentina_svg_isom_trico.html"'), "slide_20 must have maqueta3D set to interactive html");
console.log("✓ slide_20 configured with preview and interactive 3D dashboard");

// 3. Verify app.js dynamic label support and shortcuts
const appContent = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
assert(appContent.includes('slide.badgeGrafico'), "app.js must support slide.badgeGrafico");
assert(appContent.includes('slide.labelBoton3D'), "app.js must support slide.labelBoton3D");
assert(appContent.includes('presupuesto_isometrico_dashboard'), "app.js catalogoSVGs must include presupuesto_isometrico_dashboard");
console.log("✓ app.js supports customized badges, 3D buttons and catalog registration");

console.log("\n🎉 ALL PRESUPUESTO DASHBOARD INTEGRATION TESTS PASSED!");

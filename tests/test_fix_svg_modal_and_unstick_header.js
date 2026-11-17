// tests/test_fix_svg_modal_and_unstick_header.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing SVG 2D View and Unsticky Header...");

// 1. Verify header in presupuesto HTML is not sticky / fixed
const presHtml = fs.readFileSync(path.join(__dirname, '..', 'assets', 'presupuesto_universitario_2026_argentina_svg_isom_trico.html'), 'utf8');
assert(!/header\s*\{[^}]*position:\s*(sticky|fixed)/.test(presHtml), "header must not have position: sticky or fixed;");
assert(/header\s*\{[^}]*position:\s*relative;/.test(presHtml), "header must have position: relative");
console.log("✓ Header in presupuesto dashboard is no longer sticky / fixed");

// 2. Verify presupuesto_isometrico_preview.svg is valid and has no linear-gradient in fill attribute
const previewSvg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'presupuesto_isometrico_preview.svg'), 'utf8');
assert(!previewSvg.includes('fill="linear-gradient'), "SVG must not contain invalid fill='linear-gradient' attribute");
assert(previewSvg.includes('id="btn-banner-grad"'), "SVG must declare btn-banner-grad in defs");
assert(previewSvg.includes('fill="url(#btn-banner-grad)"'), "SVG must use url(#btn-banner-grad)");
console.log("✓ 2D SVG preview uses valid defs gradients and no invalid fill attributes");

// 3. Verify app.js openSvgModal and toggleSvgModalView assign 2D src reliably
const appJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
assert(appJs.includes('this.svgModalImg.src = url;'), "openSvgModal must always assign svgModalImg.src");
assert(appJs.includes('this.svgModalImg.src = target2DUrl;'), "toggleSvgModalView must assign target2DUrl to svgModalImg.src");
console.log("✓ app.js guarantees 2D lamina image source is loaded when opening or toggling");

console.log("\n🎉 ALL 2D SVG AND HEADER TESTS PASSED!");

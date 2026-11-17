// tests/test_brand_logo_click_to_slide_1.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing UNCo - CURZAS Brand Logo Click to Slide 1...");

// 1. Verify index.html defines #brand-home-link
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('id="brand-home-link"'), "index.html must define id='brand-home-link'");
assert(indexHtml.includes('href="#filmina-1"'), "brand link must point to #filmina-1");
assert(indexHtml.includes('class="brand"'), "brand link must retain class 'brand'");
assert(indexHtml.includes('class="brand-logo"'), "brand link must contain brand-logo");
assert(indexHtml.includes('UNCo — CURZAS'), "brand link must contain title UNCo — CURZAS");
console.log("✓ index.html defines accessible, semantic #brand-home-link pointing to #filmina-1");

// 2. Verify js/app.js binds brandHomeLink to goToSlide(0)
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(appJs.includes('this.brandHomeLink = document.getElementById("brand-home-link");'), "app.js must initialize brandHomeLink");
assert(appJs.includes('this.brandHomeLink.addEventListener("click"'), "app.js must listen for clicks on brandHomeLink");
assert(appJs.includes('this.goToSlide(0)'), "clicking brandHomeLink must call this.goToSlide(0)");
console.log("✓ app.js handles brand logo click and navigates directly to slide 0 (filmina 1)");

// 3. Verify css/styles.css provides cursor: pointer and hover feedback
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const stylesCss = fs.readFileSync(cssPath, 'utf8');

assert(stylesCss.includes('cursor: pointer'), "styles.css must set cursor: pointer for interactive brand");
assert(stylesCss.includes('.brand:hover'), "styles.css must define hover micro-interaction for brand");
console.log("✓ css/styles.css includes cursor pointer and micro-interaction on brand hover/active");

console.log("\n🎉 ALL BRAND LOGO CLICK TESTS PASSED!");

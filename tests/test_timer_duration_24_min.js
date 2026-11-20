// tests/test_timer_duration_24_min.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Timer Duration set to 24 Minutes...");

// 1. Verify index.html markup
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(indexHtml.includes('24:00</span>'), "index.html must display 24:00 initially in #timer-display");
assert(indexHtml.includes('title="Reiniciar a 24:00"'), "btn-timer-reset must have title 'Reiniciar a 24:00'");
assert(indexHtml.includes('Cronómetro Académico de 24 minutos'), "index.html comment must specify 24 minutos");
console.log("✓ index.html correctly sets 24:00 timer display and reset button title");

// 2. Verify data/presentacion_data.js timing configuration
const data = require(path.join(__dirname, '..', 'data', 'presentacion_data.js'));

assert.strictEqual(data.timing.totalMinutos, 24, "totalMinutos must be 24");
assert.strictEqual(data.timing.alertaAmarillaMinutos, 18, "alertaAmarillaMinutos must be 18 (75% of 24m)");
assert.strictEqual(data.timing.alertaRojaMinutos, 21, "alertaRojaMinutos must be 21");
assert.strictEqual(data.timing.promedioPorSlideMin, 0.83, "promedioPorSlideMin must be ~0.83 min");

const slide1 = data.slides.find(s => s.numero === 1);
assert(slide1.puntosClave.some(p => p.includes('24 minutos')), "Slide 1 puntosClave must state 24 minutos");

const slide2 = data.slides.find(s => s.numero === 2);
assert(slide2.puntosClave.some(p => p.includes('24 minutos')), "Slide 2 puntosClave must state 24 minutos");
console.log("✓ data/presentacion_data.js correctly configures 24 minutes and alerts");

// 3. Verify js/app.js dynamic timer calculation
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(appJs.includes('this.totalSeconds = data.timing.totalMinutos * 60;'), "app.js must calculate totalSeconds from timing data");
assert(appJs.includes('this.updateTimerDisplay();'), "app.js must sync timer display on initialization");
assert(appJs.includes('${this.data.timing.totalMinutos} minutos'), "app.js must dynamically reference totalMinutos in alerts/labels");
console.log("✓ js/app.js computes totalSeconds = 1440 and updates display dynamically");

console.log("\n🎉 ALL 24-MINUTE TIMER TESTS PASSED SUCCESSFULLY!");

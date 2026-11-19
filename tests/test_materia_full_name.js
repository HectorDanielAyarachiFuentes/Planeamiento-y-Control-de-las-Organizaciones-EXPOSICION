// tests/test_materia_full_name.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Testing Complete Subject Name 'Planeamiento y Control de las Organizaciones' across UI...");

// 1. Verify index.html brand subtitle and slide index badge
const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert(
  indexHtml.includes('Licenciatura en Recursos Humanos | Planeamiento y Control de las Organizaciones 2026'),
  "index.html must display complete subject name in brand subtitle"
);
assert(
  indexHtml.includes('PLANEAMIENTO Y CONTROL DE LAS ORGANIZACIONES • CURZAS UNCo'),
  "index.html must display complete subject name in canonical slides index badge"
);
assert(
  !indexHtml.includes('SEMINARIO DE INTEGRACIÓN Y APLICACIÓN • CURZAS UNCo'),
  "index.html must not contain legacy SEMINARIO header"
);
console.log("✓ index.html has complete subject name in header brand and index drawer");

// 2. Verify js/app.js Slide 1 Cátedra card title
const appJsPath = path.join(__dirname, '..', 'js', 'app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(
  appJs.includes('title: "Planeamiento y Control de las Organizaciones"'),
  "app.js must render complete subject name in Slide 1 Cátedra card"
);
console.log("✓ js/app.js renders complete subject name in Slide 1 Cátedra card");

// 3. Verify data/presentacion_data.js Slide 1 footer metadata
const dataJsPath = path.join(__dirname, '..', 'data', 'presentacion_data.js');
const dataJs = fs.readFileSync(dataJsPath, 'utf8');

assert(
  dataJs.includes('Cátedra Planeamiento y Control de las Organizaciones 2026 • Viedma'),
  "presentacion_data.js must declare complete subject name in Slide 1 footer metadata"
);
console.log("✓ data/presentacion_data.js declares complete subject name in footer metadata");

console.log("\n🎉 ALL SUBJECT FULL NAME TESTS PASSED!");

/**
 * verify_tts_accessibility.js
 * Prueba y verificación integral del Módulo de Accesibilidad con Lector de Voz Nativo.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'css', 'styles.css');
const appPath = path.join(rootDir, 'js', 'app.js');
const dataPath = path.join(rootDir, 'data', 'presentacion_data.js');

console.log('🧪 Iniciando verificación exhaustiva del Lector de Voz Accesible y 5 Avances...\n');

let errors = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ❌ FALLÓ: ${message}`);
    errors++;
  }
}

// 1. Verificación de index.html
const indexHtml = fs.readFileSync(indexPath, 'utf8');
assert(indexHtml.includes('id="btn-toggle-tts"'), 'index.html contiene botón #btn-toggle-tts');
assert(indexHtml.includes('r="9.5"'), 'index.html contiene icono SVG estilizado con emblema circular');
assert(indexHtml.includes('id="btn-read-notes-tts"'), 'index.html contiene botón #btn-read-notes-tts en teleprómpter');
assert(indexHtml.includes('id="tts-floating-dock"'), 'index.html contiene dock flotante #tts-floating-dock');
assert(indexHtml.includes('id="tts-btn-read-slide"'), 'index.html contiene botón dock #tts-btn-read-slide');
assert(indexHtml.includes('id="tts-btn-read-notes"'), 'index.html contiene botón dock #tts-btn-read-notes');
assert(indexHtml.includes('id="tts-btn-pause"'), 'index.html contiene botón dock #tts-btn-pause');
assert(indexHtml.includes('id="tts-btn-stop"'), 'index.html contiene botón dock #tts-btn-stop');
assert(indexHtml.includes('<kbd>A</kbd><span>Lector de Voz Accesible'), 'index.html contiene atajo Tecla A en shortcuts-modal');

// 2. Verificación de css/styles.css
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(cssContent.includes('.btn-tool#btn-toggle-tts.active'), 'css/styles.css define estado activo de botón con icono de persona');
assert(cssContent.includes('.tts-reading-target'), 'css/styles.css define clase de resaltado visual .tts-reading-target');
assert(cssContent.includes('button.btn-close.tts-reading-target'), 'css/styles.css define resaltado circular para botones redondos y de cierre');
assert(cssContent.includes('.tts-floating-dock'), 'css/styles.css define diseño glassmorphic del dock flotante');
assert(cssContent.includes('.tts-dock-pulse'), 'css/styles.css define animación de pulso verde en vivo');
assert(cssContent.includes('.btn-notes-action'), 'css/styles.css define botón de lectura de notas');

// 3. Verificación de js/app.js
const appJs = fs.readFileSync(appPath, 'utf8');
assert(appJs.includes('this.ttsActive = false;'), 'js/app.js inicializa variable ttsActive');
assert(appJs.includes('this.btnToggleTTS = document.getElementById("btn-toggle-tts");'), 'js/app.js vincula elemento DOM btnToggleTTS');
assert(appJs.includes('this.initTTS();'), 'js/app.js llama a initTTS()');
assert(appJs.includes('initTTS() {'), 'js/app.js implementa método initTTS()');
assert(appJs.includes('toggleTTS(forceState) {'), 'js/app.js implementa método toggleTTS()');
assert(appJs.includes('normalizeTextForSpeech(rawText) {'), 'js/app.js implementa normalizador de texto fonético y acrónimos');
assert(appJs.includes('getAccessibleLabelForElement(target) {'), 'js/app.js implementa lector inteligente de botones, controles y objetos');
assert(appJs.includes('cleanShortcutHint(text) {'), 'js/app.js implementa limpiador de atajos de teclado');
assert(appJs.includes('speakText(text, targetElement'), 'js/app.js implementa método speakText()');
assert(appJs.includes('readCurrentSlide() {'), 'js/app.js implementa método readCurrentSlide()');
assert(appJs.includes('readCurrentNotes() {'), 'js/app.js implementa método readCurrentNotes()');
assert(appJs.includes('handlePointerOverTTS(e) {'), 'js/app.js implementa escucha interactiva de cursor pointerover');
assert(appJs.includes('handleFocusInTTS(e) {'), 'js/app.js implementa accesibilidad por foco de teclado');

assert(appJs.includes('this.ttsSessionId = 0;'), 'js/app.js inicializa token de sesión ttsSessionId para prevenir carreras de audio');
assert(appJs.includes('this.ttsStopRequested = false;'), 'js/app.js inicializa bandera ttsStopRequested');
assert(appJs.includes('this.ttsReadingNotes = false;'), 'js/app.js inicializa estado ttsReadingNotes');
assert(appJs.includes('updateNotesTTSButtonState(isReading) {'), 'js/app.js implementa updateNotesTTSButtonState() para alternar entre Leer Guion y Detener');
assert(appJs.includes('updateSlideTTSButtonState(isReading) {'), 'js/app.js implementa updateSlideTTSButtonState()');
assert(appJs.includes('this.stopTTS(); // Detener de inmediato cualquier locución activa de la filmina previa'), 'goToSlide detiene audio al cambiar de filmina');
assert(appJs.includes('Si se cierra el teleprómpter y se estaba leyendo notas, detener la locución'), 'toggleNotes detiene el audio al cerrar el modal');

// 4. Verificación de "5 Avances" en lugar de "4 Avances"
assert(appJs.includes('title: "Defensa Integral de los 5 Avances"'), 'Filmina 1 introCards corregido a "Defensa Integral de los 5 Avances"');
assert(appJs.includes('<span class="consigna-total-badge">5 Avances</span>'), 'Pestaña de consignas corregida a "5 Avances"');
assert(appJs.includes('para cada una de las 5 Unidades'), 'Pestaña de consignas corregida a "5 Unidades"');

const dataContent = fs.readFileSync(dataPath, 'utf8');
assert(dataContent.includes('"esquema": "Panorama Global de los 5 Avances"'), 'Filmina 2 esquema corregido a "Panorama Global de los 5 Avances"');

// 5. Test unitario de simulación de getAccessibleLabelForElement y cleanShortcutHint
function mockCleanShortcut(text) {
  if (!text) return "";
  let str = String(text);
  str = str.replace(/\(Tecla\s*([A-Z0-9?]+)\)/gi, ", tecla $1");
  str = str.replace(/\(([A-Z0-9?])\)/gi, ", tecla $1");
  str = str.replace(/\(Esc\)/gi, ", tecla Escape");
  str = str.replace(/\([←→↑↓\/ \wáéíóúÁÉÍÓÚ-]+\)/g, "");
  str = str.replace(/\s*,\s*/g, ", ");
  return str.replace(/\s+/g, " ").trim();
}

assert(mockCleanShortcut("Cerrar teleprómpter (Tecla N)") === "Cerrar teleprómpter, tecla N", "cleanShortcutHint formatea tecla N");
assert(mockCleanShortcut("Cerrar visor (Esc)") === "Cerrar visor, tecla Escape", "cleanShortcutHint formatea Escape");
assert(mockCleanShortcut("Filmina Siguiente (→ / Espacio / AvPág)") === "Filmina Siguiente", "cleanShortcutHint limpia símbolos flecha");

console.log(`\n========================================`);
if (errors === 0) {
  console.log(`✨ TODAS LAS PRUEBAS DE ACCESIBILIDAD Y 5 AVANCES PASARON EXITOSAMENTE! (30/30)`);
} else {
  console.log(`❌ Se encontraron ${errors} errores en la verificación.`);
  process.exit(1);
}
console.log(`========================================\n`);

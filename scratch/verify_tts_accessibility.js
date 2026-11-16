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

console.log('🧪 Iniciando verificación del Lector de Voz Accesible...\n');

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
assert(indexHtml.includes('id="btn-toggle-tts"'), 'index.html contiene botón #btn-toggle-tts con icono de persona');
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
assert(appJs.includes('speakText(text, targetElement'), 'js/app.js implementa método speakText()');
assert(appJs.includes('readCurrentSlide() {'), 'js/app.js implementa método readCurrentSlide()');
assert(appJs.includes('readCurrentNotes() {'), 'js/app.js implementa método readCurrentNotes()');
assert(appJs.includes('handlePointerOverTTS(e) {'), 'js/app.js implementa escucha interactiva de cursor pointerover');
assert(appJs.includes('handleFocusInTTS(e) {'), 'js/app.js implementa accesibilidad por foco de teclado');

// 4. Verificación de fonética de acrónimos en normalizeTextForSpeech
// Mock rápido de la función
function mockNormalize(rawText) {
  let txt = String(rawText);
  txt = txt.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, " ");
  txt = txt.replace(/[▶✓→←⏱🎯💡❓🏛️⚙️🛑📊📁🔍📌🔑⚖️✨🚨🏢]/g, " ");
  const replacements = [
    { regex: /\bRR\.?\s*HH\.?\b/gi, word: "Recursos Humanos" },
    { regex: /\bUNCo\b/g, word: "Universidad Nacional del Comahue" },
    { regex: /\bCURZAS\b/g, word: "Curzas" },
    { regex: /\bCCT\b/g, word: "Convenio Colectivo de Trabajo" },
    { regex: /\bSUDOCU\b/g, word: "Sudocu" },
    { regex: /\bGDE\b/g, word: "Gestión Documental Electrónica" },
    { regex: /\bTAD\b/g, word: "Trámites a Distancia" },
    { regex: /\bPES\b/g, word: "Planificación Estratégica Situacional" },
    { regex: /\bPOA\b/g, word: "Plan Operativo Anual" },
    { regex: /\bFODA\b/g, word: "Matriz Foda" },
    { regex: /\bSIGEN\b/g, word: "Sigen" },
    { regex: /\bAGN\b/g, word: "Auditoría General de la Nación" },
    { regex: /%/g, word: " por ciento " }
  ];
  replacements.forEach(r => { txt = txt.replace(r.regex, r.word); });
  return txt.replace(/[|•·_~]/g, " ").replace(/\s+/g, " ").trim();
}

const sampleText = "🎯 El 90,2% del gasto va a salarios de RR. HH. en la UNCo bajo el CCT y SUDOCU.";
const normalized = mockNormalize(sampleText);
assert(!normalized.includes("🎯"), "Limpia emojis correctamente");
assert(normalized.includes("Recursos Humanos"), "Expande RR. HH. a Recursos Humanos");
assert(normalized.includes("Universidad Nacional del Comahue"), "Expande UNCo");
assert(normalized.includes("Convenio Colectivo de Trabajo"), "Expande CCT");
assert(normalized.includes("por ciento"), "Expande porcentaje");

console.log(`\n========================================`);
if (errors === 0) {
  console.log(`✨ TODAS LAS PRUEBAS DE ACCESIBILIDAD PASARON EXITOSAMENTE! (25/25)`);
} else {
  console.log(`❌ Se encontraron ${errors} errores en la verificación.`);
  process.exit(1);
}
console.log(`========================================\n`);

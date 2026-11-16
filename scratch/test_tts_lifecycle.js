const fs = require('fs');
const path = require('path');

const appJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

console.log('Testing TTS Start / Stop / Restart logic in app.js...');

let pass = true;

// 1. Check that readCurrentNotes does NOT set this.ttsStopRequested = true
if (appJs.includes('readCurrentNotes() {')) {
  const funcStart = appJs.indexOf('readCurrentNotes() {');
  const funcEnd = appJs.indexOf('// Inicializar la aplicación', funcStart);
  const funcCode = appJs.slice(funcStart, funcEnd);

  if (funcCode.includes('this.ttsStopRequested = false;')) {
    console.log('✓ readCurrentNotes resets this.ttsStopRequested = false on start');
  } else {
    console.error('❌ readCurrentNotes does not reset ttsStopRequested');
    pass = false;
  }

  if (funcCode.includes('this.stopTTS();\n\n    // Activar estado')) {
    console.error('❌ readCurrentNotes still calls stopTTS() right before starting!');
    pass = false;
  } else {
    console.log('✓ readCurrentNotes does not corrupt state with premature stopTTS()');
  }
}

// 2. Check that stopTTS resets this.ttsReadingNotes = false
if (appJs.includes('stopTTS() {')) {
  const stopStart = appJs.indexOf('stopTTS() {');
  const stopEnd = appJs.indexOf('updateNotesTTSButtonState', stopStart);
  const stopCode = appJs.slice(stopStart, stopEnd);

  if (stopCode.includes('this.ttsReadingNotes = false;') && stopCode.includes('this.ttsStopRequested = true;')) {
    console.log('✓ stopTTS properly resets ttsReadingNotes and flags stopRequested');
  } else {
    console.error('❌ stopTTS missing reset flags');
    pass = false;
  }
}

// 3. Check that css styling has high contrast for .btn-notes-action
const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'styles.css'), 'utf8');
if (css.includes('.btn-notes-action {') && css.includes('color: #f8fafc;')) {
  console.log('✓ css/styles.css has high contrast white text #f8fafc for .btn-notes-action');
} else {
  console.error('❌ css/styles.css does not have high contrast for .btn-notes-action');
  pass = false;
}

if (pass) {
  console.log('\n🎉 ALL TTS LIFECYCLE TESTS PASSED!');
} else {
  console.error('\n❌ SOME TTS LIFECYCLE TESTS FAILED');
  process.exit(1);
}

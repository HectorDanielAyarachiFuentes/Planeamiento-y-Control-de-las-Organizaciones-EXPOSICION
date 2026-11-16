/**
 * apply_centering_zoom_and_slide7_map.js
 * 1. Asigna el Mapa 3D de Río Negro (anim_06) a la Filmina 7, y anim_13 a la Filmina 11.
 * 2. Centra al 100% las esculturas 3D en el modo "VER OBJETO" (eliminando el desfase a la izquierda).
 * 3. Aumenta sustancialmente el rango de zoom (acercamiento hasta 0.60 y sensibilidad optimizada).
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const presentacionPath = path.join(rootDir, 'data', 'presentacion_data.js');
const scene3dPath = path.join(rootDir, 'js', 'scene3d.js');
const bloque3Path = path.join(rootDir, 'js', 'objetos', 'bloque3.js');

console.log('Iniciando actualización: Centrado en Ver Objeto, Zoom aumentado y Mapa 3D en Filmina 7...');

// ============================================================================
// 1. ASIGNAR ANIM_06 A FILMINA 7 Y ANIM_13 A FILMINA 11
// ============================================================================
let pres = fs.readFileSync(presentacionPath, 'utf8');

// Slide 7 -> anim_06
const s7Regex = /("id":\s*"slide_7"[\s\S]*?"escena3D":\s*)"[^"]+"/;
pres = pres.replace(s7Regex, '$1"anim_06"');

// Slide 11 -> anim_13
const s11Regex = /("id":\s*"slide_11"[\s\S]*?"escena3D":\s*)"[^"]+"/;
pres = pres.replace(s11Regex, '$1"anim_13"');

fs.writeFileSync(presentacionPath, pres, 'utf8');
console.log('✓ Filmina 7 configurada con anim_06 (Mapa 3D Río Negro) y Filmina 11 con anim_13.');

// ============================================================================
// 2. ACTUALIZAR RÓTULOS DE ANIM_13 EN BLOQUE3.JS PARA FILMINA 11 (FODA EXTERNO)
// ============================================================================
let b3 = fs.readFileSync(bloque3Path, 'utf8');
const a13Start = b3.indexOf('window.Presentation3D_Objects["anim_13"] = {');
const a14Start = b3.indexOf('window.Presentation3D_Objects["anim_14"] = {');

if (a13Start !== -1 && a14Start !== -1) {
  let a13Code = b3.slice(a13Start, a14Start);

  // Gates adaptadas a FODA Entorno Externo
  a13Code = a13Code.replace(
    /const gates = \[[\s\S]*?\];/,
    `const gates = [
      { x: -0.45, z: 0.25, name: "DEMANDA SOCIAL", sub: "Oportunidad Regional", col: 0x10b981 },
      { x: 0.45, z: 0.25, name: "CONVENIOS R.N.", sub: "Alianzas Municipales", col: 0x0284c7 },
      { x: -0.45, z: -0.25, name: "AJUSTE FISCAL", sub: "Amenaza Presupuestaria", col: 0xef4444 },
      { x: 0.45, z: -0.25, name: "AULAS HÍBRIDAS", sub: "Resiliencia Territorial", col: 0xd4af37 }
    ];`
  );

  // Placa adaptada
  a13Code = a13Code.replace(
    /"ESTADO PLATAFORMA & INTEROPERABILIDAD",\s*"Infraestructura Digital Compartida • APIs Abiertas • Desburocratización",\s*\["ARQUITECTURA DIGITAL CURZAS"\]/,
    `"MATRIZ FODA: ENTORNO EXTERNO", "Oportunidades Territoriales frente al Severo Ajuste Fiscal Nacional", ["OPORTUNIDADES Y AMENAZAS EXTERNAS"]`
  );

  // Header adaptado
  a13Code = a13Code.replace(
    /"EL ESTADO PLATAFORMA \(IOP\)",\s*"Interoperabilidad Digital y Ecosistema de Servicios Integrados"/,
    `"FODA EXTERNO: DEMANDA TERRITORIAL Y AMENAZA FISCAL", "10 Nodos Regionales de Río Negro frente al Recorte del CIN/SPU"`
  );

  b3 = b3.slice(0, a13Start) + a13Code + b3.slice(a14Start);
  fs.writeFileSync(bloque3Path, b3, 'utf8');
  console.log('✓ anim_13 en bloque3.js: adaptada temáticamente para Filmina 11 (FODA Entorno Externo).');
}

// ============================================================================
// 3. ACTUALIZAR JS/SCENE3D.JS (CENTRADO PERFECTO Y ZOOM SUPERIOR)
// ============================================================================
let s3d = fs.readFileSync(scene3dPath, 'utf8');

// A. Near plane de la cámara para que no recorte al acercarse
s3d = s3d.replace(
  /this\.camera = new THREE\.PerspectiveCamera\(40, window\.innerWidth \/ window\.innerHeight, 0\.1, 100\);/,
  'this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.04, 120);'
);

// B. focusAnim inicialización en constructor
s3d = s3d.replace(
  /this\.focusAnim = { centerXOffset: 0, scaleMultiplier: 1\.0 };/,
  'this.focusAnim = { focusProgress: 0.0, centerXOffset: 0.0, scaleMultiplier: 1.0 };'
);

// C. Reemplazar setFocusMode para interpolar focusProgress suavemente
const oldSetFocusModeRegex = /setFocusMode\(mode\) {[\s\S]*?\n  }\n\n  \/\* ═+/;
const newSetFocusModeCode = `setFocusMode(mode) {
    this.focusMode = mode;
    this.updateCameraViewOffset();

    if (!this.focusAnim) {
      this.focusAnim = { focusProgress: 0.0, centerXOffset: 0.0, scaleMultiplier: 1.0 };
    }

    const isObj = (mode === "object");
    const targetProgress = isObj ? 1.0 : 0.0;
    const targetOffsetX = isObj ? -1.72 : 0.0;
    const targetScale = isObj ? 1.62 : 1.0;

    if (window.gsap) {
      gsap.to(this.focusAnim, {
        focusProgress: targetProgress,
        centerXOffset: targetOffsetX,
        scaleMultiplier: targetScale,
        duration: 0.65,
        ease: "power2.out"
      });
    } else {
      this.focusAnim.focusProgress = targetProgress;
      this.focusAnim.centerXOffset = targetOffsetX;
      this.focusAnim.scaleMultiplier = targetScale;
    }
  }

  /* ═`;

s3d = s3d.replace(oldSetFocusModeRegex, newSetFocusModeCode);

// D. Rango de zoom en wheel listener
s3d = s3d.replace(
  /const zoomDelta = e\.deltaY \* 0\.0022;\s*this\.targetUserZoom = Math\.max\(-3\.5, Math\.min\(4\.5, this\.targetUserZoom \+ zoomDelta\)\);/,
  'const zoomDelta = e.deltaY * 0.0035;\n      this.targetUserZoom = Math.max(-8.5, Math.min(14.0, this.targetUserZoom + zoomDelta));'
);

// E. Rango de zoom en pinch touch listener
s3d = s3d.replace(
  /const diff = \(initialTouchDist - currentDist\) \* 0\.006;\s*this\.targetUserZoom = Math\.max\(-3\.5, Math\.min\(4\.5, this\.targetUserZoom \+ diff\)\);/,
  'const diff = (initialTouchDist - currentDist) * 0.008;\n        this.targetUserZoom = Math.max(-8.5, Math.min(14.0, this.targetUserZoom + diff));'
);

// F. Cálculos de cámara y dolly en render()
// Buscamos el bloque de dolly y posición de cámara
const oldRenderCamBlockRegex = /\/\/ 2\. Zoom Progresivo con Rueda: Dolly de la cámara respecto al objeto \(Zero GC\)[\s\S]*?this\.camera\.lookAt\(this\.currentLookAt\);/;

const newRenderCamBlockCode = `// 2. Zoom Progresivo con Rueda y Centrado Dinámico según modo de enfoque
    const fp = (this.focusAnim && typeof this.focusAnim.focusProgress === "number")
      ? this.focusAnim.focusProgress
      : (this.focusMode === "object" ? 1.0 : 0.0);

    // En modo 'object' (Ver Objeto), centramos el objetivo de mira en X: 0
    // y ajustamos la posición de la cámara para un encuadre 100% simétrico y balanceado
    const lateralCamOffset = (this.targetCamPos.x - this.targetLookAt.x) * 0.25;
    const activeLookAtX = THREE.MathUtils.lerp(this.targetLookAt.x, 0.0, fp);
    const activeCamPosX = THREE.MathUtils.lerp(this.targetCamPos.x, lateralCamOffset, fp);
    const activeCamPosZ = THREE.MathUtils.lerp(this.targetCamPos.z, this.targetCamPos.z * 0.88, fp);

    if (!this._tmpCamLookAt) this._tmpCamLookAt = new THREE.Vector3();
    if (!this._tmpTargetCamPos) this._tmpTargetCamPos = new THREE.Vector3();

    this._tmpCamLookAt.set(activeLookAtX, this.targetLookAt.y, this.targetLookAt.z);
    this._tmpTargetCamPos.set(activeCamPosX, this.targetCamPos.y, activeCamPosZ);

    this._tmpCamDir.subVectors(this._tmpTargetCamPos, this._tmpCamLookAt).normalize();
    const baseDist = this._tmpTargetCamPos.distanceTo(this._tmpCamLookAt);
    // Rango de zoom ampliamente expandido: acercamiento hasta 0.60 para detalles microscópicos
    const effectiveDist = Math.max(0.60, Math.min(22.0, baseDist + this.userZoom));

    this._tmpDesiredCamPos
      .copy(this._tmpCamLookAt)
      .addScaledVector(this._tmpCamDir, effectiveDist);

    this._tmpDesiredCamPos.x += this.userPan.x;
    this._tmpDesiredCamPos.y += this.userPan.y;

    this._tmpDesiredLookAt
      .copy(this._tmpCamLookAt);
    this._tmpDesiredLookAt.x += this.userPan.x;
    this._tmpDesiredLookAt.y += this.userPan.y;

    this.currentCamPos.lerp(this._tmpDesiredCamPos, smoothFactor);
    this.currentLookAt.lerp(this._tmpDesiredLookAt, smoothFactor);
    this.camera.position.copy(this.currentCamPos);
    this.camera.lookAt(this.currentLookAt);`;

if (oldRenderCamBlockRegex.test(s3d)) {
  s3d = s3d.replace(oldRenderCamBlockRegex, newRenderCamBlockCode);
  console.log('✓ Bloque de cámara y dolly en render() actualizado con centrado exacto y zoom expandido.');
} else {
  console.warn('⚠️ No se encontró el bloque oldRenderCamBlockRegex en js/scene3d.js');
}

// G. Posicionamiento del activeGroup en render()
const oldGroupPosRegex = /activeGroup\.position\.x = baseOffsetX \+ centerOffset \+ this\.userPan\.x \+ enter\.x;/;
const newGroupPosCode = 'activeGroup.position.x = (baseOffsetX * (1.0 - fp)) + this.userPan.x + enter.x;';

if (oldGroupPosRegex.test(s3d)) {
  s3d = s3d.replace(oldGroupPosRegex, newGroupPosCode);
  console.log('✓ Posicionamiento de activeGroup actualizado para anular baseOffsetX suavemente al centrar.');
} else {
  console.warn('⚠️ No se encontró oldGroupPosRegex en js/scene3d.js');
}

// H. Posicionamiento de exitingGroup en render()
const oldExitPosRegex = /exitingGroup\.position\.x = baseOffsetX \+ centerOffset \+ exit\.x;/;
const newExitPosCode = 'exitingGroup.position.x = (baseOffsetX * (1.0 - fp)) + exit.x;';
if (oldExitPosRegex.test(s3d)) {
  s3d = s3d.replace(oldExitPosRegex, newExitPosCode);
}

fs.writeFileSync(scene3dPath, s3d, 'utf8');
console.log('✓ js/scene3d.js actualizado con éxito.');

console.log('🎉 Todas las mejoras de centrado, zoom y asignación del mapa se completaron!');

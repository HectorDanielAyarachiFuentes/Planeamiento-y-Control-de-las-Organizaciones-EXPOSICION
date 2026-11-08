const fs = require('fs');

console.log('🛡️ Fixing horizontal scrollbars and improving slide responsiveness...\n');

let css = fs.readFileSync('css/styles.css', 'utf8');

// 1. Update base .slide-bullets
const oldSlideBulletsRegex = /\.slide-bullets\s*\{[\s\S]*?scrollbar-color:[^;]+;/;
const newSlideBullets = `.slide-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: clamp(0.55rem, 1.15vh, 0.95rem);
  margin-bottom: clamp(0.65rem, 1.3vh, 1.25rem);
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  overscroll-behavior-x: none !important;
  padding-right: 0.45rem;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
  scrollbar-width: thin;
  scrollbar-color: rgba(180, 131, 36, 0.35) transparent;`;

if (oldSlideBulletsRegex.test(css)) {
  css = css.replace(oldSlideBulletsRegex, newSlideBullets);
  console.log('✅ Updated base .slide-bullets');
} else {
  console.error('❌ Could not match oldSlideBulletsRegex');
}

// 2. Update .slide-bullets::-webkit-scrollbar to strictly hide horizontal
const oldScrollbarRegex = /\.slide-bullets::-webkit-scrollbar\s*\{\s*width:\s*5px;\s*\}/;
const newScrollbar = `.slide-bullets::-webkit-scrollbar {
  width: 5px;
  height: 0px !important;
}

.slide-bullets::-webkit-scrollbar:horizontal {
  display: none !important;
  height: 0px !important;
  width: 0px !important;
  opacity: 0 !important;
  visibility: hidden !important;
}`;

if (oldScrollbarRegex.test(css)) {
  css = css.replace(oldScrollbarRegex, newScrollbar);
  console.log('✅ Updated .slide-bullets::-webkit-scrollbar');
} else {
  console.error('❌ Could not match oldScrollbarRegex');
}

// 3. Update .slide-bullets li
const oldBulletsLiRegex = /\.slide-bullets li\s*\{[\s\S]*?font-weight:\s*400;[^\}]*\}/;
const newBulletsLi = `.slide-bullets li {
  position: relative;
  padding-left: clamp(1.4rem, 2vw, 1.85rem);
  font-size: clamp(0.98rem, 1.34vh + 0.2vw, 1.14rem);
  line-height: 1.62;
  color: #334155;
  font-weight: 400;
  max-width: 100% !important;
  box-sizing: border-box !important;
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}`;

if (oldBulletsLiRegex.test(css)) {
  css = css.replace(oldBulletsLiRegex, newBulletsLi);
  console.log('✅ Updated .slide-bullets li');
} else {
  console.error('❌ Could not match oldBulletsLiRegex');
}

// 4. Update .slide-bullets.avances-mode hover (remove translateX(3px) which causes overflow)
css = css.replace(
  '.slide-bullets.avances-mode li.avance-summary-card:hover {\r\n  transform: translateX(3px) !important;',
  '.slide-bullets.avances-mode li.avance-summary-card:hover {\r\n  transform: translateY(-2px) !important;'
);
css = css.replace(
  '.slide-bullets.avances-mode li.avance-summary-card:hover {\n  transform: translateX(3px) !important;',
  '.slide-bullets.avances-mode li.avance-summary-card:hover {\n  transform: translateY(-2px) !important;'
);

// 5. Update .slide-bullets.conclusion-mode hover
css = css.replace(
  '.slide-bullets.conclusion-mode li.conclusion-summary-card:hover {\r\n  transform: translateX(3px) !important;',
  '.slide-bullets.conclusion-mode li.conclusion-summary-card:hover {\r\n  transform: translateY(-2px) !important;'
);
css = css.replace(
  '.slide-bullets.conclusion-mode li.conclusion-summary-card:hover {\n  transform: translateX(3px) !important;',
  '.slide-bullets.conclusion-mode li.conclusion-summary-card:hover {\n  transform: translateY(-2px) !important;'
);

// 6. Append comprehensive anti-overflow shield
const antiOverflowShield = `
/* ─── BLINDAJE TOTAL: ELIMINACIÓN DE SCROLLBAR HORIZONTAL Y RESPONSIVIDAD ─── */
.slide-card {
  overflow-x: hidden !important;
  box-sizing: border-box !important;
}

.slide-bullets,
.slide-bullets.intro-mode,
.slide-bullets.avances-mode,
.slide-bullets.conclusion-mode {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.slide-bullets li,
.slide-bullet-item,
.intro-card,
.avance-summary-card,
.conclusion-summary-card {
  max-width: 100% !important;
  box-sizing: border-box !important;
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}

.consigna-line,
.conclusion-row,
.avance-row-header,
.avance-card-actions {
  flex-wrap: wrap !important;
  max-width: 100% !important;
}

.consigna-val,
.conclusion-text,
.avance-row-text,
.bullet-desc {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  max-width: 100% !important;
  overflow-wrap: break-word !important;
  word-break: break-word !important;
}

/* Ocultamiento universal de cualquier barra horizontal en la presentación */
.slide-card::-webkit-scrollbar:horizontal,
.slide-bullets::-webkit-scrollbar:horizontal,
.slide-bullets *::-webkit-scrollbar:horizontal {
  display: none !important;
  height: 0px !important;
  width: 0px !important;
  opacity: 0 !important;
  visibility: hidden !important;
}
`;

if (!css.includes('BLINDAJE TOTAL: ELIMINACIÓN DE SCROLLBAR HORIZONTAL')) {
  css += '\n' + antiOverflowShield;
  console.log('✅ Appended anti-overflow shield');
}

fs.writeFileSync('css/styles.css', css, 'utf8');
console.log('\n🎉 css/styles.css successfully updated with anti-overflow protections!');


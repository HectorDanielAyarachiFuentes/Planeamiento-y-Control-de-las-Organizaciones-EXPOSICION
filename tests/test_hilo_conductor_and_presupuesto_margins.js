const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST: HILO CONDUCTOR Y MARGENES RESPONSIVOS DE FILMINA 20 ===');

// 1. Verificar márgenes y grids en assets/presupuesto_universitario_2026_argentina_svg_isom_trico.html
const htmlPath = path.join(__dirname, '..', 'assets', 'presupuesto_universitario_2026_argentina_svg_isom_trico.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

assert(htmlContent.includes('padding: 0 clamp(20px, 3.5vw, 44px);'), 'El .container debe tener padding con clamp');
assert(htmlContent.includes('padding: clamp(20px, 2.5vw, 32px);'), 'El .slide-section debe tener padding con clamp');
assert(htmlContent.includes('repeat(12, minmax(0, 1fr))'), 'El .grid-12 debe usar minmax(0, 1fr)');
assert(htmlContent.includes('@media (max-width: 1080px)'), 'El .grid-12 debe responder a 1080px');
assert(htmlContent.includes('repeat(4, minmax(0, 1fr))'), 'El .reality-grid debe usar minmax(0, 1fr)');
assert(htmlContent.includes('@media (max-width: 1140px)'), 'El .reality-grid debe colapsar a 2 columnas a 1140px');
assert(htmlContent.includes('min-width: 0;') && htmlContent.includes('overflow: hidden;'), '.reality-card debe tener min-width: 0 y overflow: hidden');
console.log('✓ assets/presupuesto_universitario_2026_argentina_svg_isom_trico.html: márgenes y grids verificados.');

// 2. Verificar estilos del modal en css/styles.css
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('.svg-modal-header {') && cssContent.includes('flex-wrap: nowrap;'), '.svg-modal-header debe tener flex-wrap: nowrap');
assert(cssContent.includes('text-overflow: ellipsis;') && cssContent.includes('min-width: 0;'), '.svg-modal-header h3 debe truncar con ellipsis');
assert(cssContent.includes('.svg-modal.mode-3d-active .svg-modal-body'), '.svg-modal.mode-3d-active debe estilizar el body oscuro');
console.log('✓ css/styles.css: modal header y body oscuro verificados.');

// 3. Verificar data/presentacion_data.js con las recomendaciones de la docente
const data = require(path.join(__dirname, '..', 'data', 'presentacion_data.js'));

// Slide 1
const slide1 = data.slides.find(s => s.numero === 1);
assert(slide1.guionOrador.includes('hilo conductor'), 'Slide 1 debe mencionar el hilo conductor');
assert(slide1.guionOrador.includes('10 Nodos Regionales'), 'Slide 1 debe mencionar los 10 Nodos Regionales');
assert(slide1.guionOrador.includes('90,2%'), 'Slide 1 debe mencionar el 90,2% en Personal');

// Slide 2
const slide2 = data.slides.find(s => s.numero === 2);
assert(slide2.puntosClave.some(p => p.includes('Hilo Conductor Estratégico')), 'Slide 2 debe incluir el punto Hilo Conductor');

// Slide 7
const slide7 = data.slides.find(s => s.numero === 7);
assert(slide7.puntosClave.some(p => p.includes('rompen la endogamia') || p.includes('Ruptura') || p.includes('Poligobernanza')), 'Slide 7 debe explicar la ruptura de la paradoja');
assert(slide7.guionOrador.includes('Cao y Blutman') && (slide7.guionOrador.includes('10 nodos') || slide7.guionOrador.includes('10 Nodos')), 'Slide 7 guion debe cruzar a Cao & Blutman con los 10 nodos');

// Slide 19
const slide19 = data.slides.find(s => s.numero === 19);
assert(slide19.titulo.includes('Custodia Documental'), 'Slide 19 debe titular Custodia Documental');
assert(slide19.puntosClave.some(p => p.includes('Declaración Jurada de Custodia Documental')), 'Slide 19 debe incluir DDJJ de Custodia Documental');
assert(slide19.puntosClave.some(p => p.includes('Subrogancia Automática')), 'Slide 19 debe incluir Subrogancia Automática');
assert(slide19.guionOrador.includes('Declaración Jurada con Deber de Custodia Documental'), 'Slide 19 guion debe incluir DDJJ de custodia');

// Slide 20
const slide20 = data.slides.find(s => s.numero === 20);
assert(slide20.puntosClave.some(p => p.includes('expansión territorial')), 'Slide 20 debe contrastar la expansión con el 90,2%');

// Slide 29
const slide29 = data.slides.find(s => s.numero === 29);
assert(slide29.guionOrador.includes('hilo conductor'), 'Slide 29 guion debe cerrar con el hilo conductor');
assert(slide29.guionOrador.includes('declaración jurada de custodia documental'), 'Slide 29 debe citar custodia documental');

console.log('✓ data/presentacion_data.js: Hilo conductor y recomendaciones docentes verificadas.');
console.log('=== TODOS LOS TESTS PASARON EXITOSAMENTE (100%) ===');

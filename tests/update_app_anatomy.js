const fs = require('fs');

console.log('Actualizando js/app.js con integración completa de Anatomy 3D...');

let code = fs.readFileSync('js/app.js', 'utf8');

// 1. Añadir referencias de elementos en constructor / init
const targetInit = 'this.btnSvgNewTab = document.getElementById("btn-svg-newtab");';
const replaceInit = `this.btnSvgNewTab = document.getElementById("btn-svg-newtab");
    this.svgModalIframe = document.getElementById("svg-modal-iframe");
    this.btnSvgToggleView = document.getElementById("btn-svg-toggle-view");
    this.btnSvgTurntable = document.getElementById("btn-svg-turntable");
    this.isAnatomyModeActive = false;
    this.currentModalAnatomySlide = null;
    this.currentModalUrl = null;`;

code = code.replace(targetInit, replaceInit);

// 2. Añadir listeners en bindEvents
const targetBindEvents = 'this.btnSvgNewTab.href = this.svgModalImg.src;\n    }';
const replaceBindEvents = `this.btnSvgNewTab.href = this.svgModalImg.src;
    }

    if (this.btnSvgTurntable) {
      this.btnSvgTurntable.addEventListener("click", () => {
        if (this.svgModalIframe && this.svgModalIframe.contentWindow) {
          this.svgModalIframe.contentWindow.postMessage({ type: "toggle-turntable" }, "*");
        }
      });
    }

    if (this.btnSvgToggleView) {
      this.btnSvgToggleView.addEventListener("click", () => {
        if (this.isAnatomyModeActive) {
          this.isAnatomyModeActive = false;
          if (this.svgModalIframe) this.svgModalIframe.style.display = "none";
          if (this.svgModalImg) {
            this.svgModalImg.src = this.currentModalUrl || "";
            this.svgModalImg.style.display = "block";
          }
          this.btnSvgToggleView.textContent = "🔬 Dispositivo 3D";
          if (this.btnSvgTurntable) this.btnSvgTurntable.style.display = "none";
          if (this.btnSvgNewTab) this.btnSvgNewTab.href = this.currentModalUrl || "#";
        } else {
          this.isAnatomyModeActive = true;
          if (this.svgModalImg) this.svgModalImg.style.display = "none";
          if (this.svgModalIframe) {
            this.svgModalIframe.src = "_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=" + this.currentModalAnatomySlide + "&embedded=true&theme=dark";
            this.svgModalIframe.style.display = "block";
          }
          this.btnSvgToggleView.textContent = "🗺️ Ver Mapa 2D";
          if (this.btnSvgTurntable) this.btnSvgTurntable.style.display = "inline-flex";
          if (this.btnSvgNewTab) this.btnSvgNewTab.href = "_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=" + this.currentModalAnatomySlide;
        }
      });
    }`;

if (code.includes('this.btnSvgNewTab.href = this.svgModalImg.src;')) {
  code = code.replace('this.btnSvgNewTab.href = this.svgModalImg.src;\n    }', replaceBindEvents);
}

// 3. Actualizar applySlideDOM para renderizar slide.dispositivoAnatomy
const oldSvgBlockRegex = /if \(slide\.diagramaSVG\) \{[\s\S]*?this\.bulletsElement\.appendChild\(svgActionBox\);\s*\}/;

const newAnatomyBlock = `if (slide.dispositivoAnatomy) {
      const anatomyBox = document.createElement("div");
      anatomyBox.className = "slide-anatomy-card";
      const a = slide.dispositivoAnatomy;
      anatomyBox.innerHTML = \`
        <div class="slide-anatomy-header">
          <div class="slide-anatomy-title-wrap">
            <span class="slide-anatomy-badge">🔬 DISPOSITIVO ISOMÉTRICO 3D</span>
            <span class="slide-anatomy-hint">Arrastrá para girar 360° • Rueda: Zoom</span>
          </div>
          <div class="slide-anatomy-controls">
            <button class="btn-anatomy-tool btn-turntable" title="Iniciar / Detener Giro 360°">🔄 Auto-Giro</button>
            <button class="btn-anatomy-tool btn-reset-iso" title="Restablecer Vista">↺ Vista</button>
            <span class="shortcut-pill">V</span>
          </div>
        </div>
        <div class="slide-anatomy-viewport">
          <iframe src="_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=\${a.slideNum}&embedded=true&theme=dark" 
                  class="slide-anatomy-iframe" 
                  title="\${a.titulo}" 
                  loading="eager"
                  allow="fullscreen"></iframe>
        </div>
        <div class="slide-anatomy-actions">
          <button class="btn-expand-anatomy" title="Agrandar y Explorar en Pantalla Completa (Atajo: V)">
            <span>🔍 Pantalla Completa 360° (Anatomy)</span>
            <span class="shortcut-pill">V</span>
          </button>
          \${slide.diagramaSVG ? \`
            <button class="btn-toggle-map" title="Alternar entre Dispositivo Isométrico 3D y Mapa Cartográfico Oficial">
              <span>🗺️ Ver Mapa 2D</span>
            </button>
          \` : ''}
        </div>
      \`;
      
      const iframe = anatomyBox.querySelector("iframe");
      anatomyBox.querySelector(".btn-turntable")?.addEventListener("click", () => {
        iframe?.contentWindow?.postMessage({ type: "toggle-turntable" }, "*");
      });
      anatomyBox.querySelector(".btn-reset-iso")?.addEventListener("click", () => {
        iframe?.contentWindow?.postMessage({ type: "reset" }, "*");
      });
      anatomyBox.querySelector(".btn-expand-anatomy")?.addEventListener("click", () => {
        this.openSvgModal(slide.diagramaSVG, a.titulo, a.slideNum);
      });
      
      const btnToggleMap = anatomyBox.querySelector(".btn-toggle-map");
      if (btnToggleMap) {
        let isShowingMap = false;
        btnToggleMap.addEventListener("click", () => {
          const viewport = anatomyBox.querySelector(".slide-anatomy-viewport");
          if (!isShowingMap) {
            isShowingMap = true;
            viewport.innerHTML = \`
              <div class="slide-svg-img-frame" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#ffffff;cursor:pointer;">
                <img src="\${slide.diagramaSVG}" alt="\${slide.titulo}" style="max-width:96%;max-height:96%;object-fit:contain;" />
                <div class="slide-svg-hover-overlay">
                  <span class="overlay-hint">🔍 Clic para pantalla completa</span>
                </div>
              </div>
            \`;
            viewport.querySelector(".slide-svg-img-frame")?.addEventListener("click", () => {
              this.openSvgModal(slide.diagramaSVG, slide.titulo, null);
            });
            btnToggleMap.innerHTML = \`<span>🔬 Dispositivo 3D</span>\`;
          } else {
            isShowingMap = false;
            viewport.innerHTML = \`
              <iframe src="_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=\${a.slideNum}&embedded=true&theme=dark" 
                      class="slide-anatomy-iframe" 
                      title="\${a.titulo}" 
                      loading="eager"
                      allow="fullscreen"></iframe>
            \`;
            btnToggleMap.innerHTML = \`<span>🗺️ Ver Mapa 2D</span>\`;
          }
        });
      }
      
      this.bulletsElement.appendChild(anatomyBox);
    } else if (slide.diagramaSVG) {
      const svgActionBox = document.createElement("div");
      svgActionBox.className = "slide-svg-action";
      svgActionBox.innerHTML = \`
        <div class="slide-svg-inline-container" title="Haga clic para agrandar en pantalla completa (Atajo: V)">
          <div class="slide-svg-inline-header">
            <span class="slide-svg-badge">📐 DIAGRAMA VECTORIAL VISIBLE</span>
            <span class="shortcut-pill">Atajo: V</span>
          </div>
          <div class="slide-svg-img-frame">
            <img src="\${slide.diagramaSVG}" alt="\${slide.titulo}" class="slide-svg-img" loading="eager" />
            <div class="slide-svg-hover-overlay">
              <span class="overlay-hint">🔍 Clic para pantalla completa</span>
            </div>
          </div>
          <button class="btn-open-svg" title="Agrandar y Explorar Diagrama SVG en Alta Definición (Atajo: V)">
            <span>🔍 Agrandar y Explorar Diagrama Oficial (Pantalla Completa)</span>
            <span class="shortcut-pill">V</span>
          </button>
        </div>
      \`;
      const triggerModal = () => this.openSvgModal(slide.diagramaSVG, slide.titulo, null);
      const frame = svgActionBox.querySelector(".slide-svg-img-frame");
      if (frame) frame.addEventListener("click", triggerModal);
      const btn = svgActionBox.querySelector("button");
      if (btn) btn.addEventListener("click", triggerModal);
      this.bulletsElement.appendChild(svgActionBox);
    }`;

code = code.replace(oldSvgBlockRegex, newAnatomyBlock);

// 4. Actualizar openSvgModal y closeSvgModal
const oldOpenSvgModalRegex = /openSvgModal\(url,\s*title\)\s*\{[\s\S]*?closeSvgModal\(\)\s*\{[\s\S]*?this\.resetSvgTransform\(\);\s*\}/;

const newOpenSvgModal = `openSvgModal(url, title, anatomySlideNum = null) {
    if (!this.svgModal) return;
    
    const currentSlide = this.data.slides[this.currentSlideIndex];
    const anatomy = anatomySlideNum || (currentSlide && currentSlide.dispositivoAnatomy ? currentSlide.dispositivoAnatomy.slideNum : null);
    
    this.currentModalAnatomySlide = anatomy;
    this.currentModalUrl = url;
    this.currentModalTitle = title;
    
    if (this.svgModalTitle) {
      this.svgModalTitle.textContent = title ? \`📐 \${title}\` : "📐 Diagrama Conceptual";
    }
    
    if (anatomy) {
      this.isAnatomyModeActive = true;
      if (this.svgModalIframe) {
        this.svgModalIframe.src = \`_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=\${anatomy}&embedded=true&theme=dark\`;
        this.svgModalIframe.style.display = "block";
      }
      if (this.svgModalImg) {
        this.svgModalImg.style.display = "none";
      }
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.style.display = url ? "inline-flex" : "none";
        this.btnSvgToggleView.textContent = "🗺️ Ver Mapa 2D";
      }
      if (this.btnSvgTurntable) {
        this.btnSvgTurntable.style.display = "inline-flex";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = \`_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=\${anatomy}\`;
      }
    } else {
      this.isAnatomyModeActive = false;
      if (this.svgModalIframe) {
        this.svgModalIframe.style.display = "none";
        this.svgModalIframe.src = "";
      }
      if (this.svgModalImg) {
        this.svgModalImg.src = url || "";
        this.svgModalImg.style.display = "block";
      }
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.style.display = "none";
      }
      if (this.btnSvgTurntable) {
        this.btnSvgTurntable.style.display = "none";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = url || "#";
      }
    }
    
    this.resetSvgTransform();
    this.svgModal.classList.add("open");
    if (this.svgModalBackdrop) {
      this.svgModalBackdrop.classList.add("open");
    }
  }

  closeSvgModal() {
    if (!this.svgModal) return;
    this.svgModal.classList.remove("open", "maximized");
    if (this.svgModalBackdrop) {
      this.svgModalBackdrop.classList.remove("open");
    }
    this.isSvgMaximized = false;
    if (this.btnSvgMaximize) {
      this.btnSvgMaximize.textContent = "⛶ Maximizar";
    }
    if (this.svgModalIframe) {
      this.svgModalIframe.src = "";
      this.svgModalIframe.style.display = "none";
    }
    if (this.svgModalImg) {
      this.svgModalImg.style.display = "block";
    }
    this.resetSvgTransform();
  }`;

code = code.replace(oldOpenSvgModalRegex, newOpenSvgModal);

fs.writeFileSync('js/app.js', code, 'utf8');
console.log('✔ js/app.js escrito exitosamente con soporte para Anatomy 3D');


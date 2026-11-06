const fs = require('fs');

let content = fs.readFileSync('js/app.js', 'utf8');

// 1. Add listener to btnSvgToggleView
const oldBtnMax = `    if (this.btnSvgMaximize) {
      this.btnSvgMaximize.addEventListener("click", () => this.toggleSvgMaximize());
    }`;
const newBtnMax = `    if (this.btnSvgMaximize) {
      this.btnSvgMaximize.addEventListener("click", () => this.toggleSvgMaximize());
    }
    if (this.btnSvgToggleView) {
      this.btnSvgToggleView.addEventListener("click", () => this.toggleSvgModalView());
    }`;

content = content.replace(oldBtnMax.replace(/\r?\n/g, '\r\n'), newBtnMax.replace(/\r?\n/g, '\r\n'));
if (!content.includes('toggleSvgModalView()')) {
  content = content.replace(oldBtnMax.replace(/\r?\n/g, '\n'), newBtnMax.replace(/\r?\n/g, '\n'));
}

// 2. Add keyboard shortcut '3'
const oldKeyV = `      } else if (e.key.toLowerCase() === "v") {
        // Atajo V: Ver diagrama SVG o dispositivo de la filmina actual si existe
        const slide = this.data.slides[this.currentSlideIndex];
        if (slide && (slide.dispositivoAnatomy || slide.diagramaSVG)) {
          const a = slide.dispositivoAnatomy;
          this.openSvgModal(slide.diagramaSVG, a ? a.titulo : slide.titulo, a ? a.slideNum : null);
        } else {
          this.toggleDrawer(true);
          document.querySelector('[data-tab="svgs"]')?.click();
        }
      }`;

const newKeyV = `      } else if (e.key.toLowerCase() === "v") {
        // Atajo V: Ver diagrama SVG o dispositivo de la filmina actual si existe
        const slide = this.data.slides[this.currentSlideIndex];
        if (slide && (slide.dispositivoAnatomy || slide.diagramaSVG)) {
          const a = slide.dispositivoAnatomy;
          this.openSvgModal(slide.diagramaSVG, a ? a.titulo : slide.titulo, a ? a.slideNum : null);
        } else {
          this.toggleDrawer(true);
          document.querySelector('[data-tab="svgs"]')?.click();
        }
      } else if (e.key === "3") {
        const slide = this.data.slides[this.currentSlideIndex];
        if (slide && slide.maqueta3D) {
          this.openSvgModal(slide.diagramaSVG, slide.titulo, null, true, slide.maqueta3D);
        }
      }`;

content = content.replace(oldKeyV.replace(/\r?\n/g, '\r\n'), newKeyV.replace(/\r?\n/g, '\r\n'));
if (!content.includes('slide.maqueta3D')) {
  content = content.replace(oldKeyV.replace(/\r?\n/g, '\n'), newKeyV.replace(/\r?\n/g, '\n'));
}

// 3. Update renderSlide for diagramaSVG + maqueta3D
const oldRenderSvg = `    } else if (slide.diagramaSVG) {
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

const newRenderSvg = `    } else if (slide.diagramaSVG) {
      const svgActionBox = document.createElement("div");
      svgActionBox.className = "slide-svg-action";
      const hasMaqueta = Boolean(slide.maqueta3D);

      svgActionBox.innerHTML = \`
        <div class="slide-svg-inline-container" title="Haga clic para agrandar en pantalla completa (Atajo: V)">
          <div class="slide-svg-inline-header">
            <span class="slide-svg-badge">\${hasMaqueta ? "📐 LÁMINA CARTOGRÁFICA & MAQUETA 3D" : "📐 DIAGRAMA VECTORIAL VISIBLE"}</span>
            <span class="shortcut-pill">Atajo: V \${hasMaqueta ? "• 3D: 3" : ""}</span>
          </div>
          <div class="slide-svg-img-frame">
            <img src="\${slide.diagramaSVG}" alt="\${slide.titulo}" class="slide-svg-img" loading="eager" />
            <div class="slide-svg-hover-overlay">
              <span class="overlay-hint">🔍 Clic para pantalla completa</span>
            </div>
          </div>
          <div class="slide-svg-btn-row" style="display:flex;gap:6px;padding:6px 8px;background:rgba(15,45,89,0.03);">
            <button class="btn-open-svg btn-action-2d" style="flex:1;" title="Agrandar y Explorar Diagrama SVG en Alta Definición (Atajo: V)">
              <span>🔍 Lámina Oficial 2D</span>
              <span class="shortcut-pill">V</span>
            </button>
            \${hasMaqueta ? \`
            <button class="btn-open-svg btn-action-3d" style="flex:1;background:linear-gradient(135deg,#0f3460,#0284c7);color:#ffffff;border-color:#38bdf8;" title="Explorar Maqueta 3D Interactiva con Relieve y Nodos (Atajo: 3)">
              <span>🌐 Maqueta 3D Real</span>
              <span class="shortcut-pill" style="background:rgba(255,255,255,0.2);color:#ffffff;">3</span>
            </button>
            \` : ""}
          </div>
        </div>
      \`;
      const triggerModal2D = () => this.openSvgModal(slide.diagramaSVG, slide.titulo, null, false);
      const triggerModal3D = () => this.openSvgModal(slide.diagramaSVG, slide.titulo, null, true, slide.maqueta3D);

      const frame = svgActionBox.querySelector(".slide-svg-img-frame");
      if (frame) frame.addEventListener("click", triggerModal2D);
      const btn2D = svgActionBox.querySelector(".btn-action-2d");
      if (btn2D) btn2D.addEventListener("click", triggerModal2D);
      const btn3D = svgActionBox.querySelector(".btn-action-3d");
      if (btn3D) btn3D.addEventListener("click", triggerModal3D);

      this.bulletsElement.appendChild(svgActionBox);
    }`;

content = content.replace(oldRenderSvg.replace(/\r?\n/g, '\r\n'), newRenderSvg.replace(/\r?\n/g, '\r\n'));
if (!content.includes('btn-action-3d')) {
  content = content.replace(oldRenderSvg.replace(/\r?\n/g, '\n'), newRenderSvg.replace(/\r?\n/g, '\n'));
}

// 4. Update openSvgModal and add toggleSvgModalView
const oldOpenSvg = `  openSvgModal(url, title, anatomySlideNum = null) {
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
        this.svgModalImg.style.display = url ? "block" : "none";
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
  }`;

const newOpenSvg = `  openSvgModal(url, title, anatomySlideNum = null, startIn3D = false, maqueta3DUrl = null) {
    if (!this.svgModal) return;
    
    const currentSlide = this.data.slides[this.currentSlideIndex];
    const anatomy = anatomySlideNum || (currentSlide && currentSlide.dispositivoAnatomy ? currentSlide.dispositivoAnatomy.slideNum : null);
    const maqueta = maqueta3DUrl || (currentSlide && currentSlide.maqueta3D ? currentSlide.maqueta3D : null);

    this.currentModalAnatomySlide = anatomy;
    this.currentModalMaqueta = maqueta;
    this.currentModalUrl = url;
    this.currentModalTitle = title;
    
    if (this.svgModalTitle) {
      this.svgModalTitle.textContent = title ? \`📐 \${title}\` : "📐 Diagrama Conceptual";
    }

    if (maqueta && startIn3D) {
      this.isAnatomyModeActive = true;
      if (this.svgModalIframe) {
        this.svgModalIframe.src = maqueta;
        this.svgModalIframe.style.display = "block";
      }
      if (this.svgModalImg) {
        this.svgModalImg.style.display = "none";
      }
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.style.display = "inline-flex";
        this.btnSvgToggleView.textContent = "🗺️ Ver Lámina 2D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = maqueta;
      }
    } else if (anatomy) {
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
        this.svgModalImg.style.display = url ? "block" : "none";
      }
      if (this.btnSvgToggleView) {
        if (maqueta) {
          this.btnSvgToggleView.style.display = "inline-flex";
          this.btnSvgToggleView.textContent = "🌐 Ver Maqueta 3D";
        } else {
          this.btnSvgToggleView.style.display = "none";
        }
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

  toggleSvgModalView() {
    if (!this.svgModalIframe || !this.svgModalImg) return;
    const isShowingIframe = this.svgModalIframe.style.display === "block";
    const currentSlide = this.data.slides[this.currentSlideIndex];
    const maqueta = this.currentModalMaqueta || (currentSlide && currentSlide.maqueta3D ? currentSlide.maqueta3D : null);

    if (isShowingIframe) {
      this.svgModalIframe.style.display = "none";
      this.svgModalImg.style.display = "block";
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.textContent = maqueta ? "🌐 Ver Maqueta 3D" : "🔬 Modo 3D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = this.currentModalUrl || "#";
      }
    } else {
      if (maqueta) {
        this.svgModalIframe.src = maqueta;
      }
      this.svgModalIframe.style.display = "block";
      this.svgModalImg.style.display = "none";
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.textContent = "🗺️ Ver Lámina 2D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = maqueta || "#";
      }
    }
    this.resetSvgTransform();
  }`;

content = content.replace(oldOpenSvg.replace(/\r?\n/g, '\r\n'), newOpenSvg.replace(/\r?\n/g, '\r\n'));
if (!content.includes('toggleSvgModalView() {')) {
  content = content.replace(oldOpenSvg.replace(/\r?\n/g, '\n'), newOpenSvg.replace(/\r?\n/g, '\n'));
}

fs.writeFileSync('js/app.js', content, 'utf8');
console.log('Updated app.js successfully!');


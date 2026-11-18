/**
 * =============================================================================
 * CONTROLADOR PRINCIPAL — APLICACIÓN DE PRESENTACIÓN DE TESINA (20 FILMINAS)
 * Universidad Nacional del Comahue — CURZAS
 * Autor: Tec. Sup. en RRHH Héctor Daniel Ayarachi Fuentes
 * =============================================================================
 * Administra la navegación a través de las 20 filminas, el visor de diagramas
 * vectoriales SVG, el cronómetro de 30 minutos, el modo enfoque de texto
 * y el panel de respaldo metodológico de 7 pestañas para el jurado.
 */

class PresentationApp {
  constructor(data) {
    this.data = data;
    this.currentSlideIndex = 0;
    this.totalSlides = data.slides.length;

    // Cronómetro de 30 minutos
    this.totalSeconds = data.timing.totalMinutos * 60;
    this.elapsedSeconds = 0;
    this.timerRunning = false;
    this.timerInterval = null;

    // Estado del modo enfoque de texto (atenuación del fondo 3D)
    this.is3dDimmed = false;

        // Catálogo de Diagramas Vectoriales SVG Oficiales del Proyecto
    this.catalogoSVGs = [
      {
        id: "red_nodos_territorio",
        titulo: "Mapeo Territorial y Red de 10 Nodos Regionales de Río Negro",
        autor: "CURZAS — UNCo (Avance 2)",
        archivo: "assets/red-territorial-nodos.svg",
        descripcion: "Distribución geográfica de la Sede Cabecera Viedma y los 10 Nodos Territoriales de Río Negro con sus divisiones departamentales y mediaciones tecnológicas."
      },
      {
        id: "planificacion_matus_pes",
        titulo: "Planificación Normativa vs. Situacional (Carlos Matus)",
        autor: "Carlos Matus (1987) — PES (Avance 2)",
        archivo: "assets/planificacion_matus_pes.svg",
        descripcion: "Matriz comparativa de ruptura paradigmática: el planificador dentro del juego, incertidumbre y los trabajadores como actores estratégicos con poder de veto."
      },
      {
        id: "organigrama_curzas",
        titulo: "Organigrama Institucional: Estructura Orgánico-Funcional vs. Real",
        autor: "CURZAS — UNCo (Avance 3)",
        archivo: "assets/organigrama.svg",
        descripcion: "Mapeo Integral: Jerarquía de Gobierno, Conducción Ejecutiva, Departamentos (Ord. CS N° 0039/2010), Personal y Red Territorial de Facto."
      },
      {
        id: "subsistemas_operativos",
        titulo: "Subsistemas de la Gestión de Recursos Humanos (Francisco Longo)",
        autor: "Francisco Longo (2006)",
        archivo: "assets/subsistemas_longo.svg",
        descripcion: "Diagrama arquitectónico central que modela la alineación estratégica, la planificación, el rendimiento, la compensación y las relaciones laborales en el empleo público."
      },
      {
        id: "presupuesto_isometrico_dashboard",
        titulo: "Presupuesto Universitario Nacional 2026 y Centralidad CURZAS",
        autor: "Ley de Presupuesto APN 2026 & CURZAS (Avance 4)",
        archivo: "assets/presupuesto_isometrico_preview.svg",
        maqueta3D: "assets/presupuesto_universitario_2026_argentina_svg_isom_trico.html",
        descripcion: "Comparativa macrofiscal escalonada: PBI ($1.035 B), Presupuesto APN ($148,1 B), Sistema Universitario ($4,87 B) y CURZAS ($4.877 M) con absorción del 90,2% en salarios (Inciso 1)."
      },
      {
        id: "rionegro_departamental",
        titulo: "División Departamental de Río Negro",
        autor: "CURZAS — UNCo",
        archivo: "assets/RioNegro.svg",
        descripcion: "Cartografía departamental de la provincia de Río Negro y su inserción patagónica."
      }
    ];

    // Elementos del DOM
    this.initDOMElements();

    // Inicializar Motor 3D
    const canvas = document.getElementById("webgl-canvas");
    this.engine3D = new window.Presentation3D(canvas);

    // Configurar Eventos e Inicializar
    this.bindEvents();
    this.renderStationsIndicator();
    const initialSlide = this.getSavedSlideIndex();
    this.renderSlide(initialSlide);
    this.populateDrawerContent();
    this.renderSlidesIndex();
  }

  initDOMElements() {
    this.cardElement = document.getElementById("slide-card");
    this.badgeElement = document.getElementById("slide-badge");
    this.bloqueBadgeElement = document.getElementById("slide-bloque-badge");
    this.titleElement = document.getElementById("slide-title");
    this.subtitleElement = document.getElementById("slide-subtitle");
    this.bulletsElement = document.getElementById("slide-bullets");
    this.footerMetaElement = document.getElementById("slide-footer-meta");

    this.slideCounter = document.getElementById("slide-counter");
    this.slideCounterBadge = document.getElementById("slide-counter-badge");
    this.slidesIndexPanel = document.getElementById("slides-index-panel");
    this.slidesIndexBackdrop = document.getElementById("slides-index-backdrop");
    this.slidesIndexBody = document.getElementById("slides-index-body");
    this.btnCloseSlidesIndex = document.getElementById("btn-close-slides-index");

    this.timerDisplay = document.getElementById("timer-display");
    this.btnTimerToggle = document.getElementById("btn-timer-toggle");
    this.btnTimerReset = document.getElementById("btn-timer-reset");

    this.btnPrev = document.getElementById("btn-prev");
    this.btnNext = document.getElementById("btn-next");
    this.brandHomeLink = document.getElementById("brand-home-link");
    this.stationsContainer = document.getElementById("stations-indicator");

    this.notesModal = document.getElementById("notes-modal");
    this.notesBody = document.getElementById("notes-body");
    this.btnToggleNotes = document.getElementById("btn-toggle-notes");
    this.btnCloseNotes = document.getElementById("btn-close-notes");

    this.drawerBackdrop = document.getElementById("drawer-backdrop");
    this.drawerPanel = document.getElementById("drawer-panel");
    this.btnToggleDrawer = document.getElementById("btn-toggle-drawer");
    this.btnCloseDrawer = document.getElementById("btn-close-drawer");
    this.drawerContent = document.getElementById("drawer-content");

    this.btnDim3d = document.getElementById("btn-dim-3d");
    this.btnReset3d = document.getElementById("btn-reset-3d");
    this.canvas = document.getElementById("webgl-canvas");

    // Barra de Progreso Superior
    this.progressBar = document.getElementById("presentation-progress-bar");

    // Nuevos Controles: Pantalla Completa y Atajos de Teclado
    this.btnFullscreen = document.getElementById("btn-toggle-fullscreen");
    this.btnShortcuts = document.getElementById("btn-toggle-shortcuts");
    this.shortcutsModal = document.getElementById("shortcuts-modal");
    this.shortcutsBackdrop = document.getElementById("shortcuts-backdrop");
    this.btnCloseShortcuts = document.getElementById("btn-close-shortcuts");

    // Elementos del Modo Accesible y Lector de Voz
    this.btnToggleTTS = document.getElementById("btn-toggle-tts");
    this.ttsFloatingDock = document.getElementById("tts-floating-dock");
    this.ttsBtnReadSlide = document.getElementById("tts-btn-read-slide");
    this.ttsBtnReadNotes = document.getElementById("tts-btn-read-notes");
    this.ttsBtnPause = document.getElementById("tts-btn-pause");
    this.ttsBtnPauseText = document.getElementById("tts-btn-pause-text");
    this.ttsBtnStop = document.getElementById("tts-btn-stop");
    this.ttsBtnClose = document.getElementById("tts-btn-close");
    this.btnReadNotesTTS = document.getElementById("btn-read-notes-tts");

    // Controles táctiles y móviles: Toggle de Filmina / 3D Full-screen
    this.btnToggle3dView = document.getElementById("btn-toggle-3d-view");
    this.btnFloatingCardToggle = document.getElementById("btn-floating-card-toggle");
    this.mainStage = document.getElementById("main-stage");
    this.isCardMinimized = false;
    this.currentViewMode = "default";

    // Variables de Modo Accesibilidad y Lector de Voz Nativo (Web Speech API)
    this.ttsActive = false;
    this.ttsSynth = (typeof window !== "undefined" && "speechSynthesis" in window) ? window.speechSynthesis : null;
    this.ttsVoice = null;
    this.ttsIsSpeaking = false;
    this.ttsIsPaused = false;
    this.ttsHoverTimeout = null;
    this.ttsCurrentTarget = null;
    this.ttsUtterance = null;
    this.ttsSequentialTimer = null;
    this.ttsSessionId = 0;
    this.ttsNotesSequenceId = 0;
    this.ttsStopRequested = false;
    this.ttsReadingNotes = false;
    this.ttsReadingSlide = false;
    this.btnViewText = document.getElementById("btn-view-text");
    this.btnView3d = document.getElementById("btn-view-3d");

    // Modal Visor SVG Interactivo con Zoom y Pan
    this.svgModal = document.getElementById("svg-modal");
    this.svgModalBackdrop = document.getElementById("svg-modal-backdrop");
    this.svgModalTitle = document.getElementById("svg-modal-title");
    this.svgModalImg = document.getElementById("svg-modal-img");
    this.btnCloseSvg = document.getElementById("btn-close-svg");
    this.svgViewport = document.getElementById("svg-viewport");
    this.svgZoomLevel = document.getElementById("svg-zoom-level");
    this.btnSvgZoomIn = document.getElementById("btn-svg-zoom-in");
    this.btnSvgZoomOut = document.getElementById("btn-svg-zoom-out");
    this.btnSvgReset = document.getElementById("btn-svg-reset");
    this.btnSvgFit = document.getElementById("btn-svg-fit");
    this.btnSvgMaximize = document.getElementById("btn-svg-maximize");
    this.btnSvgNewTab = document.getElementById("btn-svg-newtab");
    this.svgModalIframe = document.getElementById("svg-modal-iframe");
    this.btnSvgToggleView = document.getElementById("btn-svg-toggle-view");
    this.btnSvgTurntable = document.getElementById("btn-svg-turntable");
    this.isAnatomyModeActive = false;
    this.currentModalAnatomySlide = null;
    this.currentModalUrl = null;

    // Estado de Zoom y Desplazamiento (Pan) del SVG
    this.isSvgDragging = false;
    this.svgDragStartX = 0;
    this.svgDragStartY = 0;
    this.isSvgMaximized = false;

    // Catálogo y Visor de Material de Cátedra (95 Documentos)
    this.catedraData = (typeof window !== 'undefined' && window.CATEDRA_MATERIAL_DATA) || (typeof CATEDRA_MATERIAL_DATA !== 'undefined' ? CATEDRA_MATERIAL_DATA : []);
    this.docModal = document.getElementById("doc-modal");
    this.docModalBackdrop = document.getElementById("doc-modal-backdrop");
    this.docModalFrame = document.getElementById("doc-modal-frame");
    this.docModalFallback = document.getElementById("doc-modal-fallback");
    this.docFallbackTitle = document.getElementById("doc-fallback-title");
    this.docFallbackDesc = document.getElementById("doc-fallback-desc");
    this.btnDocFallbackDownload = document.getElementById("btn-doc-fallback-download");
    this.btnDocFallbackOpen = document.getElementById("btn-doc-fallback-open");
    this.docModalTitle = document.getElementById("doc-modal-title");
    this.docModalBadge = document.getElementById("doc-modal-badge");
    this.docModalBreadcrumb = document.getElementById("doc-modal-breadcrumb");
    this.btnDocMaximize = document.getElementById("btn-doc-maximize");
    this.btnDocNewtab = document.getElementById("btn-doc-newtab");
    this.btnDocDownload = document.getElementById("btn-doc-download");
    this.btnCloseDoc = document.getElementById("btn-close-doc");
    this.btnToggleCatedra = document.getElementById("btn-toggle-catedra");
    this.isDocMaximized = false;
    this.currentCatedraFilter = "all";
    this.currentCatedraSearch = "";

  }

  bindEvents() {
    this.initTTS();
    // Botones de Navegación
    this.btnPrev.addEventListener("click", () => this.prevSlide());
    this.btnNext.addEventListener("click", () => this.nextSlide());

    // Clic en Logotipo/Emblema Institucional UNCo - CURZAS (Ir a Filmina 1)
    if (this.brandHomeLink) {
      this.brandHomeLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.currentViewMode === "object") {
          this.setViewMode("default");
        }
        this.closeSvgModal();
        this.toggleNotes(false);
        this.toggleDrawer(false);
        this.toggleSlidesIndex(false);
        this.goToSlide(0);
      });
    }

    // Cronómetro
    this.btnTimerToggle.addEventListener("click", () => this.toggleTimer());
    this.btnTimerReset.addEventListener("click", () => this.resetTimer());

    // Modal de Notas de Orador
    this.btnToggleNotes.addEventListener("click", () => this.toggleNotes());
    
    // Controles de tamaño de letra y navegación del teleprómpter
    this.teleprompterFontSize = 1.05; // rem base
    const btnFontInc = document.getElementById("btn-notes-font-inc");
    const btnFontDec = document.getElementById("btn-notes-font-dec");
    if (btnFontInc) {
      btnFontInc.addEventListener("click", (e) => {
        e.stopPropagation();
        this.teleprompterFontSize = Math.min(1.45, this.teleprompterFontSize + 0.1);
        const content = document.getElementById("speech-card-content");
        if (content) content.style.fontSize = `${this.teleprompterFontSize}rem`;
      });
    }
    if (btnFontDec) {
      btnFontDec.addEventListener("click", (e) => {
        e.stopPropagation();
        this.teleprompterFontSize = Math.max(0.85, this.teleprompterFontSize - 0.1);
        const content = document.getElementById("speech-card-content");
        if (content) content.style.fontSize = `${this.teleprompterFontSize}rem`;
      });
    }
    const btnNotesPrev = document.getElementById("btn-notes-prev");
    const btnNotesNext = document.getElementById("btn-notes-next");
    if (btnNotesPrev) {
      btnNotesPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        this.prevSlide();
      });
    }
    if (btnNotesNext) {
      btnNotesNext.addEventListener("click", (e) => {
        e.stopPropagation();
        this.nextSlide();
      });
    }

    this.btnCloseNotes.addEventListener("click", () => this.toggleNotes(false));

    // Drawer de Respaldo Metodológico
    this.btnToggleDrawer.addEventListener("click", () => this.toggleDrawer());

    // Eventos del Lector de Voz Accesible
    if (this.btnToggleTTS) {
      this.btnToggleTTS.addEventListener("click", () => this.toggleTTS());
    }
    if (this.ttsBtnReadSlide) {
      this.ttsBtnReadSlide.addEventListener("click", () => this.readCurrentSlide());
    }
    if (this.ttsBtnReadNotes) {
      this.ttsBtnReadNotes.addEventListener("click", () => this.readCurrentNotes());
    }
    if (this.btnReadNotesTTS) {
      this.btnReadNotesTTS.addEventListener("click", () => this.readCurrentNotes());
    }
    if (this.ttsBtnPause) {
      this.ttsBtnPause.addEventListener("click", () => this.pauseResumeTTS());
    }
    if (this.ttsBtnStop) {
      this.ttsBtnStop.addEventListener("click", () => this.stopTTS());
    }
    if (this.ttsBtnClose) {
      this.ttsBtnClose.addEventListener("click", () => this.toggleTTS(false));
    }

    // Escucha inteligente de puntero y cursor para lectura dinámica
    document.addEventListener("pointerover", (e) => this.handlePointerOverTTS(e));
    document.addEventListener("focusin", (e) => this.handleFocusInTTS(e));
    this.btnCloseDrawer.addEventListener("click", () => this.toggleDrawer(false));
    this.drawerBackdrop.addEventListener("click", () => this.toggleDrawer(false));

    // Pantalla Completa
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener("click", () => this.toggleFullscreen());
    }
    document.addEventListener("fullscreenchange", () => {
      const isFull = !!document.fullscreenElement;
      if (this.btnFullscreen) {
        this.btnFullscreen.classList.toggle("active", isFull);
        const text = this.btnFullscreen.querySelector(".tool-text");
        if (text) text.textContent = isFull ? "Restaurar" : "Pantalla Completa";
      }
    });

    // Modal de Atajos de Teclado
    if (this.btnShortcuts) {
      this.btnShortcuts.addEventListener("click", () => this.toggleShortcuts());
    }
    if (this.btnCloseShortcuts) {
      this.btnCloseShortcuts.addEventListener("click", () => this.toggleShortcuts(false));
    }
    if (this.shortcutsBackdrop) {
      this.shortcutsBackdrop.addEventListener("click", () => this.toggleShortcuts(false));
    }

    // Modal Índice Canónico de los 3 Grandes Ejes
    if (this.slideCounterBadge) {
      this.slideCounterBadge.addEventListener("click", () => this.toggleSlidesIndex());
    }
    if (this.btnCloseSlidesIndex) {
      this.btnCloseSlidesIndex.addEventListener("click", () => this.toggleSlidesIndex(false));
    }
    if (this.slidesIndexBackdrop) {
      this.slidesIndexBackdrop.addEventListener("click", () => this.toggleSlidesIndex(false));
    }

    // Toggle de filmina / escultura 3D en dispositivos móviles y tablets
    if (this.btnToggle3dView) {
      this.btnToggle3dView.addEventListener("click", () => this.toggleMobile3dView());
    }
    if (this.btnViewText) {
      this.btnViewText.addEventListener("click", () => this.setViewMode("text"));
    }
    if (this.btnView3d) {
      this.btnView3d.addEventListener("click", () => this.setViewMode("object"));
    }

    if (this.btnFloatingCardToggle) {
      this.btnFloatingCardToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setViewMode("default");
        this.toggleMobile3dView(false);
      });
    }

    // Gestos Táctiles (Swipe Izquierda / Derecha) para Celulares y Tablets
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    if (this.mainStage) {
      this.mainStage.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartTime = Date.now();
        }
      }, { passive: true });

      this.mainStage.addEventListener("touchend", (e) => {
        if (e.changedTouches.length === 1) {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const diffX = touchEndX - touchStartX;
          const diffY = touchEndY - touchStartY;
          const elapsed = Date.now() - touchStartTime;

          // Desplazamiento horizontal claro: más de 45px y al menos 1.3 veces mayor que el vertical
          if (Math.abs(diffX) > 45 && Math.abs(diffX) > 1.3 * Math.abs(diffY) && elapsed < 650) {
            if (diffX < 0) {
              this.nextSlide();
            } else {
              this.prevSlide();
            }
          }
        }
      }, { passive: true });
    }

    // Modal Visor SVG y Controles de Zoom / Desplazamiento
    if (this.btnCloseSvg) {
      this.btnCloseSvg.addEventListener("click", () => this.closeSvgModal());
    }
    if (this.svgModalBackdrop) {
      this.svgModalBackdrop.addEventListener("click", () => this.closeSvgModal());
    }
    if (this.btnSvgZoomIn) {
      this.btnSvgZoomIn.addEventListener("click", () => this.zoomSvg(0.25));
    }
    if (this.btnSvgZoomOut) {
      this.btnSvgZoomOut.addEventListener("click", () => this.zoomSvg(-0.25));
    }
    if (this.btnSvgReset) {
      this.btnSvgReset.addEventListener("click", () => this.resetSvgTransform());
    }
    if (this.btnSvgFit) {
      this.btnSvgFit.addEventListener("click", () => this.fitSvgTransform());
    }
    if (this.btnSvgMaximize) {
      this.btnSvgMaximize.addEventListener("click", () => this.toggleSvgMaximize());
    }
    if (this.btnSvgToggleView) {
      this.btnSvgToggleView.addEventListener("click", () => this.toggleSvgModalView());
    }

    // Interacciones gestuales y de ratón en el viewport del SVG
    if (this.svgViewport) {
      // Zoom progresivo mediante rueda del mouse
      this.svgViewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        this.zoomSvg(delta);
      }, { passive: false });

      // Doble clic para alternar entre tamaño normal (100%) y ampliado (200%)
      this.svgViewport.addEventListener("dblclick", (e) => {
        e.preventDefault();
        if (this.svgZoom > 1.25) {
          this.resetSvgTransform();
        } else {
          this.setSvgZoom(2.0);
        }
      });

      // Arrastre libre (Pan) con clic sostenido
      this.svgViewport.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return; // Solo clic izquierdo
        this.isSvgDragging = true;
        this.svgDragStartX = e.clientX - this.svgPanX;
        this.svgDragStartY = e.clientY - this.svgPanY;
        this.svgViewport.classList.add("dragging");
        this.svgViewport.setPointerCapture(e.pointerId);
      });

      this.svgViewport.addEventListener("pointermove", (e) => {
        if (!this.isSvgDragging) return;
        this.svgPanX = e.clientX - this.svgDragStartX;
        this.svgPanY = e.clientY - this.svgDragStartY;
        this.updateSvgTransform();
      });

      const finalizarArrastre = (e) => {
        if (this.isSvgDragging) {
          this.isSvgDragging = false;
          this.svgViewport.classList.remove("dragging");
          try {
            this.svgViewport.releasePointerCapture(e.pointerId);
          } catch (_) {}
        }
      };

      this.svgViewport.addEventListener("pointerup", finalizarArrastre);
      this.svgViewport.addEventListener("pointercancel", finalizarArrastre);
    }

    // Modo Enfoque de Texto (Atenuar 3D)
    if (this.btnDim3d) {
      this.btnDim3d.addEventListener("click", () => this.toggle3dDim());
    }

    // Restablecer y Centrar Vista 3D
    if (this.btnReset3d) {
      this.btnReset3d.addEventListener("click", () => this.engine3D?.resetUserControls());
    }

    // Pestañas del Drawer (7 categorías)
    document.querySelectorAll(".drawer-tab").forEach((tab) => {
      tab.addEventListener("click", (e) => {
        document.querySelectorAll(".drawer-tab").forEach((t) => t.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.renderDrawerTab(e.currentTarget.dataset.tab);
      });
    });

    // Atajos de Teclado Profesionales
    window.addEventListener("keydown", (e) => {
      // Si el modal SVG está abierto, priorizar atajos de lupa y escape
      if (this.svgModal && this.svgModal.classList.contains("open")) {
        if (e.key === "+" || e.key === "=") {
          this.zoomSvg(0.25);
          return;
        } else if (e.key === "-" || e.key === "_") {
          this.zoomSvg(-0.25);
          return;
        } else if (e.key === "0") {
          this.resetSvgTransform();
          return;
        } else if (e.key.toLowerCase() === "a") {
        this.toggleTTS();
      } else if (e.key.toLowerCase() === "m") {
          this.toggleSvgMaximize();
          return;
        } else if (e.key === "Escape") {
          this.closeSvgModal();
          return;
        }
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        if (e.repeat) {
          const now = performance.now();
          if (now - (this.lastRepeatKeyTime || 0) < 180) {
            e.preventDefault();
            return;
          }
          this.lastRepeatKeyTime = now;
        }
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (e.repeat) {
          const now = performance.now();
          if (now - (this.lastRepeatKeyTime || 0) < 180) {
            e.preventDefault();
            return;
          }
          this.lastRepeatKeyTime = now;
        }
        e.preventDefault();
        this.prevSlide();
      } else if (e.key.toLowerCase() === "n") {
        this.toggleNotes();
      } else if (e.key.toLowerCase() === "m") {
        this.toggleDrawer();
      } else if (e.key.toLowerCase() === "r") {
        this.engine3D?.resetUserControls();
      } else if (e.key.toLowerCase() === "v") {
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
      } else if (e.key.toLowerCase() === "d") {
        this.toggle3dDim();
      } else if (e.key.toLowerCase() === "t") {
        this.toggleTimer();
      } else if (e.key.toLowerCase() === "f") {
        this.toggleFullscreen();
      } else if (e.key === "Home") {
        e.preventDefault();
        this.goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        this.goToSlide(this.totalSlides - 1);
      } else if (e.key === "Escape") {
        this.stopTTS();
        this.closeSvgModal();
        this.toggleNotes(false);
        this.toggleDrawer(false);
      }
    });

    // Sincronizar navegación con historial y hash del navegador (Atrás / Adelante)
    window.addEventListener("hashchange", () => {
      const targetIndex = this.getSavedSlideIndex();
      if (targetIndex !== this.currentSlideIndex) {
        this.goToSlide(targetIndex);
      }
    });
  }

  getDefenseSections() {
    return [
      {
        id: "apertura",
        code: "APERTURA",
        shortLabel: "Apertura",
        shortTitle: "APERTURA",
        title: "Apertura Institucional y Hoja de Ruta",
        range: [0, 1], // filminas 1 a 2
        isEje: false
      },
      {
        id: "avance1",
        code: "AVANCE 1",
        shortLabel: "Avance 1: Unidad I",
        shortTitle: "AVANCE 1",
        title: "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)",
        range: [2, 6], // filminas 3 a 7
        isEje: true,
        ejeNumber: 1
      },
      {
        id: "avance2",
        code: "AVANCE 2",
        shortLabel: "Avance 2: Unidad II",
        shortTitle: "AVANCE 2",
        title: "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)",
        range: [7, 12], // filminas 8 a 13
        isEje: true,
        ejeNumber: 2
      },
      {
        id: "avance3",
        code: "AVANCE 3",
        shortLabel: "Avance 3: Unidad III",
        shortTitle: "AVANCE 3",
        title: "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)",
        range: [13, 18], // filminas 14 a 19
        isEje: true,
        ejeNumber: 3
      },
      {
        id: "avance4",
        code: "AVANCE 4",
        shortLabel: "Avance 4: Unidad IV",
        shortTitle: "AVANCE 4",
        title: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
        range: [19, 23], // filminas 20 a 24
        isEje: true,
        ejeNumber: 4
      },
      {
        id: "avance5",
        code: "AVANCE 5",
        shortLabel: "Avance 5: Unidad V",
        shortTitle: "AVANCE 5",
        title: "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)",
        range: [24, 27], // filminas 25 a 28
        isEje: true,
        ejeNumber: 5
      },
      {
        id: "cierre",
        code: "CIERRE",
        shortLabel: "Cierre y Defensa",
        shortTitle: "CIERRE",
        title: "Cierre: Conclusiones Integrales y Defensa de Cátedra",
        range: [28, 28], // filmina 29
        isEje: false
      }
    ];
  }

  renderStationsIndicator() {
    if (!this.stationsContainer) return;
    this.stationsContainer.innerHTML = "";
    const sections = this.getDefenseSections();

    sections.forEach((sec, sIdx) => {
      if (sIdx > 0) {
        const divider = document.createElement("div");
        divider.className = "station-group-divider";
        divider.setAttribute("aria-hidden", "true");
        this.stationsContainer.appendChild(divider);
      }

      const groupEl = document.createElement("div");
      groupEl.className = `station-group ${sec.isEje ? "station-group-eje" : ""}`;
      groupEl.setAttribute("data-section", sec.id);
      groupEl.setAttribute("title", sec.title);

      for (let i = sec.range[0]; i <= sec.range[1]; i++) {
        const slide = this.data.slides[i];
        const dot = document.createElement("button");
        dot.className = `station-dot ${i === this.currentSlideIndex ? "active" : ""}`;
        dot.setAttribute("data-slide-index", i + 1);
        const tooltipText = `[${sec.code} • F${i + 1}] ${slide ? (slide.esquema || slide.titulo) : ""}`;
        dot.setAttribute("data-tooltip", tooltipText);
        dot.setAttribute("aria-label", `Ir a ${tooltipText}`);

        dot.innerHTML = `
          <span class="station-dot-hitbox" aria-hidden="true"></span>
          <span class="station-dot-core" aria-hidden="true"></span>
        `;

        dot.addEventListener("click", () => this.goToSlide(i));
        groupEl.appendChild(dot);
      }

      this.stationsContainer.appendChild(groupEl);
    });
  }

  renderSlidesIndex() {
    if (!this.slidesIndexBody) return;
    this.slidesIndexBody.innerHTML = "";
    const sections = this.getDefenseSections();

    sections.forEach((sec) => {
      const card = document.createElement("div");
      const isEjeActive = this.currentSlideIndex >= sec.range[0] && this.currentSlideIndex <= sec.range[1];
      card.className = `index-section-card ${sec.isEje ? "section-eje" : ""} ${isEjeActive ? "active-eje" : ""}`;

      const count = sec.range[1] - sec.range[0] + 1;
      card.innerHTML = `
        <div class="index-section-header">
          <span class="index-section-badge ${sec.isEje ? "badge-eje" : ""}">${sec.code}</span>
          <h4 class="index-section-title">${sec.title}</h4>
          <span class="index-section-count">${count} filmina${count > 1 ? "s" : ""}</span>
        </div>
      `;

      const grid = document.createElement("div");
      grid.className = "index-slide-grid";

      for (let i = sec.range[0]; i <= sec.range[1]; i++) {
        const slide = this.data.slides[i];
        const isCurrent = i === this.currentSlideIndex;
        const btn = document.createElement("button");
        btn.className = `index-slide-btn ${isCurrent ? "active" : ""}`;
        btn.setAttribute("data-slide-idx", i);
        btn.innerHTML = `
          <span class="index-slide-num">${i + 1 < 10 ? "0" + (i + 1) : i + 1}</span>
          <span class="index-slide-content">
            <strong class="index-slide-esquema">${slide ? (slide.esquema || "") : ""}</strong>
            <span class="index-slide-titulo">${slide ? slide.titulo : ""}</span>
          </span>
          ${isCurrent ? '<span class="index-slide-current-pill">Actual</span>' : ""}
        `;
        btn.addEventListener("click", () => {
          this.goToSlide(i);
          this.toggleSlidesIndex(false);
        });
        grid.appendChild(btn);
      }

      card.appendChild(grid);
      this.slidesIndexBody.appendChild(card);
    });
  }

  toggleSlidesIndex(force) {
    if (!this.slidesIndexPanel) return;
    const isCurrentlyOpen = this.slidesIndexPanel.classList.contains("open");
    const willOpen = force !== undefined ? force : !isCurrentlyOpen;

    if (willOpen) {
      this.slidesIndexPanel.classList.add("open");
      this.slidesIndexBackdrop?.classList.add("open");
      this.slideCounterBadge?.classList.add("active");
      this.renderSlidesIndex();
      setTimeout(() => {
        if (this.currentSlideIndex <= 4) {
          if (this.slidesIndexBody) this.slidesIndexBody.scrollTop = 0;
        } else {
          const activeCard = this.slidesIndexBody?.querySelector(".index-section-card.active-eje");
          if (activeCard) {
            activeCard.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        }
      }, 80);
    } else {
      this.slidesIndexPanel.classList.remove("open");
      this.slidesIndexBackdrop?.classList.remove("open");
      this.slideCounterBadge?.classList.remove("active");
    }
  }

  applySlideDOM(slide, index) {
    this.badgeElement.textContent = `FILMINA ${index + 1} / ${this.totalSlides} • ${slide.badge}`;
    if (this.bloqueBadgeElement) {
      this.bloqueBadgeElement.textContent = slide.bloque || "SIA 2026";
    }
    this.titleElement.textContent = slide.titulo;
    this.subtitleElement.textContent = slide.subtitulo;

    if (this.progressBar) {
      const pct = Math.round(((index + 1) / this.totalSlides) * 100);
      this.progressBar.style.width = `${pct}%`;
    }

    this.bulletsElement.innerHTML = "";
    this.bulletsElement.classList.remove("intro-mode", "avances-mode");

    if (index === 0 || slide.id === "slide_1" || slide.layout === "intro_showcase") {
      this.bulletsElement.classList.add("intro-mode");
      const introCards = [
        {
          badge: "EXPOSITOR",
          icon: "🎓",
          title: "Héctor Daniel Ayarachi Fuentes",
          sub: "Téc. Sup. en Recursos Humanos • Estudiante de Licenciatura",
          meta: "Legajo N° 8252 • CURZAS — Sede Viedma"
        },
        {
          badge: "CASA DE ESTUDIOS",
          icon: "🏛️",
          title: "CURZAS — Sede Viedma",
          sub: "Centro Universitario Regional Zona Atlántica y Sur",
          meta: "Universidad Nacional del Comahue (UNCo)"
        },
        {
          badge: "CÁTEDRA 2026",
          icon: "📚",
          title: "Planeamiento y Control",
          sub: "Ciclo Académico 2026 • Dpto. de Administración Pública",
          meta: "Docentes: Mgter. Susana Lopez • Lic. Carlos Jauge"
        },
        {
          badge: "OBJETIVO DE LA DEFENSA",
          icon: "⚖️",
          title: "Defensa Integral de los 5 Avances",
          sub: "Gobernanza, Planificación Situacional, Procesos Digitales, Presupuesto y Sistemas de Control",
          meta: "Investigación Institucional Rigurosa • Viedma, Río Negro"
        }
      ];

      introCards.forEach((c) => {
        const li = document.createElement("li");
        li.className = "intro-card";
        li.innerHTML = `
          <div class="intro-card-header">
            <span class="intro-card-badge">${c.badge}</span>
            <span class="intro-card-icon">${c.icon}</span>
          </div>
          <h4 class="intro-card-title">${c.title}</h4>
          <p class="intro-card-sub">${c.sub}</p>
          <div class="intro-card-meta">${c.meta}</div>
        `;
        this.bulletsElement.appendChild(li);
      });
    } else if (index === 1 || slide.id === "slide_2" || slide.layout === "avances_summary") {
      this.bulletsElement.classList.add("avances-mode");
      const avances = [
        {
          num: "AVANCE 1",
          numVal: 1,
          eje: "Unidad I",
          title: "Contexto, Modelo de Gestión y Gobernanza",
          objetivo: "Caracterizar el marco institucional: Weber vs NGP, accountability y gobernanza inteligente / IA (Oszlak).",
          pregunta: "¿Estructura weberiana o NGP? ¿Transparencia activa? ¿Normativas sobre IA en RRHH?",
          text: "Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
          targetSlide: 2,
          slideRange: "3 a 7"
        },
        {
          num: "AVANCE 2",
          numVal: 2,
          eje: "Unidad II",
          title: "Diagnóstico y Planificación Estratégica Situacional",
          objetivo: "Analizar viabilidad y capacidades estatales (Bertranou), FODA situado y mapeo de actores clave.",
          pregunta: "¿Planes normativos rígidos o PES situacional (Matus)? ¿Competencias críticas en plantillas?",
          text: "Red viva en 10 nodos provinciales, superando silos de datos con CONICET/INTA mediante concertación política y metodología PES.",
          targetSlide: 7,
          slideRange: "8 a 13"
        },
        {
          num: "AVANCE 3",
          numVal: 3,
          eje: "Unidad III",
          title: "Diseño Organizacional, Procesos y Ecosistema Digital",
          objetivo: "Mapear estructura formal vs real, flujograma de proceso clave (licencias) y transición a GDE/SUDOCU con cuellos de botella.",
          pregunta: "¿El organigrama formal coincide con el real? ¿Trámites 100% digitales o persistencia del papel?",
          text: "Organigrama real frente al formal; trazabilidad del circuito de licencias y superación de la inercia del papel mediante interoperabilidad.",
          targetSlide: 13,
          slideRange: "14 a 19"
        },
        {
          num: "AVANCE 4",
          numVal: 4,
          eje: "Unidad IV",
          title: "Programación Presupuestaria y Factor Humano",
          objetivo: "Vincular presupuesto y factor humano: Inciso 1 (Personal) y ciclo presupuestario por programas (Makon).",
          pregunta: "¿Cuál es el presupuesto total y qué % va a personal (Inciso 1)? ¿Estructura de programas oficiales?",
          text: "El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal.",
          targetSlide: 19,
          slideRange: "20 a 24"
        },
        {
          num: "AVANCE 5",
          numVal: 5,
          eje: "Unidad V",
          title: "Sistemas de Control, Tablero de Comando y Evaluación",
          objetivo: "Evaluar el control externo (AGN) e interno (UAI estatutaria, SIGEN), diseñar un Tablero de RR. HH. con 4 KPIs (Ramírez y Mayne) y bucle de retroalimentación (Feinstein).",
          pregunta: "¿Qué organismos auditan y qué observaciones formularon a personal? ¿KPIs formales vigentes? ¿Cómo retroalimenta el control la gestión?",
          text: "UAI con rango estatutario único y reactivación SIGEN (Res. 311/2026); diseño de 4 KPIs estratégicos para superar la brecha histórica de evaluación nodocente y aprendizaje institucional.",
          targetSlide: 24,
          slideRange: "25 a 28"
        }
      ];

      avances.forEach((a) => {
        const li = document.createElement("li");
        li.className = "avance-summary-card";
        li.innerHTML = `
          <div class="avance-row-header">
            <span class="avance-pill">${a.num}</span>
            <span class="avance-eje-tag">${a.eje}</span>
            <h4 class="avance-row-title">${a.title}</h4>
          </div>
          <div class="avance-consigna-meta">
            <div class="consigna-line">
              <span class="consigna-tag">🎯 Objetivo:</span>
              <span class="consigna-val">${a.objetivo}</span>
            </div>
            <div class="consigna-line">
              <span class="consigna-tag">❓ Pregunta Guía:</span>
              <span class="consigna-val">${a.pregunta}</span>
            </div>
          </div>
          <p class="avance-row-text"><span class="bullet-concept">💡 Diagnóstico Situado:</span> ${a.text}</p>
          <div class="avance-card-actions">
            <button class="btn-card-goto-avance" data-slide-index="${a.targetSlide}" title="Ir a la primera filmina de este avance">
              <span>Filminas ${a.slideRange}</span>
              <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
            </button>
            <button class="btn-card-open-consigna" data-avance-num="${a.numVal}" title="Ver consigna oficial y entregables en panel de respaldo">
              <span>Consigna PEDCO 📋</span>
            </button>
          </div>
        `;

        li.querySelector(".btn-card-goto-avance").addEventListener("click", (e) => {
          e.stopPropagation();
          this.goToSlide(a.targetSlide);
        });

        li.querySelector(".btn-card-open-consigna").addEventListener("click", (e) => {
          e.stopPropagation();
          this.openConsignasDrawer(a.numVal);
        });

        this.bulletsElement.appendChild(li);
      });
    } else if (index === this.totalSlides - 1 || slide.id === "slide_29" || slide.layout === "conclusion_summary") {
      this.bulletsElement.classList.add("conclusion-mode");
      const conclusiones = [
        {
          num: "AVANCE 1",
          unidad: "Unidad I",
          titulo: "Contexto, Modelo de Gestión y Gobernanza",
          hicimos: "Caracterizamos el marco institucional (Ley 19.648, Estatuto UNCo), la autonomía universitaria (Art. 75 inc. 19 CN) y la Burocracia Profesional frente a la NGP.",
          destacado: "Burocracia Profesional sólida que tutela la legalidad, estabilidad laboral y convenios paritarios (CCT 366/06 y 1246/15), blindada del gerencialismo mercantil.",
          problema: "Riesgo de endogamia y autorreferencialidad corporativa en el co-gobierno cuatripartito cerrado sobre sí mismo, sumado a una gobernanza digital incipiente (sin portal de datos abiertos ni IA en RRHH).",
          solucion: "Institucionalizar mecanismos de Accountability Social activa: portal web de datos abiertos sobre cargos y presupuesto accesible a la ciudadanía rionegrina, y comisiones consultivas abiertas en los 10 nodos."
        },
        {
          num: "AVANCE 2",
          unidad: "Unidad II",
          titulo: "Diagnóstico y Planificación Estratégica Situacional",
          hicimos: "Elaboramos FODA situado, mapeo de actores clave con poder de veto y evaluación de capacidades estatales según Bertranou y el PES de Carlos Matus.",
          destacado: "Despliegue territorial democratizador de la Red de 10 Nodos en Río Negro y adopción del PES reconociendo a los gremios (APUNC y ADUNC) como actores estratégicos.",
          problema: "Persistencia de silos de datos e inconsistencia intersistemas (doble carga manual SIU vs. SIGEVA) y brecha digital en personal nodocente de mayor antigüedad.",
          solucion: "Diseñar una API de interoperabilidad técnica automática entre sistemas y acordar en paritaria un plan continuo de capacitación y alfabetización informática situada."
        },
        {
          num: "AVANCE 3",
          unidad: "Unidad III",
          titulo: "Diseño Organizacional, Procesos y Ecosistema Digital",
          hicimos: "Mapeamos estructura formal vs real, manual de funciones y flujograma del circuito clave de licencias del personal.",
          destacado: "Visibilización de la estructura real desconcentrada en territorio frente a un organigrama formal desactualizado y centralizado en Viedma.",
          problema: "Parálisis de trámites por falta de subrogancia formal ante ausencia de jefaturas y falsa digitalización (trámites mixtos de papel escaneado en SUDOCU sin interoperabilidad).",
          solucion: "Aprobar ordenanza de subrogancia automática para puestos clave de despacho y digitalizar el trámite de licencias de punta a punta con validación automática en SIU-Mapuche."
        },
        {
          num: "AVANCE 4",
          unidad: "Unidad IV",
          titulo: "Programación Presupuestaria y Factor Humano",
          hicimos: "Analizamos el presupuesto por programas (Makon, Programa 26) y el impacto del Inciso 1 (Personal) con el plus de zona desfavorable.",
          destacado: "El 90,2% del gasto va a salarios docentes y nodocentes, confirmando que las personas constituyen la auténtica capacidad estatal del CURZAS.",
          problema: "Extrema rigidez y asfixia operativa (solo 9,8% para funcionamiento e infraestructura) y fuerte impacto del 40% de Zona Desfavorable ante el ajuste nacional.",
          solucion: "Reclamar en paritaria nacional la actualización indexada de partidas de funcionamiento (Inciso 2, 3 y 4) y conveniar con municipios la cogestión de costos operativos en los nodos."
        },
        {
          num: "AVANCE 5",
          unidad: "Unidad V",
          titulo: "Sistemas de Control, Tablero de Comando y Evaluación",
          hicimos: "Examinamos el ecosistema AGN/UAI/SIGEN (Res. 311/2026), diagnosticamos la evaluación laboral docente/nodocente y diseñamos un Tablero con 4 KPIs estratégicos.",
          destacado: "Rango estatutario pionero de la UAI en UNCo y bucle de retroalimentación continua que transforma la auditoría punitiva en aprendizaje institucional (Feinstein).",
          problema: "Asimetría estructural en evaluación laboral: docentes evaluados periódicamente vs. régimen nodocente CCT 366 históricamente diferido en paritaria con APUNC; se administran cargos en Mapuche pero se carece de medición de resultados (Telma Ramírez).",
          solucion: "Implementar el Tablero de 4 KPIs estratégicos propuesto (tiempos de licencias, calidad salarial SISAC, capacitación digital y continuidad en nodos) con fines formativos y paritarios."
        }
      ];

      conclusiones.forEach((c) => {
        const li = document.createElement("li");
        li.className = "conclusion-summary-card";
        li.innerHTML = `
          <div class="conclusion-card-header">
            <span class="conclusion-pill">${c.num}</span>
            <span class="conclusion-unidad">${c.unidad}</span>
            <h4 class="conclusion-card-title">${c.titulo}</h4>
          </div>
          <div class="conclusion-card-body">
            <div class="conclusion-row">
              <span class="conclusion-label">🔍 Qué hicimos:</span>
              <span class="conclusion-text">${c.hicimos}</span>
            </div>
            <div class="conclusion-row destacado">
              <span class="conclusion-label">⭐ Lo más destacado:</span>
              <span class="conclusion-text">${c.destacado}</span>
            </div>
            <div class="conclusion-row problema">
              <span class="conclusion-label">⚠️ Situación observada:</span>
              <span class="conclusion-text">${c.problema}</span>
            </div>
            <div class="conclusion-row solucion">
              <span class="conclusion-label">💡 Cómo solucionarlo:</span>
              <span class="conclusion-text">${c.solucion}</span>
            </div>
          </div>
        `;
        this.bulletsElement.appendChild(li);
      });

      // Tarjeta de cierre protocolar / Agradecimiento
      const closingCard = document.createElement("li");
      closingCard.className = "conclusion-closing-card";
      closingCard.innerHTML = `
        <div class="closing-header">
          <span class="closing-badge">APERTURA AL TRIBUNAL</span>
          <h4 class="closing-title">Agradecimiento y Espacio de Preguntas</h4>
        </div>
        <p class="closing-text">
          Agradecimiento sincero a los docentes evaluadores <strong>Mgter. Susana Lopez</strong> y <strong>Lic. Carlos Jauge</strong> por su guía académica. Quedo a entera disposición del Tribunal para responder preguntas y deliberar.
        </p>
      `;
      this.bulletsElement.appendChild(closingCard);
    } else {
      const bulletsList = slide.puntosClave || slide.bullets || [];
      bulletsList.forEach((punto) => {
        const li = document.createElement("li");
        li.className = "slide-bullet-item";
        const colonIdx = punto.indexOf(":");
        if (colonIdx > 0 && colonIdx < 50) {
          const concept = punto.slice(0, colonIdx).trim();
          const desc = punto.slice(colonIdx + 1).trim();
          li.innerHTML = `<span class="bullet-concept">${concept}:</span><span class="bullet-desc">${desc}</span>`;
        } else {
          li.innerHTML = `<span class="bullet-desc">${punto}</span>`;
        }
        this.bulletsElement.appendChild(li);
      });
    }

    if (slide.dispositivoAnatomy) {
      const anatomyBox = document.createElement("div");
      anatomyBox.className = "slide-anatomy-card";
      const a = slide.dispositivoAnatomy;
      anatomyBox.innerHTML = `
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
          <iframe src="_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=${a.slideNum}&embedded=true&theme=dark" 
                  class="slide-anatomy-iframe" 
                  title="${a.titulo}" 
                  loading="eager"
                  allow="fullscreen"></iframe>
        </div>
        <div class="slide-anatomy-actions">
          <button class="btn-expand-anatomy" title="Agrandar y Explorar en Pantalla Completa (Atajo: V)">
            <span>🔍 Pantalla Completa 360° (Anatomy)</span>
            <span class="shortcut-pill">V</span>
          </button>
          ${slide.diagramaSVG ? `
            <button class="btn-toggle-map" title="Alternar entre Dispositivo Isométrico 3D y Mapa Cartográfico Oficial">
              <span>🗺️ Ver Mapa 2D</span>
            </button>
          ` : ''}
        </div>
      `;
      
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
            viewport.innerHTML = `
              <div class="slide-svg-img-frame" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#ffffff;cursor:pointer;">
                <img src="${slide.diagramaSVG}" alt="${slide.titulo}" style="max-width:96%;max-height:96%;object-fit:contain;" />
                <div class="slide-svg-hover-overlay">
                  <span class="overlay-hint">🔍 Clic para pantalla completa</span>
                </div>
              </div>
            `;
            viewport.querySelector(".slide-svg-img-frame")?.addEventListener("click", () => {
              this.openSvgModal(slide.diagramaSVG, slide.titulo, null);
            });
            btnToggleMap.innerHTML = `<span>🔬 Dispositivo 3D</span>`;
          } else {
            isShowingMap = false;
            viewport.innerHTML = `
              <iframe src="_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=${a.slideNum}&embedded=true&theme=dark" 
                      class="slide-anatomy-iframe" 
                      title="${a.titulo}" 
                      loading="eager" 
                      allow="fullscreen"></iframe>
            `;
            btnToggleMap.innerHTML = `<span>🗺️ Ver Mapa 2D</span>`;
          }
        });
      }
      
      this.bulletsElement.appendChild(anatomyBox);
    } else if (slide.diagramaSVG) {
      const svgActionBox = document.createElement("div");
      svgActionBox.className = "slide-svg-action";
      const hasMaqueta = Boolean(slide.maqueta3D);
      const badgeText = slide.badgeGrafico || (hasMaqueta ? "📐 LÁMINA CARTOGRÁFICA & MAQUETA 3D" : "📐 DIAGRAMA VECTORIAL VISIBLE");
      const label2D = slide.labelBoton2D || "🔍 Lámina Oficial 2D";
      const label3D = slide.labelBoton3D || "🌐 Maqueta 3D Real";

      svgActionBox.innerHTML = `
        <div class="slide-svg-inline-container" title="Haga clic para agrandar en pantalla completa (Atajo: V)">
          <div class="slide-svg-inline-header">
            <span class="slide-svg-badge">${badgeText}</span>
            <span class="shortcut-pill">Atajo: V ${hasMaqueta ? "• 3D: 3" : ""}</span>
          </div>
          <div class="slide-svg-img-frame">
            <img src="${slide.diagramaSVG}" alt="${slide.titulo}" class="slide-svg-img" loading="eager" />
            <div class="slide-svg-hover-overlay">
              <span class="overlay-hint">🔍 Clic para pantalla completa</span>
            </div>
          </div>
          <div class="slide-svg-btn-row" style="display:flex;gap:6px;padding:6px 8px;background:rgba(15,45,89,0.03);">
            <button class="btn-open-svg btn-action-2d" style="flex:1;" title="Agrandar y Explorar Diagrama SVG en Alta Definición (Atajo: V)">
              <span>${label2D}</span>
              <span class="shortcut-pill">V</span>
            </button>
            ${hasMaqueta ? `
            <button class="btn-open-svg btn-action-3d" style="flex:1;background:linear-gradient(135deg,#0f3460,#0284c7);color:#ffffff;border-color:#38bdf8;" title="Explorar Dashboard / Maqueta 3D Interactiva (Atajo: 3)">
              <span>${label3D}</span>
              <span class="shortcut-pill" style="background:rgba(255,255,255,0.2);color:#ffffff;">3</span>
            </button>
            ` : ""}
          </div>
        </div>
      `;
      const triggerModal2D = () => this.openSvgModal(slide.diagramaSVG, slide.titulo, null, false, slide.maqueta3D);
      const triggerModal3D = () => this.openSvgModal(slide.diagramaSVG, slide.titulo, null, true, slide.maqueta3D);

      const frame = svgActionBox.querySelector(".slide-svg-img-frame");
      if (frame) frame.addEventListener("click", triggerModal2D);
      const btn2D = svgActionBox.querySelector(".btn-action-2d");
      if (btn2D) btn2D.addEventListener("click", triggerModal2D);
      const btn3D = svgActionBox.querySelector(".btn-action-3d");
      if (btn3D) btn3D.addEventListener("click", triggerModal3D);

      this.bulletsElement.appendChild(svgActionBox);
    }

    this.footerMetaElement.innerHTML = `
      <span>📌 ${slide.metadatosFooter}</span>
      <span>⏱️ Ritmo sugerido: ~35-40 seg</span>
    `;

    if (this.slideCounter) {
      this.slideCounter.textContent = `${index + 1} / ${this.totalSlides}`;
    }

    const slideNumEl = document.getElementById("notes-slide-num");
    if (slideNumEl) {
      slideNumEl.textContent = `Filmina ${index + 1} / ${this.totalSlides}`;
    }
    const slideTimeEl = document.getElementById("notes-slide-time");
    if (slideTimeEl) {
      slideTimeEl.textContent = slide.tiempoSugerido || "⏱️ ~35-40 seg";
    }

    let consignasHtml = "";
    if (slide.consignasCatedra && Array.isArray(slide.consignasCatedra) && slide.consignasCatedra.length > 0) {
      consignasHtml = `
        <div class="teleprompter-qa-clean">
          ${slide.consignasCatedra.map((item) => `
            <div class="qa-clean-card">
              <div class="qa-clean-header">
                <span class="qa-clean-badge">${item.tipo || 'CONSIGNA DE CÁTEDRA'}</span>
              </div>
              <div class="qa-clean-question">
                <span class="qa-prefix">Pregunta:</span> ${item.punto.replace(/\n/g, '<br>')}
              </div>
              <div class="qa-clean-answer">
                <span class="qa-prefix-ans">Respuesta al grano:</span>
                <div class="qa-ans-body">${item.respuesta.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.notesBody.innerHTML = `
      <div class="teleprompter-obj-card">
        <div class="teleprompter-obj-header">
          <span class="teleprompter-obj-badge">🎯 OBJETIVO PEDAGÓGICO • FILMINA ${index + 1}</span>
        </div>
        <h4 class="teleprompter-obj-title">${slide.titulo}</h4>
        <p class="teleprompter-obj-text">${slide.esquema}</p>
      </div>

      ${consignasHtml}

      <div class="teleprompter-speech-card">
        <div class="speech-card-header">
          <span class="speech-card-badge">🗣️ Guion Sugerido para la Exposición</span>
          <span class="speech-reading-mode">Oratoria Guiada (~35-40 seg)</span>
        </div>
        <div class="speech-card-content" id="speech-card-content">
          ${slide.guionOrador ? slide.guionOrador.split('\n').filter(p => p.trim()).map(p => `<p class="speech-para">${p}</p>`).join('') : '<p>Sin guion registrado para esta filmina.</p>'}
        </div>
      </div>
    `;
  }

  renderSlide(index, direction = 1) {
    const slide = this.data.slides[index];
    if (!slide) return;

    this.currentSlideIndex = index;
    this.saveSlideState(index);

    // Actualizar visibilidad de HUD de red territorial (visible en mapa de territorio y red híbrida anim_06 / anim_07)
    const nodePill = document.getElementById("node-radar-pill");
    if (nodePill && slide.escena3D !== "anim_06" && slide.escena3D !== "anim_07") {
      nodePill.style.display = "none";
    }

    // Actualizar botones de navegación
    this.btnPrev.disabled = index === 0;
    this.btnNext.disabled = index === this.totalSlides - 1;

    // Sincronizar indicador de estaciones y grupos de Ejes
    const dots = this.stationsContainer.querySelectorAll(".station-dot");
    dots.forEach((dot) => {
      const dotIdx = parseInt(dot.getAttribute("data-slide-index"), 10) - 1;
      const isActive = dotIdx === index;
      dot.classList.toggle("active", isActive);
      dot.classList.toggle("passed", dotIdx < index);
      if (isActive && window.gsap) {
        const core = dot.querySelector(".station-dot-core");
        if (core) {
          gsap.fromTo(core, { scale: 0.85 }, { scale: 1.35, duration: 0.32, ease: "back.out(2)" });
        }
      }
    });

    const sections = this.getDefenseSections();
    const groups = this.stationsContainer.querySelectorAll(".station-group");
    groups.forEach((group, sIdx) => {
      const sec = sections[sIdx];
      const isGroupActive = sec && index >= sec.range[0] && index <= sec.range[1];
      group.classList.toggle("active-group", isGroupActive);
    });

    // Actualizar botones del modal índice si está en el DOM
    if (this.slidesIndexBody) {
      this.slidesIndexBody.querySelectorAll(".index-slide-btn").forEach((btn) => {
        const bIdx = parseInt(btn.getAttribute("data-slide-idx"), 10);
        btn.classList.toggle("active", bIdx === index);
      });
      this.slidesIndexBody.querySelectorAll(".index-section-card").forEach((card, sIdx) => {
        const sec = sections[sIdx];
        card.classList.toggle("active-eje", sec && index >= sec.range[0] && index <= sec.range[1]);
      });
    }

    // Notificar al motor 3D con la dirección exacta (1 = adelante, -1 = atrás)
    this.engine3D.switchScene(slide.escena3D, direction);

    if (!window.gsap) {
      this.applySlideDOM(slide, index);
      return;
    }

    // Si es la primera carga inicial
    if (!this.hasRenderedFirst) {
      this.hasRenderedFirst = true;
      this.applySlideDOM(slide, index);
      gsap.set(this.bulletsElement, { x: 0, opacity: 1, clearProps: "transform,opacity" });
      gsap.fromTo(this.cardElement, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
      const bullets = this.bulletsElement.querySelectorAll("li");
      gsap.fromTo(bullets, { x: -16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: "power2.out" });
      return;
    }

    // Detectar si el usuario está realizando una transición rápida (< 280ms)
    const now = performance.now();
    const isRapidNav = (now - (this.lastSlideRenderTime || 0)) < 280;
    this.lastSlideRenderTime = now;

    // Cancelar cualquier línea temporal o animación de filmina previa para evitar colisiones
    if (this.currentSlideTimeline) {
      this.currentSlideTimeline.kill();
      this.currentSlideTimeline = null;
    }

    const bulletsBefore = this.bulletsElement.querySelectorAll("li, .slide-svg-action");
    const exitTargets = [
      this.badgeElement,
      this.bloqueBadgeElement,
      this.titleElement,
      this.subtitleElement,
      ...bulletsBefore,
      this.footerMetaElement
    ];
    gsap.killTweensOf(exitTargets);

    const outX = direction >= 0 ? -22 : 22;
    const inX  = direction >= 0 ? 26 : -26;

    if (isRapidNav) {
      // MODO NAVEGACIÓN RÁPIDA: Inyección inmediata sin esperar la fase de salida
      this.applySlideDOM(slide, index);
      gsap.set(this.bulletsElement, { x: 0, opacity: 1, clearProps: "transform,opacity" });

      const headerTargets = [
        this.badgeElement,
        this.bloqueBadgeElement,
        this.titleElement,
        this.subtitleElement,
        this.footerMetaElement
      ];
      gsap.set(headerTargets, { x: inX * 0.5, opacity: 0 });

      const rapidTl = gsap.timeline({ defaults: { ease: "power2.out" } });
      this.currentSlideTimeline = rapidTl;

      rapidTl.to(headerTargets, {
        x: 0,
        opacity: 1,
        duration: 0.16,
        stagger: 0.015
      });

      const bullets = this.bulletsElement.querySelectorAll("li");
      if (bullets.length > 0) {
        gsap.set(bullets, { x: inX * 0.4, opacity: 0 });
        rapidTl.to(bullets, {
          x: 0,
          opacity: 1,
          duration: 0.16,
          stagger: 0.015
        }, "-=0.08");
      }

      if (this.slideCounter) {
        gsap.fromTo(this.slideCounter, { y: direction >= 0 ? -4 : 4, opacity: 0 }, { y: 0, opacity: 1, duration: 0.16 });
      }
      return;
    }

    // MODO NAVEGACIÓN ESTÁNDAR: Transición cinematográfica elegante
    gsap.to(exitTargets, {
      x: outX,
      opacity: 0,
      duration: 0.08,
      ease: "power2.in",
      onComplete: () => {
        this.applySlideDOM(slide, index);
        gsap.set(this.bulletsElement, { x: 0, opacity: 1, clearProps: "transform,opacity" });

        const headerTargets = [
          this.badgeElement,
          this.bloqueBadgeElement,
          this.titleElement,
          this.subtitleElement,
          this.footerMetaElement
        ];
        gsap.set(headerTargets, { x: inX, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        this.currentSlideTimeline = tl;

        tl.to([this.badgeElement, this.bloqueBadgeElement], {
          x: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.03
        })
        .to(this.titleElement, {
          x: 0,
          opacity: 1,
          duration: 0.28
        }, "-=0.18")
        .to(this.subtitleElement, {
          x: 0,
          opacity: 0.85,
          duration: 0.25
        }, "-=0.20");

        const bullets = this.bulletsElement.querySelectorAll("li");
        if (bullets.length > 0) {
          gsap.set(bullets, { x: inX * 0.85, opacity: 0 });
          tl.to(bullets, {
            x: 0,
            opacity: 1,
            duration: 0.26,
            stagger: 0.035,
            ease: "power2.out"
          }, "-=0.15");
        }

        const svgBtn = this.bulletsElement.querySelector(".slide-svg-action");
        if (svgBtn) {
          gsap.set(svgBtn, { scale: 0.95, opacity: 0 });
          tl.to(svgBtn, {
            scale: 1,
            opacity: 1,
            duration: 0.22,
            ease: "power2.out"
          }, "-=0.08");
        }

        tl.to(this.footerMetaElement, {
          x: 0,
          opacity: 1,
          duration: 0.20
        }, "-=0.12");

        if (this.slideCounter) {
          gsap.fromTo(this.slideCounter, { y: direction >= 0 ? -6 : 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22 });
        }
      }
    });
  }

  nextSlide() {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentSlideIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.goToSlide(this.currentSlideIndex - 1);
    }
  }

  goToSlide(index) {
    if (index === this.currentSlideIndex || index < 0 || index >= this.totalSlides) return;
    this.stopTTS(); // Detener de inmediato cualquier locución activa de la filmina previa
    const direction = index >= this.currentSlideIndex ? 1 : -1;
    this.currentSlideIndex = index;
    this.renderSlide(index, direction);
  }

  saveSlideState(index) {
    try {
      if (typeof window !== "undefined") {
        if (window.localStorage) {
          localStorage.setItem("pco_curzas_slide_index", String(index));
        }
        if (window.history && window.history.replaceState) {
          const slideNum = index + 1;
          const newHash = `#filmina-${slideNum}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, "", newHash);
          }
        }
      }
    } catch (e) {
      // Ignorar restricciones en entornos aislados
    }
  }

  getSavedSlideIndex() {
    try {
      if (typeof window !== "undefined") {
        // 1. Prioridad: Hash en la URL (ej: #filmina-20, #slide-20, #20)
        if (window.location && window.location.hash) {
          const match = window.location.hash.match(/#(?:filmina-|slide-)?(\d+)/i);
          if (match) {
            const parsed = parseInt(match[1], 10) - 1;
            if (!isNaN(parsed) && parsed >= 0 && parsed < this.totalSlides) {
              return parsed;
            }
          }
        }
        // 2. Prioridad: localStorage
        if (window.localStorage) {
          const saved = localStorage.getItem("pco_curzas_slide_index");
          if (saved !== null) {
            const parsed = parseInt(saved, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed < this.totalSlides) {
              return parsed;
            }
          }
        }
      }
    } catch (e) {
      // Ignorar errores
    }
    return 0; // Por defecto Filmina 1
  }



  // ─── CRONÓMETRO REGRESIVO DE 30 MINUTOS ──────────────────────────────────
  toggleTimer() {
    if (this.timerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.btnTimerToggle.textContent = "⏸";
      this.btnTimerToggle.title = "Pausar cronómetro (T)";

      this.timerInterval = setInterval(() => {
        this.elapsedSeconds++;
        this.updateTimerDisplay();

        if (this.elapsedSeconds >= this.totalSeconds) {
          this.pauseTimer();
          alert("⏱️ Los 30 minutos estipulados para la exposición han concluido.");
        }
      }, 1000);
    }
  }

  pauseTimer() {
    this.timerRunning = false;
    this.btnTimerToggle.textContent = "▶";
    this.btnTimerToggle.title = "Iniciar cronómetro (T)";
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.pauseTimer();
    this.elapsedSeconds = 0;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const remainingSeconds = Math.max(0, this.totalSeconds - this.elapsedSeconds);
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    this.timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    const minutosTranscurridos = Math.floor(this.elapsedSeconds / 60);

    this.timerDisplay.classList.remove("warning", "critical");
    if (minutosTranscurridos >= this.data.timing.alertaRojaMinutos) {
      this.timerDisplay.classList.add("critical");
    } else if (minutosTranscurridos >= this.data.timing.alertaAmarillaMinutos) {
      this.timerDisplay.classList.add("warning");
    }
  }

  // ─── HERRAMIENTAS LATERALES Y DRAWERS ───────────────────────────────────
  toggleNotes(forceState) {
    const isOpen = this.notesModal.classList.contains("open");
    const newState = forceState !== undefined ? forceState : !isOpen;
    this.notesModal.classList.toggle("open", newState);
    this.btnToggleNotes.classList.toggle("active", newState);
    document.body.classList.toggle("teleprompter-open", newState);

    this.engine3D?.setNotesState(newState);

    if (!newState) {
      // Si se cierra el teleprómpter y se estaba leyendo notas, detener la locución
      if (this.ttsReadingNotes || this.ttsIsSpeaking) {
        this.stopTTS();
      }
    }
  }

  toggleDrawer(forceState) {
    const isOpen = this.drawerPanel.classList.contains("open");
    const newState = forceState !== undefined ? forceState : !isOpen;
    this.drawerPanel.classList.toggle("open", newState);
    this.drawerBackdrop.classList.toggle("open", newState);
    this.btnToggleDrawer.classList.toggle("active", newState);
  }

  
  /**
   * Controlador Maestro de Enfoque y Prioridad Visual:
   * - 'default': vista balanceada (texto a la izquierda 45vw, escultura a la derecha x:1.6)
   * - 'text': texto expandido a lo ancho (86vw / 980px centrado, tipografía amplia, 3D atenuado)
   * - 'object': solo objeto (texto oculto, escultura 3D centrada x:0 y ampliada +48%)
   */
  setViewMode(targetMode) {
    const newMode = (this.currentViewMode === targetMode) ? "default" : targetMode;
    this.currentViewMode = newMode;

    // 1. Estados CSS en la tarjeta de filmina
    if (this.cardElement) {
      this.cardElement.classList.toggle("focus-text", newMode === "text");
      this.cardElement.classList.toggle("focus-object", newMode === "object");
      this.cardElement.classList.toggle("minimized", newMode === "object");
    }

    // 2. El lienzo 3D siempre visible, nítido y sin atenuación (NUNCA dimmed)
    if (this.canvas) {
      this.canvas.classList.remove("dimmed");
    }

    // 3. Botón flotante para restaurar a filmina
    if (this.btnFloatingCardToggle) {
      this.btnFloatingCardToggle.classList.toggle("visible", newMode === "object");
      const span = this.btnFloatingCardToggle.querySelector("span");
      if (span) span.textContent = "Volver a la Filmina";
    }

    // 4. Estados activos de los botones
    if (this.btnViewText) {
      this.btnViewText.classList.toggle("active", newMode === "text");
    }
    if (this.btnView3d) {
      this.btnView3d.classList.toggle("active", newMode === "object");
    }

    // 5. Animación fluida de la escultura 3D en WebGL
    if (this.engine3D && typeof this.engine3D.setFocusMode === "function") {
      this.engine3D.setFocusMode(newMode);
    }
  }

  toggle3dDim() {
    this.is3dDimmed = !this.is3dDimmed;
    this.canvas.classList.toggle("dimmed", this.is3dDimmed);
    if (this.btnDim3d) {
      this.btnDim3d.classList.toggle("active", this.is3dDimmed);
      this.btnDim3d.title = this.is3dDimmed
        ? "Modo Enfoque Texto Activo (D)"
        : "Atenuar Fondo 3D / Enfoque Texto (D)";
    }
  }

  toggleShortcuts(forceState) {
    if (!this.shortcutsModal) return;
    const isOpen = this.shortcutsModal.classList.contains("open");
    const newState = forceState !== undefined ? forceState : !isOpen;
    this.shortcutsModal.classList.toggle("open", newState);
    if (this.shortcutsBackdrop) {
      this.shortcutsBackdrop.classList.toggle("open", newState);
    }
    if (this.btnShortcuts) {
      this.btnShortcuts.classList.toggle("active", newState);
    }
  }

  toggleMobile3dView(forceState) {
    if (!this.cardElement) return;
    const isMin = this.cardElement.classList.contains("minimized");
    const newState = forceState !== undefined ? forceState : !isMin;
    this.isCardMinimized = newState;
    this.cardElement.classList.toggle("minimized", newState);

    if (this.btnFloatingCardToggle) {
      this.btnFloatingCardToggle.classList.toggle("visible", newState);
    }
    if (this.btnToggle3dView) {
      this.btnToggle3dView.classList.toggle("active", newState);
      const text = this.btnToggle3dView.querySelector(".tool-text");
      if (text) text.textContent = newState ? "Ver Texto" : "Ver 3D";
    }
    if (!newState && this.currentViewMode === "object") {
      this.setViewMode("default");
    }
  }

  populateDrawerContent() {
    this.renderDrawerTab("autores");
  }

  renderDrawerTab(tabType) {
    this.drawerContent.innerHTML = "";
    const f = this.data.fichasRespaldo;

    if (tabType === "autores" && f.autores) {
      f.autores.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card";
        card.innerHTML = `
          <h4>🧠 ${item.autor}</h4>
          <p>${item.concepto}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "normativa" && f.normativa) {
      f.normativa.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card";
        card.innerHTML = `
          <h4>📜 ${item.norma}</h4>
          <p>${item.descripcion}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "objetivos" && (f.objetivos || f.matrizObjetivos)) {
      const lista = f.objetivos || f.matrizObjetivos;
      lista.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card";
        card.innerHTML = `
          <h4>🎯 ${item.nivel}</h4>
          <p>${item.texto}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "dimensiones" && f.dimensiones) {
      f.dimensiones.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card";
        card.innerHTML = `
          <h4>⚙️ ${item.dim}</h4>
          <p>${item.detalle}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "territorio") {
      const nodos = f.nodosTerritoriales || f.territorio || [];
      nodos.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card territorio-card";
        card.innerHTML = `
          <h4>📍 ${item.sede}</h4>
          <p>${item.detalle}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "faq" && f.faq) {
      f.faq.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card faq-card";
        card.innerHTML = `
          <h4>❓ ${item.pregunta}</h4>
          <p><strong>R:</strong> ${item.respuesta}</p>
        `;
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "svgs") {
      this.catalogoSVGs.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card svg-ref-card";
        card.innerHTML = `
          <h4>📐 ${item.titulo}</h4>
          <p><strong>Fuente:</strong> ${item.autor}</p>
          <p style="margin-top: 0.4rem;">${item.descripcion}</p>
          <button class="btn-inspect-svg" style="margin-top: 0.8rem; width: 100%; padding: 0.55rem; background: var(--gold-dim); border: 1px solid var(--gold-main); color: var(--gold-light); border-radius: 4px; cursor: pointer; font-family: var(--font-serif); font-size: 0.76rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700;">
            🔍 Abrir Diagrama en Pantalla Completa
          </button>
        `;
        card.querySelector(".btn-inspect-svg").addEventListener("click", () => {
          this.openSvgModal(item.archivo, item.titulo);
        });
        this.drawerContent.appendChild(card);
      });
    } else if (tabType === "consignas") {
      this.renderConsignasTab();
    } else if (tabType === "avance4") {
      this.renderAvance4Tab();
    } else if (tabType === "catedra") {
      this.renderCatedraMaterialTab();
    }
  }

  // ─── VISOR Y MODAL SVG INTERACTIVO (ZOOM, PAN Y MAXIMIZAR) ─────────────
  openSvgModal(url, title, anatomySlideNum = null, startIn3D = false, maqueta3DUrl = null) {
    if (!this.svgModal) return;
    
    const currentSlide = this.data.slides[this.currentSlideIndex];
    const anatomy = anatomySlideNum || (currentSlide && currentSlide.dispositivoAnatomy ? currentSlide.dispositivoAnatomy.slideNum : null);
    const maqueta = maqueta3DUrl || (currentSlide && currentSlide.maqueta3D ? currentSlide.maqueta3D : null);

    this.currentModalAnatomySlide = anatomy;
    this.currentModalMaqueta = maqueta;
    this.currentModalUrl = url;
    this.currentModalTitle = title;
    
    if (this.svgModalTitle) {
      this.svgModalTitle.textContent = title ? `📐 ${title}` : "📐 Diagrama Conceptual";
    }

    // Asegurar siempre la asignación del source de la lámina 2D para que esté disponible de inmediato
    if (this.svgModalImg && url) {
      this.svgModalImg.src = url;
    }

    if (maqueta && startIn3D) {
      this.isAnatomyModeActive = true;
      this.svgModal.classList.add("mode-3d-active");
      if (this.svgModalIframe) {
        this.svgModalIframe.src = maqueta;
        this.svgModalIframe.style.display = "block";
      }
      if (this.svgModalImg) {
        this.svgModalImg.style.display = "none";
      }
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.style.display = "inline-flex";
        this.btnSvgToggleView.textContent = (currentSlide && currentSlide.labelBoton2D) ? currentSlide.labelBoton2D : "🗺️ Ver Lámina 2D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = maqueta;
      }
    } else if (anatomy) {
      this.isAnatomyModeActive = true;
      this.svgModal.classList.add("mode-3d-active");
      if (this.svgModalIframe) {
        this.svgModalIframe.src = `_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=${anatomy}&embedded=true&theme=dark`;
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
        this.btnSvgNewTab.href = `_GUARDADO_SVG_ISOMETRICOS/visor_general.html?slide=${anatomy}`;
      }
    } else {
      this.isAnatomyModeActive = false;
      this.svgModal.classList.remove("mode-3d-active");
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
      const target2DUrl = this.currentModalUrl || (currentSlide && currentSlide.diagramaSVG ? currentSlide.diagramaSVG : "");
      if (target2DUrl && this.svgModalImg) {
        this.svgModalImg.src = target2DUrl;
      }
      this.svgModalIframe.style.display = "none";
      this.svgModalImg.style.display = "block";
      this.svgModal.classList.remove("mode-3d-active");
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.textContent = maqueta ? (currentSlide && currentSlide.labelBoton3D ? currentSlide.labelBoton3D : "🌐 Ver Maqueta 3D") : "🔬 Modo 3D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = target2DUrl || "#";
      }
    } else {
      if (maqueta) {
        this.svgModalIframe.src = maqueta;
      }
      this.svgModalIframe.style.display = "block";
      this.svgModalImg.style.display = "none";
      this.svgModal.classList.add("mode-3d-active");
      if (this.btnSvgToggleView) {
        this.btnSvgToggleView.textContent = (currentSlide && currentSlide.labelBoton2D) ? currentSlide.labelBoton2D : "🗺️ Ver Lámina 2D";
      }
      if (this.btnSvgNewTab) {
        this.btnSvgNewTab.href = maqueta || "#";
      }
    }
    this.resetSvgTransform();
  }

  closeSvgModal() {
    if (!this.svgModal) return;
    this.svgModal.classList.remove("open", "maximized", "mode-3d-active");
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
      this.svgModalImg.removeAttribute("src");
      this.svgModalImg.style.display = "none";
    }
    this.resetSvgTransform();
  }

  setSvgZoom(newZoom) {
    this.svgZoom = Math.min(Math.max(newZoom, 0.4), 6.0);
    this.updateSvgTransform();
  }

  zoomSvg(delta) {
    this.setSvgZoom(this.svgZoom + delta);
  }

  resetSvgTransform() {
    this.svgZoom = 1.0;
    this.svgPanX = 0;
    this.svgPanY = 0;
    this.updateSvgTransform();
  }

  fitSvgTransform() {
    this.svgZoom = 1.0;
    this.svgPanX = 0;
    this.svgPanY = 0;
    this.updateSvgTransform();
  }

  toggleSvgMaximize() {
    this.isSvgMaximized = !this.isSvgMaximized;
    if (this.svgModal) {
      this.svgModal.classList.toggle("maximized", this.isSvgMaximized);
    }
    if (this.btnSvgMaximize) {
      this.btnSvgMaximize.textContent = this.isSvgMaximized ? "🗗 Restaurar" : "⛶ Maximizar";
    }
    this.resetSvgTransform();
  }

  updateSvgTransform() {
    if (this.svgModalImg) {
      this.svgModalImg.style.transform = `translate(${this.svgPanX}px, ${this.svgPanY}px) scale(${this.svgZoom})`;
    }
    if (this.svgZoomLevel) {
      this.svgZoomLevel.textContent = `${Math.round(this.svgZoom * 100)}%`;
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // ─── VISOR Y EXPLORADOR DE MATERIAL DE CÁTEDRA ──────────────────────────
  openCatedraDrawer() {
    this.toggleDrawer(true);
    const catedraTabBtn = document.querySelector('.drawer-tab[data-tab="catedra"]');
    if (catedraTabBtn) {
      document.querySelectorAll(".drawer-tab").forEach((t) => t.classList.remove("active"));
      catedraTabBtn.classList.add("active");
      this.renderDrawerTab("catedra");
    }
  }

  renderCatedraMaterialTab() {
    this.drawerContent.innerHTML = "";

    if (!this.catedraData || this.catedraData.length === 0) {
      this.catedraData = (typeof window !== 'undefined' && window.CATEDRA_MATERIAL_DATA) || (typeof CATEDRA_MATERIAL_DATA !== 'undefined' ? CATEDRA_MATERIAL_DATA : []);
    }

    // 1. Encabezado con métricas
    const headerBox = document.createElement("div");
    headerBox.className = "catedra-header-box";
    headerBox.innerHTML = `
      <div class="catedra-header-title">
        <span>📚 Repositorio Bibliográfico Oficial</span>
        <span class="catedra-total-badge">${this.catedraData.length} Docs</span>
      </div>
      <p class="catedra-header-desc">
        Compendio oficial de bibliografía obligatoria, complementaria y normativas de la cátedra Planeamiento y Control de las Organizaciones (Unidades I a V).
      </p>
    `;
    this.drawerContent.appendChild(headerBox);

    // 2. Buscador en tiempo real
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "catedra-search-wrapper";
    searchWrapper.innerHTML = `
      <svg class="catedra-search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="8.5" cy="8.5" r="5"/>
        <path d="M17.5 17.5l-3.8-3.8"/>
      </svg>
      <input type="search" class="catedra-search-input" id="catedra-search-input" placeholder="Buscar por autor, tema, concepto (ej: Matus, Oszlak, Makon, SIGEN, Aguilar Villanueva)..." value="${this.currentCatedraSearch}">
      <button class="catedra-search-clear" id="catedra-search-clear" title="Borrar búsqueda">✕</button>
    `;
    this.drawerContent.appendChild(searchWrapper);

    const searchInput = searchWrapper.querySelector("#catedra-search-input");
    const searchClear = searchWrapper.querySelector("#catedra-search-clear");
    if (this.currentCatedraSearch) {
      searchClear.style.display = "block";
    }

    searchInput.addEventListener("input", (e) => {
      this.currentCatedraSearch = e.target.value.trim().toLowerCase();
      searchClear.style.display = this.currentCatedraSearch ? "block" : "none";
      this.updateCatedraList();
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      this.currentCatedraSearch = "";
      searchClear.style.display = "none";
      this.updateCatedraList();
      searchInput.focus();
    });

    // 3. Pastillas de filtrado por Unidad y Área (Unidades I a V)
    const categories = [
      { id: "all", label: "Todos", count: this.catedraData.length },
      { id: "u1", label: "Unidad I: Gobernanza", count: this.catedraData.filter(d => d.categoriaSlug === 'u1').length },
      { id: "u2", label: "Unidad II: PES Matus", count: this.catedraData.filter(d => d.categoriaSlug === 'u2').length },
      { id: "u3", label: "Unidad III: Diseño Org.", count: this.catedraData.filter(d => d.categoriaSlug === 'u3').length },
      { id: "u4", label: "Unidad IV: Finanzas", count: this.catedraData.filter(d => d.categoriaSlug === 'u4').length },
      { id: "u5", label: "Unidad V: Control & Eval.", count: this.catedraData.filter(d => d.categoriaSlug === 'u5').length }
    ];

    const pillsWrapper = document.createElement("div");
    pillsWrapper.className = "catedra-filter-pills";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `catedra-pill ${this.currentCatedraFilter === cat.id ? "active" : ""}`;
      btn.dataset.category = cat.id;
      btn.innerHTML = `${cat.label} <span class="catedra-pill-count">(${cat.count})</span>`;
      btn.addEventListener("click", () => {
        pillsWrapper.querySelectorAll(".catedra-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        this.currentCatedraFilter = cat.id;
        this.updateCatedraList();
      });
      pillsWrapper.appendChild(btn);
    });
    this.drawerContent.appendChild(pillsWrapper);

    // 4. Barra informativa de resultados
    const resultsInfo = document.createElement("div");
    resultsInfo.className = "catedra-results-info";
    resultsInfo.id = "catedra-results-info";
    this.drawerContent.appendChild(resultsInfo);

    // 5. Contenedor de lista de tarjetas
    const listContainer = document.createElement("div");
    listContainer.className = "catedra-docs-list";
    listContainer.id = "catedra-docs-list";
    this.drawerContent.appendChild(listContainer);

    this.updateCatedraList();
  }

  updateCatedraList() {
    const listContainer = document.getElementById("catedra-docs-list");
    const resultsInfo = document.getElementById("catedra-results-info");
    if (!listContainer || !resultsInfo) return;

    listContainer.innerHTML = "";

    const filtered = this.catedraData.filter(doc => {
      if (this.currentCatedraFilter !== "all" && doc.categoriaSlug !== this.currentCatedraFilter) {
        return false;
      }
      if (this.currentCatedraSearch) {
        const text = `${doc.titulo} ${doc.nombre} ${doc.seccion} ${doc.subseccion} ${doc.categoriaLabel}`.toLowerCase();
        if (!text.includes(this.currentCatedraSearch)) {
          return false;
        }
      }
      return true;
    });

    resultsInfo.innerHTML = `
      <span>Mostrando <strong>${filtered.length}</strong> de ${this.catedraData.length} documentos</span>
      <span>${this.currentCatedraFilter !== "all" ? "Filtro activo" : "Catálogo general"}</span>
    `;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: #64748b; background: #f8fafc; border-radius: 6px; border: 1px dashed #cbd5e1;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--oxford-blue); margin-bottom: 0.25rem;">No se encontraron documentos</p>
          <p style="font-size: 0.78rem;">Probá buscando con otros términos o seleccionando otra categoría.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(doc => {
      const ext = doc.ext.replace('.', '').toLowerCase();
      let icon = "📄";
      if (ext === "pdf") icon = "📕";
      else if (ext === "docx" || ext === "doc") icon = "📘";
      else if (ext === "htm" || ext === "html") icon = "🌐";
      else if (ext === "txt") icon = "📝";

      const card = document.createElement("div");
      card.className = `catedra-doc-card ${ext}`;
      card.innerHTML = `
        <div class="catedra-doc-header">
          <div class="catedra-card-icon">${icon}</div>
          <div class="catedra-card-main">
            <h4 class="catedra-doc-title" title="${doc.nombre}">${doc.titulo}</h4>
            <div class="catedra-doc-meta">
              <span class="catedra-meta-tag cat">${doc.categoriaLabel}</span>
              ${doc.subseccion ? `<span class="catedra-meta-tag sub" title="${doc.subseccion}">${doc.subseccion}</span>` : ''}
              <span class="catedra-meta-tag size">${doc.tamano}</span>
            </div>
          </div>
        </div>
        <div class="catedra-doc-actions">
          <button class="btn-catedra-read" title="Abrir en el visor interactivo de la defensa">
            👁️ Ver Documento
          </button>
          <a class="btn-catedra-ext" href="${encodeURI(doc.ruta)}" target="_blank" title="Abrir en pestaña nueva">
            ↗ Pestaña
          </a>
        </div>
      `;

      card.querySelector(".btn-catedra-read").addEventListener("click", () => {
        this.openDocModal(doc);
      });

      listContainer.appendChild(card);
    });
  }

  // ─── MODAL VISOR DE DOCUMENTO (PDF & OFFICE) ───────────────────────────
  openDocModal(doc) {
    if (!this.docModal) return;

    const ext = doc.ext.replace('.', '').toLowerCase();
    const safeUrl = encodeURI(doc.ruta);

    // Titulo y badges
    if (this.docModalTitle) {
      this.docModalTitle.textContent = doc.titulo;
      this.docModalTitle.title = doc.nombre;
    }
    if (this.docModalBadge) {
      this.docModalBadge.textContent = ext.toUpperCase();
      this.docModalBadge.className = `doc-modal-badge ${ext}`;
    }
    if (this.docModalBreadcrumb) {
      const parts = doc.ruta.split('/');
      this.docModalBreadcrumb.textContent = parts.join(' › ');
    }

    // Botones de acción directa
    if (this.btnDocNewtab) {
      this.btnDocNewtab.href = safeUrl;
    }
    if (this.btnDocDownload) {
      this.btnDocDownload.href = safeUrl;
      this.btnDocDownload.setAttribute('download', doc.nombre);
    }

    // Comportamiento según tipo de archivo
    if (ext === "pdf" || ext === "htm" || ext === "html" || ext === "txt") {
      if (this.docModalFrame) {
        this.docModalFrame.style.display = "block";
        this.docModalFrame.src = safeUrl;
      }
      if (this.docModalFallback) {
        this.docModalFallback.style.display = "none";
      }
    } else {
      // Documentos Word (.docx, .doc) u otros
      if (this.docModalFrame) {
        this.docModalFrame.style.display = "none";
        this.docModalFrame.src = "";
      }
      if (this.docModalFallback) {
        this.docModalFallback.style.display = "flex";
      }
      if (this.docFallbackTitle) {
        this.docFallbackTitle.textContent = doc.titulo;
      }
      if (this.docFallbackDesc) {
        this.docFallbackDesc.textContent = `Este archivo es un documento oficial de Microsoft Word (${doc.ext.toUpperCase()}, ${doc.tamano}). Podés descargarlo directamente para editarlo o revisarlo en tu aplicación de oficina.`;
      }
      if (this.btnDocFallbackDownload) {
        this.btnDocFallbackDownload.href = safeUrl;
        this.btnDocFallbackDownload.setAttribute('download', doc.nombre);
      }
      if (this.btnDocFallbackOpen) {
        this.btnDocFallbackOpen.href = safeUrl;
      }
    }

    this.docModal.classList.add("open");
    if (this.docModalBackdrop) {
      this.docModalBackdrop.classList.add("open");
    }
  }

  closeDocModal() {
    if (!this.docModal) return;
    this.docModal.classList.remove("open", "maximized");
    if (this.docModalBackdrop) {
      this.docModalBackdrop.classList.remove("open");
    }
    this.isDocMaximized = false;
    if (this.btnDocMaximize) {
      this.btnDocMaximize.textContent = "⛶ Maximizar";
    }
    if (this.docModalFrame) {
      this.docModalFrame.src = "";
    }
  }

  // ─── PESTAÑA: CONSIGNAS PEDCO Y REQUERIMIENTOS DE CÁTEDRA ─────────────
  renderConsignasTab() {
    this.drawerContent.innerHTML = "";

    const consignas = (this.data && this.data.consignasCatedra) || [];

    // Encabezado institucional
    const headerBox = document.createElement("div");
    headerBox.className = "consigna-header-box";
    headerBox.innerHTML = `
      <div class="consigna-header-title">
        <span>📋 Consignas Oficiales de Cátedra (PEDCO UNCo)</span>
        <span class="consigna-total-badge">5 Avances</span>
      </div>
      <p class="consigna-header-desc">
        Requerimientos metodológicos, entregables obligatorios, fuentes documentales y preguntas de investigación formuladas por la Cátedra para cada una de las 5 Unidades de la investigación en el CURZAS.
      </p>
    `;
    this.drawerContent.appendChild(headerBox);

    if (consignas.length === 0) {
      const emptyCard = document.createElement("div");
      emptyCard.className = "ref-card";
      emptyCard.innerHTML = `<p>No se encontraron consignas cargadas en los datos de la presentación.</p>`;
      this.drawerContent.appendChild(emptyCard);
      return;
    }

    const slideTargets = {
      1: { index: 2, range: "Filminas 3 a 7" },
      2: { index: 7, range: "Filminas 8 a 13" },
      3: { index: 13, range: "Filminas 14 a 19" },
      4: { index: 19, range: "Filminas 20 a 24" },
      5: { index: 24, range: "Filminas 25 a 28" }
    };

    consignas.forEach((c) => {
      const card = document.createElement("div");
      card.className = "ref-card consigna-detail-card";
      card.id = `consigna-card-${c.avanceNum}`;
      
      const target = slideTargets[c.avanceNum] || { index: 0, range: "Filminas" };

      card.innerHTML = `
        <div class="consigna-card-topbar">
          <span class="consigna-card-chip">AVANCE ${c.avanceNum}</span>
          <span class="consigna-card-unidad">${c.unidad}</span>
        </div>
        <h4 class="consigna-card-title">${c.avanceTitulo}</h4>

        <div class="consigna-block">
          <div class="consigna-block-label">🎯 Objetivo de Cátedra:</div>
          <p class="consigna-block-text">${c.objetivo}</p>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">📑 Entregables Específicos:</div>
          <ul class="consigna-checklist">
            ${c.entregables.map(item => `<li><span class="chk-icon">✓</span> <span>${item}</span></li>`).join("")}
          </ul>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">🔎 Qué Buscar en el Organismo (Fuentes):</div>
          <ul class="consigna-checklist sources-list">
            ${c.queBuscar.map(item => `<li><span class="chk-icon">📄</span> <span>${item}</span></li>`).join("")}
          </ul>
        </div>

        <div class="consigna-block">
          <div class="consigna-block-label">❓ Preguntas Guía Formuladas:</div>
          <ul class="consigna-checklist questions-list">
            ${c.preguntasGuia.map(item => `<li><span class="chk-icon">❓</span> <span>${item}</span></li>`).join("")}
          </ul>
        </div>

        <div class="consigna-block answer-block">
          <div class="consigna-block-label">🏛️ Respuesta y Diagnóstico Situado (CURZAS):</div>
          <p class="consigna-answer-text">${c.respuestaSituada}</p>
        </div>

        <div class="consigna-card-actions">
          <button class="btn-goto-consigna-slides" data-slide-index="${target.index}">
            🚀 Ir a Filminas del Avance (${target.range})
          </button>
        </div>
      `;

      card.querySelector(".btn-goto-consigna-slides").addEventListener("click", () => {
        this.closeDrawer();
        this.goToSlide(target.index);
      });

      this.drawerContent.appendChild(card);
    });
  }

  openAvance4Drawer(avanceNum = 5) {
    this.openDrawer();
    document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
    const tabBtn = document.querySelector('.drawer-tab[data-tab="avance4"]');
    if (tabBtn) tabBtn.classList.add("active");
    this.renderAvance4Tab(avanceNum);
  }

  openConsignasDrawer(avanceNum = null) {
    this.openDrawer();
    document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
    const tabBtn = document.querySelector('.drawer-tab[data-tab="consignas"]');
    if (tabBtn) tabBtn.classList.add("active");
    this.renderConsignasTab();
    if (avanceNum) {
      setTimeout(() => {
        const el = document.getElementById(`consigna-card-${avanceNum}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }

  // ─── PESTAÑA: AVANCE 4 Y DOCUMENTOS OFICIALES ENTREGADOS (PDF) ─────────────
  renderAvance4Tab(selectedAvanceNum = 5) {
    this.drawerContent.innerHTML = "";

    const avancesDocs = [
      {
        num: 5,
        unidad: "Unidad V",
        titulo: "Trabajo Final Integrador: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)",
        subtitulo: "Control Externo/Interno (AGN, UAI, SIGEN Res. 311/2026), 4 KPIs y Bucle de Retroalimentación",
        ruta: "01_Actividades_Catedra/actividad_05/Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf",
        nombre: "Avance 5 Sistemas de Control, Tablero de Comando y Evaluación (Unidad V).pdf",
        tamano: "1.76 MB",
        ext: "pdf",
        desc: "Documento oficial consolidado y versión final integrada del Trabajo Final (octubre-noviembre 2026). Analiza el ecosistema de fiscalización externa (AGN) e interna (UAI con rango estatutario único y reactivación SIGEN según Resoluciones 299 y 311/2026), la evaluación laboral docente y nodocente (CCT 366/06 y 1246/15), el diseño del Tablero de Control de RR. HH. con 4 KPIs estratégicos (Ramírez y Mayne) y el bucle de retroalimentación para el aprendizaje institucional."
      },
      {
        num: 4,
        unidad: "Unidad IV",
        titulo: "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV)",
        subtitulo: "Inciso 1 (Personal), Presupuesto por Programas y Capacidad Estatal",
        ruta: "01_Actividades_Catedra/actividad_04/Avance 4 Programación Presupuestaria y Factor Humano (Unidad IV).pdf",
        nombre: "Avance 4 Programación Presupuestaria y Factor Humano (Unidad IV).pdf",
        tamano: "1.38 MB",
        ext: "pdf",
        desc: "Documento oficial presentado a la cátedra. Vincula la planificación política con las partidas presupuestarias, analiza la absorción del 90,2% por el Inciso 1 (Personal), el impacto legal del adicional del 40% por Zona Desfavorable y la estructuración del Programa 26 (Desarrollo de la Educación Superior) según Marcos Makon."
      },
      {
        num: 3,
        unidad: "Unidad III",
        titulo: "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III)",
        subtitulo: "Organigrama Formal vs Real, Flujograma de Licencias y Transición SUDOCU",
        ruta: "01_Actividades_Catedra/actividad_03/Avance_3_Estructura_Organigrama_Flujograma_GDE_CURZAS_Hector_Ayarachi.pdf",
        nombre: "Avance_3_Estructura_Organigrama_Flujograma_GDE_CURZAS_Hector_Ayarachi.pdf",
        tamano: "1.08 MB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad III. Releva la discordancia entre la estructura formal y la red real de 10 nodos provinciales, mapea el circuito de licencias y detecta los cuellos de botella por falta de subrogancia."
      },
      {
        num: 2,
        unidad: "Unidad II",
        titulo: "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II)",
        subtitulo: "Matriz FODA Situada, Mapeo de Actores Clave y Capacidades Estatales (Bertranou)",
        ruta: "01_Actividades_Catedra/actividad_02/Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Correccion.pdf",
        nombre: "Avance_2_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Correccion.pdf",
        tamano: "1.20 MB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad II. Aborda la transición de la planificación normativa al PES de Matus, la red viva de 10 nodos en Río Negro y la evaluación de capacidades estatales."
      },
      {
        num: 1,
        unidad: "Unidad I",
        titulo: "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I)",
        subtitulo: "Marco Autonómico, Burocracia Profesional y Tutela Paritaria frente a la NGP",
        ruta: "01_Actividades_Catedra/actividad_01/Avance_1_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Mejorado.pdf",
        nombre: "Avance_1_Contexto_Modelo_Gestion_Gobernanza_CURZAS_Hector_Ayarachi_Mejorado.pdf",
        tamano: "455 KB",
        ext: "pdf",
        desc: "Documento oficial para la Unidad I. Caracteriza el modelo de Burocracia Profesional, la tutela paritaria (CCT 366/06 y 1246/15) y los mecanismos de rendición de cuentas en el co-gobierno."
      }
    ];

    const currentDoc = avancesDocs.find(d => d.num === selectedAvanceNum) || avancesDocs[0];
    const safeUrl = encodeURI(currentDoc.ruta);

    const container = document.createElement("div");
    container.className = "avance-pdf-drawer-container";

    container.innerHTML = `
      <!-- Encabezado con información del Documento Oficial -->
      <div class="avance-pdf-header-box">
        <div class="avance-pdf-title-row">
          <span class="avance-pdf-badge">${currentDoc.num === 5 ? 'TRABAJO FINAL OFICIAL • INFORME INTEGRAL' : `DOCUMENTO OFICIAL ENTREGADO • AVANCE ${currentDoc.num}`}</span>
          <span class="avance-pdf-size">${currentDoc.tamano} • PDF OFICIAL</span>
        </div>
        <h3 class="avance-pdf-title">${currentDoc.titulo}</h3>
        <p class="avance-pdf-sub">${currentDoc.subtitulo}</p>
        <p class="avance-pdf-desc">${currentDoc.desc}</p>
        <div class="avance-pdf-actions">
          <button class="btn-avance-pdf-modal" id="btn-open-current-avance-modal">
            👁️ Visualizar en Pantalla Completa
          </button>
          <a class="btn-avance-pdf-newtab" href="${safeUrl}" target="_blank" rel="noopener">
            ↗ Abrir en Pestaña Nueva
          </a>
          <a class="btn-avance-pdf-download" href="${safeUrl}" download="${currentDoc.nombre}">
            ⬇️ Descargar PDF
          </a>
        </div>
      </div>

      <!-- Barra selectora de Entregas y Trabajo Final -->
      <div class="avance-switcher-bar">
        <span class="switcher-label">Seleccionar Entrega:</span>
        ${avancesDocs.map(d => `
          <button class="btn-switch-avance ${d.num === currentDoc.num ? 'active' : ''}" data-avance="${d.num}">
            ${d.num === 5 ? 'Trabajo Final (Avance 5)' : `Avance ${d.num}`} (${d.num === 5 ? 'Unidad V' : d.num === 4 ? 'Unidad IV' : d.num === 3 ? 'Unidad III' : d.num === 2 ? 'Unidad II' : 'Unidad I'})
          </button>
        `).join('')}
      </div>

      <!-- Visor Embebido Interactivo del PDF -->
      <div class="avance-pdf-embed-wrapper">
        <div class="embed-topbar">
          <span class="embed-topbar-title">📄 Visor Interactivo Integrado • ${currentDoc.nombre}</span>
          <button class="btn-embed-expand" title="Ver en Pantalla Completa">⛶ Maximizar</button>
        </div>
        <iframe class="avance-pdf-iframe" src="${safeUrl}#toolbar=1&navpanes=1&scrollbar=1" title="Visor ${currentDoc.titulo}"></iframe>
      </div>
    `;

    // Eventos
    container.querySelector("#btn-open-current-avance-modal").addEventListener("click", () => {
      this.openDocModal(currentDoc);
    });

    container.querySelector(".btn-embed-expand").addEventListener("click", () => {
      this.openDocModal(currentDoc);
    });

    container.querySelectorAll(".btn-switch-avance").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const num = parseInt(e.currentTarget.dataset.avance, 10);
        this.renderAvance4Tab(num);
      });
    });

    this.drawerContent.appendChild(container);
  }

  toggleDocMaximize() {
    this.isDocMaximized = !this.isDocMaximized;
    if (this.docModal) {
      this.docModal.classList.toggle("maximized", this.isDocMaximized);
    }
    if (this.btnDocMaximize) {
      this.btnDocMaximize.textContent = this.isDocMaximized ? "🗗 Restaurar" : "⛶ Maximizar";
    }
  }


  // ─── MÓDULO DE ACCESIBILIDAD Y LECTOR DE VOZ NATIVO (TTS) ──────────────────

  /**
   * Inicializa el sintetizador de voz nativo y selecciona voz en español preferente
   */
  initTTS() {
    if (!this.ttsSynth) return;
    const updateVoices = () => {
      const voices = this.ttsSynth.getVoices();
      if (!voices || voices.length === 0) return;
      // Priorizar español argentino (es-AR), luego latinoamericano (es-419), luego cualquier español
      this.ttsVoice = voices.find(v => v.lang === "es-AR") ||
                      voices.find(v => v.lang === "es-419") ||
                      voices.find(v => v.lang && v.lang.startsWith("es-")) ||
                      voices.find(v => v.lang && v.lang.startsWith("es")) ||
                      null;
    };
    updateVoices();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  /**
   * Activa o desactiva el Modo Accesibilidad con lector de voz
   */
  toggleTTS(forceState) {
    const nextState = forceState !== undefined ? forceState : !this.ttsActive;
    this.ttsActive = nextState;

    if (this.btnToggleTTS) {
      this.btnToggleTTS.classList.toggle("active", this.ttsActive);
      this.btnToggleTTS.setAttribute("aria-pressed", this.ttsActive ? "true" : "false");
    }

    if (this.ttsFloatingDock) {
      if (this.ttsActive) {
        this.ttsFloatingDock.style.display = "flex";
        // Permitir que el navegador aplique display antes de la animación de opacidad
        setTimeout(() => this.ttsFloatingDock.classList.add("visible"), 20);
      } else {
        this.ttsFloatingDock.classList.remove("visible");
        setTimeout(() => {
          if (!this.ttsActive) this.ttsFloatingDock.style.display = "none";
        }, 250);
      }
    }

    document.body.classList.toggle("tts-mode-active", this.ttsActive);

    if (this.ttsActive) {
      this.speakText("Modo accesibilidad activado. Apunta con el cursor sobre cualquier texto, título o nota para escucharlo.");
    } else {
      this.stopTTS();
      // Limpiar resaltados visuales
      document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));
    }
  }

  /**
   * Normaliza y limpia textos para una dicción fluida y natural en español
   */
  normalizeTextForSpeech(rawText) {
    if (!rawText) return "";
    let txt = String(rawText);

    // 1. Eliminar iconos, emojis y símbolos decorativos que traban el lector
    txt = txt.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, " ");
    txt = txt.replace(/[▶✓→←⏱🎯💡❓🏛️⚙️🛑📊📁🔍📌🔑⚖️✨🚨🏢]/g, " ");

    // 2. Diccionario de expansión fonética académica y de administración pública
    const replacements = [
      { regex: /\bRR\.?\s*HH\.?\b/gi, word: "Recursos Humanos" },
      { regex: /\bUNCo\b/g, word: "Universidad Nacional del Comahue" },
      { regex: /\bCURZAS\b/g, word: "Curzas" },
      { regex: /\bCCT\b/g, word: "Convenio Colectivo de Trabajo" },
      { regex: /\bSUDOCU\b/g, word: "Sudocu" },
      { regex: /\bSIU-Guaraní\b/gi, word: "SIU Guaraní" },
      { regex: /\bSIU-Mapuche\b/gi, word: "SIU Mapuche" },
      { regex: /\bSIU\b/g, word: "S.I.U." },
      { regex: /\bGDE\b/g, word: "Gestión Documental Electrónica" },
      { regex: /\bTAD\b/g, word: "Trámites a Distancia" },
      { regex: /\bPES\b/g, word: "Planificación Estratégica Situacional" },
      { regex: /\bPOA\b/g, word: "Plan Operativo Anual" },
      { regex: /\bFODA\b/g, word: "Matriz Foda" },
      { regex: /\bSIGEN\b/g, word: "Sigen" },
      { regex: /\bAGN\b/g, word: "Auditoría General de la Nación" },
      { regex: /\bKPIs?\b/gi, word: "Indicadores Clave de Desempeño" },
      { regex: /\bTICs?\b/gi, word: "Tecnologías de la Información" },
      { regex: /\bIA\b/g, word: "Inteligencia Artificial" },
      { regex: /\bDec\.?\s*(\d+)/gi, word: "Decreto $1" },
      { regex: /\bArt\.?\s*(\d+)/gi, word: "Artículo $1" },
      { regex: /\bRes\.?\s*(\d+)/gi, word: "Resolución $1" },
      { regex: /\bN°\s*(\d+)/gi, word: "Número $1" },
      { regex: /\bNº\s*(\d+)/gi, word: "Número $1" },
      { regex: /%/g, word: " por ciento " }
    ];

    replacements.forEach(r => {
      txt = txt.replace(r.regex, r.word);
    });

    // Limpieza de espacios múltiples y barras
    txt = txt.replace(/[|•·_~]/g, " ");
    txt = txt.replace(/\s+/g, " ").trim();
    return txt;
  }

  /**
   * Sintetiza un texto en voz alta y resalta visualmente el elemento correspondiente
   */
  speakText(text, targetElement = null, onEndCallback = null) {
    if (!this.ttsSynth) return;

    const cleanText = this.normalizeTextForSpeech(text);
    if (!cleanText || cleanText.length < 2) return;

    // Crear un nuevo ID de sesión único para esta locución específica
    this.ttsSessionId = (this.ttsSessionId || 0) + 1;
    const sessionId = this.ttsSessionId;
    this.ttsStopRequested = false;

    // Detener cualquier temporizador secuencial previo si no estamos en lectura de notas
    if (!this.ttsReadingNotes && this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }

    // Gestionar resaltado visual
    document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));
    if (targetElement) {
      targetElement.classList.add("tts-reading-target");
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (this.ttsVoice) {
      utterance.voice = this.ttsVoice;
    } else {
      utterance.lang = "es-AR";
    }

    utterance.rate = 1.02;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      // Si la sesión fue cancelada mientras arrancaba la voz, abortar
      if (this.ttsSessionId !== sessionId || this.ttsStopRequested) {
        try { this.ttsSynth.cancel(); } catch (e) {}
        return;
      }
      this.ttsIsSpeaking = true;
      this.ttsIsPaused = false;
      this.updateTTSDockPlayPause(false);
    };

    utterance.onend = () => {
      // Si la sesión no coincide o se solicitó parar, NO propagar callbacks
      if (this.ttsSessionId !== sessionId || this.ttsStopRequested) {
        return;
      }

      this.ttsIsSpeaking = false;
      this.ttsIsPaused = false;
      if (targetElement) {
        targetElement.classList.remove("tts-reading-target");
      }
      this.updateTTSDockPlayPause(false);

      if (typeof onEndCallback === "function") {
        onEndCallback();
      }
    };

    utterance.onerror = (e) => {
      // Cancelaciones o interrupciones intencionales
      this.ttsIsSpeaking = false;
      this.ttsIsPaused = false;
      if (targetElement) {
        targetElement.classList.remove("tts-reading-target");
      }
      this.updateTTSDockPlayPause(false);
    };

    this.ttsUtterance = utterance;

    // Cancelar cualquier audio nativo en cola antes de emitir la nueva locución
    if (this.ttsSynth.paused) {
      try { this.ttsSynth.resume(); } catch (e) {}
    }
    try {
      this.ttsSynth.cancel();
    } catch (e) {}

    // Pequeño retardo de 35ms para permitir que el hilo de audio del navegador procese la cancelación
    setTimeout(() => {
      if (this.ttsSessionId === sessionId && !this.ttsStopRequested) {
        try {
          this.ttsSynth.speak(utterance);
        } catch (err) {
          console.warn("Error al emitir síntesis de voz:", err);
        }
      }
    }, 35);
  }

  /**
   * Pausa o reanuda la lectura de voz actual
   */
  pauseResumeTTS() {
    if (!this.ttsSynth) return;

    // Si no está hablando ni en pausa, iniciar según contexto activo
    if (!this.ttsIsSpeaking && !this.ttsIsPaused) {
      if (this.notesModal && this.notesModal.classList.contains("open")) {
        this.readCurrentNotes();
      } else {
        this.readCurrentSlide();
      }
      return;
    }

    if (this.ttsSynth.paused || this.ttsIsPaused) {
      try {
        this.ttsSynth.resume();
      } catch (e) {}
      this.ttsIsPaused = false;
      this.updateTTSDockPlayPause(false);
    } else {
      try {
        this.ttsSynth.pause();
      } catch (e) {}
      this.ttsIsPaused = true;
      this.updateTTSDockPlayPause(true);
    }
  }

  /**
   * Detiene de inmediato cualquier locución activa, cancela secuencias y limpia estados visuales
   */
  stopTTS() {
    this.ttsStopRequested = true;
    this.ttsSessionId = (this.ttsSessionId || 0) + 1;
    this.ttsNotesSequenceId = (this.ttsNotesSequenceId || 0) + 1;
    this.ttsReadingNotes = false;
    this.ttsReadingSlide = false;
    this.ttsIsSpeaking = false;
    this.ttsIsPaused = false;

    if (this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }
    if (this.ttsHoverTimeout) {
      clearTimeout(this.ttsHoverTimeout);
      this.ttsHoverTimeout = null;
    }

    if (this.ttsSynth) {
      try {
        if (this.ttsSynth.paused) {
          this.ttsSynth.resume();
        }
        this.ttsSynth.cancel();
      } catch (e) {
        console.warn("Error al cancelar síntesis de voz:", e);
      }
    }

    this.ttsUtterance = null;
    this.ttsCurrentTarget = null;

    // Quitar resaltado de cualquier elemento
    document.querySelectorAll(".tts-reading-target").forEach(el => el.classList.remove("tts-reading-target"));

    // Resetear botones a estado inactivo ("Leer Guion" / "Filmina")
    this.updateNotesTTSButtonState(false);
    this.updateSlideTTSButtonState(false);
    this.updateTTSDockPlayPause(false);
  }

  /**
   * Actualiza el texto, icono y feedback visual del botón de guion en el teleprómpter
   */
  updateNotesTTSButtonState(isReading) {
    const btnNotes = document.getElementById("btn-read-notes-tts");
    const dockNotes = document.getElementById("tts-btn-read-notes");

    if (btnNotes) {
      if (isReading) {
        btnNotes.classList.add("active-reading");
        btnNotes.setAttribute("title", "Detener lectura del guion (Clic para parar audio)");
        btnNotes.setAttribute("aria-label", "Detener lectura del guion");
        btnNotes.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
          <span>Detener</span>
        `;
      } else {
        btnNotes.classList.remove("active-reading");
        btnNotes.setAttribute("title", "Leer guion y notas en voz alta (Voz nativa)");
        btnNotes.setAttribute("aria-label", "Leer guion del orador en voz alta");
        btnNotes.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>Leer Guion</span>
        `;
      }
    }

    if (dockNotes) {
      if (isReading) {
        dockNotes.classList.add("active-reading");
        dockNotes.setAttribute("title", "Detener lectura de notas (Audio activo)");
      } else {
        dockNotes.classList.remove("active-reading");
        dockNotes.setAttribute("title", "Leer guion y notas del orador");
      }
    }
  }

  /**
   * Actualiza el estado visual del botón Leer Filmina en el dock flotante
   */
  updateSlideTTSButtonState(isReading) {
    const btnSlide = document.getElementById("tts-btn-read-slide");
    if (!btnSlide) return;
    if (isReading) {
      btnSlide.classList.add("active-reading");
      btnSlide.setAttribute("title", "Detener lectura de la filmina (Audio activo)");
    } else {
      btnSlide.classList.remove("active-reading");
      btnSlide.setAttribute("title", "Leer filmina actual en voz alta");
    }
  }

  /**
   * Actualiza el texto e icono del botón Pausar/Reanudar en el dock
   */
  updateTTSDockPlayPause(isPaused) {
    if (!this.ttsBtnPauseText) return;
    this.ttsBtnPauseText.textContent = isPaused ? "Reanudar" : "Pausar";
  }

  /**
   * Obtiene la etiqueta accesible, clara y bien estructurada para cualquier elemento,
   * incluyendo botones de cerrar, botones de herramientas, navegación, pestañas, controles y texto.
   */
  getAccessibleLabelForElement(target) {
    if (!target) return "";

    // 1. Botones de cerrar (cruces ✕ o botones de cierre en modales, notas, visor y dock)
    const isCloseBtn = target.matches(".btn-close, .btn-notes-close, .notes-close, .tts-dock-close") ||
                       target.closest(".btn-close, .btn-notes-close, .notes-close, .tts-dock-close") ||
                       (target.tagName === "BUTTON" && (target.id.includes("close") || target.className.includes("close")));

    if (isCloseBtn) {
      const btn = target.closest("button") || target;
      const titleAttr = btn.getAttribute("title") || btn.getAttribute("aria-label");
      if (titleAttr && titleAttr.trim()) {
        return `Botón: ${this.cleanShortcutHint(titleAttr)}`;
      }
      if (btn.id === "btn-close-notes") return "Botón: Cerrar teleprómpter del orador";
      if (btn.id === "btn-close-drawer") return "Botón: Cerrar respaldo metodológico";
      if (btn.id === "btn-close-svg") return "Botón: Cerrar visor de diagramas";
      if (btn.id === "btn-close-doc") return "Botón: Cerrar visor de documento";
      if (btn.id === "btn-close-shortcuts") return "Botón: Cerrar ventana de atajos";
      if (btn.id === "btn-close-slides-index") return "Botón: Cerrar índice de filminas";
      if (btn.id === "tts-btn-close") return "Botón: Desactivar modo de accesibilidad";
      return "Botón: Cerrar";
    }

    // 2. Botones de navegación y acción principales
    const isButtonOrInteractive = target.matches("button, a, [role='button'], input, .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge") ||
                                  target.closest("button, a, [role='button'], .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge");

    if (isButtonOrInteractive) {
      const btn = target.closest("button, a, [role='button'], .btn-tool, .btn-nav, .drawer-tab, .station-dot, .slide-counter-badge") || target;

      // Pestañas del Drawer de Respaldo
      if (btn.classList.contains("drawer-tab")) {
        const tabNames = {
          "autores": "Autores clave",
          "normativa": "Normativa y estatuto",
          "territorio": "Red territorial",
          "faq": "Preguntas frecuentes del jurado",
          "svgs": "Diagramas y dispositivos",
          "consignas": "Consignas oficiales PEDCO",
          "avance4": "Trabajo Final",
          "catedra": "Material de cátedra"
        };
        const tabKey = btn.getAttribute("data-tab");
        const tabTitle = tabNames[tabKey] || btn.innerText || btn.textContent || "";
        const isActive = btn.classList.contains("active");
        return `Pestaña: ${tabTitle}${isActive ? ", seleccionada" : ""}`;
      }

      // Estaciones del indicador inferior
      if (btn.classList.contains("station-dot")) {
        const slideIdx = btn.getAttribute("data-slide-index") || "";
        const isActive = btn.classList.contains("active");
        return `Estación: Filmina ${slideIdx}${isActive ? ", filmina actual" : ""}`;
      }

      // Contador de filminas / índice general
      if (btn.id === "slide-counter-badge") {
        return "Botón: Abrir índice de los 5 Avances y 29 filminas";
      }

      // Controles de cronómetro
      if (btn.id === "btn-timer-toggle") return "Botón: Iniciar o pausar cronómetro";
      if (btn.id === "btn-timer-reset") return "Botón: Reiniciar cronómetro a 17 minutos";

      // Botones de navegación de filminas
      if (btn.id === "btn-prev" || btn.id === "btn-notes-prev") return "Botón: Filmina anterior";
      if (btn.id === "btn-next" || btn.id === "btn-notes-next") return "Botón: Filmina siguiente";

      // Herramientas de visualización y orador
      if (btn.id === "btn-view-text") return "Botón: Ver texto, priorizar lectura amplia";
      if (btn.id === "btn-view-3d") return "Botón: Ver objeto, centrar escultura 3D";
      if (btn.id === "btn-reset-3d") return "Botón: Centrar y restablecer rotación 3D";
      if (btn.id === "btn-toggle-notes") return "Botón: Abrir guion y teleprómpter del orador";
      if (btn.id === "btn-toggle-drawer") return "Botón: Abrir respaldo metodológico para el jurado";
      if (btn.id === "btn-toggle-tts") return "Botón: Modo accesibilidad y lector de voz";
      if (btn.id === "btn-toggle-fullscreen") return "Botón: Pantalla completa";
      if (btn.id === "btn-toggle-shortcuts") return "Botón: Ver atajos de teclado";

      // Controles del teleprómpter
      if (btn.id === "btn-read-notes-tts") {
        return this.ttsReadingNotes ? "Botón: Detener lectura del guion" : "Botón: Leer guion del orador en voz alta";
      }
      if (btn.id === "btn-notes-font-inc") return "Botón: Aumentar tamaño de letra";
      if (btn.id === "btn-notes-font-dec") return "Botón: Disminuir tamaño de letra";

      // Controles de zoom y visor SVG
      if (btn.id === "btn-svg-zoom-in") return "Botón: Acercar diagrama";
      if (btn.id === "btn-svg-zoom-out") return "Botón: Alejar diagrama";
      if (btn.id === "btn-svg-reset") return "Botón: Restablecer zoom al cien por ciento";
      if (btn.id === "btn-svg-fit") return "Botón: Ajustar diagrama al tamaño de la pantalla";
      if (btn.id === "btn-svg-maximize" || btn.id === "btn-doc-maximize") return "Botón: Maximizar visor";

      // Controles del dock flotante
      if (btn.id === "tts-btn-read-slide") {
        return this.ttsReadingSlide ? "Botón: Detener lectura de filmina" : "Botón: Leer contenido de la filmina actual";
      }
      if (btn.id === "tts-btn-read-notes") {
        return this.ttsReadingNotes ? "Botón: Detener lectura del guion" : "Botón: Leer guion del orador";
      }
      if (btn.id === "tts-btn-pause") return "Botón: Pausar o reanudar lectura de voz";
      if (btn.id === "tts-btn-stop") return "Botón: Detener voz";
      if (btn.id === "tts-btn-close") return "Botón: Desactivar modo accesibilidad";

      // Si tiene aria-label o title
      const ariaLabel = btn.getAttribute("aria-label");
      if (ariaLabel && ariaLabel.trim()) {
        return `Botón: ${this.cleanShortcutHint(ariaLabel)}`;
      }
      const title = btn.getAttribute("title");
      if (title && title.trim()) {
        return `Botón: ${this.cleanShortcutHint(title)}`;
      }

      // Si tiene texto interno visible
      const rawText = btn.innerText || btn.textContent || "";
      const clean = rawText.replace(/[✕xX▶◀→←⏱🎯💡❓🏛️⚙️🛑📊📁🔍📌🔑⚖️✨🚨🏢]/g, " ").replace(/\s+/g, " ").trim();
      if (clean && clean.length > 0) {
        return `Botón: ${clean}`;
      }
    }

    // 3. Enlaces
    if (target.tagName === "A" || target.closest("a")) {
      const link = target.closest("a") || target;
      const title = link.getAttribute("title") || link.getAttribute("aria-label") || link.innerText || link.textContent || "";
      return `Enlace: ${title.trim()}`;
    }

    // 4. Elementos de contenido textual estándar
    const ariaLabel = target.getAttribute("aria-label");
    if (ariaLabel && ariaLabel.trim().length > 2) {
      return ariaLabel;
    }

    const title = target.getAttribute("title");
    if (title && title.trim().length > 2 && (!target.innerText || target.innerText.trim().length <= 2)) {
      return title;
    }

    return target.innerText || target.textContent || "";
  }

  /**
   * Limpia abreviaturas o paréntesis de atajos de teclado para que suenen elegantes al hablar
   */
  cleanShortcutHint(text) {
    if (!text) return "";
    let str = String(text);
    str = str.replace(/\(Tecla\s*([A-Z0-9?]+)\)/gi, ", tecla $1");
    str = str.replace(/\(([A-Z0-9?])\)/gi, ", tecla $1");
    str = str.replace(/\(Esc\)/gi, ", tecla Escape");
    str = str.replace(/\([←→↑↓\/ \wáéíóúÁÉÍÓÚ-]+\)/g, "");
    str = str.replace(/\s*,\s*/g, ", ");
    return str.replace(/\s+/g, " ").trim();
  }

  /**
   * Escucha el paso del ratón por elementos de texto o botones interactivos para narrarlos
   */
  handlePointerOverTTS(e) {
    if (!this.ttsActive) return;
    // Si se está ejecutando la lectura guiada de notas o filmina, no interrumpir con hover
    if (this.ttsReadingNotes || this.ttsReadingSlide) return;

    // Selectores amplios que incluyen botones, controles interactivos y contenido
    const selector = [
      // Botones y controles
      "button",
      "a",
      "[role='button']",
      ".btn-close",
      ".btn-tool",
      ".btn-nav",
      ".btn-notes-action",
      ".btn-font-size",
      ".btn-teleprompter-nav",
      ".btn-svg-tool",
      ".btn-doc-tool",
      ".drawer-tab",
      ".station-dot",
      ".slide-counter-badge",
      ".tts-dock-btn",
      ".tts-dock-close",
      // Contenido de filmina
      ".slide-bullet-item",
      ".slide-bullets li",
      ".slide-bullets p",
      ".slide-title",
      ".slide-subtitle",
      ".slide-badge",
      ".slide-meta-badge",
      ".intro-card",
      ".card-situada",
      ".grid-card",
      ".flujo-step",
      ".foda-card",
      ".actor-card",
      ".conclusion-summary-card",
      ".avance-summary-card",
      ".hud-card",
      ".station-badge",
      // Teleprómpter y notas
      ".teleprompter-speech-card",
      ".speech-para",
      ".teleprompter-obj-card",
      ".teleprompter-obj-title",
      ".teleprompter-obj-text",
      ".qa-clean-card",
      ".qa-clean-question",
      ".qa-clean-answer",
      ".qa-ans-body",
      // Drawer y referencias
      ".drawer-card",
      ".biblio-item",
      ".faq-card",
      ".consigna-card",
      ".consigna-line"
    ].join(", ");

    const target = e.target.closest(selector);
    if (!target) return;

    // Si es un botón o interactivo, tomar el contenedor interactivo
    const actionableTarget = target.closest("button, a, [role='button']") || target;

    if (this.ttsCurrentTarget === actionableTarget) return;

    clearTimeout(this.ttsHoverTimeout);
    this.ttsHoverTimeout = setTimeout(() => {
      this.ttsCurrentTarget = actionableTarget;
      const textToRead = this.getAccessibleLabelForElement(actionableTarget);
      if (textToRead && textToRead.trim().length > 1) {
        this.speakText(textToRead, actionableTarget);
      }
    }, 180);
  }

  /**
   * Accesibilidad por teclado: Al tabular sobre elementos o botones, narrarlos de inmediato
   */
  handleFocusInTTS(e) {
    if (!this.ttsActive) return;
    if (this.ttsReadingNotes || this.ttsReadingSlide) return;
    const target = e.target;
    if (!target) return;
    const actionableTarget = target.closest("button, a, [role='button']") || target;
    const textToRead = this.getAccessibleLabelForElement(actionableTarget);
    if (textToRead && textToRead.trim().length > 1) {
      this.speakText(textToRead, actionableTarget);
    }
  }

  /**
   * Lee en voz alta la filmina actual completa (título, subtítulo y puntos clave)
   */
  readCurrentSlide() {
    // Si ya está leyendo la filmina, alternar para detenerla (Toggle)
    if (this.ttsReadingSlide) {
      this.stopTTS();
      return;
    }

    if (this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }

    this.ttsStopRequested = false;
    this.ttsReadingSlide = true;
    this.ttsReadingNotes = false;
    this.updateSlideTTSButtonState(true);
    this.updateNotesTTSButtonState(false);

    const slide = this.data.slides[this.currentSlideIndex];
    if (!slide) {
      this.ttsReadingSlide = false;
      this.updateSlideTTSButtonState(false);
      return;
    }

    const parts = [
      `Filmina ${this.currentSlideIndex + 1} de ${this.totalSlides}.`,
      slide.titulo,
      slide.subtitulo || "",
      "Contenido principal:"
    ];

    if (Array.isArray(slide.bullets)) {
      slide.bullets.forEach((b, idx) => {
        if (typeof b === "string") {
          parts.push(`Punto ${idx + 1}: ${b}`);
        } else if (b && b.label) {
          parts.push(`${b.label}: ${b.desc || ""}`);
        }
      });
    }

    const fullText = parts.filter(p => p.trim()).join(". ");
    this.speakText(fullText, this.cardElement, () => {
      this.ttsReadingSlide = false;
      this.updateSlideTTSButtonState(false);
    });
  }

  /**
   * Lee en voz alta el guion sugerido para el orador y el objetivo pedagógico de la filmina
   */
  readCurrentNotes() {
    const btnNotes = document.getElementById("btn-read-notes-tts");

    // 1. SI YA ESTÁ LEYENDO O REPRODUCIENDO NOTAS -> DETENER DE INMEDIATO (TOGGLE)
    if (this.ttsReadingNotes || (btnNotes && btnNotes.classList.contains("active-reading"))) {
      this.stopTTS();
      return;
    }

    const slide = this.data.slides[this.currentSlideIndex];
    if (!slide) return;

    // Asegurar que el modal o teleprómpter esté abierto para sincronizar visualmente
    if (!this.notesModal.classList.contains("open")) {
      this.toggleNotes(true);
    }

    // Cancelar temporizadores secuenciales previos
    if (this.ttsSequentialTimer) {
      clearTimeout(this.ttsSequentialTimer);
      this.ttsSequentialTimer = null;
    }

    // Activar estado y feedback visual inmediato en el botón (cambia a "Detener" en rojo)
    this.ttsStopRequested = false;
    this.ttsReadingNotes = true;
    this.ttsReadingSlide = false;
    this.updateNotesTTSButtonState(true);
    this.updateSlideTTSButtonState(false);

    const paragraphs = [];
    if (slide.esquema) {
      paragraphs.push({ 
        text: `Objetivo Pedagógico de la filmina ${this.currentSlideIndex + 1}: ${slide.esquema}`, 
        el: document.querySelector(".teleprompter-obj-card") 
      });
    }

    const speechElements = document.querySelectorAll(".speech-para");
    if (speechElements.length > 0) {
      speechElements.forEach((el) => {
        paragraphs.push({ text: el.innerText || el.textContent, el: el });
      });
    } else if (slide.guionOrador) {
      const splitParas = slide.guionOrador.split("\n").filter(p => p.trim());
      splitParas.forEach(p => paragraphs.push({ text: p, el: this.notesBody }));
    }

    if (paragraphs.length === 0) {
      this.updateNotesTTSButtonState(false);
      this.ttsReadingNotes = false;
      this.speakText("No hay notas ni guion registrado para esta filmina.");
      return;
    }

    // Identificador de sesión para toda la secuencia de párrafos
    this.ttsNotesSequenceId = (this.ttsNotesSequenceId || 0) + 1;
    const sequenceId = this.ttsNotesSequenceId;

    let currentIndex = 0;
    const readNext = () => {
      // Si la secuencia fue cancelada, abortar de inmediato
      if (!this.ttsReadingNotes || this.ttsNotesSequenceId !== sequenceId || this.ttsStopRequested) {
        this.updateNotesTTSButtonState(false);
        this.ttsReadingNotes = false;
        return;
      }

      if (currentIndex >= paragraphs.length) {
        this.updateNotesTTSButtonState(false);
        this.ttsReadingNotes = false;
        return;
      }

      const item = paragraphs[currentIndex];
      if (item.el && typeof item.el.scrollIntoView === "function") {
        item.el.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      currentIndex++;
      this.speakText(item.text, item.el, () => {
        if (this.ttsReadingNotes && this.ttsNotesSequenceId === sequenceId && !this.ttsStopRequested) {
          this.ttsSequentialTimer = setTimeout(readNext, 350);
        } else {
          this.updateNotesTTSButtonState(false);
          this.ttsReadingNotes = false;
        }
      });
    };

    readNext();
  }

}


// Inicializar la aplicación al cargar el DOM
window.addEventListener("DOMContentLoaded", () => {
  if (window.PRESENTACION_DATA) {
    window.app = new PresentationApp(window.PRESENTACION_DATA);
  } else {
    console.error("No se encontraron los metadatos de PRESENTACION_DATA.");
  }
});

// Actualizador de HUD sobrio para el radar de la Red Territorial (escenas anim_06 y anim_07)
window.updateNodeHUD = function(node) {
  const pill = document.getElementById("node-radar-pill");
  const title = document.getElementById("node-radar-title");
  const desc = document.getElementById("node-radar-desc");
  if (!pill) return;

  const currentSlide = window.app?.data.slides[window.app.currentSlideIndex];
  if (currentSlide && (currentSlide.escena3D === "anim_06" || currentSlide.escena3D === "anim_07")) {
    pill.style.display = "inline-flex";
    if (title) title.textContent = node.nombre;
    if (desc) desc.textContent = `${node.tipo} • ${node.subtitulo}`;
  } else {
    pill.style.display = "none";
  }
};

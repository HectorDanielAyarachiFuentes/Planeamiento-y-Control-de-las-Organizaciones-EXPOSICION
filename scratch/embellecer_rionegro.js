const fs = require('fs');

let html = fs.readFileSync('prueba_rionegro_3d.html', 'utf8');

// 1. Replace the entire <head> and HTML overlay elements before <script>
const headStart = html.indexOf('<head>');
const bodyScriptStart = html.indexOf('<script>');

const newHeadAndBody = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Río Negro 3D Procedimental — Red Territorial de Nodos (CURZAS)</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Three.js + OrbitControls + SVGLoader + FontAwesome Icons -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/SVGLoader.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Cinzel:wght@600;700;800&display=swap');

    :root {
      --pro-bg-deep: #050811;
      --pro-bg-card: rgba(10, 16, 32, 0.82);
      --pro-border-subtle: rgba(255, 255, 255, 0.12);
      --pro-border-glow: rgba(56, 189, 248, 0.35);
      --gold-main: #c89632;
      --gold-glow: rgba(200, 150, 50, 0.35);
      --cyan-accent: #0284c7;
      --cyan-light: #38bdf8;
      --cyan-glow: rgba(56, 189, 248, 0.25);
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      overflow: hidden;
      user-select: none;
      background: radial-gradient(circle at 50% 42%, #0e172e 0%, #070c18 55%, #030509 100%);
      color: #f1f5f9;
    }

    /* Tarjeta Glassmorphic UI Pro Max */
    .pro-glass-card {
      background: var(--pro-bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--pro-border-subtle);
      border-radius: 16px;
      box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.06);
      transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pro-glass-card:hover {
      border-color: rgba(56, 189, 248, 0.3);
      box-shadow: 0 25px 50px -10px rgba(0, 0, 0, 0.85), 0 0 25px rgba(56, 189, 248, 0.15);
    }

    /* Borde Superior Cinético (Beam) */
    .beam-top {
      position: relative;
      overflow: hidden;
    }
    .beam-top::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #38bdf8, #f59e0b, transparent);
    }

    /* Badges Pro */
    .pro-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pro-badge.glow-cyan {
      background: rgba(14, 165, 233, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.4);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
    }
    .pro-badge.glow-amber {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.45);
      box-shadow: 0 0 12px rgba(245, 158, 11, 0.25);
    }

    .pro-pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
      box-shadow: 0 0 8px currentColor;
      animation: proPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes proPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.35; transform: scale(0.8); }
    }

    /* Badge con Destello Shine Sweep */
    .skill-badge-shine {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 11px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 800;
      background: rgba(14, 165, 233, 0.18);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.38);
    }
    .skill-badge-shine::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
      transform: rotate(25deg);
      animation: skillShineSweep 3.2s infinite;
    }
    @keyframes skillShineSweep {
      0% { left: -70%; }
      30%, 100% { left: 140%; }
    }

    /* Botones Impecable */
    .imp-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 7px 12px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.06);
      color: #e2e8f0;
      backdrop-filter: blur(8px);
    }
    .imp-btn:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: rgba(56, 189, 248, 0.5);
      color: #ffffff;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4), 0 0 14px rgba(56, 189, 248, 0.2);
    }
    .imp-btn.active {
      background: rgba(2, 132, 199, 0.28);
      border-color: #38bdf8;
      color: #38bdf8;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
    }

    /* Botón Ícono Redondo */
    .imp-btn-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.10);
      color: #cbd5e1;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .imp-btn-icon:hover {
      background: rgba(255, 255, 255, 0.14);
      color: #38bdf8;
      border-color: rgba(56, 189, 248, 0.45);
      transform: scale(1.05);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
    }
    .imp-btn-icon.active {
      color: #38bdf8;
      border-color: #38bdf8;
      background: rgba(14, 165, 233, 0.25);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
    }

    /* Mini Tarjetas de Métricas en el Detalle */
    .metric-glass-pill {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 8px 12px;
      transition: border-color 0.2s;
    }
    .metric-glass-pill:hover {
      border-color: rgba(56, 189, 248, 0.3);
    }
  </style>
</head>
<body class="h-screen w-screen relative overflow-hidden">

  <!-- 3D WebGL Canvas Container -->
  <div id="canvas-container" class="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"></div>

  <!-- Cuadro Superior Izquierdo Oficial: UNCo CURZAS Sede Central Viedma -->
  <aside class="absolute top-5 left-5 z-10 max-w-[370px] pointer-events-auto">
    <div class="pro-glass-card beam-top p-5 text-slate-100">
      
      <!-- Encabezado Institucional -->
      <div class="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
        <div class="space-y-1">
          <div class="pro-badge glow-cyan">
            <span class="pro-pulse-dot"></span> UNIVERSIDAD NACIONAL DEL COMAHUE
          </div>
          <h1 class="text-lg font-black tracking-tight text-white uppercase mt-1 leading-tight">
            CURZAS — Sede Central
          </h1>
          <p class="text-[11px] font-semibold text-slate-400">
            Red Territorial de Nodos • Res. CD N° 196/2022
          </p>
        </div>
        <span class="skill-badge-shine shrink-0">
          13 Deptos.
        </span>
      </div>

      <!-- Referencias visuales de la cartografía oficial -->
      <div class="space-y-2.5 mt-3.5 text-xs font-medium text-slate-300">
        <div class="flex items-center gap-3">
          <span class="w-4 h-3 rounded-sm border border-slate-400/60 bg-[#EAE0D5] shadow-xs"></span>
          <span>13 Departamentos (Relieve 3D PBR)</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-3.5 h-3.5 rounded-full bg-[#0284c7] border-2 border-white/90 flex items-center justify-center text-[8px] text-white font-black shadow-sm" style="box-shadow: 0 0 10px #0284c7;">●</span>
          <span>10 Nodos Universitarios (Docencia Híbrida)</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-amber-400 border border-amber-200 flex items-center justify-center text-[9px] text-slate-900 font-black shadow-sm" style="box-shadow: 0 0 10px rgba(245, 158, 11, 0.6);">★</span>
          <span class="font-bold text-amber-300">Viedma: Sede Central y Capital Provincial</span>
        </div>
        <div class="flex items-center gap-3 pt-1.5 border-t border-white/10">
          <span class="w-4 h-0.5 border-t-2 border-dashed border-[#38bdf8]"></span>
          <span class="text-sky-300 font-semibold text-[11px]">Traza Troncal (Línea Sur RN 23 & Atlántica RN 3)</span>
        </div>
      </div>

      <!-- Controles y Acciones Rápidas -->
      <div class="grid grid-cols-2 gap-2.5 mt-4">
        <button id="btn-toggle-extrude" class="imp-btn active w-full">
          <i class="fa-solid fa-cube text-[#38bdf8]"></i>
          <span id="txt-extrude">Relieve 3D Activo</span>
        </button>
        <button id="btn-toggle-network" class="imp-btn active w-full">
          <i class="fa-solid fa-network-wired text-[#38bdf8]"></i>
          <span>Nodos & Enlaces</span>
        </button>
      </div>
    </div>
  </aside>

  <!-- Botones de Acción Rápida (Superior Derecha) -->
  <div class="absolute top-5 right-5 z-10 flex gap-2">
    <div class="pro-glass-card p-1.5 flex gap-1.5">
      <button id="btn-toggle-labels" title="Mostrar / Ocultar Rótulos de Nodos" class="imp-btn-icon active" data-tooltip="Rótulos">
        <i class="fa-solid fa-font"></i>
      </button>
      <button id="btn-toggle-rotation" title="Rotar Maqueta 360°" class="imp-btn-icon" data-tooltip="Rotación 360°">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <button id="btn-reset-cam" title="Vista Cenital / Reset de Cámara" class="imp-btn-icon" data-tooltip="Reset Cámara">
        <i class="fa-solid fa-compass"></i>
      </button>
    </div>
  </div>

  <!-- Tarjeta Informativa Flotante al Seleccionar Departamento (Abajo a la Izquierda) -->
  <div id="info-modal" class="absolute bottom-6 left-5 z-10 w-80 sm:w-96 pro-glass-card p-5 text-slate-100">
    <div class="flex items-start justify-between gap-3">
      <div class="space-y-1">
        <span id="card-badge" class="pro-badge glow-cyan">
          <span class="pro-pulse-dot"></span> Departamento Rionegrino
        </span>
        <h2 id="card-title" class="text-xl font-black text-white mt-1">General Roca</h2>
      </div>
      <div id="card-swatch" class="w-9 h-9 rounded-xl border border-white/20 shadow-inner shrink-0" style="background-color: #F5CAC2; box-shadow: 0 0 15px rgba(245, 202, 194, 0.35);"></div>
    </div>
    
    <div class="grid grid-cols-2 gap-2.5 mt-3.5">
      <div class="metric-glass-pill">
        <span class="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Cabecera</span>
        <span id="card-capital" class="font-bold text-white text-sm">General Roca</span>
      </div>
      <div class="metric-glass-pill">
        <span class="text-[10px] text-sky-400 block uppercase font-bold tracking-wider">Nodos Activos</span>
        <span id="card-nodes" class="font-bold text-sky-300 text-sm">Gral. Roca</span>
      </div>
    </div>

    <p id="card-desc" class="text-xs text-slate-300 mt-3 leading-relaxed font-normal">
      Cuello norte característico de Río Negro. Corazón del Alto Valle, centro agroindustrial frutícola y mayor densidad poblacional.
    </p>

    <div class="mt-3.5 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2.5">
      <span class="flex items-center gap-1.5"><i class="fa-solid fa-hand-pointer text-[#38bdf8]"></i> Clic en departamento para enfocar</span>
      <span class="text-[#38bdf8] font-bold cursor-pointer hover:underline hover:text-white transition flex items-center gap-1" onclick="resetFocus()">Ver provincia completa ↗</span>
    </div>
  </div>

  <!-- Badge Inferior Derecho: Nodo Central Viedma -->
  <div class="absolute bottom-6 right-5 z-10 pro-glass-card p-4 max-w-xs hidden md:block border-l-2 border-l-amber-400">
    <div class="flex items-center gap-3.5">
      <div class="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center text-lg border border-amber-400/40 shadow-sm shrink-0" style="box-shadow: 0 0 15px rgba(245, 158, 11, 0.25);">
        ★
      </div>
      <div>
        <div class="text-[11px] font-black uppercase text-amber-200 tracking-wider">VIEDMA CURZAS (SEDE CENTRAL)</div>
        <div class="text-xs text-slate-300 font-medium">Costa Atlántica • 80.632 hab.</div>
        <div class="text-[10px] text-sky-400 font-bold mt-0.5">Nodo Troncal Costa y Línea Sur</div>
      </div>
    </div>
  </div>
`;

html = html.slice(0, headStart) + newHeadAndBody + html.slice(bodyScriptStart);

// 2. Also update JS event listeners to toggle the active classes
const oldListeners = `    document.getElementById('btn-toggle-extrude').addEventListener('click', () => {
      isExtruded = !isExtruded;
      Object.keys(departmentMeshes).forEach(id => {
        departmentMeshes[id].scale.y = isExtruded ? 1.0 : 0.08;
      });
      const txt = document.getElementById('txt-extrude');
      if (txt) txt.innerText = isExtruded ? "Relieve 3D Activo" : "Mapa Plano 2D";
    });

    document.getElementById('btn-toggle-network').addEventListener('click', () => {
      networkGroup.visible = !networkGroup.visible;
    });

    document.getElementById('btn-toggle-labels').addEventListener('click', () => {
      networkGroup.children.forEach(obj => {
        if (obj.isSprite) {
          obj.visible = !obj.visible;
        } else if (obj.children) {
          obj.children.forEach(c => {
            if (c.isSprite) c.visible = !c.visible;
          });
        }
      });
    });

    document.getElementById('btn-toggle-rotation').addEventListener('click', function() {
      autoRotate = !autoRotate;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.8;
      this.classList.toggle('text-[#0284c7]');
    });`;

const newListeners = `    document.getElementById('btn-toggle-extrude').addEventListener('click', function() {
      isExtruded = !isExtruded;
      Object.keys(departmentMeshes).forEach(id => {
        departmentMeshes[id].scale.y = isExtruded ? 1.0 : 0.08;
      });
      const txt = document.getElementById('txt-extrude');
      if (txt) txt.innerText = isExtruded ? "Relieve 3D Activo" : "Mapa Plano 2D";
      this.classList.toggle('active', isExtruded);
    });

    document.getElementById('btn-toggle-network').addEventListener('click', function() {
      networkGroup.visible = !networkGroup.visible;
      this.classList.toggle('active', networkGroup.visible);
    });

    document.getElementById('btn-toggle-labels').addEventListener('click', function() {
      const isVisible = networkGroup.children.some(obj => (obj.isSprite && obj.visible) || (obj.children && obj.children.some(c => c.isSprite && c.visible)));
      networkGroup.children.forEach(obj => {
        if (obj.isSprite) {
          obj.visible = !isVisible;
        } else if (obj.children) {
          obj.children.forEach(c => {
            if (c.isSprite) c.visible = !isVisible;
          });
        }
      });
      this.classList.toggle('active', !isVisible);
    });

    document.getElementById('btn-toggle-rotation').addEventListener('click', function() {
      autoRotate = !autoRotate;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.8;
      this.classList.toggle('active', autoRotate);
    });`;

// 3. Update pointer click badge update
const oldPointerBadge = `        if (meta.isCapital) {
          document.getElementById('card-badge').className = 'px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-amber-100 text-amber-900 border border-amber-300';
          document.getElementById('card-badge').innerText = 'Capital Provincial & CURZAS';
        } else {
          document.getElementById('card-badge').className = 'px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-sky-100 text-sky-900 border border-sky-200';
          document.getElementById('card-badge').innerText = 'Departamento Rionegrino';
        }`;

const newPointerBadge = `        if (meta.isCapital) {
          document.getElementById('card-badge').className = 'pro-badge glow-amber';
          document.getElementById('card-badge').innerHTML = '<span class="pro-pulse-dot"></span> Capital Provincial & CURZAS';
        } else {
          document.getElementById('card-badge').className = 'pro-badge glow-cyan';
          document.getElementById('card-badge').innerHTML = '<span class="pro-pulse-dot"></span> Departamento Rionegrino';
        }
        document.getElementById('card-swatch').style.boxShadow = '0 0 16px ' + meta.colorHex + '70';`;

function replaceNormalized(source, find, repl) {
  const normS = source.replace(/\\r\\n/g, '\\n');
  const normF = find.replace(/\\r\\n/g, '\\n');
  const normR = repl.replace(/\\r\\n/g, '\\n');
  if (!normS.includes(normF)) {
    console.error('NOT FOUND:\\n', normF);
    return source;
  }
  const res = normS.replace(normF, normR);
  return source.includes('\\r\\n') ? res.replace(/\\n/g, '\\r\\n') : res;
}

html = replaceNormalized(html, oldListeners, newListeners);
html = replaceNormalized(html, oldPointerBadge, newPointerBadge);

fs.writeFileSync('prueba_rionegro_3d.html', html, 'utf8');
console.log('prueba_rionegro_3d.html successfully upgraded with Frontend Embellecedor suite!');


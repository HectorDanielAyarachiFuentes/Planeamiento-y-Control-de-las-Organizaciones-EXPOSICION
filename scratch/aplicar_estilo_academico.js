const fs = require('fs');

let html = fs.readFileSync('prueba_rionegro_3d.html', 'utf8');

const headStart = html.indexOf('<head>');
const bodyScriptStart = html.indexOf('<script>');

const newHeadAndBody = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Río Negro 3D — Cartografía Oficial y Nodos Regionales (CURZAS • UNCo)</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Three.js + OrbitControls + SVGLoader + FontAwesome Icons -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/SVGLoader.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

    :root {
      --bg-academic: #f4f6f9;
      --paper-card: rgba(255, 255, 255, 0.96);
      --gold-main: #996515;
      --gold-light: #b48324;
      --gold-dim: rgba(180, 131, 36, 0.08);
      --gold-border: rgba(180, 131, 36, 0.35);
      --oxford-blue: #0f172a;
      --unco-blue: #0f2d59;
      --text-primary: #0f172a;
      --text-muted: #475569;
      --text-dim: #64748b;
      --card-border: rgba(203, 213, 225, 0.85);
      --card-shadow: 0 10px 28px -6px rgba(15, 23, 42, 0.08), 0 2px 5px rgba(0, 0, 0, 0.03);
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      overflow: hidden;
      user-select: none;
      background: radial-gradient(circle at 50% 36%, #ffffff 0%, #f4f6f9 55%, #e2e8f0 100%);
      color: var(--text-primary);
    }

    /* Tarjeta Editorial Académica */
    .academic-card {
      background: var(--paper-card);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      box-shadow: var(--card-shadow);
      transition: all 0.25s ease;
    }

    .academic-card.header-accent {
      border-top: 3px solid var(--gold-main);
    }

    .academic-card.footer-accent {
      border-left: 3px solid var(--gold-main);
    }

    /* Badges Académicos */
    .academic-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 9px;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .academic-badge.blue {
      background: rgba(15, 45, 89, 0.06);
      color: var(--unco-blue);
      border: 1px solid rgba(15, 45, 89, 0.22);
    }

    .academic-badge.gold {
      background: #fdfaf5;
      color: var(--gold-main);
      border: 1px solid var(--gold-border);
    }

    /* Botones Académicos Pulcros */
    .academic-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      padding: 7px 12px;
      border-radius: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: var(--oxford-blue);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    }

    .academic-btn:hover {
      background: #f8fafc;
      border-color: var(--gold-light);
      color: var(--gold-main);
      box-shadow: 0 2px 6px rgba(180, 131, 36, 0.15);
    }

    .academic-btn.active {
      background: var(--gold-dim);
      border-color: var(--gold-main);
      color: var(--gold-main);
      font-weight: 700;
    }

    /* Botón Ícono de Herramienta */
    .academic-icon-btn {
      width: 34px;
      height: 34px;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      color: #475569;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .academic-icon-btn:hover {
      background: #f8fafc;
      color: var(--gold-main);
      border-color: var(--gold-light);
    }

    .academic-icon-btn.active {
      background: var(--gold-dim);
      color: var(--gold-main);
      border-color: var(--gold-main);
    }
  </style>
</head>
<body class="h-screen w-screen relative overflow-hidden">

  <!-- 3D WebGL Canvas Container -->
  <div id="canvas-container" class="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"></div>

  <!-- Cuadro Superior Izquierdo: UNCo CURZAS Sede Central Viedma -->
  <aside class="absolute top-5 left-5 z-10 max-w-[370px] pointer-events-auto">
    <div class="academic-card header-accent p-4 text-slate-800">
      
      <!-- Encabezado Institucional -->
      <div class="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-200">
        <div>
          <div class="academic-badge blue">
            UNIVERSIDAD NACIONAL DEL COMAHUE
          </div>
          <h1 class="text-base font-bold tracking-normal text-[#0f172a] uppercase mt-1 leading-snug" style="font-family: 'Cinzel', serif;">
            CURZAS — Sede Central
          </h1>
          <p class="text-[11px] font-medium text-slate-500 mt-0.5">
            Red Territorial de Nodos • Res. CD N° 196/2022
          </p>
        </div>
        <span class="academic-badge gold shrink-0">
          13 Deptos.
        </span>
      </div>

      <!-- Referencias visuales de la cartografía oficial -->
      <div class="space-y-2 mt-3 text-xs font-normal text-slate-700">
        <div class="flex items-center gap-2.5">
          <span class="w-3.5 h-3 rounded-xs border border-slate-400 bg-[#EAE0D5] shadow-xs shrink-0"></span>
          <span>13 Departamentos (Relieve 3D PBR)</span>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="w-3.5 h-3.5 rounded-full bg-[#0f2d59] border-2 border-white flex items-center justify-center text-[8px] text-white font-black shadow-xs shrink-0">●</span>
          <span>10 Nodos Universitarios (Docencia Híbrida)</span>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-600 flex items-center justify-center text-[8px] text-amber-950 font-black shadow-xs shrink-0">★</span>
          <span class="font-bold text-[#996515]">Viedma: Sede Central y Capital Provincial</span>
        </div>
        <div class="flex items-center gap-2.5 pt-1.5 border-t border-slate-200">
          <span class="w-4 h-0.5 border-t-2 border-dashed border-[#0f2d59]"></span>
          <span class="text-[#0f2d59] font-medium text-[11px]">Traza Troncal (Línea Sur RN 23 & Costa Atlántica RN 3)</span>
        </div>
      </div>

      <!-- Controles y Acciones Rápidas -->
      <div class="grid grid-cols-2 gap-2 mt-3.5">
        <button id="btn-toggle-extrude" class="academic-btn active w-full">
          <i class="fa-solid fa-cube text-[#996515]"></i>
          <span id="txt-extrude">Relieve 3D Activo</span>
        </button>
        <button id="btn-toggle-network" class="academic-btn active w-full">
          <i class="fa-solid fa-network-wired text-[#996515]"></i>
          <span>Nodos & Enlaces</span>
        </button>
      </div>
    </div>
  </aside>

  <!-- Barra de Herramientas (Superior Derecha) -->
  <div class="absolute top-5 right-5 z-10 flex gap-1.5">
    <div class="academic-card p-1.5 flex gap-1">
      <button id="btn-toggle-labels" title="Mostrar / Ocultar Rótulos de Nodos" class="academic-icon-btn active">
        <i class="fa-solid fa-font"></i>
      </button>
      <button id="btn-toggle-rotation" title="Rotar Maqueta 360°" class="academic-icon-btn">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <button id="btn-reset-cam" title="Vista Cenital / Reset de Cámara" class="academic-icon-btn">
        <i class="fa-solid fa-compass"></i>
      </button>
    </div>
  </div>

  <!-- Tarjeta Informativa Flotante al Seleccionar Departamento (Abajo a la Izquierda) -->
  <div id="info-modal" class="absolute bottom-6 left-5 z-10 w-80 sm:w-96 academic-card p-4.5 text-slate-800">
    <div class="flex items-start justify-between gap-3">
      <div>
        <span id="card-badge" class="academic-badge blue">
          Departamento Rionegrino
        </span>
        <h2 id="card-title" class="text-lg font-bold text-[#0f172a] mt-1" style="font-family: 'Cinzel', serif;">General Roca</h2>
      </div>
      <div id="card-swatch" class="w-8 h-8 rounded-lg border border-slate-300 shadow-xs shrink-0" style="background-color: #F5CAC2;"></div>
    </div>
    
    <div class="grid grid-cols-2 gap-2 mt-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
      <div>
        <span class="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Cabecera</span>
        <span id="card-capital" class="font-bold text-[#0f172a] text-sm">General Roca</span>
      </div>
      <div>
        <span class="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Nodos Activos</span>
        <span id="card-nodes" class="font-bold text-[#0f2d59] text-sm">Gral. Roca</span>
      </div>
    </div>

    <p id="card-desc" class="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
      Cuello norte característico de Río Negro. Corazón del Alto Valle, centro agroindustrial frutícola y mayor densidad poblacional.
    </p>

    <div class="mt-3 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200 pt-2 font-medium">
      <span class="flex items-center gap-1.5"><i class="fa-solid fa-hand-pointer text-[#996515]"></i> Clic en departamento para enfocar</span>
      <span class="text-[#0f2d59] font-bold cursor-pointer hover:underline hover:text-[#996515] transition flex items-center gap-1" onclick="resetFocus()">Ver provincia completa ↗</span>
    </div>
  </div>

  <!-- Badge Inferior Derecho: Nodo Central Viedma -->
  <div class="absolute bottom-6 right-5 z-10 academic-card footer-accent p-3.5 max-w-xs hidden md:block">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-base border border-amber-300 shadow-xs shrink-0">
        ★
      </div>
      <div>
        <div class="text-[11px] font-bold uppercase text-[#0f172a] tracking-wider" style="font-family: 'Cinzel', serif;">VIEDMA CURZAS (SEDE CENTRAL)</div>
        <div class="text-xs text-slate-600 font-normal">Costa Atlántica • 80.632 hab.</div>
        <div class="text-[10px] text-[#0f2d59] font-semibold mt-0.5">Nodo Troncal Costa y Línea Sur</div>
      </div>
    </div>
  </div>
`;

html = html.slice(0, headStart) + newHeadAndBody + html.slice(bodyScriptStart);

// Update badge updates in onPointerClick
const oldPointerBadge = `        if (meta.isCapital) {
          document.getElementById('card-badge').className = 'pro-badge glow-amber';
          document.getElementById('card-badge').innerHTML = '<span class="pro-pulse-dot"></span> Capital Provincial & CURZAS';
        } else {
          document.getElementById('card-badge').className = 'pro-badge glow-cyan';
          document.getElementById('card-badge').innerHTML = '<span class="pro-pulse-dot"></span> Departamento Rionegrino';
        }
        document.getElementById('card-swatch').style.boxShadow = '0 0 16px ' + meta.colorHex + '70';`;

const newPointerBadge = `        if (meta.isCapital) {
          document.getElementById('card-badge').className = 'academic-badge gold';
          document.getElementById('card-badge').innerText = 'Capital Provincial & CURZAS';
        } else {
          document.getElementById('card-badge').className = 'academic-badge blue';
          document.getElementById('card-badge').innerText = 'Departamento Rionegrino';
        }
        document.getElementById('card-swatch').style.boxShadow = 'none';`;

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

html = replaceNormalized(html, oldPointerBadge, newPointerBadge);

fs.writeFileSync('prueba_rionegro_3d.html', html, 'utf8');
console.log('Successfully applied clean academic editorial theme to prueba_rionegro_3d.html!');


const fs = require('fs');

const depts = JSON.parse(fs.readFileSync('scratch/extracted_depts.json', 'utf8'));

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
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
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      overflow: hidden;
      user-select: none;
      background: radial-gradient(circle at 50% 40%, #e0f2fe 0%, #bae6fd 60%, #93c5fd 100%);
    }
    .legend-card {
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: 0 14px 35px -8px rgba(15, 23, 42, 0.12);
    }
    .pulse-glow {
      box-shadow: 0 0 15px rgba(2, 132, 199, 0.6);
    }
  </style>
</head>
<body class="h-screen w-screen relative overflow-hidden">

  <!-- 3D WebGL Canvas Container -->
  <div id="canvas-container" class="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"></div>

  <!-- Cuadro Superior Izquierdo Oficial: UNCo CURZAS Sede Central Viedma -->
  <aside class="absolute top-4 left-4 z-10 max-w-sm pointer-events-auto">
    <div class="legend-card rounded-2xl p-4.5 border-t-4 border-t-[#0284c7] shadow-2xl text-slate-800">
      <div class="flex items-center justify-between pb-2 border-b border-sky-200/80">
        <div>
          <div class="text-[10px] font-black uppercase tracking-wider text-[#0284c7]">Universidad Nacional del Comahue</div>
          <h1 class="text-xl font-black tracking-tight text-[#0f3460] uppercase mt-0.5">CURZAS — Sede Central</h1>
          <p class="text-xs font-semibold text-slate-500">Red Territorial de Nodos (Res. CD N° 196/2022)</p>
        </div>
        <span class="px-2.5 py-1 text-[11px] font-black rounded-full bg-sky-100 text-[#0f3460] border border-sky-300">
          13 Deptos.
        </span>
      </div>

      <!-- Referencias visuales de la cartografía oficial -->
      <div class="space-y-2 mt-3 text-xs font-semibold text-slate-700">
        <div class="flex items-center gap-2.5">
          <span class="w-4 h-3 rounded-sm border border-slate-400 bg-[#EAE0D5] shadow-xs"></span>
          <span>13 Departamentos (Vectorial PBR en Relieve)</span>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="w-3.5 h-3.5 rounded-full bg-[#0284c7] border-2 border-white flex items-center justify-center text-[8px] text-white font-black shadow-sm">●</span>
          <span>10 Nodos Universitarios (Docencia Híbrida)</span>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="w-4 h-4 rounded-full bg-amber-400 border-2 border-[#0f3460] flex items-center justify-center text-[8px] text-[#0f3460] font-black shadow-sm">★</span>
          <span class="font-extrabold text-[#0f3460]">Viedma: Sede Central CURZAS y Capital Provincial</span>
        </div>
        <div class="flex items-center gap-2.5 pt-1 border-t border-slate-200">
          <span class="w-4 h-0.5 border-t-2 border-dashed border-[#0284c7]"></span>
          <span class="text-sky-800 font-bold text-[11px]">Traza Troncal (Línea Sur RN 23 & Atlántica RN 3)</span>
        </div>
      </div>

      <!-- Controles y Métricas Rápidas -->
      <div class="grid grid-cols-2 gap-2 mt-3.5 text-xs font-bold">
        <button id="btn-toggle-extrude" class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center justify-center gap-1.5 shadow-xs border border-slate-300/70">
          <i class="fa-solid fa-cube text-[#0284c7]"></i>
          <span id="txt-extrude">Relieve 3D Activo</span>
        </button>
        <button id="btn-toggle-network" class="px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 transition flex items-center justify-center gap-1.5 border border-sky-300 shadow-xs">
          <i class="fa-solid fa-network-wired text-[#0284c7]"></i>
          <span>Nodos & Enlaces</span>
        </button>
      </div>
    </div>
  </aside>

  <!-- Botones de Acción Rápida (Superior Derecha) -->
  <div class="absolute top-4 right-4 z-10 flex gap-2">
    <div class="legend-card rounded-2xl p-1.5 flex gap-1 shadow-md text-slate-700">
      <button id="btn-toggle-labels" title="Mostrar/Ocultar Rótulos de Nodos" class="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-sky-50 hover:text-[#0284c7] transition">
        <i class="fa-solid fa-font"></i>
      </button>
      <button id="btn-toggle-rotation" title="Rotar Maqueta 360°" class="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-sky-50 hover:text-[#0284c7] transition">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <button id="btn-reset-cam" title="Vista Cenital / Reset" class="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-sky-50 hover:text-[#0284c7] transition">
        <i class="fa-solid fa-compass"></i>
      </button>
    </div>
  </div>

  <!-- Tarjeta Informativa Flotante al Seleccionar Departamento (Abajo a la Izquierda) -->
  <div id="info-modal" class="absolute bottom-6 left-4 z-10 w-80 sm:w-96 legend-card rounded-2xl p-4.5 shadow-2xl transition-all duration-300 border border-slate-200 text-slate-800">
    <div class="flex items-start justify-between">
      <div>
        <span id="card-badge" class="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-sky-100 text-sky-900 border border-sky-200">
          Departamento Rionegrino
        </span>
        <h2 id="card-title" class="text-xl font-black text-[#0f3460] mt-1">General Roca</h2>
      </div>
      <div id="card-swatch" class="w-8 h-8 rounded-xl border border-slate-300 shadow-inner" style="background-color: #F5CAC2;"></div>
    </div>
    
    <div class="grid grid-cols-2 gap-2 mt-3 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
      <div>
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Cabecera</span>
        <span id="card-capital" class="font-bold text-slate-800 text-sm">General Roca</span>
      </div>
      <div>
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Nodos Activos</span>
        <span id="card-nodes" class="font-bold text-[#0284c7] text-sm">Gral. Roca</span>
      </div>
    </div>

    <p id="card-desc" class="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
      Cuello norte característico de Río Negro. Corazón del Alto Valle, centro agroindustrial frutícola y mayor densidad poblacional.
    </p>

    <div class="mt-3 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80 pt-2 font-medium">
      <span><i class="fa-solid fa-hand-pointer text-[#0284c7] mr-1"></i> Clic en departamento para enfocar</span>
      <span class="text-[#0284c7] font-semibold cursor-pointer hover:underline" onclick="resetFocus()">Ver provincia completa</span>
    </div>
  </div>

  <!-- Badge Inferior Derecho: Nodo Central Viedma -->
  <div class="absolute bottom-6 right-4 z-10 legend-card rounded-2xl p-3.5 shadow-2xl max-w-xs border border-slate-200 hidden md:block">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-[#0f3460] text-amber-300 flex items-center justify-center text-lg border-2 border-amber-400 shadow-md">
        ★
      </div>
      <div>
        <div class="text-[11px] font-black uppercase text-[#0f3460] tracking-wide">VIEDMA CURZA (SEDE CENTRAL)</div>
        <div class="text-xs text-slate-600 font-medium">Costa Atlántica • 80.632 hab.</div>
        <div class="text-[10px] text-[#0284c7] font-bold mt-0.5">Nodo Troncal Costa y Línea Sur</div>
      </div>
    </div>
  </div>

  <script>
    /* =====================================================================
       DATOS OFICIALES DE LOS 13 DEPARTAMENTOS DE RÍO NEGRO
       Geometría vectorial idéntica a assets/red-territorial-nodos.svg
       ===================================================================== */
    const DEPARTAMENTOS_DATA = ${JSON.stringify(depts, null, 2)};

    /* =====================================================================
       NODOS DE LA RED UNIVERSITARIA (COORDENADAS EXACTAS DE LA LÁMINA SVG)
       ===================================================================== */
    const NODOS_SVG = [
      { id: "jacobacci", name: "Ing. Jacobacci", hab: "6.261 hab.", svgX: 450, svgY: 909, isHub: false },
      { id: "maquinchao", name: "Maquinchao", hab: "2.494 hab.", svgX: 635.7, svgY: 970.3, isHub: false },
      { id: "menucos", name: "Los Menucos", hab: "5.187 hab.", svgX: 720, svgY: 819, isHub: false },
      { id: "sierra_colorada", name: "Sierra Colorada", hab: "1.542 hab.", svgX: 814.3, svgY: 741.4, isHub: false },
      { id: "ramos_mexia", name: "Ramos Mexía", hab: "973 hab.", svgX: 970, svgY: 825, isHub: false },
      { id: "valcheta", name: "Valcheta", hab: "4.493 hab.", svgX: 1108.6, svgY: 770.7, isHub: false },
      { id: "sao", name: "SAO / Las Grutas", hab: "16.265 hab.", svgX: 1330.7, svgY: 783.6, isHub: true },
      { id: "sierra_grande", name: "Sierra Grande", hab: "7.404 hab.", svgX: 1189, svgY: 1057, isHub: false },
      { id: "conesa", name: "Gral. Conesa", hab: "7.123 hab.", svgX: 1356.7, svgY: 669.4, isHub: true },
      { id: "rio_colorado", name: "Río Colorado", hab: "13.828 hab.", svgX: 1507.1, svgY: 375.7, isHub: false },
      { id: "viedma", name: "VIEDMA CURZA", hab: "80.632 hab.", svgX: 1683.6, svgY: 825, isHub: true, isCentral: true }
    ];

    const ENLACES_SVG = [
      ["jacobacci", "maquinchao"],
      ["maquinchao", "menucos"],
      ["menucos", "sierra_colorada"],
      ["sierra_colorada", "ramos_mexia"],
      ["ramos_mexia", "valcheta"],
      ["valcheta", "sao"],
      ["sao", "sierra_grande"],
      ["sao", "conesa"],
      ["conesa", "rio_colorado"],
      ["conesa", "viedma"]
    ];

    /* =====================================================================
       CONFIGURACIÓN DE THREE.JS Y ESCENA 3D
       ===================================================================== */
    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(0, 520, 580);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI / 2.15;
    controls.minDistance = 150;
    controls.maxDistance = 1200;
    controls.target.set(0, 0, 0);

    // Iluminación cinemática suave para tonos pastel
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.88);
    scene.add(ambientLight);

    const sun = new THREE.DirectionalLight(0xfff8ee, 0.65);
    sun.position.set(300, 600, 250);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    const rim = new THREE.DirectionalLight(0xdbeafe, 0.45);
    rim.position.set(-350, 200, -200);
    scene.add(rim);

    // Grupo Maestro donde se monta toda la maqueta
    const mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // Parámetros de alineación cartográfica exacta
    const SCALE = 0.48;
    const CENTER_X = 890;
    const CENTER_Y = 660;

    function svgToWorld(svgX, svgY, height = 0) {
      return new THREE.Vector3(
        (svgX - CENTER_X) * SCALE,
        height,
        (svgY - CENTER_Y) * SCALE
      );
    }

    /* =====================================================================
       CONSTRUCCIÓN PROCEDIMENTAL DE LOS 13 DEPARTAMENTOS PBR EN 3D
       ===================================================================== */
    const interactiveMeshes = [];
    const departmentMeshes = {};
    let isExtruded = true;

    const extrudeSettings = {
      steps: 1,
      depth: 14,
      bevelEnabled: true,
      bevelThickness: 2.2,
      bevelSize: 1.5,
      bevelSegments: 2,
      curveSegments: 8
    };

    DEPARTAMENTOS_DATA.forEach(dept => {
      // Parsear la cadena 'd' del SVG mediante SVGLoader.createShapes
      const fakeNode = {
        getAttribute: (a) => a === 'd' ? dept.d : null,
        hasAttribute: (a) => a === 'd'
      };

      // Instancia de SVGLoader para procesar el path vectorial
      const dummyLoader = new THREE.SVGLoader();
      const pathObj = dummyLoader.parsePathNode(fakeNode);
      const shapes = THREE.SVGLoader.createShapes(pathObj);

      shapes.forEach(shape => {
        const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // 1. Aplicar la traslación de grupo original del SVG
        geom.translate(112.92857, 24.923532, 0);

        // 2. Centrar en el origen XZ
        geom.translate(-CENTER_X, -CENTER_Y, 0);

        // 3. Escalar e invertir Y para respetar orientación norte-sur
        geom.scale(SCALE, -SCALE, 1);

        // 4. Orientar horizontalmente en el plano XZ (+Y hacia el cielo)
        geom.rotateX(-Math.PI / 2);
        geom.computeVertexNormals();

        const colorObj = new THREE.Color(dept.colorHex);
        const mat = new THREE.MeshStandardMaterial({
          color: colorObj,
          roughness: 0.35,
          metalness: 0.08,
          side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = {
          id: dept.id,
          meta: dept,
          baseColor: colorObj.getHex(),
          currentLift: 0
        };

        // Aristas nítidas para delimitar fronteras departamentales
        const edgesGeom = new THREE.EdgesGeometry(geom, 28);
        const edgesMat = new THREE.LineBasicMaterial({
          color: 0x475569,
          transparent: true,
          opacity: 0.65
        });
        const wire = new THREE.LineSegments(edgesGeom, edgesMat);
        mesh.add(wire);

        mapGroup.add(mesh);
        interactiveMeshes.push(mesh);
        departmentMeshes[dept.id] = mesh;
      });
    });

    /* =====================================================================
       TOPOLOGÍA DE RED, ENLACES Y BALIZAS DE LOS 10 NODOS CURZAS
       ===================================================================== */
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    const nodePosMap = {};

    // 1. Mapeo de posiciones 3D exactas
    NODOS_SVG.forEach(n => {
      nodePosMap[n.id] = svgToWorld(n.svgX, n.svgY, 17);
    });

    // 2. Trazado de Enlaces Discontinuos (Troncales RN 23 y RN 3)
    ENLACES_SVG.forEach(([fromId, toId]) => {
      const p1 = nodePosMap[fromId];
      const p2 = nodePosMap[toId];
      if (!p1 || !p2) return;

      const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const lineMat = new THREE.LineDashedMaterial({
        color: 0x0284c7,
        dashSize: 7,
        gapSize: 5,
        linewidth: 2.2
      });
      const line = new THREE.Line(lineGeo, lineMat);
      line.computeLineDistances();
      networkGroup.add(line);
    });

    // Helper de Textura en Alta Definición para Rótulos Flotantes
    function createTextBadge(title, subtitle, isCentral = false) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 140;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = isCentral ? '#0f2d59' : '#ffffff';
      ctx.beginPath();
      ctx.roundRect(16, 12, 480, 116, 22);
      ctx.fill();

      ctx.lineWidth = isCentral ? 4 : 3;
      ctx.strokeStyle = isCentral ? '#f59e0b' : '#0284c7';
      ctx.stroke();

      ctx.font = \`\${isCentral ? '900' : 'bold'} 32px 'Plus Jakarta Sans', sans-serif\`;
      ctx.fillStyle = isCentral ? '#ffffff' : '#0f3b7d';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(title, 256, 52);

      if (subtitle) {
        ctx.font = "600 22px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = isCentral ? '#fbbf24' : '#0284c7';
        ctx.fillText(subtitle, 256, 92);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    }

    // 3. Montaje de Balizas Isométricas y Rótulos HUD
    NODOS_SVG.forEach(n => {
      const pos = nodePosMap[n.id];
      const nodeObj = new THREE.Group();
      nodeObj.position.copy(pos);

      // Baliza / Mástil
      const poleGeo = new THREE.CylinderGeometry(1.2, 1.8, 12, 16);
      const poleMat = new THREE.MeshStandardMaterial({
        color: n.isCentral ? 0xc89632 : 0x0284c7,
        metalness: 0.6,
        roughness: 0.25
      });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 6;
      nodeObj.add(pole);

      // Esfera Faro Luminiscente
      const beaconGeo = new THREE.SphereGeometry(3.5, 24, 24);
      const beaconMat = new THREE.MeshStandardMaterial({
        color: n.isCentral ? 0xf59e0b : 0x38bdf8,
        emissive: n.isCentral ? 0xf59e0b : 0x0284c7,
        emissiveIntensity: 0.85,
        roughness: 0.2
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = 13.5;
      nodeObj.add(beacon);

      // Halo Pulsante en el suelo
      const ringGeo = new THREE.RingGeometry(4.5, 7.5, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: n.isCentral ? 0xf59e0b : 0x0284c7,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.5;
      nodeObj.add(ring);

      // Sprite de Texto
      const badgeTex = createTextBadge(n.name, n.hab, n.isCentral);
      const spriteMat = new THREE.SpriteMaterial({ map: badgeTex, depthTest: false });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(65, 18, 1);
      sprite.position.y = 28;
      nodeObj.add(sprite);

      networkGroup.add(nodeObj);
    });

    // 4. Paquetes de Datos Pulsantes (Simulación de Fibra Óptica)
    const pulses = [];
    ENLACES_SVG.forEach(([fromId, toId], idx) => {
      const pulseGeo = new THREE.SphereGeometry(2.0, 16, 16);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      pulse.userData = { edgeIndex: idx, progress: Math.random() };
      networkGroup.add(pulse);
      pulses.push(pulse);
    });

    /* =====================================================================
       INTERACCIÓN: RAYCASTING, HIGHLIGHT Y SELECCIÓN DE DEPARTAMENTO
       ===================================================================== */
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredMesh = null;

    function onPointerMove(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes, false);

      if (intersects.length > 0) {
        const topMesh = intersects[0].object;
        if (hoveredMesh !== topMesh) {
          if (hoveredMesh) resetMeshHighlight(hoveredMesh);
          hoveredMesh = topMesh;
          highlightMesh(hoveredMesh);
          container.style.cursor = 'pointer';
        }
      } else {
        if (hoveredMesh) {
          resetMeshHighlight(hoveredMesh);
          hoveredMesh = null;
          container.style.cursor = 'grab';
        }
      }
    }

    function highlightMesh(m) {
      m.material.emissive.setHex(0x0284c7);
      m.material.emissiveIntensity = 0.35;
      m.position.y = 6;
    }

    function resetMeshHighlight(m) {
      m.material.emissive.setHex(0x000000);
      m.material.emissiveIntensity = 0;
      m.position.y = 0;
    }

    function onPointerClick(e) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes, false);

      if (intersects.length > 0) {
        const meta = intersects[0].object.userData.meta;

        document.getElementById('card-title').innerText = meta.name;
        document.getElementById('card-capital').innerText = meta.cabecera;
        document.getElementById('card-nodes').innerText = meta.nodes.join(', ');
        document.getElementById('card-desc').innerText = meta.desc;
        document.getElementById('card-swatch').style.backgroundColor = meta.colorHex;

        if (meta.isCapital) {
          document.getElementById('card-badge').className = 'px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-amber-100 text-amber-900 border border-amber-300';
          document.getElementById('card-badge').innerText = 'Capital Provincial & CURZAS';
        } else {
          document.getElementById('card-badge').className = 'px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-sky-100 text-sky-900 border border-sky-200';
          document.getElementById('card-badge').innerText = 'Departamento Rionegrino';
        }
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onPointerClick);

    /* =====================================================================
       CONTROLES DE LA INTERFAZ DE USUARIO
       ===================================================================== */
    let autoRotate = false;

    document.getElementById('btn-toggle-extrude').addEventListener('click', () => {
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
    });

    document.getElementById('btn-reset-cam').addEventListener('click', () => {
      resetFocus();
    });

    function resetFocus() {
      controls.reset();
      camera.position.set(0, 520, 580);
      controls.target.set(0, 0, 0);
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    /* =====================================================================
       LOOP DE ANIMACIÓN CONTINUO
       ===================================================================== */
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Mover los pulsos de datos a lo largo de los enlaces
      pulses.forEach(p => {
        p.userData.progress += delta * 0.38;
        if (p.userData.progress > 1.0) p.userData.progress = 0;

        const edge = ENLACES_SVG[p.userData.edgeIndex];
        const pA = nodePosMap[edge[0]];
        const pB = nodePosMap[edge[1]];

        if (pA && pB) {
          const t = p.userData.progress;
          p.position.x = pA.x + (pB.x - pA.x) * t;
          p.position.z = pA.z + (pB.z - pA.z) * t;
          p.position.y = pA.y + Math.sin(t * Math.PI) * 8.0;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    }

    window.onload = function() {
      animate();
    };
  </script>
</body>
</html>
`;

fs.writeFileSync('prueba_rionegro_3d.html', htmlContent, 'utf8');
fs.writeFileSync('assets/prueba_rionegro_3d.html', htmlContent, 'utf8');
console.log('Successfully generated clean, perfect prueba_rionegro_3d.html and backup in assets/!');


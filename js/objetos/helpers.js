/**
 * =============================================================================
 * OBJETOS 3D — HELPERS Y GENERADORES GEOMÉTRICOS COMUNES (ALTA RESOLUCIÓN)
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Provee funciones para pedestales de museo de granito biselado, columnas dóricas
 * acanaladas, aros armilares de latón y cartelas vectoriales nítidas en 3D (Retina 2X).
 */

window.Scene3DHelpers = {
  /** Pedestal clásico de museo de doble nivel para soportar cada escultura con máxima distinción */
  createMuseumPlinth(parent, radius = 1.45, height = 0.22, posY = -1.22) {
    const plinth = new THREE.Group();

    // 1. Zócalo inferior de granito negro pulido con chaflán
    const baseGeo = new THREE.CylinderGeometry(radius * 1.06, radius * 1.12, height * 0.65, 48);
    const baseMesh = new THREE.Mesh(baseGeo, this.graniteMat(0x0f172a, 0.35, 0.25));
    baseMesh.position.y = posY;
    baseMesh.receiveShadow = true;
    plinth.add(baseMesh);

    // 2. Meseta superior de mármol marfil o granito noble
    const topGeo = new THREE.CylinderGeometry(radius, radius * 1.04, height * 0.55, 48);
    const topMesh = new THREE.Mesh(topGeo, this.marbleMat(0xf8fafc, 0.25));
    topMesh.position.y = posY + height * 0.55;
    topMesh.receiveShadow = true;
    plinth.add(topMesh);

    // 3. Moldura de latón dorado labrado entre ambos niveles
    const rimGeo = new THREE.TorusGeometry(radius * 1.02, 0.018, 16, 64);
    const rimMesh = new THREE.Mesh(rimGeo, this.brassMat(0xd4af37));
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = posY + height * 0.28;
    plinth.add(rimMesh);

    // 4. Disco de sombra de contacto suave bajo el pedestal
    const shadowGeo = new THREE.CircleGeometry(radius * 1.25, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x050811,
      transparent: true,
      opacity: 0.32,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = posY - height * 0.33;
    plinth.add(shadowMesh);

    parent.add(plinth);
    return plinth;
  },

  /** Aro astronómico / armilar de latón */
  createBrassArmillaryRing(radius, tube = 0.018, parent) {
    const geo = new THREE.TorusGeometry(radius, tube, 24, 96);
    const mesh = new THREE.Mesh(geo, this.brassMat());
    if (parent) {
      parent.add(mesh);
    }
    return mesh;
  },

  /**
   * Generador de Columnas Clásicas Acanaladas con Capitel y Base Moldurada
   * Convierte cilindros planos en piezas de arquitectura monumental
   */
  createClassicalColumn(height = 1.0, radius = 0.1, hexColor = 0xd4af37, isFluted = true) {
    const colGroup = new THREE.Group();

    // 1. Base Ática (Plinto cuadrado + Toro de latón + Escocia)
    const plinthBox = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 2.8, radius * 0.6, radius * 2.8),
      this.graniteMat(0x1e293b)
    );
    plinthBox.position.y = -height / 2 + radius * 0.3;
    colGroup.add(plinthBox);

    const torusBase = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.25, radius * 0.25, 16, 32),
      this.brassMat(hexColor)
    );
    torusBase.rotation.x = Math.PI / 2;
    torusBase.position.y = -height / 2 + radius * 0.75;
    colGroup.add(torusBase);

    // 2. Fuste de la Columna (Mármol blanco veteado)
    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.92, radius, height * 0.8, 32),
      this.marbleMat(0xfdfbf7)
    );
    shaft.position.y = 0;
    colGroup.add(shaft);

    // 2b. Caneluras / Acanalado clásico en relieve si corresponde
    if (isFluted) {
      const flutesCount = 12;
      for (let f = 0; f < flutesCount; f++) {
        const a = (f * 2 * Math.PI) / flutesCount;
        const fx = Math.cos(a) * (radius * 0.96);
        const fz = Math.sin(a) * (radius * 0.96);
        const fluteLine = new THREE.Mesh(
          new THREE.CylinderGeometry(0.005, 0.005, height * 0.76, 8),
          this.brassMat(0xd4af37)
        );
        fluteLine.position.set(fx, 0, fz);
        colGroup.add(fluteLine);
      }
    }

    // 3. Capitel Dórico/Jónico (Equino + Ábaco con collarino de latón)
    const collar = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.05, radius * 0.15, 16, 32),
      this.brassMat(hexColor)
    );
    collar.rotation.x = Math.PI / 2;
    collar.position.y = height / 2 - radius * 0.6;
    colGroup.add(collar);

    const capitalEchinus = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 1.5, radius * 0.95, radius * 0.5, 32),
      this.brassMat(hexColor)
    );
    capitalEchinus.position.y = height / 2 - radius * 0.35;
    colGroup.add(capitalEchinus);

    const capitalAbacus = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 3.0, radius * 0.45, radius * 3.0),
      this.marbleMat(0xffffff)
    );
    capitalAbacus.position.y = height / 2;
    colGroup.add(capitalAbacus);

    return colGroup;
  },

  /**
   * Cartela Minimalista de Alta Precisión en 3D (Estilo Arquitectónico Suizo / Apple)
   * Panel translúcido limpio, tipografía nítida Inter/SF-Pro, filete sutil de 1px y cero elementos recargados.
   */
  createLabelSprite(title, subtitle = "", color = "#0a2540", isMain = false, customScale = null, opts = {}) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Super-muestreo Retina 3X para nitidez vectorial hiper-definida
    const retina = 3;

    // Medición tipográfica limpia y generosa para legibilidad inmediata
    const fontTitleSize = isMain ? 42 : 34;
    const fontSubSize = isMain ? 24 : 20;

    ctx.font = `700 ${fontTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    const titleWidth = ctx.measureText(title).width;

    ctx.font = `600 ${fontSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    const subWidth = subtitle ? ctx.measureText(subtitle).width : 0;

    const maxTextWidth = Math.max(titleWidth, subWidth);
    const logicalWidth = Math.max(isMain ? 680 : 520, Math.round(maxTextWidth + 80));
    const logicalHeight = subtitle ? (isMain ? 152 : 128) : (isMain ? 96 : 80);

    canvas.width = logicalWidth * retina;
    canvas.height = logicalHeight * retina;
    ctx.scale(retina, retina);

    const pad = 6;
    const w = logicalWidth - pad * 2;
    const h = logicalHeight - pad * 2;
    const r = 8; // Esquinas redondeadas minimalistas

    // 1. Sombra sutil de elevación suave
    ctx.shadowColor = "rgba(15, 23, 42, 0.12)";
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 4;

    // 2. Fondo de cristal blanco puro con alta opacidad (Máximo contraste de lectura)
    ctx.fillStyle = opts?.bg || "rgba(255, 255, 255, 0.98)";

    ctx.beginPath();
    ctx.moveTo(pad + r, pad);
    ctx.lineTo(pad + w - r, pad);
    ctx.quadraticCurveTo(pad + w, pad, pad + w, pad + r);
    ctx.lineTo(pad + w, pad + h - r);
    ctx.quadraticCurveTo(pad + w, pad + h, pad + w - r, pad + h);
    ctx.lineTo(pad + r, pad + h);
    ctx.quadraticCurveTo(pad, pad + h, pad, pad + h - r);
    ctx.lineTo(pad, pad + r);
    ctx.quadraticCurveTo(pad, pad, pad + r, pad);
    ctx.closePath();
    ctx.fill();

    // 3. Borde fino y definido de 1.5px
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = opts?.borderColor || (isMain ? "rgba(197, 160, 89, 0.65)" : "rgba(15, 23, 42, 0.20)");
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 4. Tipografía: Título de alto impacto con auto-fit de seguridad
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    let actualTitleSize = fontTitleSize;
    ctx.font = `700 ${actualTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    while (ctx.measureText(title).width > (w - 24) && actualTitleSize > 18) {
      actualTitleSize -= 1;
      ctx.font = `700 ${actualTitleSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    }

    const titleY = subtitle ? (pad + h * 0.38) : (logicalHeight / 2);
    ctx.fillStyle = color;
    ctx.fillText(title, logicalWidth / 2, titleY);

    // 5. Tipografía: Subtítulo con peso 600 y contraste oscuro
    if (subtitle) {
      // Línea divisoria sutil
      const lineY = pad + h * 0.58;
      ctx.strokeStyle = "rgba(15, 23, 42, 0.10)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad + 24, lineY);
      ctx.lineTo(pad + w - 24, lineY);
      ctx.stroke();

      let actualSubSize = fontSubSize;
      ctx.font = `600 ${actualSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      while (ctx.measureText(subtitle).width > (w - 24) && actualSubSize > 14) {
        actualSubSize -= 1;
        ctx.font = `600 ${actualSubSize}px 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      }

      ctx.fillStyle = opts?.subColor || "#1e293b";
      ctx.fillText(subtitle, logicalWidth / 2, pad + h * 0.78);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 16;

    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: opts?.depthTest !== undefined ? opts.depthTest : true,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.renderOrder = opts?.renderOrder || (isMain ? 150 : 120);

    const aspect = logicalWidth / logicalHeight;
    if (customScale) {
      sprite.scale.set(customScale.x, customScale.x / aspect, 1);
    } else {
      const targetWidth = isMain ? 1.65 : 1.25;
      sprite.scale.set(targetWidth, targetWidth / aspect, 1);
    }

    return sprite;
  },

  /**
   * Generador de Atril / Peana de Museo Físico 3D para Cartelas
   * Ancla la cartela al suelo o a un peldaño con una elegante varilla de latón torneado y base biselada
   */
  createMuseumPlaqueStand(title, subtitle = "", color = "#0f2d59", standHeight = 0.35, customScale = null) {
    const standGroup = new THREE.Group();

    // 1. Zócalo circular inferior de latón dorado
    const baseGeo = new THREE.CylinderGeometry(0.08, 0.10, 0.03, 24);
    const baseMesh = new THREE.Mesh(baseGeo, this.brassMat(0xd4af37));
    baseMesh.position.y = 0.015;
    standGroup.add(baseMesh);

    // 2. Varilla / Pie de apoyo torneado
    const rodGeo = new THREE.CylinderGeometry(0.014, 0.014, standHeight, 16);
    const rodMesh = new THREE.Mesh(rodGeo, this.brassMat(0xd4af37));
    rodMesh.position.y = standHeight / 2;
    standGroup.add(rodMesh);

    // 3. Cabezal articulado con rótula
    const jointGeo = new THREE.SphereGeometry(0.024, 16, 16);
    const jointMesh = new THREE.Mesh(jointGeo, this.brassMat(0xffd700));
    jointMesh.position.y = standHeight;
    standGroup.add(jointMesh);

    // 4. Cartela Sprite montada sobre la rótula
    const plaqueSprite = this.createLabelSprite(title, subtitle, color, false, customScale, { depthTest: false, renderOrder: 130 });
    plaqueSprite.position.y = standHeight + 0.16;
    standGroup.add(plaqueSprite);

    return standGroup;
  },

  /**
   * Generador de Dial Graduado de Precisión (Estilo Instrumento de Laboratorio / Anatomy)
   * Bisel de latón maquinado, escala angular con marcas milimétricas, aguja de alta definición y centro enjoyado.
   */
  createGraduatedDial(radius = 0.22, opts = {}) {
    const dialGroup = new THREE.Group();
    const isDark = opts.theme !== "light";

    // 1. Bisel exterior de latón maquinado
    const bezel = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 1.08, radius * 1.14, 0.035, 48),
      this.brassMat(opts.brassColor || 0xd4af37, 0.22, 0.92)
    );
    dialGroup.add(bezel);

    const rimTorus = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 1.05, 0.012, 16, 48),
      this.goldMat(0xffd700)
    );
    rimTorus.rotation.x = Math.PI / 2;
    rimTorus.position.y = 0.016;
    dialGroup.add(rimTorus);

    // 2. Esfera con textura procedural de marcas radiales (Ticks & Cifras)
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = isDark ? "#09121f" : "#fbf9f4";
    ctx.beginPath();
    ctx.arc(256, 256, 250, 0, Math.PI * 2);
    ctx.fill();

    // Círculos guía concéntricos
    ctx.strokeStyle = isDark ? "rgba(212, 175, 55, 0.45)" : "rgba(180, 131, 36, 0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(256, 256, 235, 0, Math.PI * 2);
    ctx.arc(256, 256, 195, 0, Math.PI * 2);
    ctx.stroke();

    // 60 divisiones angulares con marcas mayores cada 5 y numerales cada 15
    const totalTicks = opts.divisions || 60;
    for (let i = 0; i < totalTicks; i++) {
      const angle = (i * 2 * Math.PI) / totalTicks - Math.PI / 2;
      const isMajor = i % 5 === 0;
      const isCard = i % 15 === 0;
      const len = isCard ? 28 : (isMajor ? 18 : 10);
      const rOuter = 233;
      const rInner = rOuter - len;

      ctx.strokeStyle = isCard ? "#ffd700" : (isMajor ? (isDark ? "#e2e8f0" : "#0f2d59") : (isDark ? "#64748b" : "#94a3b8"));
      ctx.lineWidth = isCard ? 3 : (isMajor ? 2 : 1.2);

      ctx.beginPath();
      ctx.moveTo(256 + Math.cos(angle) * rOuter, 256 + Math.sin(angle) * rOuter);
      ctx.lineTo(256 + Math.cos(angle) * rInner, 256 + Math.sin(angle) * rInner);
      ctx.stroke();

      // Cifras en las marcas cardinales
      if (isMajor && (opts.showNumbers !== false)) {
        const val = opts.isPercentage ? `${Math.round((i / totalTicks) * 100)}` : `${Math.round((i * 360) / totalTicks)}°`;
        const rText = 175;
        const tx = 256 + Math.cos(angle) * rText;
        const ty = 256 + Math.sin(angle) * rText;
        ctx.fillStyle = isCard ? "#ffd700" : (isDark ? "#94a3b8" : "#475569");
        ctx.font = "bold 18px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(val, tx, ty);
      }
    }

    // Título central grabado en la esfera
    if (opts.title) {
      ctx.fillStyle = isDark ? "#ffd700" : "#0f2d59";
      ctx.font = "bold 22px 'Cinzel', serif, Georgia";
      ctx.textAlign = "center";
      ctx.fillText(opts.title, 256, 310);
      if (opts.sub) {
        ctx.fillStyle = isDark ? "#94a3b8" : "#64748b";
        ctx.font = "14px 'Inter', sans-serif";
        ctx.fillText(opts.sub, 256, 335);
      }
    }

    const faceTex = new THREE.CanvasTexture(canvas);
    const faceMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.98, radius * 0.98, 0.005, 48),
      new THREE.MeshStandardMaterial({
        map: faceTex,
        roughness: 0.35,
        metalness: isDark ? 0.25 : 0.05
      })
    );
    faceMesh.position.y = 0.019;
    dialGroup.add(faceMesh);

    // 3. Aguja indicadora de acero pavonado o latón pulido
    const needlePivot = new THREE.Group();
    needlePivot.position.y = 0.024;

    const needleBlade = new THREE.Mesh(
      new THREE.ConeGeometry(radius * 0.045, radius * 0.82, 4),
      this.brassMat(0xffd700, 0.15, 0.95)
    );
    needleBlade.rotation.x = Math.PI / 2;
    needleBlade.position.z = radius * 0.38;
    needlePivot.add(needleBlade);

    // Contrapeso de aguja
    const needleTail = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 0.06, 0.006, radius * 0.22),
      this.brassMat(0xd4af37)
    );
    needleTail.position.z = -radius * 0.12;
    needlePivot.add(needleTail);

    // Centro enjoyado / capuchón de latón
    const needleCap = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.12, radius * 0.14, 0.015, 24),
      this.goldMat(0xffd700)
    );
    needlePivot.add(needleCap);

    dialGroup.add(needlePivot);
    dialGroup.needle = needlePivot;

    return dialGroup;
  },

  /**
   * Generador de Placa Técnica Grabada de Alta Precisión (Estilo Patente / Maquinado)
   * Chapa de latón biselada con tornillos ranurados en las esquinas y tipografía grabada.
   */
  createEngravedPlaque(w = 0.85, h = 0.45, title = "", subtitle = "", details = [], opts = {}) {
    const plaqueGroup = new THREE.Group();

    // 1. Base metálica biselada
    const basePlate = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, 0.025),
      this.brassMat(opts.brassColor || 0xd4af37, 0.25, 0.9)
    );
    plaqueGroup.add(basePlate);

    // 2. Chapa frontal esmaltada o cepillada con texto grabado en alta resolución (2048px)
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = Math.round(2048 * (h / w));
    const ctx = canvas.getContext("2d");

    const isDark = opts.theme !== "light";
    ctx.fillStyle = isDark ? "#091220" : "#f8f6f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Doble filete perimetral dorado grabado
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 6;
    ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);
    ctx.lineWidth = 2;
    ctx.strokeRect(64, 64, canvas.width - 128, canvas.height - 128);

    // Área útil segura para textos (evita cualquier recorte en los bordes)
    const maxTextWidth = canvas.width - 180;

    // Función de ajuste dinámico de tipografía (garantiza cero recorte)
    function fitText(txt, maxW, targetSz, minSz, fontMaker) {
      let sz = targetSz;
      ctx.font = fontMaker(sz);
      while (ctx.measureText(txt).width > maxW && sz > minSz) {
        sz -= 1;
        ctx.font = fontMaker(sz);
      }
      return sz;
    }

    // Textos de Alta Resolución
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Título Principal (Nombre del Tesista / Título de Escultura)
    ctx.fillStyle = isDark ? "#ffd700" : "#0f2d59";
    const baseTitleSize = Math.round(canvas.height * 0.16);
    const titleSize = fitText(title, maxTextWidth, baseTitleSize, 28, (s) => `bold ${s}px 'Cinzel', serif, Georgia`);
    ctx.font = `bold ${titleSize}px 'Cinzel', serif, Georgia`;
    ctx.fillText(title, canvas.width / 2, canvas.height * 0.32);

    if (subtitle) {
      ctx.fillStyle = isDark ? "#cbd5e1" : "#475569";
      const baseSubSize = Math.round(canvas.height * 0.095);
      const subSize = fitText(subtitle, maxTextWidth, baseSubSize, 20, (s) => `600 ${s}px 'Inter', -apple-system, sans-serif`);
      ctx.font = `600 ${subSize}px 'Inter', -apple-system, sans-serif`;
      ctx.fillText(subtitle, canvas.width / 2, canvas.height * 0.50);
    }

    if (details && details.length > 0) {
      ctx.strokeStyle = "rgba(212, 175, 55, 0.45)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.12, canvas.height * 0.62);
      ctx.lineTo(canvas.width * 0.88, canvas.height * 0.62);
      ctx.stroke();

      ctx.fillStyle = isDark ? "#94a3b8" : "#334155";
      const detailText = details.join("  •  ");
      const baseDetSize = Math.round(canvas.height * 0.08);
      const detSize = fitText(detailText, maxTextWidth, baseDetSize, 18, (s) => `500 ${s}px 'Inter', -apple-system, sans-serif`);
      ctx.font = `500 ${detSize}px 'Inter', -apple-system, sans-serif`;
      ctx.fillText(detailText, canvas.width / 2, canvas.height * 0.78);
    }

    const plaqueTex = new THREE.CanvasTexture(canvas);
    plaqueTex.generateMipmaps = true;
    plaqueTex.minFilter = THREE.LinearMipmapLinearFilter;
    plaqueTex.magFilter = THREE.LinearFilter;
    plaqueTex.anisotropy = 16;
    const faceMesh = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.95, h * 0.94, 0.008),
      new THREE.MeshStandardMaterial({
        map: plaqueTex,
        roughness: 0.32,
        metalness: isDark ? 0.3 : 0.1
      })
    );
    faceMesh.position.z = 0.014;
    plaqueGroup.add(faceMesh);

    // 3. 4 Tornillos ranurados de latón en las esquinas
    const sx = w * 0.44;
    const sy = h * 0.41;
    const screwCoords = [[-sx, -sy], [sx, -sy], [-sx, sy], [sx, sy]];
    screwCoords.forEach(([cx, cy]) => {
      const screw = new THREE.Mesh(
        new THREE.CylinderGeometry(0.016, 0.016, 0.006, 16),
        this.goldMat(0xffd700)
      );
      screw.rotation.x = Math.PI / 2;
      screw.position.set(cx, cy, 0.016);
      plaqueGroup.add(screw);

      // Ranura del tornillo
      const slot = new THREE.Mesh(
        new THREE.BoxGeometry(0.024, 0.004, 0.002),
        this.graniteMat(0x0f172a)
      );
      slot.position.set(cx, cy, 0.020);
      plaqueGroup.add(slot);
    });

    return plaqueGroup;
  },

  /**
   * Generador de Chasis Maquinado de Madera Noble con Cantoneras de Latón (Chassis)
   */
  createMachinedChassis(w = 1.0, h = 0.14, d = 0.8, opts = {}) {
    const chassis = new THREE.Group();

    // Cuerpo principal de madera noble o granito
    const woodMat = new THREE.MeshStandardMaterial({
      color: opts.color || 0x361605, // Caoba oscura profunda
      roughness: 0.28,
      metalness: 0.06
    });

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      woodMat
    );
    body.castShadow = true;
    body.receiveShadow = true;
    chassis.add(body);

    // Cantoneras de latón en las 8 esquinas
    const cx = w / 2 - 0.04;
    const cy = h / 2 - 0.02;
    const cz = d / 2 - 0.04;

    const corners = [
      [-cx, -cy, -cz], [cx, -cy, -cz], [-cx, -cy, cz], [cx, -cy, cz],
      [-cx, cy, -cz], [cx, cy, -cz], [-cx, cy, cz], [cx, cy, cz]
    ];

    corners.forEach(([x, y, z]) => {
      const corner = new THREE.Mesh(
        new THREE.BoxGeometry(0.09, 0.045, 0.09),
        this.brassMat(0xd4af37)
      );
      corner.position.set(x, y, z);
      chassis.add(corner);
    });

    // Moldura perimetral superior de latón
    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(w * 1.01, 0.018, d * 1.01),
      this.brassMat(0xd4af37)
    );
    trim.position.y = h / 2 + 0.005;
    chassis.add(trim);

    return chassis;
  },

  /**
   * Generador del Escudo Académico de la UNCo en Alto Relieve Monumental
   */
  createAcademicSeal(radius = 0.14, opts = {}) {
    const sealGroup = new THREE.Group();

    // Disco de base
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, 0.022, 32),
      this.brassMat(opts.brassColor || 0xd4af37)
    );
    sealGroup.add(base);

    // Aro exterior de laurel plano sobre el disco
    const wreath = new THREE.Mesh(
      new THREE.TorusGeometry(radius * 0.96, radius * 0.12, 16, 48),
      this.goldMat(0xffd700)
    );
    wreath.rotation.x = Math.PI / 2;
    wreath.position.y = 0.012;
    sealGroup.add(wreath);

    // Sol central de 8 rayos
    const sunCore = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.40, radius * 0.40, 0.03, 16),
      this.goldMat(0xffd700)
    );
    sunCore.position.y = 0.016;
    sealGroup.add(sunCore);

    return sealGroup;
  },

  /**
   * Generador de Atractor Caótico de Lorenz 3D (PES de Carlos Matus)
   * Modela la órbita perpetua de viabilidad política, institucional y económica
   */
  createLorenzAttractor(scale = 0.032, count = 2400, colorHexA = 0xfbbf24, colorHexB = 0x38bdf8) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colA = new THREE.Color(colorHexA);
    const colB = new THREE.Color(colorHexB);

    let lx = 0.1, ly = 0.0, lz = 0.0;
    const sigma = 10.0, rho = 28.0, beta = 8.0 / 3.0;
    const dt = 0.009;

    for (let i = 0; i < count; i++) {
      const dx = sigma * (ly - lx);
      const dy = lx * (rho - lz) - ly;
      const dz = lx * ly - beta * lz;
      lx += dx * dt;
      ly += dy * dt;
      lz += dz * dt;

      positions[i * 3]     = lx * scale;
      positions[i * 3 + 1] = (lz - 25) * scale;
      positions[i * 3 + 2] = ly * scale;

      const mix = Math.min(Math.max(lz / 50.0, 0), 1);
      const c = colA.clone().lerp(colB, mix);
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });

    const line = new THREE.Line(geo, mat);
    line.userData = { isLorenz: true };
    return line;
  },

  /**
   * Generador de Campo de Flujo Vectorial de Partículas Cuánticas
   * Modela los flujos reticulares de gobernanza y territorio
   */
  createVectorFlowParticles(count = 280, radius = 0.9, height = 1.2, colorHexA = 0xfbbf24, colorHexB = 0x38bdf8) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const vels = [];
    const colA = new THREE.Color(colorHexA);
    const colB = new THREE.Color(colorHexB);

    for (let i = 0; i < count; i++) {
      const r = (0.35 + Math.random() * 0.65) * radius;
      const th = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * height;

      positions[i * 3]     = Math.cos(th) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(th) * r;

      vels.push({
        r: r,
        th: th,
        y: y,
        speed: 0.4 + Math.random() * 0.6,
        ySpeed: (Math.random() - 0.5) * 0.15
      });

      const c = (i % 2 === 0) ? colA : colB;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.028,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pts = new THREE.Points(geo, mat);
    pts.userData = { vels: vels, isFlowField: true };
    return pts;
  },

  /**
   * Actualizador de animación para campos de flujo de partículas
   */
  updateVectorFlow(pts, t) {
    if (!pts || !pts.userData || !pts.userData.vels) return;
    const pos = pts.geometry.attributes.position.array;
    const vels = pts.userData.vels;
    const count = vels.length;

    for (let i = 0; i < count; i++) {
      const v = vels[i];
      v.th += 0.012 * v.speed;
      v.y += Math.sin(t * 1.6 + i) * 0.002;

      pos[i * 3]     = Math.cos(v.th) * v.r;
      pos[i * 3 + 1] = v.y;
      pos[i * 3 + 2] = Math.sin(v.th) * v.r;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  },

  /**
   * Dibuja un Harmonógrafo / Rosa Polar de Lissajous directamente en un CanvasRenderingContext2D
   */
  drawLissajousHarmonograph(ctx, cx, cy, radius = 160, freq = 3, strokeStyle = "rgba(212, 175, 55, 0.45)") {
    ctx.save();
    ctx.translate(cx, cy);

    // 1. Rosa Polar de Base
    ctx.strokeStyle = "rgba(212, 175, 55, 0.22)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    const rosePetals = freq * 2;
    for (let theta = 0; theta <= Math.PI * 2; theta += 0.02) {
      const r = radius * Math.cos(rosePetals * theta * 0.5);
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      if (theta === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 2. Curva compuesta con decaimiento armónico
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    const steps = 3000;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 16;
      const decay = Math.exp(-0.00035 * t);
      const x = Math.sin(t * freq) * (radius * 0.92) * decay + Math.cos(t * (freq + 1.01)) * (radius * 0.22);
      const y = Math.sin(t * 2.0 + Math.PI / 4) * (radius * 0.92) * decay + Math.sin(t * 4.02) * (radius * 0.18);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.restore();
  }
};

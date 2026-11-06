window.Presentation3D_Objects["anim_01"] = {
  build(engine, g) {
    // 1. Basamento monumental de museo
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    // 2. Pedestal secundario octogonal de granito negro y molduras de latón
    const pedestalBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.44, 0.10, 16),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    pedestalBase.position.y = -1.06;
    pedestalBase.receiveShadow = true;
    g.add(pedestalBase);

    const footRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.37, 0.022, 16, 48),
      engine.brassMat()
    );
    footRing.rotation.x = Math.PI / 2;
    footRing.position.y = -1.01;
    g.add(footRing);

    const footCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.28, 0.04, 32),
      engine.brassMat()
    );
    footCap.position.y = -0.98;
    g.add(footCap);

    // 3. Columna clásica acanalada en mármol de Carrara marfil
    const columnShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.105, 0.135, 0.90, 32),
      engine.marbleMat(0xf8fafc, 0.25)
    );
    columnShaft.position.y = -0.52;
    columnShaft.castShadow = true;
    columnShaft.receiveShadow = true;
    g.add(columnShaft);

    // Anillos / collares decorativos de latón en el fuste
    const collarY = [-0.88, -0.52, -0.16];
    collarY.forEach((cy, idx) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.128 - idx * 0.007, 0.012, 16, 32),
        engine.brassMat()
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = cy;
      g.add(ring);
    });

    // 4. Capitel clásico y ábaco de montaje
    const capitalFlared = new THREE.Mesh(
      new THREE.CylinderGeometry(0.21, 0.11, 0.08, 32),
      engine.brassMat(0xd4af37)
    );
    capitalFlared.position.y = -0.03;
    g.add(capitalFlared);

    const capitalAbacus = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.04, 0.28),
      engine.graniteMat(0x0f172a)
    );
    capitalAbacus.position.y = 0.03;
    g.add(capitalAbacus);

    // 5. Cuna mecánica de latón maquinado y horquilla de muñones (Yoke)
    const yokeGroup = new THREE.Group();
    yokeGroup.position.y = 0.05;

    const yokeBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.66, 0.05, 0.14),
      engine.brassMat()
    );
    yokeBeam.position.y = 0.025;
    yokeGroup.add(yokeBeam);

    const yokeLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.30, 0.12),
      engine.brassMat()
    );
    yokeLeft.position.set(-0.30, 0.15, 0);
    yokeGroup.add(yokeLeft);

    const yokeRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.30, 0.12),
      engine.brassMat()
    );
    yokeRight.position.set(0.30, 0.15, 0);
    yokeGroup.add(yokeRight);

    // Muñones de pivote y volantes estriados de bloqueo a cada lado
    [-0.34, 0.34].forEach(px => {
      const pin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.045, 0.05, 24),
        engine.goldMat()
      );
      pin.rotation.z = Math.PI / 2;
      pin.position.set(px, 0.24, 0);
      yokeGroup.add(pin);

      const knob = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.025, 24),
        engine.brassMat()
      );
      knob.rotation.z = Math.PI / 2;
      knob.position.set(px + (px > 0 ? 0.025 : -0.025), 0.24, 0);
      yokeGroup.add(knob);
    });

    // Cuadrante graduado de inclinación (sector angular a 32°)
    const sectorArc = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.012, 12, 32, Math.PI / 2),
      engine.brassMat()
    );
    sectorArc.position.set(-0.31, 0.24, 0);
    sectorArc.rotation.y = Math.PI / 2;
    sectorArc.rotation.z = Math.PI * 0.15;
    yokeGroup.add(sectorArc);

    g.add(yokeGroup);

    // 6. Atril basculante de caoba noble pulida con ángulo de lectura a 32°
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, 0.29, 0);
    deskGroup.rotation.x = (32 * Math.PI) / 180;

    const mahoganyMat = new THREE.MeshStandardMaterial({
      color: 0x361605, // Caoba profunda oscura pulida
      roughness: 0.26,
      metalness: 0.06
    });

    // Tablero principal de caoba biselado
    const deskPlate = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.045, 1.04),
      mahoganyMat
    );
    deskPlate.castShadow = true;
    deskPlate.receiveShadow = true;
    deskGroup.add(deskPlate);

    // Moldura perimetral dorada
    const deskTrim = new THREE.Mesh(
      new THREE.BoxGeometry(1.40, 0.048, 0.02),
      engine.brassMat(0xd4af37)
    );
    deskTrim.position.set(0, 0, -0.52);
    deskGroup.add(deskTrim);

    // 4 Cantoneras de latón labrado en las esquinas del atril
    const cornerOffsets = [
      [-0.67, -0.50], [0.67, -0.50],
      [-0.67, 0.50], [0.67, 0.50]
    ];
    cornerOffsets.forEach(([cx, cz]) => {
      const corner = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.05, 0.10),
        engine.brassMat(0xd4af37)
      );
      corner.position.set(cx, 0.005, cz);
      deskGroup.add(corner);
    });

    // Reborde de retención inferior de caoba con chapa frontal de latón
    const ledgeMahogany = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.09, 0.06),
      mahoganyMat
    );
    ledgeMahogany.position.set(0, 0.05, 0.49);
    deskGroup.add(ledgeMahogany);

    const ledgeBrass = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.065, 0.015),
      engine.brassMat(0xd4af37)
    );
    ledgeBrass.position.set(0, 0.05, 0.525);
    deskGroup.add(ledgeBrass);

    // Medallón central de latón en el reborde inferior
    const ledgeSeal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.02, 24),
      engine.goldMat()
    );
    ledgeSeal.rotation.x = Math.PI / 2;
    ledgeSeal.position.set(0, 0.05, 0.535);
    deskGroup.add(ledgeSeal);

    // Pinzas sujetapáginas articuladas de latón (page-clamps) a izquierda y derecha
    [-0.44, 0.44].forEach(px => {
      const clampFinger = new THREE.Mesh(
        new THREE.BoxGeometry(0.035, 0.075, 0.14),
        engine.brassMat()
      );
      clampFinger.position.set(px, 0.08, 0.46);
      clampFinger.rotation.x = -0.25;
      deskGroup.add(clampFinger);
    });

    // 7. El Gran Tomo Abierto de Tesina (UNCo - CURZAS)
    const bookGroup = new THREE.Group();
    bookGroup.position.set(0, 0.055, 0.02);

    // Tapas duras en cuero azul marino UNCo con filetes dorados
    const coverTex = getTFGCoverTexture();
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x091a32,
      map: coverTex,
      roughness: 0.35,
      metalness: 0.15
    });

    const leftCover = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.028, 0.84), coverMat);
    leftCover.position.set(-0.295, 0.018, 0);
    leftCover.rotation.z = -0.06;
    leftCover.castShadow = true;
    bookGroup.add(leftCover);

    const rightCover = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.028, 0.84), coverMat);
    rightCover.position.set(0.295, 0.018, 0);
    rightCover.rotation.z = 0.06;
    rightCover.castShadow = true;
    bookGroup.add(rightCover);

    // Lomo curvado inferior de cuero azul
    const spineGeom = new THREE.CylinderGeometry(0.055, 0.055, 0.84, 16, 1, false, Math.PI, Math.PI);
    const spineMesh = new THREE.Mesh(spineGeom, coverMat);
    spineMesh.rotation.x = Math.PI / 2;
    spineMesh.rotation.y = Math.PI / 2;
    spineMesh.position.set(0, -0.01, 0);
    bookGroup.add(spineMesh);

    // 5 Nervaduras de lomo doradas (embossed gold ribs)
    const ribZ = [-0.32, -0.16, 0, 0.16, 0.32];
    ribZ.forEach(rz => {
      const rib = new THREE.Mesh(
        new THREE.TorusGeometry(0.058, 0.009, 12, 16, Math.PI),
        engine.goldMat()
      );
      rib.rotation.x = Math.PI / 2;
      rib.rotation.y = Math.PI / 2;
      rib.position.set(0, -0.01, rz);
      bookGroup.add(rib);
    });

    // 8. Bloque de hojas con corte dorado brillante (Gilded edges)
    const goldEdgeMat = engine.goldMat();
    const leftBlockBase = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.04, 0.78), goldEdgeMat);
    leftBlockBase.position.set(-0.28, 0.042, 0);
    leftBlockBase.rotation.z = -0.05;
    bookGroup.add(leftBlockBase);

    const rightBlockBase = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.04, 0.78), goldEdgeMat);
    rightBlockBase.position.set(0.28, 0.042, 0);
    rightBlockBase.rotation.z = 0.05;
    bookGroup.add(rightBlockBase);

    // 9. Hojas superiores abiertas con textura pergamino de alta definición
    const leftPageTex = getTFGLeftPageTexture();
    const leftPageMat = new THREE.MeshStandardMaterial({
      map: leftPageTex,
      roughness: 0.55,
      metalness: 0.02
    });
    const leftPage = new THREE.Mesh(new THREE.BoxGeometry(0.49, 0.015, 0.76), leftPageMat);
    leftPage.position.set(-0.275, 0.068, 0);
    leftPage.rotation.z = -0.045;
    bookGroup.add(leftPage);

    const rightPageTex = getTFGRightPageTexture();
    const rightPageMat = new THREE.MeshStandardMaterial({
      map: rightPageTex,
      roughness: 0.55,
      metalness: 0.02
    });
    const rightPage = new THREE.Mesh(new THREE.BoxGeometry(0.49, 0.015, 0.76), rightPageMat);
    rightPage.position.set(0.275, 0.068, 0);
    rightPage.rotation.z = 0.045;
    bookGroup.add(rightPage);

    // 10. Medallón central en alto relieve con el escudo de la UNCo
    const sealGroup = new THREE.Group();
    sealGroup.position.set(0, 0.10, -0.22);
    sealGroup.rotation.x = Math.PI / 2;

    const sealBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.022, 32),
      engine.brassMat(0xffd700)
    );
    sealGroup.add(sealBase);

    const sealRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.015, 16, 32),
      engine.goldMat()
    );
    sealRim.position.y = 0.012;
    sealGroup.add(sealRim);

    const sealSun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.025, 8),
      engine.goldMat()
    );
    sealSun.position.y = 0.014;
    sealGroup.add(sealSun);

    bookGroup.add(sealGroup);

    // 11. Cinta ceremonial de seda dorada y azul señaladora (Bookmark Ribbon)
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Seda azafrán dorada
      roughness: 0.32,
      metalness: 0.22
    });

    // Tramo superior sobre la página derecha
    const ribbonTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.045, 0.008, 0.82),
      ribbonMat
    );
    ribbonTop.position.set(0.035, 0.082, 0.12);
    ribbonTop.rotation.y = -0.05;
    bookGroup.add(ribbonTop);

    // Cola colgante de la cinta que cae por delante del reborde
    const ribbonTail = new THREE.Mesh(
      new THREE.BoxGeometry(0.045, 0.28, 0.008),
      ribbonMat
    );
    ribbonTail.position.set(0.055, -0.06, 0.54);
    ribbonTail.rotation.x = 0.18;
    deskGroup.add(ribbonTail);

    deskGroup.add(bookGroup);
    g.add(deskGroup);

    // 12. Cartela flotante del título oficial en 3D
    const label = engine.createLabelSprite(
      "PROYECTO INTEGRAL DE TFG",
      "CURZAS — Universidad Nacional del Comahue",
      "#0f2d59",
      true
    );
    label.position.set(0, 1.08, 0);
    g.add(label);

    engine.anim01_desk = deskGroup;
    engine.anim01_ribbonTail = ribbonTail;
  },

  animate(engine, t) {
    // Oscilación suave de suspensión (breathing effect)
    if (engine.anim01_desk) {
      engine.anim01_desk.position.y = 0.29 + Math.sin(t * 1.4) * 0.006;
    }
    // Ondulación de la cinta de seda ceremonial
    if (engine.anim01_ribbonTail) {
      engine.anim01_ribbonTail.rotation.z = Math.sin(t * 1.8) * 0.06;
      engine.anim01_ribbonTail.rotation.x = 0.18 + Math.cos(t * 1.5) * 0.04;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 2. PRESENTACIÓN DEL TESISTA: Credencial Profesional & Monolito de Carrera
// ──────────────────────────────────────────────────────────────────────────

window.Presentation3D_Objects["anim_02"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.35, 0.22, -1.22);

    // 1. Basamento monumental de granito negro y caoba noble
    const pedestalBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.42, 0.10, 16),
      engine.graniteMat(0x0f172a, 0.35, 0.25)
    );
    pedestalBase.position.y = -1.06;
    pedestalBase.receiveShadow = true;
    g.add(pedestalBase);

    const footRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.35, 0.02, 16, 48),
      engine.brassMat()
    );
    footRing.rotation.x = Math.PI / 2;
    footRing.position.y = -1.01;
    g.add(footRing);

    // Fuste de caoba oscura con cantoneras de latón
    const shaftChassis = engine.createMachinedChassis(0.44, 0.78, 0.28, { color: 0x2e1204 });
    shaftChassis.position.y = -0.58;
    g.add(shaftChassis);

    // Capitel de latón maquinado
    const capitalMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.05, 0.32),
      engine.brassMat(0xd4af37)
    );
    capitalMesh.position.y = -0.16;
    g.add(capitalMesh);

    // 2. Credencial académica flotante en marco de latón pulido y cristal esmerilado
    const cardGroup = new THREE.Group();
    cardGroup.position.set(0, 0.30, 0);

    // Marco exterior con cantoneras doradas
    const frameMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 1.32, 0.045),
      engine.brassMat(0xd4af37)
    );
    frameMesh.castShadow = true;
    cardGroup.add(frameMesh);

    // 4 Cantoneras angulares en las esquinas de la credencial
    const cx = 0.43;
    const cy = 0.63;
    [[-cx, -cy], [cx, -cy], [-cx, cy], [cx, cy]].forEach(([x, y]) => {
      const corner = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.10, 0.055),
        engine.goldMat(0xffd700)
      );
      corner.position.set(x, y, 0);
      cardGroup.add(corner);
    });

    // Cuerpo de vidrio templado translúcido esmerilado
    const cardGlass = new THREE.Mesh(
      new THREE.BoxGeometry(0.86, 1.26, 0.035),
      engine.glassMat(0xf8fafc, { opacity: 0.85, roughness: 0.08 })
    );
    cardGroup.add(cardGlass);

    // 3. Escudo oficial UNCo en alto relieve superior
    const seal = engine.createAcademicSeal(0.10);
    seal.position.set(0, 0.44, 0.028);
    cardGroup.add(seal);

    // 4. Placa técnica grabada con datos de identidad del tesista
    const infoPlaque = engine.createEngravedPlaque(
      0.80,
      0.44,
      "HÉCTOR DANIEL AYARACHI FUENTES",
      "Tec. Sup. en RRHH • Legajo 8252 • DNI 35.492.138",
      ["CURZAS", "UNIVERSIDAD NACIONAL DEL COMAHUE", "TFG 2026/2027"],
      { theme: "dark" }
    );
    infoPlaque.position.set(0, 0.08, 0.024);
    cardGroup.add(infoPlaque);

    // 5. Dial graduado de progreso académico hacia la Licenciatura (100% completado / En Defensa)
    const progDial = engine.createGraduatedDial(0.14, {
      divisions: 40,
      isPercentage: true,
      title: "100%",
      sub: "DEFENSA",
      theme: "dark"
    });
    progDial.rotation.x = Math.PI / 2;
    progDial.position.set(0, -0.38, 0.035);
    if (progDial.needle) {
      progDial.needle.rotation.y = -Math.PI * 0.75;
    }
    cardGroup.add(progDial);

    g.add(cardGroup);

    // Cartela flotante superior
    const label = engine.createLabelSprite(
      "HÉCTOR DANIEL AYARACHI FUENTES",
      "Tec. Sup. en RRHH • Legajo 8252 • CURZAS-UNCo",
      "#0f2d59",
      true
    );
    label.position.set(0, 1.20, 0);
    g.add(label);

    engine.anim02_card = cardGroup;
    engine.anim02_dial = progDial;
  },

  animate(engine, t) {
    if (engine.anim02_card) {
      engine.anim02_card.position.y = 0.30 + Math.sin(t * 1.5) * 0.015;
      engine.anim02_card.rotation.y = Math.sin(t * 0.7) * 0.04;
    }
    if (engine.anim02_dial && engine.anim02_dial.needle) {
      engine.anim02_dial.needle.rotation.y = -Math.PI * 0.75 + Math.sin(t * 2.0) * 0.05;
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 3. ESQUEMA SIA TP N° 2: Podio Cúbico de los 4 Cimientos del TFG
// ──────────────────────────────────────────────────────────────────────────

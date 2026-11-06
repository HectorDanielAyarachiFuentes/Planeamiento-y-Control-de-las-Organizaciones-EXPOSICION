window.Presentation3D_Objects["anim_03"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const foundationGroup = new THREE.Group();
    foundationGroup.position.set(0, -0.15, 0);

    const items = [
      { x: -0.42, z: -0.42, h: 0.58, title: "I. CARÁTULA", sub: "Marco Institucional" },
      { x: 0.42, z: -0.42, h: 0.78, title: "II. TEMA", sub: "Área y Contexto" },
      { x: -0.42, z: 0.42, h: 0.98, title: "III. PROBLEMA", sub: "Desnaturalización" },
      { x: 0.42, z: 0.42, h: 1.18, title: "IV. OBJETIVOS", sub: "General y Específicos" }
    ];

    engine.anim03_blocks = [];

    items.forEach((item, idx) => {
      const blockGroup = new THREE.Group();
      blockGroup.position.set(item.x, -0.85 + item.h / 2, item.z);

      // Zócalo inferior de caoba noble
      const baseChassis = engine.createMachinedChassis(0.66, 0.08, 0.66, { color: 0x2e1204 });
      baseChassis.position.y = -item.h / 2 + 0.04;
      blockGroup.add(baseChassis);

      // Fuste cúbico de mármol Carrara veteado
      const blockMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.60, item.h - 0.12, 0.60),
        engine.marbleMat(0xfdfbf7, 0.28)
      );
      blockMesh.position.y = 0.02;
      blockMesh.castShadow = true;
      blockMesh.receiveShadow = true;
      blockGroup.add(blockMesh);

      // Chapa técnica grabada en la cara frontal del cimiento
      const plaque = engine.createEngravedPlaque(
        0.52,
        0.20,
        item.title,
        item.sub,
        [`CIMIENTO ${idx + 1}/4`],
        { theme: "dark" }
      );
      plaque.position.set(0, 0.02, 0.31);
      blockGroup.add(plaque);

      // Tapa superior de latón moldurado
      const topCap = new THREE.Mesh(
        new THREE.BoxGeometry(0.62, 0.035, 0.62),
        engine.brassMat(0xd4af37)
      );
      topCap.position.y = item.h / 2 - 0.02;
      blockGroup.add(topCap);

      // Artefacto distintivo de ingeniería sobre la cima
      if (idx === 0) {
        // I: Brújula náutica / compás y pergamino
        const compass = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 0.03, 24),
          engine.goldMat(0xffd700)
        );
        compass.position.y = item.h / 2 + 0.03;
        blockGroup.add(compass);
      } else if (idx === 1) {
        // II: Aro armilar astronómico
        const ring = engine.createBrassArmillaryRing(0.14, 0.012);
        ring.position.y = item.h / 2 + 0.15;
        ring.rotation.x = Math.PI / 4;
        blockGroup.add(ring);
      } else if (idx === 2) {
        // III: Dial de precisión de diagnóstico
        const dial = engine.createGraduatedDial(0.11, {
          title: "SIA",
          sub: "360°",
          divisions: 30,
          theme: "light"
        });
        dial.position.y = item.h / 2 + 0.03;
        blockGroup.add(dial);
      } else if (idx === 3) {
        // IV: Obelisco prismático de cristal óptico con luz cenital
        const prism = new THREE.Mesh(
          new THREE.ConeGeometry(0.12, 0.32, 4),
          engine.glassMat(0x38bdf8, { roughness: 0.05, opacity: 0.85 })
        );
        prism.position.y = item.h / 2 + 0.18;
        blockGroup.add(prism);

        const beaconLight = new THREE.PointLight(0x38bdf8, 0.8, 1.2);
        beaconLight.position.y = item.h / 2 + 0.18;
        blockGroup.add(beaconLight);
      }

      // Etiqueta flotante
      const label = engine.createLabelSprite(item.title, item.sub, "#0f2d59", false);
      label.position.set(0, item.h / 2 + 0.28, 0);
      blockGroup.add(label);

      foundationGroup.add(blockGroup);
      engine.anim03_blocks.push(blockGroup);
    });

    g.add(foundationGroup);
  },

  animate(engine, t) {
    if (engine.anim03_blocks) {
      engine.anim03_blocks.forEach((b, i) => {
        b.position.y = -0.85 + (0.58 + i * 0.20) / 2 + Math.sin(t * 1.6 + i * 0.9) * 0.008;
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 4. ESQUEMA SIA SEGUNDA PARTE: Díptico Epistemológico (Teoría y Antecedentes)
// ──────────────────────────────────────────────────────────────────────────

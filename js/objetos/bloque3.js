/**
 * =============================================================================
 * OBJETOS 3D — BLOQUE III: ESCULTURAS 11 A 15
 * Presentación de Tesina • CURZAS - UNCo
 * =============================================================================
 * Representación visual concreta y pertinente del Eje I (Accountability) y Eje II (Poligobernanza):
 * 11. anim_11: La Tríada del Accountability Democrático (O'Donnell: Vertical, Horizontal y Social)
 * 12. anim_12: La Matriz Policéntrica de Poligobernanza (Red Multiactoral y Recursos Interdependientes)
 * 13. anim_13: El Gran Estado Plataforma & Bus de Interoperabilidad (IOP y Servicios Digitales)
 * 14. anim_14: El Archipiélago de Silos Informáticos Aislados (Cuello de Botella y Doble Carga)
 * 15. anim_15: El Tramado Institucional Ad Hoc (Estructura Matricial Flexible de Enlace Territorial)
 */

window.Presentation3D_Objects = window.Presentation3D_Objects || {};

// ──────────────────────────────────────────────────────────────────────────
// 11. MECANISMOS DE RENDICIÓN DE CUENTAS (ACCOUNTABILITY)
//     (Tipologías de O'Donnell: Vertical Electoral, Horizontal Interorgánica y Social)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_11"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const accGroup = new THREE.Group();
    accGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble triangular de soporte
    const chassis = engine.createMachinedChassis(1.72, 0.10, 0.76, { color: 0x1e293b });
    chassis.position.y = -0.92;
    accGroup.add(chassis);

    // Tres Obeliscos / Balizas de los Tres Tipos de Accountability
    const pillars = [
      {
        x: -0.62,
        title: "ACCOUNTABILITY VERTICAL",
        sub: "Elecciones de Co-Gobierno • Voto",
        badge: "DEMOCRACIA INTERNA",
        col: 0x0284c7,
        icon: "urn"
      },
      {
        x: 0,
        title: "ACCOUNTABILITY HORIZONTAL",
        sub: "AGN • SIGEN • SPU • Auditoría Interna",
        badge: "CONTROL INTERORGÁNICO",
        col: 0xd4af37,
        icon: "scale"
      },
      {
        x: 0.62,
        title: "ACCOUNTABILITY SOCIAL",
        sub: "Transparencia Activa • Comunidad",
        badge: "CIUDADANÍA RIONEGRINA",
        col: 0x10b981,
        icon: "mirror"
      }
    ];

    engine.anim11_beacons = [];

    pillars.forEach((p, i) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(p.x, -0.35, 0);

      // Columna de mármol Carrara
      const col = engine.createClassicalColumn(0.92, 0.08, p.col, true);
      pGroup.add(col);

      // Prisma superior emisor de luz según tipología
      const beaconMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.09, 0.16, 6),
        new THREE.MeshStandardMaterial({
          color: p.col,
          emissive: p.col,
          emissiveIntensity: 0.65,
          roughness: 0.15,
          metalness: 0.7
        })
      );
      beaconMesh.position.y = 0.55;
      pGroup.add(beaconMesh);

      // Aro orbital de supervisión
      const ring = engine.createBrassArmillaryRing(0.16, 0.008);
      ring.position.y = 0.55;
      pGroup.add(ring);

      // Placa grabada al pie
      const plaque = engine.createEngravedPlaque(
        0.50,
        0.20,
        p.title,
        p.sub,
        [p.badge],
        { theme: "dark" }
      );
      plaque.position.set(0, -0.52, 0.38);
      pGroup.add(plaque);

      accGroup.add(pGroup);
      engine.anim11_beacons.push({ group: pGroup, ring, beacon: beaconMesh });
    });

    // Haz de enlace horizontal que une los tres pilares (Equilibrio de Poderes)
    const beamCurve = new THREE.LineCurve3(
      new THREE.Vector3(-0.62, 0.20, 0),
      new THREE.Vector3(0.62, 0.20, 0)
    );
    const beamTube = new THREE.Mesh(
      new THREE.TubeGeometry(beamCurve, 20, 0.012, 8, false),
      engine.brassMat(0xd4af37)
    );
    accGroup.add(beamTube);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "MECANISMOS DE RENDICIÓN DE CUENTAS (O'DONNELL)",
      "Accountability Vertical • Horizontal Interorgánico • Social",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(accGroup);
  },

  animate(engine, t) {
    if (engine.anim11_beacons) {
      engine.anim11_beacons.forEach((item, idx) => {
        if (item.ring) {
          item.ring.rotation.y = t * (0.8 + idx * 0.3);
          item.ring.rotation.x = Math.sin(t * 1.5 + idx) * 0.2;
        }
        if (item.beacon) {
          item.beacon.rotation.y = -t * 0.5;
          const p = 1.0 + Math.sin(t * 3 + idx) * 0.08;
          item.beacon.scale.set(p, p, p);
        }
      });
    }
    if (engine.anim11_flow && engine.updateVectorFlow) {
      engine.updateVectorFlow(engine.anim11_flow, t);
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 12. PARADIGMA DE LA POLIGOBERNANZA: Redes y Complejidad
//     (Superación del Enfoque Estatocéntrico Tradicional • Sociedad Red)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_12"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const polyGroup = new THREE.Group();
    polyGroup.position.set(0, -0.15, 0);

    // 6 Nodos Policéntricos Multiactorales de Gobernanza
    const nodes = [
      { name: "CURZAS (UNCo)", role: "Núcleo Universitario", col: 0xd4af37, x: 0, y: 0.10, z: 0 },
      { name: "MUNICIPIOS", role: "10 Nodos Territoriales", col: 0x0284c7, x: -0.65, y: -0.20, z: 0.30 },
      { name: "PROVINCIA R.N.", role: "Ministerios y DPA", col: 0x10b981, x: 0.65, y: -0.20, z: 0.30 },
      { name: "PRODUCTORES", role: "Pequeños Productores", col: 0xf59e0b, x: -0.55, y: 0.35, z: -0.35 },
      { name: "SINDICATOS", role: "APUNC / ADUNC", col: 0x8b5cf6, x: 0.55, y: 0.35, z: -0.35 },
      { name: "ORGANISMOS CyT", role: "INTA / CONICET / CNEA", col: 0xec4899, x: 0, y: -0.55, z: -0.45 }
    ];

    engine.anim12_nodes = [];
    engine.anim12_links = [];

    // Nodo central CURZAS destacado
    nodes.forEach((nd, i) => {
      const nGroup = new THREE.Group();
      nGroup.position.set(nd.x, nd.y, nd.z);

      const sphereGeo = new THREE.SphereGeometry(i === 0 ? 0.16 : 0.10, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: nd.col,
        emissive: nd.col,
        emissiveIntensity: i === 0 ? 0.6 : 0.4,
        roughness: 0.2,
        metalness: 0.7
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nGroup.add(sphere);

      // Aro orbital en cada actor
      const ring = engine.createBrassArmillaryRing(i === 0 ? 0.22 : 0.14, 0.008);
      nGroup.add(ring);

      // Cartela del actor de red
      const label = engine.createLabelSprite(nd.name, nd.role, "#0f2d59", false);
      label.position.set(0, i === 0 ? 0.26 : 0.18, 0);
      nGroup.add(label);

      polyGroup.add(nGroup);
      engine.anim12_nodes.push({ group: nGroup, ring, basePos: new THREE.Vector3(nd.x, nd.y, nd.z) });
    });

    // Malla de Enlaces de Tensión y Recursos Dinámicos entre los 6 nodos
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(nodes[i].x, nodes[i].y, nodes[i].z);
        const p2 = new THREE.Vector3(nodes[j].x, nodes[j].y, nodes[j].z);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const lineMat = new THREE.LineDashedMaterial({
          color: 0x38bdf8,
          dashSize: 0.05,
          gapSize: 0.03,
          transparent: true,
          opacity: i === 0 ? 0.75 : 0.40
        });
        const line = new THREE.Line(lineGeo, lineMat);
        line.computeLineDistances();
        polyGroup.add(line);

        // Pulso de flujo de información viajando por la red
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(0.012, 10, 10),
          new THREE.MeshBasicMaterial({ color: 0xfffad0 })
        );
        polyGroup.add(pulse);

        engine.anim12_links.push({ p1, p2, pulse, speed: 0.3 + ((i + j) % 5) * 0.1 });
      }
    }

    // Placa frontal grabada
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "PARADIGMA DE LA POLIGOBERNANZA",
      "Redes Multiactorales • Interdependencia de Recursos • Coordinación Policéntrica",
      ["RHODES • KOOIMAN • CHAVANCE"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    polyGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "POLIGOBERNANZA: COMPLEJIDAD Y REDES",
      "De la Jerarquía Vertical a la Interdependencia de Recursos",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(polyGroup);
  },

  animate(engine, t) {
    if (engine.anim12_nodes) {
      engine.anim12_nodes.forEach((nd, i) => {
        if (nd.ring) {
          nd.ring.rotation.y = t * 0.6 + i;
          nd.ring.rotation.x = Math.sin(t * 0.8 + i) * 0.3;
        }
        if (i > 0) {
          // Suave balanceo orgánico de los nodos en la red
          nd.group.position.y = nd.basePos.y + Math.sin(t * 2 + i) * 0.035;
        }
      });
    }

    if (engine.anim12_links) {
      engine.anim12_links.forEach((link, idx) => {
        const prog = (t * link.speed + idx * 0.15) % 1.0;
        link.pulse.position.lerpVectors(link.p1, link.p2, prog);
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 13. DESAFÍO 1: EL 'ESTADO PLATAFORMA' E INTEROPERABILIDAD (IOP)
//     (Hacia una Infraestructura Digital Común: Ecosistema de Servicios e Integración)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_13"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const platGroup = new THREE.Group();
    platGroup.position.set(0, -0.15, 0);

    // 1. La Gran Plataforma Escalonada de Mármol y Cristal (Infraestructura Digital Base)
    const baseSlab = new THREE.Mesh(
      new THREE.BoxGeometry(1.40, 0.12, 1.00),
      engine.graniteMat(0x0f172a)
    );
    baseSlab.position.y = -0.85;
    platGroup.add(baseSlab);

    const midSlab = new THREE.Mesh(
      new THREE.BoxGeometry(1.20, 0.08, 0.85),
      engine.marbleMat(0xf8fafc, 0.20)
    );
    midSlab.position.y = -0.75;
    platGroup.add(midSlab);

    // 2. Bus Central de Interoperabilidad (ESB / Data Bus de Alta Frecuencia)
    const busCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.18, 0.45),
      new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8
      })
    );
    busCore.position.y = -0.62;
    platGroup.add(busCore);

    // 3. Cuatro Puertas / Conectores API Seguros (Hacia Sistemas Externos e Internos)
    const gates = [
      { x: -0.45, z: 0.25, name: "API ACADÉMICA", sub: "Guaraní IOP", col: 0x0284c7 },
      { x: 0.45, z: 0.25, name: "API PERSONAL", sub: "Mapuche & Haberes", col: 0x10b981 },
      { x: -0.45, z: -0.25, name: "API EXPEDIENTES", sub: "SUDOCU Digital", col: 0xd4af37 },
      { x: 0.45, z: -0.25, name: "API TERRITORIAL", sub: "Nodos Regionales", col: 0x8b5cf6 }
    ];

    engine.anim13_gates = [];

    gates.forEach((gt) => {
      const gObj = new THREE.Group();
      gObj.position.set(gt.x, -0.40, gt.z);

      // Torre del conector API
      const pCol = engine.createClassicalColumn(0.45, 0.06, gt.col, true);
      gObj.add(pCol);

      // Prisma de cristal criptográfico en la cima
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.06, 1),
        new THREE.MeshStandardMaterial({
          color: gt.col,
          emissive: gt.col,
          emissiveIntensity: 0.7,
          roughness: 0.1,
          metalness: 0.85
        })
      );
      gem.position.y = 0.26;
      gObj.add(gem);

      // Cartela identificatoria
      const lbl = engine.createLabelSprite(gt.name, gt.sub, "#0f2d59", false);
      lbl.position.set(0, 0.42, 0);
      gObj.add(lbl);

      platGroup.add(gObj);
      engine.anim13_gates.push({ group: gObj, gem, col: gt.col });
    });

    // 4. Prisma Flotante Superior: El 'Estado Plataforma' Integrado
    const hubSphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.18, 2),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xd4af37,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: true
      })
    );
    hubSphere.position.set(0, 0.20, 0);
    platGroup.add(hubSphere);
    engine.anim13_hub = hubSphere;

    // Placa explicativa frontal
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "ESTADO PLATAFORMA & INTEROPERABILIDAD",
      "Infraestructura Digital Compartida • APIs Abiertas • Desburocratización",
      ["ARQUITECTURA DIGITAL CURZAS"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    platGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "EL ESTADO PLATAFORMA (IOP)",
      "Interoperabilidad Digital y Ecosistema de Servicios Integrados",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(platGroup);
  },

  animate(engine, t) {
    if (engine.anim13_hub) {
      engine.anim13_hub.rotation.y = t * 0.7;
      engine.anim13_hub.rotation.x = Math.sin(t * 0.5) * 0.3;
      engine.anim13_hub.position.y = 0.20 + Math.sin(t * 2) * 0.03;
    }

    if (engine.anim13_gates) {
      engine.anim13_gates.forEach((gt, i) => {
        if (gt.gem) {
          gt.gem.rotation.y = -t * (1.0 + i * 0.2);
          const p = 1.0 + Math.sin(t * 3 + i) * 0.1;
          gt.gem.scale.set(p, p, p);
        }
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 14. DIAGNÓSTICO EN CURZAS: Silos Informáticos y Duplicación
//     (Fragmentación Tecnológica, Retrabajo Operativo y Desafíos de Conectividad)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_14"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const siloGroup = new THREE.Group();
    siloGroup.position.set(0, -0.15, 0);

    // Base agrietada / fragmentada de granito
    const fracturedBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.60, 0.10, 0.85),
      engine.graniteMat(0x0f172a)
    );
    fracturedBase.position.y = -0.90;
    siloGroup.add(fracturedBase);

    // Tres Silos Amurallados Aislados (Silo Alumnos, Silo Personal, Silo Contabilidad)
    const silos = [
      { x: -0.58, name: "SILO ACADÉMICO", desc: "Actas y Alumnos Aislados", col: 0xef4444 },
      { x: 0, name: "SILO ADMINISTRATIVO", desc: "Legajos en Papel y Notas", col: 0xf59e0b },
      { x: 0.58, name: "SILO PATRIMONIAL", desc: "Compras sin Enlace Directo", col: 0xd97706 }
    ];

    engine.anim14_towers = [];

    silos.forEach((s, idx) => {
      const sObj = new THREE.Group();
      sObj.position.set(s.x, -0.40, 0);

      // Torre cilíndrica amurallada
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.22, 0.75, 24),
        engine.marbleMat(0x334155, 0.4)
      );
      tower.castShadow = true;
      sObj.add(tower);

      // Almenas superiores defensivas (representando resistencia al cambio y aislamiento)
      const roof = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.18, 0.12, 16),
        engine.brassMat(0x475569)
      );
      roof.position.y = 0.42;
      sObj.add(roof);

      // Cartela del silo
      const label = engine.createLabelSprite(s.name, s.desc, "#dc2626", false);
      label.position.set(0, 0.65, 0);
      sObj.add(label);

      siloGroup.add(sObj);
      engine.anim14_towers.push(sObj);
    });

    // Foso / Abismo entre los silos con puente quebrado (Retrabajo y Doble Carga)
    for (let i = 0; i < 2; i++) {
      const xMid = i === 0 ? -0.29 : 0.29;
      // Mitad izquierda rota
      const bridgeL = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.02, 0.08),
        engine.brassMat(0xd4af37)
      );
      bridgeL.position.set(xMid - 0.07, -0.35, 0);
      bridgeL.rotation.z = -0.35;
      siloGroup.add(bridgeL);

      // Mitad derecha rota
      const bridgeR = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.02, 0.08),
        engine.brassMat(0xd4af37)
      );
      bridgeR.position.set(xMid + 0.07, -0.35, 0);
      bridgeR.rotation.z = 0.35;
      siloGroup.add(bridgeR);

      // Advertencia de cuello de botella / doble carga
      const warningPlaque = engine.createEngravedPlaque(
        0.30,
        0.14,
        "DOBLE CARGA",
        "Retrabajo Manual",
        ["CUELLO DE BOTELLA"],
        { theme: "dark" }
      );
      warningPlaque.position.set(xMid, -0.72, 0.32);
      siloGroup.add(warningPlaque);
    }

    // Placa frontal de diagnóstico
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "DIAGNÓSTICO EN CURZAS: SILOS INFORMÁTICOS",
      "Fragmentación Tecnológica • Doble Carga Manual • Islas de Información",
      ["PROBLEMA CENTRAL DE GESTIÓN"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    siloGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "SILOS INFORMÁTICOS Y FRAGMENTACIÓN",
      "Doble Carga de Notas, Islas de Datos y Cuello de Botella Operativo",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(siloGroup);
  },

  animate(engine, t) {
    // Alarma sutil y pulso de alerta en los silos
    if (engine.anim14_towers) {
      engine.anim14_towers.forEach((tw, i) => {
        tw.position.y = -0.40 + Math.sin(t * 1.5 + i) * 0.015;
      });
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 15. DESAFÍO 2: 'TRAMADOS INSTITUCIONALES AD HOC' Y FLEXIBILIDAD
//     (Articulación Dinámica Frente a Demandas Emergentes del Territorio)
// ──────────────────────────────────────────────────────────────────────────
window.Presentation3D_Objects["anim_15"] = {
  build(engine, g) {
    engine.createMuseumPlinth(g, 1.45, 0.22, -1.22);

    const adhocGroup = new THREE.Group();
    adhocGroup.position.set(0, -0.15, 0);

    // Chasis de caoba noble
    const chassis = engine.createMachinedChassis(1.65, 0.10, 0.72, { color: 0x1e293b });
    chassis.position.y = -0.92;
    adhocGroup.add(chassis);

    // Núcleo Geodésico Tensegrítico Adaptativo (Estructura Flexible Ad Hoc)
    // Varillas de latón interconectadas por cables tensores dorados que se acomodan
    const tensegrityGroup = new THREE.Group();
    tensegrityGroup.position.set(0, -0.15, 0);

    const strNum = 6;
    const strRadius = 0.55;
    engine.anim15_struts = [];

    for (let i = 0; i < strNum; i++) {
      const angle = (i * 2 * Math.PI) / strNum;
      const x = Math.cos(angle) * strRadius;
      const z = Math.sin(angle) * strRadius;
      const y = (i % 2 === 0 ? 0.25 : -0.25);

      const strut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 0.65, 16),
        engine.brassMat(i % 2 === 0 ? 0xd4af37 : 0x0284c7)
      );
      strut.position.set(x, y, z);
      strut.rotation.x = 0.45;
      strut.rotation.z = angle;
      tensegrityGroup.add(strut);

      // Conector nodal esférico en cada extremo
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 16, 16),
        engine.goldMat(0xffd700)
      );
      ball.position.set(x, y + (i % 2 === 0 ? 0.32 : -0.32), z);
      tensegrityGroup.add(ball);

      engine.anim15_struts.push(strut);
    }

    // Prisma central flotante: 'Convenio de Cooperación Municipal Rápido'
    const coreAgile = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18, 1),
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 0.7,
        roughness: 0.1,
        metalness: 0.8
      })
    );
    tensegrityGroup.add(coreAgile);
    engine.anim15_coreAgile = coreAgile;

    adhocGroup.add(tensegrityGroup);
    engine.anim15_tensegrity = tensegrityGroup;

    // Placa técnica frontal
    const plaque = engine.createEngravedPlaque(
      0.82,
      0.22,
      "TRAMADOS INSTITUCIONALES AD HOC",
      "Estructuras Flexibles de Proyecto • Acuerdos con Municipios • Respuesta Rápida",
      ["RUPTURA DEL AISLAMIENTO BUROCRÁTICO"],
      { theme: "dark" }
    );
    plaque.position.set(0, -0.88, 0.48);
    adhocGroup.add(plaque);

    // Rótulo superior
    const headerTitle = engine.createLabelSprite(
      "TRAMADOS INSTITUCIONALES AD HOC",
      "Flexibilidad Operativa y Redes Dinámicas Frente a Demandas Territoriales",
      "#0f2d59",
      true
    );
    headerTitle.position.set(0, 1.20, 0);
    g.add(headerTitle);

    g.add(adhocGroup);
  },

  animate(engine, t) {
    if (engine.anim15_tensegrity) {
      engine.anim15_tensegrity.rotation.y = t * 0.45;
      engine.anim15_tensegrity.rotation.x = Math.sin(t * 0.6) * 0.15;
    }
    if (engine.anim15_coreAgile) {
      engine.anim15_coreAgile.rotation.y = -t * 1.2;
      const p = 1.0 + Math.sin(t * 3) * 0.12;
      engine.anim15_coreAgile.scale.set(p, p, p);
    }
  }
};

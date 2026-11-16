const fs = require('fs');
const path = require('path');

// Mock a lightweight engine with Three.js mock or actual THREE
global.document = {
  createElement: () => ({
    width: 1024,
    height: 1024,
    getContext: () => ({
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 1,
      fillRect: () => {},
      strokeRect: () => {},
      beginPath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      fillText: () => {},
      measureText: () => ({ width: 100 }),
      save: () => {},
      restore: () => {},
      scale: () => {},
      translate: () => {},
      rotate: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      setLineDash: () => {},
      drawImage: () => {}
    })
  })
};

global.THREE = {
  Group: class {
    constructor() { this.children = []; this.position = { set: () => {}, copy: () => {}, y: 0, x: 0, z: 0 }; this.rotation = { set: () => {}, x: 0, y: 0, z: 0 }; }
    add(c) { this.children.push(c); }
    lookAt() {}
  },
  Mesh: class {
    constructor(geo, mat) {
      this.geo = geo; this.mat = mat; this.material = mat || { opacity: 1, color: { setHex: () => {} }, emissive: { setHex: () => {} } };
      this.position = { set: () => {}, copy: () => {}, lerpVectors: () => {}, y: 0, x: 0, z: 0 };
      this.rotation = { set: () => {}, copy: () => {}, x: 0, y: 0, z: 0 };
      this.scale = { set: () => {} };
    }
    lookAt() {}
    add() {}
  },
  CanvasTexture: class { constructor() {} },
  Shape: class { constructor() {} moveTo() {} lineTo() {} bezierCurveTo() {} quadraticCurveTo() {} closePath() {} getPoints() { return []; } },
  ExtrudeGeometry: class {},
  RingGeometry: class {},
  BoxGeometry: class {},
  CylinderGeometry: class {},
  TorusGeometry: class {},
  OctahedronGeometry: class {},
  SphereGeometry: class {},
  ConeGeometry: class {},
  IcosahedronGeometry: class {},
  TubeGeometry: class {},
  BufferGeometry: class {
    constructor() {
      this.attributes = { position: { array: new Float32Array(200), needsUpdate: false } };
    }
    setFromPoints() { return this; }
  },
  LineDashedMaterial: class {},
  LineBasicMaterial: class {},
  Line: class { constructor(geo, mat) { this.geometry = geo || { attributes: { position: { array: new Float32Array(6), needsUpdate: false } } }; this.material = mat; this.position = { set: () => {}, y: 0 }; this.rotation = { x: 0, y: 0, z: 0 }; } computeLineDistances() {} },
  MeshStandardMaterial: class { constructor() { this.color = { setHex: () => {} }; this.emissive = { setHex: () => {} }; this.opacity = 1; } },
  MeshBasicMaterial: class { constructor() { this.color = { setHex: () => {} }; this.opacity = 1; } },
  PointLight: class { constructor() { this.position = { set: () => {} }; this.color = { setHex: () => {} }; } },
  Vector3: class { constructor(x=0,y=0,z=0) { this.x=x; this.y=y; this.z=z; } normalize() { return this; } distanceTo() { return 1; } lerpVectors() { return this; } copy() { return this; } addVectors() { return this; } multiplyScalar() { return this; } clone() { return new global.THREE.Vector3(this.x, this.y, this.z); } },
  ArrowHelper: class { constructor() { this.position = { set: () => {} }; } },
  LineCurve3: class { constructor() {} getPoint() { return new global.THREE.Vector3(); } },
  QuadraticBezierCurve3: class { constructor() {} getPoint() { return new global.THREE.Vector3(); } },
  CatmullRomCurve3: class { constructor(pts) { this.pts = pts; } getPoint() { return { x: 0, y: 0, z: 0 }; } }
};

global.window = {
  Presentation3D_Objects: {}
};

const makeMat = () => ({ color: { setHex: () => {} }, emissive: { setHex: () => {} } });

const engine = {
  createMuseumPlinth: () => {},
  graniteMat: makeMat,
  marbleMat: makeMat,
  brassMat: makeMat,
  goldMat: makeMat,
  glassMat: makeMat,
  createEngravedPlaque: (w, h, title, sub, bullets) => new global.THREE.Mesh(),
  createLabelSprite: (title, sub, col, flag) => new global.THREE.Mesh(),
  createBrassArmillaryRing: () => new global.THREE.Mesh(),
  createClassicalColumn: () => new global.THREE.Mesh(),
  createMachinedChassis: () => new global.THREE.Mesh(),
  createGraduatedDial: () => new global.THREE.Mesh(),
  createAcademicSeal: () => new global.THREE.Mesh(),
  createLorenzAttractor: () => new global.THREE.Mesh()
};

// Load all 5 blocks
['bloque1.js', 'bloque2.js', 'bloque3.js', 'bloque4.js', 'bloque5.js'].forEach(b => {
  const code = fs.readFileSync(path.join('js', 'objetos', b), 'utf8');
  eval(code);
});

console.log('Testing build() and animate() on all registered 3D objects...');
let passCount = 0;
for (let i = 1; i <= 29; i++) {
  const sceneId = `anim_${String(i).padStart(2, '0')}`;
  const obj = global.window.Presentation3D_Objects[sceneId];
  if (!obj) {
    console.error(`❌ Missing scene object: ${sceneId}`);
    process.exit(1);
  }
  const g = new global.THREE.Group();
  try {
    obj.build(engine, g);
    if (obj.animate) obj.animate(engine, 0.5);
    passCount++;
    console.log(`  ✓ ${sceneId} built and animated successfully`);
  } catch (err) {
    console.error(`❌ Error in ${sceneId}:`, err);
    process.exit(1);
  }
}

console.log(`\n🎉 All ${passCount}/29 3D objects built and animated flawlessly without errors!`);

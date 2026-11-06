const fs = require('fs');

let scene3d = fs.readFileSync('js/scene3d.js', 'utf8');

// 1. In init(), call buildAllScenes()
const oldInitLazy = `    // Construcción bajo demanda (Lazy Building) de la escena inicial
    this.getOrCreateScene("anim_01");
    if (this.scenes["anim_01"]) {
      this.scenes["anim_01"].visible = true;
    }

    // Precalentamiento individual de la escena de apertura
    this.precompileScene("anim_01");

    // Precarga en background de las adyacentes
    this.preloadAdjacentScenes("anim_01");`;

const newInitAll = `    // Construcción completa de todas las esculturas 3D canónicas (25 filminas garantizadas)
    this.buildAllScenes();
    if (this.scenes["anim_01"]) {
      this.scenes["anim_01"].visible = true;
    }

    // Precalentamiento de shaders de la escena de apertura
    this.precompileScene("anim_01");`;

// 2. Add buildAllScenes() method
const oldGetOrCreate = `  getOrCreateScene(id) {`;
const newGetOrCreate = `  buildAllScenes() {
    for (let i = 1; i <= 25; i++) {
      const id = \`anim_\${String(i).padStart(2, "0")}\`;
      this.getOrCreateScene(id);
    }
  }

  getOrCreateScene(id) {`;

// 3. In switchScene, ensure newGroup is always obtained via getOrCreateScene
const oldSwitchHeader = `  switchScene(targetId, direction = 1) {
    if (targetId === this.currentSceneId && this.scenes[targetId]?.visible) return;

    const oldId = this.currentSceneId;
    const oldGroup = this.scenes[oldId];
    const newGroup = this.scenes[targetId];

    this.currentSceneId = targetId;`;

const newSwitchHeader = `  switchScene(targetId, direction = 1) {
    const newGroup = this.getOrCreateScene(targetId);
    if (targetId === this.currentSceneId && newGroup && newGroup.visible) return;

    const oldId = this.currentSceneId;
    const oldGroup = this.scenes[oldId];

    this.currentSceneId = targetId;`;

function replaceNorm(source, find, repl) {
  const normS = source.replace(/\r\n/g, '\n');
  const normF = find.replace(/\r\n/g, '\n');
  const normR = repl.replace(/\r\n/g, '\n');
  if (!normS.includes(normF)) {
    console.error('NOT FOUND:\n', normF);
    process.exit(1);
  }
  const res = normS.replace(normF, normR);
  return source.includes('\r\n') ? res.replace(/\n/g, '\r\n') : res;
}

scene3d = replaceNorm(scene3d, oldInitLazy, newInitAll);
scene3d = replaceNorm(scene3d, oldGetOrCreate, newGetOrCreate);
scene3d = replaceNorm(scene3d, oldSwitchHeader, newSwitchHeader);

fs.writeFileSync('js/scene3d.js', scene3d, 'utf8');
console.log('js/scene3d.js successfully updated with buildAllScenes and bulletproof switchScene!');


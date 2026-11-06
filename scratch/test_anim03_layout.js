const fs = require('fs');

// Check dimensions and distances
const items = [
  { x: -0.96, z: 0.24, h: 0.58, title: "I. AUTONOMÍA", sub: "Art. 75 inc. 19 CN" },
  { x: -0.32, z: 0.08, h: 0.76, title: "II. BUROCRACIA", sub: "Weberiana Profesional" },
  { x: 0.32, z: -0.08, h: 0.96, title: "III. AUTONOMÍA VS NGP", sub: "Resguardo vs Mercado" },
  { x: 0.96, z: -0.24, h: 1.18, title: "IV. ACCOUNTABILITY", sub: "Horizontal/Vertical/Social" }
];

console.log("Analyzing 4 pillars staircase geometry:");
for (let i = 0; i < items.length; i++) {
  const it = items[i];
  const radiusFromCenter = Math.sqrt(it.x * it.x + it.z * it.z);
  console.log(`Pillar ${it.title}: pos=(${it.x.toFixed(2)}, ${it.z.toFixed(2)}), h=${it.h.toFixed(2)}, distFromOrigin=${radiusFromCenter.toFixed(2)}`);
  if (radiusFromCenter > 1.70) {
    console.error(`WARNING: Pillar ${i} is too close to plinth edge (radius 1.85)!`);
  }
  if (i > 0) {
    const prev = items[i - 1];
    const dx = it.x - prev.x;
    const dz = it.z - prev.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    console.log(`  Distance to previous pillar: ${dist.toFixed(2)} units (X-gap: ${dx.toFixed(2)})`);
  }
}


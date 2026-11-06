const fs = require('fs');

const quadrants = [
  {
    x: -0.85,
    z: -0.22,
    y: -0.18,
    h: 0.65,
    title: "FORTALEZAS",
    sub: "Arraigo Territorial • Docencia",
    badge: "INTERNA POSITIVA",
    col: 0x10b981
  },
  {
    x: -0.28,
    z: 0.28,
    y: -0.42,
    h: 0.58,
    title: "DEBILIDADES",
    sub: "Silos y Fragmentación de Datos",
    badge: "INTERNA NEGATIVA",
    col: 0xf59e0b
  },
  {
    x: 0.28,
    z: 0.28,
    y: -0.42,
    h: 0.58,
    title: "AMENAZAS",
    sub: "Ajuste Fiscal SPU • Salarios",
    badge: "EXTERNA NEGATIVA",
    col: 0xef4444
  },
  {
    x: 0.85,
    z: -0.22,
    y: -0.18,
    h: 0.65,
    title: "OPORTUNIDADES",
    sub: "Educación Híbrida • Demanda Regional",
    badge: "EXTERNA POSITIVA",
    col: 0x0284c7
  }
];

console.log("Analyzing FODA fan/amphitheater clearance:");
quadrants.forEach((q, i) => {
  const r = Math.sqrt(q.x * q.x + q.z * q.z);
  console.log(`${q.title}: x=${q.x.toFixed(2)}, z=${q.z.toFixed(2)}, y=${q.y.toFixed(2)}, radius=${r.toFixed(2)}`);
});

// Check horizontal gaps between adjacent quadrants when sorted by X
const sorted = [...quadrants].sort((a, b) => a.x - b.x);
for (let i = 1; i < sorted.length; i++) {
  const gap = sorted[i].x - sorted[i - 1].x;
  console.log(`X gap between ${sorted[i - 1].title} and ${sorted[i].title}: ${gap.toFixed(2)} units (clearance: ${(gap - 0.50).toFixed(2)})`);
}


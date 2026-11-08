const d = require('../data/presentacion_data.js');

console.log('=== AUDITORÍA DETALLADA: CONSIGNAS VS CONTENIDO DE FILMINAS ===\n');

d.consignasCatedra.forEach((c) => {
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`📌 AVANCE ${c.avanceNum}: ${c.avanceTitulo}`);
  console.log(`🎯 Objetivo: ${c.objetivo}`);
  console.log(`❓ Preguntas Guía:`);
  c.preguntasGuia.forEach((q, i) => console.log(`   Q${i+1}: ${q}`));
  console.log(`📑 Entregables:`);
  c.entregables.forEach((e, i) => console.log(`   E${i+1}: ${e}`));

  // Identify slides for this avance
  const slides = d.slides.filter(s => s.bloque && s.bloque.includes(`AVANCE ${c.avanceNum}`));
  console.log(`\n📄 Filminas correspondientes (${slides.length}):`);
  slides.forEach((s) => {
    console.log(`\n  [Filmina ${s.numero}] ${s.titulo} (${s.subtitulo})`);
    s.puntosClave.forEach((p) => {
      console.log(`    • ${p}`);
    });
  });
  console.log('\n');
});


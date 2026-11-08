const fs = require('fs');

const data = require('../data/presentacion_data.js');

data.slides[24] = {
  id: "slide_25",
  numero: 25,
  bloque: "CIERRE: CONCLUSIONES INTEGRALES Y DEFENSA",
  esquema: "Conclusión General de los 4 Avances",
  badge: "SÍNTESIS FINAL Y PREGUNTAS",
  titulo: "Conclusión General: Síntesis Crítica de los 4 Avances",
  subtitulo: "Qué Hicimos, Hallazgos Clave y el Principal Problema Detectado en Cada Unidad",
  puntosClave: [
    "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Qué hicimos: Caracterizamos el marco institucional y la autonomía (Art. 75 inc. 19 CN) frente a la NGP • Lo más destacado: Burocracia Profesional que garantiza legalidad, estabilidad y convenios paritarios • Problema crítico detectado: Riesgo de endogamia en co-gobierno y gobernanza digital incipiente (sin datos abiertos ni IA en RRHH).",
    "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Qué hicimos: Diagnóstico situacional, matriz FODA, mapeo de actores y capacidades estatales (Bertranou) • Lo más destacado: Red viva de 10 Nodos en Río Negro y planificación PES (Matus) con los trabajadores • Problema crítico detectado: Silos de datos interinstitucionales (SIU/SIGEVA) y brecha digital en personal de mayor antigüedad frente a la dispersión.",
    "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): Qué hicimos: Mapeamos la estructura formal vs real, manual de funciones y flujograma de licencias • Lo más destacado: Visibilización de la red territorial real frente a un organigrama formal desactualizado • Problema crítico detectado: Parálisis de licencias por falta de subrogancia y falsa digitalización (papel escaneado sin interoperabilidad SUDOCU-Mapuche).",
    "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): Qué hicimos: Presupuesto por programas (Makon, Prog. 26) y centralidad del Inciso 1 (Personal) • Lo más destacado: El 90,2% del presupuesto va a salarios, demostrando que el personal es la auténtica capacidad estatal • Problema crítico detectado: Asfixia operativa (solo 9,8% para funcionamiento) y rigidez del 40% de Zona Desfavorable ante el ajuste fiscal nacional.",
    "Apertura al Tribunal y Agradecimiento: Reconocimiento sincero a los docentes evaluadores Mgter. Susana Lopez y Lic. Carlos Jauge por su rigor y guía metodológica • Apertura a la deliberación y preguntas del Tribunal."
  ],
  metadatosFooter: "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes • Ciclo Lectivo 2026 • CURZAS - UNCo",
  escena3D: "anim_25",
  guionOrador: "Para concluir esta defensa integral, sintetizamos los hallazgos y desafíos neurálgicos de los 4 Avances:\nEn el Avance 1 abordamos el marco institucional: confirmamos una Burocracia Profesional sólida que defiende la legalidad y los convenios paritarios, blindándonos de las lógicas de mercado de la NGP; el problema crítico detectado es el riesgo de endogamia y lentitud procedimental en el co-gobierno, junto a una gobernanza inteligente sin portal de datos abiertos ni algoritmos de RRHH.\nEn el Avance 2 pasamos a la planificación estratégica: lo más potente es la red viva de 10 nodos democratizando la educación en Río Negro y el enfoque situacional de Matus; el problema detectado es la persistencia de silos de datos y la brecha digital en las plantillas nodocentes.\nEn el Avance 3 desarmamos la estructura y los procesos: demostramos que la realidad territorial desborda al organigrama de papel; los problemas críticos son la parálisis de licencias por falta de subrogancia y la falsa digitalización del papel escaneado sin interoperabilidad.\nY en el Avance 4 pusimos números a la realidad: el 90,2% del presupuesto va al Inciso 1, confirmando que las personas son la capacidad estatal misma del CURZAS; el gran problema es la asfixia del 9,8% de funcionamiento agravada por el 40% de Zona Desfavorable ante el recorte nacional.\nAgradezco sinceramente a la profesora Susana Lopez y al profesor Carlos Jauge por su excelencia formativa. Quedo a su entera disposición para responder las preguntas del Tribunal."
};

const code = `/**
 * =============================================================================
 * METADATOS Y CONTENIDOS OFICIALES DE LA DEFENSA ORAL
 * Asignatura: Planeamiento y Control de las Organizaciones (2026)
 * Carrera: Licenciatura en Recursos Humanos - CURZAS / UNCo
 * Estudiante: Tec. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes
 * Docentes Evaluadores: Mgter. Susana Lopez y Lic. Carlos Jauge
 * =============================================================================
 */

const PRESENTACION_DATA = ${JSON.stringify(data, null, 2)};

// Compatibilidad en navegadores y entornos CommonJS/Node
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRESENTACION_DATA;
}
`;

fs.writeFileSync('data/presentacion_data.js', code, 'utf8');
console.log('✅ data/presentacion_data.js updated with rich Slide 25 content');


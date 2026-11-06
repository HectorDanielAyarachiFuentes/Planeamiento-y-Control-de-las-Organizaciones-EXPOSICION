const fs = require('fs');
const path = require('path');

const metaMap = {
  // UNIDAD I
  'U1 - Abal Medina, J. M. (2025) - El Estado (pp. 23-61).pdf': {
    titulo: 'Abal Medina, J. M. (2025) — El Estado: Modelos de Gestión y Burocracia (pp. 23-61)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Aguilar Villanueva, Luis (2015) - Gobernanza y Gestion Publica (Cap. 1 Gobernanza, pp. 31-120).pdf': {
    titulo: 'Aguilar Villanueva, Luis (2015) — Gobernanza y Gestión Pública (Cap. 1: Gobernanza, pp. 31-120)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Aguilar Villanueva, Luis (2015) - Gobernanza y Gestion Publica (Caps. 1 y 2 Gobernanza y NGP, pp. 31-208).pdf': {
    titulo: 'Aguilar Villanueva, Luis (2015) — Gobernanza y NGP (Caps. 1 y 2: Gobernanza y NGP, pp. 31-208)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Blutman, Gustavo y Cao, Horacio (2023) - Cap. 1 Un acercamiento al futuro del empleo publico (pp. 46-121).pdf': {
    titulo: 'Blutman, Gustavo y Cao, Horacio (2023) — Futuro del Empleo Público (Cap. 1, pp. 46-121)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Cao, Horacio y Blutman, Gustavo (2023) - Escenarios futuros para el Estado y la Administracion Publica (pp. 33-66).pdf': {
    titulo: 'Cao, Horacio y Blutman, Gustavo (2023) — Escenarios Futuros para el Estado y la AP (pp. 33-66)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Cao, Horacio y otros (2022) - Continuidades, rupturas y desafios (Capitulos 1 y 2).pdf': {
    titulo: 'Cao, Horacio y otros (2022) — Continuidades, Rupturas y Desafíos de la APN (Caps. 1 y 2)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - Grandinetti, Rey y Serafinoff (2025) - Relaciones intergubernamentales Cap 5 (pp. 221-263).pdf': {
    titulo: 'Grandinetti, Rey y Serafinoff (2025) — Relaciones Intergubernamentales y Articulación Multinivel (Cap. 5)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },
  'U1 - IA en la practica - Casos de uso y aplicaciones con agentes (Transcripcion).txt': {
    titulo: 'IA en la Práctica — Casos de Uso y Agentes Inteligentes en el Sector Público (Transcripción)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Transcripciones y Clases'
  },
  'U1 - LA ADMINISTRACION PUBLICA - CAO HORACIO (Transcripcion).txt': {
    titulo: 'Horacio Cao — La Administración Pública: Tensiones y Perspectivas (Transcripción)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Transcripciones y Clases'
  },
  'U1 - Oszlak - El Estado en la era exponencial. Cap 2 Capacidades estatales frente a la disrupcion tecnologica (pp. 101-230).pdf': {
    titulo: 'Oszlak, Oscar (2020) — El Estado en la Era Exponencial (Cap. 2: Capacidades y Disrupción)',
    slug: 'u1', label: 'Unidad I: Estado & Gobernanza', seccion: 'Unidad I: Estado, Modelos de Gestión y Gobernanza', sub: 'Bibliografía Obligatoria'
  },

  // UNIDAD II
  'U2 - 901-inf-final.pdf': {
    titulo: 'Documento 901 — Informe Metodológico de Planificación Institucional',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Documentos Técnicos'
  },
  'U2 - CAPACIDADES-BAZALDUA.pdf': {
    titulo: 'Bazaldúa — Capacidades Estatales y Modelos de Gestión Pública',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Bibliografía Obligatoria'
  },
  'U2 - Dialnet-PlanificacionYGobierno- MATUS.pdf': {
    titulo: 'Matus, Carlos — Planificación y Gobierno: Teoría del PES y Triángulo de Gobierno',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Bibliografía Obligatoria'
  },
  'U2 - Manual_de_Induccion_2019_MPF.pdf': {
    titulo: 'Manual de Inducción MPF (2019) — Circuitos y Planificación Operativa',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Manuales de Aplicación'
  },
  'U2 - Matus, Carlos. Entrevista sobre problemáticas de gobierno en América Latina (1998).txt': {
    titulo: 'Matus, Carlos (1998) — Entrevista sobre Problemas de Gobierno y Gobernabilidad en AL',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Testimonios y Ensayos Clave'
  },
  'U2 - SOTELO PLANIFICACION.pdf': {
    titulo: 'Sotelo Maciel, Adrián — Planificación Estratégica en el Sector Público y Construcción de Viabilidad',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Bibliografía Obligatoria'
  },
  'U2 - TESIS ANALISIS ORGANIZACIONAL DE LA EMPRESA CARMETALICA LTDA.[1].pdf': {
    titulo: 'Estudio de Caso Organizacional — Análisis de Procesos y Estructura en Carmetálica Ltda.',
    slug: 'u2', label: 'Unidad II: Planeamiento (PES)', seccion: 'Unidad II: Planeamiento Estratégico y Capacidades Estatales', sub: 'Estudios de Caso'
  },

  // UNIDAD III
  'U3 - 20227.pdf': {
    titulo: 'Documento Técnico 20227 — Estructuras Orgánicas y Mapeo de Procesos',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Guías Técnicas'
  },
  'U3 - FACES_n9_9-22.pdf': {
    titulo: 'Revista FACES Nº 9 (pp. 9-22) — Rediseño de Procesos y Estructuras en la Gestión Pública',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Bibliografía Obligatoria'
  },
  'U3 - Guía de estudio Unidad 3.pdf': {
    titulo: 'Guía de Estudio Cátedra — Unidad III: Diseño Organizacional, Estructuras y Procesos',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Guías de Cátedra'
  },
  'U3 - INAP.pdf': {
    titulo: 'INAP — Manual Metodológico para el Análisis y Rediseño de Estructuras Organizacionales',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Normas y Guías INAP'
  },
  'U3 - vdocuments.mx_8-forester-racionalidad-limitada-y-salir-del-paso.pdf': {
    titulo: 'Forester, John — Racionalidad Limitada, Salir del Paso y Diseño en Entornos Complejos',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Bibliografía Obligatoria'
  },
  'U3 - ZELLER- ORGANIZACION DEL ESTADO Y APN.pdf': {
    titulo: 'Zeller, Norberto — Organización del Estado y Administración Pública Nacional: Configuración Institucional',
    slug: 'u3', label: 'Unidad III: Diseño Organizacional', seccion: 'Unidad III: Diseño Organizacional, Procesos y Tecnologías Públicas', sub: 'Bibliografía Obligatoria'
  },

  // UNIDAD IV
  'U4 - J14_-Marcos-Makon_2024_-Estrategia.pdf': {
    titulo: 'Makon, Marcos (2024) — Estrategia, Planificación y Presupuesto por Programas en el Sector Público',
    slug: 'u4', label: 'Unidad IV: Presupuesto & Finanzas', seccion: 'Unidad IV: Presupuesto, Gestión Financiera y Control de Gestión', sub: 'Bibliografía Obligatoria'
  },
  'U4 - Makon sist integrados de adm financiera.pdf': {
    titulo: 'Makon, Marcos — Sistemas Integrados de Administración Financiera (SIAF) y la Ley 24.156',
    slug: 'u4', label: 'Unidad IV: Presupuesto & Finanzas', seccion: 'Unidad IV: Presupuesto, Gestión Financiera y Control de Gestión', sub: 'Bibliografía Obligatoria'
  },
  'U4 - Presupuesto_Sistema_Presupuestario_Publico.pdf': {
    titulo: 'Manual del Sistema Presupuestario Público — Clasificadores, Ciclo y Ejecución Presupuestaria',
    slug: 'u4', label: 'Unidad IV: Presupuesto & Finanzas', seccion: 'Unidad IV: Presupuesto, Gestión Financiera y Control de Gestión', sub: 'Manuales Técnicos Oficiales'
  },
  'U4 - Schweinheim sistema de administracion financiera.pdf': {
    titulo: 'Schweinheim, Guillermo — El Sistema de Administración Financiera Gubernamental y el Control Público',
    slug: 'u4', label: 'Unidad IV: Presupuesto & Finanzas', seccion: 'Unidad IV: Presupuesto, Gestión Financiera y Control de Gestión', sub: 'Bibliografía Obligatoria'
  },

  // UNIDAD V
  'U5 - Feinstein, O. (2016) - La evaluacion pragmatica de politicas publicas (pp. 27-48).pdf': {
    titulo: 'Feinstein, Osvaldo (2016) — La Evaluación Pragmática de Políticas Públicas: Criterios y Métodos (pp. 27-48)',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Bibliografía Obligatoria'
  },
  'U5 - Guia Metodologica para el Diseno de Compromisos, Indicadores y Metas (PI - 2027).pdf': {
    titulo: 'Guía Metodológica Oficial — Diseño de Compromisos, Indicadores y Metas de Gestión (PI-2027)',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Guías Metodológicas Oficiales'
  },
  'U5 - Martinez Nogueira, R. (2016) - Introduccion (pp. 15-26).pdf': {
    titulo: 'Martínez Nogueira, Roberto (2016) — Introducción a la Evaluación de Políticas y Control de Gestión (pp. 15-26)',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Bibliografía Obligatoria'
  },
  'U5 - Mayne, J. (2016) - Abordaje de la atribucion a traves del analisis de contribucion (pp. 305-330).pdf': {
    titulo: 'Mayne, John (2016) — Abordaje de la Atribución a través del Análisis de Contribución en Políticas Públicas',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Bibliografía Obligatoria'
  },
  'U5 - Ramirez, T. I. (2023) - Indicadores de gestion. Herramienta informativa del control de gestion publica.pdf': {
    titulo: 'Ramírez, T. I. (2023) — Indicadores de Gestión: Herramienta Informativa del Control de Gestión Pública',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Bibliografía Obligatoria'
  },
  'U5 - SIGEN (2025) - Normas de Auditoria Interna Gubernamental.pdf': {
    titulo: 'SIGEN (2025) — Normas de Auditoría Interna Gubernamental (Marco Oficial de Auditoría y Control)',
    slug: 'u5', label: 'Unidad V: Control & Evaluación', seccion: 'Unidad V: Control, Auditoría, Participación y Evaluación', sub: 'Normativa Oficial SIGEN'
  }
};

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

function scanDir(dir) {
  let list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      list = list.concat(scanDir(full));
    } else {
      const stats = fs.statSync(full);
      const ext = path.extname(ent.name);
      const meta = metaMap[ent.name] || {
        titulo: ent.name.replace(ext, ''),
        slug: 'general',
        label: 'Material General',
        seccion: 'Material General',
        sub: 'Documentos'
      };
      
      const cleanPath = full.replace(/\\/g, '/');
      list.push({
        nombre: ent.name,
        titulo: meta.titulo,
        ext: ext,
        tamano: formatSize(stats.size),
        bytes: stats.size,
        ruta: cleanPath,
        categoriaSlug: meta.slug,
        categoriaLabel: meta.label,
        seccion: meta.seccion,
        subseccion: meta.sub
      });
    }
  }
  return list;
}

const docs = scanDir('material');
console.log('Processed ' + docs.length + ' documents.');

const jsContent = `/**
 * Catálogo Oficial de Material de Cátedra (${docs.length} Documentos Indexados)
 * Cátedra: Planeamiento y Control de las Organizaciones — CURZAS / UNCo
 * Unidades I a V: Gobernanza, PES Matus, Diseño Organizacional, Finanzas Públicas y Control SIGEN
 */
const CATEDRA_MATERIAL_DATA = ${JSON.stringify(docs, null, 2)};

if (typeof window !== "undefined") {
  window.CATEDRA_MATERIAL_DATA = CATEDRA_MATERIAL_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CATEDRA_MATERIAL_DATA;
}
`;

fs.writeFileSync('data/catedra_data.js', jsContent, 'utf8');
console.log('Successfully wrote data/catedra_data.js with ' + docs.length + ' documents!');


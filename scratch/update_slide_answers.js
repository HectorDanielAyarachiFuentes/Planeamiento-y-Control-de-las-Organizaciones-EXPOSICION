const fs = require('fs');

let content = fs.readFileSync('data/presentacion_data.js', 'utf8');

const updates = [
  {
    find: `"id": "slide_4",`,
    replaceBullets: `      "puntosClave": [
        "Pregunta Guía Cátedra: ¿El organismo se rige bajo estructuras estrictamente centralizadas y jerárquicas (modelo weberiano)?",
        "Diagnóstico Situado: Burocracia profesional con fuerte apego al principio de legalidad, expediente foliado y dictamen jurídico previo.",
        "Estabilidad de Planta: Empleo regido por el CCT Nodocente (Dec. 366/06) y CCT Docente (Dec. 1246/15) que blindan contra el clientelismo.",
        "Especialización y Autonomía: Procedimientos administrativos estandarizados conviviendo armoniosamente con autonomía de cátedra y científica."
      ],`
  },
  {
    find: `"id": "slide_5",`,
    replaceBullets: `      "puntosClave": [
        "Entregable de Cátedra: Identificar el modelo de administración predominante en la entidad (Burocracia tradicional vs Nueva Gestión Pública).",
        "Inexistencia de Lógicas Mercantiles: En el CURZAS no rige el gerencialismo de la NGP (no hay vouchers, aranceles ni contratos por productividad).",
        "Escudo Autonómico Constitucional: El Art. 75 inc. 19 CN y la Reforma de 1918 consagran a la educación como bien público y derecho humano inalienable.",
        "Uso Instrumental de Tecnologías: La NGP solo influyó en la adopción operativa de sistemas informáticos (ecosistema SIU), sin alterar la vocación pública."
      ],`
  },
  {
    find: `"id": "slide_6",`,
    replaceBullets: `      "puntosClave": [
        "Preguntas Guía Cátedra: ¿Mecanismos de rendición de cuentas vigentes? ¿Existe Oficina de Transparencia? ¿Normativas sobre IA según Oszlak?",
        "Triangulación de Accountability: Control Horizontal (UAI y AGN auditando legalidad y fondos), Vertical (elecciones de claustros) y Social (boletines abiertos).",
        "Gobernanza Inteligente (Oszlak): Nivel de madurez medio en el CURZAS; portal web institucional y expediente digital SUDOCU, pero sin Oficina de Datos Abiertos formal.",
        "Software Predictivo e Inteligencia Artificial: No existen normativas vigentes ni algoritmos en selección o monitoreo; los concursos se resuelven por jurados colegiados."
      ],`
  },
  {
    find: `"id": "slide_11",`,
    replaceBullets: `      "puntosClave": [
        "Pregunta Guía Cátedra: ¿Los planes son normativos (rígidos) o adoptan un enfoque situacional (PES) que considera a los trabajadores como actores estratégicos?",
        "Respuesta a la Cátedra: La universidad planificó históricamente desde un enfoque normativo cerrado, pero la realidad territorial impuso el enfoque situacional (PES Matus).",
        "Los 4 Momentos de Matus: Explicativo (diagnóstico situado), Normativo (lo que debe ser), Estratégico (construcción de viabilidad) y Táctico (acción cotidiana).",
        "Trabajadores como Actores Estratégicos: Docentes y nodocentes tienen intereses, poder de veto y convenios propios; la viabilidad técnica es indisoluble de la política."
      ],`
  },
  {
    find: `"id": "slide_12",`,
    replaceBullets: `      "puntosClave": [
        "Entregable de Cátedra: Elaboración de una Matriz FODA situada en el contexto actual del organismo (insumo de fortalezas y debilidades operativas).",
        "Fortalezas Internas: Arraigo territorial histórico en Río Negro, gratuidad, calidad académica y estabilidad laboral docente/nodocente.",
        "Debilidades Internas: Silos de datos departamentales, dispersión logística en 10 nodos y lentitud en la carga administrativa manual.",
        "Oportunidades y Amenazas Externas: Demanda regional de carreras híbridas frente al severo recorte presupuestario nacional del CIN/SPU."
      ],`
  },
  {
    find: `"id": "slide_13",`,
    replaceBullets: `      "puntosClave": [
        "Entregable de Cátedra: Mapeo de Actores Clave (stakeholders) en Recursos Humanos y evaluación de capacidades estatales según Bertranou.",
        "Mapeo de Actores Clave: Consejo Directivo, Decanato, gremios paritarios (APUNC y ADUNC/CEDIUNCO), estudiantes y municipios rionegrinos.",
        "Capacidades Político-Relacional y Administrativa: Alta articulación territorial pero burocracia procedimental lenta.",
        "Deficiencias en Competencias Técnicas: Brecha digital en agentes de mayor antigüedad para el uso pleno de SUDOCU y SIU-Mapuche (requiere capacitación situada)."
      ],`
  },
  {
    find: `"id": "slide_14",`,
    replaceBullets: `      "puntosClave": [
        "Pregunta Guía Cátedra: ¿El organigrama real coincide con la estructura formal de dependencias y delegaciones?",
        "Discordancia Estructural: El organigrama formal aprobado por resolución solo refleja las secretarías centrales e invisibiliza a los 10 nodos.",
        "Estructura Real en Red: En el territorio los nodos operan como delegaciones desconcentradas de facto sostenidas por asistentes técnicos pedagógicos.",
        "Misiones y Funciones No Reconocidas: Falta de formalización orgánica de las figuras de enlace territorial en el manual de misiones y funciones."
      ],`
  },
  {
    find: `"id": "slide_16",`,
    replaceBullets: `      "puntosClave": [
        "Entregable de Cátedra: Diseño de Flujograma de un proceso clave de personal, evaluando transición hacia sistema digital y detectando cuellos de botella.",
        "Circuito Relevado: Inicio por agente, visado médico, autorización de jefatura de área, resolución del Decanato e imputación en nómina salarial.",
        "Cuello de Botella Crítico: Dependencia exclusiva de la firma unipersonal del jefe de área; sin protocolo de subrogancia, las licencias se paralizan.",
        "Transición Híbrida: Convivencia forzada entre certificados en papel, expedientes en SUDOCU y re-tipeo posterior en SIU-Mapuche."
      ],`
  },
  {
    find: `"id": "slide_17",`,
    replaceBullets: `      "puntosClave": [
        "Preguntas Guía Cátedra: ¿Cómo se gestionan las autorizaciones internas? ¿Se utiliza de forma exclusiva el Sistema de Gestión Documental Electrónica?",
        "Respuesta a la Cátedra: La universidad utiliza SUDOCU (equivalente universitario de GDE). No es 100% digital: impera el modelo de 'papel escaneado'.",
        "Falta de Interoperabilidad: Ausencia de conexión nativa entre SUDOCU y SIU-Mapuche; el operador debe cargar los datos dos veces a mano.",
        "Normativa de Despapelización Incompleta: Persistencia de archivos paralelos físicos en carpetas de cartulina por temor a la pérdida de registros."
      ],`
  },
  {
    find: `"id": "slide_20",`,
    replaceBullets: `      "puntosClave": [
        "Preguntas Guía Cátedra: ¿Cuál es el presupuesto total asignado al organismo y qué porcentaje se destina al Inciso 1 (Gastos en Personal)?",
        "Presupuesto Oficial UNCo 2025: $73.900 Millones aprobados frente a $154.000 Millones solicitados por el CIN.",
        "Presupuesto Específico CURZAS: $4.877 Millones (equivalente al 6,6% del total de la universidad).",
        "Porcentaje al Inciso 1 (Personal): El 90,2% ($4.401 Millones) se destina exclusivamente a salarios docentes y nodocentes; solo 9,8% para funcionamiento."
      ],`
  },
  {
    find: `"id": "slide_22",`,
    replaceBullets: `      "puntosClave": [
        "Pregunta Guía Cátedra: ¿Cómo se estructuran los programas del organismo en la planilla presupuestaria oficial (Presupuesto por Programas)?",
        "Programa 26 Oficial: 'Desarrollo de la Educación Superior' como unidad programática nacional rectora (Técnica Marcos Makon / CEPAL).",
        "Subprogramas Sustantivos: Formación de Grado y Posgrado, Investigación Científica y Vinculación Territorial y Extensión.",
        "Cadena Insumo → Proceso → Producto: Recursos financieros financian horas cátedra y laboratorios para producir egresados calificados y ciencia comunitaria."
      ],`
  }
];

updates.forEach(u => {
  const idx = content.indexOf(u.find);
  if (idx !== -1) {
    const pIdx = content.indexOf('"puntosClave": [', idx);
    const endPIdx = content.indexOf('],', pIdx);
    if (pIdx !== -1 && endPIdx !== -1) {
      const before = content.slice(0, pIdx);
      const after = content.slice(endPIdx + 2);
      content = before + u.replaceBullets.trim() + after;
      console.log(`Updated bullets for ${u.find}`);
    }
  } else {
    console.warn(`Could not find ${u.find}`);
  }
});

fs.writeFileSync('data/presentacion_data.js', content, 'utf8');
console.log('Slides successfully updated with consignas answers in data/presentacion_data.js');


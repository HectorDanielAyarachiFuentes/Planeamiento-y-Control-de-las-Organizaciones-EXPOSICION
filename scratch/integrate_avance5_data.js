const fs = require('fs');
const path = require('path');

const presData = require('../data/presentacion_data.js');

// 1. Actualizar Metadatos y Timing a 17 Minutos
presData.meta.subtitulo = "Diagnóstico Situado, Estructura Burocrática, Poligobernanza, Presupuesto, Control y Tablero de Comando en el CURZAS (UNCo) — Avances 1 a 5";
presData.meta.normativaMarco = "Estatuto General UNCo (rango estatutario UAI) • Ley 24.521 • Ley 24.156 • CCT Dec. 366/06 y 1246/15 • Res. SIGEN 299 y 311/2026 • SISAC";

presData.timing = {
  totalMinutos: 17,
  alertaAmarillaMinutos: 12,
  alertaRojaMinutos: 15,
  promedioPorSlideMin: 0.58
};

// 2. Agregar Avance 5 en Consignas de Cátedra
if (presData.consignasCatedra.length === 4) {
  presData.consignasCatedra.push({
    avanceNum: 5,
    avanceTitulo: "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V)",
    unidad: "Unidad V",
    objetivo: "Evaluar los sistemas de control interno y externo de la entidad, analizar los mecanismos de evaluación laboral vigentes (CCT 366/06 y CCT 1246/15), diseñar un Tablero de Control preliminar de RR. HH. con KPIs estratégicos (Ramírez y Mayne) y estructurar el circuito de retroalimentación para el aprendizaje institucional (Feinstein).",
    entregables: [
      "Identificar los organismos de control externo (AGN) e interno (UAI con rango estatutario, SIGEN) y relevar las observaciones formuladas a personal.",
      "Diagnosticar los mecanismos de evaluación del desempeño laboral para docentes y nodocentes e identificar la brecha de medición estratégica.",
      "Diseñar un Tablero de Control preliminar con 4 KPIs estratégicos para medir la eficiencia y cobertura territorial de los recursos humanos.",
      "Mapear el circuito de control, auditoría (PAT 2027 en SISAC) y retroalimentación institucional para alimentar la toma de decisiones."
    ],
    queBuscar: [
      "Ley N° 24.156 de Administración Financiera (Arts. 104 y 117), Ley N° 24.521 (Art. 59 bis) y Estatuto UNCo (rango estatutario de la UAI).",
      "Resoluciones SIGEN N° 299/2026 y N° 311/2026 (Lineamientos complementarios Universidades Nacionales - UAI 2027 y sistema SISAC).",
      "Actas paritarias particulares UNCo-APUNC (CCT 366/06 Título IX) y convenios colectivos docentes (CCT 1246/15).",
      "Informes de auditoría interna, registros en SIU-Mapuche y SUDOCU, e indicadores territoriales en nodos regionales."
    ],
    preguntasGuia: [
      "¿Qué organismos auditan externa e internamente al organismo y qué observaciones recientes se formularon sobre el factor humano?",
      "¿Qué metas cuantitativas o indicadores clave de desempeño (KPIs) utiliza formalmente la entidad para evaluar el rendimiento laboral?",
      "¿Cómo se articula el circuito de control para que las auditorías no sean punitivas sino que retroalimenten la planificación estratégica?"
    ],
    respuestaSituada: "El CURZAS está sujeto a fiscalización externa de la AGN y a una UAI con rango estatutario único en el país. La reactivación de SIGEN (Res. 311/2026) exige priorizar la nómina salarial en el PAT 2027 y cargar alertas en SISAC. Se constata un diferimiento histórico en la evaluación nodocente ordinaria y una brecha de indicadores estratégicos. Se diseñan 4 KPIs (tiempos <=5d, liquidaciones >=99%, capacitación >=90% y continuidad en nodos >=95%) articulados a un bucle de retroalimentación para el aprendizaje institucional."
  });
}

// 3. Agregar Nuevos Autores en Fichas de Respaldo
const nuevosAutores = [
  {
    autor: "Telma I. Ramírez (2023)",
    concepto: "Indicadores de gestión y control en la administración financiera pública: Criterios de pertinencia, economía informativa y construcción de tableros de comando en el sector público."
  },
  {
    autor: "John Mayne (2016)",
    concepto: "Abordaje de la atribución a través del análisis de contribución: Uso sensato de mediciones de desempeño para vincular actividades y productos con resultados territoriales."
  },
  {
    autor: "Osvaldo Feinstein (2016)",
    concepto: "La evaluación pragmática de políticas públicas: Superar el enfoque formalista o punitivo para priorizar el aprendizaje organizacional, la retroalimentación y la toma de decisiones basada en evidencia."
  },
  {
    autor: "Roberto Martínez Nogueira (2016)",
    concepto: "Fundamentos conceptuales y analíticos de la evaluación de políticas públicas: Evaluación de consistencia, implementación y efectos reales en contextos de alta complejidad institucional."
  }
];

nuevosAutores.forEach(na => {
  if (!presData.fichasRespaldo.autores.some(a => a.autor.includes(na.autor.split(' ')[0]))) {
    presData.fichasRespaldo.autores.push(na);
  }
});

// 4. Agregar Nuevas Normas en Fichas de Respaldo
const nuevasNormas = [
  {
    norma: "Resolución SIGEN N° 311/2026",
    descripcion: "Lineamientos complementarios y pautas gerenciales para Universidades Nacionales (PAT 2027). Instruye auditar prioritariamente Nómina Salarial y registrar observaciones en SISAC."
  },
  {
    norma: "Resolución SIGEN N° 299/2026",
    descripcion: "Normas y criterios técnicos de auditoría interna basada en riesgos para el sector público nacional (B.O. 02/10/2026)."
  },
  {
    norma: "Estatuto UNCo (Rango Estatutario UAI)",
    descripcion: "Otorga jerarquía estatutaria a la Unidad de Auditoría Interna, garantizando su independencia funcional y técnica respecto del Rectorado de turno."
  }
];

nuevasNormas.forEach(nn => {
  if (!presData.fichasRespaldo.normativa.some(n => n.norma === nn.norma)) {
    presData.fichasRespaldo.normativa.push(nn);
  }
});

// 5. Agregar Nuevas FAQ Jurado
const nuevasFaqs = [
  {
    pregunta: "¿Qué particularidad única tiene la Unidad de Auditoría Interna (UAI) de la UNCo?",
    respuesta: "A diferencia de la mayoría de las universidades nacionales, la UAI de la UNCo goza de rango estatutario consagrado en el Estatuto Universitario. Esto blinda su autonomía técnica y funcional, permitiéndole fiscalizar con independencia al Rectorado y formular sus Planes Anuales de Trabajo (PAT) con criterios rigurosos de riesgo."
  },
  {
    pregunta: "¿Qué impacto tiene la Resolución SIGEN N° 311/2026 en el área de Personal del CURZAS?",
    respuesta: "La resolución, sancionada en octubre de 2026, reactiva y consolida la fiscalización del órgano rector sobre las universidades, priorizando la auditoría de 'Personal y Nómina Salarial' para el PAT 2027 y exigiendo la carga de observaciones y planes de acción correctiva en el sistema informático SISAC."
  },
  {
    pregunta: "¿Por qué existe una 'brecha de medición' en la evaluación de desempeño y cómo la resuelve el Tablero de 4 KPIs?",
    respuesta: "Porque la institución ha dependido de registros de insumo y cumplimiento legal formal (cargos en Mapuche y títulos), sin medir tiempos ni calidad del servicio. El Tablero propuesto introduce 4 KPIs operativos: tramitación de novedades en <= 5 días, liquidaciones sin error >= 99%, capacitación nodocente >= 90% y continuidad en los 10 nodos >= 95%."
  }
];

nuevasFaqs.forEach(nf => {
  if (!presData.fichasRespaldo.faq.some(f => f.pregunta === nf.pregunta)) {
    presData.fichasRespaldo.faq.push(nf);
  }
});

// 6. Actualizar Slides
// Slide 1
presData.slides[0].puntosClave = [
  "Expositor: Téc. Sup. en Recursos Humanos Héctor Daniel Ayarachi Fuentes (Ciclo de Licenciatura • Legajo N° 8252)",
  "Casa de Estudios: CURZAS — Centro Universitario Regional Zona Atlántica y Sur (UNCo • Sede Viedma)",
  "Espacio de Cátedra: Planeamiento y Control de las Organizaciones 2026 (Mgter. Susana Lopez • Lic. Carlos Jauge)",
  "Propósito de la Exposición: Defensa integral de los 5 Avances del Diagnóstico Situado Institucional (17 Minutos)"
];
presData.slides[0].tiempoSugerido = "⏱️ ~35-40 seg";
presData.slides[0].guionOrador = "Muy buenos días, estimada profesora Mgter. Susana Lopez y estimado profesor Lic. Carlos Jauge. Mi nombre es Héctor Daniel Ayarachi Fuentes, Técnico Superior en Recursos Humanos y cursante de la Licenciatura en el CURZAS. Hoy tengo el agrado de presentarles la defensa integral de nuestro trabajo de cátedra, articulado a lo largo de 5 Avances. En un tiempo de 17 minutos, recorreremos desde el modelo de gestión y la red territorial, hasta los procesos, el presupuesto salarial y el tablero de control de personal.";

// Slide 2
presData.slides[1].titulo = "Los 5 Avances de Gestión: Diagnóstico Integral del CURZAS";
presData.slides[1].subtitulo = "Lo Más Destacado y Revelador que Detectamos en Cada Etapa del Análisis (Unidades I a V)";
presData.slides[1].puntosClave = [
  "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Burocracia profesional que asegura legalidad y convenios paritarios, frente al reto de evitar el aislamiento en el co-gobierno.",
  "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Red viva en 10 nodos provinciales, superando silos de datos con CONICET/INTA mediante concertación política situada (Matus).",
  "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): El organigrama formal invisibiliza a los nodos; mapeamos el circuito de licencias y el choque entre digital y carga manual.",
  "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): El 90,2% del gasto va a salarios (Inciso 1) con 40% de Zona Desfavorable; el personal es la auténtica capacidad estatal.",
  "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V): Ecosistema AGN/UAI/SIGEN (Res. 311/2026), diseño de un Tablero de 4 KPIs y bucle de retroalimentación para el aprendizaje institucional."
];
presData.slides[1].metadatosFooter = "Hoja de Ruta Ejecutiva • Resumen Somero de los 5 Avances • CURZAS - UNCo";
presData.slides[1].tiempoSugerido = "⏱️ ~35-40 seg";
presData.slides[1].guionOrador = "Para ordenar nuestra exposición de 17 minutos, resumimos los 5 hitos centrales: en el Avance 1 examinamos la burocracia profesional que garantiza legalidad; en el Avance 2 articulamos la planificación situacional con la red de 10 nodos; en el Avance 3 mapeamos los procesos y cuellos de botella en licencias; en el Avance 4 demostramos que el 90,2% del gasto va a salarios; y en el Avance 5 consolidamos el control mediante la UAI estatutaria, la Resolución SIGEN 311/2026 y un Tablero de 4 KPIs estratégicos.";

// Ajustar ritmo sugerido a todas las filminas existentes
for (let i = 2; i <= 23; i++) {
  presData.slides[i].tiempoSugerido = "⏱️ ~35-40 seg";
}

// 7. Definir las 4 filminas del Avance 5 (Unidad V)
const slide25 = {
  id: "slide_25",
  numero: 25,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Ecosistema de Control Externo e Interno",
  badge: "UNIDAD V • CONTROL Y AUDITORÍA",
  titulo: "Ecosistema de Control: AGN, UAI Estatutaria y Reactivación SIGEN",
  subtitulo: "Fiscalización Externa, Rango Estatutario Único y Resoluciones SIGEN N° 299 y 311/2026",
  puntosClave: [
    "Preguntas Guía Cátedra: ¿Qué organismos auditan externa e internamente al organismo? ¿Cuándo fue la última auditoría formal y qué observaciones se formularon al área de personal?",
    "Control Externo de la AGN (Art. 85 CN y Ley 24.156): Auditoría posterior de estados contables y Cuenta de Inversión (SAF 809), canalizada institucionalmente en resguardo de la autonomía.",
    "UAI con Rango Estatutario Propio: La UNCo blinda en su Estatuto la independencia técnica de su UAI (Cr. Oscar Rebolledo), formulando el PAT 2027 y auditoría de riesgos en todas las sedes.",
    "Reactivación SIGEN (Res. N° 299 y 311/2026): El órgano rector instruye auditar con prioridad el rubro 'Personal y Nómina Salarial' e implementar el seguimiento de alertas en el sistema SISAC."
  ],
  metadatosFooter: "Avance 5 • Ecosistema de Control Público • Ley 24.156, Estatuto UNCo y Res. SIGEN 311/2026",
  escena3D: "anim_25",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Iniciamos el Avance 5 examinando el ecosistema de control en el CURZAS. Contamos con el control externo de la AGN sobre la Cuenta de Inversión del SAF 809. Pero lo más distintivo es que la UNCo es pionera en otorgar rango estatutario a su Unidad de Auditoría Interna, garantizando su total independencia. Además, la reciente Resolución SIGEN 311 de octubre de 2026 reactiva la supervisión rectora, exigiendo auditar prioritariamente la masa salarial en el PAT 2027 y cargar el seguimiento de desvíos en el sistema SISAC."
};

const slide26 = {
  id: "slide_26",
  numero: 26,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Evaluación Laboral y Brecha de Medición",
  badge: "UNIDAD V • EVALUACIÓN LABORAL",
  titulo: "Evaluación del Desempeño: CCT 366/06, Carrera Docente y Brecha de Medición",
  subtitulo: "Diferimiento en APUNC, Reválidas Académicas y la Necesidad de un Tablero Estratégico",
  puntosClave: [
    "Estamento Nodocente (CCT Dec. 366/06 Título IX): Calificación anual formalmente prevista, pero con diferimiento histórico paritario entre UNCo y APUNC suplido por promociones por antigüedad.",
    "Estamento Docente (CCT Dec. 1246/15): Evaluación periódica mediante concursos públicos, reválidas, informes anuales, SIGEVA y encuestas de cátedra en SIU-Guaraní.",
    "Brecha de Medición Estratégica (Telma Ramírez): La institución opera con registros administrativos de insumo (cargos en Mapuche), sin indicadores de resultado, eficiencia o calidad.",
    "Superación del Control Punitivo (Feinstein y Mayne): Es imprescindible pasar de la auditoría burocrática al análisis de contribución del factor humano al cumplimiento de la misión institucional."
  ],
  metadatosFooter: "Avance 5 • Evaluación del Desempeño y Convenios Colectivos • CCT 366/06 y CCT 1246/15",
  escena3D: "anim_26",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Al analizar la evaluación laboral detectamos una marcada asimetría. Mientras el estamento docente rinde cuentas mediante concursos, reválidas periódicas y encuestas de cátedra, en el sector nodocente existe un diferimiento histórico en la aplicación de la calificación del CCT 366/06 acordado en paritaria con APUNC. Como advierte Telma Ramírez, el CURZAS administra cargos pero no mide resultados ni tiempos. Necesitamos superar el control punitivo y adoptar un análisis de contribución según John Mayne."
};

const slide27 = {
  id: "slide_27",
  numero: 27,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Tablero de Control de RR. HH. (4 KPIs)",
  badge: "UNIDAD V • TABLERO DE COMANDO",
  titulo: "Tablero de Control de RR. HH.: Los 4 KPIs Estratégicos",
  subtitulo: "Medición de Tiempos, Calidad, Competencias Digitales y Cobertura Territorial",
  puntosClave: [
    "Pregunta Guía Cátedra: Diseño de un Tablero de Control preliminar con KPIs específicos para medir la eficiencia de los recursos humanos (Ramírez, 2023).",
    "KPI-1 (Eficiencia de Procesos): Tiempo medio de tramitación de novedades en personal (SUDOCU a Mapuche) — Línea base: ~12 días hábiles → Meta: <= 5 días hábiles.",
    "KPI-2 (Calidad y Control Interno): Tasa de liquidaciones mensuales sin observaciones ni rectificativas — Línea base: ~94,0% → Meta: >= 99,0% (Monitoreo SISAC).",
    "KPI-3 y KPI-4 (Formación y Territorio): Cobertura de capacitación digital nodocente (Meta: >= 90% anual) y Continuidad docente en los 10 nodos regionales (Meta: >= 95%)."
  ],
  metadatosFooter: "Avance 5 • Tablero de Control de Gestión en Recursos Humanos • Telma Ramírez y John Mayne",
  escena3D: "anim_27",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para cerrar esta brecha diseñamos un Tablero de Control con 4 KPIs estratégicos basados en Telma Ramírez. El KPI 1 reduce a menos de 5 días el trámite de novedades entre SUDOCU y Mapuche. El KPI 2 eleva al 99% las liquidaciones sin errores, previniendo observaciones de UAI y SISAC. El KPI 3 garantiza que el 90% del personal se capacite en competencias digitales con APUNC. Y el KPI 4 mide la contribución asegurando al menos un 95% de continuidad pedagógica en los 10 nodos de la provincia."
};

const slide28 = {
  id: "slide_28",
  numero: 28,
  bloque: "AVANCE 5: SISTEMAS DE CONTROL, TABLERO DE COMANDO Y EVALUACIÓN (UNIDAD V)",
  esquema: "Circuito de Control y Retroalimentación",
  badge: "UNIDAD V • BUCLE DE GESTIÓN",
  titulo: "Circuito de Control y Bucle de Retroalimentación Continua",
  subtitulo: "Articulación entre Operación, Tablero, Auditoría (PAT 2027) y Aprendizaje Institucional",
  puntosClave: [
    "Eslabones Operativos (1 y 2): Registros diarios en SUDOCU/Mapuche y visualización semafórica de los 4 KPIs en el Tablero de Comando para alertas tempranas.",
    "Auditoría Basada en Riesgos (Eslabón 3): Control preventivo de la UAI estatutaria bajo pautas de la Res. SIGEN 311/2026 y carga obligatoria de compromisos en SISAC.",
    "Evaluación Pragmática (Eslabón 4 - Feinstein): Uso de los hallazgos para enriquecer la concertación paritaria UNCo–APUNC y reasignar soporte a los nodos territoriales.",
    "Bucle de Retroalimentación Integral (↺): Los hallazgos del Tablero y SISAC corrigen la Planificación (Avance 2), los flujos digitales (Avance 3) y la defensa presupuestaria (Avance 4)."
  ],
  metadatosFooter: "Avance 5 • Bucle de Retroalimentación y Aprendizaje Organizacional • Martínez Nogueira y Feinstein",
  escena3D: "anim_28",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "La evaluación solo cobra sentido si retroalimenta la gestión. Modelamos un circuito en 4 eslabones: la operación diaria en SUDOCU y Mapuche alimenta el Tablero; la UAI audita con enfoque de riesgos bajo la Resolución 311 y reporta al SISAC; y finalmente, la conducción aplica una evaluación pragmática según Feinstein. El bucle de retroalimentación vuelve a conectar con el PES del Avance 2, la digitalización del Avance 3 y la asignación presupuestaria del Avance 4, logrando un auténtico aprendizaje institucional."
};

// 8. Actualizar Slide 29 (Conclusión General de los 5 Avances)
const slide29 = {
  id: "slide_29",
  numero: 29,
  bloque: "CIERRE: CONCLUSIONES INTEGRALES Y DEFENSA",
  esquema: "Conclusión General de los 5 Avances",
  badge: "SÍNTESIS FINAL Y PREGUNTAS",
  titulo: "Conclusión General: Síntesis Crítica de los 5 Avances",
  subtitulo: "Qué Hicimos, Hallazgos Clave y el Problema Detectado Más Importante en Cada Unidad",
  puntosClave: [
    "Avance 1: Contexto, Modelo de Gestión y Gobernanza (Unidad I): Qué hicimos: Caracterizamos el modelo institucional y la autonomía • Lo más destacado: Burocracia Profesional que garantiza legalidad y convenios paritarios • Problema crítico: Riesgo de endogamia en co-gobierno y gobernanza digital incipiente (sin datos abiertos ni IA en RRHH).",
    "Avance 2: Diagnóstico y Planificación Estratégica Situacional (Unidad II): Qué hicimos: Diagnóstico situacional, FODA, actores y capacidades estatales • Lo más destacado: Red viva de 10 Nodos en Río Negro y planificación PES (Matus) • Problema crítico: Silos de datos interinstitucionales (SIU/SIGEVA) y brecha digital territorial en personal nodocente.",
    "Avance 3: Diseño Organizacional, Procesos y Ecosistema Digital (Unidad III): Qué hicimos: Mapeamos estructura formal vs real y flujograma de licencias • Lo más destacado: Visibilización de la estructura real desconcentrada en territorio frente al organigrama de jure • Problema crítico: Parálisis de licencias por falta de subrogancia y falsa digitalización (papel escaneado sin interoperabilidad).",
    "Avance 4: Programación Presupuestaria y Factor Humano (Unidad IV): Qué hicimos: Presupuesto por programas (Prog. 26) y centralidad del Inciso 1 • Lo más destacado: El 90,2% del gasto va a salarios, confirmando que las personas son la capacidad estatal • Problema crítico: Asfixia operativa (solo 9,8% para funcionamiento) y rigidez del 40% de Zona Desfavorable ante el ajuste fiscal.",
    "Avance 5: Sistemas de Control, Tablero de Comando y Evaluación (Unidad V): Qué hicimos: Ecosistema de control y diseño de Tablero de RR. HH. • Lo más destacado: UAI con rango estatutario único y reactivación SIGEN (Res. 311/2026 y SISAC) • Problema crítico: Diferimiento histórico en la evaluación nodocente (APUNC) y ausencia previa de un Tablero de Control de gestión.",
    "Apertura al Tribunal y Agradecimiento: Reconocimiento sincero a los evaluadores Mgter. Susana Lopez y Lic. Carlos Jauge por su excelencia formativa • Apertura a la deliberación y preguntas del Tribunal."
  ],
  metadatosFooter: "Téc. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes • Ciclo Lectivo 2026 • CURZAS - UNCo",
  escena3D: "anim_29",
  tiempoSugerido: "⏱️ ~35-40 seg",
  guionOrador: "Para concluir esta defensa integral en 17 minutos, sintetizamos los 5 Avances:\nEn el Avance 1 validamos una Burocracia Profesional que resguarda la legalidad y los convenios paritarios; el problema crítico detectado es el riesgo de endogamia y la falta de datos abiertos.\nEn el Avance 2 articulamos la planificación de Matus con la red de 10 nodos; el desafío detectado son los silos de datos y la dispersión geográfica.\nEn el Avance 3 contrastamos el organigrama con la realidad; detectamos los cuellos de botella por falta de subrogancia y la falsa digitalización del papel escaneado.\nEn el Avance 4 comprobamos que el 90,2% del presupuesto va al Inciso 1 por el plus de zona del 40%, demostrando que el personal es la auténtica capacidad del Estado; el problema es la asfixia del 9,8% de funcionamiento.\nY en el Avance 5 consolidamos el control con una UAI de rango estatutario y la Resolución SIGEN 311/2026, proponiendo un Tablero de 4 KPIs y un bucle de retroalimentación para superar la brecha histórica de evaluación nodocente.\nAgradezco sinceramente a la profesora Susana Lopez y al profesor Carlos Jauge por su acompañamiento académico. Quedo a su entera disposición para las preguntas del Tribunal."
};

// Reemplazar o insertar slides
// presData.slides actualmente tiene 25 elementos.
// presData.slides[24] era la filmina de conclusión de 4 avances.
// La reemplazamos por slide25, y luego agregamos slide26, slide27, slide28, slide29.
presData.slides[24] = slide25;
presData.slides[25] = slide26;
presData.slides[26] = slide27;
presData.slides[27] = slide28;
presData.slides[28] = slide29;

console.log('Total slides after integration:', presData.slides.length);

// 9. Guardar archivo con formato limpio y cabecera
const header = `/**
 * =============================================================================
 * METADATOS Y CONTENIDOS OFICIALES DE LA DEFENSA ORAL
 * Asignatura: Planeamiento y Control de las Organizaciones (2026)
 * Carrera: Licenciatura en Recursos Humanos - CURZAS / UNCo
 * Estudiante: Tec. Sup. en RR. HH. Héctor Daniel Ayarachi Fuentes
 * Docentes Evaluadores: Mgter. Susana Lopez y Lic. Carlos Jauge
 * =============================================================================
 */

const PRESENTACION_DATA = `;

const footer = `;

// Compatibilidad en navegadores y entornos CommonJS/Node
if (typeof window !== "undefined") {
  window.PRESENTACION_DATA = PRESENTACION_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PRESENTACION_DATA;
}
`;

const outputContent = header + JSON.stringify(presData, null, 2) + footer;
fs.writeFileSync(path.join(__dirname, '../data/presentacion_data.js'), outputContent, 'utf8');
console.log('Successfully written data/presentacion_data.js!');

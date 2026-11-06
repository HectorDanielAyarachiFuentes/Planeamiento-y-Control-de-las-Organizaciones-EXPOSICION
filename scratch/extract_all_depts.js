const fs = require('fs');

const svg = fs.readFileSync('assets/red-territorial-nodos.svg', 'utf8');

const DEPT_METADATA = {
  "path2278": {
    name: "General Roca",
    cabecera: "General Roca",
    nodes: ["General Roca (Alto Valle)"],
    desc: "Cuello norte característico de Río Negro. Corazón del Alto Valle, centro agroindustrial frutícola y mayor densidad poblacional.",
    colorHex: "#F5CAC2"
  },
  "path2256": {
    name: "El Cuy",
    cabecera: "El Cuy",
    nodes: ["El Cuy"],
    desc: "Vasta meseta centro-norte. Enlace estratégico entre el Alto Valle y los valles del Río Negro con actividades ganaderas extensivas.",
    colorHex: "#EAE0D5"
  },
  "path2290": {
    name: "Avellaneda",
    cabecera: "Choele Choel",
    nodes: ["Choele Choel (Valle Medio)"],
    desc: "Valle Medio del Río Negro, nodo logístico bioceánico y centro hortícola con amplia tradición cooperativa.",
    colorHex: "#FDE8BE"
  },
  "path2300": {
    name: "Pichi Mahuida",
    cabecera: "Río Colorado",
    nodes: ["Río Colorado (13.828 hab.)"],
    desc: "Extremo noreste rionegrino sobre el Río Colorado; portal de integración con La Pampa y Buenos Aires.",
    colorHex: "#EAD7C5"
  },
  "path2191": {
    name: "Conesa",
    cabecera: "General Conesa",
    nodes: ["General Conesa (7.123 hab.)"],
    desc: "Valle irrigado del Río Negro; cruce de rutas estratégicas RN 250 y RN 251 hacia la costa y la Línea Sur.",
    colorHex: "#D3EADB"
  },
  "path2205": {
    name: "Adolfo Alsina",
    cabecera: "Viedma (Capital Provincial)",
    nodes: ["Viedma CURZA (80.632 hab.)"],
    desc: "Capital histórica y sede central del CURZAS - Universidad Nacional del Comahue. Cabecera administrativa y nodo troncal.",
    colorHex: "#C5DCF0",
    isCapital: true
  },
  "path2204": {
    name: "San Antonio",
    cabecera: "San Antonio Oeste",
    nodes: ["San Antonio Oeste (16.265 hab.)", "Las Grutas", "Sierra Grande (7.404 hab.)"],
    desc: "Abarca el Golfo San Matías, el puerto de aguas profundas de San Antonio Este, Las Grutas y el enclave minero e industrial de Sierra Grande.",
    colorHex: "#BDE5DE"
  },
  "path2216": {
    name: "Valcheta",
    cabecera: "Valcheta",
    nodes: ["Valcheta (4.493 hab.)", "Ramos Mexía (973 hab.)"],
    desc: "Portal este de la Línea Sur sobre la Ruta 23. Oasis del arroyo Valcheta y acceso a la imponente Meseta de Somuncurá.",
    colorHex: "#E6D4EB"
  },
  "path2220": {
    name: "9 de Julio",
    cabecera: "Sierra Colorada",
    nodes: ["Sierra Colorada (1.542 hab.)"],
    desc: "Centro geográfico exacto de la provincia de Río Negro; corazón administrativo y de enlace de la Línea Sur.",
    colorHex: "#EFE0CC"
  },
  "path2249": {
    name: "25 de Mayo",
    cabecera: "Maquinchao",
    nodes: ["Los Menucos (5.187 hab.)", "Maquinchao (2.494 hab.)", "Ing. Jacobacci (6.261 hab.)"],
    desc: "Extenso departamento ovino y lanero de la provincia; contiene centros de servicios clave sobre la traza ferroviaria.",
    colorHex: "#D7EBD0"
  },
  "path2289": {
    name: "Pilcaniyeu",
    cabecera: "Pilcaniyeu",
    nodes: ["Pilcaniyeu"],
    desc: "Estepa precordillerana de pastizales altos entre la planicie central y los contrafuertes andinos.",
    colorHex: "#DED8F0"
  },
  "path2275": {
    name: "Bariloche",
    cabecera: "San Carlos de Bariloche",
    nodes: ["San Carlos de Bariloche"],
    desc: "Región andina cordillerana lacustre, bosques patagónicos y mayor centro turístico y científico de Río Negro.",
    colorHex: "#C2D7EB"
  },
  "path2263": {
    name: "Ñorquinco",
    cabecera: "Ñorquinco",
    nodes: ["Ñorquinco"],
    desc: "Sudoeste cordillerano recorrido por la legendaria formación ferroviaria 'La Trochita'.",
    colorHex: "#F7E5C3"
  }
};

// Extract paths from SVG
const pathRegex = /<path([^>]+)>/g;
let match;
const depts = [];
while ((match = pathRegex.exec(svg)) !== null) {
  const attrs = match[1];
  const idM = attrs.match(/\sid="([^"]+)"/);
  const dM = attrs.match(/\sd="([^"]+)"/);
  if (idM && dM && DEPT_METADATA[idM[1]]) {
    const meta = DEPT_METADATA[idM[1]];
    depts.push({
      id: idM[1],
      name: meta.name,
      cabecera: meta.cabecera,
      nodes: meta.nodes,
      desc: meta.desc,
      colorHex: meta.colorHex,
      isCapital: !!meta.isCapital,
      d: dM[1]
    });
  }
}

console.log('Extracted depts count:', depts.length);
fs.writeFileSync('scratch/extracted_depts.json', JSON.stringify(depts, null, 2), 'utf8');
console.log('Saved scratch/extracted_depts.json!');


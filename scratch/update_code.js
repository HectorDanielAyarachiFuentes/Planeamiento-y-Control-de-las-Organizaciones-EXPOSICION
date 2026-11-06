const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

const regexTabs = /<div class="drawer-tabs">[\s\S]*?<\/div>/;
const newTabs = `<div class="drawer-tabs">
      <button class="drawer-tab active" data-tab="autores">Autores Clave</button>
      <button class="drawer-tab" data-tab="normativa">Normativa & Estatuto</button>
      <button class="drawer-tab" data-tab="territorio">Red Territorial</button>
      <button class="drawer-tab" data-tab="faq">FAQ Jurado</button>
      <button class="drawer-tab" data-tab="svgs">Diagramas SVG</button>
      <button class="drawer-tab" data-tab="catedra">Material Cátedra 📚</button>
    </div>`;

html = html.replace(regexTabs, newTabs);
html = html.replace(/\?v=4\.[0-7]/g, '?v=4.8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');

// 2. UPDATE js/app.js
let app = fs.readFileSync('js/app.js', 'utf8');

// A. Fix territorio tab rendering in renderDrawerTab
const oldTerritorio = `    } else if (tabType === "territorio" && f.territorio) {
      f.territorio.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card";
        card.innerHTML = \`
          <h4>📍 \${item.sede}</h4>
          <p>\${item.detalle}</p>
        \`;
        this.drawerContent.appendChild(card);
      });
    }`;

const newTerritorio = `    } else if (tabType === "territorio") {
      const nodos = f.nodosTerritoriales || f.territorio || [];
      nodos.forEach((item) => {
        const card = document.createElement("div");
        card.className = "ref-card territorio-card";
        card.innerHTML = \`
          <h4>📍 \${item.sede}</h4>
          <p>\${item.detalle}</p>
        \`;
        this.drawerContent.appendChild(card);
      });
    }`;

// B. Clean up old TFG categories and update header and search in renderCatedraMaterialTab
const oldHeader = `    // 1. Encabezado con métricas
    const headerBox = document.createElement("div");
    headerBox.className = "catedra-header-box";
    headerBox.innerHTML = \`
      <div class="catedra-header-title">
        <span>📚 Repositorio Bibliográfico Oficial</span>
        <span class="catedra-total-badge">\${this.catedraData.length} Docs</span>
      </div>
      <p class="catedra-header-desc">
        Compendio completo de textos metodológicos, resoluciones del TFG, ordenanzas del CURZA, reglamentos y guías APA para consulta inmediata del tribunal y tesistas.
      </p>
    \`;`;

const newHeader = `    // 1. Encabezado con métricas
    const headerBox = document.createElement("div");
    headerBox.className = "catedra-header-box";
    headerBox.innerHTML = \`
      <div class="catedra-header-title">
        <span>📚 Repositorio Bibliográfico Oficial</span>
        <span class="catedra-total-badge">\${this.catedraData.length} Docs</span>
      </div>
      <p class="catedra-header-desc">
        Compendio oficial de bibliografía obligatoria, complementaria y normativas de la cátedra Planeamiento y Control de las Organizaciones (Unidades I a V).
      </p>
    \`;`;

const oldSearch = `placeholder="Buscar por autor, tema, resolución (ej: Sampieri, Sautu, 266-23)..."`;
const newSearch = `placeholder="Buscar por autor, tema, concepto (ej: Matus, Oszlak, Makon, SIGEN, Aguilar Villanueva)..."`;

const oldCategories = `    // 3. Pastillas de filtrado por Unidad y Área
    const categories = [
      { id: "all", label: "Todos", count: this.catedraData.length },
      { id: "u1", label: "Unidad I", count: this.catedraData.filter(d => d.categoriaSlug === 'u1').length },
      { id: "u2", label: "Unidad II", count: this.catedraData.filter(d => d.categoriaSlug === 'u2').length },
      { id: "u3", label: "Unidad III", count: this.catedraData.filter(d => d.categoriaSlug === 'u3').length },
      { id: "u4", label: "Unidad IV", count: this.catedraData.filter(d => d.categoriaSlug === 'u4').length },
      { id: "tfg", label: "Recursos TFG & Normas", count: this.catedraData.filter(d => d.categoriaSlug === 'tfg').length },
      { id: "redaccion", label: "Redacción & Defensa", count: this.catedraData.filter(d => d.categoriaSlug === 'redaccion').length },
      { id: "actividades", label: "Actividades", count: this.catedraData.filter(d => d.categoriaSlug === 'actividades').length },
      { id: "general", label: "Programa", count: this.catedraData.filter(d => d.categoriaSlug === 'general').length }
    ];`;

const newCategories = `    // 3. Pastillas de filtrado por Unidad y Área (Unidades I a V)
    const categories = [
      { id: "all", label: "Todos", count: this.catedraData.length },
      { id: "u1", label: "Unidad I: Gobernanza", count: this.catedraData.filter(d => d.categoriaSlug === 'u1').length },
      { id: "u2", label: "Unidad II: PES Matus", count: this.catedraData.filter(d => d.categoriaSlug === 'u2').length },
      { id: "u3", label: "Unidad III: Diseño Org.", count: this.catedraData.filter(d => d.categoriaSlug === 'u3').length },
      { id: "u4", label: "Unidad IV: Finanzas", count: this.catedraData.filter(d => d.categoriaSlug === 'u4').length },
      { id: "u5", label: "Unidad V: Control & Eval.", count: this.catedraData.filter(d => d.categoriaSlug === 'u5').length }
    ];`;

// C. Update file preview support for txt in openDocModal and icon in updateCatedraList
const oldExtCheck = `if (ext === "pdf" || ext === "htm" || ext === "html") {`;
const newExtCheck = `if (ext === "pdf" || ext === "htm" || ext === "html" || ext === "txt") {`;

const oldIcon = `      if (ext === "pdf") icon = "📕";
      else if (ext === "docx" || ext === "doc") icon = "📘";
      else if (ext === "htm" || ext === "html") icon = "🌐";`;

const newIcon = `      if (ext === "pdf") icon = "📕";
      else if (ext === "docx" || ext === "doc") icon = "📘";
      else if (ext === "htm" || ext === "html") icon = "🌐";
      else if (ext === "txt") icon = "📝";`;

// Normalize line endings for replacement
function replaceNormalized(source, find, repl) {
  const normSource = source.replace(/\r\n/g, '\n');
  const normFind = find.replace(/\r\n/g, '\n');
  const normRepl = repl.replace(/\r\n/g, '\n');
  if (!normSource.includes(normFind)) {
    console.error('Find pattern not found:\n', normFind.slice(0, 80));
    return source;
  }
  const result = normSource.replace(normFind, normRepl);
  return source.includes('\r\n') ? result.replace(/\n/g, '\r\n') : result;
}

app = replaceNormalized(app, oldTerritorio, newTerritorio);
app = replaceNormalized(app, oldHeader, newHeader);
app = replaceNormalized(app, oldSearch, newSearch);
app = replaceNormalized(app, oldCategories, newCategories);
app = replaceNormalized(app, oldExtCheck, newExtCheck);
app = replaceNormalized(app, oldIcon, newIcon);

fs.writeFileSync('js/app.js', app, 'utf8');
console.log('js/app.js updated successfully!');


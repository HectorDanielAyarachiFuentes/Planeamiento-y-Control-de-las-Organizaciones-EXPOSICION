const fs = require('fs');

let appCode = fs.readFileSync('js/app.js', 'utf8');

const targetCRLF = '    } else if (tabType === "consignas") {\r\n      this.renderConsignasTab();\r\n    } else if (tabType === "catedra") {';
const targetLF = '    } else if (tabType === "consignas") {\n      this.renderConsignasTab();\n    } else if (tabType === "catedra") {';

const replacementCRLF = '    } else if (tabType === "consignas") {\r\n      this.renderConsignasTab();\r\n    } else if (tabType === "avance4") {\r\n      this.renderAvance4Tab();\r\n    } else if (tabType === "catedra") {';
const replacementLF = '    } else if (tabType === "consignas") {\n      this.renderConsignasTab();\n    } else if (tabType === "avance4") {\n      this.renderAvance4Tab();\n    } else if (tabType === "catedra") {';

if (appCode.includes(targetCRLF)) {
  appCode = appCode.replace(targetCRLF, replacementCRLF);
  console.log('✅ Replaced CRLF target in renderDrawerTab');
} else if (appCode.includes(targetLF)) {
  appCode = appCode.replace(targetLF, replacementLF);
  console.log('✅ Replaced LF target in renderDrawerTab');
} else {
  // Regex replacement
  const regex = /\} else if \(tabType === "consignas"\) \{\s*this\.renderConsignasTab\(\);\s*\} else if \(tabType === "catedra"\) \{/;
  if (regex.test(appCode)) {
    appCode = appCode.replace(regex, `} else if (tabType === "consignas") {
      this.renderConsignasTab();
    } else if (tabType === "avance4") {
      this.renderAvance4Tab();
    } else if (tabType === "catedra") {`);
    console.log('✅ Replaced via regex in renderDrawerTab');
  } else {
    console.error('❌ Could not find target in renderDrawerTab');
  }
}

// Also add openAvance4Drawer if not present
if (!appCode.includes('openAvance4Drawer(')) {
  const hook = '  openConsignasDrawer(avanceNum = null) {';
  const helperMethod = `  openAvance4Drawer(avanceNum = 4) {
    this.openDrawer();
    document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
    const tabBtn = document.querySelector('.drawer-tab[data-tab="avance4"]');
    if (tabBtn) tabBtn.classList.add("active");
    this.renderAvance4Tab(avanceNum);
  }

  openConsignasDrawer(avanceNum = null) {`;
  appCode = appCode.replace(hook, helperMethod);
  console.log('✅ Added openAvance4Drawer helper');
}

fs.writeFileSync('js/app.js', appCode, 'utf8');
console.log('🎉 js/app.js updated successfully!');


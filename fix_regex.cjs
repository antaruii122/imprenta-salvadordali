const fs = require('fs');

const fixes = [
  {
    file: 'src/pages/Home.jsx',
    replace: content => content.replace(/\{ icon: '.*?', title: 'Excelente calidad'/g, "{ icon: '🖨️', title: 'Excelente calidad'")
  },
  {
    file: 'src/pages/QuienesSomos.jsx',
    replace: content => content.replace(/\{ icon: '.*?', title: 'Excelente calidad'/g, "{ icon: '🖨️', title: 'Excelente calidad'")
  },
  {
    file: 'src/pages/Contacto.jsx',
    replace: content => content.replace(/\{ icon: '.*?', title: 'Dirección'/g, "{ icon: '📍', title: 'Dirección'")
  },
  {
    file: 'src/pages/ComunaPage.jsx',
    replace: content => {
      let c = content.replace(/\{ icon: '.*?', title: 'Servicio a domicilio'/g, "{ icon: '🗺️', title: 'Servicio a domicilio'");
      c = c.replace(/<span className="text-2xl">.*?<\/span>/g, '<span className="text-2xl">📍</span>');
      return c;
    }
  },
  {
    file: 'src/pages/BlogPost.jsx',
    replace: content => content.replace(/.*Imprenta en \{relatedComunaObj\.name\}/g, "                      📍 Imprenta en {relatedComunaObj.name}")
  },
  {
    file: 'src/pages/TiendaCategory.jsx',
    replace: content => content.replace(/emoji: '.*?' \}/g, "emoji: '🛍️' }")
  }
];

fixes.forEach(fix => {
  const file = `c:/Users/rcgir/Desktop/Antigravity Pojects/Ricardo Main Usage/imprenta-salvadordali/${fix.file}`;
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = fix.replace(content);
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Fixed', file);
    } else {
      console.log('No change in', file);
    }
  }
});

const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Contacto.jsx',
  'src/data/servicios.js',
  'src/data/comunas.js',
  'src/components/MapSection.jsx',
  'src/components/Footer.jsx',
  'index.html',
  'website.md',
  'checklist.md'
];

const replacements = [
  { old: /Las Condes #10\.415, of 25B/g, new: 'Mayecura 1177, Las Condes' },
  { old: /Las Condes número 10\.415, oficina 25B/g, new: 'Mayecura 1177, Las Condes' },
  { old: /Las Condes #10\.415/g, new: 'Mayecura 1177, Las Condes' },
  { old: /Las Condes #10\.415, of 25B\nLas Condes, Región Metropolitana, Chile/g, new: 'Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile' },
  { old: /Mayecura 1177, Las Condes\\nLas Condes, Región Metropolitana, Chile/g, new: 'Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile' } // In case it gets double replaced
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Custom logic for Contacto.jsx
    if (file.includes('Contacto.jsx')) {
        content = content.replace(
            "Las Condes #10.415, of 25B\\nLas Condes, Región Metropolitana, Chile",
            "Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile"
        );
        content = content.replace(
            /Las Condes #10\.415, of 25B/g,
            "Mayecura 1177, Las Condes"
        );
    } else {
        replacements.forEach(r => {
            content = content.replace(r.old, r.new);
        });
    }

    // specific replacement for Footer and MapSection
    if (file.includes('Footer.jsx')) {
        content = content.replace('📍 Mayecura 1177, Las Condes', '📍 Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile');
    }
    if (file.includes('MapSection.jsx')) {
        content = content.replace('>Mayecura 1177, Las Condes<', '>Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile<');
    }
    if (file.includes('index.html')) {
        content = content.replace(/"streetAddress": "Mayecura 1177, Las Condes"/, '"streetAddress": "Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile"');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

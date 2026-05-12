const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('c:/Users/rcgir/Desktop/Antigravity Pojects/Ricardo Main Usage/imprenta-salvadordali/src');

const replacements = {
  'Ã¡': 'á',
  'Ã©': 'é',
  'Ã­': 'í',
  'Ã³': 'ó',
  'Ãº': 'ú',
  'Ã±': 'ñ',
  'Ã\x81': 'Á',
  'Ã\x89': 'É',
  'Ã\x8d': 'Í',
  'Ã\x93': 'Ó',
  'Ã\x9a': 'Ú',
  'Ã\x91': 'Ñ',
  'Â¿': '¿',
  'Â¡': '¡',
  'â€”': '—',
  'â†’': '→',
  'â† ': '←',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  for (const [bad, good] of Object.entries(replacements)) {
    newContent = newContent.split(bad).join(good);
  }
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed encoding in', file);
  }
});

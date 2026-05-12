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
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('c:/Users/rcgir/Desktop/Antigravity Pojects/Ricardo Main Usage/imprenta-salvadordali/src');
files.push('c:/Users/rcgir/Desktop/Antigravity Pojects/Ricardo Main Usage/imprenta-salvadordali/index.html');

const replacements = {
  'Ãš': 'Ú',
  'Ã—': '×',
  'âš¡': '⚡',
  'â• ': '═',
  'â˜…': '★',
  'âœ…': '✅',
  'ðŸŽ’': '🎒',
  'ðŸŽ¯': '🎯',
  'ðŸªª': '🪪',
  'ðŸ“¢': '📢',
  'ðŸ“ ': '📍',
  'ðŸ—ºï¸ ': '🗺️',
  'ðŸ’¬': '💬',
  'ðŸ“„': '📄',
  'ðŸš©': '🚩',
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

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
  'ðŸ› ï¸ ': '🛍️',
  'ðŸ–¨ï¸ ': '🖨️',
  'ðŸ’°': '💰',
  'ðŸ“ž': '📞',
  'ðŸ—ºï¸ ': '🗺️'
};

// also fix the map pin which might be tricky due to different bytes
const pinRegex = /ðŸ“ /g; 

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  for (const [bad, good] of Object.entries(replacements)) {
    newContent = newContent.split(bad).join(good);
  }
  newContent = newContent.replace(pinRegex, '📍');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed emojis in', file);
  }
});

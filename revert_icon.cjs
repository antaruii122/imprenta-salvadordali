const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const indexHtml = path.join(__dirname, 'index.html');

async function findFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await findFiles(filePath, exts));
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (exts.includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

async function revertIcon() {
  const sourceFiles = await findFiles(srcDir, ['.jsx', '.js', '.json']);
  sourceFiles.push(indexHtml);

  for (const sourceFile of sourceFiles) {
    if (!fs.existsSync(sourceFile)) continue;

    let content = fs.readFileSync(sourceFile, 'utf8');
    let modified = false;

    if (content.includes('cropped-icono-66.webp')) {
      content = content.replace(/cropped-icono-66\.webp/g, 'cropped-icono-66.png');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(sourceFile, content, 'utf8');
      console.log(`Reverted references in ${path.relative(__dirname, sourceFile)}`);
    }
  }
  
  console.log('Done reverting icon!');
}

revertIcon().catch(console.error);

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');
const indexHtml = path.join(__dirname, 'index.html');

// Directories to update files in
const directoriesToUpdate = [srcDir];

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

async function convertToWebp() {
  const images = await findFiles(imagesDir, ['.png', '.jpg', '.jpeg']);
  const replacements = [];

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.slice(0, -ext.length) + '.webp';
    const originalFileName = path.basename(imgPath);
    const newFileName = path.basename(webpPath);

    console.log(`Converting ${originalFileName} to WebP...`);
    try {
      await sharp(imgPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      replacements.push({
        old: originalFileName,
        new: newFileName,
        oldExt: ext
      });

      // Optional: Delete the old file
      fs.unlinkSync(imgPath);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err);
    }
  }

  // Update references in source files
  const sourceFiles = await findFiles(srcDir, ['.jsx', '.js', '.json']);
  sourceFiles.push(indexHtml);

  for (const sourceFile of sourceFiles) {
    if (!fs.existsSync(sourceFile)) continue;

    let content = fs.readFileSync(sourceFile, 'utf8');
    let modified = false;

    for (const { old, new: newName } of replacements) {
      // Use regex to replace exact matches of the filename
      // Make sure we only replace in string literals or similar boundaries
      // Escaping old filename just in case
      const escapedOld = old.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      const regex = new RegExp(escapedOld, 'g');
      
      if (regex.test(content)) {
        content = content.replace(regex, newName);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(sourceFile, content, 'utf8');
      console.log(`Updated references in ${path.relative(__dirname, sourceFile)}`);
    }
  }
  
  console.log('Done!');
}

convertToWebp().catch(console.error);

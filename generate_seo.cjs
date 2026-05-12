const fs = require('fs');
const path = require('path');

const comunasFile = require('./src/data/comunas.js');
const serviciosFile = require('./src/data/servicios.js');
const blogPostsFile = require('./src/data/blogPosts.js');

// Since they are probably ES6 exports, using require() might fail. Let's read and parse them via regex.
function extractSlugs(content) {
  const slugs = [];
  const regex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function generateSitemap() {
  const comunasContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'comunas.js'), 'utf8');
  const serviciosContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'servicios.js'), 'utf8');
  const blogContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'blogPosts.js'), 'utf8');

  const comunas = extractSlugs(comunasContent);
  const servicios = extractSlugs(serviciosContent);
  const blogs = extractSlugs(blogContent);

  const baseUrl = 'https://imprentasalvadordali.cl';
  
  const staticRoutes = [
    '',
    '/quienes-somos',
    '/tienda',
    '/portafolio',
    '/blog',
    '/contacto'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const addUrl = (route, priority = '0.8') => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  };

  // Add static routes
  staticRoutes.forEach(route => addUrl(route, route === '' ? '1.0' : '0.8'));

  // Add comunas
  comunas.forEach(c => addUrl(`/imprenta/${c}`, '0.9'));

  // Add servicios
  servicios.forEach(s => addUrl(`/servicios/${s}`, '0.9'));

  // Add blog posts
  blogs.forEach(b => addUrl(`/blog/${b}`, '0.7'));

  // Tienda categories (hardcoded based on typical use or regex from Tienda.jsx)
  // We'll add the main ones
  const categories = ['oficina', 'marketing', 'etiquetas', 'stickers'];
  categories.forEach(c => addUrl(`/tienda/categoria/${c}`, '0.8'));

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml, 'utf8');
  console.log('Generated public/sitemap.xml');

  // Generate robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
  fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsTxt, 'utf8');
  console.log('Generated public/robots.txt');
}

generateSitemap();

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { comunas } from './src/data/comunas.js'
import { servicios } from './src/data/servicios.js'
import { blogPosts } from './src/data/blogPosts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const staticRoutes = [
  '/',
  '/portafolio',
  '/tienda',
  '/tienda/stickers',
  '/tienda/tarjeteria',
  '/tienda/publicidad',
  '/quienes-somos',
  '/blog',
  '/contacto',
  '/servicios/stickers',
  '/servicios/tarjetas-presentacion',
  '/servicios/volantes',
  '/servicios/pendones',
]

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...blogPosts.map(p => `/blog/${p.slug}`),
  ...comunas.map(c => `/imprenta/${c.slug}`),
  ...servicios.map(s => `/servicios/${s.slug}`),
]

// Remove duplicates
const uniqueRoutes = [...new Set(allRoutes)]

// Generate sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes.map(route => `  <url>
    <loc>https://www.imprentasalvadordalichile.cl${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/tienda') || route.startsWith('/servicios') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`

// Write sitemap
const distDir = path.resolve(__dirname, 'dist')
fs.mkdirSync(distDir, { recursive: true })
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml)

console.log(`✅ Generated sitemap.xml with ${uniqueRoutes.length} URLs`)

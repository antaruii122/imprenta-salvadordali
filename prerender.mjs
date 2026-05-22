import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'
import { comunas } from './src/data/comunas.js'
import { servicios } from './src/data/servicios.js'
import { blogPosts } from './src/data/blogPosts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = [
  '/',
  '/portafolio',
  '/tienda',
  '/tienda/stickers',
  '/tienda/tarjeteria',
  '/tienda/publicidad',
  '/quienes-somos',
  '/blog',
  '/blog/que-es-impresion-dtf-textil',
  '/blog/que-son-los-adhesivos-troquelados',
  '/blog/impresion-tinta-uv-que-es',
  '/contacto',
  '/servicios/stickers',
  '/servicios/tarjetas-presentacion',
  '/servicios/volantes',
  '/servicios/pendones',
  '/imprenta/las-condes',
  '/imprenta/providencia',
  '/imprenta/vitacura',
  '/imprenta/santiago-centro',
  '/imprenta/nunoa',
  '/imprenta/la-florida',
  '/imprenta/maipu',
  '/imprenta/san-miguel',
  '/imprenta/macul',
  '/imprenta/quilicura',
  '/imprenta/pudahuel',
  '/imprenta/san-bernardo',
]

// Build meta map directly from data — bypasses react-helmet-async SSR which doesn't work with React 19 renderToString
const META_MAP = {
  '/': {
    title: 'Imprenta en Las Condes con Entrega 48h | Salvador Dali',
    desc: 'Imprenta en Las Condes con entrega express en 48 horas. Stickers personalizados, tarjetas de presentación, volantes y pendones. Cotiza gratis por WhatsApp.',
  },
  '/portafolio': {
    title: 'Portafolio de Trabajos — Stickers, Tarjetas y Volantes Impresos | Imprenta Salvador Dali',
    desc: 'Galería de trabajos impresos por Imprenta Salvador Dali en Las Condes. Stickers, tarjetas de presentación, volantes, pendones y más. Calidad profesional.',
  },
  '/tienda': {
    title: 'Tienda de Impresión en Las Condes — Stickers, Tarjetas, Volantes y más | Imprenta Salvador Dali',
    desc: 'Compra stickers, tarjetas de presentación, volantes, pendones y etiquetas personalizadas. Imprenta en Las Condes con entrega en 48 horas.',
  },
  '/tienda/stickers': {
    title: 'Stickers Personalizados en Las Condes — Adhesivos en Todo Formato | Imprenta Salvador Dali',
    desc: 'Stickers y adhesivos personalizados impresos en Las Condes. Vinilo transparente, troquelado, circular y más. Entrega en 48 horas. Cotiza por WhatsApp.',
  },
  '/tienda/tarjeteria': {
    title: 'Tarjetas de Presentación en Las Condes — Acabados Premium | Imprenta Salvador Dali',
    desc: 'Impresión de tarjetas de presentación en Las Condes. Laminado mate, brillo, barniz UV y más. Desde $5.000. Entrega en 48 horas.',
  },
  '/tienda/publicidad': {
    title: 'Material Publicitario en Las Condes — Volantes, Pendones y Afiches | Imprenta Salvador Dali',
    desc: 'Impresión de volantes, afiches y pendones en Las Condes. 1.000 volantes desde $20.000. Entrega express en 48 horas.',
  },
  '/quienes-somos': {
    title: 'Quiénes Somos — Imprenta Profesional en Las Condes, Santiago | Imprenta Salvador Dali',
    desc: 'Conoce nuestra historia. Imprenta en Las Condes especializada en impresión láser, offset y UV. Más de 10 años entregando calidad y servicio express en Santiago.',
  },
  '/blog': {
    title: 'Blog de Impresión en Santiago — Consejos y Novedades | Imprenta Salvador Dali',
    desc: 'Artículos sobre impresión digital, DTF textil, stickers troquelados y tinta UV en Santiago. Tips para emprendedores y empresas en Las Condes.',
  },
  '/contacto': {
    title: 'Contacto — Imprenta en Las Condes, Santiago | Imprenta Salvador Dali',
    desc: 'Contáctanos para cotizar stickers, tarjetas, volantes o pendones. Estamos en Mayecura 1177, Las Condes. Respuesta express por WhatsApp.',
  },
}

for (const c of comunas) {
  META_MAP[`/imprenta/${c.slug}`] = { title: c.metaTitle, desc: c.metaDesc }
}
for (const s of servicios) {
  META_MAP[`/servicios/${s.slug}`] = { title: s.metaTitle, desc: s.metaDesc }
}
for (const p of blogPosts) {
  META_MAP[`/blog/${p.slug}`] = { title: p.metaTitle, desc: p.metaDesc }
}

function injectMeta(html, route) {
  const meta = META_MAP[route]
  if (!meta) return html

  let result = html
  // Replace <title>
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
  // Replace or inject <meta name="description">
  if (/<meta name="description"/.test(result)) {
    result = result.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${meta.desc}"/>`)
  } else {
    result = result.replace('</head>', `<meta name="description" content="${meta.desc}"/>\n</head>`)
  }

  return result
}

async function main() {
  console.log('📦 Building client...')
  await build()

  console.log('🖥️  Building server bundle...')
  await build({
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: {
        input: 'src/entry-server.jsx',
      },
    },
  })

  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')

  console.log(`🌐 Pre-rendering ${routes.length} routes...`)

  for (const route of routes) {
    try {
      const { html: appHtml } = await render(route)

      let pageHtml = template.replace('<!--ssr-outlet-->', appHtml)
      pageHtml = injectMeta(pageHtml, route)

      const outDir = path.resolve(__dirname, 'dist', route.slice(1))
      fs.mkdirSync(outDir, { recursive: true })
      const outFile = path.join(outDir, 'index.html')
      fs.writeFileSync(outFile, pageHtml)
      console.log(`  ✓ ${route}`)
    } catch (e) {
      console.error(`  ✗ ${route}: ${e.message}`)
    }
  }

  // Remove server bundle — not needed for deployment
  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true })

  console.log('✅ Pre-rendering complete!')
}

main().catch(console.error)

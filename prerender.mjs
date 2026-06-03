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
  '/blog/precio-tarjetas-presentacion-santiago',
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

// react-helmet-async with React 19 renderToString doesn't populate helmetContext.
// Instead it renders <Helmet> children inline at the very start of the component tree.
// This function extracts those tags from the rendered HTML so we can move them to <head>.
function extractHeadTagsFromStart(html) {
  const regex = /^((?:<(?:meta|link)[^>]*\/?>\s*|<title>[^<]*<\/title>\s*)*)/
  const match = html.match(regex)
  const tags = (match?.[1] ?? '').trim()
  return {
    tags,
    cleanHtml: tags ? html.slice(match[1].length).trimStart() : html,
  }
}

function injectMeta(html, route) {
  const meta = META_MAP[route]
  if (!meta) return html

  let result = html
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
  if (/<meta name="description"/.test(result)) {
    result = result.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${meta.desc}"/>`)
  } else {
    result = result.replace('</head>', `<meta name="description" content="${meta.desc}"/>\n</head>`)
  }

  return result
}

function injectStructuredData(html, route) {
  // LocalBusiness schema (appears on all pages)
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.imprentasalvadordalichile.cl/#organization',
    name: 'Imprenta Salvador Dali',
    image: 'https://www.imprentasalvadordalichile.cl/images/cropped-icono-66.png',
    description: 'Imprenta en Las Condes especializada en impresión láser, offset y tinta UV con entrega express en 48 horas',
    url: 'https://www.imprentasalvadordalichile.cl',
    telephone: '+56964123098',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mayecura 1177',
      addressLocality: 'Las Condes',
      addressRegion: 'Región Metropolitana',
      postalCode: '7570718',
      addressCountry: 'CL'
    },
    sameAs: [
      'https://www.instagram.com/imprenta_salvador_dali/',
      'https://g.page/r/Ce61Wvh0x_sYEBM'
    ],
    priceRange: '$$'
  }

  // Product schemas for product pages
  let productSchemas = []
  if (route.startsWith('/tienda/') || route.startsWith('/servicios/')) {
    productSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: route.includes('stickers') ? 'Stickers Personalizados' :
            route.includes('tarjeta') ? 'Tarjetas de Presentación' :
            route.includes('volante') ? 'Volantes' :
            route.includes('pendon') ? 'Pendones' : 'Impresión Personalizada',
      description: META_MAP[route]?.desc || 'Producto de impresión personalizado',
      brand: {
        '@type': 'Brand',
        name: 'Imprenta Salvador Dali'
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'CLP',
        offerCount: 1,
        availability: 'https://schema.org/InStock'
      }
    })
  }

  // BreadcrumbList for navigation
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: buildBreadcrumbs(route)
  }

  const allSchemas = [localBusiness, breadcrumbs, ...productSchemas]
  const schemaScript = `<script type="application/ld+json">${JSON.stringify(allSchemas, null, 2)}</script>`

  return html.replace('</head>', `${schemaScript}\n  </head>`)
}

function buildBreadcrumbs(route) {
  const parts = route.split('/').filter(Boolean)
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://www.imprentasalvadordalichile.cl/'
    }
  ]

  let path = ''
  parts.forEach((part, idx) => {
    path += `/${part}`
    breadcrumbs.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: part.charAt(0).toUpperCase() + part.slice(1).replace('-', ' '),
      item: `https://www.imprentasalvadordalichile.cl${path}`
    })
  })

  return breadcrumbs
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

      // Extract head tags rendered inline by react-helmet-async (React 19 behavior)
      const { tags: inlineHeadTags, cleanHtml } = extractHeadTagsFromStart(appHtml)

      let pageHtml
      if (inlineHeadTags) {
        // Remove static <title> from template — the extracted tags include the correct one
        const base = template.replace(/<title>[^<]*<\/title>/, '')
        pageHtml = base.replace('<!--ssr-outlet-->', cleanHtml)
        pageHtml = pageHtml.replace('</head>', `    ${inlineHeadTags}\n  </head>`)
      } else {
        // Fallback: inject title + description from META_MAP
        pageHtml = template.replace('<!--ssr-outlet-->', appHtml)
        pageHtml = injectMeta(pageHtml, route)
      }

      // Always inject structured data (JSON-LD)
      pageHtml = injectStructuredData(pageHtml, route)

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

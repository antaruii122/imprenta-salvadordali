import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = [
  '/',
  '/portafolio',
  '/tienda',
  '/tienda/stickers',
  '/tienda/tarjeteria',
  '/tienda/publicidad',
  '/tienda/utiles-escolares',
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
      const { html: appHtml, helmet } = await render(route)

      let pageHtml = template.replace('<!--ssr-outlet-->', appHtml)

      if (helmet) {
        if (helmet.title?.toString()) {
          pageHtml = pageHtml.replace(/<title>.*?<\/title>/, helmet.title.toString())
        }
        if (helmet.meta?.toString()) {
          pageHtml = pageHtml.replace('</head>', `${helmet.meta.toString()}</head>`)
        }
      }

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

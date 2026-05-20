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

      // Extract title from SSR output before stripping (react-helmet injects into body during SSR)
      const titleMatch = appHtml.match(/<title>([\s\S]*?)<\/title>/)
      const pageTitle = titleMatch ? titleMatch[1] : null

      // Strip any helmet tags react injected into the SSR body (they belong in <head>)
      const cleanAppHtml = appHtml.replace(/<title>[\s\S]*?<\/title>/g, '')

      let pageHtml = template.replace('<!--ssr-outlet-->', cleanAppHtml)

      // Replace template title with page-specific title extracted from SSR body
      if (pageTitle) {
        pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`)
      }

      if (helmet) {
        const metaStr = (helmet.meta?.toString() || '').replace(/<title>[\s\S]*?<\/title>/g, '')
        const linkStr = helmet.link?.toString() || ''
        const scriptStr = helmet.script?.toString() || ''
        const inject = [metaStr, linkStr, scriptStr].filter(Boolean).join('\n')
        if (inject) {
          pageHtml = pageHtml.replace('</head>', `${inject}\n</head>`)
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

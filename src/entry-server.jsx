import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { createStaticHandler, createStaticRouter, StaticRouterProvider, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Tienda from './pages/Tienda'
import TiendaCategory from './pages/TiendaCategory'
import QuienesSomos from './pages/QuienesSomos'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contacto from './pages/Contacto'
import ServicioPage from './pages/ServicioPage'
import ComunaPage from './pages/ComunaPage'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portafolio', element: <Portafolio /> },
      { path: '/tienda', element: <Tienda /> },
      { path: '/tienda/stickers', element: <TiendaCategory category="stickers" /> },
      { path: '/tienda/tarjeteria', element: <TiendaCategory category="tarjeteria" /> },
      { path: '/tienda/publicidad', element: <TiendaCategory category="publicidad" /> },
      { path: '/quienes-somos', element: <QuienesSomos /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '/servicios/:slug', element: <ServicioPage /> },
      { path: '/imprenta/:slug', element: <ComunaPage /> },
    ],
  },
]

export async function render(url) {
  const helmetContext = {}
  const handler = createStaticHandler(routes)
  const request = new Request(`http://localhost${url}`)
  const context = await handler.query(request)

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouterProvider router={router} context={context} />
    </HelmetProvider>
  )

  const { helmet } = helmetContext
  return { html, helmet }
}

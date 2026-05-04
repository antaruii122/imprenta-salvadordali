import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Tienda from './pages/Tienda'
import TiendaCategory from './pages/TiendaCategory'
import QuienesSomos from './pages/QuienesSomos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import ServicioPage from './pages/ServicioPage'
import ComunaPage from './pages/ComunaPage'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/portafolio', element: <Portafolio /> },
      { path: '/tienda', element: <Tienda /> },
      { path: '/tienda/stickers', element: <TiendaCategory category="stickers" /> },
      { path: '/tienda/tarjeteria', element: <TiendaCategory category="tarjeteria" /> },
      { path: '/tienda/publicidad', element: <TiendaCategory category="publicidad" /> },
      { path: '/tienda/utiles-escolares', element: <TiendaCategory category="utiles-escolares" /> },
      { path: '/quienes-somos', element: <QuienesSomos /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '/servicios/:slug', element: <ServicioPage /> },
      { path: '/imprenta/:slug', element: <ComunaPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}

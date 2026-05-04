import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Tienda from './pages/Tienda'
import TiendaCategory from './pages/TiendaCategory'
import QuienesSomos from './pages/QuienesSomos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import ServicioPage from './pages/ServicioPage'
import ComunaPage from './pages/ComunaPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/tienda/stickers" element={<TiendaCategory category="stickers" />} />
        <Route path="/tienda/tarjeteria" element={<TiendaCategory category="tarjeteria" />} />
        <Route path="/tienda/publicidad" element={<TiendaCategory category="publicidad" />} />
        <Route path="/tienda/utiles-escolares" element={<TiendaCategory category="utiles-escolares" />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/:slug" element={<ServicioPage />} />
        <Route path="/imprenta/:slug" element={<ComunaPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO = 'https://imprentasalvadordali.cl/wp-content/uploads/2023/08/logo-04.jpg'
const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Navbar() {
  const [tiendaOpen, setTiendaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
      isActive
        ? 'text-brand bg-beige font-semibold'
        : 'text-gray-600 hover:text-brand hover:bg-beige'
    }`

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO} alt="Imprenta Salvador Dalí" className="h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Inicio</NavLink>
          <NavLink to="/portafolio" className={linkClass}>Portafolio</NavLink>

          <div className="relative" onMouseEnter={() => setTiendaOpen(true)} onMouseLeave={() => setTiendaOpen(false)}>
            <NavLink to="/tienda" className={linkClass}>
              Tienda <span className="text-xs">▾</span>
            </NavLink>
            {tiendaOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-card-hover border border-gray-100 min-w-[180px] py-1 z-50 animate-fade-up">
                {[
                  ['/tienda/stickers', 'Stickers'],
                  ['/tienda/tarjeteria', 'Tarjetería'],
                  ['/tienda/publicidad', 'Publicidad'],
                  ['/tienda/utiles-escolares', 'Útiles Escolares'],
                ].map(([to, label]) => (
                  <Link key={to} to={to}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand hover:bg-beige transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/quienes-somos" className={linkClass}>Quiénes Somos</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </nav>

        <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden lg:flex btn-wsp">
          <WaIcon /> Cotizar por WhatsApp
        </a>

        <button className="lg:hidden p-2 rounded-lg hover:bg-beige transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            {[
              ['/', 'Inicio'], ['/portafolio', 'Portafolio'], ['/tienda', 'Tienda'],
              ['/tienda/stickers', '  ↳ Stickers'], ['/tienda/tarjeteria', '  ↳ Tarjetería'],
              ['/tienda/publicidad', '  ↳ Publicidad'], ['/tienda/utiles-escolares', '  ↳ Útiles Escolares'],
              ['/quienes-somos', 'Quiénes Somos'], ['/blog', 'Blog'], ['/contacto', 'Contacto'],
            ].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-gray-700 hover:text-brand hover:bg-beige rounded-lg transition-colors">
                {label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp w-full justify-center">
                <WaIcon /> Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

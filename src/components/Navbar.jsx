import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const LOGO = '/images/cropped-icono-66.png'
const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ChevronDown = () => (
  <svg className="w-3 h-3 inline-block ml-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
)

const menus = {
  trabajo: {
    label: 'Nuestro Trabajo',
    sections: [
      {
        title: 'Portafolio & Tienda',
        links: [
          { to: '/portafolio', label: '🖼️ Portafolio', desc: 'Ver trabajos realizados' },
          { to: '/tienda', label: '🛍️ Tienda', desc: 'Todos los productos' },
        ],
      },
      {
        title: 'Categorías',
        links: [
          { to: '/tienda/stickers', label: 'Stickers' },
          { to: '/tienda/tarjeteria', label: 'Tarjetería' },
          { to: '/tienda/publicidad', label: 'Publicidad' },
          { to: '/tienda/utiles-escolares', label: 'Útiles Escolares' },
        ],
      },
    ],
  },
  servicios: {
    label: 'Servicios',
    sections: [
      {
        title: 'Lo que hacemos',
        links: [
          { to: '/servicios/stickers', label: '🎯 Stickers Personalizados', desc: 'Adhesivos en todo formato' },
          { to: '/servicios/tarjetas-presentacion', label: '🪪 Tarjetas de Presentación', desc: 'Acabados premium' },
          { to: '/servicios/volantes', label: '📄 Volantes y Flyers', desc: '1.000 desde $20.000' },
          { to: '/servicios/pendones', label: '🚩 Pendones Publicitarios', desc: 'Gran formato express' },
        ],
      },
    ],
  },
  nosotros: {
    label: 'Nosotros',
    sections: [
      {
        title: 'La imprenta',
        links: [
          { to: '/quienes-somos', label: '🏢 Quiénes Somos', desc: 'Nuestra historia' },
          { to: '/blog', label: '📝 Blog', desc: 'Tips y novedades' },
          { to: '/contacto', label: '💬 Contacto', desc: 'Escríbenos' },
        ],
      },
    ],
  },
  cobertura: {
    label: 'Cobertura',
    sections: [
      {
        title: 'Comunas principales',
        links: [
          { to: '/imprenta/las-condes', label: 'Las Condes', desc: 'Nuestra ubicación' },
          { to: '/imprenta/providencia', label: 'Providencia' },
          { to: '/imprenta/vitacura', label: 'Vitacura' },
          { to: '/imprenta/santiago-centro', label: 'Santiago Centro' },
          { to: '/imprenta/nunoa', label: 'Ñuñoa' },
          { to: '/imprenta/la-florida', label: 'La Florida' },
        ],
      },
      {
        title: 'Más comunas',
        links: [
          { to: '/imprenta/maipu', label: 'Maipú' },
          { to: '/imprenta/san-miguel', label: 'San Miguel' },
          { to: '/imprenta/macul', label: 'Macul' },
          { to: '/imprenta/quilicura', label: 'Quilicura' },
          { to: '/imprenta/pudahuel', label: 'Pudahuel' },
          { to: '/imprenta/san-bernardo', label: 'San Bernardo' },
        ],
      },
    ],
  },
}

function Dropdown({ menuKey, data, activeMenu, setActiveMenu }) {
  const navigate = useNavigate()
  const isOpen = activeMenu === menuKey

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === 'Escape') setActiveMenu(null)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [setActiveMenu])

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setActiveMenu(isOpen ? null : menuKey)}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full flex items-center gap-1 ${
          isOpen ? 'text-brand bg-beige font-semibold' : 'text-gray-600 hover:text-brand hover:bg-beige'
        }`}>
        {data.label} <ChevronDown />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />
          <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-card-hover border border-gray-100 py-3 z-50 animate-fade-up"
            style={{ minWidth: data.sections.length > 1 ? '420px' : '240px' }}>
            <div className={`grid gap-0 ${data.sections.length > 1 ? 'grid-cols-2 divide-x divide-gray-100' : 'grid-cols-1'}`}>
              {data.sections.map((section) => (
                <div key={section.title} className="px-4 py-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 mb-2">{section.title}</p>
                  {section.links.map(({ to, label, desc }) => (
                    <a key={to} href={to}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveMenu(null)
                        navigate(to)
                      }}
                      className="flex flex-col px-2 py-2 rounded-xl hover:bg-beige transition-colors group relative z-50">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors">{label}</span>
                      {desc && <span className="text-xs text-gray-400 mt-0.5">{desc}</span>}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Navbar() {
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO} alt="Imprenta Salvador Dalí" width="44" height="44" className="h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) =>
            `px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${isActive ? 'text-brand bg-beige font-semibold' : 'text-gray-600 hover:text-brand hover:bg-beige'}`
          }>Inicio</NavLink>

          {Object.entries(menus).map(([key, data]) => (
            <Dropdown key={key} menuKey={key} data={data} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          ))}
        </nav>

        <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden lg:flex btn-wsp">
          <WaIcon /> Cotizar por WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-beige transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            <Link to="/" className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand hover:bg-beige rounded-lg transition-colors">
              Inicio
            </Link>

            {Object.entries(menus).map(([key, data]) => (
              <div key={key}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand hover:bg-beige rounded-lg transition-colors">
                  {data.label}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === key && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-beige-dark pl-3">
                    {data.sections.map(section => (
                      <div key={section.title}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 py-1">{section.title}</p>
                        {section.links.map(({ to, label }) => (
                          <a key={to} href={to}
                            onClick={(e) => {
                              e.preventDefault()
                              setMobileOpen(false)
                              setMobileExpanded(null)
                              navigate(to)
                            }}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-brand hover:bg-beige rounded-lg transition-colors">
                            {label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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

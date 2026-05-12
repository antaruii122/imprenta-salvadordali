import { Link } from 'react-router-dom'

const LOGO_BEIGE = '/images/cropped-icono-66.png'
const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'
const IG = 'https://www.instagram.com/imprenta_salvador_dali/'

const services = ['Stickers', 'Tarjetería', 'Volantes', 'Etiquetas', 'Pendones', 'Trípticos', 'Catálogos', 'Merchandising', 'Tinta UV', 'Tinta Blanca']

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300">
      {/* Top CTA strip */}
      <div className="bg-brand py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-xl font-bold text-white">¿Listo para imprimir?</p>
            <p className="text-white/70 text-sm">Cotiza express y recibe respuesta rápida</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand hover:bg-charcoal hover:text-white font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap">
            <WaIcon /> Cotizar por WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={LOGO_BEIGE} alt="Imprenta Salvador Dalí" className="h-14 object-contain mb-5" style={{filter:'brightness(0) invert(1)'}} />
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Dedicados a sistemas de impresión láser, offset y tinta UV. Entrega express en 48 horas. Las Condes, Santiago.
          </p>
          <a href={IG} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @imprenta_salvador_dali
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Servicios</h4>
          <div className="grid grid-cols-2 gap-1">
            {services.map(s => (
              <span key={s} className="text-sm text-gray-400 hover:text-white transition-colors cursor-default py-0.5">{s}</span>
            ))}
          </div>
        </div>

        {/* Links + Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Páginas</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
            {[['/', 'Inicio'], ['/portafolio', 'Portafolio'], ['/tienda', 'Tienda'], ['/quienes-somos', 'Quiénes Somos'], ['/blog', 'Blog'], ['/contacto', 'Contacto']].map(([to, label]) => (
              <Link key={to} to={to} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
            {[['/servicios/stickers','Stickers'],['/servicios/tarjetas-presentacion','Tarjetas'],['/servicios/volantes','Volantes'],['/servicios/pendones','Pendones']].map(([to, label]) => (
              <Link key={to} to={to} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Cobertura</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
            {[['/imprenta/las-condes','Las Condes'],['/imprenta/providencia','Providencia'],['/imprenta/vitacura','Vitacura'],['/imprenta/santiago-centro','Santiago'],['/imprenta/nunoa','Ñuñoa'],['/imprenta/la-florida','La Florida']].map(([to, label]) => (
              <Link key={to} to={to} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>📍 Las Condes #10.415, of 25B</p>
            <p><a href="tel:+56964123098" className="hover:text-white transition-colors">📞 +569 6412 3098</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Imprenta Salvador Dalí · Las Condes, Santiago de Chile
      </div>
    </footer>
  )
}

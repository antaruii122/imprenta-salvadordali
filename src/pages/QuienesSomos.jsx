import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'

const IMG = '/images/print_shop_team.png'
const WA  = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

const highlights = [
  { icon: '⚡', title: 'Imprenta express', body: 'Entrega en 48 horas, ideal para trabajos urgentes con excelente calidad.' },
  { icon: 'ðŸ–¨ï¸', title: 'Excelente calidad', body: 'Máquinas y tintas de mercado premium para resultados de nivel profesional.' },
  { icon: 'ðŸ’°', title: 'Precios Imperdibles', body: 'Valores accesibles, cercanos y comprometidos con cada cliente.' },
]

export default function QuienesSomos() {
  return (
    <main>
      <Helmet>
        <title>Quiénes Somos — Imprenta Profesional en Las Condes, Santiago | Imprenta Salvador Dalí</title>
        <meta name="description" content="Conoce nuestra historia. Imprenta en Las Condes especializada en impresión láser, offset y UV. Más de 10 años entregando calidad y servicio express en Santiago." />
        <meta property="og:title" content="Quiénes Somos — Imprenta Salvador Dalí Las Condes" />
        <meta property="og:description" content="Imprenta profesional en Las Condes. Impresión láser, offset y UV con entrega en 48 horas." />
        <meta property="og:image" content="https://imprentasalvadordali.cl/images/cropped-icono-66.png" />
      </Helmet>

      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Nuestra historia</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Quiénes Somos</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      {/* About split */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-beige-dark to-transparent rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src={IMG} alt="Equipo Imprenta Salvador Dalí"
                className="w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-brand text-white rounded-2xl shadow-lg px-5 py-3">
              <p className="font-heading text-lg font-black">Laser Â· Offset Â· UV</p>
              <p className="text-brand-light text-xs mt-0.5">Sistemas de impresión</p>
            </div>
          </div>

          <div>
            <p className="section-label">Sobre nosotros</p>
            <h2 className="section-title mb-2">Sobre nuestra imprenta</h2>
            <div className="section-divider" />
            <p className="text-gray-500 leading-relaxed mb-5">
              Nuestra imprenta nace del fanatismo al pintor Salvador Dalí. Fanáticos de su obra y estilo, quisimos honrarlo con nuestra propia marca.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              Dedicados a sistemas de impresión láser, offset y tinta UV en diversos papeles — chuche, opalina, lisa, texturada, Bond, lvc, sintético — y textiles. Caracterizados por servicio excepcional y entregas express de 48 horas.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Ofrecemos soluciones gráficas completas: tarjetas de presentación, volantes, stickers, pendones, trípticos, catálogos, merchandising y más.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights dark */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-3">Por qué elegirnos</p>
            <h2 className="font-heading text-3xl font-bold text-white">Nuestra propuesta de valor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(h => (
              <div key={h.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand/40 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-xl mx-auto px-4">
          <p className="section-label mx-auto">¿Listo para imprimir?</p>
          <h2 className="section-title mb-4">¿Tienes un proyecto?</h2>
          <p className="text-gray-500 text-sm mb-8">Contáctanos y te damos una cotización express en minutos.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar por WhatsApp
          </a>
        </div>
      </section>

      <MapSection />
    </main>
  )
}

import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'
import { servicios } from '../data/servicios'
import { comunas } from '../data/comunas'

const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

export default function ServicioPage() {
  const { slug } = useParams()
  const servicio = servicios.find(s => s.slug === slug)
  if (!servicio) return <Navigate to="/tienda" replace />

  const linkedComunas = comunas.filter(c => servicio.comunas.includes(c.slug))

  return (
    <main>
      <Helmet>
        <title>{servicio.metaTitle}</title>
        <meta name="description" content={servicio.metaDesc} />
        <meta property="og:title" content={servicio.metaTitle} />
        <meta property="og:description" content={servicio.metaDesc} />
        <meta property="og:image" content={servicio.heroImg} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://www.imprentasalvadordalichile.cl/servicios/${servicio.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.imprentasalvadordalichile.cl/" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://www.imprentasalvadordalichile.cl/servicios" },
            { "@type": "ListItem", "position": 3, "name": servicio.title, "item": `https://www.imprentasalvadordalichile.cl/servicios/${servicio.slug}` }
          ]
        })}</script>
      </Helmet>

      {/* Header */}
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <nav className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <Link to="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-brand transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-charcoal font-medium">{servicio.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{servicio.emoji}</span>
            <div>
              <h1 className="font-heading text-4xl font-bold text-charcoal">{servicio.h1}</h1>
              <p className="text-gray-500 text-sm mt-1">{servicio.excerpt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero split */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-beige-dark to-transparent rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src={servicio.heroImg} alt={servicio.h1}
                className="w-full object-cover hover:scale-105 transition-transform duration-700 aspect-square" />
            </div>
          </div>
          <div>
            <p className="section-label">Servicio destacado</p>
            <h2 className="section-title mb-2">{servicio.title} de calidad profesional</h2>
            <div className="section-divider" />
            <p className="text-gray-500 leading-relaxed mb-8">{servicio.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar por WhatsApp
              </a>
              <Link to={`/tienda/${servicio.tiendaSlug}`} className="btn-outline">
                Ver productos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content body */}
      {servicio.body && servicio.body.length > 0 && (
        <section className="py-16 bg-beige">
          <div className="max-w-3xl mx-auto px-4 space-y-10">
            {servicio.body.map((block, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">{block.h2}</h2>
                <p className="text-gray-500 leading-relaxed text-base">{block.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why us — dark strip */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⚡', title: 'Entrega en 48 horas', body: 'Producción express sin sacrificar calidad.' },
              { icon: '🖨️', title: 'Impresión premium', body: 'Láser, offset y UV para el mejor resultado.' },
              { icon: '💬', title: 'Cotización inmediata', body: 'Respuesta por WhatsApp en minutos.' },
            ].map(h => (
              <div key={h.title} className="group bg-white/5 border border-white/10 hover:border-brand/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">Preguntas frecuentes</p>
            <h2 className="section-title">Todo sobre nuestros {servicio.title.toLowerCase()}</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {servicio.faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold text-charcoal mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunas — internal links */}
      <section className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-label">Cobertura</p>
            <h2 className="font-heading text-2xl font-bold text-charcoal">¿Estás en otra comuna?</h2>
            <p className="text-gray-500 text-sm mt-2">También trabajamos con clientes de toda la Región Metropolitana</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {linkedComunas.map(c => (
              <Link key={c.slug} to={`/imprenta/${c.slug}`}
                className="bg-white border border-beige-dark hover:border-brand hover:text-brand text-gray-600 font-medium text-sm px-5 py-2 rounded-full shadow-sm transition-all duration-200">
                Imprenta en {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">¿Listo para cotizar?</h2>
          <p className="text-white/70 text-sm mb-8">Escríbenos y te respondemos en minutos con precio y plazo exacto.</p>
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

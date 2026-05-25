import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'
import { comunas } from '../data/comunas'
import { servicios } from '../data/servicios'

const WA_BASE = 'https://wa.me/56964123098?text='

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const serviceLinks = [
  { slug: 'stickers', label: 'Stickers personalizados' },
  { slug: 'tarjetas-presentacion', label: 'Tarjetas de presentación' },
  { slug: 'volantes', label: 'Volantes y flyers' },
  { slug: 'pendones', label: 'Pendones publicitarios' },
]

export default function ComunaPage() {
  const { slug } = useParams()
  const comuna = comunas.find(c => c.slug === slug)
  if (!comuna) return <Navigate to="/contacto" replace />

  const neighborComunas = (comuna.neighbors || [])
    .map(n => comunas.find(c => c.slug === n))
    .filter(Boolean)

  const otherComunas = comunas.filter(c => c.slug !== slug && !(comuna.neighbors || []).includes(c.slug))

  return (
    <main>
      <Helmet>
        <title>{comuna.metaTitle}</title>
        <meta name="description" content={comuna.metaDesc} />
        <meta property="og:title" content={comuna.metaTitle} />
        <meta property="og:description" content={comuna.metaDesc} />
        <meta property="og:image" content="https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://www.imprentasalvadordalichile.cl/imprenta/${comuna.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.imprentasalvadordalichile.cl/" },
            { "@type": "ListItem", "position": 2, "name": "Imprentas por zona", "item": "https://www.imprentasalvadordalichile.cl/imprenta" },
            { "@type": "ListItem", "position": 3, "name": `Imprenta en ${comuna.name}`, "item": `https://www.imprentasalvadordalichile.cl/imprenta/${comuna.slug}` }
          ]
        })}</script>
      </Helmet>

      {/* Header */}
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Imprenta · {comuna.name}, Santiago</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">
            Imprenta Profesional en {comuna.name} — Impresión Digital y Offset
          </h1>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">
            Entrega express en 48 horas · Stickers, tarjetas, volantes, pendones y más
          </p>
        </div>
      </div>

      {/* Intro + services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-start">
          {/* Left — text */}
          <div>
            <p className="section-label">Trabajamos en {comuna.name}</p>
            <h2 className="section-title mb-2">Tu imprenta de confianza</h2>
            <div className="section-divider" />
            <p className="text-gray-600 leading-relaxed mb-6">{comuna.intro}</p>

            {/* Services list */}
            <div className="mb-6">
              <p className="text-sm font-bold text-charcoal mb-3">
                Servicios más solicitados en {comuna.name}:
              </p>
              <ul className="space-y-2">
                {serviceLinks.map(({ slug: sSlug, label }) => (
                  <li key={sSlug}>
                    <Link
                      to={`/servicios/${sSlug}`}
                      className="flex items-center gap-2 text-sm text-brand hover:underline font-medium">
                      <span>→</span> {label}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-gray-300">→</span> Afiches y material POP
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 bg-beige rounded-xl p-4 mb-8">
              <span className="text-2xl">📍</span>
              <p className="text-sm text-gray-600">{comuna.distance}</p>
            </div>
            <a href={`${WA_BASE}${comuna.waText}`} target="_blank" rel="noopener noreferrer" className="btn-wsp-lg">
              <WaIcon />
              Cotizar desde {comuna.name}
            </a>
          </div>

          {/* Right — services grid */}
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-6">Nuestros servicios disponibles</h3>
            <div className="grid grid-cols-1 gap-4">
              {servicios.map(s => (
                <Link key={s.slug} to={`/servicios/${s.slug}`}
                  className="group flex items-center gap-4 card p-5 hover:border-brand hover:border transition-all duration-200">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{s.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-charcoal group-hover:text-brand transition-colors">{s.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.excerpt}</p>
                  </div>
                  <span className="text-brand text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body content — párrafos con fondo alternado */}
      {comuna.body.split('\n\n').filter(p => p.trim()).map((paragraph, i) => {
        const icons = ['🖨️', '✂️', '🚀']
        const labels = ['Nuestros servicios', 'Cómo trabajamos', 'Entrega y cotización']
        const isBeige = i % 2 === 0
        return (
          <section key={i} className={`py-14 ${isBeige ? 'bg-beige' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4">
              <div className={`flex gap-6 items-start ${isBeige ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl items-center justify-center text-3xl shadow-sm ${isBeige ? 'bg-white' : 'bg-beige'}`}>
                  {icons[i] || '📌'}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">{labels[i] || `Sobre ${comuna.name}`}</p>
                  <p className="text-gray-600 leading-relaxed text-base">{paragraph.trim()}</p>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Why us */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold text-white">¿Por qué elegirnos en {comuna.name}?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⚡', title: `Entrega en 48h en ${comuna.name}`, body: 'Express sin sacrificar calidad.' },
              { icon: '🗺️', title: 'Servicio a domicilio', body: 'Coordinamos despacho a tu dirección en ' + comuna.name + '.' },
              { icon: '💬', title: 'Cotización express', body: 'Respuesta por WhatsApp en minutos.' },
            ].map(h => (
              <div key={h.title} className="bg-white/5 border border-white/10 hover:border-brand/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunas cercanas + todas */}
      <section className="py-14 bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          {neighborComunas.length > 0 && (
            <div className="mb-8">
              <div className="text-center mb-4">
                <h3 className="font-heading text-lg font-bold text-charcoal">Comunas cercanas</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {neighborComunas.map(c => (
                  <Link key={c.slug} to={`/imprenta/${c.slug}`}
                    className="bg-brand text-white font-medium text-sm px-5 py-2 rounded-full shadow-sm hover:bg-brand/90 transition-all duration-200">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mb-5">
            <h3 className="font-heading text-base font-semibold text-charcoal">También trabajamos en</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherComunas.map(c => (
              <Link key={c.slug} to={`/imprenta/${c.slug}`}
                className="bg-white border border-beige-dark hover:border-brand hover:text-brand text-gray-600 font-medium text-sm px-4 py-2 rounded-full shadow-sm transition-all duration-200">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  )
}

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'

const HERO_IMG   = '/images/hero_stickers.webp'
const ABOUT_IMG  = '/images/print_shop_team.webp'
const WA         = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const services = ['Stickers', 'Tarjetas', 'Volantes', 'Pendones', 'Etiquetas', 'Publicidad']

const highlights = [
  { icon: '⚡', title: 'Imprenta express', body: 'Entrega en 48 horas, ideal para trabajos urgentes con excelente calidad.' },
  { icon: '🖨️', title: 'Excelente calidad', body: 'Máquinas y tintas premium para resultados de nivel profesional.' },
  { icon: '💰', title: 'Precios Imperdibles', body: 'Valores accesibles, cercanos y comprometidos con cada cliente.' },
]

const gallery = [
  { src: '/images/hero_stickers.webp',    label: 'Stickers personalizados adhesivos - Imprenta Salvador Dali Las Condes' },
  { src: '/images/banners_pendones.webp', label: 'Pendones publicitarios Santiago - Imprenta Salvador Dali' },
  { src: '/images/flyers_volantes.webp',  label: 'Volantes y flyers Las Condes - Imprenta Salvador Dali' },
  { src: '/images/business_cards.webp',   label: 'Tarjetas de presentación Las Condes - Imprenta Salvador Dali' },
]

const testimonials = [
  { quote: 'Entregaron rápido, con excelente calidad y a muy buen precio. Sin duda los recomiendo.', name: 'Valentina R.', role: 'Organizadora de Eventos' },
  { quote: 'Los mejores en stickers y tarjetas. El acabado es increíble y el servicio muy profesional.', name: 'Andrés M.', role: 'Fotógrafo' },
  { quote: 'Pedí pendones y volantes de urgencia y los tuve en 48 horas. ¡Increíble!', name: 'Camila S.', role: 'Emprendedora' },
]

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Imprenta en Las Condes con Entrega 48h | Salvador Dali</title>
        <meta name="description" content="Imprenta en Las Condes con entrega express en 48 horas. Stickers personalizados, tarjetas de presentación, volantes y pendones. Cotiza gratis por WhatsApp." />
        <meta property="og:title" content="Imprenta en Las Condes con Entrega 48h | Salvador Dali" />
        <meta property="og:description" content="Stickers, tarjetas, volantes y pendones. Entrega express en 48h. Cotiza gratis por WhatsApp." />
        <meta property="og:image" content="https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp" />
        <meta property="og:url" content="https://www.imprentasalvadordalichile.cl/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imprenta en Las Condes con Entrega 48h | Salvador Dali" />
        <meta name="twitter:description" content="Stickers, tarjetas, volantes y pendones. Entrega express en 48h. Cotiza gratis por WhatsApp." />
        <meta name="twitter:image" content="https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp" />
        <link rel="canonical" href="https://www.imprentasalvadordalichile.cl/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "PrintShop"],
          "@id": "https://www.imprentasalvadordalichile.cl/#local-business",
          "name": "Imprenta Salvador Dali",
          "alternateName": "Imprenta Salvador Dalí Las Condes",
          "description": "Imprenta en Las Condes especializada en impresión láser, offset y tinta UV. Stickers personalizados, tarjetas de presentación, volantes, pendones y etiquetas con entrega express en 48 horas.",
          "image": "https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp",
          "logo": "https://www.imprentasalvadordalichile.cl/images/cropped-icono-66.png",
          "url": "https://www.imprentasalvadordalichile.cl",
          "telephone": "+56964123098",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mayecura 1177",
            "addressLocality": "Las Condes",
            "addressRegion": "Región Metropolitana",
            "postalCode": "7570718",
            "addressCountry": "CL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.3839092,
            "longitude": -70.5321178
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "18:00",
            "description": "Solo con cita previa. Coordina por WhatsApp."
          },
          "priceRange": "$$",
          "currenciesAccepted": "CLP",
          "areaServed": [
            {"@type": "City", "name": "Las Condes"},
            {"@type": "City", "name": "Providencia"},
            {"@type": "City", "name": "Vitacura"},
            {"@type": "City", "name": "Santiago"},
            {"@type": "City", "name": "Ñuñoa"},
            {"@type": "City", "name": "La Florida"},
            {"@type": "City", "name": "Maipú"},
            {"@type": "City", "name": "San Miguel"}
          ],
          "sameAs": [
            "https://www.instagram.com/imprenta_salvador_dali/",
            "https://g.page/r/Ce61Wvh0x_sYEBM"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Impresión",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Stickers Personalizados", "url": "https://www.imprentasalvadordalichile.cl/servicios/stickers"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tarjetas de Presentación", "url": "https://www.imprentasalvadordalichile.cl/servicios/tarjetas-presentacion"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Volantes y Flyers", "url": "https://www.imprentasalvadordalichile.cl/servicios/volantes"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pendones Publicitarios", "url": "https://www.imprentasalvadordalichile.cl/servicios/pendones"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Etiquetas Personalizadas"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impresión DTF Textil"}}
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://www.imprentasalvadordalichile.cl/#website",
          "name": "Imprenta Salvador Dali",
          "url": "https://www.imprentasalvadordalichile.cl",
          "inLanguage": "es-CL",
          "publisher": {"@id": "https://www.imprentasalvadordalichile.cl/#local-business"}
        })}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-[#faf7f2] via-beige to-[#ede6d8] overflow-hidden min-h-[88vh] flex items-center">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="section-label">Imprenta · Las Condes, Santiago</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-[1.05] mb-3">
              Imprenta<br /><span className="text-brand">Salvador Dali</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl font-bold text-charcoal/60 mb-5 tracking-wide">
              En Las Condes
            </p>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-md">
              Stickers personalizados, tarjetas de presentación, volantes, pendones y etiquetas con entrega express en 48 horas.
            </p>
            {/* tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {services.map(s => (
                <span key={s} className="text-xs font-medium bg-white/70 border border-beige-dark text-gray-600 px-3 py-1 rounded-full shadow-sm">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp-lg shadow-xl">
                <WaIcon /> Cotiza a nuestro WhatsApp
              </a>
              <Link to="/portafolio" className="btn-outline">
                Ver Portafolio →
              </Link>
            </div>
          </div>

          {/* Hero image with floating overlay */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* card glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-hero">
                <img src={HERO_IMG} alt="Stickers personalizados - Imprenta Salvador Dali Las Condes"
                  width="420" height="420"
                  className="w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* floating oval badge */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 drop-shadow-xl animate-float bg-brand rounded-full flex flex-col items-center justify-center text-white text-center">
                <span className="font-heading font-black text-lg leading-tight">Express</span>
                <span className="text-xs font-semibold opacity-90">48 hrs</span>
              </div>
              {/* floating stat card */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 text-center min-w-[110px]">
                <p className="font-heading text-2xl font-black text-brand">48 hrs</p>
                <p className="text-xs text-gray-500 font-medium">Entrega Express</p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full fill-white">
            <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '48 hrs', label: 'Entrega Express' },
            { n: '3', label: 'Sistemas de Impresión' },
            { n: '10+', label: 'Tipos de Producto' },
            { n: '4.9 ★', label: 'Valoración Google' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="font-heading text-2xl font-black text-brand">{n}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* image with overlapping card */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-beige-dark to-transparent rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src={ABOUT_IMG} alt="Equipo Imprenta Salvador Dali Las Condes"
                width="600" height="450" loading="lazy"
                className="w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-brand text-white rounded-2xl shadow-lg px-5 py-3">
              <p className="font-heading text-lg font-black">Laser · Offset · UV</p>
              <p className="text-xs text-brand-light mt-0.5">Sistemas de impresión</p>
            </div>
          </div>

          <div>
            <p className="section-label">Quiénes Somos</p>
            <h2 className="section-title mb-2">Sobre nuestra imprenta</h2>
            <div className="section-divider" />
            <p className="text-gray-500 leading-relaxed mb-4">
              Dedicados a sistemas de impresión láser, offset y tinta UV en diversos papeles (couché, opalina, lisa, texturada, Bond, pvc, sintético) y textiles.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Fanáticos del pintor Salvador Dali desde hace años, siguiendo su obra y estilo para honrarlo con nuestra propia marca.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Trabajamos con empresas, emprendedores y particulares en Las Condes, Providencia,
              Vitacura y toda la Región Metropolitana. Cada pedido tiene control de calidad antes
              de salir — si no cumple el estándar, lo rehacemos.
            </p>
            <Link to="/quienes-somos" className="btn-outline">Conocer más →</Link>
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-3">Por qué elegirnos</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Nuestra propuesta de valor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
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

      {/* ═══ PROMO BANNER ═══ */}
      <section className="py-20 bg-gradient-to-r from-brand-dark via-brand to-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🔥 Promoción del Mes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-3">
            1.000 Volantes<br />
            <span className="text-white/80 text-3xl">10×14 cm por</span> $20.000
          </h2>
          <p className="text-white/60 text-sm mb-10">*Válido hasta agotar stock</p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand hover:bg-brand hover:text-white font-bold text-base px-10 py-4 rounded-full shadow-xl transition-all duration-200 hover:-translate-y-1">
            <WaIcon /> ¡Lo quiero!
          </a>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label">Portafolio</p>
            <h2 className="section-title">Nuestros trabajos</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <div key={g.src}
                className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={g.src} alt={g.label}
                  width="400" height={i === 0 ? 400 : 192} loading="lazy"
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${i === 0 ? 'h-64 md:h-full' : 'h-48'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portafolio" className="btn-dark px-8 py-3 rounded-full">
              Ver Portafolio Completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label">Clientes</p>
            <h2 className="section-title">Lo que dicen de nosotros</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <MapSection />
    </main>
  )
}

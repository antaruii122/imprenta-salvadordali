import { Helmet } from 'react-helmet-async'

const images = [
  { src: '/images/hero_stickers.webp', alt: 'Stickers troquelados personalizados impresos en Las Condes — Imprenta Salvador Dali' },
  { src: '/images/product_afiche.webp', alt: 'Afiches y carteles impresos en Santiago — Imprenta Salvador Dali Las Condes' },
  { src: '/images/product_etiqueta.webp', alt: 'Etiquetas personalizadas para productos impresas en Las Condes — Imprenta Salvador Dali' },
  { src: '/images/product_etiqueta_textil.webp', alt: 'Etiquetas textiles personalizadas con impresión DTF en Las Condes — Imprenta Salvador Dali' },
  { src: '/images/product_etiquetas_bolsas.webp', alt: 'Etiquetas para bolsas y packaging impresas en Santiago — Imprenta Salvador Dali' },
  { src: '/images/product_marca_libro.webp', alt: 'Marcadores de libros personalizados impresos en Las Condes — Imprenta Salvador Dali' },
  { src: '/images/product_stickers_circulares.webp', alt: 'Stickers circulares personalizados impresos en Las Condes, Santiago — Imprenta Salvador Dali' },
  { src: '/images/product_stickers_utiles.webp', alt: 'Stickers adhesivos para útiles y oficina impresos en Las Condes — Imprenta Salvador Dali' },
  { src: '/images/product_tags.webp', alt: 'Tags y etiquetas colgantes personalizadas para ropa y productos — Imprenta Salvador Dali Las Condes' },
  { src: '/images/banners_pendones.webp', alt: 'Pendones publicitarios impresos en Las Condes, Santiago — Imprenta Salvador Dali' },
  { src: '/images/business_cards.webp', alt: 'Tarjetas de presentación impresas en Las Condes con acabado premium — Imprenta Salvador Dali' },
  { src: '/images/flyers_volantes.webp', alt: 'Volantes y flyers publicitarios impresos en Las Condes, Santiago — Imprenta Salvador Dali' },
]

export default function Portafolio() {
  return (
    <main>
      <Helmet>
        <title>Portafolio de Trabajos — Stickers, Tarjetas y Volantes Impresos | Imprenta Salvador Dali</title>
        <meta name="description" content="Galería de trabajos impresos por Imprenta Salvador Dali en Las Condes. Stickers, tarjetas de presentación, volantes, pendones y más. Calidad profesional." />
        <meta property="og:title" content="Portafolio — Imprenta Salvador Dali Las Condes" />
        <meta property="og:description" content="Galería de trabajos impresos: stickers, tarjetas, volantes, pendones y más." />
        <meta property="og:image" content="https://imprentasalvadordalichile.cl/images/cropped-icono-66.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <link rel="canonical" href="https://www.imprentasalvadordalichile.cl/portafolio" />
      </Helmet>

      {/* Header */}
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Nuestro trabajo</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Portafolio</h1>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">Conoce algunos de los proyectos que hemos realizado para nuestros clientes.</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div key={i}
                className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square shadow-sm hover:shadow-card-hover transition-shadow duration-300">
                <img
                  src={img.src} alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

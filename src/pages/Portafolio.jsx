import { Helmet } from 'react-helmet-async'

const PH = '/images/hero_stickers.png'

const images = [
  { src: PH, alt: 'ImpresiÃ³n' },
  { src: PH, alt: 'Tarjetas' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Tags' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Flyers y Volantes' },
  { src: PH, alt: 'Flyers y Volantes' },
  { src: PH, alt: 'Tags' },
  { src: PH, alt: 'Tarjetas' },
  { src: PH, alt: 'Adhesivos Botellas' },
  { src: PH, alt: 'Tags' },
  { src: PH, alt: 'Tags' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Entradas' },
  { src: PH, alt: 'CatÃ¡logos' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Flyers y Volantes' },
  { src: PH, alt: 'Adhesivos' },
  { src: PH, alt: 'Stickers' },
  { src: PH, alt: 'Stickers Troquelados' },
]

export default function Portafolio() {
  return (
    <main>
      <Helmet>
        <title>Portafolio de Trabajos â€” Stickers, Tarjetas y Volantes Impresos | Imprenta Salvador DalÃ­</title>
        <meta name="description" content="GalerÃ­a de trabajos impresos por Imprenta Salvador DalÃ­ en Las Condes. Stickers, tarjetas de presentaciÃ³n, volantes, pendones y mÃ¡s. Calidad profesional." />
        <meta property="og:title" content="Portafolio â€” Imprenta Salvador DalÃ­ Las Condes" />
        <meta property="og:description" content="GalerÃ­a de trabajos impresos: stickers, tarjetas, volantes, pendones y mÃ¡s." />
        <meta property="og:image" content="https://imprentasalvadordali.cl/images/cropped-icono-66.png" />
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

const BASE = 'https://imprentasalvadordali.cl/wp-content/uploads/2023/08/'

const images = [
  { src: BASE + 'impresion1.jpg', alt: 'Impresión' },
  { src: BASE + 'impresion2-tarjetas.jpg', alt: 'Tarjetas' },
  { src: BASE + 'impresion3-stickers.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion4-stickers.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion5-tags.jpg', alt: 'Tags' },
  { src: BASE + 'impresion6-stickes.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion8-flyers-volantes.jpg', alt: 'Flyers y Volantes' },
  { src: BASE + 'impresion9-flyers-volantes.jpg', alt: 'Flyers y Volantes' },
  { src: BASE + 'impresion10-tags.jpg', alt: 'Tags' },
  { src: BASE + 'impresion11-tarjetas.jpg', alt: 'Tarjetas' },
  { src: BASE + 'impresion12-adhesivos-botellas.jpg', alt: 'Adhesivos Botellas' },
  { src: BASE + 'impresion13-tags.jpg', alt: 'Tags' },
  { src: BASE + 'impresion14-tags.jpg', alt: 'Tags' },
  { src: BASE + 'impresion15-stickers.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion16-entradas.jpg', alt: 'Entradas' },
  { src: BASE + 'impresion17-catalogos.jpg', alt: 'Catálogos' },
  { src: BASE + 'impresion18-stickers.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion19-flyers-volantes.jpg', alt: 'Flyers y Volantes' },
  { src: BASE + 'impresion20-adhesivos.jpg', alt: 'Adhesivos' },
  { src: BASE + 'impresion21-stickers.jpg', alt: 'Stickers' },
  { src: BASE + 'impresion22-stickers-troquelados.jpg', alt: 'Stickers Troquelados' },
]

export default function Portafolio() {
  return (
    <main>
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

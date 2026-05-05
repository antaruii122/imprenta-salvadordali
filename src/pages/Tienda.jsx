import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import PromoBar from '../components/PromoBar'
import { allProducts } from '../data/products'

const categories = [
  { slug: 'stickers', label: 'Stickers', emoji: '🎯' },
  { slug: 'tarjeteria', label: 'Tarjetería', emoji: '🪪' },
  { slug: 'publicidad', label: 'Publicidad', emoji: '📢' },
  { slug: 'utiles-escolares', label: 'Útiles Escolares', emoji: '🎒' },
]

export default function Tienda() {
  return (
    <main>
      <Helmet>
        <title>Tienda de Impresión en Las Condes — Stickers, Tarjetas, Volantes y más | Imprenta Salvador Dalí</title>
        <meta name="description" content="Compra stickers, tarjetas de presentación, volantes, pendones y útiles escolares personalizados. Imprenta en Las Condes con entrega en 48 horas." />
        <meta property="og:title" content="Tienda de Impresión — Imprenta Salvador Dalí Las Condes" />
        <meta property="og:description" content="Stickers, tarjetas, volantes, pendones y más. Entrega express en 48 horas desde Las Condes." />
        <meta property="og:image" content="https://imprentasalvadordali.cl/wp-content/uploads/2023/08/logo-04.jpg" />
      </Helmet>

      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Nuestros productos</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Tienda</h1>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">Impresión de calidad para todos tus proyectos. Cotiza directo por WhatsApp.</p>
        </div>
      </div>

      {/* Category cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} to={`/tienda/${c.slug}`}
              className="group flex flex-col items-center gap-2 bg-beige hover:bg-brand hover:text-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
              <span className="font-semibold text-sm text-charcoal group-hover:text-white transition-colors">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <PromoBar />

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">Todos los Productos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allProducts.map((p) => (
              <ProductCard key={p.id} img={p.img} name={p.name} price={p.price} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

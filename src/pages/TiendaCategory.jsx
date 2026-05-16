import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import PromoBar from '../components/PromoBar'
import { allProducts } from '../data/products'

const meta = {
  stickers: {
    title: 'Stickers',
    desc: 'Adhesivos, etiquetas y stickers personalizados.',
    emoji: '🎯',
    metaTitle: 'Stickers Personalizados en Las Condes — Adhesivos en Todo Formato | Imprenta Salvador Dali',
    metaDesc: 'Stickers y adhesivos personalizados impresos en Las Condes. Vinilo transparente, troquelado, circular y más. Entrega en 48 horas. Cotiza por WhatsApp.',
  },
  tarjeteria: {
    title: 'Tarjetería',
    desc: 'Tarjetas de presentación, tags, marca libros y más.',
    emoji: '🪪',
    metaTitle: 'Tarjetas de Presentación en Las Condes — Acabados Premium | Imprenta Salvador Dali',
    metaDesc: 'Impresión de tarjetas de presentación en Las Condes. Laminado mate, brillo, barniz UV y más. Desde $5.000. Entrega en 48 horas.',
  },
  publicidad: {
    title: 'Publicidad',
    desc: 'Volantes, afiches, pendones y todo tu material publicitario.',
    emoji: '📢',
    metaTitle: 'Material Publicitario en Las Condes — Volantes, Pendones y Afiches | Imprenta Salvador Dali',
    metaDesc: 'Impresión de volantes, afiches y pendones en Las Condes. 1.000 volantes desde $20.000. Entrega express en 48 horas.',
  },
  'utiles-escolares': {
    title: 'Útiles Escolares',
    desc: 'Personaliza tus adhesivos para los útiles escolares.',
    emoji: '🎒',
    metaTitle: 'Útiles Escolares Personalizados en Las Condes — Stickers para Cuadernos | Imprenta Salvador Dali',
    metaDesc: 'Stickers y etiquetas personalizadas para útiles escolares en Las Condes. Ideal para colegios y apoderados. Entrega en 48 horas.',
  },
}

const cats = [
  { slug: 'stickers', label: 'Stickers' },
  { slug: 'tarjeteria', label: 'Tarjetería' },
  { slug: 'publicidad', label: 'Publicidad' },
  { slug: 'utiles-escolares', label: 'Útiles Escolares' },
]

const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

export default function TiendaCategory({ category }) {
  const info = meta[category] || { title: category, desc: '', emoji: '🛍️' }
  const products = allProducts.filter(p => p.categories.includes(category))
  const others   = allProducts.filter(p => !p.categories.includes(category))

  return (
    <main>
      <Helmet>
        <title>{info.metaTitle}</title>
        <meta name="description" content={info.metaDesc} />
        <meta property="og:title" content={info.metaTitle} />
        <meta property="og:description" content={info.metaDesc} />
        <meta property="og:image" content="https://imprentasalvadordalichile.cl/images/cropped-icono-66.png" />
        <link rel="canonical" href={`https://www.imprentasalvadordalichile.cl/tienda/${category}`} />
      </Helmet>

      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <nav className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <Link to="/tienda" className="hover:text-brand transition-colors">Tienda</Link>
            <span>/</span>
            <span className="text-charcoal font-medium">{info.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{info.emoji}</span>
            <div>
              <h1 className="font-heading text-4xl font-bold text-charcoal">{info.title}</h1>
              <p className="text-gray-500 text-sm mt-1">{info.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 flex gap-2 py-3 overflow-x-auto">
          {cats.map(c => (
            <Link key={c.slug} to={`/tienda/${c.slug}`}
              className={`flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                c.slug === category ? 'bg-brand text-white shadow-md' : 'text-gray-500 hover:text-brand hover:bg-beige'
              }`}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* WA CTA */}
      <div className="bg-charcoal text-white py-5 text-center">
        <p className="text-sm text-gray-300 mb-3">¿Tienes dudas? Cotiza directo y recibe respuesta rápida</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp">
          COTIZA A NUESTRO WHATSAPP
        </a>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map(p => <ProductCard key={p.id} img={p.img} name={p.name} price={p.price} />)}
          </div>
        </div>
      </section>

      <PromoBar />

      {others.length > 0 && (
        <section className="py-14 bg-beige">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-xl font-bold text-charcoal mb-8">¡También podría interesarte!</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {others.map(p => <ProductCard key={p.id} img={p.img} name={p.name} price={p.price} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

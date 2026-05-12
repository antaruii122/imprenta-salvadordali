import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blogPosts'

const tagColors = {
  'TecnologÃ­a': 'bg-blue-50 text-blue-700',
  'Productos': 'bg-amber-50 text-amber-700',
}

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <main>
      <Helmet>
        <title>Blog de ImpresiÃ³n en Santiago â€” Consejos y Novedades | Imprenta Salvador DalÃ­</title>
        <meta name="description" content="ArtÃ­culos sobre impresiÃ³n digital, DTF textil, stickers troquelados y tinta UV en Santiago. Tips para emprendedores y empresas en Las Condes." />
        <meta property="og:title" content="Blog â€” Imprenta Salvador DalÃ­ Las Condes" />
        <meta property="og:description" content="GuÃ­as y artÃ­culos sobre impresiÃ³n en Santiago: DTF, troquelado, UV y mÃ¡s." />
        <meta property="og:image" content="https://imprentasalvadordali.cl/images/cropped-icono-66.png" />
      </Helmet>

      {/* Header */}
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Noticias y consejos</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Blog de ImpresiÃ³n</h1>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            GuÃ­as prÃ¡cticas sobre tecnologÃ­as de impresiÃ³n, materiales y cÃ³mo sacarle partido a tus materiales grÃ¡ficos.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} className="group block mb-12">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal to-[#2a2a44] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 flex items-center justify-center text-5xl md:text-6xl">
                {featured.emoji}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <span className="text-xs font-bold bg-brand/30 text-brand-light px-3 py-1 rounded-full">
                    Destacado
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/70`}>
                    {featured.tag}
                  </span>
                  <span className="text-xs text-white/40">{featured.date}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-5">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-brand-light font-semibold text-sm group-hover:gap-3 transition-all">
                  Leer artÃ­culo completo <span>â†’</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group card p-7 flex gap-5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-beige flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {post.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagColors[post.tag] || 'bg-beige text-gray-600'}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-heading text-base font-bold text-charcoal mb-2 group-hover:text-brand transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="text-brand font-semibold text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer mÃ¡s <span>â†’</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Tags strip */}
          <div className="bg-beige rounded-2xl p-6">
            <p className="font-heading font-bold text-charcoal mb-3 text-sm">Temas</p>
            <div className="flex flex-wrap gap-2">
              {['TecnologÃ­a', 'Productos', 'DTF Textil', 'Tinta UV', 'Stickers', 'Tarjetas'].map(tag => (
                <span key={tag}
                  className="text-sm font-medium bg-white text-gray-600 hover:text-brand hover:bg-beige-dark px-4 py-1.5 rounded-full shadow-sm cursor-default transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blogPosts'
import { servicios } from '../data/servicios'
import { comunas } from '../data/comunas'

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const relatedServiceObjs = (post.relatedServices || [])
    .map(s => servicios.find(sv => sv.slug === s))
    .filter(Boolean)

  const relatedComunaObj = comunas.find(c => c.slug === post.relatedComuna)

  const otherPosts = blogPosts.filter(p => p.slug !== slug)

  return (
    <main>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDesc} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDesc} />
        <meta property="og:image" content="https://imprentasalvadordali.cl/wp-content/uploads/2023/08/logo-04.jpg" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Header */}
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-charcoal font-medium line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-4xl shadow-sm">
              {post.emoji}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs font-bold bg-brand/20 text-brand px-3 py-1 rounded-full">{post.tag}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-tight">{post.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Article body */}
          <article className="prose-custom">
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium border-l-4 border-brand pl-5">
              {post.excerpt}
            </p>

            {post.content.map((block, i) => {
              if (block.type === 'intro') return (
                <p key={i} className="text-gray-500 leading-relaxed mb-6 text-base">{block.text}</p>
              )
              if (block.type === 'h2') return (
                <h2 key={i} className="font-heading text-2xl font-bold text-charcoal mt-10 mb-4">{block.text}</h2>
              )
              if (block.type === 'text') return (
                <p key={i} className="text-gray-500 leading-relaxed mb-5 text-base">{block.text}</p>
              )
              if (block.type === 'cta') return (
                <div key={i} className="my-10 bg-gradient-to-r from-brand-dark via-brand to-brand-light rounded-2xl p-8 text-center">
                  <p className="font-heading text-xl font-bold text-white mb-4">{block.text}</p>
                  <a href={block.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-brand hover:bg-brand hover:text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200">
                    <WaIcon /> Cotizar ahora
                  </a>
                </div>
              )
              return null
            })}

            {/* Internal links to services */}
            {relatedServiceObjs.length > 0 && (
              <div className="mt-10 p-6 bg-beige rounded-2xl">
                <p className="font-semibold text-charcoal text-sm mb-3">Servicios relacionados en Imprenta Salvador Dalí:</p>
                <div className="flex flex-wrap gap-3">
                  {relatedServiceObjs.map(s => (
                    <Link key={s.slug} to={`/servicios/${s.slug}`}
                      className="flex items-center gap-2 bg-white border border-beige-dark hover:border-brand hover:text-brand text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200">
                      <span>{s.emoji}</span> {s.title}
                    </Link>
                  ))}
                  {relatedComunaObj && (
                    <Link to={`/imprenta/${relatedComunaObj.slug}`}
                      className="flex items-center gap-2 bg-white border border-beige-dark hover:border-brand hover:text-brand text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200">
                      📍 Imprenta en {relatedComunaObj.name}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 sticky top-24">
            {/* CTA card */}
            <div className="bg-charcoal rounded-2xl p-6 text-center">
              <p className="text-white font-heading font-bold text-lg mb-2">¿Te quedó alguna duda?</p>
              <p className="text-white/60 text-xs mb-5">Cotiza directo por WhatsApp y te respondemos en minutos.</p>
              <a href="https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar"
                target="_blank" rel="noopener noreferrer"
                className="btn-wsp w-full justify-center">
                <WaIcon /> Cotizar ahora
              </a>
            </div>

            {/* Other posts */}
            {otherPosts.length > 0 && (
              <div className="bg-beige rounded-2xl p-6">
                <p className="font-heading font-bold text-charcoal text-sm mb-4">Otros artículos</p>
                <div className="space-y-4">
                  {otherPosts.map(p => (
                    <Link key={p.slug} to={`/blog/${p.slug}`}
                      className="group flex items-start gap-3 hover:text-brand transition-colors">
                      <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                      <p className="text-sm font-medium text-charcoal group-hover:text-brand leading-snug transition-colors">
                        {p.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Services quick links */}
            <div className="bg-white border border-beige-dark rounded-2xl p-6">
              <p className="font-heading font-bold text-charcoal text-sm mb-4">Nuestros servicios</p>
              <div className="space-y-2">
                {[
                  { to: '/servicios/stickers', label: 'Stickers personalizados', emoji: '🎯' },
                  { to: '/servicios/tarjetas-presentacion', label: 'Tarjetas de presentación', emoji: '🪪' },
                  { to: '/servicios/volantes', label: 'Volantes y flyers', emoji: '📄' },
                  { to: '/servicios/pendones', label: 'Pendones publicitarios', emoji: '🚩' },
                ].map(({ to, label, emoji }) => (
                  <Link key={to} to={to}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand transition-colors py-1">
                    <span>{emoji}</span> {label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to blog */}
      <div className="bg-beige py-10 text-center">
        <Link to="/blog" className="btn-outline px-8 py-3 rounded-full">
          ← Volver al Blog
        </Link>
      </div>
    </main>
  )
}

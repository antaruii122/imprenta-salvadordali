const posts = [
  {
    slug: 'dtf-textil',
    title: 'DTF Textil',
    date: '28 de enero de 2026',
    tag: 'Tecnología',
    emoji: '👕',
    excerpt: 'La impresión DTF (Direct to Film) es una técnica que permite imprimir diseños sobre un film adhesivo especial, al que se le aplica un polvo adhesivo que luego se funde con calor. El resultado es una transferencia que puede aplicarse sobre casi cualquier tipo de tela, sin importar el color del tejido ni la cantidad de colores del diseño.',
  },
  {
    slug: 'adhesivos-troquelados',
    title: '¿Qué son los Adhesivos Troquelados?',
    date: '28 de septiembre de 2023',
    tag: 'Productos',
    emoji: '✂️',
    excerpt: 'Los adhesivos troquelados son elementos que usamos en el día a día sin siquiera notarlo: están en la pantalla de tu celular, en los sensores de estacionamiento, en productos de cosmética y mucho más. Son adhesivos cortados con forma precisa mediante un troquel, lo que permite crear piezas de cualquier tamaño y diseño.',
  },
  {
    slug: 'sistema-impresion-tinta-uv',
    title: 'Sistema de impresión con tinta UV',
    date: '9 de agosto de 2023',
    tag: 'Tecnología',
    emoji: '🔆',
    excerpt: 'La tinta UV es una tinta de secado instantáneo que se cura mediante luz ultravioleta. Este sistema de impresión permite imprimir sobre superficies no convencionales como vidrio, metal, madera, cuero, plásticos rígidos y más, con una calidad de color excepcional y acabados duraderos.',
  },
]

export default function Blog() {
  return (
    <main>
      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Noticias y tips</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Nuestro Blog</h1>
          <div className="section-divider mx-auto" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Te contaremos sobre nuestros nuevos productos, proyectos entretenidos y un poco sobre la vida de Dalí.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug}
                className="group card p-8 flex gap-6 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="hidden md:flex w-20 h-20 flex-shrink-0 rounded-2xl bg-beige items-center justify-center text-4xl">
                  {post.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-brand bg-brand/10 px-2.5 py-0.5 rounded-full">{post.tag}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <button className="mt-4 text-brand font-semibold text-sm hover:underline">
                    Leer más →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Archive sidebar style */}
          <div className="mt-10 bg-beige rounded-2xl p-6">
            <h3 className="font-heading font-bold text-charcoal mb-4">Archivos</h3>
            <div className="flex flex-wrap gap-2">
              {['Enero 2026', 'Septiembre 2023', 'Agosto 2023'].map(a => (
                <span key={a}
                  className="text-sm font-medium bg-white text-gray-600 hover:text-brand hover:bg-beige-dark px-4 py-1.5 rounded-full shadow-sm cursor-pointer transition-colors">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

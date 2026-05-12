import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'

const CONTACT_IMG = '/images/placeholder.svg'
const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <main>
      <Helmet>
        <title>Contacto â€” Imprenta en Las Condes, Santiago | Imprenta Salvador DalÃ­</title>
        <meta name="description" content="ContÃ¡ctanos para cotizar stickers, tarjetas, volantes o pendones. Estamos en Las Condes #10.415, of 25B. Respuesta express por WhatsApp." />
        <meta property="og:title" content="Contacto â€” Imprenta Salvador DalÃ­ Las Condes" />
        <meta property="og:description" content="ImpresiÃ³n express en Las Condes. Cotiza por WhatsApp o visÃ­tanos en Las Condes #10.415, of 25B." />
        <meta property="og:image" content="https://imprentasalvadordali.cl/images/cropped-icono-66.png" />
      </Helmet>

      <div className="page-header">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8B7355 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="section-label">Estamos aquÃ­</p>
          <h1 className="font-heading text-4xl font-bold text-charcoal">Contacto</h1>
          <div className="section-divider mx-auto" />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="section-label">EscrÃ­benos</p>
            <h2 className="section-title mb-2">En Imprenta Salvador DalÃ­<br />te esperamos</h2>
            <div className="section-divider" />
            <p className="text-gray-500 leading-relaxed mb-8">
              Para imprimir todo tu material grÃ¡fico al mejor precio y la mejor calidad, impresiones en 48 hrs.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: 'ðŸ“', title: 'DirecciÃ³n', content: 'Las Condes #10.415, of 25B\nLas Condes, RegiÃ³n Metropolitana, Chile', note: 'Toda visita debe ser agendada previamente' },
                { icon: 'ðŸ“ž', title: 'TelÃ©fono', href: 'tel:+56964123098', content: '+569 6412 3098' },
                { icon: 'ðŸ’¬', title: 'WhatsApp', href: WA, content: 'Cotiza directo por WhatsApp' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start p-4 rounded-xl bg-beige">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{item.title}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-brand transition-colors">
                          {item.content}
                        </a>
                      : <p className="text-gray-500 text-sm whitespace-pre-line">{item.content}</p>
                    }
                    {item.note && <p className="text-gray-400 text-xs italic mt-0.5">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            <img src={CONTACT_IMG} alt="Contacto" className="w-full max-w-xs rounded-2xl shadow-card object-contain" />
          </div>

          {/* Right: form */}
          <div className="card p-8">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-6">EnvÃ­anos un mensaje</h3>
            {sent ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">âœ…</p>
                <p className="font-heading text-xl font-bold text-charcoal mb-2">Â¡Mensaje enviado!</p>
                <p className="text-gray-500 text-sm">Te contactaremos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Nombre y Apellido *</label>
                  <input name="nombre" value={form.nombre} onChange={handle} required
                    className="w-full border border-beige-dark bg-beige focus:bg-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-brand transition-all"
                    placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required
                    className="w-full border border-beige-dark bg-beige focus:bg-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-brand transition-all"
                    placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1.5">Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handle} required rows={5}
                    className="w-full border border-beige-dark bg-beige focus:bg-white px-4 py-3 text-sm rounded-xl focus:outline-none focus:border-brand transition-all resize-none"
                    placeholder="Â¿En quÃ© podemos ayudarte?" />
                </div>
                <button type="submit"
                  className="w-full bg-charcoal hover:bg-brand text-white font-semibold py-3.5 rounded-xl transition-colors duration-200">
                  Enviar Mensaje
                </button>
                <p className="text-center text-xs text-gray-400">
                  O cotiza directo por{' '}
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  )
}

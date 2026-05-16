const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

export default function MapSection() {
  return (
    <section className="bg-white py-0">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="section-label">Visítanos</p>
          <h2 className="section-title">¿Dónde estamos?</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card-hover">
          {/* Map */}
          <div className="w-full h-80 md:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.163919404381!2d-70.53722364950025!3d-33.38351132573767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfe7328891b9%3A0x18fbc774f85ab5ee!2sImprenta%20Salvador%20Dali!5e1!3m2!1ses-419!2stw!4v1777537166621!5m2!1ses-419!2stw"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Imprenta Salvador Dali"
            />
          </div>

          {/* Info panel */}
          <div className="bg-charcoal text-white p-10 flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold mb-8">
              📍 Nuestra ubicación
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-brand text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-white">Mayecura 1177, 7570718 Las Condes, Región Metropolitana, Chile</p>
                  <p className="text-gray-400 text-sm">Las Condes, Región Metropolitana, Chile</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-brand text-xl">📞</span>
                <a href="tel:+56964123098" className="font-semibold text-white hover:text-brand transition-colors">
                  +569 6412 3098
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-brand text-xl mt-0.5">🕐</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">Toda visita debe ser agendada previamente</span>
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wsp w-full justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotiza por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

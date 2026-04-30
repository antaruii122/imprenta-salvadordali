const WA = 'https://wa.me/56964123098?text=Hola%2C%20quiero%20la%20promo%20de%201000%20volantes'

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-light py-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="relative">
        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          🔥 Promo del Mes
        </span>
        <p className="font-heading text-2xl font-black text-white mb-1">
          1.000 Volantes 10×14 cm — <span className="text-white/80">$20.000</span>
        </p>
        <p className="text-white/60 text-xs mb-4">*Válido hasta agotar stock</p>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-brand hover:bg-charcoal hover:text-white font-bold text-sm px-7 py-2.5 rounded-full shadow-lg transition-all duration-200">
          ¡Lo quiero!
        </a>
      </div>
    </div>
  )
}

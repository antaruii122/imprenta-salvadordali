const WA = 'https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar'

export default function ProductCard({ img, name, price }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
      <div className="relative overflow-hidden aspect-square bg-beige">
        <img src={img} alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-charcoal text-sm leading-snug mb-1">{name}</h3>
        {price && <p className="text-brand font-bold text-sm mb-3">{price}</p>}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="block w-full text-center bg-charcoal group-hover:bg-brand text-white text-xs font-semibold py-2 rounded-lg transition-colors duration-200">
          Cotizar
        </a>
      </div>
    </div>
  )
}

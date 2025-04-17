import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

export default function TeaCard({ tea }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-tea-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={tea.image}
          alt={tea.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-lg">{tea.name}</h3>
          <span className="bg-tea-primary text-white text-xs px-2 py-1 rounded-full">
            {tea.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{tea.origin}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-tea-dark">${tea.price}</span>
          <button 
            onClick={() => addToCart(tea)}
            className="text-tea-dark hover:text-tea-accent transition-colors"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
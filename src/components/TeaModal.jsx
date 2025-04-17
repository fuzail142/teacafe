import { useState } from 'react'  // Add this import
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

export default function TeaModal({ tea, onClose }) {
  const [quantity, setQuantity] = useState(1)  // Now properly imported
  const { addToCart } = useCart()

  if (!tea) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-tea-dark z-10"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 md:h-full">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-serif font-bold">{tea.name}</h2>
                  <span className="bg-tea-primary text-white text-sm px-3 py-1 rounded-full">
                    {tea.type}
                  </span>
                </div>

                <p className="text-tea-dark mb-2">Origin: {tea.origin}</p>
                <p className="text-2xl font-bold text-tea-dark mb-6">${tea.price.toFixed(2)}</p>

                <p className="text-gray-600 mb-8">
                  {tea.description || 'Premium quality tea with rich flavor and aroma.'}
                </p>

                <div className="mb-8">
                  <h3 className="font-serif font-bold mb-2">Brewing Guide</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Water Temperature: {tea.temperature || '80-90°C'}</li>
                    <li>• Steep Time: {tea.steepTime || '2-3 minutes'}</li>
                    <li>• Serving Size: {tea.servingSize || '8 oz'}</li>
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-xl"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-xl"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(tea, quantity)
                      onClose()
                    }}
                    className="btn btn-primary flex-1 flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
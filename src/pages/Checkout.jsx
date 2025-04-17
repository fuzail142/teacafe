import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    clearCart 
  } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 bg-tea-light min-h-screen"
    >
      <div className="container mx-auto px-4">
        <Link 
          to="/menu" 
          className="flex items-center text-tea-dark mb-8"
        >
          <FiArrowLeft className="mr-2" /> Back to Menu
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          Your <span className="text-tea-dark">Order</span>
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link 
              to="/menu" 
              className="btn btn-primary inline-flex items-center"
            >
              Browse Teas
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-serif font-bold mb-6">
                  Order Summary ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
                </h2>
                
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-tea-dark"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <FiX />
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.type}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-300 rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-sm"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-sm"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-bold text-tea-dark">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-serif font-bold mb-6">Order Total</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4">
                    <span className="font-bold">Total</span>
                    <span className="font-serif font-bold text-tea-dark text-xl">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={clearCart}
                  className="btn btn-secondary w-full mb-4"
                >
                  Clear Cart
                </button>
                <button className="btn btn-primary w-full">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const handleCheckout = () => {
    console.log('Proceeding to checkout', cart);
    // Add your checkout logic here
    // Example: navigate to checkout page
    // navigate('/checkout');
  };

  return (
    <>
      {/* Floating Cart Button - Only visible on mobile */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed md:hidden bottom-8 right-8 bg-tea-dark text-white p-4 rounded-full shadow-lg z-40 hover:bg-tea-primary transition-colors flex items-center"
        aria-label={`Open cart (${cartCount} items)`}
      >
        <FiShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-tea-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </motion.button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cart Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-serif font-bold text-tea-dark">
                  Your Tea Cart ({cartCount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-tea-dark transition-colors p-1"
                  aria-label="Close cart"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-grow overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <FiShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-6">Your cart is empty</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsCartOpen(false)}
                      className="btn btn-primary px-8"
                    >
                      Browse Teas
                    </motion.button>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {cart.map((item) => (
                      <motion.li 
                        key={`${item.id}-${item.quantity}`} 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 border-b pb-6 last:border-b-0"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-serif font-bold text-gray-900">{item.name}</h3>
                              <p className="text-gray-600 text-sm">{item.type}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-tea-dark transition-colors ml-2"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <FiX size={18} />
                            </button>
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border border-gray-200 rounded-full">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 text-sm hover:bg-gray-50 transition-colors w-8 flex justify-center"
                                aria-label="Decrease quantity"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="px-2 text-sm w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-sm hover:bg-gray-50 transition-colors w-8 flex justify-center"
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
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-gray-700">Subtotal:</span>
                    <span className="font-serif font-bold text-xl text-tea-dark">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleCheckout}
                    className="btn btn-primary w-full py-3 text-lg"
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
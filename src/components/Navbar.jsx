// Navbar.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1 })
  const { cartCount, isCartOpen, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: inView ? 1 : 0.9,
        y: inView ? 0 : -10,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 backdrop-blur-sm ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-bold text-primary-dark"
            >
              TeaCafe
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group text-gray-700 hover:text-primary-dark font-medium"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative btn btn-primary ml-4 flex items-center"
              aria-label={`Cart (${cartCount} items)`}
            >
              <FiShoppingCart className="mr-2" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary-dark text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-dark focus:outline-none relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX size={24} /> : (
                <>
                  <FiMenu size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary-dark text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 text-gray-700 hover:text-primary-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsCartOpen(true)
                  setIsMenuOpen(false)
                }}
                className="btn btn-primary w-full flex justify-center items-center relative"
              >
                <FiShoppingCart className="mr-2" />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary-dark text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navbar
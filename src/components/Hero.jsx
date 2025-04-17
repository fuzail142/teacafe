import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-tea-light overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tea-primary opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tea-accent rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Discover <span className="text-tea-dark">Premium</span> Teas
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the finest teas from around the world in our cozy cafe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Explore Menu <FiArrowRight className="ml-2" />
                </motion.button>
              </Link>
              <Link to="/reservation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary"
                >
                  Book a Table
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-8 -left-8 w-full h-full border-4 border-tea-dark rounded-lg z-0"></div>
              <motion.img
                src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Premium Tea"
                className="relative z-10 rounded-lg shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-tea-accent rounded-full z-0 opacity-70"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
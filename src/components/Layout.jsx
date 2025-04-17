import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Cart from './Cart'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <Cart />
    </div>
  )
}
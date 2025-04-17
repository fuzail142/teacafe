import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-tea-dark text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">TeaCafe</h3>
            <p className="mb-4">
              Discover the finest teas from around the world in our cozy cafe. 
              We're dedicated to bringing you authentic tea experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Home</a></li>
              <li><a href="#" className="hover:text-secondary">Menu</a></li>
              <li><a href="#" className="hover:text-secondary">About Us</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMail className="mr-2" /> info@teacafe.com
              </li>
              <li>123 Tea Street, Teaville</li>
              <li>Open: Mon-Sun 8am-8pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} TeaCafe. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
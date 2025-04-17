import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa' // ✅ Correct imports
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-16 bg-tea-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get In <span className="text-tea-dark">Touch</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Visit us or send us a message.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-tea-dark mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Tea Street, Teaville, TC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="text-tea-dark mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMail className="text-tea-dark mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@teacafe.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiClock className="text-tea-dark mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 8am - 8pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-serif font-bold text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-tea-dark text-white flex items-center justify-center hover:bg-tea-primary transition-colors">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-tea-dark text-white flex items-center justify-center hover:bg-tea-primary transition-colors">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-tea-dark text-white flex items-center justify-center hover:bg-tea-primary transition-colors">
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

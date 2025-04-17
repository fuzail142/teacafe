import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-16 bg-tea-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience Premium Tea?
          </h2>
          <p className="text-tea-light mb-8 max-w-2xl mx-auto">
            Visit us today or explore our online tea selection
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Book a Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-tea-dark hover:bg-gray-100"
            >
              Shop Online
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
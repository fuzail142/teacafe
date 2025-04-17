import { motion } from 'framer-motion'
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection.jsx'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-tea-dark">Story</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the passion behind TeaCafe and our journey to bring you the finest teas
            </p>
          </motion.div>

          <AboutSection extended={true} />
          <TeamSection />
        </div>
      </section>
    </motion.div>
  )
}
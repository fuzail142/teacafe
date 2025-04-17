import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import TeaGrid from '../components/TeaGrid.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AboutSection from '../components/AboutSection.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TeaGrid />
      <AboutSection />
      <Testimonials />
      <CTA />
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { FiAward, FiCoffee } from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa' // ✅ Correct leaf icon

export default function AboutSection() {
  const features = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We source only the finest tea leaves from trusted growers"
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: "Expert Brewing",
      description: "Our tea masters prepare each cup with precision and care"
    },
    {
      icon: <FaLeaf className="w-8 h-8" />, // ✅ Updated icon
      title: "Sustainable",
      description: "Ethically sourced and environmentally friendly practices"
    }
  ]

  return (
    <section className="section bg-tea-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-tea-dark">Tea</span> Story
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, TeaCafe began as a small family-owned shop with a passion for 
              sharing the world's finest teas. Today, we continue that tradition with the same 
              dedication to quality and service.
            </p>
            <p className="text-gray-600 mb-8">
              Each tea in our collection is personally selected by our founder during annual 
              trips to tea-growing regions around the world.
            </p>
            <button className="btn btn-primary">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-tea-dark mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

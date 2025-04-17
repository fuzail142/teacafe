import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tea Enthusiast",
    content: "The best tea experience I've had in the city. Their Earl Grey is simply divine!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Food Blogger",
    content: "Authentic matcha prepared traditionally. Takes me back to my trip to Kyoto.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Local Resident",
    content: "My go-to place for afternoon tea. Cozy atmosphere and knowledgeable staff.",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our <span className="text-tea-dark">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community of tea lovers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tea-light p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-tea-accent fill-tea-accent' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-serif font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
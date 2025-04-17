import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Li Wei",
    role: "Founder & Tea Master",
    bio: "With over 20 years of experience in tea cultivation and preparation.",
    image: "/images/team-1.jpg"
  },
  {
    name: "Aisha Patel",
    role: "Head of Operations",
    bio: "Ensures every visitor has an exceptional tea experience.",
    image: "/images/team-2.jpg"
  },
  {
    name: "James Wilson",
    role: "Head Barista",
    bio: "Specializes in traditional tea preparation techniques.",
    image: "/images/team-3.jpg"
  }
]

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Meet Our <span className="text-tea-dark">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate people behind your tea experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-tea-light">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-tea-dark mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
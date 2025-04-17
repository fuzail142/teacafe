import { useState } from 'react';
import { motion } from 'framer-motion';
import TeaGrid from '../components/TeaGrid';
import { FiFilter } from 'react-icons/fi';

const categories = [
  { id: 'all', name: 'All Teas' },
  { id: 'black', name: 'Black Tea' },
  { id: 'green', name: 'Green Tea' },
  { id: 'herbal', name: 'Herbal Tea' },
  { id: 'oolong', name: 'Oolong Tea' }
];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-tea-dark">Tea</span> Menu
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our extensive selection of premium teas from around the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === category.id
                      ? 'bg-tea-dark text-white'
                      : 'bg-white text-tea-dark hover:bg-tea-primary hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Mobile Filters */}
            <div className="md:hidden flex flex-col items-center">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 rounded-full bg-tea-accent text-white flex items-center mb-2"
              >
                <FiFilter className="mr-2" /> 
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap justify-center gap-2 w-full"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveFilter(category.id);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        activeFilter === category.id
                          ? 'bg-tea-dark text-white'
                          : 'bg-white text-tea-dark hover:bg-tea-primary hover:text-white'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Pass the active filter to TeaGrid */}
          <TeaGrid activeFilter={activeFilter} />
        </div>
      </section>
    </motion.div>
  );
}
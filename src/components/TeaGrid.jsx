import { useState } from 'react';
import { motion } from 'framer-motion';
import TeaCard from './TeaCard';
import TeaModal from './TeaModal';

const teas = [
  {
    id: 1,
    name: 'Earl Grey Supreme',
    type: 'black',
    origin: 'Sri Lanka',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'A classic black tea with distinctive bergamot flavoring, perfect for afternoon tea time.',
    temperature: '90-95°C',
    steepTime: '3-5 minutes',
    caffeine: 'High'
  },
  {
    id: 2,
    name: 'Jasmine Pearl',
    type: 'green',
    origin: 'China',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Hand-rolled green tea leaves with delicate jasmine blossoms, unfurling beautifully when steeped.',
    temperature: '80-85°C',
    steepTime: '2-3 minutes',
    caffeine: 'Medium'
  },
  {
    id: 3,
    name: 'Chamomile Dreams',
    type: 'herbal',
    origin: 'Egypt',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Soothing caffeine-free herbal tea with sweet, apple-like flavor, perfect for relaxation.',
    temperature: '95-100°C',
    steepTime: '5-7 minutes',
    caffeine: 'None'
  },
  {
    id: 4,
    name: 'Matcha Ceremonial',
    type: 'green',
    origin: 'Japan',
    price: 14.99,
    image: 'https://images.pexels.com/photos/6249729/pexels-photo-6249729.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Premium stone-ground matcha powder with vibrant green color and umami-rich flavor.',
    temperature: '70-80°C',
    steepTime: 'Whisk until frothy',
    caffeine: 'High'
  },
  {
    id: 5,
    name: 'Darjeeling First Flush',
    type: 'black',
    origin: 'India',
    price: 10.99,
    image: 'https://images.pexels.com/photos/7136271/pexels-photo-7136271.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'The "Champagne of teas" with floral aroma and delicate muscatel notes from the first spring harvest.',
    temperature: '90-95°C',
    steepTime: '3-4 minutes',
    caffeine: 'Medium-High'
  },
  {
    id: 6,
    name: 'Peppermint Bliss',
    type: 'herbal',
    origin: 'USA',
    price: 6.99,
    image: 'https://images.pexels.com/photos/2461314/pexels-photo-2461314.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Refreshing and invigorating pure peppermint leaves, naturally caffeine-free.',
    temperature: '95-100°C',
    steepTime: '5-7 minutes',
    caffeine: 'None'
  },
  {
    id: 7,
    name: 'Oolong Golden',
    type: 'oolong',
    origin: 'Taiwan',
    price: 11.99,
    image: 'https://images.pexels.com/photos/9880632/pexels-photo-9880632.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Semi-oxidized tea with honey-like sweetness and floral aroma, between green and black tea.',
    temperature: '85-90°C',
    steepTime: '3-4 minutes',
    caffeine: 'Medium'
  },
  {
    id: 8,
    name: 'Rooibos Chai',
    type: 'herbal',
    origin: 'South Africa',
    price: 9.99,
    image: 'https://images.pexels.com/photos/17536089/pexels-photo-17536089/free-photo-of-tea.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Caffeine-free red bush tea blended with traditional chai spices for a warming experience.',
    temperature: '95-100°C',
    steepTime: '5-7 minutes',
    caffeine: 'None'
  }
];

export default function TeaGrid({ activeFilter = 'all' }) {
  const [selectedTea, setSelectedTea] = useState(null);

  // Filter teas safely
  const filteredTeas = activeFilter && activeFilter.toLowerCase() !== 'all'
    ? teas.filter(tea =>
        tea?.type?.toLowerCase() === activeFilter?.toLowerCase()
      )
    : teas;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeas.map((tea) => (
            <motion.div 
              key={tea.id} 
              onClick={() => setSelectedTea(tea)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <TeaCard tea={tea} />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedTea && (
        <TeaModal 
          tea={selectedTea} 
          onClose={() => setSelectedTea(null)} 
        />
      )}
    </section>
  );
}

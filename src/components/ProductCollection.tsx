import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductCollection.module.css';

const categories = ['Export Flowers', 'Traditional & Worship', 'Garlands & Decor', 'Auspicious Leaves'];

const products = [
  // Export Flower Collection
  { id: 1, name: 'Roses (Cut & Button)', category: 'Export Flowers', highlight: 'Premium Export', img: '/images/roses.png', desc: 'Cut Roses (Taj Mahal, Avalanche, Freedom, etc.) & Loose Button Roses (Red, Yellow, Orange).' },
  { id: 2, name: 'Gerberas', category: 'Export Flowers', highlight: 'Cut Flowers', img: '/images/gerberas.png', desc: 'Vibrant colors: Red, Pink, Yellow, White, Orange.' },
  { id: 3, name: 'Carnations', category: 'Export Flowers', highlight: 'Standard & Spray', img: '/images/export.png', desc: 'Available in Red, White, Pink, Yellow, Purple.' },
  { id: 4, name: 'Chrysanthemum', category: 'Export Flowers', highlight: 'Chamanathi', img: '/images/export.png', desc: 'Colors: Yellow, White, Pink, Brown, Red.' },
  { id: 5, name: 'Lilies', category: 'Export Flowers', highlight: 'Elegant Blooms', img: '/images/lilies.png', desc: 'Premium Asiatic Lilies and Oriental Lilies.' },
  { id: 6, name: 'Tuberose (Rajnigandha)', category: 'Export Flowers', highlight: 'Fragrant', img: '/images/export.png', desc: 'Available in Single Petal and Double Petal varieties.' },
  { id: 7, name: 'Anthurium', category: 'Export Flowers', highlight: 'Exotic', img: '/images/export.png', desc: 'Available in Red, White, Pink, and Green.' },
  { id: 8, name: 'Orchids', category: 'Export Flowers', highlight: 'Luxury', img: '/images/lilies.png', desc: 'Dendrobium and Phalaenopsis orchid varieties.' },
  { id: 9, name: 'Gypsophila', category: 'Export Flowers', highlight: 'Baby Breath', img: '/images/export.png', desc: 'Available in classic White and gracefully Tinted Varieties.' },

  // Traditional & Worship Collection
  { id: 10, name: 'Jasmine Varieties', category: 'Traditional & Worship', highlight: 'GI Tagged', img: '/images/trad.png', desc: 'Famous Madurai Jasmine and fragrant Mullai strings.' },
  { id: 11, name: 'Traditional Offerings', category: 'Traditional & Worship', highlight: 'Pooja Essentials', img: '/images/trad.png', desc: 'Arali (Red, Pink, White), Lotus, Vadamali, Kanagabaram, Shamangi / Lilly.' },
  { id: 12, name: 'Chamanthi Varieties', category: 'Traditional & Worship', highlight: 'Vibrant', img: '/images/trad.png', desc: 'Yellow, White, Brown, Pink, and Red Chamanthi.' },
  { id: 13, name: 'Marigold Varieties', category: 'Traditional & Worship', highlight: 'Auspicious', img: '/images/trad.png', desc: 'Classic Yellow and Orange Marigold flowers.' },

  // Garlands & Decor
  { id: 14, name: 'Wedding Custom Garlands', category: 'Garlands & Decor', highlight: 'Specialty', img: '/images/hero.png', desc: 'Custom tailored premium floral designs for majestic wedding ceremonies.' },
  { id: 15, name: 'Temple Garlands', category: 'Garlands & Decor', highlight: 'Authentic', img: '/images/trad.png', desc: 'Long and grand customary garlands prepared specifically for temple deities.' },

  // Auspicious Leaves
  { id: 16, name: 'Banana Leaves', category: 'Auspicious Leaves', highlight: 'Fresh Cut', img: '/images/trad.png', desc: 'Premium Export-Quality large whole Banana Leaves for dining and rituals.' },
  { id: 17, name: 'Betel Leaves (Paan)', category: 'Auspicious Leaves', highlight: 'Auspicious', img: '/images/export.png', desc: 'Fresh tender Betel Leaves essential for all traditional prayers.' },
  { id: 18, name: 'Mango Leaves', category: 'Auspicious Leaves', highlight: 'Toran Use', img: '/images/trad.png', desc: 'Freshly plucked Mango leaves used for festive door decorations.' },
];

const ProductCollection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <section id="products" className={styles.productSection}>
      <div className="container">
        <h2 className="section-title">Our Premium Collections</h2>
        
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`${styles.tabBtn} ${activeTab === cat ? styles.active : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.productGrid}>
          <AnimatePresence mode='wait'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={styles.productCard}
              >
                <div className={styles.productInfo}>
                  <div className={styles.badgeInline}>{product.highlight}</div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                  <a href="#contact" className={styles.link}>Request Bulk Order →</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCollection;

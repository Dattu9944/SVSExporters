import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Clock, Leaf } from 'lucide-react';
import styles from './Hero.module.css';

const trustBadges = [
  { icon: <ShieldCheck size={16} />, text: 'APEDA Certified' },
  { icon: <Plane size={16} />, text: 'Air Shipment via BLR' },
  { icon: <Clock size={16} />, text: '24–72 Hr Dispatch' },
  { icon: <Leaf size={16} />, text: 'Farm-Direct Sourcing' },
];

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌸 Bangalore, South India · Est. 2014
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Fresh Flower<br />Exports from India
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium export-quality flowers & traditional garlands from South Indian farms — delivered globally in 24–72 hours via Bangalore Airport, with cold-chain freshness guaranteed.
          <br /><br />
          <span className={styles.trustQuote}>
            “Trusted by international buyers with successful exports to the UK, USA, and Middle East.”
          </span>
        </motion.p>
        
        <motion.div 
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact" className={`btn btn-secondary ${styles.btnLarge}`}>Request Quote</a>
          <a href="#products" className={`btn btn-outline-white ${styles.btnLarge}`}>View Products</a>
          <a href="/catalog.pdf" download className={`btn btn-outline-white ${styles.btnLarge}`}>Download Catalog 📥</a>
        </motion.div>

        <motion.div
          className={styles.trustBadges}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className={styles.badge}>
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

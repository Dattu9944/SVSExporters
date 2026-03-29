import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import { Sparkles, Globe, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.label}>About SVS Exporters</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Delivering the Fragrance of India to the World
          </h2>
          <p className={styles.description}>
            SVS Exporters is a trusted supplier of fresh flowers and traditional floral products from South India. We specialize in delivering premium-quality cut flowers along with authentic temple and wedding flowers.
          </p>
          <p className={styles.description}>
            We serve global export markets while maintaining strong roots in traditional Indian floral culture, uniquely combining modern global flower exports with traditional Indian flower expertise.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.iconBox}><Globe size={24} /></div>
              <span>Global Standards</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconBox}><Heart size={24} /></div>
              <span>Cultural Authenticity</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.iconBox}><Sparkles size={24} /></div>
              <span>Premium Freshness</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Using a subtle aesthetic placeholder until real images are provided */}
          <div className={styles.imageGrid}>
            <img src="/images/export.png" alt="Premium Cut Flowers" className={styles.imgLarge} />
            <div className={styles.imgSmallWrapper}>
              <img src="/images/trad.png" alt="Traditional Flowers" className={styles.imgSmall} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

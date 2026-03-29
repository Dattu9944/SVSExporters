import React from 'react';
import { motion } from 'framer-motion';
import styles from './Applications.module.css';

const Applications: React.FC = () => {
  const apps = [
    { title: 'Weddings & Events', desc: 'Custom floral decor and garlands for grand celebrations.', img: '/images/hero.png' },
    { title: 'Religious & Temple Use', desc: 'Authentic worship flowers and traditional offerings.', img: '/images/trad.png' },
    { title: 'Global Export Supply', desc: 'Premium cut flowers for international wholesalers.', img: '/images/export.png' }
  ];

  return (
    <section className={styles.appSection}>
      <div className="container">
        <h2 className="section-title">Applications</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)' }}>
          Our flowers serve a variety of premium needs across the globe.
        </p>
        
        <div className={styles.grid}>
          {apps.map((app, index) => (
            <motion.div 
              key={index} 
              className={styles.appCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={styles.imageBg} 
                style={{ backgroundImage: `url(${app.img})` }}
              >
                <div className={styles.overlay}>
                  <h3 className={styles.appTitle}>{app.title}</h3>
                  <p className={styles.appDesc}>{app.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;

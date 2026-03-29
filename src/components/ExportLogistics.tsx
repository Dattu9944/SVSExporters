import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Snowflake, ShieldCheck, Clock } from 'lucide-react';
import styles from './ExportLogistics.module.css';

const ExportLogistics: React.FC = () => {
  return (
    <section id="logistics" className={styles.exportSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <h2 className="section-title" style={{ textAlign: 'left', color: 'var(--text-white)' }}>
            Export & Logistics Excellence
          </h2>
          <p className={styles.description}>
            We understand that freshness is paramount. Our logistics network is optimized for speed, ensuring our flowers reach global markets in pristine condition.
          </p>
          
          <ul className={styles.list}>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className={styles.iconBox}><Snowflake size={20} /></div>
              <span><strong>Cold Chain Maintained:</strong> Strict temperature control from farm to destination.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className={styles.iconBox}><ShieldCheck size={20} /></div>
              <span><strong>Export Quality Packaging:</strong> Robust, specialized packaging to prevent transit damage.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.iconBox}><Plane size={20} /></div>
              <span><strong>Air Shipment (BLR):</strong> Rapid dispatch via Bengaluru International Airport.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className={styles.iconBox}><Clock size={20} /></div>
              <span><strong>Fast Lead Time:</strong> 24–72 hours delivery timeline worldwide. FOB / CIF available.</span>
            </motion.li>
          </ul>
        </div>
        
        <div className={styles.visualContent}>
          <div className={styles.statsCard}>
            <h3 className={styles.statsTitle}>Seamless Global Delivery</h3>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <span className={styles.statNum}>24h</span>
                <span className={styles.statLabel}>Processing Time</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Freshness Guarantee</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Inquire Logistics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportLogistics;

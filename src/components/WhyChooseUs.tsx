import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Truck, Settings, Sprout, Globe2, Clock3, ShieldCheck } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: <Sprout size={30} />,
    title: 'Own Dedicated Farms',
    desc: 'Unlike traditional exporters, we grow our own premium varieties across dedicated South Indian acres. This ensures 100% control over stem thickness, petal density, and zero-pesticide freshness.',
  },
  {
    icon: <Award size={30} />,
    title: 'Internationally Graded',
    desc: 'Every batch undergoes rigorous grading and quality inspection to meet EU, USA, and Gulf import standards before packing. Zero-compromise on quality.',
  },
  {
    icon: <Globe2 size={30} />,
    title: '15+ Countries Delivered',
    desc: 'With 500+ successful shipments across USA, UK, UAE, Singapore & more, our global logistics track record speaks for itself. We know how to deliver.',
  },
  {
    icon: <Clock3 size={30} />,
    title: '24–72 Hr Dispatch',
    desc: 'From harvest to Bangalore International Airport in under 24 hours. Your flowers depart fresh and arrive brilliant, consistently, every shipment.',
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'Full Compliance',
    desc: 'APEDA registered, Phytosanitary certified, and fully compliant with international plant health protocols — zero customs rejections, ever.',
  },
  {
    icon: <Leaf size={30} />,
    title: 'Traditional Expertise',
    desc: 'Unmatched mastery in authentic South Indian flowers — Jasmine, Lotus, Chamanthi, Marigolds. Trusted by temples, weddings & NRI communities worldwide.',
  },
  {
    icon: <Truck size={30} />,
    title: 'Cold Chain Integrity',
    desc: 'Strict temperature-controlled warehousing, 5-ply export cartons with ice gel packs ensure every stem arrives at destination in perfect condition.',
  },
  {
    icon: <Settings size={30} />,
    title: 'Custom Bulk Orders',
    desc: 'Need 10,000 stems of a specific rose variety? Or weekly temple flower supply? We tailor every order, offering FOB or CIF shipping terms to suit your business.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className={styles.whySection}>
      <div className="container">
        <h2 className="section-title">Why Global Buyers Trust SVS Exporters</h2>
        <p className={styles.subtitle}>
          500+ shipments. 15+ countries. Zero compromises. Here's why importers come back to us, shipment after shipment.
        </p>
        
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <div className={styles.iconWrapper}>{reason.icon}</div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

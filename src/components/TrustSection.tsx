import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck, Leaf } from 'lucide-react';
import styles from './TrustSection.module.css';

const certs = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'APEDA Registered',
    desc: 'Certified by Agricultural & Processed Food Products Export Development Authority of India for premium fresh exports.',
  },
  {
    icon: <FileCheck size={32} />,
    title: 'Phytosanitary Certified',
    desc: 'All shipments are plant health inspected and certified ensuring zero customs rejection at international ports.',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Farm-Direct Sourcing',
    desc: 'Products sourced directly from certified South Indian farms, ensuring freshness, purity, and fair-trade practices.',
  },
  {
    icon: <Award size={32} />,
    title: 'Export Quality Standards',
    desc: 'Graded and sorted to meet international quality benchmarks including EU, USA, and Gulf import standards.',
  },
];

const specs = [
  { label: 'Packaging', value: '5-Ply Export Cartons' },
  { label: 'Protection', value: 'Ice Gel / Hydration Pack' },
  { label: 'Dispatch Airport', value: 'Bangalore (BLR)' },
  { label: 'Dispatch Frequency', value: 'Daily / Weekly' },
  { label: 'Lead Time', value: '24 – 72 Hours' },
  { label: 'Shipping Terms', value: 'FOB / CIF Available' },
];

const paymentTerms = [
  { label: 'Payment Methods', value: 'Bank Transfer (SWIFT), LC, PayPal' },
  { label: 'Support Language', value: 'English, Telugu, Hindi, Kannada, Tamil' },
  { label: 'Bulk Pricing', value: 'Tiered B2B Rates Available' },
];

const TrustSection = () => {
  return (
    <section id="trust" className={styles.trustSection}>
      <div className="container">
        <h2 className="section-title">Quality Assurance & Compliance</h2>
        <p className={styles.subtitle}>
          We meet the highest international standards, so your imports clear customs and arrive flawless.
        </p>

        <div className={styles.certGrid}>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className={styles.certCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.certIcon}>{cert.icon}</div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certDesc}>{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.specWrapper}>
          <h3 className={styles.specTitle}>Export Specifications at a Glance</h3>
          <div className={styles.specGrid}>
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                className={styles.specItem}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.paymentStrip}>
          {paymentTerms.map((term, i) => (
            <div key={i} className={styles.paymentItem}>
              <span className={styles.paymentLabel}>{term.label}:</span>
              <span className={styles.paymentValue}>{term.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;

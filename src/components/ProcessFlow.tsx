import { motion } from 'framer-motion';
import { Sprout, Ruler, Package, PlaneTakeoff } from 'lucide-react';
import styles from './ProcessFlow.module.css';

const steps = [
  {
    icon: <Sprout size={32} />,
    title: 'Own Farm Sourcing',
    desc: 'Harvested daily at dawn from our dedicated acres in South India for peak freshness.'
  },
  {
    icon: <Ruler size={32} />,
    title: 'Sorting & Grading',
    desc: 'Each stem is manually inspected for thickness, length, and petal density by experts.'
  },
  {
    icon: <Package size={32} />,
    title: 'Pro-Export Packing',
    desc: 'Packed in 5-ply cartons with ice-gel packs and hydration sleeves for long-haul travel.'
  },
  {
    icon: <PlaneTakeoff size={32} />,
    title: 'Global Air Dispatch',
    desc: 'Fast shipment via Bangalore International Airport to 15+ countries in 24-72 hours.'
  }
];

const ProcessFlow = () => {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <h2 className="section-title">Our Professional Export Process</h2>
        <p className={styles.subtitle}>
          How we guarantee premium freshness from our farms to your doorstep, every single time.
        </p>

        <div className={styles.flowWrapper}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.stepCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.iconCircle}>
                {step.icon}
                <div className={styles.stepNumber}>{i + 1}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;

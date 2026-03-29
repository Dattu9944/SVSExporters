import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Wholesale Floral Importer, Dubai, UAE',
    quote: 'SVS Exporters have been our most reliable South Indian flower supplier for 3 years. Their Jasmine and Rose quality is unmatched. Deliveries arrive on time and customs clearance is always smooth thanks to their proper documentation.',
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Priya Venkataraman',
    role: 'Wedding Planner, Chennai',
    quote: 'We have sourced flowers for over 50 high-end weddings from SVS Exporters. Their custom garlands and lotus arrangements are truly one-of-a-kind. The team is always responsive and accommodating — even for last-minute requests.',
    rating: 5,
    initial: 'P',
  },
  {
    name: 'Arjun Nair',
    role: 'Temple Administrator, Singapore',
    quote: 'We receive fresh Chamanthi, Marigold, and Jasmine strings for our temple weekly from SVS Exporters. The flowers arrive fresh and their prices are very competitive. Highly recommended for all NRI temple communities.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Floral Boutique Owner, Riyadh, Saudi Arabia',
    quote: 'The cut roses and orchids from SVS Exporters have completely elevated our boutique\'s standards. Their phytosanitary documentation is impeccable — zero customs issues. We are extremely happy with the partnership.',
    rating: 5,
    initial: 'F',
  },
  {
    name: 'Suresh Menon',
    role: 'Event Decorator, Bangalore',
    quote: 'Bulk ordering from SVS Exporters for corporate events has been effortless. Wide variety, premium quality, competitive pricing. Their team has never let us down even during peak wedding seasons.',
    rating: 5,
    initial: 'S',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <h2 className="section-title">Trusted by Buyers Worldwide</h2>
        <p className={styles.subtitle}>
          From Dubai to Singapore, temple trusts to five-star weddings — here's what partners say.
        </p>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={16} fill="var(--secondary)" color="var(--secondary)" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

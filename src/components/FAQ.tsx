import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for export orders?',
    a: 'MOQ varies by flower type. For cut roses, the minimum is typically 500 stems per variety. For bulk traditional flowers like Jasmine or Marigold, the minimum is 5 kg per order. Contact us for exact MOQ for each product.',
  },
  {
    q: 'Which countries do you currently export to?',
    a: 'We actively ship to the USA, UK, Germany, Netherlands, UAE, Saudi Arabia, Singapore, and Australia. We are open to new markets — contact us with your requirements and we will assess feasibility promptly.',
  },
  {
    q: 'How fresh will my flowers be on arrival?',
    a: 'Our flowers are harvested fresh within 24 hours of dispatch, packed in 5-ply export cartons with ice gel or hydration packs, and dispatched via Bengaluru International Airport. This ensures maximum freshness with a typical vase life of 7–10 days on arrival.',
  },
  {
    q: 'What shipping terms do you offer?',
    a: 'We offer both FOB (Free on Board) and CIF (Cost, Insurance & Freight) shipping terms. These can be customized based on the buyer\'s preference and destination country.',
  },
  {
    q: 'Do you provide Phytosanitary certificates for international shipments?',
    a: 'Yes, absolutely. All our export consignments are accompanied by government-issued Phytosanitary certificates, ensuring your shipment clears customs without delays.',
  },
  {
    q: 'How do I place a bulk order for a wedding or event?',
    a: 'You can use our "Request a Quote" form below, send us a WhatsApp message, or call us directly at +91 9663337959. Provide details of your event date, flower types, and quantity, and we will send a customized proposal within 24 hours.',
  },
  {
    q: 'Can you supply to Temples and Religious Institutions regularly?',
    a: 'Yes! We have dedicated supply chains for regular temple flower supply — Jasmine, Marigold, Lotus, Chamanthi, and more. We can set up a weekly or monthly supply contract tailored to your temple\'s schedule and needs.',
  },
  {
    q: 'What are your accepted payment terms?',
    a: 'For new clients, we typically request a 50% advance and 50% before dispatch. For established buyers, we offer credit terms on a case-by-case basis. Bank transfers (SWIFT/NEFT) and LC (Letter of Credit) are accepted for international orders.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Everything international buyers and domestic partners need to know before partnering with us.
        </p>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <p>Still have questions?</p>
          <a href="https://wa.me/919663337959" className="btn btn-primary">Ask on WhatsApp</a>
          <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

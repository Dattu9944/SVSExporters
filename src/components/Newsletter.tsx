import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In production, connect to Mailchimp / EmailJS / Brevo
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Stay Updated on Seasonal Offers</h2>
          <p className={styles.desc}>
            Get notified about new flower arrivals, seasonal promotions, bulk discount alerts, and export market updates — directly to your inbox.
          </p>
        </div>

        <div className={styles.formBlock}>
          {submitted ? (
            <div className={styles.successMsg}>
              <CheckCircle size={28} />
              <span>You're subscribed! We'll be in touch.</span>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.btn}>
                Subscribe <Send size={16} />
              </button>
            </form>
          )}
          <p className={styles.privacy}>No spam. Unsubscribe at any time. 🌸</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

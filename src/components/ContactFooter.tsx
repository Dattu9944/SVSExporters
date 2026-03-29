import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './ContactFooter.module.css';

const ContactFooter = () => {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const type = formData.get('type');
    const reqs = formData.get('requirements');

    const text = `*New Inquiry from SVS Exporters*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Inquiry Type:* ${type}%0A*Requirements:* ${reqs}`;
    window.open(`https://wa.me/919663337959?text=${text}`, '_blank');
  };

  return (
    <>
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2>Ready to partner with SVS Exporters?</h2>
          <p>Get premium flowers that meet global standards while preserving tradition.</p>
          <div className={styles.ctaBtns}>
            <a href="https://wa.me/919663337959" className="btn btn-secondary">Request Bulk Order</a>
            <a href="#contact" className="btn btn-outline-white">Contact Us</a>
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footerSection}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.contactInfo}>
            <div className={styles.footerLogoWrapper}>
              <img src="/images/logo.jpg" alt="SVS Exporters Logo" className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>SVS Exporters</span>
            </div>
            <p className={styles.footerDesc}>
              Delivering the fragrance of India to the world. Premium quality, farm-fresh flowers for global export and traditional worship.
            </p>
            
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.icon} />
                <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer">+91 9663337959 (WhatsApp)</a>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.icon} />
                <div>
                  <a href="mailto:sales@svsexporters.com">sales@svsexporters.com</a><br/>
                  <a href="mailto:support@svsexporters.com">support@svsexporters.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.icon} />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <h3 className={styles.formTitle}>Request a Quote</h3>
            <form className={styles.contactForm} onSubmit={handleWhatsAppSubmit}>
              <div className={styles.inputGroup}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" name="phone" placeholder="Phone / WhatsApp" required />
                <select name="type" required defaultValue="">
                  <option value="" disabled>Inquiry Type</option>
                  <option value="Export Bulk Order">Export Bulk Order</option>
                  <option value="Traditional / Temple Order">Traditional / Temple Order</option>
                  <option value="Custom Garlands / Decor">Custom Garlands / Decor</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <textarea name="requirements" rows={4} placeholder="Your Requirements (Flower types, quantities, destination...)" required></textarea>
              
              <div className={styles.formActions}>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Send Inquiry <Send size={16} />
                </button>
                <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.callBtn}`}>
                  <Phone size={16} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} SVS Exporters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;

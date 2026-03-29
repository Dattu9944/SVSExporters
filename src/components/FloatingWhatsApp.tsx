import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/919663337959" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
};

export default FloatingWhatsApp;

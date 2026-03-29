import { useEffect, useState } from 'react';
import { Phone, X, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a nav link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <img src="/images/logo.jpg" alt="SVS" className={styles.logoImg} />
          <span className={styles.logoText}>SVS Exporters</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#products" className={styles.navLink}>Products</a>
          <a href="#trust" className={styles.navLink}>Quality</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
          <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer" className={styles.callLink}>
            <Phone size={15} /> Chat on WhatsApp
          </a>
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>Request Quote</a>
        </div>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer" className={styles.mobileCall}>
            <Phone size={18} />
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <a href="#about" className={styles.drawerLink} onClick={handleNavClick}>About</a>
        <a href="#products" className={styles.drawerLink} onClick={handleNavClick}>Products</a>
        <a href="#trust" className={styles.drawerLink} onClick={handleNavClick}>Quality & Compliance</a>
        <a href="#testimonials" className={styles.drawerLink} onClick={handleNavClick}>Testimonials</a>
        <a href="#faq" className={styles.drawerLink} onClick={handleNavClick}>FAQ</a>
        <a href="#contact" className={`btn btn-primary ${styles.drawerCta}`} onClick={handleNavClick}>
          Request Quote
        </a>
        <a href="https://wa.me/919663337959" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.drawerCta}`}>
          <Phone size={16} /> Chat on WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import styles from './CountriesTicker.module.css';

const countries = [
  '🇺🇸 USA', '🇬🇧 United Kingdom', '🇩🇪 Germany', '🇳🇱 Netherlands', '🇫🇷 France',
  '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇰🇼 Kuwait', '🇧🇭 Bahrain',
  '🇸🇬 Singapore', '🇲🇾 Malaysia', '🇦🇺 Australia', '🇨🇦 Canada', '🇯🇵 Japan',
  '🇮🇳 NRI — USA', '🇮🇳 NRI — UK', '🇮🇳 NRI — Gulf',
];

const CountriesTicker: React.FC = () => {
  // Duplicate list for infinite seamless scroll
  const allCountries = [...countries, ...countries];

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerLabel}>🌍 Shipping To:</div>
      <div className={styles.tickerTrack}>
        <div className={styles.tickerContent}>
          {allCountries.map((c, i) => (
            <span key={i} className={styles.tickerItem}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesTicker;

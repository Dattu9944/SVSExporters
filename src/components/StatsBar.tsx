import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

const stats = [
  { value: 500, suffix: '+', label: 'Successful Shipments' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 200, suffix: '+', label: 'Happy B2B Clients' },
  { value: 50, suffix: '+', label: 'Flower Varieties' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem: React.FC<{ value: number; suffix: string; label: string; start: boolean }> = ({ value, suffix, label, start }) => {
  const count = useCountUp(value, 2000, start);
  return (
    <div className={styles.stat}>
      <span className={styles.number}>{count}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

const StatsBar: React.FC = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.statsBar} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((s, i) => (
          <StatItem key={i} value={s.value} suffix={s.suffix} label={s.label} start={started} />
        ))}
      </div>
    </div>
  );
};

export default StatsBar;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollMarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({
  items,
  speed = 30,
  direction = 'left',
  className = '',
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
    paused: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={marqueeRef}
    >
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate={isPaused ? 'paused' : 'animate'}
      >
        {items.map((item, index) => (
          <span key={index} className="mx-4 text-lg sm:text-xl inline-block">
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate={isPaused ? 'paused' : 'animate'}
      >
        {items.map((item, index) => (
          <span key={index} className="mx-4 text-lg sm:text-xl inline-block">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
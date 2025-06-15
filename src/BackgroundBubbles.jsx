// BackgroundBubbles.jsx
import React from 'react';
import { motion } from 'framer-motion';

const generateBubbles = (count, sizeClass, delayOffset = 0) =>
  [...Array(count)].map((_, i) => (
    <motion.div
      key={i}
      className={`absolute rounded-full ${sizeClass} bg-pink-400 opacity-20 pointer-events-none`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.2 + delayOffset,
      }}
    />
  ));

export default function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {generateBubbles(2, 'w-32 h-32')}
      {generateBubbles(20, 'w-4 h-4', 1)}
    </div>
  );
}

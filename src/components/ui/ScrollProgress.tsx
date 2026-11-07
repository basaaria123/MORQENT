'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolledPercent, setScrolledPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrolledPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        className="h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-electric to-gold-energy origin-left shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />
      {scrolledPercent > 2 && (
        <div className="fixed top-4 right-4 z-40 hidden lg:flex items-center space-x-2 text-[10px] font-mono text-cyan-400/70 bg-space-950/80 px-2.5 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>GRID SYNC</span>
          <span className="text-gold-energy font-bold">{scrolledPercent}%</span>
        </div>
      )}
    </div>
  );
}


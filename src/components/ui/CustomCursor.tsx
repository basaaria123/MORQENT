'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only activate for non-touch fine pointers
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsTouchDevice(false);
    } else {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover]');
        const isGold = target.closest('[data-cursor-gold]');
        setIsHovered(!!interactive);
        setIsPointer(!!isGold);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer halo */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full mix-blend-screen transition-colors duration-200 ${
          isPointer
            ? 'bg-gold-energy/20 border border-gold-energy/60 shadow-[0_0_20px_rgba(245,183,49,0.5)]'
            : isHovered
            ? 'bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.5)]'
            : 'bg-cyan-500/10 border border-cyan-400/30'
        }`}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.2,
        }}
      />

      {/* Inner pinpoint dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full ${
          isPointer ? 'bg-gold-bright' : 'bg-cyan-electric'
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 800,
          mass: 0.05,
        }}
      />
    </div>
  );
}


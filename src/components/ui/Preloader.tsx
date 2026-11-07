'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MorqentLogo from './MorqentLogo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(12);
  const [statusMessage, setStatusMessage] = useState('CALIBRATING DIGITAL TWIN KERNEL...');

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setLoading(false);
      return;
    }

    const messages = [
      { at: 25, text: 'INGESTING MULTI-SITE TELEMETRY STREAMS...' },
      { at: 55, text: 'COMPUTING STATE VECTORS & THERMAL DYNAMICS...' },
      { at: 80, text: 'SPAWNING 9-AGENT COORDINATION FABRIC...' },
      { at: 96, text: 'LP/MILP SOLVER VERIFIED · HUMAN GATE ARMED' },
      { at: 100, text: 'INTELLIGENCE READY.' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 8;
        const capped = Math.min(next, 100);

        const currentMsg = messages.find((m) => capped >= m.at);
        if (currentMsg) {
          setStatusMessage(currentMsg.text);
        }
        return capped;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-950 text-white select-none overflow-hidden"
        >
          {/* Subtle radial glow background */}
          <div className="absolute inset-0 bg-radial-space opacity-75" />
          <div className="absolute inset-0 bg-grid-tech opacity-30" />

          {/* Central Logo and Loading Orb */}
          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Pulsing circular orbit ring */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-glow/20 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-2 rounded-full border-t border-r border-gold-energy/60 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
              <div className="absolute inset-4 rounded-full border-b border-cyan-400/80 animate-pulse" />
              <div className="w-4 h-4 rounded-full bg-gold-energy shadow-gold-glow-md" />
            </div>

            <MorqentLogo size="xl" showTagline={false} />

            <div className="text-xs uppercase tracking-[0.3em] text-cyan-400/90 font-mono mt-3">
              Energy Intelligence Platform
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1.5 bg-panel-dark/80 rounded-full mt-8 overflow-hidden border border-cyan-500/20 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-cyan-electric to-gold-energy rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Telemetry Status text */}
            <div className="flex items-center justify-between w-64 mt-3 text-[11px] font-mono text-muted-blue">
              <span className="truncate max-w-[200px] text-left">{statusMessage}</span>
              <span className="text-gold-energy font-bold ml-2">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


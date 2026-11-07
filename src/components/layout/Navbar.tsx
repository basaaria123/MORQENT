'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import MorqentLogo from '@/components/ui/MorqentLogo';

const NAV_LINKS = [
  { name: 'The Problem', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'Intelligence Loop', href: '#loop' },
  { name: 'Digital Twin', href: '#twin-arch' },
  { name: '9 Agents', href: '#agents' },
  { name: 'Live Demo', href: '#battery-demo' },
  { name: 'Validation', href: '#validation' },
  { name: 'Architecture', href: '#tech-stack' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-space-950/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="group flex items-center gap-3" aria-label="MORQENT Home">
          <MorqentLogo size="md" showTagline={false} />
          <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>AUTONOMOUS ENERGY INTELLIGENCE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-300 px-2.5 py-1.5 rounded-lg transition-colors hover:bg-panel-royal/30"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA and Pilot Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#request-pilot"
            data-cursor-gold
            className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-space-950 bg-gradient-to-r from-amber-300 via-gold-energy to-amber-400 shadow-gold-glow-sm hover:shadow-gold-glow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Request a Pilot</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="#request-pilot"
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-space-950 bg-gold-energy"
          >
            Pilot
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-panel-royal/40 border border-cyan-500/30 text-cyan-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-space-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="#request-pilot"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl text-xs font-bold uppercase text-space-950 bg-gradient-to-r from-amber-300 to-gold-energy shadow-gold-glow-sm"
                >
                  Request a Pilot
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


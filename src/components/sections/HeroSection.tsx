'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Activity, Zap, Cpu, BarChart3, LineChart, Globe, Shield, RefreshCw } from 'lucide-react';
import dynamic from 'next/dynamic';
import MorqentLogo from '@/components/ui/MorqentLogo';
import Badge from '@/components/ui/Badge';
import { BRAND_TAGLINE, BRAND_PILLARS, BRAND_SIGNOFF } from '@/data/morqentData';

// Dynamically import Three.js 3D Globe to ensure smooth client-only rendering
const HeroGlobeScene = dynamic(() => import('@/components/3d/HeroGlobeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-72 h-72 rounded-full border border-cyan-500/20 animate-pulse bg-radial-cyan" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-space-950">
      {/* 3D WebGL Globe Canvas Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-75 sm:opacity-90">
        <HeroGlobeScene />
      </div>

      {/* Subtle radial space vignettes */}
      <div className="absolute inset-0 bg-radial-space pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-20" />

      {/* Floating Holographic UI Panels around the 3D globe (matching brand images) */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-10 hidden xl:block">
        {/* Card 1: Top Left - Predict Demand */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-28 left-8 w-64 p-3.5 rounded-2xl bg-panel-dark/75 border border-cyan-400/35 backdrop-blur-xl shadow-cyan-glow-sm pointer-events-auto"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-2 border-b border-cyan-500/20">
            <span className="flex items-center gap-1.5 font-bold">
              <LineChart className="w-3.5 h-3.5 text-cyan-400" />
              Predict Demand
            </span>
            <span className="text-[10px] text-muted-blue">Rolling 48h</span>
          </div>
          <div className="mt-2.5 flex items-end justify-between h-10 px-1">
            <div className="w-2.5 h-4 bg-cyan-500/40 rounded-sm" />
            <div className="w-2.5 h-6 bg-cyan-500/60 rounded-sm" />
            <div className="w-2.5 h-9 bg-cyan-400 rounded-sm animate-pulse" />
            <div className="w-2.5 h-7 bg-cyan-500/70 rounded-sm" />
            <div className="w-2.5 h-5 bg-cyan-500/50 rounded-sm" />
            <div className="w-2.5 h-8 bg-cyan-400 rounded-sm" />
          </div>
          <div className="text-[10px] text-muted-blue font-mono mt-1 text-center">
            Probabilistic Uncertainty Bands (p10-p90)
          </div>
        </motion.div>

        {/* Card 2: Bottom Left - Balance Supply */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="absolute bottom-32 left-10 w-64 p-3.5 rounded-2xl bg-panel-dark/75 border border-cyan-400/35 backdrop-blur-xl shadow-cyan-glow-sm pointer-events-auto"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-2 border-b border-cyan-500/20">
            <span className="flex items-center gap-1.5 font-bold">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              Balance Supply
            </span>
            <span className="text-[10px] text-emerald-400">Real-Time</span>
          </div>
          <div className="mt-2 flex items-center justify-around py-1 text-center">
            <div>
              <div className="text-[10px] text-muted-blue font-mono">SOLAR</div>
              <div className="text-xs font-bold text-amber-300 font-mono">1.2 MW</div>
            </div>
            <div className="text-cyan-400 font-mono">⇄</div>
            <div>
              <div className="text-[10px] text-muted-blue font-mono">BESS</div>
              <div className="text-xs font-bold text-cyan-400 font-mono">2.0 MWh</div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Top Right - Optimise Operations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute top-28 right-8 w-64 p-3.5 rounded-2xl bg-panel-dark/75 border border-cyan-400/35 backdrop-blur-xl shadow-cyan-glow-sm pointer-events-auto"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-2 border-b border-cyan-500/20">
            <span className="flex items-center gap-1.5 font-bold">
              <Cpu className="w-3.5 h-3.5 text-gold-energy" />
              Optimise Operations
            </span>
            <span className="text-[10px] text-gold-bright font-mono">MILP Solver</span>
          </div>
          <div className="mt-2 text-xs font-mono text-slate-200">
            <div className="flex justify-between py-0.5">
              <span className="text-muted-blue">Feasibility:</span>
              <span className="text-emerald-400 font-bold">Guaranteed</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-muted-blue">Peak Shaving:</span>
              <span className="text-cyan-300 font-bold">Active</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Bottom Right - Net-Zero Future */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-32 right-10 w-64 p-3.5 rounded-2xl bg-panel-dark/75 border border-gold-500/35 backdrop-blur-xl shadow-glass-gold pointer-events-auto"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-gold-bright pb-2 border-b border-gold-500/20">
            <span className="flex items-center gap-1.5 font-bold">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              Plan for Net-Zero
            </span>
            <span className="text-[10px] text-emerald-300">Verified</span>
          </div>
          <div className="mt-2 text-xs font-mono text-slate-200">
            <div className="text-[11px] text-muted-blue">Scope 2 Carbon Trajectory</div>
            <div className="text-sm font-bold text-white mt-0.5">Counterfactual Audited</div>
          </div>
        </motion.div>
      </div>

      {/* Central Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Brand Pillars Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-panel-dark/80 border border-cyan-500/30 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl shadow-cyan-glow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{BRAND_PILLARS.join(' · ')}</span>
          </div>
        </motion.div>

        {/* Big Wordmark & Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <MorqentLogo size="xl" showTagline={false} />
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-100 max-w-3xl leading-snug">
            Autonomous Intelligence for Energy Systems
          </h1>
        </motion.div>

        {/* Core Value Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-muted-blue max-w-2xl font-normal leading-relaxed"
        >
          {BRAND_TAGLINE}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#request-pilot"
            data-cursor-gold
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl text-sm font-bold tracking-wider uppercase text-space-950 bg-gradient-to-r from-amber-300 via-gold-energy to-amber-400 shadow-gold-glow-md hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Request a Pilot</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="#twin-arch"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold tracking-wider text-slate-200 bg-panel-royal/40 hover:bg-panel-royal/60 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl transition-all duration-300 hover:shadow-cyan-glow-sm"
          >
            <span>Explore Digital Twin</span>
            <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Bottom Feature Strip (Matching brand image footer: Advanced AI, Real-Time Simulation, Scalable Cloud, Enterprise-Grade Security, Global Impact) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-slate-800/80"
        >
          {[
            { icon: Cpu, label: 'Advanced AI & Analytics' },
            { icon: Activity, label: 'Real-Time Simulation' },
            { icon: Globe, label: 'Scalable Cloud Platform' },
            { icon: Shield, label: 'Enterprise-Grade Security' },
            { icon: Zap, label: 'Grid Harmony & Impact' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 p-2 rounded-xl bg-space-900/60 border border-slate-800/70 text-slate-300 text-xs font-mono"
            >
              <item.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none text-muted-blue"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1 opacity-70">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  );
}


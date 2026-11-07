'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SplitSquareVertical,
  TrendingDown,
  Shuffle,
  FlaskConicalOff,
  ShieldAlert,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { PROBLEMS, CENTRAL_PROBLEM_STATEMENT } from '@/data/morqentData';

export default function ProblemSection() {
  const iconMap: Record<string, React.ReactNode> = {
    SplitSquareVertical: <SplitSquareVertical className="w-6 h-6 text-cyan-400" />,
    TrendingDown: <TrendingDown className="w-6 h-6 text-amber-400" />,
    Shuffle: <Shuffle className="w-6 h-6 text-cyan-300" />,
    FlaskConicalOff: <FlaskConicalOff className="w-6 h-6 text-rose-400" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-gold-energy" />,
  };

  return (
    <section id="problem" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            The Distributed Energy Crisis
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The Changing Energy Landscape
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Distributed resources like solar, batteries, EV charging, and smart buildings are multiplying rapidly. Yet their value is severely eroded by five structural bottlenecks.
          </p>
        </div>

        {/* 5 Interconnected Problems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROBLEMS.map((problem, idx) => (
            <GlassCard
              key={problem.id}
              variant="royal"
              interactiveTilt
              className={idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-space-950/80 border border-cyan-500/25">
                  {iconMap[problem.iconName]}
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                  PROBLEM 0{problem.id}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-wide mb-1">
                {problem.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300/80 mb-3">
                {problem.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {problem.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs text-amber-300/90 font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Impact: {problem.consequence}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Central Problem Statement Callout Box */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-panel-deep/60 via-panel-dark/90 to-panel-deep/60 border border-gold-500/40 backdrop-blur-2xl shadow-glass-gold">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-gold-energy/40 flex items-center justify-center shrink-0 shadow-gold-glow-sm">
              <HelpCircle className="w-8 h-8 text-gold-energy" />
            </div>

            <div className="flex-1 text-center lg:text-left space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-bright">
                <span>The Central Problem Statement</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-energy" />
              </div>
              <p className="text-base sm:text-xl font-display font-medium text-white leading-relaxed">
                &ldquo;{CENTRAL_PROBLEM_STATEMENT}&rdquo;
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#solution"
                className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase font-bold text-space-950 bg-gold-energy hover:bg-gold-bright transition-all shadow-gold-glow-sm inline-flex items-center gap-2"
              >
                <span>View Solution</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


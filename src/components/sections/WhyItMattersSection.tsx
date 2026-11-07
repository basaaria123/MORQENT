'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, DollarSign, Leaf, Gauge, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { WHY_IT_MATTERS } from '@/data/morqentData';

export default function WhyItMattersSection() {
  const pillarIcons: Record<string, React.ReactNode> = {
    Technical: <Wrench className="w-5 h-5 text-cyan-400" />,
    Economic: <DollarSign className="w-5 h-5 text-gold-energy" />,
    Environmental: <Leaf className="w-5 h-5 text-emerald-400" />,
    Operational: <Gauge className="w-5 h-5 text-cyan-300" />,
  };

  const borderStyles: Record<string, 'cyan' | 'gold' | 'royal' | 'dark'> = {
    Technical: 'cyan',
    Economic: 'gold',
    Environmental: 'royal',
    Operational: 'royal',
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Systemic Value Proposition
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Why It Matters Across Every Dimension
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Energy intelligence must transcend simple dashboards. It must satisfy engineering physics, corporate balance sheets, decarbonisation targets, and operational reality simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_IT_MATTERS.map((item) => (
            <GlassCard
              key={item.pillar}
              variant={borderStyles[item.pillar]}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-space-950/80 border border-slate-700/60">
                    {pillarIcons[item.pillar]}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-blue font-bold">
                    {item.pillar}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {item.headline}
                </h3>

                <ul className="space-y-3 mb-6">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <div className="text-[10px] font-mono text-muted-blue uppercase">
                  {item.metricLabel}
                </div>
                <div className="text-xs font-mono font-bold text-cyan-300 mt-1">
                  {item.metricBadge}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


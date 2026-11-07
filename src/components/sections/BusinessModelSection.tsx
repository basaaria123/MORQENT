'use client';

import React from 'react';
import { CreditCard, Landmark, LineChart, Cpu, Calendar, AlertCircle, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { BUSINESS_MODEL_TIMELINE } from '@/data/morqentData';

export default function BusinessModelSection() {
  const streamIcons = [
    <CreditCard key="card" className="w-5 h-5 text-cyan-400" />,
    <Landmark key="land" className="w-5 h-5 text-cyan-300" />,
    <LineChart key="chart" className="w-5 h-5 text-gold-energy" />,
    <Cpu key="cpu" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Commercial Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Revenue Stream Sequence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Structured commercialization starting with high-certainty software subscriptions, evolving into regulated grid flexibility participation.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-gold-energy" />
            <span>Sequence of commercial availability — not a revenue forecast.</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_MODEL_TIMELINE.map((item, idx) => (
            <GlassCard
              key={item.stage}
              variant={idx === 0 ? 'cyan' : idx === 2 ? 'gold' : 'royal'}
              interactiveTilt
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-space-950/80 border border-slate-700">
                    {streamIcons[idx]}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-muted-blue">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1">
                  {item.stage}
                </div>
                <h3 className="text-base font-bold text-white mb-3">
                  {item.stream}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.model}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-mono text-muted-blue uppercase block mb-1">
                  Readiness Horizon:
                </span>
                <span className="text-xs font-mono text-gold-bright font-bold">
                  {item.status}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


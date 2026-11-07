'use client';

import React from 'react';
import { LineChart, Cpu, Layers, Network, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { SOLUTION_CAPABILITIES } from '@/data/morqentData';

export default function SolutionSection() {
  const iconMap: Record<string, React.ReactNode> = {
    LineChart: <LineChart className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-gold-energy" />,
    Layers: <Layers className="w-5 h-5 text-cyan-300" />,
    Network: <Network className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="solution" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            The Five Pillars of Resolution
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The MORQENT Solution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Each capability is built to answer an essential operational question that conventional building management and energy dashboards fail to address.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTION_CAPABILITIES.map((cap, idx) => (
            <GlassCard
              key={cap.capability}
              variant={idx === 1 ? 'gold' : 'royal'}
              interactiveTilt
              className={idx === 3 ? 'lg:col-span-1' : idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-space-950/80 border border-slate-700">
                  {iconMap[cap.icon]}
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  {cap.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {cap.capability}
              </h3>

              {/* Question Answered Box */}
              <div className="p-3.5 rounded-xl bg-space-950/70 border border-cyan-500/20 mb-4">
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-gold-energy shrink-0 mt-0.5" />
                  <p className="text-xs font-mono text-cyan-100 italic">
                    &ldquo;{cap.questionAnswered}&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <span className="font-mono text-cyan-400 font-bold block mb-1">
                    Mechanism:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{cap.mechanism}</p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="font-mono text-muted-blue font-bold block mb-0.5">
                    Core Deliverable:
                  </span>
                  <p className="text-slate-400 font-mono text-[11px]">{cap.deliverable}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


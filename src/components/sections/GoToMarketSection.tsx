'use client';

import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Maximize2, Handshake, Globe } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { GTM_STAGES } from '@/data/morqentData';

export default function GoToMarketSection() {
  const gtmIcons = [
    <Compass key="1" className="w-5 h-5 text-cyan-400" />,
    <ShieldCheck key="2" className="w-5 h-5 text-gold-energy" />,
    <Maximize2 key="3" className="w-5 h-5 text-cyan-300" />,
    <Handshake key="4" className="w-5 h-5 text-emerald-400" />,
    <Globe key="5" className="w-5 h-5 text-gold-bright" />,
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Deployment Strategy
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Go-to-Market Execution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            A disciplined five-step progression from single-campus shadow validation to federated distributed energy infrastructure.
          </p>
        </div>

        {/* 5-Step Connected Progression */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {GTM_STAGES.map((stg, idx) => (
            <div
              key={stg.step}
              className="relative p-5 rounded-2xl bg-panel-dark/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-space-950 border border-slate-700">
                    {gtmIcons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {stg.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {stg.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {stg.focus}
                </p>
              </div>

              {idx < GTM_STAGES.length - 1 && (
                <div className="hidden md:flex justify-end text-cyan-500/50 pt-2 border-t border-slate-800/60">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


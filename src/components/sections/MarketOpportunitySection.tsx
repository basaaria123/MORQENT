'use client';

import React from 'react';
import { Layers, Globe, Shield, Compass, AlertCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { MARKET_OPPORTUNITY } from '@/data/morqentData';

export default function MarketOpportunitySection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Market Horizon
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Market Opportunity Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Structured nested framework scoping global DER management into high-readiness campus and industrial microgrids.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quantitative market sizing: Values to be sourced from primary diligence</span>
          </div>
        </div>

        {/* Nested Concentric Circles Framework */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-panel-dark/80 to-space-950/90 border border-cyan-500/20 backdrop-blur-xl shadow-glass-panel">
          {/* Outer Ring: TAM */}
          <div className="relative p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-panel-royal/20 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {MARKET_OPPORTUNITY.tam.label}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-slate-900/90 border border-slate-700 text-slate-400">
                {MARKET_OPPORTUNITY.tam.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              {MARKET_OPPORTUNITY.tam.desc}
            </p>

            {/* Middle Ring: SAM */}
            <div className="relative p-6 sm:p-8 rounded-2xl border border-cyan-400/40 bg-panel-deep/40 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {MARKET_OPPORTUNITY.sam.label}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-slate-900/90 border border-slate-700 text-slate-400">
                  {MARKET_OPPORTUNITY.sam.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                {MARKET_OPPORTUNITY.sam.desc}
              </p>

              {/* Inner Core: SOM */}
              <div className="relative p-6 rounded-xl border border-gold-energy/60 bg-space-950/90 shadow-glass-gold">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-energy font-bold flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    {MARKET_OPPORTUNITY.som.label}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-amber-950/80 border border-gold-energy/40 text-gold-bright">
                    {MARKET_OPPORTUNITY.som.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  {MARKET_OPPORTUNITY.som.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


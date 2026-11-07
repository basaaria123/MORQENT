'use client';

import React from 'react';
import { GraduationCap, Factory, Building, CheckCircle2, Shield, Network } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { MVP_FACILITIES, MVP_CAPABILITIES } from '@/data/morqentData';

export default function MVPSection() {
  const facilityIcons = [
    <GraduationCap key="grad" className="w-6 h-6 text-cyan-400" />,
    <Factory key="fact" className="w-6 h-6 text-gold-energy" />,
    <Building key="bld" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section id="mvp" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Initial Product Deployment
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The MVP: MORQENT Energy Intelligence Twin
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            A simulation-based, multi-facility digital twin modeling three representative customer facilities sharing a distribution feeder, benchmarked under identical conditions.
          </p>
        </div>

        {/* 3 Representative Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MVP_FACILITIES.map((facility, idx) => (
            <GlassCard
              key={facility.name}
              variant={idx === 1 ? 'gold' : 'royal'}
              interactiveTilt
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-space-950/80 border border-slate-700">
                    {facilityIcons[idx]}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    FACILITY 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {facility.name}
                </h3>
                <p className="text-xs text-muted-blue mb-4">
                  {facility.profile}
                </p>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono uppercase text-cyan-400 font-bold block">
                    Modeled Assets:
                  </span>
                  {facility.assets.map((asset, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{asset}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-mono text-amber-300/90 uppercase block mb-0.5">
                  Operational Challenge:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {facility.challenges}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* 10 MVP Capabilities Grid */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-panel-dark/80 to-space-900/90 border border-cyan-500/25 backdrop-blur-2xl shadow-glass-panel">
          <div className="flex items-center gap-3 mb-8">
            <Network className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Ten Verified MVP Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MVP_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-space-950/60 border border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-slate-200 hover:border-cyan-500/40 transition-colors"
              >
                <span className="font-mono text-cyan-400 font-bold shrink-0 mt-0.5">
                  [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                </span>
                <span className="leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


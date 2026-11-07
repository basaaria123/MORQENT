'use client';

import React from 'react';
import { Users, Target, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { TARGET_CUSTOMERS, STAKEHOLDERS } from '@/data/morqentData';

export default function TargetCustomersSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Commercial Alignment
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Target Customers & Stakeholders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Prioritising high-tariff, multi-asset owners with internal ESG mandates as initial beachheads, progressing to utility and aggregation networks.
          </p>
        </div>

        {/* Customer Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TARGET_CUSTOMERS.map((cust, idx) => (
            <GlassCard
              key={cust.segment}
              variant={cust.tier === 'Beachhead' ? 'gold' : 'royal'}
              interactiveTilt
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                      cust.tier === 'Beachhead'
                        ? 'bg-amber-950/80 text-gold-bright border-gold-500/40 shadow-gold-glow-sm'
                        : cust.tier === 'Early Adopter'
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                        : 'bg-slate-900/80 text-slate-400 border-slate-700'
                    }`}
                  >
                    {cust.tier}
                  </span>
                  <Target className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cust.segment}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cust.rationale}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-mono text-cyan-400 uppercase block mb-1">
                  Value Delivered:
                </span>
                <p className="text-xs font-mono text-slate-200">
                  {cust.valueProp}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stakeholder Alignment Matrix */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-panel-dark/80 to-space-900/90 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Stakeholder Value Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STAKEHOLDERS.map((stk, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-space-950/60 border border-slate-800/80 text-xs flex flex-col justify-between"
              >
                <div className="font-bold text-slate-100 flex items-center gap-2 mb-1.5">
                  <Briefcase className="w-4 h-4 text-gold-energy shrink-0" />
                  <span>{stk.role}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{stk.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


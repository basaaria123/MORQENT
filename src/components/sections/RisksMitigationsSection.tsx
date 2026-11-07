'use client';

import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { RISKS_AND_MITIGATIONS } from '@/data/morqentData';

export default function RisksMitigationsSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Transparent Governance
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Key Risks & Technical Mitigations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Honest engineering acknowledges constraints upfront. Here is how MORQENT addresses real-world operational failure modes.
          </p>
        </div>

        {/* Risks & Mitigations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RISKS_AND_MITIGATIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-panel-dark/70 border border-slate-800 hover:border-cyan-500/30 transition-all shadow-glass-panel"
            >
              {/* Risk Statement */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-0.5">
                    Operational Risk 0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.risk}
                  </h3>
                </div>
              </div>

              {/* Mitigation Statement */}
              <div className="flex items-start gap-3 pl-2 pt-3 border-t border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-0.5">
                    Engineered Mitigation
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


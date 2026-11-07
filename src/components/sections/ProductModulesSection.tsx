'use client';

import React from 'react';
import { Layers, LineChart, FlaskConical, Cpu, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { PRODUCT_MODULES } from '@/data/morqentData';

export default function ProductModulesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    'twin-builder': <Layers className="w-5 h-5 text-cyan-400" />,
    'forecast-engine': <LineChart className="w-5 h-5 text-cyan-300" />,
    'scenario-lab': <FlaskConical className="w-5 h-5 text-amber-400" />,
    optimiser: <Cpu className="w-5 h-5 text-gold-energy" />,
    'approval-console': <ShieldCheck className="w-5 h-5 text-gold-bright" />,
    'verification-ledger': <FileCheck className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="modules" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Six Dedicated Product Modules
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Modular, interoperable engines spanning the entire lifecycle from physical asset onboarding to verifiable financial ledger reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_MODULES.map((mod, idx) => (
            <GlassCard
              key={mod.id}
              variant={mod.id === 'optimiser' || mod.id === 'approval-console' ? 'gold' : 'royal'}
              interactiveTilt
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-space-950/80 border border-slate-700">
                    {iconMap[mod.id]}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {mod.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {mod.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {mod.role}
                </p>

                <div className="space-y-2 mb-6">
                  {mod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-mono text-muted-blue uppercase block">
                  Output Deliverable:
                </span>
                <span className="text-xs font-mono font-bold text-slate-200">
                  {mod.output}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


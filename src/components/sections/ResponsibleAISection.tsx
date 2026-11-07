'use client';

import React from 'react';
import { UserCheck, ShieldAlert, FileText, Lock, Gauge, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { RESPONSIBLE_AI_PILLARS } from '@/data/morqentData';

export default function ResponsibleAISection() {
  const pillarIcons = [
    <UserCheck key="1" className="w-6 h-6 text-gold-energy" />,
    <ShieldAlert key="2" className="w-6 h-6 text-rose-400" />,
    <FileText key="3" className="w-6 h-6 text-cyan-400" />,
    <Lock key="4" className="w-6 h-6 text-cyan-300" />,
    <Gauge key="5" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Safety & Trust Kernel
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Responsible AI & Industrial Security
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Energy infrastructure demands zero hallucinations and non-negotiable physical guarantees. Autonomy is earned through transparency and deterministic safety checks.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_AI_PILLARS.map((pil, idx) => (
            <GlassCard
              key={pil.title}
              variant={idx === 0 ? 'gold' : 'royal'}
              interactiveTilt
              className={idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-space-950/80 border border-slate-700">
                  {pillarIcons[idx]}
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  PILLAR 0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {pil.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400/90 mb-3">
                {pil.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {pil.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


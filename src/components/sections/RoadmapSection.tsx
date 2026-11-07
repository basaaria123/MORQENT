'use client';

import React from 'react';
import { Calendar, CheckCircle2, Milestone, Clock, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { ROADMAP_PHASES, NINETY_DAY_PLAN } from '@/data/morqentData';

export default function RoadmapSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Technical Milestones
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Roadmap & 90-Day Execution Plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            From the initial four-week simulation prototype to real-world supervised pilot deployment and multi-site orchestration.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ROADMAP_PHASES.map((phase, idx) => (
            <GlassCard
              key={phase.phase}
              variant={idx === 0 ? 'cyan' : idx === 1 ? 'gold' : 'royal'}
              interactiveTilt
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {phase.phase}
                  </span>
                  <span className="text-[10px] font-mono text-muted-blue px-2 py-0.5 rounded bg-space-950/80 border border-slate-700">
                    {phase.timeframe}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  {phase.title}
                </h3>

                <ul className="space-y-2.5 mb-6">
                  {phase.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800/80 mt-auto text-[11px] font-mono text-muted-blue">
                Stage {idx + 1} of 4
              </div>
            </GlassCard>
          ))}
        </div>

        {/* First 90-Day Plan Detail */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-panel-dark/90 to-space-900/90 border border-gold-500/30 backdrop-blur-xl shadow-glass-gold">
          <div className="flex items-center gap-3 mb-6">
            <Milestone className="w-5 h-5 text-gold-energy" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              The Immediate 90-Day Sprint
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NINETY_DAY_PLAN.map((sprint, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-space-950/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-gold-energy">
                      {sprint.days}
                    </span>
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-3">
                    {sprint.objective}
                  </h4>
                  <ul className="space-y-2">
                    {sprint.keyTasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-mono mt-0.5">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


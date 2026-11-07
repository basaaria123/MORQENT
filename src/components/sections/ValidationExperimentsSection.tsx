'use client';

import React from 'react';
import { Check, X, Shield, Scale, Beaker, FileText, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import {
  EXPERIMENTS_COMPARISON,
  EXPERIMENT_HYPOTHESIS,
  ACCEPTANCE_CRITERIA,
} from '@/data/morqentData';

export default function ValidationExperimentsSection() {
  return (
    <section id="validation" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-energy/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Scientific Rigour & Benchmarking
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Validation & Experiments A–D
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            We hold ourselves to strict scientific accountability. MORQENT evaluates four comparative control regimes under identical synthetic conditions.
          </p>
        </div>

        {/* Honest Hypothesis Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-panel-deep/80 via-panel-dark/95 to-panel-deep/80 border border-gold-500/50 backdrop-blur-xl shadow-glass-gold">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-gold-energy/40 shrink-0">
              <Scale className="w-7 h-7 text-gold-energy" />
            </div>
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-bright font-bold flex items-center justify-center md:justify-start gap-1.5">
                <Beaker className="w-3.5 h-3.5" />
                The Honest Hypothesis
              </span>
              <p className="text-base sm:text-lg md:text-xl font-display font-semibold text-white leading-relaxed">
                &ldquo;{EXPERIMENT_HYPOTHESIS}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mb-16 overflow-x-auto rounded-3xl border border-cyan-500/20 bg-space-950/80 backdrop-blur-xl shadow-glass-panel">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800 bg-panel-dark/70 text-[11px] font-mono uppercase text-slate-300">
                <th className="py-4 px-5">Experiment Regime</th>
                <th className="py-4 px-3 text-center">Forecast Informed</th>
                <th className="py-4 px-3 text-center">Math Optimisation</th>
                <th className="py-4 px-3 text-center">Cross-Facility Coord</th>
                <th className="py-4 px-3 text-center">Agent Orchestration</th>
                <th className="py-4 px-3 text-center">Independent Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {EXPERIMENTS_COMPARISON.map((exp) => (
                <tr
                  key={exp.key}
                  className={`transition-colors ${
                    exp.key === 'D'
                      ? 'bg-gradient-to-r from-panel-royal/40 to-panel-deep/40 border-l-4 border-l-gold-energy'
                      : 'hover:bg-panel-dark/40'
                  }`}
                >
                  <td className="py-4 px-5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                          exp.key === 'D'
                            ? 'bg-gold-energy text-space-950 shadow-gold-glow-sm'
                            : 'bg-panel-royal text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {exp.key}
                      </span>
                      <span>{exp.name}</span>
                    </div>
                    <div className="text-[11px] text-muted-blue mt-1">
                      {exp.description}
                    </div>
                  </td>

                  <td className="py-4 px-3 text-center">
                    {exp.forecastInformed ? (
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>

                  <td className="py-4 px-3 text-center">
                    {exp.mathematicalOptimisation ? (
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>

                  <td className="py-4 px-3 text-center">
                    {exp.crossFacilityCoordination ? (
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>

                  <td className="py-4 px-3 text-center">
                    {exp.agentOrchestration ? (
                      <Check className="w-4 h-4 text-gold-energy mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>

                  <td className="py-4 px-3 text-center">
                    {exp.independentVerification ? (
                      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Five Acceptance Criteria */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-panel-dark/80 to-space-950/90 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Five Non-Negotiable Acceptance Criteria
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCEPTANCE_CRITERIA.map((criterion, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-space-950/60 border border-slate-800 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-cyan-300 font-bold font-mono mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{criterion.title}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{criterion.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


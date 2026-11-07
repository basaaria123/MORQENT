'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  LineChart,
  Activity,
  Cpu,
  Layers,
  Network,
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import { NINE_AGENTS, AGENT_DESIGN_RULE } from '@/data/morqentData';

export default function NineAgentsSection() {
  const [activeGroup, setActiveGroup] = useState<'ALL' | 'SENSE & MODEL' | 'DECIDE' | 'PROVE'>('ALL');
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const filteredAgents =
    activeGroup === 'ALL'
      ? NINE_AGENTS
      : NINE_AGENTS.filter((a) => a.group === activeGroup);

  const agentIcons: Record<string, React.ReactNode> = {
    'agent-1': <Brain className="w-5 h-5 text-cyan-400" />,
    'agent-2': <LineChart className="w-5 h-5 text-cyan-300" />,
    'agent-3': <Activity className="w-5 h-5 text-cyan-400" />,
    'agent-4': <Cpu className="w-5 h-5 text-gold-energy" />,
    'agent-5': <Layers className="w-5 h-5 text-amber-400" />,
    'agent-6': <Network className="w-5 h-5 text-gold-bright" />,
    'agent-7': <ShieldAlert className="w-5 h-5 text-rose-400" />,
    'agent-8': <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    'agent-9': <RotateCcw className="w-5 h-5 text-cyan-300" />,
  };

  return (
    <section id="agents" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="cyan" className="mb-4">
            Specialised Multi-Agent System
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Nine Specialised AI Agents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Structured into three disciplined cohorts with centralized orchestration: Sense & Model, Decide, and Prove.
          </p>
        </div>

        {/* Foundational Design Rule Callout Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-panel-dark/95 via-panel-deep/80 to-panel-dark/95 border border-gold-500/40 backdrop-blur-xl shadow-glass-gold">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-gold-energy/40 shrink-0">
              <Sparkles className="w-7 h-7 text-gold-energy" />
            </div>
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-energy font-bold flex items-center justify-center md:justify-start gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Foundational Agent Design Rule
              </span>
              <p className="text-sm sm:text-base md:text-lg font-display font-medium text-white leading-relaxed">
                &ldquo;{AGENT_DESIGN_RULE}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {(['ALL', 'SENSE & MODEL', 'DECIDE', 'PROVE'] as const).map((grp) => (
            <button
              key={grp}
              onClick={() => setActiveGroup(grp)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                activeGroup === grp
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow-sm'
                  : 'bg-panel-dark/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {grp}
            </button>
          ))}
        </div>

        {/* 9 Agents Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <GlassCard
              key={agent.id}
              variant={
                agent.group === 'DECIDE'
                  ? 'gold'
                  : agent.id === 'agent-7'
                  ? 'dark'
                  : 'royal'
              }
              interactiveTilt
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-space-950/80 border border-slate-700">
                    {agentIcons[agent.id]}
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                      agent.group === 'DECIDE'
                        ? 'bg-amber-950/80 text-gold-energy border-gold-500/40'
                        : agent.group === 'PROVE'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                    }`}
                  >
                    {agent.group}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {agent.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {agent.role}
                </p>

                {/* Agent I/O */}
                <div className="space-y-2.5 text-[11px] font-mono mb-4">
                  <div className="p-2 rounded-lg bg-space-950/70 border border-slate-800">
                    <span className="text-muted-blue block font-bold mb-0.5">Primary Inputs:</span>
                    <span className="text-slate-300">{agent.inputs.join(' · ')}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-space-950/70 border border-slate-800">
                    <span className="text-cyan-400 block font-bold mb-0.5">Outputs:</span>
                    <span className="text-slate-200">{agent.outputs.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Governance Guarantee */}
              <div className="pt-3 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-mono text-muted-blue uppercase block mb-0.5">
                  Governance Boundary:
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{agent.governance}</span>
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


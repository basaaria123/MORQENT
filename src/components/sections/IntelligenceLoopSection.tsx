'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  RefreshCw,
  TrendingUp,
  Sliders,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle,
  Brain,
  Play,
  Pause,
  Clock,
  FileCode,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { INTELLIGENCE_LOOP } from '@/data/morqentData';

export default function IntelligenceLoopSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(5); // default to step 6 (Authorise - gold gate)
  const [autoCycling, setAutoCycling] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoCycling) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % INTELLIGENCE_LOOP.length);
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [autoCycling]);

  const activeStep = INTELLIGENCE_LOOP[activeStepIndex];

  const stepIcons = [
    Eye, // 1 Observe
    RefreshCw, // 2 Update
    TrendingUp, // 3 Predict
    Sliders, // 4 Simulate
    Cpu, // 5 Optimise
    ShieldCheck, // 6 Authorise (Human Gate)
    Zap, // 7 Act
    CheckCircle, // 8 Verify
    Brain, // 9 Learn
  ];

  return (
    <section id="loop" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      {/* Radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Autonomous Closed Loop
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The MORQENT Intelligence Loop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Nine continuous stages connecting raw sensor observations to mathematical dispatch and independent verification. Step 6 guarantees human supervisor authority.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setAutoCycling(!autoCycling)}
              className="px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 bg-panel-royal/50 hover:bg-panel-royal border border-cyan-500/30 text-cyan-300"
            >
              {autoCycling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoCycling ? 'Pause Workflow Loop' : 'Cycle 9 Steps Automatically'}</span>
            </button>
          </div>
        </div>

        {/* Orbit Grid & Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Orbital Circle Diagram (7 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-6 sm:p-12">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] flex items-center justify-center">
              {/* Background Orbit Track */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
              <div className="absolute inset-8 rounded-full border border-dashed border-cyan-400/25 animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-16 rounded-full border border-slate-800" />

              {/* Central Core */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-panel-deep/90 border border-cyan-400/40 backdrop-blur-xl flex flex-col items-center justify-center text-center p-2 shadow-cyan-glow-md">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  CLOSED LOOP
                </span>
                <span className="text-sm font-display font-bold text-white mt-0.5">
                  Step 0{activeStep.step}
                </span>
                <span className="text-[10px] font-mono text-gold-energy font-semibold">
                  {activeStep.isGate ? 'HUMAN GATE' : activeStep.category}
                </span>
              </div>

              {/* 9 Nodes distributed in circle */}
              {INTELLIGENCE_LOOP.map((step, idx) => {
                const angle = (idx / 9) * 2 * Math.PI - Math.PI / 2;
                const radius = 170; // px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = activeStepIndex === idx;
                const IconComponent = stepIcons[idx];

                return (
                  <motion.button
                    key={step.step}
                    onClick={() => {
                      setAutoCycling(false);
                      setActiveStepIndex(idx);
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                      isActive
                        ? step.isGate
                          ? 'bg-gradient-to-br from-amber-400 to-gold-energy text-space-950 border-2 border-white shadow-gold-glow-md scale-110'
                          : 'bg-cyan-400 text-space-950 border-2 border-white shadow-cyan-glow-md scale-110'
                        : step.isGate
                        ? 'bg-panel-dark/90 text-gold-energy border-2 border-gold-energy/60 hover:border-gold-energy'
                        : 'bg-panel-dark/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400'
                    }`}
                    title={`${step.step}. ${step.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="sr-only">{step.name}</span>

                    {/* Step number badge */}
                    <span
                      className={`absolute -top-2 -right-2 w-4 h-4 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${
                        step.isGate
                          ? 'bg-gold-energy text-space-950'
                          : 'bg-cyan-500 text-space-950'
                      }`}
                    >
                      {step.step}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Inspector Card (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl shadow-glass-panel relative ${
                  activeStep.isGate
                    ? 'bg-gradient-to-b from-panel-deep/90 via-panel-dark/95 to-space-950/95 border-gold-energy/70 shadow-glass-gold'
                    : 'bg-gradient-to-b from-panel-dark/90 to-space-950/95 border-cyan-500/30'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      activeStep.isGate
                        ? 'bg-gold-500/20 text-gold-bright border border-gold-energy/50'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    }`}
                  >
                    STEP 0{activeStep.step} · {activeStep.category}
                  </span>

                  {activeStep.isGate && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-gold-energy font-bold">
                      <span className="w-2 h-2 rounded-full bg-gold-energy animate-ping" />
                      HUMAN APPROVAL GATE
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  {activeStep.name}
                </h3>
                <p
                  className={`text-xs font-mono mt-1 ${
                    activeStep.isGate ? 'text-gold-energy' : 'text-cyan-400'
                  }`}
                >
                  {activeStep.tagline}
                </p>

                <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Technical Meta & Artifacts */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FileCode className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-muted-blue font-bold block text-[10px] uppercase">
                        Technical Artifact:
                      </span>
                      <span className="font-mono text-white text-[11px]">
                        {activeStep.technicalArtifact}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-gold-energy shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-muted-blue font-bold block text-[10px] uppercase">
                        Execution Frequency:
                      </span>
                      <span className="font-mono text-white text-[11px]">
                        {activeStep.cycleTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step navigation tabs */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setAutoCycling(false);
                      setActiveStepIndex((prev) => (prev === 0 ? 8 : prev - 1));
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => {
                      setAutoCycling(false);
                      setActiveStepIndex((prev) => (prev === 8 ? 0 : prev + 1));
                    }}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-200 font-bold transition-colors"
                  >
                    Next Step →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


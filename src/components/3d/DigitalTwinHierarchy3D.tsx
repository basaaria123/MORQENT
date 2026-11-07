'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Cpu, Building2, Network, ShieldCheck, ChevronRight, Activity } from 'lucide-react';
import { DIGITAL_TWIN_HIERARCHY } from '@/data/morqentData';

export default function DigitalTwinHierarchy3D() {
  const [exploded, setExploded] = useState(false);
  const [activeLayerIndex, setActiveLayerIndex] = useState(1); // default Facility Twin

  const activeLayer = DIGITAL_TWIN_HIERARCHY[activeLayerIndex];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Interactive 3D Isometric Stack Column */}
      <div className="lg:col-span-7 relative flex flex-col items-center justify-center p-6 md:p-12 rounded-3xl bg-gradient-to-b from-panel-dark/80 to-space-950/90 border border-cyan-500/20 backdrop-blur-2xl shadow-glass-panel overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-energy/10 rounded-full blur-3xl pointer-events-none" />

        {/* View Controls header */}
        <div className="w-full flex items-center justify-between mb-8 z-10">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-muted-blue">
              Multi-Layer Twin Model
            </span>
          </div>

          {/* Explode Mode Toggle */}
          <button
            onClick={() => setExploded(!exploded)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
              exploded
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow-sm'
                : 'bg-panel-royal/40 border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${exploded ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'}`} />
            <span>{exploded ? 'Collapsed View' : 'Explode Stack (3D)'}</span>
          </button>
        </div>

        {/* 3D Isometric Stack Canvas */}
        <div className="relative w-full max-w-md h-[360px] md:h-[420px] flex items-center justify-center perspective-[1200px]">
          {/* Vertical Bus line connecting all 3 layers */}
          <div className="absolute top-12 bottom-12 w-1 bg-gradient-to-b from-cyan-400/40 via-gold-energy/40 to-cyan-400/40 pointer-events-none dashed-line" />

          {/* Layers:
              Layer 2: Network Twin (Top)
              Layer 1: Facility Twin (Middle)
              Layer 0: Asset Twin (Bottom)
          */}
          <div className="relative w-full flex flex-col items-center justify-center space-y-0">
            {/* Top: Network Twin (Level 3) */}
            <motion.div
              onClick={() => setActiveLayerIndex(2)}
              animate={{
                y: exploded ? -100 : -35,
                rotateX: 52,
                rotateZ: -25,
                scale: activeLayerIndex === 2 ? 1.05 : 1,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`w-72 md:w-80 h-32 rounded-2xl cursor-pointer p-4 border transition-colors shadow-2xl relative select-none ${
                activeLayerIndex === 2
                  ? 'bg-gradient-to-br from-panel-deep/90 to-panel-royal/90 border-cyan-300 shadow-[0_20px_50px_rgba(34,211,238,0.4)]'
                  : 'bg-panel-dark/70 border-cyan-500/30 hover:border-cyan-400/60'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-bold">LEVEL 3</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  NETWORK TWIN
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Network className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-sm font-bold text-white">Grid Feeder & Substation</div>
                  <div className="text-[11px] text-muted-blue">Shared headroom & inter-facility balancing</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[10px] font-mono text-cyan-400/80">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>3 SITES LINKED</span>
              </div>
            </motion.div>

            {/* Middle: Facility Twin (Level 2) */}
            <motion.div
              onClick={() => setActiveLayerIndex(1)}
              animate={{
                y: exploded ? 0 : 0,
                rotateX: 52,
                rotateZ: -25,
                scale: activeLayerIndex === 1 ? 1.05 : 1,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`w-72 md:w-80 h-32 rounded-2xl cursor-pointer p-4 border transition-colors shadow-2xl relative select-none ${
                activeLayerIndex === 1
                  ? 'bg-gradient-to-br from-panel-deep/95 to-panel-royal/95 border-gold-energy shadow-[0_20px_50px_rgba(245,183,49,0.35)]'
                  : 'bg-panel-dark/70 border-cyan-500/30 hover:border-gold-energy/60'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-gold-energy font-bold">LEVEL 2</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/80 text-gold-energy border border-gold-energy/40">
                  FACILITY TWIN
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-gold-energy" />
                <div>
                  <div className="text-sm font-bold text-white">Behind-the-Meter Facility</div>
                  <div className="text-[11px] text-muted-blue">PCC Metering, HVAC & EV fleet aggregate</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[10px] font-mono text-gold-energy/80">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>REAL-TIME PCC</span>
              </div>
            </motion.div>

            {/* Bottom: Asset Twin (Level 1) */}
            <motion.div
              onClick={() => setActiveLayerIndex(0)}
              animate={{
                y: exploded ? 100 : 35,
                rotateX: 52,
                rotateZ: -25,
                scale: activeLayerIndex === 0 ? 1.05 : 1,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`w-72 md:w-80 h-32 rounded-2xl cursor-pointer p-4 border transition-colors shadow-2xl relative select-none ${
                activeLayerIndex === 0
                  ? 'bg-gradient-to-br from-panel-deep/90 to-panel-royal/90 border-cyan-300 shadow-[0_20px_50px_rgba(34,211,238,0.4)]'
                  : 'bg-panel-dark/70 border-cyan-500/30 hover:border-cyan-400/60'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-bold">LEVEL 1</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  ASSET TWIN
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-sm font-bold text-white">Physical DER Components</div>
                  <div className="text-[11px] text-muted-blue">Li-ion battery SoC/SoH, PV inverters & chillers</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[10px] font-mono text-cyan-400/80">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>PHYSICS ODEs</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs font-mono text-muted-blue/70">
          Click any layer or toggle exploded view to examine fidelity
        </div>
      </div>

      {/* Inspector Details Column */}
      <div className="lg:col-span-5 flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold-energy animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-gold-energy">
            Active Layer Telemetry
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl md:text-3xl font-display font-extrabold text-white">
              {activeLayer.name}
            </span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              [{activeLayer.level}]
            </span>
          </div>
          <p className="text-sm text-muted-blue leading-relaxed">
            {activeLayer.description}
          </p>
        </div>

        {/* Subcomponents List */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Modelled Physical Subcomponents:
          </div>
          <div className="space-y-2.5">
            {activeLayer.subcomponents.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-panel-dark/60 border border-cyan-500/20 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <div className="mt-0.5 text-cyan-400">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layer switching pills */}
        <div className="pt-2 flex items-center gap-2">
          {DIGITAL_TWIN_HIERARCHY.map((layer, idx) => (
            <button
              key={layer.level}
              onClick={() => setActiveLayerIndex(idx)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono transition-all text-center border ${
                activeLayerIndex === idx
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow-sm'
                  : 'bg-panel-dark/40 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {layer.level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


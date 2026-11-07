'use client';

import React from 'react';
import { Layers, Server, Cpu, Database, Cable, Terminal } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { TECH_STACK_LAYERS } from '@/data/morqentData';

export default function TechStackSection() {
  const layerIcons = [
    <Layers key="5" className="w-5 h-5 text-cyan-400" />,
    <Server key="4" className="w-5 h-5 text-cyan-300" />,
    <Cpu key="3" className="w-5 h-5 text-gold-energy" />,
    <Database key="2" className="w-5 h-5 text-amber-300" />,
    <Cable key="1" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="tech-stack" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Full-Stack Engineering
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Layered Technology Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            A battle-tested industrial software stack linking physical edge registers with mathematical optimization and immersive digital twins.
          </p>
        </div>

        {/* 5-Layer Stack Graphic */}
        <div className="max-w-4xl mx-auto space-y-4">
          {TECH_STACK_LAYERS.map((layer, idx) => (
            <div
              key={layer.layer}
              className={`p-6 rounded-2xl border transition-all ${
                idx === 2
                  ? 'bg-gradient-to-r from-panel-deep/90 via-panel-dark/95 to-panel-deep/90 border-gold-500/50 shadow-glass-gold'
                  : 'bg-panel-dark/70 hover:bg-panel-dark/90 border-cyan-500/25 shadow-glass-panel'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-space-950 border border-slate-700">
                    {layerIcons[idx]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                      {layer.layer}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {layer.name}
                    </h3>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {layer.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-space-950/80 border border-slate-700 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pl-1">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


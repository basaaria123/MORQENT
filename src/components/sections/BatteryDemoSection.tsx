'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, Zap, Sun, Gauge, Play, Pause, RotateCcw, AlertCircle, ArrowDown } from 'lucide-react';
import Badge from '@/components/ui/Badge';

// 24-Hour Synthetic Profiles (illustrative synthetic data)
const HOURS = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

const SYNTHETIC_DATA = [
  // 00 - 05 (Night off-peak)
  { hour: '00:00', demand: 320, solar: 0, uncoordImport: 320, optImport: 440, batteryAction: 'Charge', soc: 35 },
  { hour: '01:00', demand: 310, solar: 0, uncoordImport: 310, optImport: 430, batteryAction: 'Charge', soc: 48 },
  { hour: '02:00', demand: 300, solar: 0, uncoordImport: 300, optImport: 420, batteryAction: 'Charge', soc: 60 },
  { hour: '03:00', demand: 290, solar: 0, uncoordImport: 290, optImport: 410, batteryAction: 'Charge', soc: 72 },
  { hour: '04:00', demand: 310, solar: 0, uncoordImport: 310, optImport: 420, batteryAction: 'Charge', soc: 84 },
  { hour: '05:00', demand: 360, solar: 0, uncoordImport: 360, optImport: 450, batteryAction: 'Charge', soc: 92 },
  // 06 - 09 (Morning ramping)
  { hour: '06:00', demand: 490, solar: 40, uncoordImport: 450, optImport: 450, batteryAction: 'Idle', soc: 92 },
  { hour: '07:00', demand: 720, solar: 150, uncoordImport: 620, optImport: 490, batteryAction: 'Discharge', soc: 82 },
  { hour: '08:00', demand: 980, solar: 310, uncoordImport: 880, optImport: 520, batteryAction: 'Discharge', soc: 70 },
  { hour: '09:00', demand: 1140, solar: 520, uncoordImport: 1020, optImport: 550, batteryAction: 'Discharge', soc: 56 },
  // 10 - 15 (Mid-day solar peak & building operations)
  { hour: '10:00', demand: 1220, solar: 740, uncoordImport: 1100, optImport: 580, batteryAction: 'Discharge', soc: 42 },
  { hour: '11:00', demand: 1280, solar: 920, uncoordImport: 1180, optImport: 600, batteryAction: 'Discharge', soc: 32 },
  { hour: '12:00', demand: 1250, solar: 1040, uncoordImport: 1080, optImport: 520, batteryAction: 'Charge (Solar)', soc: 45 },
  { hour: '13:00', demand: 1210, solar: 1020, uncoordImport: 1050, optImport: 510, batteryAction: 'Charge (Solar)', soc: 58 },
  { hour: '14:00', demand: 1240, solar: 900, uncoordImport: 1120, optImport: 560, batteryAction: 'Charge (Solar)', soc: 68 },
  { hour: '15:00', demand: 1200, solar: 710, uncoordImport: 1150, optImport: 590, batteryAction: 'Discharge', soc: 58 },
  // 16 - 19 (Evening peak demand window)
  { hour: '16:00', demand: 1230, solar: 480, uncoordImport: 1230, optImport: 610, batteryAction: 'Discharge', soc: 46 },
  { hour: '17:00', demand: 1190, solar: 220, uncoordImport: 1210, optImport: 620, batteryAction: 'Discharge', soc: 34 },
  { hour: '18:00', demand: 1050, solar: 60, uncoordImport: 1180, optImport: 600, batteryAction: 'Discharge', soc: 24 },
  { hour: '19:00', demand: 860, solar: 0, uncoordImport: 950, optImport: 580, batteryAction: 'Discharge', soc: 18 },
  // 20 - 23 (Night taper)
  { hour: '20:00', demand: 680, solar: 0, uncoordImport: 720, optImport: 550, batteryAction: 'Discharge', soc: 15 },
  { hour: '21:00', demand: 520, solar: 0, uncoordImport: 540, optImport: 500, batteryAction: 'Idle', soc: 15 },
  { hour: '22:00', demand: 420, solar: 0, uncoordImport: 420, optImport: 420, batteryAction: 'Idle', soc: 15 },
  { hour: '23:00', demand: 350, solar: 0, uncoordImport: 350, optImport: 350, batteryAction: 'Idle', soc: 15 },
];

export default function BatteryDemoSection() {
  const [isOptimised, setIsOptimised] = useState(true);
  const [activeHourIndex, setActiveHourIndex] = useState(11); // 11:00 peak
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveHourIndex((prev) => (prev + 1) % 24);
      }, 700);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentPoint = SYNTHETIC_DATA[activeHourIndex];

  // SVG Chart Dimensions
  const chartWidth = 900;
  const chartHeight = 280;
  const paddingX = 40;
  const paddingY = 30;
  const maxVal = 1400; // max kW scale

  const getX = (index: number) =>
    paddingX + (index / (SYNTHETIC_DATA.length - 1)) * (chartWidth - 2 * paddingX);
  const getY = (val: number) =>
    chartHeight - paddingY - (val / maxVal) * (chartHeight - 2 * paddingY);

  // SVG Path Generators
  const demandPath = SYNTHETIC_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.demand)}`).join(' ');
  const solarPath = SYNTHETIC_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.solar)}`).join(' ');
  const uncoordPath = SYNTHETIC_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.uncoordImport)}`).join(' ');
  const optPath = SYNTHETIC_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.optImport)}`).join(' ');

  return (
    <section id="battery-demo" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="cyan" className="mb-4">
            Interactive Operational Simulator
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Constraint-Aware Battery Scheduling
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            Watch mathematical optimisation in action: shifting storage discharge to eliminate peak demand charges and absorb rooftop solar generation.
          </p>

          {/* Prominent Required Synthetic Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Illustrative synthetic profile, not a measured result.</span>
          </div>
        </div>

        {/* Simulator Dashboard Container */}
        <div className="rounded-3xl bg-gradient-to-b from-panel-dark/90 to-space-900/95 border border-cyan-500/25 backdrop-blur-2xl p-6 md:p-8 shadow-glass-panel">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            {/* Mode Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-space-950 border border-cyan-500/20">
              <button
                onClick={() => setIsOptimised(false)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  !isOptimised
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Uncoordinated Baseline
              </button>
              <button
                onClick={() => setIsOptimised(true)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  isOptimised
                    ? 'bg-gradient-to-r from-cyan-500/30 to-gold-energy/20 text-cyan-300 border border-cyan-400 shadow-cyan-glow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                MORQENT LP/MILP Optimised
              </button>
            </div>

            {/* Play/Pause & Scrubber controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-2 rounded-xl bg-panel-royal/50 hover:bg-panel-royal border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause 24h Cycle' : 'Auto Play 24h'}</span>
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setActiveHourIndex(11);
                }}
                className="p-2 rounded-xl bg-panel-royal/40 hover:bg-panel-royal border border-slate-700 text-slate-400 hover:text-white"
                title="Reset to 11:00 Peak"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive KPI Gauges for Current Selected Hour */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {/* KPI 1: Hour & Action */}
            <div className="p-4 rounded-2xl bg-space-950/60 border border-slate-800">
              <div className="text-[11px] font-mono text-muted-blue">ACTIVE TIMESTEP</div>
              <div className="text-xl font-bold font-mono text-white mt-1">
                {currentPoint.hour}
              </div>
              <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1">
                <BatteryCharging className="w-3 h-3" />
                <span>{isOptimised ? currentPoint.batteryAction : 'No Action (Idle)'}</span>
              </div>
            </div>

            {/* KPI 2: Grid Import Power */}
            <div className="p-4 rounded-2xl bg-space-950/60 border border-slate-800">
              <div className="text-[11px] font-mono text-muted-blue">NET GRID IMPORT</div>
              <div className="text-xl font-bold font-mono text-white mt-1">
                {isOptimised ? `${currentPoint.optImport} kW` : `${currentPoint.uncoordImport} kW`}
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1">
                {isOptimised && (
                  <>
                    <ArrowDown className="w-3 h-3" />
                    <span>Peak Shaved by {currentPoint.uncoordImport - currentPoint.optImport} kW</span>
                  </>
                )}
                {!isOptimised && <span className="text-rose-400">Uncontrolled import spike</span>}
              </div>
            </div>

            {/* KPI 3: Solar Generation */}
            <div className="p-4 rounded-2xl bg-space-950/60 border border-slate-800">
              <div className="text-[11px] font-mono text-muted-blue">ONSITE SOLAR YIELD</div>
              <div className="text-xl font-bold font-mono text-amber-300 mt-1">
                {currentPoint.solar} kW
              </div>
              <div className="text-xs font-mono text-muted-blue mt-1 flex items-center gap-1">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>Demand: {currentPoint.demand} kW</span>
              </div>
            </div>

            {/* KPI 4: Battery SoC */}
            <div className="p-4 rounded-2xl bg-space-950/60 border border-slate-800">
              <div className="text-[11px] font-mono text-muted-blue">BATTERY SOC</div>
              <div className="text-xl font-bold font-mono text-cyan-400 mt-1 flex items-center gap-2">
                <Battery className="w-5 h-5 text-cyan-400" />
                <span>{isOptimised ? `${currentPoint.soc}%` : '50% (Static)'}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-gold-energy transition-all duration-300"
                  style={{ width: `${isOptimised ? currentPoint.soc : 50}%` }}
                />
              </div>
            </div>
          </div>

          {/* SVG 24H Interactive Graph */}
          <div className="relative w-full overflow-x-auto select-none mt-2">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-auto min-w-[650px] overflow-visible"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="optGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5B731" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F5B731" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[300, 600, 900, 1200].map((gridVal) => (
                <g key={gridVal}>
                  <line
                    x1={paddingX}
                    y1={getY(gridVal)}
                    x2={chartWidth - paddingX}
                    y2={getY(gridVal)}
                    stroke="rgba(148, 163, 184, 0.12)"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={paddingX - 10}
                    y={getY(gridVal) + 4}
                    fill="#64748B"
                    fontSize="10"
                    textAnchor="end"
                    fontFamily="monospace"
                  >
                    {gridVal} kW
                  </text>
                </g>
              ))}

              {/* Solar Curve */}
              <path d={solarPath} fill="none" stroke="#F5B731" strokeWidth="2" strokeDasharray="3 3" opacity="0.75" />

              {/* Facility Demand Curve */}
              <path d={demandPath} fill="none" stroke="#94A3B8" strokeWidth="1.5" opacity="0.6" />

              {/* Uncoordinated Curve (if active) */}
              {!isOptimised && (
                <path
                  d={uncoordPath}
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                  className="filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                />
              )}

              {/* Optimised Curve (if active) */}
              {isOptimised && (
                <path
                  d={optPath}
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="3"
                  className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                />
              )}

              {/* Active Hour Vertical Scrubber Line */}
              <line
                x1={getX(activeHourIndex)}
                y1={paddingY}
                x2={getX(activeHourIndex)}
                y2={chartHeight - paddingY}
                stroke="#F5B731"
                strokeWidth="2"
                strokeDasharray="2 2"
              />

              {/* Active Points */}
              <circle
                cx={getX(activeHourIndex)}
                cy={getY(isOptimised ? currentPoint.optImport : currentPoint.uncoordImport)}
                r="6"
                fill={isOptimised ? '#22D3EE' : '#F43F5E'}
                stroke="#FFFFFF"
                strokeWidth="2"
                className="filter drop-shadow-[0_0_8px_rgba(34,211,238,1)]"
              />

              {/* Hour Labels */}
              {SYNTHETIC_DATA.filter((_, i) => i % 3 === 0).map((d) => {
                const idx = SYNTHETIC_DATA.findIndex((item) => item.hour === d.hour);
                return (
                  <text
                    key={d.hour}
                    x={getX(idx)}
                    y={chartHeight - 8}
                    fill="#94A3B8"
                    fontSize="10"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {d.hour}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Time Scrubber Slider */}
          <div className="mt-4 px-2">
            <input
              type="range"
              min="0"
              max="23"
              value={activeHourIndex}
              onChange={(e) => {
                setIsPlaying(false);
                setActiveHourIndex(Number(e.target.value));
              }}
              className="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-blue mt-1">
              <span>00:00 (Off-Peak Base)</span>
              <span>12:00 (Solar Peak)</span>
              <span>18:00 (Evening Peak)</span>
              <span>23:00 (Night Reset)</span>
            </div>
          </div>

          {/* Legend and Analysis Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-slate-400" /> Facility Gross Demand
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-amber-400 dashed-line" /> Solar PV Output
              </span>
              <span className="flex items-center gap-1.5">
                <span className={`w-3 h-0.5 ${isOptimised ? 'bg-cyan-400' : 'bg-rose-500'}`} />
                {isOptimised ? 'MORQENT Optimised Net Import' : 'Uncoordinated Net Import'}
              </span>
            </div>

            <div className="text-right">
              {isOptimised ? (
                <span className="text-emerald-400 font-bold">
                  ✓ Peak Import Constrained to ≤ 620 kW
                </span>
              ) : (
                <span className="text-rose-400 font-bold">
                  ⚠ Uncontrolled Peak: 1,230 kW
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


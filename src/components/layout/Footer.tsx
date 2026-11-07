'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Activity, Shield, Sparkles } from 'lucide-react';
import MorqentLogo from '@/components/ui/MorqentLogo';
import { BRAND_SIGNOFF, BRAND_PILLARS } from '@/data/morqentData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-950 border-t border-slate-800/80 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-radial-space opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <MorqentLogo size="lg" showTagline={false} />
            <div className="text-sm font-mono text-cyan-300">
              {BRAND_SIGNOFF}
            </div>
            <p className="text-xs text-muted-blue max-w-sm leading-relaxed">
              Autonomous energy intelligence and multi-scale digital twin platform. Coordinating distributed assets into intelligent, resilient, self-optimising energy networks.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-gold-energy">
              <span className="w-2 h-2 rounded-full bg-gold-energy animate-pulse" />
              <span>{BRAND_PILLARS.join(' · ')}</span>
            </div>
          </div>

          {/* Quick Links: Platform (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Platform
            </div>
            <ul className="space-y-2 text-xs font-mono text-muted-blue">
              <li>
                <Link href="#problem" className="hover:text-cyan-300 transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="#solution" className="hover:text-cyan-300 transition-colors">
                  The Solution
                </Link>
              </li>
              <li>
                <Link href="#loop" className="hover:text-cyan-300 transition-colors">
                  Intelligence Loop
                </Link>
              </li>
              <li>
                <Link href="#twin-arch" className="hover:text-cyan-300 transition-colors">
                  Digital Twin 3D
                </Link>
              </li>
              <li>
                <Link href="#agents" className="hover:text-cyan-300 transition-colors">
                  9 AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Technology & Pilot (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Verification
            </div>
            <ul className="space-y-2 text-xs font-mono text-muted-blue">
              <li>
                <Link href="#battery-demo" className="hover:text-cyan-300 transition-colors">
                  24h Live Demo
                </Link>
              </li>
              <li>
                <Link href="#mvp" className="hover:text-cyan-300 transition-colors">
                  Three-Facility MVP
                </Link>
              </li>
              <li>
                <Link href="#validation" className="hover:text-cyan-300 transition-colors">
                  Experiments A–D
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-cyan-300 transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="#request-pilot" className="hover:text-gold-bright transition-colors text-gold-energy">
                  Request Pilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Telemetry status (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Operational Status
            </div>

            <div className="p-4 rounded-2xl bg-panel-dark/60 border border-cyan-500/20 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  Twin Telemetry
                </span>
                <span className="text-emerald-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>MILP Solver:</span>
                <span className="text-cyan-300">ONLINE (0 HARD VIOLATIONS)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Human Gate:</span>
                <span className="text-gold-energy font-bold">ARMED</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top of Page</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} MORQENT Platform. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] max-w-lg">
            Synthetic simulation models for illustrative evaluation. No performance results are guaranteed until verified under site-specific calibration.
          </div>
        </div>
      </div>
    </footer>
  );
}


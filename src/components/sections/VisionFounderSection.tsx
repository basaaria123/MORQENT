'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Send, Sparkles, Building2, Mail, User, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import Badge from '@/components/ui/Badge';
import MorqentLogo from '@/components/ui/MorqentLogo';
import { FOUNDER_THESIS, BRAND_SIGNOFF } from '@/data/morqentData';

export default function VisionFounderSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    facilityType: 'University Campus',
    assets: ['Solar PV', 'Battery Storage'],
    primaryGoal: 'Peak Demand Shaving & Tariff Arbitrage',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAssetToggle = (asset: string) => {
    setFormData((prev) => {
      const exists = prev.assets.includes(asset);
      return {
        ...prev,
        assets: exists ? prev.assets.filter((a) => a !== asset) : [...prev.assets, asset],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid work email address';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Please provide your institution or company name';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#22D3EE', '#F5B731', '#10B981'],
        });
      } catch {
        // Confetti fallback
      }
    }, 1000);
  };

  return (
    <section id="request-pilot" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gold-energy/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Founder's Thesis Hero Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="gold" className="mb-4">
            Founder&apos;s Thesis & Long-Term Vision
          </Badge>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-snug">
            &ldquo;{FOUNDER_THESIS}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold-energy" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold-energy">
              MORQENT Founding Principle
            </span>
            <span className="w-8 h-[1px] bg-gold-energy" />
          </div>
        </div>

        {/* Pilot Request Section with Form and Brand Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Brand Sign-off & Pilot Summary (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-panel-deep/80 via-panel-dark/95 to-space-950/95 border border-cyan-500/30 backdrop-blur-2xl shadow-glass-panel flex flex-col justify-between">
            <div>
              <MorqentLogo size="lg" showTagline={false} />
              <div className="mt-3 text-sm font-mono text-cyan-300 tracking-wider">
                {BRAND_SIGNOFF}
              </div>

              <h3 className="mt-8 text-xl sm:text-2xl font-display font-bold text-white">
                Initiate a Shadow Pilot
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experience MORQENT on your campus or facility in risk-free shadow mode. We connect to your historical or live meter telemetry to benchmark potential savings without touching live control systems.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Zero actuation risk: runs in non-intrusive shadow simulation',
                  'IPMVP-compliant counterfactual baseline calculation',
                  'Deterministic constraint safety validation report',
                  'Custom digital twin parameterization for your assets',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-muted-blue">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Trust Security</span>
              </span>
              <span className="text-gold-energy font-bold">Q1-Q2 Cohort Open</span>
            </div>
          </div>

          {/* Right Column: Interactive Pilot Request Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-panel-dark/90 to-space-950/95 border border-cyan-500/25 backdrop-blur-2xl shadow-glass-panel flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white">
                  Pilot Application Received
                </h4>
                <p className="mt-2 text-sm text-muted-blue max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our technical engineering team will review <span className="text-white font-semibold">{formData.organization}</span> and send a preliminary data readiness checklist to <span className="text-cyan-300 font-mono">{formData.email}</span>.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-space-950/70 border border-slate-800 text-xs font-mono text-slate-300 max-w-sm mx-auto text-left">
                  <div className="text-muted-blue text-[10px] uppercase mb-1">Configuration Overview</div>
                  <div>Facility: {formData.facilityType}</div>
                  <div>Assets: {formData.assets.join(', ')}</div>
                  <div>Goal: {formData.primaryGoal}</div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    Request Evaluation Access
                  </h4>
                  <p className="text-xs text-muted-blue">
                    Fill out the technical profile of your energy network.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Chen"
                        className={`w-full px-4 py-2.5 rounded-xl bg-space-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[10px] text-rose-400 mt-1 block font-mono">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah.chen@university.edu"
                        className={`w-full px-4 py-2.5 rounded-xl bg-space-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[10px] text-rose-400 mt-1 block font-mono">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Organization / Facility Name *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Pacific Northwest Campus"
                      className={`w-full px-4 py-2.5 rounded-xl bg-space-950/80 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.organization ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.organization && (
                      <span className="text-[10px] text-rose-400 mt-1 block font-mono">
                        {errors.organization}
                      </span>
                    )}
                  </div>

                  {/* Facility Type */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Facility Category
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="University Campus">University Campus</option>
                      <option value="Industrial Manufacturing">Industrial Manufacturing Facility</option>
                      <option value="Commercial Real Estate">Commercial Real Estate / Office Tower</option>
                      <option value="Municipal Microgrid">Municipal Microgrid</option>
                      <option value="Utility / Aggregator">Distribution Utility / Aggregator</option>
                    </select>
                  </div>
                </div>

                {/* Energy Assets Checkboxes */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Connected Energy Assets (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Solar PV', 'Battery Storage', 'EV Charging', 'Flexible HVAC'].map((asset) => {
                      const isChecked = formData.assets.includes(asset);
                      return (
                        <button
                          type="button"
                          key={asset}
                          onClick={() => handleAssetToggle(asset)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono transition-all border text-center ${
                            isChecked
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                              : 'bg-space-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '}
                          {asset}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Objective */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Primary Operational Objective
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Peak Demand Shaving & Tariff Arbitrage">
                      Peak Demand Shaving & Dynamic Tariff Arbitrage
                    </option>
                    <option value="Cross-Facility Feeder Coordination">
                      Cross-Facility Shared Feeder Coordination
                    </option>
                    <option value="Renewable Curtailment Elimination">
                      Renewable Curtailment Elimination & Carbon Accounting
                    </option>
                    <option value="Digital Twin Scenario Stress-Testing">
                      Digital Twin Scenario Simulation & Capex Sizing
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor-gold
                  className="w-full mt-4 py-3.5 rounded-2xl text-xs font-bold font-mono uppercase tracking-wider text-space-950 bg-gradient-to-r from-amber-300 via-gold-energy to-amber-400 shadow-gold-glow-md hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>INITIALIZING APPLICATION...</span>
                  ) : (
                    <>
                      <span>Submit Pilot Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


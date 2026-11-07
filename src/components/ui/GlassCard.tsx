'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'royal' | 'gold' | 'cyan' | 'dark';
  glowEffect?: boolean;
  interactiveTilt?: boolean;
  className?: string;
  badge?: string;
}

export default function GlassCard({
  children,
  variant = 'royal',
  glowEffect = true,
  interactiveTilt = false,
  className = '',
  badge,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    if (!interactiveTilt) return;
    setRotateX(0);
    setRotateY(0);
  };

  const variantMap = {
    royal:
      'bg-panel-royal/30 hover:bg-panel-royal/45 border-cyan-500/20 hover:border-cyan-400/40 shadow-glass-panel',
    gold:
      'bg-panel-dark/70 hover:bg-panel-dark/90 border-gold-500/30 hover:border-gold-energy/60 shadow-glass-gold',
    cyan:
      'bg-panel-dark/60 hover:bg-panel-dark/80 border-cyan-400/35 hover:border-cyan-300/60 shadow-cyan-glow-sm',
    dark:
      'bg-space-950/70 hover:bg-space-950/90 border-slate-700/40 hover:border-slate-600/60 shadow-lg',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        interactiveTilt
          ? {
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.15s ease-out',
            }
          : undefined
      }
      className={cn(
        'relative rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300 group overflow-hidden',
        variantMap[variant],
        className
      )}
      {...props}
    >
      {/* Top subtle shine line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none group-hover:via-cyan-400/60 transition-all duration-500" />

      {/* Decorative ambient corner glow */}
      {glowEffect && (
        <div
          className={cn(
            'absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40',
            variant === 'gold' ? 'bg-gold-energy' : 'bg-cyan-glow'
          )}
        />
      )}

      {badge && (
        <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
          {badge}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}


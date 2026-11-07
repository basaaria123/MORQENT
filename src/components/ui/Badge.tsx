import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'gold' | 'emerald' | 'subtle';
  className?: string;
  pulse?: boolean;
}

export default function Badge({
  children,
  variant = 'cyan',
  className = '',
  pulse = true,
}: BadgeProps) {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.15)]',
    gold: 'bg-gold-500/10 text-gold-bright border-gold-500/35 shadow-[0_0_10px_rgba(245,183,49,0.2)]',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    subtle: 'bg-slate-800/40 text-muted-blue border-slate-700/50',
  };

  const dotColors = {
    cyan: 'bg-cyan-400',
    gold: 'bg-gold-energy',
    emerald: 'bg-emerald-400',
    subtle: 'bg-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border backdrop-blur-md select-none',
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColors[variant]
            )}
          />
          <span className={cn('relative inline-flex rounded-full h-2 w-2', dotColors[variant])} />
        </span>
      )}
      {children}
    </span>
  );
}


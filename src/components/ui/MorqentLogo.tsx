'use client';

import React from 'react';

interface MorqentLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export default function MorqentLogo({
  className = '',
  size = 'md',
  showTagline = false,
}: MorqentLogoProps) {
  const sizeClasses = {
    sm: 'text-lg tracking-wider',
    md: 'text-2xl tracking-widest',
    lg: 'text-4xl tracking-widest',
    xl: 'text-5xl md:text-6xl tracking-widest',
  };

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="relative flex items-center select-none font-display font-extrabold uppercase leading-none">
        {/* Subtle luminous halo over logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-gold-500/20 to-cyan-500/20 blur-md opacity-70 pointer-events-none" />

        {/* Wordmark with Golden Q */}
        <span className={`relative text-white flex items-center font-black ${sizeClasses[size]}`}>
          <span>MOR</span>
          <span className="relative text-gold-energy inline-flex flex-col items-center mx-[1px]">
            {/* Golden top arch light accent over Q matching brand graphic */}
            <svg
              className="absolute -top-[35%] w-[130%] h-[35%] pointer-events-none overflow-visible"
              viewBox="0 0 40 14"
              fill="none"
            >
              <path
                d="M 2 12 Q 20 0 38 12"
                stroke="url(#goldArcGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F5B731" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-gold-energy to-amber-500 drop-shadow-[0_0_12px_rgba(245,183,49,0.7)]">
              Q
            </span>
          </span>
          <span>ENT</span>
        </span>
      </div>

      {showTagline && (
        <span className="text-[10px] tracking-[0.25em] text-muted-blue font-medium mt-1 uppercase">
          Energy Intelligence
        </span>
      )}
    </div>
  );
}


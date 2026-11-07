'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import DigitalTwinHierarchy3D from '@/components/3d/DigitalTwinHierarchy3D';

export default function DigitalTwinArchSection() {
  return (
    <section id="twin-arch" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Unified Multi-Scale Fidelity
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Digital Twin Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-blue">
            A three-tier hierarchical stack mirroring physical assets with electro-chemical rigor, aggregating behind-the-meter facilities, and coordinating shared distribution networks.
          </p>
        </div>

        {/* 3D Interactive Isometric Hierarchy Exploder */}
        <DigitalTwinHierarchy3D />
      </div>
    </section>
  );
}


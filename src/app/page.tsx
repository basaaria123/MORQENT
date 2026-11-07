import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import WhyItMattersSection from '@/components/sections/WhyItMattersSection';
import SolutionSection from '@/components/sections/SolutionSection';
import IntelligenceLoopSection from '@/components/sections/IntelligenceLoopSection';
import ProductModulesSection from '@/components/sections/ProductModulesSection';
import DigitalTwinArchSection from '@/components/sections/DigitalTwinArchSection';
import NineAgentsSection from '@/components/sections/NineAgentsSection';
import BatteryDemoSection from '@/components/sections/BatteryDemoSection';
import MVPSection from '@/components/sections/MVPSection';
import ValidationExperimentsSection from '@/components/sections/ValidationExperimentsSection';
import TargetCustomersSection from '@/components/sections/TargetCustomersSection';
import MarketOpportunitySection from '@/components/sections/MarketOpportunitySection';
import BusinessModelSection from '@/components/sections/BusinessModelSection';
import GoToMarketSection from '@/components/sections/GoToMarketSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import ResponsibleAISection from '@/components/sections/ResponsibleAISection';
import TechStackSection from '@/components/sections/TechStackSection';
import RisksMitigationsSection from '@/components/sections/RisksMitigationsSection';
import VisionFounderSection from '@/components/sections/VisionFounderSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. The Problem */}
      <ProblemSection />

      {/* 4. Why It Matters */}
      <WhyItMattersSection />

      {/* 5. The Solution */}
      <SolutionSection />

      {/* 6. The MORQENT Intelligence Loop */}
      <IntelligenceLoopSection />

      {/* 7. Product Modules */}
      <ProductModulesSection />

      {/* 8. Digital Twin Architecture */}
      <DigitalTwinArchSection />

      {/* 9. Nine-Agent Architecture */}
      <NineAgentsSection />

      {/* 10. Battery Scheduling Live Demo */}
      <BatteryDemoSection />

      {/* 11. The MVP */}
      <MVPSection />

      {/* 12. Validation & Experiments A-D */}
      <ValidationExperimentsSection />

      {/* 13. Target Customers & Stakeholders */}
      <TargetCustomersSection />

      {/* 14. Market Opportunity */}
      <MarketOpportunitySection />

      {/* 15. Business Model Sequence */}
      <BusinessModelSection />

      {/* 16. Go-to-Market */}
      <GoToMarketSection />

      {/* 17. Roadmap & 90-Day Plan */}
      <RoadmapSection />

      {/* 18. Responsible AI & Security */}
      <ResponsibleAISection />

      {/* 19. Technology Stack */}
      <TechStackSection />

      {/* 20. Risks & Mitigations */}
      <RisksMitigationsSection />

      {/* 21. Vision & Founder's Thesis + Pilot Request Form */}
      <VisionFounderSection />
    </div>
  );
}


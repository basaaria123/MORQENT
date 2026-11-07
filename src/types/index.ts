export interface ProblemItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  consequence: string;
  iconName: string;
}

export interface ValuePillar {
  pillar: 'Technical' | 'Economic' | 'Environmental' | 'Operational';
  headline: string;
  points: string[];
  metricLabel: string;
  metricBadge: string;
}

export interface SolutionCapability {
  capability: string;
  badge: string;
  questionAnswered: string;
  mechanism: string;
  deliverable: string;
  icon: string;
}

export interface IntelligenceLoopStep {
  step: number;
  name: string;
  category: 'Input' | 'Model' | 'Decision' | 'Action' | 'Verification';
  isGate?: boolean;
  tagline: string;
  description: string;
  technicalArtifact: string;
  cycleTime: string;
}

export interface ProductModule {
  id: string;
  name: string;
  tagline: string;
  role: string;
  features: string[];
  output: string;
  badge: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  group: 'SENSE & MODEL' | 'DECIDE' | 'PROVE' | 'CORE';
  role: string;
  inputs: string[];
  outputs: string[];
  governance: string;
}

export interface ExperimentComparison {
  key: 'A' | 'B' | 'C' | 'D';
  name: string;
  forecastInformed: boolean;
  mathematicalOptimisation: boolean;
  crossFacilityCoordination: boolean;
  agentOrchestration: boolean;
  independentVerification: boolean;
  description: string;
  strengths: string;
  limitations: string;
}


# MORQENT — Autonomous Energy Intelligence & Digital Twin Platform

> **"From Isolated Energy Assets to Intelligent, Coordinated and Self-Optimising Energy Networks."**  
> *Pillars: Model · Predict · Optimise · Transform*  
> *Sign-off: Intelligence Today. A Sustainable Tomorrow.*

---

## 🌌 Overview

**MORQENT** is an AI-powered distributed energy intelligence and digital twin platform. It creates dynamic, high-fidelity digital twins of physical energy assets (solar PV, battery storage, flexible HVAC, EV charging stations) and distribution networks. Through nine specialized AI agents and constraint-aware mathematical optimization (LP/MILP), MORQENT transitions energy infrastructure from isolated, reactive assets into a coordinated, self-optimising, closed-loop network.

This repository contains the award-winning, immersive single-page marketing website and interactive simulation workbench for MORQENT, designed with Awwwards / FWA creative development standards.

---

## 🎨 Visual Theme & Design Tokens

- **Deep Space Palette**:
  - Background: `#050B1A` (`bg-space-900`)
  - Deep Royal Panels: `#0B2A5B` / `#0E3A7A` (`bg-panel-royal` / `bg-panel-deep`)
  - Electric Cyan Glow: `#22D3EE` / `#00F0FF` (primary telemetry & wireframe glow)
  - Energy Gold: `#F5B731` / `#FBBF24` (accent, Q monogram in the logo, human approval gate)
  - Net-Zero Emerald: `#10B981` (sustainability & verification metrics)
  - Text: White `#F8FAFC`, Muted Blue-Grey `#9FB3D1`
- **Atmosphere**: Futuristic control room, holographic glassmorphism panels with 1px gradient borders, luminous Earth data nodes, and interactive 3D physics.
- **Brand Typography**: Geometric display headings (`Space Grotesk`) paired with `Inter` body copy and `JetBrains Mono` telemetry counters.

---

## ⚡ Core Sections & Feature Highlights

1. **Sticky Glass Navbar**:
   - Monogram logo with golden arch over 'Q', quick navigation, live telemetry indicator, and "Request a Pilot" CTA.
2. **Hero 3D Scene**:
   - Full-screen WebGL Three.js interactive globe with procedurally generated data particles, orbiting energy rings, 3 connected facility beacons, and floating holographic HUD cards.
3. **The Problem**:
   - The 5 interconnected energy bottlenecks and callout box for the *Central Problem Statement*.
4. **Why It Matters**:
   - Technical, Economic, Environmental, and Operational significance.
5. **The MORQENT Solution**:
   - Five capabilities (Predictive, Prescriptive, Simulation, Coordinated, Verification) answering core operational questions.
6. **The MORQENT Intelligence Loop**:
   - 9-step circular loop (*Observe, Update, Predict, Simulate, Optimise, Authorise, Act, Verify, Learn*). Step 6 highlighted in energy gold as the human approval gate.
7. **Product Modules**:
   - Twin Builder, Forecast Engine, Scenario Lab, Optimiser, Approval Console, Verification Ledger.
8. **Digital Twin Architecture**:
   - Interactive 3-layer isometric stack (*Asset Twin → Facility Twin → Network Twin*) with 3D explode view toggle.
9. **Nine-Agent Architecture**:
   - SENSE & MODEL, DECIDE, PROVE cohorts + Orchestration Core and the foundational design rule:  
     *"Agents orchestrate tools and models; they do not invent numerical operating decisions. Mathematical optimisation produces the schedules, and deterministic safety checks validate them before any action."*
10. **Interactive 24h Battery Scheduling Simulator**:
    - Live SVG/canvas chart comparing uncoordinated grid import vs MORQENT LP/MILP peak shaving, battery state-of-charge (SoC), and real-time scrubber.
11. **The MVP**:
    - "MORQENT Energy Intelligence Twin": University Campus, Industrial Manufacturing, Commercial Building + 10 MVP capabilities.
12. **Validation & Experiments A–D**:
    - Baseline vs Independent vs Centralised vs Multi-Agent Coordination + honest hypothesis and 5 acceptance criteria.
13. **Target Customers & Stakeholders**:
    - Beachheads, early adopters, utilities, aggregators + stakeholder matrix.
14. **Market Opportunity**:
    - Nested TAM → SAM → SOM framework ("Values to be sourced").
15. **Business Model Sequence**:
    - SaaS subscriptions, enterprise licensing, intelligence services, and flexibility fees timeline.
16. **Go-to-Market**:
    - 5-stage progression: *Beachhead → Prove → Expand → Partner → Scale*.
17. **Roadmap & First 90-Day Plan**:
    - 4 phases and immediate sprint objectives.
18. **Responsible AI & Security**:
    - Human supervision, constraint safety, full auditability, cybersecurity, progressive autonomy.
19. **Layered Technology Stack**:
    - Experience, Agents & Orchestration, Intelligence Engines, Digital Twin State, Edge Protocols.
20. **Risks & Mitigations**:
    - Transparent analysis of failure modes and engineering safeguards.
21. **Founder's Thesis & Pilot Application**:
    - *"Distributed energy value is created not by owning more assets but by operating them intelligently and proving the outcome."*  
    - Interactive pilot application form with client-side validation and celebration animation.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Design Tokens
- **3D & Canvas**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher, tested on Node.js v24)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/morqent-platform.git
cd morqent-platform

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## ☁️ Deployment on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `morqent-platform` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **"Deploy"**. The site will be live on a global CDN with automatic SSL and edge caching.

---

## 📜 License

Proprietary © MORQENT Platform. All rights reserved.


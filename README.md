# HCS-U7 Investor Pitch Deck

**Human Cognitive Signature** — Cognitive biometric authentication resistant to generative AI.

## Overview

A 16-slide investor pitch deck for HCS-U7, a French deep-tech cybersecurity startup. Built with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **16 navigable slides** with smooth Framer Motion transitions
- **Keyboard navigation** (← → arrow keys, spacebar)
- **Touch/swipe navigation** for mobile devices
- **"Cyberpunk 2030" design system** — High-contrast neon aesthetics
- **Interactive Data Visualization** — Animated charts and diagrams
- **Digital Rain Effect** — Matrix-style background animations
- **Responsive design** optimized for desktop and mobile
- **PDF export** via browser print (Ctrl/Cmd + P)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

## Navigation

| Action | Desktop | Mobile |
|--------|---------|--------|
| Next slide | → or Space | Swipe left |
| Previous slide | ← | Swipe right |
| Go to slide | Click progress dot | Tap progress dot |
| Toggle language | Click EN/FR | Tap EN/FR |
| Export PDF | Click PDF button | Tap PDF button |

## Design System

**"Cyberpunk 2030"** — High-contrast neon aesthetics optimized for dark environments.

### Colors
- **Surface**: `#050505` (Deep Black)
- **Ink**: `#FFFFFF` (White) / `#94A3B8` (Secondary)
- **Accent**: `#00F0FF` (Cyber Blue)
- **Success**: `#00FF9D` (Neon Green)
- **Danger**: `#FF003C` (Neon Red)
- **Warning**: `#FIEE00` (Neon Yellow)

### Typography
- **Headlines**: 'Inter', sans-serif
- **Mono**: 'JetBrains Mono', monospace (for data & technical details)

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Cyberpunk design system
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main presentation controller
├── components/
│   ├── SlideLayout.tsx  # Base slide wrapper with animations
│   ├── Navigation.tsx   # Bottom navigation bar
│   ├── CyberComponents.tsx # Glitch text, cyber cards, buttons
│   ├── DigitalRain.tsx  # Matrix-style background effect
│   ├── LayerDiagram.tsx # Architecture visualization
│   ├── ComparisonTable.tsx # Feature comparison
│   ├── FunnelChart.tsx  # Sales funnel visualization
│   ├── BarChart.tsx     # Data visualization
│   ├── PricingTier.tsx  # Business model cards
│   └── Timeline.tsx     # Roadmap visualization
└── slides/
    ├── 01-cover.tsx     # Cover slide
    ├── 02-shift.tsx     # AI broke authentication
    ├── 03-cost.tsx      # Business impact
    ├── 04-insight.tsx   # Core insight
    ├── 05-solution.tsx  # HCS-U7 solution
    ├── 06-how.tsx       # 6 cognitive tests
    ├── 07-technology.tsx # Architecture
    ├── 08-validation.tsx # AI model testing
    ├── 09-market.tsx    # TAM/SAM/SOM
    ├── 10-competition.tsx
    ├── 11-business.tsx  # Pricing tiers
    ├── 12-traction.tsx  # Timeline
    ├── 13-gtm.tsx       # Go-to-market
    ├── 14-financials.tsx
    ├── 15-ask.tsx       # The ask
    ├── 16-team.tsx      # Team & contact
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Company Information

- **Company**: IA SOLUTION
- **SIRET**: 438 055 097
- **Location**: Alès, France
- **Founded**: 2001
- **Founder**: Benjamin BARRERE
- **Product**: HCS-U7 (Human Cognitive Signature v8.0)
- **Patents**: FR2514274 (system), FR2514546 (Celestial Entropy)

## Key Metrics

| Metric | Value |
|--------|-------|
| Accuracy | 98.9% |
| False Positive Rate | 2.2% |
| True Negative Rate | 99.6% |
| AUC-ROC | 0.994 |

## Fundraising

- **Raising**: €500K Seed
- **Valuation Cap**: €3M
- **Runway**: 18 months
- **Y3 Target**: €3.5M ARR

## License

Proprietary — IA SOLUTION © 2025

# HCS-U7 Investor Pitch Deck

**Human Cognitive Signature** — Cognitive biometric authentication resistant to generative AI.

## Overview

A 16-slide investor pitch deck for HCS-U7, a French deep-tech cybersecurity startup. Built with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **16 navigable slides** with smooth Framer Motion transitions
- **Keyboard navigation** (← → arrow keys, spacebar)
- **Touch/swipe navigation** for mobile devices
- **Dark mode toggle** with system preference detection
- **PDF export** via browser print (Ctrl/Cmd + P)
- **Responsive design** optimized for desktop and mobile
- **"2030 Institutional" design system** — Goldman Sachs meets Dieter Rams

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
| Toggle dark mode | Click moon/sun icon | Tap moon/sun icon |
| Export PDF | Click PDF button | Tap PDF button |

## Design System

### Colors
- **Surface**: `#FAFAFA` (light) / `#0A0A0A` (dark)
- **Ink**: `#0A0A0A` (light) / `#FAFAFA` (dark)
- **Accent**: `#0066FF`
- **Success**: `#059669`
- **Danger**: `#DC2626`

### Typography
- **Headlines**: Inter, 700 weight, -0.02em tracking
- **Body**: Inter, 400 weight, 1.5 line-height
- **Data/Numbers**: JetBrains Mono

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & print styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main presentation controller
├── components/
│   ├── SlideLayout.tsx  # Base slide wrapper
│   ├── MetricCard.tsx   # Large metric display
│   ├── ProgressBar.tsx  # Animated progress bars
│   ├── ComparisonTable.tsx
│   ├── TestCard.tsx
│   ├── LayerDiagram.tsx
│   ├── FunnelChart.tsx
│   ├── PricingTier.tsx
│   ├── Timeline.tsx
│   ├── BarChart.tsx
│   └── Navigation.tsx   # Bottom navigation bar
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
    └── 16-team.tsx      # Team & contact
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

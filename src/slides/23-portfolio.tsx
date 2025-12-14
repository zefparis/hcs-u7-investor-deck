'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, Link2 } from 'lucide-react';

// Drone icon is not exported directly from lucide-react in some versions or might be named differently.
// Using a safe fallback or checking if it exists. 
// Assuming Drone exists or using a substitute if needed. 
// Lucide-react usually exports Drone. 
import { Drone } from 'lucide-react'; 

export function SlidePortfolio() {
  const products = [
    {
      icon: Shield,
      name: 'HCS-U7',
      tagline: 'Cognitive Authentication Engine',
      market: 'Enterprise Cybersecurity',
      revenue: 'SaaS (€99-€2499/user/year)',
      stage: 'Production (hcs-u7.online)',
      tam: '€50M (auth software)',
      customers: 'Fintech, E-commerce, Gaming',
      differentiation: '99.6% bot detection • PSD2 compliant • 8-layer security',
      color: 'cyan',
      patents: 'FR2514274, FR2514546'
    },
    {
      icon: Drone,
      name: 'HCS-SHIELD',
      tagline: 'Tactical Mission Planning',
      market: 'Defense & Critical Ops',
      revenue: 'Licenses (€79-€499/device/year)',
      stage: 'Combat-ready (shield.ia-solution.fr)',
      tam: '€50M (tactical drones SW)',
      customers: 'Special Forces, Firefighters, Industrial',
      differentiation: '100% offline • Hardware-bound • Panic wipe <3s',
      color: 'green',
      patents: 'FR2514274 (QR encryption), FR2514546 (entropy)'
    }
  ];

  const colorMap = {
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success'
  };

  return (
    <SlideLayout title="Product Portfolio" subtitle="One technology, dual markets">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, idx) => {
          const Icon = product.icon;
          const colors = colorMap[product.color as keyof typeof colorMap];
          const textColor = colors.split(' ').pop(); // simple extraction or just hardcode

          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`border ${colors} p-6 rounded-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className={`w-10 h-10`} />
                <div>
                  <h3 className={`text-2xl font-bold font-mono`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-ink-secondary">{product.tagline}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-ink-tertiary">Market:</span>{' '}
                  <span className="text-ink font-semibold">{product.market}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">Revenue Model:</span>{' '}
                  <span className="text-ink">{product.revenue}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">Stage:</span>{' '}
                  <span className={`font-mono`}>
                    {product.stage}
                  </span>
                </div>
                <div>
                  <span className="text-ink-tertiary">TAM:</span>{' '}
                  <span className="text-ink">{product.tam}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">Customers:</span>{' '}
                  <span className="text-ink">{product.customers}</span>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <div className="text-ink-tertiary mb-2">Key Differentiators:</div>
                  <p className={`text-xs`}>
                    {product.differentiation}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-ink-tertiary mb-1">Patent Coverage:</div>
                  <p className="text-xs text-ink-secondary font-mono">{product.patents}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technology Synergies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 border border-purple-500/30 bg-purple-500/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <Link2 className="text-purple-400 w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-2">Shared Technology Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-ink-secondary">
              <div>• QSIG + B3 Signatures</div>
              <div>• AES-256-GCM Encryption</div>
              <div>• Celestial Entropy</div>
              <div>• WebAuthn Hardware Binding</div>
              <div>• Timing-Safe Validation</div>
              <div>• Cognitive Testing Engine</div>
              <div>• Proof-of-Work</div>
              <div>• Audit Blockchain</div>
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              <span className="text-purple-400 font-bold">85% code reuse</span> between products → 
              R&D efficiency + faster innovation cycles
            </p>
          </div>
        </div>
      </motion.div>

      {/* Revenue Synergies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 grid grid-cols-3 gap-4 text-center"
      >
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-accent">60%</div>
          <div className="text-xs text-ink-tertiary mt-1">Revenue from HCS-U7</div>
          <div className="text-xs text-ink-secondary">(Enterprise SaaS)</div>
        </div>
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-success">40%</div>
          <div className="text-xs text-ink-tertiary mt-1">Revenue from HCS-SHIELD</div>
          <div className="text-xs text-ink-secondary">(Defense/Critical)</div>
        </div>
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-purple-400">€7.5M</div>
          <div className="text-xs text-ink-tertiary mt-1">Combined ARR Y3</div>
          <div className="text-xs text-ink-secondary">(dual revenue streams)</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

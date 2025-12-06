'use client';

import { motion } from 'framer-motion';

interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  delay?: number;
  highlighted?: boolean;
}

export function PricingTier({ name, price, features, delay = 0, highlighted = false }: PricingTierProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`border p-6 ${highlighted ? 'border-accent bg-accent-muted' : 'border-border'}`}
    >
      <h3 className="text-xs uppercase tracking-wider font-bold text-ink mb-2">
        {name}
      </h3>
      <p className="font-mono text-2xl font-bold text-ink mb-4">{price}</p>
      <div className="h-px bg-border mb-4" />
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-ink-secondary">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

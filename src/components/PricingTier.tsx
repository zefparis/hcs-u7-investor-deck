'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { CyberCard } from '@/components/CyberComponents';

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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="h-full"
    >
      <CyberCard 
        glow={highlighted}
        className={clsx(
          "h-full flex flex-col transition-all duration-300",
          highlighted 
            ? "border-accent bg-accent/5 shadow-[0_0_20px_rgba(0,240,255,0.1)]" 
            : "hover:border-accent/50 hover:bg-surface-elevated"
        )}
      >
        <div className="mb-6">
          <h3 className={clsx(
            "text-xs uppercase tracking-wider font-bold mb-2",
            highlighted ? "text-accent text-glow" : "text-ink-secondary"
          )}>
            {name}
          </h3>
          <p className="font-mono text-3xl font-bold text-white text-glow">{price}</p>
        </div>
        
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-6" />
        
        <ul className="space-y-3 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className={clsx(
                "w-4 h-4 mt-0.5 shrink-0",
                highlighted ? "text-accent" : "text-ink-tertiary"
              )} />
              <span className={clsx(
                highlighted ? "text-ink" : "text-ink-secondary"
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {highlighted && (
          <div className="mt-6 pt-4 border-t border-accent/20">
            <button className="w-full py-2 bg-accent/10 hover:bg-accent/20 border border-accent/50 text-accent font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer">
              Select Plan
            </button>
          </div>
        )}
      </CyberCard>
    </motion.div>
  );
}

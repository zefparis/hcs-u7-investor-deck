'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FunnelItem {
  label: string;
  value: string;
  description: string;
  width: string;
}

interface FunnelChartProps {
  items: FunnelItem[];
}

export function FunnelChart({ items }: FunnelChartProps) {
  return (
    <div className="space-y-6 relative">
      {/* Background connector line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-accent/30 to-transparent" />

      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative group"
          style={{ paddingLeft: `${index * 40}px` }}
        >
          {/* Connector to main line */}
          <div 
            className="absolute left-0 top-1/2 h-px bg-accent/30 transition-all group-hover:bg-accent/70"
            style={{ width: `${index * 40}px` }}
          />

          <div
            className="bg-surface-card border-l-2 border-accent py-4 px-6 relative overflow-hidden group-hover:bg-surface-elevated transition-colors"
            style={{ width: item.width }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="text-xs uppercase tracking-wider text-accent font-mono">
                  {item.label}
                </span>
                <span className="font-mono text-2xl font-bold text-white text-glow">
                  {item.value}
                </span>
              </div>
              <p className="text-sm text-ink-secondary group-hover:text-white transition-colors">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

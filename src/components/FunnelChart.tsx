'use client';

import { motion } from 'framer-motion';

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
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative"
          style={{ paddingLeft: `${index * 40}px` }}
        >
          <div
            className="bg-accent-muted border-l-2 border-accent py-4 px-6"
            style={{ width: item.width }}
          >
            <div className="flex items-baseline gap-4 mb-1">
              <span className="text-xs uppercase tracking-wider text-ink-tertiary">
                {item.label}
              </span>
              <span className="font-mono text-xl font-bold text-ink">
                {item.value}
              </span>
            </div>
            <p className="text-sm text-ink-secondary">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

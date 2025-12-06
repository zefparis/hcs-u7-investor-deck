'use client';

import { motion } from 'framer-motion';

interface BarChartItem {
  label: string;
  value: number;
  displayValue: string;
  subItems?: string[];
}

interface BarChartProps {
  items: BarChartItem[];
  maxValue: number;
}

export function BarChart({ items, maxValue }: BarChartProps) {
  return (
    <div className="flex items-end justify-between gap-8 h-48">
      {items.map((item, index) => (
        <div key={item.label} className="flex-1 flex flex-col items-center">
          <span className="font-mono text-xl md:text-2xl font-bold text-ink mb-2">
            {item.displayValue}
          </span>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(item.value / maxValue) * 100}%` }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            className="w-full bg-accent rounded-t"
            style={{ minHeight: '8px' }}
          />
          <span className="text-sm font-medium text-ink mt-3">{item.label}</span>
          {item.subItems && (
            <div className="mt-2 space-y-1">
              {item.subItems.map((sub, i) => (
                <p key={i} className="text-xs text-ink-secondary text-center">{sub}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

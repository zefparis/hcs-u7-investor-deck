'use client';

import { motion } from 'framer-motion';

interface TestCardProps {
  name: string;
  year: string;
  line1: string;
  line2: string;
  delay?: number;
}

export function TestCard({ name, year, line1, line2, delay = 0 }: TestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="border border-border p-4 md:p-6"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-xs uppercase tracking-wider font-bold text-ink">
          {name}
        </span>
        <span className="font-mono text-xs text-ink-tertiary">{year}</span>
      </div>
      <p className="text-sm text-ink-secondary leading-relaxed">
        {line1}
      </p>
      <p className="text-sm text-ink-secondary leading-relaxed">
        {line2}
      </p>
    </motion.div>
  );
}

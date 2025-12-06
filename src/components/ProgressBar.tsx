'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  year: number;
  rate: number;
  delay?: number;
}

export function ProgressBar({ year, rate, delay = 0 }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-6 md:gap-8">
      <span className="font-mono text-xl md:text-2xl text-ink-secondary w-16 md:w-20">
        {year}
      </span>
      <div className="flex-1 h-2 bg-border rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${rate}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-danger"
        />
      </div>
      <span className="font-mono text-xl md:text-2xl font-bold text-ink w-14 md:w-16 text-right">
        {rate}%
      </span>
    </div>
  );
}

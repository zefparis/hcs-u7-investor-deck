'use client';

import { motion } from 'framer-motion';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'success' | 'danger' | 'accent';
  delay?: number;
}

export function MetricCard({ value, label, description, variant = 'default', delay = 0 }: MetricCardProps) {
  const colorClasses = {
    default: 'text-ink',
    success: 'text-success',
    danger: 'text-danger',
    accent: 'text-accent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col"
    >
      <span className={`font-mono text-4xl md:text-5xl font-bold tracking-tight ${colorClasses[variant]}`}>
        {value}
      </span>
      <span className="text-xs uppercase tracking-wider text-ink-tertiary mt-2">
        {label}
      </span>
      {description && (
        <span className="text-sm text-ink-secondary mt-1">
          {description}
        </span>
      )}
    </motion.div>
  );
}

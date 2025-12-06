'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  items: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Line */}
      <div className="absolute top-4 left-0 right-0 h-px bg-border" />
      
      {/* Items */}
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative pt-8"
          >
            {/* Dot */}
            <div className="absolute top-2 left-0 w-4 h-4 rounded-full bg-accent border-4 border-surface" />
            
            <span className="text-xs uppercase tracking-wider text-ink-tertiary">
              {item.date}
            </span>
            <h4 className="text-sm font-bold text-ink mt-1 mb-2">{item.title}</h4>
            <ul className="space-y-1">
              {item.items.map((text, i) => (
                <li key={i} className="text-xs text-ink-secondary">{text}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

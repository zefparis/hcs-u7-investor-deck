'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

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
    <div className="relative py-8">
      {/* Horizontal Line */}
      <div className="absolute top-12 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />
      
      {/* Items */}
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={`${item.date}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative pt-16 group"
          >
            {/* Connector Line */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 h-4 w-px bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--accent)] transition-all" />
            
            {/* Dot */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:bg-accent group-hover:shadow-[0_0_15px_var(--accent)] transition-all z-10" />
            
            <div className="text-center">
              <span className="inline-block text-xs uppercase tracking-widest text-accent font-mono mb-2 px-2 py-1 bg-accent/10 border border-accent/20 rounded">
                {item.date}
              </span>
              <h4 className="text-sm font-bold text-white mb-3 group-hover:text-glow transition-all">
                {item.title}
              </h4>
              <ul className="space-y-1.5">
                {item.items.map((text, i) => (
                  <li key={i} className="text-xs text-ink-secondary group-hover:text-ink transition-colors">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

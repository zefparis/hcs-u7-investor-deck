'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BarChartItem {
  label: string;
  value: number | { label: string; value: number; color: string }[];
  displayValue: string;
  subItems?: string[];
}

interface BarChartProps {
  items: BarChartItem[];
  maxValue: number;
}

export function BarChart({ items, maxValue }: BarChartProps) {
  return (
    <div className="flex items-end justify-between gap-4 md:gap-12 h-64 w-full">
      {items.map((item, index) => {
        const isMulti = Array.isArray(item.value);
        
        return (
          <div key={item.label} className="flex-1 flex flex-col items-center group h-full justify-end">
            
            {/* Value Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.2) }}
              className="mb-3 text-center"
            >
              <span className="font-mono text-xl md:text-3xl font-bold text-white text-glow block">
                {item.displayValue}
              </span>
            </motion.div>

            {/* Bar Container */}
            <div className="w-full relative flex-1 flex items-end gap-1">
              {isMulti ? (
                // Multi-bar rendering
                (item.value as { label: string; value: number; color: string }[]).map((subBar, subIndex) => {
                  const heightPercentage = (subBar.value / maxValue) * 100;
                  return (
                    <motion.div
                      key={subIndex}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPercentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + subIndex * 0.1, ease: 'circOut' }}
                      className={clsx(
                        "flex-1 relative overflow-hidden transition-colors border border-transparent hover:border-white/50",
                        subBar.color === 'cyan' ? 'bg-accent/20 border-t-accent' : '',
                        subBar.color === 'red' ? 'bg-danger/20 border-t-danger' : '',
                        subBar.color === 'green' ? 'bg-success/20 border-t-success' : '',
                        subBar.color === 'purple' ? 'bg-purple-500/20 border-t-purple-500' : ''
                      )}
                    >
                       {/* Top glow line */}
                      <div className={clsx(
                        "absolute top-0 left-0 right-0 h-0.5 shadow-[0_0_10px_currentColor]",
                        subBar.color === 'cyan' ? 'bg-accent text-accent' : '',
                        subBar.color === 'red' ? 'bg-danger text-danger' : '',
                        subBar.color === 'green' ? 'bg-success text-success' : '',
                        subBar.color === 'purple' ? 'bg-purple-500 text-purple-400' : ''
                      )} />
                      
                      {/* Fill Gradient */}
                      <div className={clsx(
                        "absolute inset-0 opacity-80 bg-linear-to-t",
                        subBar.color === 'cyan' ? 'from-accent/10 to-accent/40' : '',
                        subBar.color === 'red' ? 'from-danger/10 to-danger/40' : '',
                        subBar.color === 'green' ? 'from-success/10 to-success/40' : '',
                        subBar.color === 'purple' ? 'from-purple-500/10 to-purple-500/40' : ''
                      )} />
                    </motion.div>
                  );
                })
              ) : (
                // Single bar rendering (Legacy support)
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(item.value as number / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.2, ease: 'circOut' }}
                  className={clsx(
                    "w-full bg-surface-elevated border border-accent/30 relative overflow-hidden group-hover:border-accent transition-colors",
                  )}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-accent/20 to-accent/60 opacity-80" />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/20 to-transparent h-[200%] w-full animate-scanline opacity-30" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent shadow-[0_0_10px_var(--accent)]" />
                </motion.div>
              )}
            </div>

            {/* Label & Subitems */}
            <div className="mt-4 text-center w-full">
              <span className="block text-sm font-bold text-ink uppercase tracking-wider mb-2 border-b border-border pb-2 group-hover:text-white transition-colors">
                {item.label}
              </span>
              {item.subItems && (
                <div className="space-y-1">
                  {item.subItems.map((sub, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) + (i * 0.05) }}
                      className="text-[10px] md:text-xs text-ink-tertiary font-mono"
                    >
                      {sub}
                    </motion.p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

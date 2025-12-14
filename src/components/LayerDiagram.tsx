'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Shield, Lock, FileKey, Cpu, Globe, Database, Key } from 'lucide-react';

interface Layer {
  name: string;
  description: string;
  isPatent?: boolean;
}

interface LayerDiagramProps {
  layers: Layer[];
}

export function LayerDiagram({ layers }: LayerDiagramProps) {
  const icons = [Globe, Key, Cpu, Database, Lock, Shield, FileKey];

  return (
    <div className="relative py-8">
      {/* Central line connecting layers */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-accent to-transparent opacity-50" />

      <div className="space-y-4">
        {layers.map((layer, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                "relative flex items-center p-4 border transition-all duration-300 group",
                layer.isPatent 
                  ? "bg-accent/10 border-accent shadow-[0_0_15px_rgba(0,240,255,0.2)]" 
                  : "bg-surface-card border-border hover:border-accent/50 hover:bg-surface-elevated"
              )}
            >
              {/* Connector dot */}
              <div className={clsx(
                "absolute -left-8 w-3 h-3 rounded-full border-2 transition-colors z-10",
                layer.isPatent ? "bg-surface border-accent shadow-[0_0_10px_var(--accent)]" : "bg-surface border-ink-tertiary group-hover:border-accent"
              )} />
              
              {/* Connector line */}
              <div className={clsx(
                "absolute -left-8 w-8 h-px transition-colors",
                layer.isPatent ? "bg-accent" : "bg-ink-tertiary/30 group-hover:bg-accent/50"
              )} />

              <div className={clsx(
                "mr-4 p-2 rounded-lg transition-colors",
                layer.isPatent ? "bg-accent/20 text-accent" : "bg-ink-tertiary/10 text-ink-tertiary group-hover:text-accent group-hover:bg-accent/10"
              )}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <span className={clsx(
                    "text-xs font-mono uppercase tracking-wider mb-1",
                    layer.isPatent ? "text-accent" : "text-ink-tertiary group-hover:text-ink-secondary"
                  )}>
                    {layer.name}
                  </span>
                  {layer.isPatent && (
                    <span className="text-[10px] bg-accent text-surface font-bold px-2 py-0.5 rounded-full animate-pulse">
                      PATENTED
                    </span>
                  )}
                </div>
                <p className={clsx(
                  "font-medium transition-colors",
                  layer.isPatent ? "text-white text-glow" : "text-ink-secondary group-hover:text-white"
                )}>
                  {layer.description}
                </p>
              </div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

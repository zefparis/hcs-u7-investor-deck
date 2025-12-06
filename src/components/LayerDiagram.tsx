'use client';

import { motion } from 'framer-motion';

interface Layer {
  name: string;
  description: string;
  isPatent?: boolean;
}

interface LayerDiagramProps {
  layers: Layer[];
}

export function LayerDiagram({ layers }: LayerDiagramProps) {
  return (
    <div className="space-y-0">
      {layers.map((layer, index) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center py-3 border-b border-border last:border-b-0"
        >
          <span className="font-mono text-xs text-ink-tertiary w-16">
            Layer {index + 1}
          </span>
          <span className="flex-1 h-px bg-border mx-4" />
          <span className={`text-sm ${layer.isPatent ? 'text-accent font-medium' : 'text-ink'}`}>
            {layer.description}
          </span>
          {layer.isPatent && (
            <span className="ml-3 text-xs text-accent bg-accent-muted px-2 py-0.5 rounded">
              Patent
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

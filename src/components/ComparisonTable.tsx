'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  metric: string;
  values: (string | boolean)[];
  highlight?: number;
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-auto"
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-4 pr-4 text-xs uppercase tracking-wider text-ink-tertiary font-mono border-b border-border"></th>
            {headers.map((header, i) => (
              <th
                key={header}
                className={clsx(
                  "py-4 px-4 text-xs uppercase tracking-wider font-mono border-b border-border text-center",
                  i === headers.length - 1 ? 'text-accent text-glow' : 'text-ink-secondary'
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
              className="group hover:bg-white/5 transition-colors"
            >
              <td className="py-4 pr-4 text-sm text-ink-secondary border-b border-border font-medium group-hover:text-white transition-colors">
                {row.metric}
              </td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={clsx(
                    "py-4 px-4 font-mono text-sm text-center border-b border-border transition-all",
                    i === row.values.length - 1
                      ? 'bg-accent/5 border-l border-r border-accent/20 text-white font-bold shadow-[inset_0_0_10px_rgba(0,240,255,0.1)]'
                      : 'text-ink-secondary',
                    row.highlight === i && 'text-success'
                  )}
                >
                  {typeof value === 'boolean' ? (
                    <div className="flex justify-center">
                      {value ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : (
                        <X className="w-5 h-5 text-danger opacity-50" />
                      )}
                    </div>
                  ) : (
                    <span className={clsx(
                      i === row.values.length - 1 && "text-glow"
                    )}>
                      {value}
                    </span>
                  )}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

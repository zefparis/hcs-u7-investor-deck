'use client';

import { motion } from 'framer-motion';

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
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-x-auto"
    >
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 text-xs uppercase tracking-wider text-ink-tertiary font-medium"></th>
            {headers.map((header, i) => (
              <th
                key={header}
                className={`py-3 px-4 text-xs uppercase tracking-wider font-medium ${
                  i === headers.length - 1 ? 'text-accent' : 'text-ink-tertiary'
                }`}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
              className="border-b border-border"
            >
              <td className="py-3 pr-4 text-sm text-ink-secondary">{row.metric}</td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={`py-3 px-4 font-mono text-sm ${
                    i === row.values.length - 1
                      ? 'text-accent font-bold'
                      : row.highlight === i
                      ? 'text-success'
                      : 'text-ink-secondary'
                  }`}
                >
                  {typeof value === 'boolean' ? (
                    value ? (
                      <span className="text-success">&#10003;</span>
                    ) : (
                      <span className="text-danger">&#10007;</span>
                    )
                  ) : (
                    value
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

'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Award, Shield, Lock, FileCheck } from 'lucide-react';

export function SlideIP() {
  const patents = [
    {
      number: 'FR2514274',
      title: 'HCS System & Signature',
      status: 'RECEVABLE',
      filed: 'Dec 2024',
      scope: [
        'Cognitive biometric authentication method',
        'QSIG signature algorithm',
        'Time-window rotation system',
        'Multi-test aggregation',
        'Code generation & validation'
      ],
      protection: '20 years',
      color: 'cyan'
    },
    {
      number: 'FR2514546',
      title: 'Celestial Entropy Generation',
      status: 'RECEVABLE',
      filed: 'Dec 2024',
      scope: [
        'Astronomical entropy source',
        'Planetary position calculation',
        'Deterministic CSPRNG',
        'Cryptographic enhancement',
        'Hybrid entropy mixing'
      ],
      protection: '20 years',
      color: 'purple'
    }
  ];

  const moat = [
    {
      icon: Award,
      title: 'Patent Protection',
      desc: '20-year exclusive rights',
      impact: 'Legal moat',
      color: 'text-warning'
    },
    {
      icon: Shield,
      title: 'Technical Complexity',
      desc: '8-layer crypto architecture',
      impact: '5-7 years replication',
      color: 'text-accent'
    },
    {
      icon: Lock,
      title: 'Proprietary Algorithms',
      desc: 'QSIG, B3, Hieroglyphic Shield',
      impact: 'Trade secrets',
      color: 'text-success'
    },
    {
      icon: FileCheck,
      title: 'First-Mover',
      desc: 'Cognitive auth pioneer',
      impact: 'Brand recognition',
      color: 'text-purple-400'
    }
  ];

  return (
    <SlideLayout title="Intellectual Property" subtitle="20-year patent protection moat">
      {/* Patents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {patents.map((patent, idx) => (
          <motion.div
            key={patent.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`border ${patent.color === 'cyan' ? 'border-accent bg-accent/5' : 'border-purple-500 bg-purple-500/5'} p-6 rounded-lg`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold font-mono ${patent.color === 'cyan' ? 'text-accent' : 'text-purple-400'}`}>
                  {patent.number}
                </h3>
                <p className="text-sm text-ink-secondary mt-1">{patent.title}</p>
              </div>
              <div className="px-3 py-1 bg-success/20 border border-success rounded text-success font-mono text-xs">
                {patent.status}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-ink-tertiary">
                <span className="font-semibold">Filed:</span> {patent.filed}
                {' • '}
                <span className="font-semibold">Protection:</span> {patent.protection}
              </div>

              <div>
                <div className="text-sm font-semibold text-ink mb-2">Scope:</div>
                <ul className="space-y-1">
                  {patent.scope.map((item, i) => (
                    <li key={i} className="text-xs text-ink-secondary flex items-start gap-2">
                      <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${patent.color === 'cyan' ? 'bg-accent' : 'bg-purple-400'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Moat Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-ink mb-4">Competitive Moat</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moat.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="border border-border bg-surface-elevated p-4 rounded-lg"
              >
                <Icon className={`w-6 h-6 ${item.color} mb-3`} />
                <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                <p className="text-xs text-ink-tertiary mt-1">{item.desc}</p>
                <div className={`text-xs font-mono mt-2 ${item.color}`}>
                  → {item.impact}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Extensions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 p-4 border border-border bg-surface-elevated rounded-lg"
      >
        <h4 className="text-sm font-bold text-ink mb-2">Patent Extensions Roadmap</h4>
        <div className="flex items-center gap-8 text-xs text-ink-tertiary">
          <div>
            <span className="text-accent font-bold">Q2 2025:</span> European Patent Office (EPO)
          </div>
          <div>
            <span className="text-success font-bold">Q3 2025:</span> US Patent Office (USPTO)
          </div>
          <div>
            <span className="text-purple-400 font-bold">Q4 2025:</span> Japan, China, Korea
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

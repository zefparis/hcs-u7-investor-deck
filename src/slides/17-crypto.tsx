'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, Lock, Hash, Zap } from 'lucide-react';

export function SlideCrypto() {
  const algorithms = [
    {
      icon: Shield,
      name: 'QSIG',
      title: 'Quantum-Safe Signature',
      tech: 'HMAC-SHA256 + Time Windows',
      features: [
        'Rotation 30s',
        'Timing-safe validation',
        'Patent FR2514274'
      ],
      color: 'cyan'
    },
    {
      icon: Hash,
      name: 'B3',
      title: 'BLAKE3 Canonical Hash',
      tech: 'Modern cryptographic hash',
      features: [
        '3x faster SHA-256',
        'Collision-resistant',
        'Code canonicalization'
      ],
      color: 'green'
    },
    {
      icon: Lock,
      name: 'Hieroglyphic Shield',
      title: 'Memory-Hard Encryption',
      tech: 'scrypt + AES-256-GCM',
      features: [
        '16 MB memory cost',
        '50-100ms derivation',
        'Anti-brute-force'
      ],
      color: 'purple'
    },
    {
      icon: Zap,
      name: 'Celestial Entropy',
      title: 'Astronomical CSPRNG',
      tech: 'Planetary positions + CSPRNG',
      features: [
        '512 bits entropy',
        'Patent FR2514546',
        'Deterministic + secure'
      ],
      color: 'yellow'
    }
  ];

  return (
    <SlideLayout title="Cryptographic Innovation" subtitle="Proprietary algorithms securing HCS-U7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {algorithms.map((algo, idx) => {
          const Icon = algo.icon;
          const colorClasses = {
            cyan: 'border-accent bg-accent/5 text-accent',
            green: 'border-success bg-success/5 text-success',
            purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
            yellow: 'border-warning bg-warning/5 text-warning'
          };
          
          // Fallback for purple if not defined in globals, though prompt uses it.
          // Adjusting to use theme colors where possible or hardcoded values if needed.
          const colors = colorClasses[algo.color as keyof typeof colorClasses];

          return (
            <motion.div
              key={algo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`border ${colors} p-6 rounded-lg`}
            >
              <div className="flex items-start gap-4">
                <Icon className={`w-8 h-8`} />
                <div className="flex-1">
                  <h3 className={`text-xl font-bold font-mono`}>
                    {algo.name}
                  </h3>
                  <p className="text-sm text-ink-secondary mt-1">{algo.title}</p>
                  <p className="text-xs text-ink-tertiary font-mono mt-2 bg-surface-elevated px-2 py-1 rounded inline-block">
                    {algo.tech}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {algo.features.map((feature, i) => (
                      <li key={i} className="text-sm text-ink-secondary flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-current opacity-70`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 border border-accent/30 bg-surface-elevated rounded-lg"
      >
        <h4 className="text-lg font-bold text-accent mb-3">8-Layer Defense Architecture</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="text-ink-secondary">1. QSIG + B3 Dual Signature</div>
          <div className="text-ink-secondary">2. Hieroglyphic Shield</div>
          <div className="text-ink-secondary">3. Celestial Entropy</div>
          <div className="text-ink-secondary">4. AES-256-GCM</div>
          <div className="text-ink-secondary">5. Timing-Safe Validation</div>
          <div className="text-ink-secondary">6. Proof-of-Work</div>
          <div className="text-ink-secondary">7. Rate Limiting</div>
          <div className="text-ink-secondary">8. Audit Blockchain</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

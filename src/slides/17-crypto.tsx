'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, Lock, Hash, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideCrypto() {
  const { language } = useLanguage();
  const tr = translations.crypto;

  const algorithms = [
    {
      icon: Shield,
      ...t(tr.algorithms, language)[0],
      color: 'cyan'
    },
    {
      icon: Hash,
      ...t(tr.algorithms, language)[1],
      color: 'green'
    },
    {
      icon: Lock,
      ...t(tr.algorithms, language)[2],
      color: 'purple'
    },
    {
      icon: Zap,
      ...t(tr.algorithms, language)[3],
      color: 'yellow'
    }
  ];

  const layers = t(tr.layers, language);

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {algorithms.map((algo, idx) => {
          const Icon = algo.icon;
          const colorClasses = {
            cyan: 'border-accent bg-accent/5 text-accent',
            green: 'border-success bg-success/5 text-success',
            purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
            yellow: 'border-warning bg-warning/5 text-warning'
          };
          
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
        <h4 className="text-lg font-bold text-accent mb-3">{t(tr.architectureTitle, language)}</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {layers.map((layer, idx) => (
            <div key={idx} className="text-ink-secondary">{layer}</div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
}

'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideGTM() {
  const { language } = useLanguage();
  const tr = translations.gtm;
  const phases = tr.phases[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="border border-border p-6"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-ink-tertiary">
                {phase.phase}
              </span>
              <span className="font-mono text-xs text-ink-tertiary">{phase.period}</span>
            </div>
            <h3 className="text-xl font-bold text-ink mb-4">{phase.title}</h3>
            <div className="h-px bg-border mb-4" />
            <ul className="space-y-2 mb-6">
              {phase.items.map((item) => (
                <li key={item} className="text-sm text-ink-secondary">{item}</li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-ink-tertiary">→</span>
              <span className="font-mono text-lg font-bold text-accent">{phase.target}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-l-2 border-accent pl-4"
      >
        <span className="text-xs uppercase tracking-wider text-ink-tertiary">ICP</span>
        <p className="text-sm text-ink-secondary mt-1">
          {t(tr.icp, language)}
        </p>
      </motion.div>
    </SlideLayout>
  );
}

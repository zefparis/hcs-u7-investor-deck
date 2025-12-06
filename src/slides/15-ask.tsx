'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideAsk() {
  const { language } = useLanguage();
  const tr = translations.ask;
  const useOfFunds = tr.useOfFunds[language];
  const terms = tr.terms[language];
  const milestones = tr.milestones[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xs uppercase tracking-wider text-ink-tertiary mb-6">
            {t(tr.fundsLabel, language)}
          </h3>
          <div className="space-y-4">
            {useOfFunds.map((item) => (
              <div key={item.category} className="flex items-center gap-4">
                <span className="font-mono text-sm text-accent w-10">{item.percent}</span>
                <span className="font-mono text-sm text-ink w-16">{item.amount}</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-ink">{item.category}</span>
                  <span className="text-xs text-ink-secondary ml-2">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Terms + Milestones */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="border border-border p-6">
            <h3 className="text-xs uppercase tracking-wider text-ink-tertiary mb-4">
              {t(tr.termsLabel, language)}
            </h3>
            <div className="space-y-2">
              {terms.map((term) => (
                <div key={term.label} className="flex justify-between">
                  <span className="text-sm text-ink-secondary">{term.label}</span>
                  <span className="font-mono text-sm font-bold text-ink">{term.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-ink-tertiary mb-4">
              {t(tr.milestonesLabel, language)}
            </h3>
            <ul className="space-y-2">
              {milestones.map((milestone) => (
                <li key={milestone} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-ink">{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

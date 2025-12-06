'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideSolution() {
  const { language } = useLanguage();
  const tr = translations.solution;
  const traditional = tr.traditional[language];
  const cognitive = tr.cognitive[language];
  const stats = tr.stats[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        {/* Traditional - 40% */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <h3 className="text-xs uppercase tracking-wider text-ink-tertiary mb-4">
            {t(tr.traditionalLabel, language)}
          </h3>
          <div className="space-y-3">
            {traditional.map((item) => (
              <div key={item.test} className="border-l-2 border-danger pl-4">
                <p className="text-sm text-ink">{item.test}</p>
                <p className="text-xs text-danger">{item.result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cognitive - 60% */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3"
        >
          <h3 className="text-xs uppercase tracking-wider text-accent mb-4">
            {t(tr.cognitiveLabel, language)}
          </h3>
          <div className="space-y-3">
            {cognitive.map((item) => (
              <div key={item.test} className="border-l-2 border-accent pl-4">
                <p className="text-sm text-ink">{item.test}</p>
                <p className="text-xs text-success">{item.result}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-between gap-4 p-6 bg-accent-muted border-l-2 border-accent"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="font-mono text-2xl font-bold text-ink">{stat.value}</span>
            <span className="block text-xs text-ink-secondary mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}

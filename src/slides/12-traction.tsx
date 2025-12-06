'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { Timeline } from '@/components/Timeline';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideTraction() {
  const { language } = useLanguage();
  const tr = translations.traction;
  const timeline = tr.timeline[language];
  const assets = tr.assets[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <Timeline items={timeline} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <h4 className="text-xs uppercase tracking-wider text-ink-tertiary mb-4">
          {t(tr.assetsLabel, language)}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <div key={asset.label} className="border border-border p-4 text-center">
              <span className="font-mono text-2xl font-bold text-accent">{asset.value}</span>
              <span className="block text-xs text-ink-secondary mt-1">{asset.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
}

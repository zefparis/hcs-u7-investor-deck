'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideInsight() {
  const { language } = useLanguage();
  const tr = translations.insight;

  return (
    <SlideLayout centered>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
          {t(tr.title1, language)}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent mb-16">
          {t(tr.title2, language)}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-ink-secondary leading-relaxed max-w-2xl mx-auto"
        >
          {t(tr.description, language)}
        </motion.p>
      </motion.div>
    </SlideLayout>
  );
}

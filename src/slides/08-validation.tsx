'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ComparisonTable } from '@/components/ComparisonTable';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideValidation() {
  const { language } = useLanguage();
  const tr = translations.validation;
  const headers = tr.headers[language];
  const rows = tr.rows[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <ComparisonTable headers={headers} rows={rows} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-accent-muted border-l-2 border-accent"
      >
        <p className="text-sm text-ink">
          {t(tr.callout, language)}
        </p>
      </motion.div>

      <footer className="absolute bottom-8 left-20 text-xs text-ink-tertiary">
        {t(tr.source, language)}
      </footer>
    </SlideLayout>
  );
}

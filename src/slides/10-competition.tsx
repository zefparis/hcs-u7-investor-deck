'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ComparisonTable } from '@/components/ComparisonTable';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideCompetition() {
  const { language } = useLanguage();
  const tr = translations.competition;
  const headers = ['reCAPTCHA', 'hCaptcha', 'Cloudflare', 'HUMAN', 'HCS-U7'];
  const rows = tr.rows[language];
  const moats = tr.moats[language];

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
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {moats.map((moat) => (
          <div key={moat.title} className="border-l-2 border-accent pl-4">
            <h4 className="text-xs uppercase tracking-wider text-accent mb-1">
              {moat.title}
            </h4>
            <p className="text-sm text-ink-secondary">{moat.description}</p>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}

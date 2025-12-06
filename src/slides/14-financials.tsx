'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { BarChart } from '@/components/BarChart';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideFinancials() {
  const { language } = useLanguage();
  const tr = translations.financials;
  const chartData = tr.chartData[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <BarChart items={chartData} maxValue={3.5} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 p-6 bg-accent-muted border-l-2 border-accent"
      >
        <span className="text-xs uppercase tracking-wider text-ink-tertiary">
          {t(tr.profitLabel, language)}
        </span>
        <p className="text-sm text-ink mt-2">
          {t(tr.profitText, language)}
        </p>
      </motion.div>
    </SlideLayout>
  );
}

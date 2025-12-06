'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { FunnelChart } from '@/components/FunnelChart';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideMarket() {
  const { language } = useLanguage();
  const tr = translations.market;
  const funnel = tr.funnel[language];
  const drivers = tr.drivers[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <FunnelChart items={funnel} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 flex flex-wrap gap-8"
      >
        <h4 className="text-xs uppercase tracking-wider text-ink-tertiary w-full mb-2">
          {t(tr.driversLabel, language)}
        </h4>
        {drivers.map((driver) => (
          <div key={driver.label} className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-bold text-accent">{driver.value}</span>
            <span className="text-sm text-ink-secondary">{driver.label}</span>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}

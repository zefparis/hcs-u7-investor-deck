'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { PricingTier } from '@/components/PricingTier';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideBusiness() {
  const { language } = useLanguage();
  const tr = translations.business;
  const tiers = tr.tiers[language];
  const economics = tr.economics[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {tiers.map((tier, i) => (
          <PricingTier
            key={tier.name}
            name={tier.name}
            price={tier.price}
            features={tier.features}
            highlighted={tier.highlighted}
            delay={i * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-between gap-6 p-6 border border-border"
      >
        {economics.map((item) => (
          <div key={item.label} className="text-center">
            <span className="font-mono text-xl font-bold text-ink">{item.value}</span>
            <span className="block text-xs text-ink-tertiary mt-1">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}

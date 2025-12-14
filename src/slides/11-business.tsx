'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { PricingTier } from '@/components/PricingTier';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { TrendingUp, Percent, Wallet, Target } from 'lucide-react';

export function SlideBusiness() {
  const { language } = useLanguage();
  const tr = translations.business;
  const tiers = tr.tiers[language];
  const economics = tr.economics[language];

  const economicsIcons = [Wallet, Percent, TrendingUp, Target];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 h-[450px]">
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {economics.map((item, i) => {
          const Icon = economicsIcons[i % economicsIcons.length];
          return (
            <CyberCard key={item.label} glow className="flex flex-col items-center justify-center p-4 bg-surface-elevated/50">
              <Icon className="w-6 h-6 text-accent mb-2 opacity-80" />
              <span className="font-mono text-xl md:text-2xl font-bold text-white text-glow mb-1">
                {item.value}
              </span>
              <span className="text-xs text-ink-secondary uppercase tracking-wider text-center">
                {item.label}
              </span>
            </CyberCard>
          );
        })}
      </motion.div>
    </SlideLayout>
  );
}

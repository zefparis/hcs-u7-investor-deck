'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { Timeline } from '@/components/Timeline';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { Layers, Globe, Code, FileCode } from 'lucide-react';

export function SlideTraction() {
  const { language } = useLanguage();
  const tr = translations.traction;
  const timeline = tr.timeline[language];
  const assets = tr.assets[language];

  const assetIcons = [FileCode, Layers, Code, Globe];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Execution Velocity & Assets"
      />

      <div className="mt-8 mb-16">
        <Timeline items={timeline} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="text-xs uppercase tracking-wider text-ink-tertiary mb-6 flex items-center gap-2">
          <span className="w-8 h-px bg-accent"></span>
          {t(tr.assetsLabel, language)}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {assets.map((asset, i) => {
            const Icon = assetIcons[i % assetIcons.length];
            return (
              <CyberCard key={asset.label} glow className="p-4 text-center group bg-surface-elevated/50">
                <div className="flex justify-center mb-3">
                  <Icon className="w-6 h-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="block font-mono text-3xl font-bold text-white text-glow mb-1">
                  {asset.value}
                </span>
                <span className="block text-xs text-ink-secondary uppercase tracking-wider">
                  {asset.label}
                </span>
              </CyberCard>
            );
          })}
        </div>
      </motion.div>
    </SlideLayout>
  );
}

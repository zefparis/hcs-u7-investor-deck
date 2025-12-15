'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { Timeline } from '@/components/Timeline';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { Layers, Globe, Code, FileCode, Route, Box, Package, Server } from 'lucide-react';

export function SlideTraction() {
  const { language } = useLanguage();
  const tr = translations.traction;
  const timeline = tr.timeline[language];
  const assets = tr.assets[language];
  const maturity = tr.maturity[language];

  const assetIcons = [FileCode, Layers, Code, Globe];
  const maturityIcons = [Route, Box, Package, Server];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="mt-6 mb-8">
        <Timeline items={timeline} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-xs uppercase tracking-wider text-ink-tertiary mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            {t(tr.assetsLabel, language)}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {assets.map((asset: { value: string; label: string }, i: number) => {
              const Icon = assetIcons[i % assetIcons.length];
              return (
                <CyberCard key={asset.label} glow className="p-3 text-center group bg-surface-elevated/50">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-5 h-5 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="block font-mono text-xl font-bold text-white text-glow mb-1">
                    {asset.value}
                  </span>
                  <span className="block text-[10px] text-ink-secondary uppercase tracking-wider leading-tight">
                    {asset.label}
                  </span>
                </CyberCard>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h4 className="text-xs uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-purple-500"></span>
            {t(tr.maturityLabel, language)}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {maturity.map((item: { value: string; label: string; sub: string }, i: number) => {
              const Icon = maturityIcons[i % maturityIcons.length];
              return (
                <div key={item.label} className="p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg text-center">
                  <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <span className="block font-mono text-xl font-bold text-white">{item.value}</span>
                  <span className="block text-[10px] text-ink font-semibold mt-1">{item.label}</span>
                  <span className="block text-[9px] text-ink-tertiary">{item.sub}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

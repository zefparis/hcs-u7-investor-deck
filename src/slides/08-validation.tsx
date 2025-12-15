'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ComparisonTable } from '@/components/ComparisonTable';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { CheckCircle2, Shield, Target, Zap, Bug } from 'lucide-react';

export function SlideValidation() {
  const { language } = useLanguage();
  const tr = translations.validation;
  const headers = tr.headers[language];
  const rows = tr.rows[language];
  const operational = tr.operational[language];

  const opIcons = [Shield, Target, Zap, Bug];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00FF9D">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ComparisonTable headers={headers} rows={rows} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">
            {t(tr.operationalTitle, language)}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {operational.map((item: { value: string; label: string; sub: string }, idx: number) => {
              const Icon = opIcons[idx % opIcons.length];
              return (
                <div key={item.label} className="p-3 border border-accent/20 bg-accent/5 rounded-lg text-center">
                  <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="font-mono text-2xl font-bold text-white text-glow">{item.value}</div>
                  <div className="text-xs text-ink font-semibold mt-1">{item.label}</div>
                  <div className="text-[10px] text-ink-tertiary">{item.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg">
            <h5 className="text-xs font-bold text-purple-400 mb-2">{t(tr.siegeWall.title, language)}</h5>
            <div className="flex flex-wrap gap-2">
              {tr.siegeWall.attacks[language].map((attack: string, idx: number) => (
                <span key={idx} className="text-[10px] font-mono bg-surface px-2 py-1 rounded text-ink-secondary">
                  {attack}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <CyberCard glow className="bg-success/5 border-success/30">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-1" />
            <div>
              <p className="text-lg text-white font-medium mb-2">
                {t(tr.confirmed, language)}
              </p>
              <p className="text-ink-secondary leading-relaxed text-sm">
                {t(tr.callout, language)}
              </p>
            </div>
          </div>
        </CyberCard>
      </motion.div>

      <footer className="w-full flex justify-end mt-auto pt-4">
        <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          {t(tr.source, language)}
        </div>
      </footer>
    </SlideLayout>
  );
}

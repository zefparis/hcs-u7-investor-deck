'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { LayerDiagram } from '@/components/LayerDiagram';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { FileCheck, ShieldCheck } from 'lucide-react';

export function SlideTechnology() {
  const { language } = useLanguage();
  const tr = translations.technology;
  const layers = tr.layers[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <LayerDiagram layers={layers} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 sticky top-8"
        >
          <CyberCard glow className="border-accent/30 bg-accent/5">
            <div className="flex items-start gap-3 mb-2">
              <FileCheck className="w-5 h-5 text-accent" />
              <h4 className="text-xs uppercase tracking-wider text-accent font-bold mt-0.5">
                {t(tr.patent1, language)}
              </h4>
            </div>
            <p className="font-mono text-lg font-bold text-white mb-1">FR2514274</p>
            <p className="text-sm text-ink-secondary">{t(tr.patent1Desc, language)}</p>
          </CyberCard>

          <CyberCard glow className="border-accent/30 bg-accent/5">
            <div className="flex items-start gap-3 mb-2">
              <FileCheck className="w-5 h-5 text-accent" />
              <h4 className="text-xs uppercase tracking-wider text-accent font-bold mt-0.5">
                {t(tr.patent2, language)}
              </h4>
            </div>
            <p className="font-mono text-lg font-bold text-white mb-1">FR2514546</p>
            <p className="text-sm text-ink-secondary">{t(tr.patent2Desc, language)}</p>
          </CyberCard>

          <div className="flex items-center gap-3 p-4 border border-success/20 bg-success/5 rounded-lg backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-success" />
            <div>
              <p className="text-xs text-success font-bold uppercase tracking-wider">{t(tr.statusLabel, language)}</p>
              <p className="text-sm text-ink-secondary">
                {t(tr.status, language)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

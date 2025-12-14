'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ComparisonTable } from '@/components/ComparisonTable';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { CheckCircle2 } from 'lucide-react';

export function SlideValidation() {
  const { language } = useLanguage();
  const tr = translations.validation;
  const headers = tr.headers[language];
  const rows = tr.rows[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00FF9D">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Scientific & Adversarial Validation"
      />

      <div className="mt-8 mb-12">
        <ComparisonTable headers={headers} rows={rows} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <CyberCard glow className="bg-success/5 border-success/30">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-1" />
            <div>
              <p className="text-lg text-white font-medium mb-2">
                "Frontier Model Resistance Confirmed"
              </p>
              <p className="text-ink-secondary leading-relaxed">
                {t(tr.callout, language)}
              </p>
            </div>
          </div>
        </CyberCard>
      </motion.div>

      <footer className="w-full flex justify-end mt-auto pt-8">
        <div className="flex items-center gap-2 text-xs text-ink-tertiary font-mono">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          {t(tr.source, language)}
        </div>
      </footer>
    </SlideLayout>
  );
}

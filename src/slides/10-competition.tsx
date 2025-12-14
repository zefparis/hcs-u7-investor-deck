'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ComparisonTable } from '@/components/ComparisonTable';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { Shield, Scale, Zap } from 'lucide-react';

export function SlideCompetition() {
  const { language } = useLanguage();
  const tr = translations.competition;
  const headers = ['reCAPTCHA', 'hCaptcha', 'Cloudflare', 'HUMAN', 'HCS-U7'];
  const rows = tr.rows[language];
  const moats = tr.moats[language];

  const moatIcons = [Scale, Shield, Zap];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Competitive Landscape & Moats"
      />

      <div className="mt-8 mb-12">
        <ComparisonTable headers={headers} rows={rows} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {moats.map((moat, i) => {
          const Icon = moatIcons[i % moatIcons.length];
          return (
            <CyberCard key={moat.title} glow className="h-full">
              <div className="flex items-start gap-3 mb-3">
                <Icon className="w-5 h-5 text-accent" />
                <h4 className="text-xs uppercase tracking-wider text-accent font-bold mt-0.5">
                  {moat.title}
                </h4>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {moat.description}
              </p>
            </CyberCard>
          );
        })}
      </motion.div>
    </SlideLayout>
  );
}

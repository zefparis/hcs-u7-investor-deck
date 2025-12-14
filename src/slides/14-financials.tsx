'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { BarChart } from '@/components/BarChart';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { TrendingUp, ArrowRight } from 'lucide-react';

export function SlideFinancials() {
  const { language } = useLanguage();
  const tr = translations.financials;
  const chartData = tr.chartData[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Financial Projections"
      />

      <div className="mt-8 mb-12">
        <BarChart items={chartData} maxValue={3.5} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <CyberCard glow className="bg-accent/5 border-accent/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-24 h-24 text-accent" />
          </div>
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full border border-accent/30">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-ink-tertiary block mb-1">
                {t(tr.profitLabel, language)}
              </span>
              <p className="text-lg font-medium text-white flex items-center gap-2">
                {t(tr.profitText, language)}
                <ArrowRight className="w-4 h-4 text-accent animate-pulse" />
              </p>
            </div>
          </div>
        </CyberCard>
      </motion.div>
    </SlideLayout>
  );
}

'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard, CyberProgressBar } from '@/components/CyberComponents';
import { PieChart, FileText, CheckCircle2 } from 'lucide-react';

export function SlideAsk() {
  const { language } = useLanguage();
  const tr = translations.ask;
  const useOfFunds = tr.useOfFunds[language];
  const terms = tr.terms[language];
  const milestones = tr.milestones[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00FF9D">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Investment Opportunity"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm uppercase tracking-wider text-ink-tertiary mb-6 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-accent" />
            {t(tr.fundsLabel, language)}
          </h3>
          <div className="space-y-6">
            {useOfFunds.map((item, idx) => {
              // Parse percentage string to number
              const value = parseInt(item.percent.replace('%', ''));
              let color: 'accent' | 'success' | 'warning' | 'danger' = 'accent';
              if (idx === 1) color = 'success';
              if (idx === 2) color = 'warning';
              if (idx === 3) color = 'danger';

              return (
                <div key={item.category}>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-sm font-bold text-white block">{item.category}</span>
                      <span className="text-xs text-ink-tertiary">{item.description}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm text-accent block">{item.amount}</span>
                    </div>
                  </div>
                  <CyberProgressBar 
                    value={value} 
                    label="" 
                    color={color}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Terms + Milestones */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <CyberCard glow className="bg-surface-elevated/30 border-accent/20">
            <h3 className="text-xs uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t(tr.termsLabel, language)}
            </h3>
            <div className="space-y-3">
              {terms.map((term) => (
                <div key={term.label} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-sm text-ink-secondary">{term.label}</span>
                  <span className="font-mono text-sm font-bold text-white text-glow">{term.value}</span>
                </div>
              ))}
            </div>
          </CyberCard>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-ink-tertiary mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              {t(tr.milestonesLabel, language)}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-3 p-3 bg-surface-card border border-white/5 rounded hover:border-success/30 transition-colors group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-success group-hover:shadow-[0_0_8px_var(--success)] transition-all" />
                  <span className="text-sm text-ink-secondary group-hover:text-white transition-colors">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

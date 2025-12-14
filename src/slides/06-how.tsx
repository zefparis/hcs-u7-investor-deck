'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { motion } from 'framer-motion';
import { Activity, Brain, Clock, Cpu, Timer, Zap } from 'lucide-react';

export function SlideHow() {
  const { language } = useLanguage();
  const tr = translations.how;
  const tests = tr.tests[language];

  const icons = [Brain, Cpu, Zap, Activity, Clock, Timer];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="The Biological Firewall"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-8">
        {tests.map((test, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CyberCard glow className="h-full flex flex-col justify-between group hover:bg-accent/5 transition-colors duration-500">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Icon className="w-6 h-6 text-accent opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_10px_var(--accent)] transition-all rounded-full" />
                    <span className="font-mono text-xs text-ink-tertiary">{test.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 tracking-wider group-hover:text-accent transition-colors">
                    {test.name}
                  </h3>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs text-ink-secondary">{test.line1}</p>
                  <p className="text-xs text-ink-secondary">{test.line2}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-accent/20 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_5px_var(--accent)] transition-all" />
              </CyberCard>
            </motion.div>
          );
        })}
      </div>

      <footer className="flex items-center gap-4 text-xs text-ink-tertiary mt-auto border-t border-border pt-4">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
        <span className="font-mono">{t(tr.footer, language)}</span>
      </footer>
    </SlideLayout>
  );
}

'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard, CyberBadge } from '@/components/CyberComponents';
import { CheckCircle2, XCircle, Brain, Lock } from 'lucide-react';

export function SlideSolution() {
  const { language } = useLanguage();
  const tr = translations.solution;
  const traditional = tr.traditional[language];
  const cognitive = tr.cognitive[language];
  const stats = tr.stats[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="The Paradigm Shift: From Task to Cognition"
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        {/* Traditional - 40% */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="text-danger w-5 h-5" />
            <h3 className="text-sm uppercase tracking-wider text-ink-secondary">
              {t(tr.traditionalLabel, language)}
            </h3>
          </div>
          
          {traditional.map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 border border-danger/20 bg-danger/5 rounded-sm relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-danger/50" />
              <p className="text-ink font-bold mb-1">{item.test}</p>
              <p className="text-xs text-danger font-mono">{item.result}</p>
            </div>
          ))}
        </motion.div>

        {/* Cognitive - 60% */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="text-accent w-5 h-5" />
            <h3 className="text-sm uppercase tracking-wider text-accent text-glow">
              {t(tr.cognitiveLabel, language)}
            </h3>
          </div>

          {cognitive.map((item, idx) => (
            <CyberCard 
              key={idx} 
              glow 
              className="py-3 px-5 flex items-center justify-between group hover:bg-accent/5 transition-colors"
            >
              <span className="text-ink font-medium group-hover:text-white transition-colors">
                {item.test}
              </span>
              <CyberBadge variant="glow" className="ml-4 text-[10px]">
                {item.result}
              </CyberBadge>
            </CyberCard>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-surface-card border-t-2 border-accent backdrop-blur-sm"
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono text-glow">
              {stat.value}
            </div>
            <div className="text-xs text-ink-secondary uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
}

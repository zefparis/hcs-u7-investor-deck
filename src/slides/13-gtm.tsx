'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { Rocket, Target, Users, Globe } from 'lucide-react';

export function SlideGTM() {
  const { language } = useLanguage();
  const tr = translations.gtm;
  const phases = tr.phases[language];

  const phaseIcons = [Rocket, Users, Globe];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Go-to-Market Strategy"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {phases.map((phase, i) => {
          const Icon = phaseIcons[i % phaseIcons.length];
          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="h-full"
            >
              <CyberCard glow className="h-full flex flex-col relative overflow-hidden group">
                {/* Background number */}
                <span className="absolute -right-4 -top-4 text-[120px] font-bold text-white/5 font-mono pointer-events-none group-hover:text-accent/10 transition-colors">
                  {i + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-accent/10 rounded border border-accent/20">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-mono text-xs text-ink-tertiary border border-border px-2 py-1 rounded bg-surface">
                      {phase.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <div className="h-px w-12 bg-accent mb-4" />

                  <ul className="space-y-3 mb-6 flex-1">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <span className="text-accent mt-1.5 text-[10px]">▶</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-xs text-ink-tertiary uppercase tracking-wider mb-1">Target</p>
                    <p className="font-mono text-xl font-bold text-accent text-glow">{phase.target}</p>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative"
      >
        <CyberCard className="bg-surface-elevated/50 border-accent/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full border border-accent/30 shrink-0">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-accent font-bold">Ideal Customer Profile (ICP)</span>
              <p className="text-sm md:text-base text-ink mt-1">
                {t(tr.icp, language)}
              </p>
            </div>
          </div>
        </CyberCard>
      </motion.div>
    </SlideLayout>
  );
}

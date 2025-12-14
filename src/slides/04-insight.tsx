'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { GlitchText, CyberCard } from '@/components/CyberComponents';
import { BrainCircuit, Cpu } from 'lucide-react';

export function SlideInsight() {
  const { language } = useLanguage();
  const tr = translations.insight;

  return (
    <SlideLayout centered showMatrixBackground matrixColor="#00F0FF">
      <div className="relative z-10 max-w-5xl w-full">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-danger/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: The Statement */}
          <div className="text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-mono text-ink-secondary mb-2">
                {t(tr.title1, language)}
              </h2>
              <GlitchText 
                text={t(tr.title2, language)} 
                as="h1" 
                className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8"
              />
              <div className="h-1 w-32 bg-linear-to-r from-accent to-transparent" />
            </motion.div>
          </div>

          {/* Right: The Contrast */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CyberCard glow className="bg-surface/50 backdrop-blur-md border-ink-secondary/20">
              <div className="flex flex-col gap-8">
                {/* Bot Representation */}
                <div className="flex items-center gap-4 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="p-4 bg-ink-secondary/10 rounded-lg">
                    <Cpu className="w-8 h-8 text-ink-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-secondary">{t(tr.behAnalysis, language)}</h3>
                    <p className="text-sm text-ink-tertiary">{t(tr.simulated, language)}</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-linear-to-b from-ink-secondary/20 to-accent" />
                </div>

                {/* Human Representation */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-accent/20 rounded-lg border border-accent/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                    <BrainCircuit className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white text-glow">{t(tr.cogBio, language)}</h3>
                    <p className="text-sm text-accent-muted">{t(tr.impossible, language)}</p>
                  </div>
                </div>
              </div>
            </CyberCard>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-xl md:text-2xl text-center text-ink-secondary max-w-3xl mx-auto leading-relaxed font-light"
        >
          "{t(tr.description, language)}"
        </motion.p>
      </div>
    </SlideLayout>
  );
}

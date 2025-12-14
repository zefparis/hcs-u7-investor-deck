'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { GlitchText, CyberCard, CyberBadge } from '@/components/CyberComponents';
import { Linkedin, Mail, ExternalLink, Code, Shield, Brain } from 'lucide-react';

export function SlideTeam() {
  const { language } = useLanguage();
  const tr = translations.team;
  const bio = tr.bio[language];

  return (
    <SlideLayout centered showMatrixBackground matrixColor="#00F0FF">
      <div className="relative z-10 w-full max-w-4xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-48 h-48 mb-8 group">
              <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-accent/50 overflow-hidden bg-surface-elevated flex items-center justify-center">
                {/* Placeholder for actual image or avatar */}
                <span className="font-mono text-4xl font-bold text-accent">BB</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-surface-elevated border border-accent p-2 rounded-full">
                <Brain className="w-6 h-6 text-accent" />
              </div>
            </div>

            <GlitchText 
              text="Benjamin BARRERE" 
              as="h1" 
              className="text-4xl md:text-5xl font-bold text-white mb-2 text-center md:text-left"
            />
            <p className="text-xl text-accent font-mono mb-6">{t(tr.role, language)}</p>

            <div className="flex gap-4">
              <CyberBadge variant="outline" className="gap-2">
                <Shield className="w-3 h-3" /> Security
              </CyberBadge>
              <CyberBadge variant="outline" className="gap-2">
                <Code className="w-3 h-3" /> Full-Stack
              </CyberBadge>
            </div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <CyberCard glow className="bg-surface-elevated/30">
              <div className="space-y-4">
                {bio.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">▹</span>
                    <span className="text-ink-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </CyberCard>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-surface-card rounded-lg">
                <p className="text-xs uppercase tracking-wider text-ink-tertiary mb-1">Entity</p>
                <p className="font-bold text-white">IA SOLUTION</p>
                <p className="text-xs text-ink-secondary font-mono">SIRET 438 055 097</p>
              </div>
              <div className="p-4 border border-border bg-surface-card rounded-lg">
                <p className="text-xs uppercase tracking-wider text-ink-tertiary mb-1">Location</p>
                <p className="font-bold text-white">{t(tr.founded, language)}</p>
                <p className="text-xs text-ink-secondary font-mono">FRANCE</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@ia-solution.fr"
                className="flex items-center gap-3 p-3 border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono text-white group-hover:text-accent transition-colors">contact@ia-solution.fr</span>
              </a>
              <a
                href="https://hcs-u7.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono text-white group-hover:text-accent transition-colors">hcs-u7.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center border-t border-white/10 pt-8"
        >
          <p className="text-lg text-ink-secondary italic max-w-2xl mx-auto">
            "{t(tr.tagline, language)}"
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
}

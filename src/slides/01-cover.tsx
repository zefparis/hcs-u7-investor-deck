'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { GlitchText, CyberBadge } from '@/components/CyberComponents';
import { ShieldCheck, Timer, Fingerprint } from 'lucide-react';

export function SlideCover() {
  const { language } = useLanguage();
  const tr = translations.cover;

  return (
    <SlideLayout centered showMatrixBackground matrixColor="#00F0FF">
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo / Title Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-8 bg-accent/20 blur-3xl rounded-full opacity-50 animate-pulse" />
          <GlitchText 
            text="HCS-U7" 
            as="h1" 
            className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/80"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-accent font-mono mb-8 text-center max-w-2xl text-glow"
        >
          {t(tr.subtitle, language)}
        </motion.p>

        {/* Key Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-12 mb-12 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center p-4 border border-accent/20 bg-surface-card/50 backdrop-blur-sm rounded-lg hover:border-accent/50 transition-colors">
            <Fingerprint className="w-8 h-8 text-accent mb-2" />
            <span className="text-3xl font-bold text-white text-glow">98.9%</span>
            <span className="text-xs text-ink-secondary uppercase tracking-wider">Accuracy</span>
          </div>
          <div className="flex flex-col items-center p-4 border border-success/20 bg-surface-card/50 backdrop-blur-sm rounded-lg hover:border-success/50 transition-colors">
            <ShieldCheck className="w-8 h-8 text-success mb-2" />
            <span className="text-3xl font-bold text-white text-glow-success">0%</span>
            <span className="text-xs text-ink-secondary uppercase tracking-wider">Breaches</span>
          </div>
          <div className="flex flex-col items-center p-4 border border-accent/20 bg-surface-card/50 backdrop-blur-sm rounded-lg hover:border-accent/50 transition-colors">
            <Timer className="w-8 h-8 text-accent mb-2" />
            <span className="text-3xl font-bold text-white text-glow">48s</span>
            <span className="text-xs text-ink-secondary uppercase tracking-wider">Auth Time</span>
          </div>
        </motion.div>

        {/* Patents Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <CyberBadge variant="glow">FR2514274</CyberBadge>
          <CyberBadge variant="glow">FR2514546</CyberBadge>
          <CyberBadge variant="outline">INPI FRANCE</CyberBadge>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary animate-pulse">Initialize</span>
          <div className="w-px h-12 bg-linear-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </SlideLayout>
  );
}

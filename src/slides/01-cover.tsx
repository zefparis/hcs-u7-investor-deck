'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideCover() {
  const { language } = useLanguage();
  const tr = translations.cover;

  return (
    <SlideLayout centered>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-[-0.03em] text-ink mb-4">
          HCS-U7
        </h1>
        <p className="text-lg md:text-xl text-ink-secondary mb-8">
          {t(tr.subtitle, language)}
        </p>
        <p className="text-base md:text-lg text-ink max-w-xl leading-relaxed mb-12">
          {t(tr.tagline, language)}
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 text-xs text-ink-tertiary border border-border px-4 py-2"
        >
          <span>{t(tr.badge, language)}</span>
          <span className="text-border">·</span>
          <span>INPI France</span>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-12 left-0 right-0 text-center text-xs text-ink-tertiary"
      >
        {t(tr.footer, language)}
      </motion.footer>
    </SlideLayout>
  );
}

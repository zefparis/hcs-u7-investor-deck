'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideTeam() {
  const { language } = useLanguage();
  const tr = translations.team;
  const bio = tr.bio[language];

  return (
    <SlideLayout centered>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-2">
          Benjamin BARRERE
        </h1>
        <p className="text-xl text-ink-secondary mb-12">{t(tr.role, language)}</p>

        <div className="grid grid-cols-2 gap-4 mb-12 text-left">
          {bio.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-sm text-ink-secondary">{item}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-border mb-8" />

        <div className="text-center mb-8">
          <p className="text-lg font-bold text-ink">IA SOLUTION</p>
          <p className="text-sm text-ink-secondary">SIRET 438 055 097</p>
          <p className="text-sm text-ink-secondary">{t(tr.founded, language)}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2 mb-12"
        >
          <a
            href="mailto:contact@ia-solution.fr"
            className="block text-accent hover:underline"
          >
            contact@ia-solution.fr
          </a>
          <a
            href="https://hcs-u7.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-accent hover:underline"
          >
            hcs-u7.com
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-ink-secondary italic"
        >
          {t(tr.tagline, language)}
        </motion.p>
      </motion.div>
    </SlideLayout>
  );
}

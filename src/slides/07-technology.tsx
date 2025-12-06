'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { LayerDiagram } from '@/components/LayerDiagram';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideTechnology() {
  const { language } = useLanguage();
  const tr = translations.technology;
  const layers = tr.layers[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-12">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <LayerDiagram layers={layers} />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <div className="border border-border p-4">
            <h4 className="text-xs uppercase tracking-wider text-ink-tertiary mb-2">
              {t(tr.patent1, language)}
            </h4>
            <p className="font-mono text-sm text-ink">FR2514274</p>
            <p className="text-xs text-ink-secondary mt-1">{t(tr.patent1Desc, language)}</p>
          </div>

          <div className="border border-border p-4">
            <h4 className="text-xs uppercase tracking-wider text-ink-tertiary mb-2">
              {t(tr.patent2, language)}
            </h4>
            <p className="font-mono text-sm text-ink">FR2514546</p>
            <p className="text-xs text-ink-secondary mt-1">{t(tr.patent2Desc, language)}</p>
          </div>

          <div className="border-l-2 border-accent pl-4">
            <p className="text-xs text-ink-secondary">
              {t(tr.status, language)}
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

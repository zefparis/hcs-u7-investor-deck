'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideLimitations() {
  const { language } = useLanguage();
  const tr = translations.limitations;

  const scope = {
    what_we_do: [
      {
        ...t(tr.do.cats, language)[0],
        icon: CheckCircle,
        color: 'text-success'
      }
    ],
    what_we_dont: [
      {
        ...t(tr.dont.cats, language)[0],
        icon: XCircle,
        color: 'text-danger'
      }
    ]
  };

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-success bg-success/5 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-success w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-success">{t(tr.do.title, language)}</h3>
              <p className="text-sm text-ink-tertiary">{t(tr.do.subtitle, language)}</p>
            </div>
          </div>

          <div className="space-y-4">
            {scope.what_we_do.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-ink mb-2">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 p-3 bg-success/10 border border-success/30 rounded text-xs text-success">
                  💰 {category.impact}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What We Don't */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-danger bg-danger/5 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="text-danger w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-danger">{t(tr.dont.title, language)}</h3>
              <p className="text-sm text-ink-tertiary">{t(tr.dont.subtitle, language)}</p>
            </div>
          </div>

          <div className="space-y-4">
            {scope.what_we_dont.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-ink mb-2">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-danger mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 p-3 bg-danger/10 border border-danger/30 rounded text-xs text-danger">
                  ⚠️ {category.impact}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Defense Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-6 border border-warning/30 bg-warning/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-warning w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-warning mb-3">{t(tr.strategy.title, language)}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-semibold text-ink mb-2">{t(tr.strategy.autoTitle, language)}</div>
                <div className="text-sm text-ink-secondary space-y-1">
                  {t(tr.strategy.autoItems, language).map((item, i) => <div key={i}>{item}</div>)}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink mb-2">{t(tr.strategy.manualTitle, language)}</div>
                <div className="text-sm text-ink-secondary space-y-1">
                  {t(tr.strategy.manualItems, language).map((item, i) => <div key={i}>{item}</div>)}
                </div>
              </div>
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              {t(tr.strategy.insight, language)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why This Matters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 p-4 border border-accent/30 bg-accent/5 rounded-lg"
      >
        <div className="text-center">
          <p className="text-ink-secondary text-sm">
            {t(tr.trust, language)}
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

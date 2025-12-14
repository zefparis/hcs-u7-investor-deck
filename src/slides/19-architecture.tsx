'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideArchitecture() {
  const { language } = useLanguage();
  const tr = translations.architecture;

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CLOUD ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-accent bg-accent/5 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
            <span>☁️</span> {t(tr.cloud.title, language)}
          </h3>

          <div className="space-y-3 font-mono text-sm">
            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">{t(tr.cloud.frontend.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.cloud.frontend.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">{t(tr.cloud.backend.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.cloud.backend.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">{t(tr.cloud.security.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.cloud.security.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">{t(tr.cloud.db.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.cloud.db.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-success/10 border border-success rounded">
            <div className="text-success font-bold text-sm">Security Audit</div>
            <div className="text-ink-secondary text-xs mt-1">
              {t(tr.cloud.audit, language)}
            </div>
          </div>
        </motion.div>

        {/* OFFLINE ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-success bg-success/5 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
            <span>📱</span> {t(tr.offline.title, language)}
          </h3>

          <div className="space-y-3 font-mono text-sm">
            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">{t(tr.offline.pwa.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.offline.pwa.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">{t(tr.offline.tests.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.offline.tests.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">{t(tr.offline.crypto.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.offline.crypto.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">{t(tr.offline.mission.title, language)}</div>
              <div className="text-ink-secondary text-xs space-y-1">
                {t(tr.offline.mission.items, language).map((item, i) => <div key={i}>{item}</div>)}
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500 rounded">
            <div className="text-purple-400 font-bold text-sm">Deployment</div>
            <div className="text-ink-secondary text-xs mt-1">
              {t(tr.offline.deployment, language)}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 p-4 border border-warning/30 bg-warning/5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-warning font-bold">Production Stats</div>
            <div className="text-ink-secondary text-sm mt-1">
              {t(tr.stats, language)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-warning">99.9%</div>
            <div className="text-xs text-ink-tertiary">{t(tr.reliability, language)}</div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

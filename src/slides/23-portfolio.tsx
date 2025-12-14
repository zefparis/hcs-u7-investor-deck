'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, Link2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

// Drone icon is not exported directly from lucide-react in some versions or might be named differently.
// Using a safe fallback or checking if it exists. 
// Assuming Drone exists or using a substitute if needed. 
// Lucide-react usually exports Drone. 
import { Drone } from 'lucide-react'; 

export function SlidePortfolio() {
  const { language } = useLanguage();
  const tr = translations.portfolio;

  const products = [
    {
      icon: Shield,
      ...t(tr.products, language)[0],
      differentiation: t(tr.products, language)[0].diff,
      color: 'cyan',
      patents: 'FR2514274, FR2514546'
    },
    {
      icon: Drone,
      ...t(tr.products, language)[1],
      differentiation: t(tr.products, language)[1].diff,
      color: 'green',
      patents: 'FR2514274 (QR encryption), FR2514546 (entropy)'
    }
  ];

  const colorMap = {
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success'
  };

  const revenueMix = t(tr.revenueMix, language);

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, idx) => {
          const Icon = product.icon;
          const colors = colorMap[product.color as keyof typeof colorMap];
          const textColor = colors.split(' ').pop(); // simple extraction or just hardcode

          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`border ${colors} p-6 rounded-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className={`w-10 h-10`} />
                <div>
                  <h3 className={`text-2xl font-bold font-mono`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-ink-secondary">{product.tagline}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-ink-tertiary">{t(tr.labels.market, language)}</span>{' '}
                  <span className="text-ink font-semibold">{product.market}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">{t(tr.labels.revenue, language)}</span>{' '}
                  <span className="text-ink">{product.revenue}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">{t(tr.labels.stage, language)}</span>{' '}
                  <span className={`font-mono`}>
                    {product.stage}
                  </span>
                </div>
                <div>
                  <span className="text-ink-tertiary">{t(tr.labels.tam, language)}</span>{' '}
                  <span className="text-ink">{product.tam}</span>
                </div>
                <div>
                  <span className="text-ink-tertiary">{t(tr.labels.customers, language)}</span>{' '}
                  <span className="text-ink">{product.customers}</span>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <div className="text-ink-tertiary mb-2">{t(tr.labels.diff, language)}</div>
                  <p className={`text-xs`}>
                    {product.differentiation}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-ink-tertiary mb-1">{t(tr.labels.patents, language)}</div>
                  <p className="text-xs text-ink-secondary font-mono">{product.patents}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technology Synergies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 border border-purple-500/30 bg-purple-500/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <Link2 className="text-purple-400 w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-2">{t(tr.synergies.title, language)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-ink-secondary">
              {t(tr.synergies.items, language).map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              {t(tr.synergies.desc, language)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Revenue Synergies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 grid grid-cols-3 gap-4 text-center"
      >
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-accent">{revenueMix[0].val}</div>
          <div className="text-xs text-ink-tertiary mt-1">{revenueMix[0].label}</div>
          <div className="text-xs text-ink-secondary">{revenueMix[0].sub}</div>
        </div>
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-success">{revenueMix[1].val}</div>
          <div className="text-xs text-ink-tertiary mt-1">{revenueMix[1].label}</div>
          <div className="text-xs text-ink-secondary">{revenueMix[1].sub}</div>
        </div>
        <div className="p-4 border border-border bg-surface-elevated rounded-lg">
          <div className="text-3xl font-bold text-purple-400">{revenueMix[2].val}</div>
          <div className="text-xs text-ink-tertiary mt-1">{revenueMix[2].label}</div>
          <div className="text-xs text-ink-secondary">{revenueMix[2].sub}</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

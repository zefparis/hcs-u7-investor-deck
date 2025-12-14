'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideRisks() {
  const { language } = useLanguage();
  const tr = translations.risks;

  const risks = [
    {
      category: t(tr.categories, language)[0].name,
      color: 'red',
      items: [
        {
          risk: t(tr.categories, language)[0].items[0].risk,
          probability: t(tr.categories, language)[0].items[0].prob,
          mitigation: t(tr.categories, language)[0].items[0].mit,
          status: t(tr.categories, language)[0].items[0].status
        },
        {
          risk: t(tr.categories, language)[0].items[1].risk,
          probability: t(tr.categories, language)[0].items[1].prob,
          mitigation: t(tr.categories, language)[0].items[1].mit,
          status: t(tr.categories, language)[0].items[1].status
        },
        {
          risk: t(tr.categories, language)[0].items[2].risk,
          probability: t(tr.categories, language)[0].items[2].prob,
          mitigation: t(tr.categories, language)[0].items[2].mit,
          status: t(tr.categories, language)[0].items[2].status
        }
      ]
    },
    {
      category: t(tr.categories, language)[1].name,
      color: 'yellow',
      items: [
        {
          risk: t(tr.categories, language)[1].items[0].risk,
          probability: t(tr.categories, language)[1].items[0].prob,
          mitigation: t(tr.categories, language)[1].items[0].mit,
          status: t(tr.categories, language)[1].items[0].status
        },
        {
          risk: t(tr.categories, language)[1].items[1].risk,
          probability: t(tr.categories, language)[1].items[1].prob,
          mitigation: t(tr.categories, language)[1].items[1].mit,
          status: t(tr.categories, language)[1].items[1].status
        },
        {
          risk: t(tr.categories, language)[1].items[2].risk,
          probability: t(tr.categories, language)[1].items[2].prob,
          mitigation: t(tr.categories, language)[1].items[2].mit,
          status: t(tr.categories, language)[1].items[2].status
        }
      ]
    },
    {
      category: t(tr.categories, language)[2].name,
      color: 'purple',
      items: [
        {
          risk: t(tr.categories, language)[2].items[0].risk,
          probability: t(tr.categories, language)[2].items[0].prob,
          mitigation: t(tr.categories, language)[2].items[0].mit,
          status: t(tr.categories, language)[2].items[0].status
        },
        {
          risk: t(tr.categories, language)[2].items[1].risk,
          probability: t(tr.categories, language)[2].items[1].prob,
          mitigation: t(tr.categories, language)[2].items[1].mit,
          status: t(tr.categories, language)[2].items[1].status
        },
        {
          risk: t(tr.categories, language)[2].items[2].risk,
          probability: t(tr.categories, language)[2].items[2].prob,
          mitigation: t(tr.categories, language)[2].items[2].mit,
          status: t(tr.categories, language)[2].items[2].status
        }
      ]
    },
    {
      category: t(tr.categories, language)[3].name,
      color: 'cyan',
      items: [
        {
          risk: t(tr.categories, language)[3].items[0].risk,
          probability: t(tr.categories, language)[3].items[0].prob,
          mitigation: t(tr.categories, language)[3].items[0].mit,
          status: t(tr.categories, language)[3].items[0].status
        },
        {
          risk: t(tr.categories, language)[3].items[1].risk,
          probability: t(tr.categories, language)[3].items[1].prob,
          mitigation: t(tr.categories, language)[3].items[1].mit,
          status: t(tr.categories, language)[3].items[1].status
        },
        {
          risk: t(tr.categories, language)[3].items[2].risk,
          probability: t(tr.categories, language)[3].items[2].prob,
          mitigation: t(tr.categories, language)[3].items[2].mit,
          status: t(tr.categories, language)[3].items[2].status
        }
      ]
    }
  ];

  const colorMap = {
    red: { border: 'border-danger', bg: 'bg-danger/5', text: 'text-danger', dot: 'bg-danger' },
    yellow: { border: 'border-warning', bg: 'bg-warning/5', text: 'text-warning', dot: 'bg-warning' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-500/5', text: 'text-purple-400', dot: 'bg-purple-400' },
    cyan: { border: 'border-accent', bg: 'bg-accent/5', text: 'text-accent', dot: 'bg-accent' }
  };

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[650px] overflow-y-auto pr-4 custom-scrollbar">
        {risks.map((category, catIdx) => {
          const colors = colorMap[category.color as keyof typeof colorMap];
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              className={`border ${colors.border} ${colors.bg} p-5 rounded-lg`}
            >
              <h3 className={`text-lg font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                <AlertTriangle className="w-5 h-5" />
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-border pl-3 pb-3">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-sm font-semibold text-ink">{item.risk}</h4>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {item.probability}
                      </span>
                    </div>
                    <p className="text-xs text-ink-tertiary mt-1 mb-2">{item.mitigation}</p>
                    <div className={`text-xs font-mono ${colors.text} flex items-center gap-2`}>
                      <Shield className="w-3 h-3" />
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Overall Assessment */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-6 border border-success/30 bg-success/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <TrendingUp className="text-success w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-success mb-2">{t(tr.profile.title, language)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-ink font-semibold mb-1">{t(tr.profile.tech.title, language)}</div>
                <div className="text-ink-tertiary text-xs">
                  {t(tr.profile.tech.desc, language)}
                </div>
              </div>
              <div>
                <div className="text-ink font-semibold mb-1">{t(tr.profile.market.title, language)}</div>
                <div className="text-ink-tertiary text-xs">
                  {t(tr.profile.market.desc, language)}
                </div>
              </div>
              <div>
                <div className="text-ink font-semibold mb-1">{t(tr.profile.exec.title, language)}</div>
                <div className="text-ink-tertiary text-xs">
                  {t(tr.profile.exec.desc, language)}
                </div>
              </div>
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              {t(tr.profile.conclusion, language)}
            </p>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

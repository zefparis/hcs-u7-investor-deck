'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Zap, Cloud, Shield, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideEcosystem() {
  const { language } = useLanguage();
  const tr = translations.ecosystem;

  const partnerships = [
    {
      icon: Zap,
      category: t(tr.cats, language)[0].name,
      partners: [
        {
          name: t(tr.cats, language)[0].items[0].name,
          logo: '🇫🇷',
          status: t(tr.cats, language)[0].items[0].status,
          value: t(tr.cats, language)[0].items[0].val,
          timeline: 'Q2 2025'
        },
        {
          name: t(tr.cats, language)[0].items[1].name,
          logo: '🤖',
          status: t(tr.cats, language)[0].items[1].status,
          value: t(tr.cats, language)[0].items[1].val,
          timeline: 'Live'
        }
      ],
      color: 'purple'
    },
    {
      icon: Cloud,
      category: t(tr.cats, language)[1].name,
      partners: [
        {
          name: t(tr.cats, language)[1].items[0].name,
          logo: '🚂',
          status: t(tr.cats, language)[1].items[0].status,
          value: t(tr.cats, language)[1].items[0].val,
          timeline: 'Live'
        },
        {
          name: t(tr.cats, language)[1].items[1].name,
          logo: '▲',
          status: t(tr.cats, language)[1].items[1].status,
          value: t(tr.cats, language)[1].items[1].val,
          timeline: 'Live'
        },
        {
          name: t(tr.cats, language)[1].items[2].name,
          logo: '☁️',
          status: t(tr.cats, language)[1].items[2].status,
          value: t(tr.cats, language)[1].items[2].val,
          timeline: 'Live'
        }
      ],
      color: 'cyan'
    },
    {
      icon: Shield,
      category: t(tr.cats, language)[2].name,
      partners: [
        {
          name: t(tr.cats, language)[2].items[0].name,
          logo: '🚁',
          status: t(tr.cats, language)[2].items[0].status,
          value: t(tr.cats, language)[2].items[0].val,
          timeline: 'Q1 2025'
        },
        {
          name: t(tr.cats, language)[2].items[1].name,
          logo: '🎖️',
          status: t(tr.cats, language)[2].items[1].status,
          value: t(tr.cats, language)[2].items[1].val,
          timeline: 'Q2 2025'
        }
      ],
      color: 'green'
    },
    {
      icon: Cpu,
      category: t(tr.cats, language)[3].name,
      partners: [
        {
          name: t(tr.cats, language)[3].items[0].name,
          logo: '🔑',
          status: t(tr.cats, language)[3].items[0].status,
          value: t(tr.cats, language)[3].items[0].val,
          timeline: 'Q3 2025'
        },
        {
          name: t(tr.cats, language)[3].items[1].name,
          logo: '☁️',
          status: t(tr.cats, language)[3].items[1].status,
          value: t(tr.cats, language)[3].items[1].val,
          timeline: 'Live'
        }
      ],
      color: 'yellow'
    }
  ];

  const colorMap = {
    purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success',
    yellow: 'border-warning bg-warning/5 text-warning'
  };

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {partnerships.map((cat, idx) => {
          const Icon = cat.icon;
          const colors = colorMap[cat.color as keyof typeof colorMap];
          const textColor = colors.split(' ').pop();

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`border ${colors} p-5 rounded-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6`} />
                <h3 className={`text-lg font-bold`}>
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.partners.map((partner, i) => (
                  <div key={i} className="border-l-2 border-border pl-3 py-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{partner.logo}</span>
                      <span className="text-sm font-bold text-ink">{partner.name}</span>
                    </div>
                    <div className="text-xs text-ink-tertiary mb-1">{partner.value}</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-mono ${textColor}`}>
                        {partner.status}
                      </span>
                      <span className="text-ink-tertiary">{partner.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Partnership Strategy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 border border-border bg-surface-elevated rounded-lg"
      >
        <h4 className="text-lg font-bold text-ink mb-4">{t(tr.strategyTitle, language)}</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-semibold text-accent mb-2">{t(tr.strategy, language)[0].title}</div>
            <p className="text-xs text-ink-tertiary">
              {t(tr.strategy, language)[0].desc}
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-success mb-2">{t(tr.strategy, language)[1].title}</div>
            <p className="text-xs text-ink-tertiary">
              {t(tr.strategy, language)[1].desc}
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-purple-400 mb-2">{t(tr.strategy, language)[2].title}</div>
            <p className="text-xs text-ink-tertiary">
              {t(tr.strategy, language)[2].desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 grid grid-cols-4 gap-4 text-center"
      >
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-purple-400">{t(tr.stats, language)[0].val}</div>
          <div className="text-xs text-ink-tertiary">{t(tr.stats, language)[0].label}</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-accent">{t(tr.stats, language)[1].val}</div>
          <div className="text-xs text-ink-tertiary">{t(tr.stats, language)[1].label}</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-success">{t(tr.stats, language)[2].val}</div>
          <div className="text-xs text-ink-tertiary">{t(tr.stats, language)[2].label}</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-warning">{t(tr.stats, language)[3].val}</div>
          <div className="text-xs text-ink-tertiary">{t(tr.stats, language)[3].label}</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

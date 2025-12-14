'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Award, Shield, Lock, FileCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideIP() {
  const { language } = useLanguage();
  const tr = translations.ip;

  const patents = [
    {
      number: 'FR2514274',
      ...t(tr.patents, language)[0],
      filed: 'Dec 2024',
      protection: '20 years',
      color: 'cyan'
    },
    {
      number: 'FR2514546',
      ...t(tr.patents, language)[1],
      filed: 'Dec 2024',
      protection: '20 years',
      color: 'purple'
    }
  ];

  const moat = [
    {
      icon: Award,
      ...t(tr.moat, language)[0],
      color: 'text-warning'
    },
    {
      icon: Shield,
      ...t(tr.moat, language)[1],
      color: 'text-accent'
    },
    {
      icon: Lock,
      ...t(tr.moat, language)[2],
      color: 'text-success'
    },
    {
      icon: FileCheck,
      ...t(tr.moat, language)[3],
      color: 'text-purple-400'
    }
  ];

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      {/* Patents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {patents.map((patent, idx) => (
          <motion.div
            key={patent.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`border ${patent.color === 'cyan' ? 'border-accent bg-accent/5' : 'border-purple-500 bg-purple-500/5'} p-6 rounded-lg`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold font-mono ${patent.color === 'cyan' ? 'text-accent' : 'text-purple-400'}`}>
                  {patent.number}
                </h3>
                <p className="text-sm text-ink-secondary mt-1">{patent.title}</p>
              </div>
              <div className="px-3 py-1 bg-success/20 border border-success rounded text-success font-mono text-xs">
                {patent.status}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-ink-tertiary">
                <span className="font-semibold">{t(tr.labels.filed, language)}:</span> {patent.filed}
                {' • '}
                <span className="font-semibold">{t(tr.labels.protection, language)}:</span> {patent.protection}
              </div>

              <div>
                <div className="text-sm font-semibold text-ink mb-2">{t(tr.labels.scope, language)}:</div>
                <ul className="space-y-1">
                  {patent.scope.map((item, i) => (
                    <li key={i} className="text-xs text-ink-secondary flex items-start gap-2">
                      <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${patent.color === 'cyan' ? 'bg-accent' : 'bg-purple-400'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Moat Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-ink mb-4">{t(tr.moatTitle, language)}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moat.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="border border-border bg-surface-elevated p-4 rounded-lg"
              >
                <Icon className={`w-6 h-6 ${item.color} mb-3`} />
                <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                <p className="text-xs text-ink-tertiary mt-1">{item.desc}</p>
                <div className={`text-xs font-mono mt-2 ${item.color}`}>
                  → {item.impact}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Extensions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 p-4 border border-border bg-surface-elevated rounded-lg"
      >
        <h4 className="text-sm font-bold text-ink mb-2">{t(tr.roadmapTitle, language)}</h4>
        <div className="flex items-center gap-8 text-xs text-ink-tertiary">
          {t(tr.roadmap, language).map((item, i) => (
             <div key={i}>
                <span className={`${i === 0 ? 'text-accent' : i === 1 ? 'text-success' : 'text-purple-400'} font-bold`}>
                  {item.split(':')[0]}:
                </span>
                {item.split(':')[1]}
             </div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
}

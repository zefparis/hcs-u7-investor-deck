'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Award, Shield, Lock, FileCheck, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

interface PatentData {
  number: string;
  title: string;
  status: string;
  filed: string;
  scope: string[];
  timeline: string;
}

export function SlideIP() {
  const { language } = useLanguage();
  const tr = translations.ip;

  const patentData = t(tr.patents, language) as PatentData[];
  const patents = [
    { ...patentData[0], color: 'cyan' },
    { ...patentData[1], color: 'warning' }
  ];

  const moatIcons = [Award, Shield, Globe, Lock];
  const moatColors = ['text-warning', 'text-accent', 'text-purple-400', 'text-success'];

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      {/* Patents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {patents.map((patent, idx) => (
          <motion.div
            key={patent.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`border ${patent.color === 'cyan' ? 'border-accent bg-accent/5' : 'border-warning bg-warning/5'} p-4 rounded-lg`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`text-lg font-bold font-mono ${patent.color === 'cyan' ? 'text-accent' : 'text-warning'}`}>
                  {patent.number}
                </h3>
                <p className="text-xs text-ink-secondary mt-1">{patent.title}</p>
              </div>
              <div className="px-2 py-1 bg-warning/20 border border-warning rounded text-warning font-mono text-[10px]">
                {patent.status}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4 text-[10px] text-ink-tertiary">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span className="font-semibold">{t(tr.labels.filed, language)}:</span> {patent.filed}
                </div>
                <div className="text-ink-secondary">{patent.timeline}</div>
              </div>

              <div>
                <div className="text-xs font-semibold text-ink mb-1">{t(tr.labels.scope, language)}:</div>
                <ul className="space-y-0.5">
                  {patent.scope.map((item, i) => (
                    <li key={i} className="text-[10px] text-ink-secondary flex items-start gap-1.5">
                      <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${patent.color === 'cyan' ? 'bg-accent' : 'bg-warning'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional IP + Defensive Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Additional IP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border border-border bg-surface-elevated p-4 rounded-lg"
        >
          <h3 className="text-sm font-bold text-ink mb-3">{t(tr.additionalIP.title, language)}</h3>
          <div className="space-y-2">
            {t(tr.additionalIP.items, language).map((item: { type: string; desc: string }, idx: number) => (
              <div key={idx} className="text-xs">
                <span className="font-semibold text-accent">{item.type}:</span>
                <span className="text-ink-secondary ml-1">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Defensive Strategy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-bold text-ink mb-3">{t(tr.moatTitle, language)}</h3>
          <div className="grid grid-cols-2 gap-2">
            {t(tr.moat, language).map((item: { title: string; desc: string; impact: string }, idx: number) => {
              const Icon = moatIcons[idx % moatIcons.length];
              return (
                <div key={item.title} className="border border-border bg-surface-elevated p-2 rounded-lg">
                  <Icon className={`w-4 h-4 ${moatColors[idx % moatColors.length]} mb-1`} />
                  <h4 className="text-[10px] font-bold text-ink">{item.title}</h4>
                  <p className="text-[9px] text-ink-tertiary">{item.desc}</p>
                  <div className={`text-[9px] font-mono mt-1 ${moatColors[idx % moatColors.length]}`}>
                    → {item.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* PCT Roadmap */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg"
      >
        <h4 className="text-xs font-bold text-purple-400 mb-2">{t(tr.roadmapTitle, language)}</h4>
        <div className="flex items-center gap-6 text-xs text-ink-tertiary">
          {t(tr.roadmap, language).map((item: string, i: number) => (
             <div key={i} className="flex items-center gap-1">
                <span className={`${i === 0 ? 'text-accent' : i === 1 ? 'text-success' : 'text-purple-400'} font-bold`}>
                  {item.split(':')[0]}:
                </span>
                <span>{item.split(':')[1]}</span>
             </div>
          ))}
        </div>
      </motion.div>

      {/* Legal Notice Footer */}
      <footer className="mt-auto pt-3">
        <p className="text-[9px] text-ink-tertiary text-center italic">
          {t(tr.legalNotice, language)}
        </p>
      </footer>
    </SlideLayout>
  );
}

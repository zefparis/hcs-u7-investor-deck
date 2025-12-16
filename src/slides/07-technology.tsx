'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { FileCheck, ShieldCheck, Sparkles, Zap } from 'lucide-react';

interface LayerItem {
  name: string;
  description: string;
  isNew?: boolean;
  isPatent?: boolean;
  isCore?: boolean;
}

export function SlideTechnology() {
  const { language } = useLanguage();
  const tr = translations.technology;
  const layers = tr.layers[language] as LayerItem[];
  const perfStats = tr.performanceStats[language];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <div className="space-y-2">
            {layers.map((layer, idx) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  layer.isPatent ? 'border-warning/50 bg-warning/10' :
                  layer.isNew ? 'border-purple-500/50 bg-purple-500/10' :
                  layer.isCore ? 'border-accent/50 bg-accent/10' :
                  'border-border bg-surface-elevated'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  layer.isPatent ? 'bg-warning/20 text-warning' :
                  layer.isNew ? 'bg-purple-500/20 text-purple-400' :
                  layer.isCore ? 'bg-accent/20 text-accent' :
                  'bg-surface text-ink'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ink text-sm">{layer.name}</span>
                    {layer.isNew && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded font-mono">NEW v8.1</span>
                    )}
                    {layer.isPatent && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-warning/20 text-warning rounded font-mono">PATENT</span>
                    )}
                    {layer.isCore && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-accent/20 text-accent rounded font-mono">CORE</span>
                    )}
                  </div>
                  <p className="text-xs text-ink-secondary mt-0.5">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <CyberCard glow className="border-accent/30 bg-accent/5">
            <div className="flex items-start gap-3 mb-2">
              <FileCheck className="w-5 h-5 text-accent" />
              <h4 className="text-xs uppercase tracking-wider text-accent font-bold mt-0.5">
                {t(tr.patent1, language)}
              </h4>
            </div>
            <p className="font-mono text-base font-bold text-white mb-1">FR2514274</p>
            <p className="text-xs text-ink-secondary">{t(tr.patent1Desc, language)}</p>
          </CyberCard>

          <CyberCard glow className="border-warning/30 bg-warning/5">
            <div className="flex items-start gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-warning" />
              <h4 className="text-xs uppercase tracking-wider text-warning font-bold mt-0.5">
                {t(tr.patent2, language)}
              </h4>
            </div>
            <p className="font-mono text-base font-bold text-white mb-1">FR2514546</p>
            <p className="text-xs text-ink-secondary">{t(tr.patent2Desc, language)}</p>
          </CyberCard>

          <div className="grid grid-cols-2 gap-2">
            {perfStats.map((stat: { value: string; label: string }, idx: number) => (
              <div key={stat.label} className="p-2 border border-success/20 bg-success/5 rounded-lg text-center">
                <Zap className="w-4 h-4 text-success mx-auto mb-1" />
                <div className="font-mono text-lg font-bold text-success">{stat.value}</div>
                <div className="text-[10px] text-ink-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 p-3 border border-success/20 bg-success/5 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-success" />
            <div>
              <p className="text-xs text-success font-bold uppercase tracking-wider">{t(tr.statusLabel, language)}</p>
              <p className="text-xs text-ink-secondary">{t(tr.status, language)}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

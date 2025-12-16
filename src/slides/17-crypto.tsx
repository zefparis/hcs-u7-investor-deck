'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, Hash, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

interface CelestialStep {
  step: string;
  title: string;
  desc: string;
}

interface Algorithm {
  name: string;
  title: string;
  tech: string;
  features: string[];
  color: string;
}

interface PerfItem {
  label: string;
  value: string;
  sub?: string;
}

export function SlideCrypto() {
  const { language } = useLanguage();
  const tr = translations.crypto;

  const celestialSteps = t(tr.celestialSteps, language) as CelestialStep[];
  const celestialProps = t(tr.celestialProps, language) as string[];
  const celestialPerf = t(tr.celestialPerf, language) as PerfItem[];
  const algorithms = t(tr.algorithms, language) as Algorithm[];
  const attackItems = t(tr.attackResistance.items, language) as string[];
  const perfMetrics = t(tr.perfMetrics.items, language) as PerfItem[];
  const layers = t(tr.layers, language) as string[];

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Celestial Entropy Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-warning bg-warning/5 p-4 rounded-lg"
        >
          <h3 className="text-sm font-bold text-warning mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t(tr.celestialTitle, language)}
          </h3>
          <p className="text-xs text-ink-secondary mb-3">{t(tr.celestialDesc, language)}</p>
          
          {/* Steps */}
          <div className="space-y-2 mb-3">
            {celestialSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 bg-surface rounded">
                <div className="w-5 h-5 rounded-full bg-warning/20 text-warning flex items-center justify-center text-[10px] font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink">{step.title}</div>
                  <div className="text-[10px] text-ink-tertiary font-mono">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Properties */}
          <div className="grid grid-cols-2 gap-1 mb-3">
            {celestialProps.map((prop, idx) => (
              <div key={idx} className="text-[10px] text-ink-secondary">{prop}</div>
            ))}
          </div>

          {/* Performance */}
          <div className="flex gap-2">
            {celestialPerf.map((perf, idx) => (
              <div key={idx} className="flex-1 p-2 bg-surface rounded text-center">
                <div className="text-sm font-mono font-bold text-warning">{perf.value}</div>
                <div className="text-[9px] text-ink-tertiary">{perf.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dual Signature System */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-bold text-accent">{t(tr.dualSigTitle, language)}</h3>
          
          {/* QSIG + B3 Cards */}
          <div className="grid grid-cols-2 gap-2">
            {algorithms.map((algo, idx) => {
              const Icon = idx === 0 ? Shield : Hash;
              const colorClass = algo.color === 'cyan' ? 'border-accent bg-accent/5 text-accent' : 'border-success bg-success/5 text-success';
              return (
                <div key={algo.name} className={`border ${colorClass} p-3 rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4" />
                    <span className="font-mono font-bold text-sm">{algo.name}</span>
                  </div>
                  <div className="text-xs text-ink-secondary mb-1">{algo.title}</div>
                  <div className="text-[10px] font-mono bg-surface px-1.5 py-0.5 rounded inline-block mb-2">{algo.tech}</div>
                  <ul className="space-y-0.5">
                    {algo.features.map((f, i) => (
                      <li key={i} className="text-[10px] text-ink-tertiary flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Code Format */}
          <div className="p-2 bg-surface-elevated rounded border border-border">
            <div className="text-[10px] text-ink-tertiary mb-1">{t(tr.codeFormat.label, language)}</div>
            <code className="text-xs font-mono text-accent break-all">{tr.codeFormat.format}</code>
          </div>

          {/* Attack Resistance */}
          <div className="p-2 bg-surface-elevated rounded border border-purple-500/30">
            <div className="text-xs font-bold text-purple-400 mb-2">{t(tr.attackResistance.title, language)}</div>
            <div className="grid grid-cols-2 gap-1">
              {attackItems.map((item, idx) => (
                <div key={idx} className="text-[10px] text-ink-secondary">{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3"
      >
        {/* Production Metrics */}
        <div className="p-3 border border-success/30 bg-success/5 rounded-lg">
          <div className="text-xs font-bold text-success mb-2">{t(tr.perfMetrics.title, language)}</div>
          <div className="flex gap-4">
            {perfMetrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-mono font-bold text-success">{m.value}</div>
                <div className="text-[10px] text-ink-tertiary">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Security */}
        <div className="p-3 border border-accent/30 bg-surface-elevated rounded-lg">
          <div className="text-xs font-bold text-accent mb-2">{t(tr.architectureTitle, language)}</div>
          <div className="space-y-1">
            {layers.map((layer, idx) => (
              <div key={idx} className="text-xs text-ink-secondary">{layer}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

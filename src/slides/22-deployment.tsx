'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Cloud, Server, Lock, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideDeployment() {
  const { language } = useLanguage();
  const tr = translations.deployment;

  const options = [
    {
      icon: Cloud,
      ...t(tr.options, language)[0],
      color: 'cyan',
      icon2: '☁️'
    },
    {
      icon: Server,
      ...t(tr.options, language)[1],
      color: 'purple',
      icon2: '🏢'
    },
    {
      icon: Lock,
      ...t(tr.options, language)[2],
      color: 'green',
      icon2: '🚁'
    },
    {
      icon: Globe,
      ...t(tr.options, language)[3],
      color: 'yellow',
      icon2: '🌍'
    }
  ];

  const colorMap = {
    cyan: {
      border: 'border-accent',
      bg: 'bg-accent/5',
      text: 'text-accent',
      dot: 'bg-accent'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500/5',
      text: 'text-purple-400',
      dot: 'bg-purple-400'
    },
    green: {
      border: 'border-success',
      bg: 'bg-success/5',
      text: 'text-success',
      dot: 'bg-success'
    },
    yellow: {
      border: 'border-warning',
      bg: 'bg-warning/5',
      text: 'text-warning',
      dot: 'bg-warning'
    }
  };

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {options.map((option, idx) => {
          const Icon = option.icon;
          const colors = colorMap[option.color as keyof typeof colorMap];
          
          return (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`border ${colors.border} ${colors.bg} p-6 rounded-lg`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl">{option.icon2}</div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {option.title}
                  </h3>
                  <p className="text-sm text-ink-secondary">{option.subtitle}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-tertiary">{t(tr.labels.pricing, language)}</span>
                  <span className={`font-mono font-bold ${colors.text}`}>
                    {option.pricing}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-tertiary">{t(tr.labels.deployment, language)}</span>
                  <span className="text-ink">{option.time}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 border border-accent/30 bg-accent/5 rounded-lg"
        >
          <h4 className="text-sm font-bold text-accent mb-3">{t(tr.widgetTitle, language)}</h4>
          <div className="space-y-2">
            <code className="block text-[10px] font-mono bg-surface p-2 rounded text-ink-secondary overflow-x-auto">
              &lt;script src=&quot;{tr.widget.cdn}&quot;&gt;&lt;/script&gt;
            </code>
            <code className="block text-[10px] font-mono bg-surface p-2 rounded text-ink-secondary overflow-x-auto">
              {tr.widget.embed}
            </code>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="p-4 border border-purple-500/30 bg-purple-500/5 rounded-lg"
        >
          <h4 className="text-sm font-bold text-purple-400 mb-3">{t(tr.npmTitle, language)}</h4>
          <div className="space-y-2">
            {tr.npm.map((pkg: { name: string; desc: { fr: string; en: string } }, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <code className="text-[11px] font-mono text-success">npm install {pkg.name}</code>
                <span className="text-[9px] text-ink-tertiary">{t(pkg.desc, language)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 p-3 border border-border bg-surface-elevated rounded-lg"
      >
        <div className="text-center">
          <p className="text-ink-secondary text-xs">
            {t(tr.footer, language)}
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

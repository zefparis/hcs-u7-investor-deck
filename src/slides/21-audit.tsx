'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideAudit() {
  const { language } = useLanguage();
  const tr = translations.audit;

  const stats = [
    {
      icon: Shield,
      value: '518',
      label: t(tr.stats, language)[0].label,
      sublabel: t(tr.stats, language)[0].sub,
      color: 'text-success',
      bg: 'bg-success/10',
      border: 'border-success'
    },
    {
      icon: CheckCircle,
      value: '0',
      label: t(tr.stats, language)[1].label,
      sublabel: t(tr.stats, language)[1].sub,
      color: 'text-accent',
      bg: 'bg-accent/10',
      border: 'border-accent'
    },
    {
      icon: TrendingUp,
      value: '556+',
      label: t(tr.stats, language)[2].label,
      sublabel: t(tr.stats, language)[2].sub,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500'
    },
    {
      icon: AlertTriangle,
      value: '12',
      label: t(tr.stats, language)[3].label,
      sublabel: t(tr.stats, language)[3].sub,
      color: 'text-warning',
      bg: 'bg-warning/10',
      border: 'border-warning'
    }
  ];

  const attackTypes = [
    { type: 'SQL Injection', attempts: 142, blocked: 142, rate: 100 },
    { type: 'Brute Force', attempts: 89, blocked: 89, rate: 100 },
    { type: 'XSS', attempts: 76, blocked: 76, rate: 100 },
    { type: 'CSRF', attempts: 54, blocked: 54, rate: 100 },
    { type: 'DDoS', attempts: 43, blocked: 43, rate: 100 },
    { type: 'Rate Limit Bypass', attempts: 38, blocked: 38, rate: 100 },
    { type: 'Auth Bypass', attempts: 31, blocked: 31, rate: 100 },
    { type: 'Path Traversal', attempts: 25, blocked: 25, rate: 100 },
    { type: 'Header Injection', attempts: 20, blocked: 20, rate: 100 }
  ];

  const layers = t(tr.layers, language);

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`border ${stat.border} ${stat.bg} p-4 rounded-lg text-center`}
            >
              <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <div className={`text-3xl font-bold font-mono ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-ink mt-1">{stat.label}</div>
              <div className="text-xs text-ink-tertiary mt-1">{stat.sublabel}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Attack Types Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-border bg-surface-elevated p-6 rounded-lg"
        >
          <h3 className="text-lg font-bold text-ink mb-4">{t(tr.attacksTitle, language)}</h3>
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {attackTypes.map((attack, idx) => (
              <div
                key={attack.type}
                className="flex items-center justify-between p-2 bg-surface rounded text-sm"
              >
                <div className="flex-1">
                  <div className="text-ink font-semibold">{attack.type}</div>
                  <div className="text-xs text-ink-tertiary">
                    {attack.attempts} attempts
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-success font-bold font-mono">
                    {attack.blocked}/{attack.attempts}
                  </div>
                  <div className="text-xs text-success">{attack.rate}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="border border-accent bg-accent/5 p-6 rounded-lg"
        >
          <h3 className="text-lg font-bold text-accent mb-4">{t(tr.defenseTitle, language)}</h3>
          <div className="space-y-3">
            {layers.map((layer, idx) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                className="flex items-start gap-3 p-3 bg-surface rounded"
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center shrink-0 text-accent text-xs font-bold">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {idx === 0 ? `1. QSIG + B3 ${layer.split(' ').slice(3).join(' ')}` : 
                     idx === 1 ? `2. Hieroglyphic Shield` :
                     idx === 2 ? `3. ${layer}` :
                     idx === 3 ? `4. ${layer}` :
                     idx + 1 + '. ' + layer}
                  </div>
                  {/* Keeping descriptions somewhat simpler or derived for now to avoid huge complexity */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 p-4 border border-success/30 bg-success/5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-success font-bold">{t(tr.conclusionTitle, language)}</div>
            <div className="text-ink-secondary text-sm mt-1">
              {t(tr.conclusion, language)}
            </div>
            <div className="text-xs text-ink-tertiary mt-2">
              {t(tr.source, language)}
            </div>
          </div>
          <div className="text-6xl">✅</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

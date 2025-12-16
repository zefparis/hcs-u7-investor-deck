'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Shield, CheckCircle, FileCheck, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

interface ComplianceItem {
  name: string;
  status: string;
  timeline: string;
  color: string;
}

interface SecurityDoc {
  doc: string;
  desc: string;
}

interface SiegeWallItem {
  type: string;
  desc: string;
}

export function SlideAudit() {
  const { language } = useLanguage();
  const tr = translations.audit;

  const statsData = t(tr.stats, language);
  const stats = [
    { icon: Shield, value: '100%', ...statsData[0], color: 'text-success', bg: 'bg-success/10', border: 'border-success' },
    { icon: CheckCircle, value: '97.8%', ...statsData[1], color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent' },
    { icon: FileCheck, value: '100%', ...statsData[2], color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500' },
    { icon: Clock, value: '100%', ...statsData[3], color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning' }
  ];

  const compliance = t(tr.compliance, language) as ComplianceItem[];
  const securityDocs = t(tr.securityDocs, language) as SecurityDoc[];
  const siegeWall = t(tr.siegeWall, language) as SiegeWallItem[];
  const layers = t(tr.layers, language) as string[];

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      {/* Compliance Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`border ${stat.border} ${stat.bg} p-3 rounded-lg text-center`}
            >
              <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-1`} />
              <div className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-semibold text-ink mt-1">{stat.label}</div>
              <div className="text-[10px] text-ink-tertiary">{stat.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Compliance Status */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-border bg-surface-elevated p-4 rounded-lg"
        >
          <h3 className="text-sm font-bold text-ink mb-3">{t(tr.complianceTitle, language)}</h3>
          <div className="space-y-2">
            {compliance.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-surface rounded text-xs">
                <div className="flex-1">
                  <div className="text-ink font-semibold">{item.name}</div>
                  <div className="text-[10px] text-ink-tertiary">{item.timeline}</div>
                </div>
                <div className={`font-bold font-mono ${item.color === 'success' ? 'text-success' : 'text-warning'}`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-accent bg-accent/5 p-4 rounded-lg"
        >
          <h3 className="text-sm font-bold text-accent mb-3">{t(tr.attacksTitle, language)}</h3>
          <div className="space-y-2">
            {securityDocs.map((doc, idx) => (
              <div key={idx} className="p-2 bg-surface rounded">
                <div className="text-xs font-semibold text-ink">{doc.doc}</div>
                <div className="text-[10px] text-ink-tertiary mt-0.5">{doc.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Validated Algorithms + Security Modules */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <div className="border border-purple-500 bg-purple-500/5 p-3 rounded-lg">
            <h3 className="text-xs font-bold text-purple-400 mb-2">{t(tr.defenseTitle, language)}</h3>
            <div className="grid grid-cols-1 gap-1 max-h-[120px] overflow-y-auto custom-scrollbar">
              {layers.slice(0, 6).map((layer, idx) => (
                <div key={idx} className="text-[10px] text-ink-secondary flex items-center gap-1">
                  <span className="w-1 h-1 bg-purple-400 rounded-full" />
                  {layer}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-warning bg-warning/5 p-3 rounded-lg">
            <h3 className="text-xs font-bold text-warning mb-2">{t(tr.siegeWallTitle, language)}</h3>
            <div className="space-y-1">
              {siegeWall.map((item, idx) => (
                <div key={idx} className="text-[10px] flex justify-between">
                  <span className="text-warning font-semibold">{item.type}</span>
                  <span className="text-ink-tertiary">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 p-3 border border-success/30 bg-success/5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-success font-bold text-sm">{t(tr.conclusionTitle, language)}</span>
              <span className="text-success font-mono text-lg">{t(tr.targetRate, language)}</span>
            </div>
            <div className="text-ink-secondary text-xs mt-1">{t(tr.conclusion, language)}</div>
            <div className="text-[10px] text-ink-tertiary mt-1">{t(tr.source, language)}</div>
          </div>
          <div className="text-4xl">🏆</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

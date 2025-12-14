'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Building2, Shield, Plane, Heart, Factory, Landmark } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideUseCases() {
  const { language } = useLanguage();
  const tr = translations.useCases;

  const sectors = [
    {
      icon: Building2,
      ...t(tr.sectors, language)[0],
      color: 'cyan'
    },
    {
      icon: Landmark,
      ...t(tr.sectors, language)[1],
      color: 'green'
    },
    {
      icon: Shield,
      ...t(tr.sectors, language)[2],
      color: 'red'
    },
    {
      icon: Heart,
      ...t(tr.sectors, language)[3],
      color: 'purple'
    },
    {
      icon: Factory,
      ...t(tr.sectors, language)[4],
      color: 'yellow'
    },
    {
      icon: Plane,
      ...t(tr.sectors, language)[5],
      color: 'blue'
    }
  ];

  const colorMap = {
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success',
    red: 'border-danger bg-danger/5 text-danger',
    purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
    yellow: 'border-warning bg-warning/5 text-warning',
    blue: 'border-blue-500 bg-blue-500/5 text-blue-400'
  };

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
        {sectors.map((sector, idx) => {
          const Icon = sector.icon;
          const colors = colorMap[sector.color as keyof typeof colorMap];
          
          return (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`border ${colors} p-5 rounded-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6`} />
                <h3 className={`text-lg font-bold`}>
                  {sector.name}
                </h3>
              </div>

              <div className="space-y-4">
                {sector.items.map((useCase, i) => (
                  <div key={i} className="border-l-2 border-surface-elevated pl-3">
                    <h4 className="text-sm font-semibold text-ink">{useCase.title}</h4>
                    <p className="text-xs text-ink-tertiary mt-1">{useCase.desc}</p>
                    <p className={`text-xs font-mono mt-1 opacity-80`}>
                      → {useCase.impact}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-ink-secondary text-sm">
          {t(tr.footer, language)}
        </p>
      </motion.div>
    </SlideLayout>
  );
}

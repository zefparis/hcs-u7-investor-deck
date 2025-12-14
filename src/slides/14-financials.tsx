'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { BarChart } from '@/components/BarChart';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { TrendingUp, ArrowRight } from 'lucide-react';

export function SlideFinancials() {
  const { language } = useLanguage();
  const tr = translations.financials;
  
  // Custom data structure for dual bar chart (Cyber vs Defense)
  const chartData = [
    {
      label: language === 'fr' ? 'Année 1' : 'Year 1',
      value: [
        { label: 'Cyber', value: 0.01, color: 'cyan' },
        { label: 'Defense', value: 0.05, color: 'red' }
      ],
      displayValue: '€60K',
      subItems: language === 'fr' 
        ? ['100 utilisateurs Cyber', '10 unités Défense']
        : ['100 Cyber users', '10 Defense units']
    },
    {
      label: language === 'fr' ? 'Année 2' : 'Year 2',
      value: [
        { label: 'Cyber', value: 0.4, color: 'cyan' },
        { label: 'Defense', value: 1.5, color: 'red' }
      ],
      displayValue: '€1.9M',
      subItems: language === 'fr'
        ? ['2K utilisateurs Cyber', '500 unités Défense']
        : ['2K Cyber users', '500 Defense units']
    },
    {
      label: language === 'fr' ? 'Année 3' : 'Year 3',
      value: [
        { label: 'Cyber', value: 3.5, color: 'cyan' },
        { label: 'Defense', value: 4.0, color: 'red' }
      ],
      displayValue: '€7.5M',
      subItems: language === 'fr'
        ? ['10K utilisateurs Cyber', '2K unités Défense']
        : ['10K Cyber users', '2K Defense units']
    }
  ];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Financial Projections"
      />

      <div className="mt-8 mb-12">
        <BarChart items={chartData} maxValue={7.5} />
        
        {/* Legend */}
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent/20 border border-accent rounded-full" />
            <span className="text-xs text-ink-secondary">Cyber (SaaS)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-danger/20 border border-danger rounded-full" />
            <span className="text-xs text-ink-secondary">Defense (Offline)</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <CyberCard glow className="bg-accent/5 border-accent/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-24 h-24 text-accent" />
          </div>
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full border border-accent/30">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-ink-tertiary block mb-1">
                {t(tr.profitLabel, language)}
              </span>
              <p className="text-lg font-medium text-white flex items-center gap-2">
                {t(tr.profitText, language)}
                <ArrowRight className="w-4 h-4 text-accent animate-pulse" />
              </p>
            </div>
          </div>
        </CyberCard>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 p-6 border border-purple-500/30 bg-purple-500/5 rounded-lg"
      >
        <h4 className="text-lg font-bold text-purple-400 mb-4">Revenue Mix Evolution</h4>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-sm text-ink-tertiary mb-2">{language === 'fr' ? 'Année 1' : 'Year 1'}</div>
            <div className="space-y-1 text-sm">
              <div className="text-accent">Cyber: 20% (€12K)</div>
              <div className="text-success">Defense: 80% (€48K)</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-ink-tertiary mb-2">{language === 'fr' ? 'Année 2' : 'Year 2'}</div>
            <div className="space-y-1 text-sm">
              <div className="text-accent">Cyber: 35% (€665K)</div>
              <div className="text-success">Defense: 65% (€1.2M)</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-ink-tertiary mb-2">{language === 'fr' ? 'Année 3' : 'Year 3'}</div>
            <div className="space-y-1 text-sm">
              <div className="text-accent">Cyber: 50% (€3.75M)</div>
              <div className="text-success">Defense: 50% (€3.75M)</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-ink-tertiary mt-4 text-center">
          Balanced dual-revenue strategy reduces dependency risk
        </p>
      </motion.div>
    </SlideLayout>
  );
}

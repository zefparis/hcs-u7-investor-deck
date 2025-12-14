'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberProgressBar, CyberCard } from '@/components/CyberComponents';
import { AlertTriangle, Bot, ShieldAlert } from 'lucide-react';

export function SlideShift() {
  const { language } = useLanguage();
  const tr = translations.shift;

  const data = [
    { year: 2019, rate: 5, color: 'success' },
    { year: 2022, rate: 35, color: 'warning' },
    { year: 2024, rate: 94, color: 'danger' },
    { year: 2025, rate: 99, color: 'danger' },
  ];

  return (
    <SlideLayout showMatrixBackground matrixColor="#FF003C">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        
        {/* Left Column: Context & Stats */}
        <div>
          <SectionTitle 
            title={t(tr.title, language)} 
            subtitle={t(tr.subtitle, language)}
          />

          <div className="space-y-6 mb-12">
            {data.map((d) => (
              <CyberProgressBar 
                key={d.year} 
                value={d.rate} 
                label={`${t(tr.chartLabel, language)} (${d.year})`}
                color={d.color as any}
              />
            ))}
          </div>

          <p className="text-ink-secondary leading-relaxed border-l-2 border-danger pl-4">
            {t(tr.description, language)}
          </p>
        </div>

        {/* Right Column: Key Metrics Cards */}
        <div className="grid grid-cols-1 gap-6">
          <CyberCard glow className="border-danger/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-danger/10 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-danger" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">$68B</h3>
                <p className="text-sm text-ink-secondary uppercase tracking-wider">{t(tr.card1, language).label}</p>
                <p className="text-xs text-danger mt-2">{t(tr.card1, language).sub}</p>
              </div>
            </div>
          </CyberCard>

          <CyberCard glow className="border-warning/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Bot className="w-8 h-8 text-warning" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">32%</h3>
                <p className="text-sm text-ink-secondary uppercase tracking-wider">{t(tr.card2, language).label}</p>
                <p className="text-xs text-warning mt-2">{t(tr.card2, language).sub}</p>
              </div>
            </div>
          </CyberCard>

          <CyberCard glow className="border-accent/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <ShieldAlert className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">90%</h3>
                <p className="text-sm text-ink-secondary uppercase tracking-wider">{t(tr.card3, language).label}</p>
                <p className="text-xs text-accent mt-2">{t(tr.card3, language).sub}</p>
              </div>
            </div>
          </CyberCard>
        </div>

      </div>

      <footer className="w-full text-right mt-auto pt-8 text-xs text-ink-tertiary font-mono">
        {t(tr.source, language)}
      </footer>
    </SlideLayout>
  );
}

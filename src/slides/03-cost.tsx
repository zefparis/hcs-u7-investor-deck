'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, StatCard } from '@/components/CyberComponents';
import { DollarSign, Activity, Lock, Users } from 'lucide-react';

export function SlideCost() {
  const { language } = useLanguage();
  const tr = translations.cost;
  
  // Mapping metrics to icons and colors
  const icons = [DollarSign, Activity, Lock, Users];
  const trends = ["+15% YoY", "+300% YoY", "Critical Risk", "Impact High"];
  const trendUps = [false, false, false, false]; // All these are bad things increasing or high risk

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle={t(tr.subtitle, language)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {tr.metrics[language].map((metric, i) => (
          <StatCard
            key={i}
            value={metric.value}
            label={metric.label}
            icon={icons[i % icons.length]}
            trend={t(tr.trends, language)[i % 4]}
            trendUp={trendUps[i % trendUps.length]}
          />
        ))}
      </div>

      <div className="mt-12 p-6 border border-accent/20 bg-accent/5 rounded-lg backdrop-blur-sm">
        <p className="text-center text-lg text-ink-secondary font-mono">
          {t(tr.quote, language)}
        </p>
      </div>
    </SlideLayout>
  );
}

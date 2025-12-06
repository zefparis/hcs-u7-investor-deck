'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { MetricCard } from '@/components/MetricCard';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideCost() {
  const { language } = useLanguage();
  const tr = translations.cost;
  const metrics = tr.metrics[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-16">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {metrics.map((metric, i) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            description={metric.description}
            variant={i === 0 || i === 1 ? 'danger' : 'default'}
            delay={i * 0.1}
          />
        ))}
      </div>
    </SlideLayout>
  );
}

'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { ProgressBar } from '@/components/ProgressBar';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideShift() {
  const { language } = useLanguage();
  const tr = translations.shift;

  const data = [
    { year: 2019, rate: 5 },
    { year: 2022, rate: 35 },
    { year: 2024, rate: 94 },
    { year: 2025, rate: 99 },
  ];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-16">
        {t(tr.title, language)}
      </h1>

      <div className="space-y-6 md:space-y-8 mb-16">
        {data.map((d, i) => (
          <ProgressBar key={d.year} year={d.year} rate={d.rate} delay={i * 0.15} />
        ))}
      </div>

      <p className="text-ink-secondary max-w-2xl leading-relaxed">
        {t(tr.description, language)}
      </p>

      <footer className="absolute bottom-8 left-20 text-xs text-ink-tertiary">
        Source: ETH Zurich, Arkose Labs, 2024
      </footer>
    </SlideLayout>
  );
}

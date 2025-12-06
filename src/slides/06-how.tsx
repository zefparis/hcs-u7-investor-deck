'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { TestCard } from '@/components/TestCard';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideHow() {
  const { language } = useLanguage();
  const tr = translations.how;
  const tests = tr.tests[language];

  return (
    <SlideLayout>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4">
        {t(tr.title, language)}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 mb-8">
        {tests.map((test, i) => (
          <TestCard
            key={test.name}
            name={test.name}
            year={test.year}
            line1={test.line1}
            line2={test.line2}
            delay={i * 0.1}
          />
        ))}
      </div>

      <footer className="text-xs text-ink-tertiary mt-auto">
        {t(tr.footer, language)}
      </footer>
    </SlideLayout>
  );
}

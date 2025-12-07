'use client';

import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import {
  SlideCover,
  SlideShift,
  SlideCost,
  SlideInsight,
  SlideSolution,
  SlideHow,
  SlideTechnology,
  SlideValidation,
  SlideMarket,
  SlideCompetition,
  SlideBusiness,
  SlideTraction,
  SlideGTM,
  SlideFinancials,
  SlideAsk,
  SlideTeam,
} from '@/slides';

const slides = [
  SlideCover,
  SlideShift,
  SlideCost,
  SlideInsight,
  SlideSolution,
  SlideHow,
  SlideTechnology,
  SlideValidation,
  SlideMarket,
  SlideCompetition,
  SlideBusiness,
  SlideTraction,
  SlideGTM,
  SlideFinancials,
  SlideAsk,
  SlideTeam,
];

function PrintContent() {
  const { language, setLanguage } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Get language from URL params
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang === 'en' || lang === 'fr') {
      setLanguage(lang);
    }
    
    // Enable dark mode for print
    document.documentElement.classList.add('dark');
    
    // Mark as ready after a short delay to ensure all content is rendered
    setTimeout(() => setIsReady(true), 500);
  }, [setLanguage]);

  useEffect(() => {
    if (isReady) {
      // Auto-print when ready
      window.print();
    }
  }, [isReady]);

  return (
    <div className="print-container">
      {slides.map((SlideComponent, index) => (
        <div key={index} className="print-slide">
          <SlideComponent />
        </div>
      ))}
      
      {!isReady && (
        <div className="fixed inset-0 bg-surface flex items-center justify-center z-50 no-print">
          <p className="text-ink">Préparation du PDF...</p>
        </div>
      )}
    </div>
  );
}

export default function PrintPage() {
  return (
    <LanguageProvider>
      <PrintContent />
    </LanguageProvider>
  );
}

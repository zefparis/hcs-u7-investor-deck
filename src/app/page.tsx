'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { LanguageProvider } from '@/lib/LanguageContext';
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const handleNavigate = useCallback((slide: number) => {
    setCurrentSlide(slide);
  }, []);

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const handleExportPDF = useCallback(() => {
    window.print();
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-surface pb-16">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
        
        <Navigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onNavigate={handleNavigate}
          onToggleDarkMode={handleToggleDarkMode}
          isDarkMode={isDarkMode}
          onExportPDF={handleExportPDF}
        />
      </main>
    </LanguageProvider>
  );
}

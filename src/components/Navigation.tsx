'use client';

import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onExportPDF: () => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onNavigate,
  onToggleDarkMode,
  isDarkMode,
  onExportPDF,
}: NavigationProps) {
  const { language, toggleLanguage } = useLanguage();

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      onNavigate(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      onNavigate(currentSlide - 1);
    }
  }, [currentSlide, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch/swipe handling
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border no-print"
    >
      <div className="max-w-[960px] mx-auto px-3 py-2 md:px-4 md:py-3">
        {/* Mobile: Two rows layout */}
        <div className="flex flex-col gap-2 md:hidden">
          {/* Row 1: Navigation arrows + slide counter */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="p-2 text-ink-secondary hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <span className="font-mono text-sm text-ink min-w-[60px] text-center">
                {currentSlide + 1} / {totalSlides}
              </span>
              
              <button
                onClick={goNext}
                disabled={currentSlide === totalSlides - 1}
                className="p-2 text-ink-secondary hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Settings buttons */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={onToggleDarkMode}
                className="p-2.5 text-ink-secondary hover:text-ink transition-colors border border-border rounded-lg"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 2V3M8 13V14M2 8H3M13 8H14M3.76 3.76L4.47 4.47M11.53 11.53L12.24 12.24M12.24 3.76L11.53 4.47M4.47 11.53L3.76 12.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M14 10.5A6 6 0 115.5 2a4.5 4.5 0 008.5 8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-sm font-mono font-medium border border-border rounded-lg flex items-center gap-1"
                aria-label="Toggle language"
              >
                <span className={language === 'fr' ? 'text-accent font-bold' : 'text-ink-tertiary'}>FR</span>
                <span className="text-ink-tertiary">/</span>
                <span className={language === 'en' ? 'text-accent font-bold' : 'text-ink-tertiary'}>EN</span>
              </button>

              {/* PDF export */}
              <button
                onClick={onExportPDF}
                className="px-3 py-2 text-sm font-medium text-accent border border-accent hover:bg-accent-muted transition-colors rounded-lg"
                aria-label="Export PDF"
              >
                PDF
              </button>
            </div>
          </div>

          {/* Row 2: Progress dots (scrollable) */}
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className={`flex-shrink-0 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? 'bg-accent w-5'
                    : 'bg-border hover:bg-ink-tertiary w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Single row layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? 'bg-accent w-6'
                    : 'bg-border hover:bg-ink-tertiary'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <span className="font-mono text-xs text-ink-tertiary">
            {currentSlide + 1} / {totalSlides}
          </span>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={currentSlide === 0}
              className="p-2 text-ink-secondary hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button
              onClick={goNext}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 text-ink-secondary hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="w-px h-4 bg-border mx-1" />

            <button
              onClick={onToggleDarkMode}
              className="p-2 text-ink-secondary hover:text-ink transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 2V3M8 13V14M2 8H3M13 8H14M3.76 3.76L4.47 4.47M11.53 11.53L12.24 12.24M12.24 3.76L11.53 4.47M4.47 11.53L3.76 12.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10.5A6 6 0 115.5 2a4.5 4.5 0 008.5 8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-2 py-1.5 text-xs font-mono font-medium text-ink-secondary hover:text-ink border border-border hover:border-ink-tertiary transition-colors rounded flex items-center gap-1"
              aria-label="Toggle language"
            >
              <span className={language === 'fr' ? 'text-accent font-bold' : ''}>FR</span>
              <span className="text-ink-tertiary">/</span>
              <span className={language === 'en' ? 'text-accent font-bold' : ''}>EN</span>
            </button>

            <button
              onClick={onExportPDF}
              className="px-3 py-1.5 text-xs font-medium text-accent border border-accent hover:bg-accent-muted transition-colors rounded"
              aria-label="Export PDF"
            >
              PDF
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

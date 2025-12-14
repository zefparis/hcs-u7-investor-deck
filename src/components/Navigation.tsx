'use client';

import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, FileDown, Globe } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onExportPDF: () => void;
}

// Mobile top bar component
export function MobileTopBar({
  onToggleDarkMode,
  isDarkMode,
  onExportPDF,
}: {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onExportPDF: () => void;
}) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-accent/20 no-print md:hidden"
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo/Brand */}
        <span className="font-mono text-sm font-bold text-accent tracking-widest text-glow">HCS-U7_SYSTEM</span>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="p-2 text-ink-secondary hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            <span className="font-mono text-xs font-bold">{language.toUpperCase()}</span>
          </button>

          <button
            onClick={onExportPDF}
            className="p-2 text-ink-secondary hover:text-accent transition-colors"
            aria-label="Export PDF"
          >
            <FileDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none no-print"
    >
      <div className="max-w-[800px] mx-auto px-4 pointer-events-auto">
        <div className="bg-surface-card/80 backdrop-blur-md border border-accent/20 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Scanning line effect */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Progress dots - Desktop */}
          <div className="hidden md:flex items-center gap-1.5 mr-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className={clsx(
                  "h-1 rounded-full transition-all duration-300",
                  i === currentSlide
                    ? "w-6 bg-accent shadow-[0_0_5px_var(--accent)]"
                    : "w-1 bg-ink-tertiary/30 hover:bg-ink-tertiary hover:w-2"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter - Mobile */}
          <div className="md:hidden font-mono text-xs text-accent">
            <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="opacity-50">/</span>
            <span className="opacity-50">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="p-2 text-ink-secondary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full hover:bg-white/5"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={goNext}
                disabled={currentSlide === totalSlides - 1}
                className="p-2 text-ink-secondary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full hover:bg-white/5"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="w-px h-6 bg-white/10" />

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 text-ink-secondary hover:text-accent transition-colors rounded-full hover:bg-white/5"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
              </button>

              <button
                onClick={onExportPDF}
                className="p-2 text-ink-secondary hover:text-accent transition-colors rounded-full hover:bg-white/5"
                aria-label="Export PDF"
              >
                <FileDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

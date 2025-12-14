'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { DigitalRain } from '@/components/DigitalRain';
import clsx from 'clsx';

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  showMatrixBackground?: boolean;
  matrixColor?: string;
}

export function SlideLayout({ 
  children, 
  className = '', 
  centered = false,
  showMatrixBackground = false,
  matrixColor
}: SlideLayoutProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={clsx(
        "slide relative overflow-x-hidden bg-surface",
        centered ? 'items-center justify-center text-center' : '',
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-surface cyber-grid opacity-30 pointer-events-none" />
      
      {showMatrixBackground && (
        <DigitalRain color={matrixColor} opacity={0.2} />
      )}
      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50 z-10" />

      {/* Content Container */}
      <div className={clsx(
        "relative z-10 w-full max-w-[1200px] mx-auto flex-1 flex flex-col",
        centered ? 'items-center justify-center' : ''
      )}>
        {children}
      </div>
    </motion.section>
  );
}

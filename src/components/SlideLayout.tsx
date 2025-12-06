'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function SlideLayout({ children, className = '', centered = false }: SlideLayoutProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`slide bg-surface ${centered ? 'items-center justify-center text-center' : ''} ${className}`}
    >
      <div className={`w-full max-w-[960px] mx-auto flex-1 flex flex-col ${centered ? 'items-center justify-center' : ''}`}>
        {children}
      </div>
    </motion.section>
  );
}

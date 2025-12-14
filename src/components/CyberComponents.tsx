'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

// --- Glitch Text Component ---
interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className, as: Component = 'span' }) => {
  return (
    <Component className={clsx("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 group-hover:opacity-70 animate-pulse translate-x-[2px] skew-x-12 transition-opacity duration-100">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-danger opacity-0 group-hover:opacity-70 animate-pulse -translate-x-[2px] -skew-x-12 transition-opacity duration-100 delay-75">
        {text}
      </span>
    </Component>
  );
};

// --- Cyber Badge Component ---
interface CyberBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'glow';
  className?: string;
}

export const CyberBadge: React.FC<CyberBadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: "bg-accent/10 text-accent border border-accent/20",
    outline: "border border-ink-secondary text-ink-secondary hover:border-accent hover:text-accent transition-colors",
    glow: "bg-accent text-surface-elevated shadow-[0_0_15px_rgba(0,240,255,0.5)] font-bold"
  };

  return (
    <span className={clsx(
      "inline-flex items-center px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-sm",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

// --- Cyber Card Component ---
interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, className, glow = false }) => {
  return (
    <div className={clsx(
      "relative p-6 bg-surface-card border border-border backdrop-blur-sm overflow-hidden group",
      glow && "hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300",
      className
    )}>
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
      
      {children}
    </div>
  );
};

// --- Stat Card Component ---
interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon: Icon, trend, trendUp }) => {
  return (
    <CyberCard glow className="flex flex-col items-center justify-center text-center py-8">
      {Icon && <Icon className="w-8 h-8 text-accent mb-4 opacity-80" />}
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter text-glow">
        {value}
      </div>
      <div className="text-sm text-ink-secondary uppercase tracking-widest font-mono">
        {label}
      </div>
      {trend && (
        <div className={clsx(
          "mt-2 text-xs font-mono",
          trendUp ? "text-success" : "text-danger"
        )}>
          {trend}
        </div>
      )}
    </CyberCard>
  );
};

// --- Cyber Progress Bar Component ---
interface CyberProgressBarProps {
  value: number;
  label: string;
  max?: number;
  color?: 'accent' | 'success' | 'danger' | 'warning';
}

export const CyberProgressBar: React.FC<CyberProgressBarProps> = ({ 
  value, 
  label, 
  max = 100,
  color = 'danger' 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colorClasses = {
    accent: 'bg-accent shadow-[0_0_10px_var(--accent)]',
    success: 'bg-success shadow-[0_0_10px_var(--success)]',
    danger: 'bg-danger shadow-[0_0_10px_var(--danger)]',
    warning: 'bg-warning shadow-[0_0_10px_var(--warning)]'
  };

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1 font-mono text-xs uppercase text-ink-secondary">
        <span>{label}</span>
        <span className={clsx(
          color === 'accent' && 'text-accent',
          color === 'success' && 'text-success',
          color === 'danger' && 'text-danger',
          color === 'warning' && 'text-warning'
        )}>{value}%</span>
      </div>
      <div className="h-4 bg-surface-elevated border border-border relative overflow-hidden -skew-x-12">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className={clsx("h-full relative", colorClasses[color])}
        >
          {/* Striped pattern overlay */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(45deg,rgba(0,0,0,.1) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1) 75%,transparent 75%,transparent)', 
            backgroundSize: '10px 10px' 
          }} />
        </motion.div>
      </div>
    </div>
  );
};

// --- Section Title Component ---
export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-3xl md:text-4xl font-bold text-white mb-2"
    >
      <span className="text-accent mr-2">/</span>
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-secondary text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-px w-24 bg-linear-to-r from-accent to-transparent mt-4" />
  </div>
);

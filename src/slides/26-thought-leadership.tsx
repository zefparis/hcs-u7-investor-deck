'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Linkedin, FileText, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';

export function SlideThoughtLeadership() {
  const { language } = useLanguage();
  const tr = translations.leadership;

  const metrics = [
    {
      icon: Linkedin,
      value: '2.5K+',
      label: t(tr.metrics, language)[0].label,
      trend: t(tr.metrics, language)[0].trend,
      color: 'text-accent'
    },
    {
      icon: FileText,
      value: '45+',
      label: t(tr.metrics, language)[1].label,
      trend: t(tr.metrics, language)[1].trend,
      color: 'text-success'
    },
    {
      icon: Users,
      value: '180+',
      label: t(tr.metrics, language)[2].label,
      trend: t(tr.metrics, language)[2].trend,
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: '12%',
      label: t(tr.metrics, language)[3].label,
      trend: t(tr.metrics, language)[3].trend,
      color: 'text-warning'
    }
  ];

  const posts = [
    {
      title: t(tr.posts, language)[0].title,
      date: t(tr.posts, language)[0].date,
      engagement: '1.2K reactions • 85 comments',
      impact: t(tr.posts, language)[0].impact,
      link: 'linkedin.com/in/benjaminbarrere'
    },
    {
      title: t(tr.posts, language)[1].title,
      date: t(tr.posts, language)[1].date,
      engagement: '890 reactions • 62 comments',
      impact: t(tr.posts, language)[1].impact,
      link: 'linkedin.com/in/benjaminbarrere'
    },
    {
      title: t(tr.posts, language)[2].title,
      date: t(tr.posts, language)[2].date,
      engagement: '1.5K reactions • 93 comments',
      impact: t(tr.posts, language)[2].impact,
      link: 'linkedin.com/in/benjaminbarrere'
    }
  ];

  return (
    <SlideLayout title={t(tr.title, language)} subtitle={t(tr.subtitle, language)}>
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="border border-border bg-surface-elevated p-4 rounded-lg text-center"
            >
              <Icon className={`w-6 h-6 ${metric.color} mx-auto mb-2`} />
              <div className={`text-3xl font-bold font-mono ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-sm text-ink mt-1">{metric.label}</div>
              <div className="text-xs text-ink-tertiary mt-1">{metric.trend}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Top Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-ink mb-4">{t(tr.postsTitle, language)}</h3>
        <div className="space-y-3">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="border border-border bg-surface-elevated p-4 rounded-lg hover:border-accent/50 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-ink mb-1">{post.title}</h4>
                  <div className="text-xs text-ink-tertiary mb-2">{post.date}</div>
                  <div className="text-xs text-accent font-mono mb-2">{post.engagement}</div>
                  <div className="text-xs text-success">✨ {post.impact}</div>
                </div>
                <Linkedin className="text-accent w-5 h-5 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Strategy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 p-6 border border-purple-500/30 bg-purple-500/5 rounded-lg"
      >
        <h4 className="text-lg font-bold text-purple-400 mb-3">{t(tr.strategyTitle, language)}</h4>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-ink mb-2">{t(tr.strategy, language)[0].title}</div>
            <div className="text-ink-tertiary text-xs">
              {t(tr.strategy, language)[0].desc}
            </div>
          </div>
          <div>
            <div className="font-semibold text-ink mb-2">{t(tr.strategy, language)[1].title}</div>
            <div className="text-ink-tertiary text-xs">
              {t(tr.strategy, language)[1].desc}
            </div>
          </div>
          <div>
            <div className="font-semibold text-ink mb-2">{t(tr.strategy, language)[2].title}</div>
            <div className="text-ink-tertiary text-xs">
              {t(tr.strategy, language)[2].desc}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 p-4 border border-accent/30 bg-accent/5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-accent">{t(tr.impact, language).title}</div>
            <div className="text-xs text-ink-tertiary mt-1">
              {t(tr.impact, language).desc}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">18</div>
            <div className="text-xs text-ink-tertiary">{t(tr.impact, language).stat}</div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

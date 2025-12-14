'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Linkedin, FileText, Users, TrendingUp } from 'lucide-react';

export function SlideThoughtLeadership() {
  const metrics = [
    {
      icon: Linkedin,
      value: '2.5K+',
      label: 'LinkedIn Followers',
      trend: '+340% (6 months)',
      color: 'text-accent'
    },
    {
      icon: FileText,
      value: '45+',
      label: 'Technical Posts',
      trend: '120K impressions',
      color: 'text-success'
    },
    {
      icon: Users,
      value: '180+',
      label: 'Engaged CISOs',
      trend: 'Active discussions',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      value: '12%',
      label: 'Engagement Rate',
      trend: '3x industry avg',
      color: 'text-warning'
    }
  ];

  const posts = [
    {
      title: 'GPT-4V broke CAPTCHAs. What now?',
      date: 'Dec 2024',
      engagement: '1.2K reactions • 85 comments',
      impact: 'Featured in TechCrunch article',
      link: 'linkedin.com/in/benjaminbarrere'
    },
    {
      title: 'Social Engineering vs Automation: Which threat scales?',
      date: 'Dec 2024',
      engagement: '890 reactions • 62 comments',
      impact: 'Sparked CISO debate (Gilles Soubrier thread)',
      link: 'linkedin.com/in/benjaminbarrere'
    },
    {
      title: 'Why timing-safe ops matter in 2025',
      date: 'Nov 2024',
      engagement: '1.5K reactions • 93 comments',
      impact: 'Shared by 3 VCs, 12 security firms',
      link: 'linkedin.com/in/benjaminbarrere'
    }
  ];

  return (
    <SlideLayout title="Thought Leadership" subtitle="Building brand authority in cognitive security">
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
        <h3 className="text-lg font-bold text-ink mb-4">Viral Technical Posts</h3>
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
        <h4 className="text-lg font-bold text-purple-400 mb-3">Content Strategy</h4>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-ink mb-2">Educational</div>
            <div className="text-ink-tertiary text-xs">
              Deep-dives on timing attacks, prompt injection, cognitive biometrics. 
              Build trust through technical expertise.
            </div>
          </div>
          <div>
            <div className="font-semibold text-ink mb-2">Provocative</div>
            <div className="text-ink-tertiary text-xs">
              Challenge industry assumptions ("CAPTCHAs are dead"). 
              Spark debates that position HCS-U7 as the alternative.
            </div>
          </div>
          <div>
            <div className="font-semibold text-ink mb-2">Transparent</div>
            <div className="text-ink-tertiary text-xs">
              Acknowledge limitations (social engineering). 
              Builds credibility and differentiates from hype-driven competitors.
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
            <div className="text-sm font-bold text-accent">Business Impact</div>
            <div className="text-xs text-ink-tertiary mt-1">
              45% of inbound leads attribute first touch to LinkedIn content
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">18</div>
            <div className="text-xs text-ink-tertiary">Enterprise demos booked</div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

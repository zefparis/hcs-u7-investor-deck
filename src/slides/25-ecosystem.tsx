'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Zap, Cloud, Shield, Cpu } from 'lucide-react';

export function SlideEcosystem() {
  const partnerships = [
    {
      icon: Zap,
      category: 'AI Infrastructure',
      partners: [
        {
          name: 'Mistral AI',
          logo: '🇫🇷',
          status: 'Integration planned',
          value: 'LLM-powered cognitive test generation',
          timeline: 'Q2 2025'
        },
        {
          name: 'Anthropic (Claude)',
          logo: '🤖',
          status: 'API integrated',
          value: 'Advanced prompt injection detection',
          timeline: 'Live'
        }
      ],
      color: 'purple'
    },
    {
      icon: Cloud,
      category: 'Cloud & Infrastructure',
      partners: [
        {
          name: 'Railway',
          logo: '🚂',
          status: 'Production deployment',
          value: 'Backend hosting (hcs-u7.online)',
          timeline: 'Live'
        },
        {
          name: 'Vercel',
          logo: '▲',
          status: 'Production deployment',
          value: 'Frontend hosting (Next.js)',
          timeline: 'Live'
        },
        {
          name: 'Cloudflare',
          logo: '☁️',
          status: 'Active',
          value: 'CDN + DDoS protection (200+ datacenters)',
          timeline: 'Live'
        }
      ],
      color: 'cyan'
    },
    {
      icon: Shield,
      category: 'Defense & Tactical',
      partners: [
        {
          name: 'ArduPilot / PX4',
          logo: '🚁',
          status: 'Integration planned',
          value: 'Open-source drone autopilot integration',
          timeline: 'Q1 2025'
        },
        {
          name: 'ATAK (TAK.gov)',
          logo: '🎖️',
          status: 'Evaluation',
          value: 'Android Team Awareness Kit plugin',
          timeline: 'Q2 2025'
        }
      ],
      color: 'green'
    },
    {
      icon: Cpu,
      category: 'Hardware & Security',
      partners: [
        {
          name: 'YubiKey (Yubico)',
          logo: '🔑',
          status: 'Roadmap',
          value: 'HSM integration for HCS-SHIELD',
          timeline: 'Q3 2025'
        },
        {
          name: 'AWS KMS',
          logo: '☁️',
          status: 'Active',
          value: 'Secret management (non-extractible keys)',
          timeline: 'Live'
        }
      ],
      color: 'yellow'
    }
  ];

  const colorMap = {
    purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success',
    yellow: 'border-warning bg-warning/5 text-warning'
  };

  return (
    <SlideLayout title="Ecosystem & Partnerships" subtitle="Strategic integrations for market expansion">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {partnerships.map((cat, idx) => {
          const Icon = cat.icon;
          const colors = colorMap[cat.color as keyof typeof colorMap];
          const textColor = colors.split(' ').pop();

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`border ${colors} p-5 rounded-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6`} />
                <h3 className={`text-lg font-bold`}>
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.partners.map((partner, i) => (
                  <div key={i} className="border-l-2 border-border pl-3 py-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{partner.logo}</span>
                      <span className="text-sm font-bold text-ink">{partner.name}</span>
                    </div>
                    <div className="text-xs text-ink-tertiary mb-1">{partner.value}</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-mono ${textColor}`}>
                        {partner.status}
                      </span>
                      <span className="text-ink-tertiary">{partner.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Partnership Strategy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 border border-border bg-surface-elevated rounded-lg"
      >
        <h4 className="text-lg font-bold text-ink mb-4">Partnership Strategy</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-semibold text-accent mb-2">Technology Partners</div>
            <p className="text-xs text-ink-tertiary">
              Leverage best-in-class infrastructure (Mistral AI, Cloudflare) 
              to accelerate time-to-market and reduce R&D costs.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-success mb-2">Distribution Partners</div>
            <p className="text-xs text-ink-tertiary">
              Integrate with existing tactical platforms (ATAK, ArduPilot) 
              to reach defense customers through established channels.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-purple-400 mb-2">Security Partners</div>
            <p className="text-xs text-ink-tertiary">
              Hardware integration (YubiKey, AWS KMS) for enterprise customers 
              requiring HSM-grade key protection.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 grid grid-cols-4 gap-4 text-center"
      >
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-purple-400">12+</div>
          <div className="text-xs text-ink-tertiary">Partners</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-accent">6</div>
          <div className="text-xs text-ink-tertiary">Live integrations</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-success">4</div>
          <div className="text-xs text-ink-tertiary">Defense channels</div>
        </div>
        <div className="p-3 border border-border bg-surface-elevated rounded">
          <div className="text-2xl font-bold text-warning">€0</div>
          <div className="text-xs text-ink-tertiary">Integration cost</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

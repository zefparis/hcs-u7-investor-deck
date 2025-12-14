'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Cloud, Server, Lock, Globe } from 'lucide-react';

export function SlideDeployment() {
  const options = [
    {
      icon: Cloud,
      title: 'HCS-AUTH Cloud (B2B SaaS)',
      subtitle: 'Multi-tenant SaaS platform',
      features: [
        'Fully managed infrastructure',
        'Auto-scaling (1-100K users)',
        '99.9% SLA uptime',
        'Global CDN distribution',
        'SOC2 Type II compliant',
        'GDPR/CCPA ready'
      ],
      pricing: '$50-500/user/year',
      deployment: '< 24h onboarding',
      color: 'cyan',
      icon2: '☁️'
    },
    {
      icon: Server,
      title: 'HCS-AUTH On-Premise (Enterprise)',
      subtitle: 'Self-hosted deployment',
      features: [
        'Docker/Kubernetes ready',
        'Air-gapped installation',
        'Custom LDAP/AD integration',
        'VPN/firewall isolation',
        'Dedicated support engineer',
        'Source code escrow option'
      ],
      pricing: '$50K/year base + $500/user',
      deployment: '2-4 weeks setup',
      color: 'purple',
      icon2: '🏢'
    },
    {
      icon: Lock,
      title: 'HCS-SHIELD Offline (Defense)',
      subtitle: 'Tactical offline PWA',
      features: [
        '100% offline operation',
        'No RF emissions (OPSEC)',
        'Sovereign hosting (France)',
        'Mission encryption (AES-256)',
        'QR code sealing',
        'Combat-hardened UX'
      ],
      pricing: '$5K-50K/unit/year',
      deployment: 'Instant (PWA install)',
      color: 'green',
      icon2: '🚁'
    },
    {
      icon: Globe,
      title: 'HCS-HYBRID (Global Orgs)',
      subtitle: 'Multi-region deployment',
      features: [
        'Cloud (HQ) + On-prem (sites)',
        'Active-active replication',
        'Regional compliance',
        'Centralized analytics',
        'Unified SSO',
        'Disaster recovery'
      ],
      pricing: 'Custom (volume discount)',
      deployment: '4-8 weeks rollout',
      color: 'yellow',
      icon2: '🌍'
    }
  ];

  const colorMap = {
    cyan: {
      border: 'border-accent',
      bg: 'bg-accent/5',
      text: 'text-accent',
      dot: 'bg-accent'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500/5',
      text: 'text-purple-400',
      dot: 'bg-purple-400'
    },
    green: {
      border: 'border-success',
      bg: 'bg-success/5',
      text: 'text-success',
      dot: 'bg-success'
    },
    yellow: {
      border: 'border-warning',
      bg: 'bg-warning/5',
      text: 'text-warning',
      dot: 'bg-warning'
    }
  };

  return (
    <SlideLayout title="Deployment Options" subtitle="Flexible architecture for every environment">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {options.map((option, idx) => {
          const Icon = option.icon;
          const colors = colorMap[option.color as keyof typeof colorMap];
          
          return (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`border ${colors.border} ${colors.bg} p-6 rounded-lg`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl">{option.icon2}</div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {option.title}
                  </h3>
                  <p className="text-sm text-ink-secondary">{option.subtitle}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-tertiary">Pricing:</span>
                  <span className={`font-mono font-bold ${colors.text}`}>
                    {option.pricing}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-tertiary">Deployment:</span>
                  <span className="text-ink">{option.deployment}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 border border-border bg-surface-elevated rounded-lg"
      >
        <div className="text-center">
          <p className="text-ink-secondary text-sm">
            <span className="text-accent font-bold">4 deployment models</span> • 
            <span className="text-success font-bold"> Cloud to air-gapped</span> • 
            <span className="text-purple-400 font-bold"> Custom integrations available</span>
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

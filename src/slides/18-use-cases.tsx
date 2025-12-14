'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { Building2, Shield, Plane, Heart, Factory, Landmark } from 'lucide-react';

export function SlideUseCases() {
  const sectors = [
    {
      icon: Building2,
      name: 'Enterprise',
      color: 'cyan',
      useCases: [
        {
          title: 'Passwordless MFA',
          desc: '30s auth impossible to phish',
          impact: '-95% credential theft'
        },
        {
          title: 'CEO Fraud Prevention',
          desc: 'Deepfake-resistant wire approval',
          impact: 'Save $4.5M avg breach'
        },
        {
          title: 'Remote Worker Auth',
          desc: 'VPN access cognitive gating',
          impact: '99.6% accuracy'
        }
      ]
    },
    {
      icon: Landmark,
      name: 'Finance',
      color: 'green',
      useCases: [
        {
          title: 'KYC/AML Verification',
          desc: 'ID document + cognitive proof',
          impact: 'Regulatory compliant'
        },
        {
          title: 'Wire Transfer Auth',
          desc: '>$100K transactions lock',
          impact: 'Zero AI spoofing'
        },
        {
          title: 'Trading Floor Access',
          desc: 'Physical + cognitive 2FA',
          impact: 'Insider threat ↓60%'
        }
      ]
    },
    {
      icon: Shield,
      name: 'Defense',
      color: 'red',
      useCases: [
        {
          title: 'Drone Anti-Takeover',
          desc: 'Mission sealing offline',
          impact: 'EW jamming resistant'
        },
        {
          title: 'Tactical Device Lock',
          desc: 'Weapon systems operator auth',
          impact: 'Unauthorized use = 0'
        },
        {
          title: 'Classified Access',
          desc: 'SCIF entry cognitive gate',
          impact: 'Spoof-proof'
        }
      ]
    },
    {
      icon: Heart,
      name: 'Healthcare',
      color: 'purple',
      useCases: [
        {
          title: 'EHR Access Control',
          desc: 'Doctor/nurse identity proof',
          impact: 'HIPAA compliant'
        },
        {
          title: 'Prescription Authorization',
          desc: 'Controlled substances lock',
          impact: 'Opioid fraud ↓80%'
        },
        {
          title: 'Surgery Room Auth',
          desc: 'Surgeon pre-op validation',
          impact: 'Wrong patient = 0'
        }
      ]
    },
    {
      icon: Factory,
      name: 'Industrial',
      color: 'yellow',
      useCases: [
        {
          title: 'SCADA Access',
          desc: 'Critical infrastructure lock',
          impact: 'Ransomware resistant'
        },
        {
          title: 'Robot Fleet Control',
          desc: 'Operator cognitive binding',
          impact: 'Sabotage proof'
        },
        {
          title: 'Nuclear Plant Auth',
          desc: 'Safety system operator gate',
          impact: 'Unauthorized = impossible'
        }
      ]
    },
    {
      icon: Plane,
      name: 'Aviation',
      color: 'blue',
      useCases: [
        {
          title: 'Cockpit Access',
          desc: 'Pilot pre-flight validation',
          impact: 'Impersonation = 0'
        },
        {
          title: 'ATC Authorization',
          desc: 'Air traffic controller auth',
          impact: 'Critical commands lock'
        },
        {
          title: 'Maintenance Approval',
          desc: 'Certified engineer gate',
          impact: 'Safety compliance'
        }
      ]
    }
  ];

  const colorMap = {
    cyan: 'border-accent bg-accent/5 text-accent',
    green: 'border-success bg-success/5 text-success',
    red: 'border-danger bg-danger/5 text-danger',
    purple: 'border-purple-500 bg-purple-500/5 text-purple-400',
    yellow: 'border-warning bg-warning/5 text-warning',
    blue: 'border-blue-500 bg-blue-500/5 text-blue-400'
  };

  return (
    <SlideLayout title="Use Cases Matrix" subtitle="Multi-sector applications of cognitive biometrics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
        {sectors.map((sector, idx) => {
          const Icon = sector.icon;
          const colors = colorMap[sector.color as keyof typeof colorMap];
          
          return (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`border ${colors} p-5 rounded-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-6 h-6`} />
                <h3 className={`text-lg font-bold`}>
                  {sector.name}
                </h3>
              </div>

              <div className="space-y-4">
                {sector.useCases.map((useCase, i) => (
                  <div key={i} className="border-l-2 border-surface-elevated pl-3">
                    <h4 className="text-sm font-semibold text-ink">{useCase.title}</h4>
                    <p className="text-xs text-ink-tertiary mt-1">{useCase.desc}</p>
                    <p className={`text-xs font-mono mt-1 opacity-80`}>
                      → {useCase.impact}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-ink-secondary text-sm">
          <span className="text-accent font-bold">18+ use cases</span> across 
          <span className="text-success font-bold"> 6 critical sectors</span>
          {' '}— One technology, unlimited applications
        </p>
      </motion.div>
    </SlideLayout>
  );
}

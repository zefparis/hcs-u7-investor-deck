'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { AlertTriangle, Shield, TrendingUp } from 'lucide-react';

export function SlideRisks() {
  const risks = [
    {
      category: 'Technology',
      color: 'red',
      items: [
        {
          risk: 'AI advances bypass cognitive tests',
          probability: 'Medium',
          mitigation: '7-test diversity + continuous model updates. Patents cover test generation method.',
          status: 'Active monitoring'
        },
        {
          risk: 'WebAuthn adoption too slow',
          probability: 'Low',
          mitigation: 'Fallback to SMS/Email OTP. 89% mobile support (iOS/Android). W3C standard.',
          status: 'Mitigated'
        },
        {
          risk: 'Timing attacks on validation',
          probability: 'Low',
          mitigation: '150ms latency floor + timing-safe ops. Audited by Siege-Wall (99.9/100).',
          status: 'Mitigated'
        }
      ]
    },
    {
      category: 'Market',
      color: 'yellow',
      items: [
        {
          risk: 'Big Tech (Google/Microsoft) enters space',
          probability: 'Medium',
          mitigation: 'Patents (20y protection). First-mover brand. Specialized niche (cognitive).',
          status: 'Patent moat'
        },
        {
          risk: 'Enterprise sales cycle too long',
          probability: 'Medium',
          mitigation: 'Dual GTM: SMB self-service (monthly) + Enterprise (annual). POC < 30 days.',
          status: 'Validated'
        },
        {
          risk: 'GDPR compliance blockers',
          probability: 'Low',
          mitigation: 'Local-only processing. No PII storage. Cognitive = non-biometric (CNIL clarified).',
          status: 'Legal opinion secured'
        }
      ]
    },
    {
      category: 'Competition',
      color: 'purple',
      items: [
        {
          risk: 'CAPTCHA 2.0 from incumbents',
          probability: 'High',
          mitigation: 'Already failed (hCaptcha, reCAPTCHA v3 = 94% bypass). HCS-U7 fundamentally different.',
          status: 'Competitive advantage'
        },
        {
          risk: 'Open-source clone',
          probability: 'Medium',
          mitigation: 'Patents prevent commercial use. 8-layer crypto = 5-7 years replication. Trade secrets.',
          status: 'IP protected'
        },
        {
          risk: 'Defense market protectionism',
          probability: 'Medium',
          mitigation: 'French sovereign solution (LWS hosting). NATO-compatible. No US dependencies.',
          status: 'Advantage (France/EU)'
        }
      ]
    },
    {
      category: 'Execution',
      color: 'cyan',
      items: [
        {
          risk: 'Key person dependency (founder)',
          probability: 'High',
          mitigation: 'Hiring CTO Q1 2025. Code documentation. IP legally separated.',
          status: 'Recruiting active'
        },
        {
          risk: 'Burn rate vs runway',
          probability: 'Medium',
          mitigation: '€500K seed = 18mo runway. Revenue projections conservative (€60K Y1).',
          status: 'Fundraising Q1'
        },
        {
          risk: 'Regulatory changes (AI Act)',
          probability: 'Low',
          mitigation: 'Cognitive = human measurement, not AI decision. Compliant-by-design.',
          status: 'Monitoring EU AI Act'
        }
      ]
    }
  ];

  const colorMap = {
    red: { border: 'border-danger', bg: 'bg-danger/5', text: 'text-danger', dot: 'bg-danger' },
    yellow: { border: 'border-warning', bg: 'bg-warning/5', text: 'text-warning', dot: 'bg-warning' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-500/5', text: 'text-purple-400', dot: 'bg-purple-400' },
    cyan: { border: 'border-accent', bg: 'bg-accent/5', text: 'text-accent', dot: 'bg-accent' }
  };

  return (
    <SlideLayout title="Risk Mitigation" subtitle="Proactive risk management strategy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[650px] overflow-y-auto pr-4 custom-scrollbar">
        {risks.map((category, catIdx) => {
          const colors = colorMap[category.color as keyof typeof colorMap];
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              className={`border ${colors.border} ${colors.bg} p-5 rounded-lg`}
            >
              <h3 className={`text-lg font-bold ${colors.text} mb-4 flex items-center gap-2`}>
                <AlertTriangle className="w-5 h-5" />
                {category.category} Risks
              </h3>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-border pl-3 pb-3">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-sm font-semibold text-ink">{item.risk}</h4>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {item.probability}
                      </span>
                    </div>
                    <p className="text-xs text-ink-tertiary mt-1 mb-2">{item.mitigation}</p>
                    <div className={`text-xs font-mono ${colors.text} flex items-center gap-2`}>
                      <Shield className="w-3 h-3" />
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Overall Assessment */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-6 border border-success/30 bg-success/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <TrendingUp className="text-success w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-success mb-2">Risk Profile: Manageable</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-ink font-semibold mb-1">Technology Risk</div>
                <div className="text-ink-tertiary text-xs">
                  <span className="text-success font-bold">Low:</span> Patents + 8-layer crypto + continuous updates
                </div>
              </div>
              <div>
                <div className="text-ink font-semibold mb-1">Market Risk</div>
                <div className="text-ink-tertiary text-xs">
                  <span className="text-warning font-bold">Medium:</span> Competitive but defensible (IP moat)
                </div>
              </div>
              <div>
                <div className="text-ink font-semibold mb-1">Execution Risk</div>
                <div className="text-ink-tertiary text-xs">
                  <span className="text-warning font-bold">Medium:</span> Mitigated by seed funding + hiring plan
                </div>
              </div>
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              <span className="text-success font-bold">Conclusion:</span> All high/medium risks have active mitigation strategies. 
              €500K seed provides runway to execute risk reduction plan.
            </p>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

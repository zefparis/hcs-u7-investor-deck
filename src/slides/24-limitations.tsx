'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export function SlideLimitations() {
  const scope = {
    what_we_do: [
      {
        title: 'Automated Attacks (95% of fraud)',
        items: [
          'Bots & scrapers (99.6% detection)',
          'Credential stuffing (scalable)',
          'Prompt injection (LLM jailbreaks)',
          'Click fraud (scripts)',
          'Account takeover (mass attacks)'
        ],
        impact: '€95B/year global cost (FBI IC3)',
        icon: CheckCircle,
        color: 'text-success'
      }
    ],
    what_we_dont: [
      {
        title: 'Manual Targeted Attacks (5% of volume)',
        items: [
          'Social engineering (Mitnick-style)',
          'Insider threats (malicious employees)',
          'Supply chain attacks (SolarWinds)',
          'Zero-days (hardware vulnerabilities)',
          'Physical access (stolen devices)'
        ],
        impact: 'High impact but not scalable',
        icon: XCircle,
        color: 'text-danger'
      }
    ]
  };

  return (
    <SlideLayout title="What We DON'T Do" subtitle="Honest scope = credible product">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-success bg-success/5 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-success w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-success">What HCS-U7 Blocks</h3>
              <p className="text-sm text-ink-tertiary">Attacks that scale</p>
            </div>
          </div>

          <div className="space-y-4">
            {scope.what_we_do.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-ink mb-2">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 p-3 bg-success/10 border border-success/30 rounded text-xs text-success">
                  💰 {category.impact}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What We Don't */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-danger bg-danger/5 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="text-danger w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-danger">What HCS-U7 Doesn't Block</h3>
              <p className="text-sm text-ink-tertiary">Manual targeted attacks</p>
            </div>
          </div>

          <div className="space-y-4">
            {scope.what_we_dont.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-ink mb-2">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-ink-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-danger mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 p-3 bg-danger/10 border border-danger/30 rounded text-xs text-danger">
                  ⚠️ {category.impact}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Defense Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-6 border border-warning/30 bg-warning/5 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-warning w-8 h-8 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-warning mb-3">Complete Defense Strategy</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-semibold text-ink mb-2">For Automated Threats (95%):</div>
                <div className="text-sm text-ink-secondary space-y-1">
                  <div>✅ HCS-U7 (cognitive biometrics)</div>
                  <div>✅ WAF (web application firewall)</div>
                  <div>✅ Rate limiting</div>
                  <div>✅ IP reputation</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink mb-2">For Manual Threats (5%):</div>
                <div className="text-sm text-ink-secondary space-y-1">
                  <div>🎓 Employee training (awareness)</div>
                  <div>🔒 Access controls (least privilege)</div>
                  <div>👥 SOC team (24/7 monitoring)</div>
                  <div>📋 Incident response plan</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-ink-tertiary mt-4">
              <span className="text-warning font-bold">Key insight:</span> Automate defense against 95% of attacks → 
              Free up security teams for the critical 5% (APT, insider threats)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why This Matters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 p-4 border border-accent/30 bg-accent/5 rounded-lg"
      >
        <div className="text-center">
          <p className="text-ink-secondary text-sm">
            <span className="text-accent font-bold">Transparency builds trust.</span> We don't claim to be a silver bullet. 
            We solve the <span className="text-success font-bold">scalable threat problem</span> (95% of fraud), 
            so CISOs can focus resources on <span className="text-danger font-bold">targeted APTs</span> (5% but critical).
          </p>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

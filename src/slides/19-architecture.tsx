'use client';

import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/SlideLayout';

export function SlideArchitecture() {
  return (
    <SlideLayout title="Architecture Deep-Dive" subtitle="Production-grade dual deployment">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CLOUD ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-accent bg-accent/5 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
            <span>☁️</span> HCS-AUTH (Cloud)
          </h3>

          <div className="space-y-3 font-mono text-sm">
            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">Frontend Layer</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ Next.js 16 + React 19</div>
                <div>→ Admin: hcs-u7.info</div>
                <div>→ Client: hcs-u7.online</div>
                <div>→ Marketing: hcs-u7.com</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">Backend Layer</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ Fastify (Node.js)</div>
                <div>→ Railway deployment</div>
                <div>→ 88 files production</div>
                <div>→ Siege-Wall audited</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">Security Layers (8)</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>1. QSIG + B3 signatures</div>
                <div>2. Hieroglyphic Shield</div>
                <div>3. Celestial Entropy</div>
                <div>4. AES-256-GCM</div>
                <div>5. Timing-safe (150ms min)</div>
                <div>6. Proof-of-Work</div>
                <div>7. Rate limiting</div>
                <div>8. Audit blockchain</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-accent font-bold mb-2">Database</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ PostgreSQL (Railway)</div>
                <div>→ Redis (caching)</div>
                <div>→ Encrypted at rest</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-success/10 border border-success rounded">
            <div className="text-success font-bold text-sm">Security Audit</div>
            <div className="text-ink-secondary text-xs mt-1">
              518 attacks blocked • 0 breaches • 15 days continuous
            </div>
          </div>
        </motion.div>

        {/* OFFLINE ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-success bg-success/5 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
            <span>📱</span> HCS-SHIELD (Offline)
          </h3>

          <div className="space-y-3 font-mono text-sm">
            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">PWA Application</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ Next.js 16 PWA</div>
                <div>→ shield.ia-solution.fr</div>
                <div>→ Offline-first</div>
                <div>→ IndexedDB storage</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">Cognitive Tests (7)</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>1. Reaction (V)</div>
                <div>2. Memory</div>
                <div>3. Tracing (F)</div>
                <div>4. Pattern (Cr)</div>
                <div>5. Scroll (S)</div>
                <div>6. Coordination (S)</div>
                <div>7. Stroop (C)</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">Crypto Embedded</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ QSIG (HMAC-SHA256 local)</div>
                <div>→ B3 (BLAKE3 local)</div>
                <div>→ AES-256-GCM (QR)</div>
                <div>→ Web Crypto API</div>
              </div>
            </div>

            <div className="bg-surface-elevated p-3 rounded border border-border">
              <div className="text-success font-bold mb-2">Mission Planning</div>
              <div className="text-ink-secondary text-xs space-y-1">
                <div>→ MapBox integration</div>
                <div>→ Waypoints GPS</div>
                <div>→ QR code generation</div>
                <div>→ Offline operations</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500 rounded">
            <div className="text-purple-400 font-bold text-sm">Deployment</div>
            <div className="text-ink-secondary text-xs mt-1">
              LWS France • ISO 27001 • Sovereign hosting
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 p-4 border border-warning/30 bg-warning/5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-warning font-bold">Production Stats</div>
            <div className="text-ink-secondary text-sm mt-1">
              88 backend files • 7 cognitive tests • 8 security layers • 100% uptime
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-warning">99.9%</div>
            <div className="text-xs text-ink-tertiary">Reliability</div>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
}

'use client';

import { SlideLayout } from '@/components/SlideLayout';
import { FunnelChart } from '@/components/FunnelChart';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations, t } from '@/lib/translations';
import { SectionTitle, CyberCard } from '@/components/CyberComponents';
import { TrendingUp, ShieldCheck, Scale } from 'lucide-react';

export function SlideMarket() {
  const { language } = useLanguage();
  const tr = translations.market;
  const funnel = tr.funnel[language];
  const drivers = tr.drivers[language];

  const driverIcons = [TrendingUp, ShieldCheck, Scale];

  return (
    <SlideLayout showMatrixBackground matrixColor="#00F0FF">
      <SectionTitle 
        title={t(tr.title, language)} 
        subtitle="Addressable Market & Growth Vectors"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Funnel Chart */}
        <div>
          <FunnelChart items={funnel} />
        </div>

        {/* Growth Drivers */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-wider text-ink-tertiary mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span>
            {t(tr.driversLabel, language)}
          </h3>

          <div className="space-y-4">
            {drivers.map((driver, index) => {
              const Icon = driverIcons[index % driverIcons.length];
              return (
                <motion.div
                  key={driver.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <CyberCard glow className="bg-surface-elevated/50">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-ink-tertiary uppercase tracking-wider mb-1">
                          {driver.label}
                        </p>
                        <p className="text-xl font-bold text-white text-glow">
                          {driver.value}
                        </p>
                      </div>
                    </div>
                  </CyberCard>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 p-4 border border-accent/20 bg-accent/5 rounded-lg">
            <p className="text-sm text-ink-secondary font-mono">
              MARKET_CAGR: +24% (2024-2030)
              <br/>
              REGULATORY_TAILWINDS: STRONG
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

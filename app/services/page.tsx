'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { PageShell } from '@/components/shared/page-shell';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { Sparkles, Music, Palette, UtensilsCrossed, Camera, PartyPopper, Check, ArrowRight } from 'lucide-react';

const iconMap = [Sparkles, Music, Palette, UtensilsCrossed, Camera, PartyPopper];

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-beige/40">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-champagne blur-[120px]" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-champagne" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-burgundy">
              {t.servicesPage.hero.eyebrow}
            </span>
            <span className="h-px w-8 bg-champagne" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight max-w-4xl mx-auto text-balance"
          >
            {t.servicesPage.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto"
          >
            {t.servicesPage.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-20 md:py-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20 md:space-y-32">
            {t.servicesPage.detailed.map((service, i) => {
              const Icon = iconMap[i] || Sparkles;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Visual */}
                  <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow">
                      <img
                        src={[
                          'https://images.pexels.com/photos/16120229/pexels-photo-16120229.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/3703732/pexels-photo-3703732.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/30235759/pexels-photo-30235759.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/9443497/pexels-photo-9443497.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/5030011/pexels-photo-5030011.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/37975406/pexels-photo-37975406.jpeg?auto=compress&cs=tinysrgb&w=800',
                        ][i]}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className={`absolute -bottom-6 ${isReversed ? '-left-6 md:-left-12' : '-right-6 md:-right-12'} w-20 h-20 rounded-2xl bg-champagne flex items-center justify-center luxury-shadow-lg`}>
                      <Icon className="h-9 w-9 text-obsidian" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-serif text-5xl font-bold text-champagne/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-charcoal/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-burgundy" />
                          </span>
                          <span className="text-sm text-charcoal/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-beige/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={t.servicesPage.process.eyebrow}
            title={t.servicesPage.process.title}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.servicesPage.process.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-warmwhite rounded-2xl p-8 border border-champagne/20"
              >
                <span className="font-serif text-5xl font-bold gold-text mb-4 block">{item.step}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                {i < 3 && (
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-full' : 'left-full'} w-6`}>
                    <div className="h-px bg-champagne/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-champagne blur-[120px] rounded-full" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-warmwhite mb-6 text-balance">{t.cta.title}</h2>
            <p className="text-warmwhite/70 mb-8">{t.cta.subtitle}</p>
            <LuxuryButton href="/contact" size="lg" variant="primary" icon={<ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />}>
              {t.cta.button}
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

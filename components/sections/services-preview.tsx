'use client';

import { motion } from 'framer-motion';
import { Sparkles, Music, Palette, UtensilsCrossed, Camera, PartyPopper, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';

const iconMap = [
  Sparkles,
  Music,
  Palette,
  UtensilsCrossed,
  Camera,
  PartyPopper,
];

export function ServicesPreview() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-beige/40">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[i] || Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-warmwhite rounded-2xl p-8 border border-champagne/20 transition-all duration-500 hover:luxury-shadow hover:border-champagne/40 hover:-translate-y-1"
              >
                <div className="relative w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-champagne group-hover:scale-110">
                  <Icon className="h-7 w-7 text-champagne transition-colors duration-500 group-hover:text-warmwhite" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <LuxuryButton href="/services" variant="outline" icon={<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />}>
            {t.services.cta}
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}

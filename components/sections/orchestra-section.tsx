'use client';

import { motion } from 'framer-motion';
import { Music, Check } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { ArrowRight } from 'lucide-react';

export function OrchestraSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-champagne blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-champagne blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image/visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow-lg">
              <img
                src="https://images.pexels.com/photos/3703732/pexels-photo-3703732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t.orchestra.eyebrow}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 md:-right-12 w-32 h-32 rounded-full bg-champagne flex items-center justify-center luxury-shadow-lg"
            >
              <div className="text-center">
                <Music className="h-8 w-8 text-warmwhite mx-auto mb-1" />
                <span className="text-xs font-serif font-semibold text-warmwhite">Lahn Al Khouloud</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-champagne" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">
                {t.orchestra.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6 text-balance">
              {t.orchestra.title}
            </h2>
            <p className="text-base md:text-lg text-charcoal/70 leading-relaxed mb-8">
              {t.orchestra.description}
            </p>
            <ul className="space-y-3 mb-10">
              {t.orchestra.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-champagne" />
                  </span>
                  <span className="text-sm md:text-base text-charcoal/80">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <LuxuryButton href="/orchestra" variant="outline" className="border-champagne text-champagne hover:bg-champagne hover:text-warmwhite" icon={<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />}>
              {t.orchestra.cta}
            </LuxuryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

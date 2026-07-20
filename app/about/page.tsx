'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { PageShell } from '@/components/shared/page-shell';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { Sparkles, Heart, Shield, HandHeart } from 'lucide-react';

const valueIcons = [Sparkles, Heart, Shield, HandHeart];

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-beige/40">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-champagne blur-[120px]" />
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
              {t.about.hero.eyebrow}
            </span>
            <span className="h-px w-8 bg-champagne" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight max-w-4xl mx-auto text-balance"
          >
            {t.about.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto"
          >
            {t.about.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.pexels.com/photos/15482084/pexels-photo-15482084.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={t.about.story.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 w-28 h-28 rounded-2xl bg-champagne flex items-center justify-center luxury-shadow-lg">
                <span className="font-serif text-4xl font-bold text-obsidian">15</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-champagne" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-burgundy">
                  {t.about.story.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 text-balance">
                {t.about.story.title}
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
                  {t.about.story.paragraph1}
                </p>
                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
                  {t.about.story.paragraph2}
                </p>
                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
                  {t.about.story.paragraph3}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-beige/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={t.about.values.eyebrow}
            title={t.about.values.title}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.items.map((value, i) => {
              const Icon = valueIcons[i] || Sparkles;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-warmwhite rounded-2xl p-8 border border-champagne/20 transition-all duration-500 hover:luxury-shadow hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-champagne group-hover:scale-110">
                    <Icon className="h-7 w-7 text-champagne transition-colors duration-500 group-hover:text-obsidian" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={t.about.timeline.eyebrow}
            title={t.about.timeline.title}
          />
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute top-0 bottom-0 w-px bg-champagne/40 ${isRTL ? 'right-4 md:right-1/2 md:translate-x-1/2' : 'left-4 md:left-1/2 md:-translate-x-1/2'}`} />

              {t.about.timeline.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute top-2 ${isRTL ? 'right-4 md:right-1/2 md:translate-x-1/2' : 'left-4 md:left-1/2 md:-translate-x-1/2'} w-3 h-3 rounded-full bg-champagne ring-4 ring-warmwhite z-10`} />

                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`bg-beige/50 rounded-2xl p-6 border border-champagne/20 ${i % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                      <span className="font-serif text-2xl font-bold gold-text">{item.year}</span>
                      <h3 className="font-serif text-lg font-semibold text-charcoal mt-2 mb-2">{item.title}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-obsidian">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-warmwhite mb-6 text-balance">{t.cta.title}</h2>
            <p className="text-warmwhite/70 mb-8">{t.cta.subtitle}</p>
            <LuxuryButton href="/contact" size="lg" variant="outline" className="border-champagne text-champagne hover:bg-champagne hover:text-obsidian">
              {t.cta.button}
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

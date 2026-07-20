'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { PageShell } from '@/components/shared/page-shell';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { Music, ArrowRight } from 'lucide-react';

const memberImages = [
  'https://images.pexels.com/photos/3703732/pexels-photo-3703732.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3984819/pexels-photo-3984819.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8040894/pexels-photo-8040894.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3984817/pexels-photo-3984817.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/8044176/pexels-photo-8044176.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/9213703/pexels-photo-9213703.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function OrchestraPage() {
  const { t, isRTL } = useLanguage();

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8044176/pexels-photo-8044176.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-champagne-dark/30 via-black/60 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-champagne" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">
              {t.orchestraPage.hero.eyebrow}
            </span>
            <span className="h-px w-8 bg-champagne" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-warmwhite leading-tight max-w-4xl mx-auto text-balance"
          >
            {t.orchestraPage.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-warmwhite/70 max-w-2xl mx-auto"
          >
            {t.orchestraPage.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* About the orchestra */}
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
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.pexels.com/photos/3984819/pexels-photo-3984819.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={t.orchestraPage.about.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 md:-right-12 w-28 h-28 rounded-full bg-champagne flex items-center justify-center luxury-shadow-lg"
              >
                <div className="text-center">
                  <Music className="h-8 w-8 text-obsidian mx-auto mb-1" />
                  <span className="text-xs font-serif font-semibold text-obsidian">12 Musiciens</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 text-balance">
                {t.orchestraPage.about.title}
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
                  {t.orchestraPage.about.paragraph1}
                </p>
                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
                  {t.orchestraPage.about.paragraph2}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-20 md:py-32 bg-beige/40">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={t.orchestraPage.repertoire.eyebrow}
            title={t.orchestraPage.repertoire.title}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.orchestraPage.repertoire.categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-warmwhite rounded-2xl p-8 border border-champagne/20 transition-all duration-500 hover:luxury-shadow hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-3xl font-bold text-champagne/30">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{cat.name}</h3>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-20 md:py-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={t.orchestraPage.members.eyebrow}
            title={t.orchestraPage.members.title}
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {t.orchestraPage.members.items.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 luxury-shadow">
                  <img
                    src={memberImages[i]}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">{member.name}</h3>
                <p className="text-xs text-charcoal/50 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 md:py-28 bg-champagne-dark relative overflow-hidden">
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
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 text-balance">
              {t.orchestraPage.booking.title}
            </h2>
            <p className="text-charcoal/70 mb-8">{t.orchestraPage.booking.subtitle}</p>
            <LuxuryButton href="/contact" size="lg" variant="outline" className="border-champagne text-champagne hover:bg-champagne hover:text-burgundy" icon={<ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />}>
              {t.orchestraPage.booking.cta}
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

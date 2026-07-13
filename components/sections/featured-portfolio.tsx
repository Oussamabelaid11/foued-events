'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { ArrowRight } from 'lucide-react';
import { portfolioImages } from '@/lib/site-config';

export function FeaturedPortfolio() {
  const { t, isRTL } = useLanguage();
  const featuredImages = portfolioImages.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-warmwhite">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {featuredImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}
            >
              <img
                src={img}
                alt={`${t.portfolio.eyebrow} ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-champagne-light text-sm font-medium">
                  {t.portfolioPage.projects[i].title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <LuxuryButton href="/portfolio" variant="outline" icon={<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />}>
            {t.portfolio.viewAll}
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}

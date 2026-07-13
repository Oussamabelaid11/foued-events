'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { PageShell } from '@/components/shared/page-shell';
import { portfolioImages } from '@/lib/site-config';
import { cn } from '@/lib/utils';

type Category = 'all' | 'ceremony' | 'reception' | 'decor' | 'music' | 'detail';

export default function PortfolioPage() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t.portfolioPage.categories.all },
    { key: 'ceremony', label: t.portfolioPage.categories.ceremony },
    { key: 'reception', label: t.portfolioPage.categories.reception },
    { key: 'decor', label: t.portfolioPage.categories.decor },
    { key: 'music', label: t.portfolioPage.categories.music },
    { key: 'detail', label: t.portfolioPage.categories.detail },
  ];

  const filteredProjects = activeCategory === 'all'
    ? t.portfolioPage.projects
    : t.portfolioPage.projects.filter((p) => p.category === activeCategory);

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
              {t.portfolioPage.hero.eyebrow}
            </span>
            <span className="h-px w-8 bg-champagne" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight max-w-4xl mx-auto text-balance"
          >
            {t.portfolioPage.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto"
          >
            {t.portfolioPage.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat.key
                    ? 'bg-champagne text-warmwhite luxury-shadow'
                    : 'bg-beige/50 text-charcoal/60 hover:bg-champagne/20 hover:text-burgundy'
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const imgIndex = t.portfolioPage.projects.indexOf(project);
                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={portfolioImages[imgIndex % portfolioImages.length]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs uppercase tracking-wide text-champagne mb-2 block">
                        {project.year} · {project.location}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-charcoal">{project.title}</h3>
                      <span className="inline-block mt-2 text-xs text-charcoal/60">
                        {t.portfolioPage.categories[project.category as keyof typeof t.portfolioPage.categories]}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

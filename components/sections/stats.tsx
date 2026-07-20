'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne blur-[150px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-2xl md:text-3xl text-warmwhite/90 mb-14 text-balance"
        >
          {t.stats.title}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-6xl font-bold gold-text mb-2">
                {stat.value}
              </div>
              <div className="h-px w-12 bg-champagne mx-auto mb-3" />
              <p className="text-sm md:text-base text-warmwhite/60 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

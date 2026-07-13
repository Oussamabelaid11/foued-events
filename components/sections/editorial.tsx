'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { SectionHeader } from '@/components/shared/section-header';

export function Editorial() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-warmwhite grain">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={t.editorial.eyebrow}
            title={t.editorial.title}
            align="center"
          />
          <div className="mt-10 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-charcoal/70 leading-relaxed text-center text-balance"
            >
              {t.editorial.paragraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-charcoal/70 leading-relaxed text-center text-balance"
            >
              {t.editorial.paragraph2}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="w-16 h-px bg-champagne" />
            <p className="font-serif text-lg italic text-burgundy">{t.editorial.signature}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

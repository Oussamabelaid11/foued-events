'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function FinalCTA() {
  const { t, isRTL } = useLanguage();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32142669/pexels-photo-32142669.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-champagne-dark/30 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-champagne" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-champagne-light">
              {t.brandName}
            </span>
            <span className="h-px w-12 bg-champagne" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LuxuryButton href="/contact" size="lg" variant="primary" icon={<ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />}>
              {t.cta.button}
            </LuxuryButton>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-base font-medium hover:bg-[#1fa855] transition-all duration-300 luxury-shadow hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta.whatsapp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

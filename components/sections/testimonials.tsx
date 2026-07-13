'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { SectionHeader } from '@/components/shared/section-header';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-beige/40">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <Carousel opts={{ loop: true, align: 'center' }}>
            <CarouselContent>
              {t.testimonials.items.map((item, i) => (
                <CarouselItem key={i} className="md:basis-1/1 lg:basis-1/1">
                  <div className="bg-beige rounded-3xl p-8 md:p-12 luxury-shadow mx-auto max-w-3xl border border-champagne/10">
                    <Quote className="h-10 w-10 text-champagne mb-6" />
                    <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 text-balance italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-serif text-lg font-semibold text-burgundy">{item.author}</p>
                        <p className="text-sm text-charcoal/50">{item.event}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-champagne text-champagne" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-6 bg-beige border-champagne/30 hover:bg-champagne/20 text-champagne" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-6 bg-beige border-champagne/30 hover:bg-champagne/20 text-champagne" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { SectionHeader } from '@/components/shared/section-header';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export function FAQPreview() {
  const { t, isRTL } = useLanguage();
  const faqItems = t.faq.items.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-warmwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <LuxuryButton href="/contact" variant="outline" icon={<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />}>
                {t.cta.button}
              </LuxuryButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-champagne/20"
                >
                  <AccordionTrigger className="text-base md:text-lg font-serif font-medium text-charcoal hover:text-burgundy transition-colors py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-charcoal/60 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

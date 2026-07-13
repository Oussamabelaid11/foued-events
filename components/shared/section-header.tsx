'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  const { isRTL } = useLanguage();
  const alignClass = align === 'center' ? 'text-center mx-auto' : isRTL ? 'text-right' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-3xl', alignClass, className)}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-3 mb-4', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-champagne" />
          <span className={cn('text-xs font-medium uppercase tracking-[0.2em]', light ? 'text-champagne' : 'text-burgundy')}>
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-champagne" />
        </div>
      )}
      <h2
        className={cn(
          'font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance',
          light ? 'text-charcoal' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-charcoal/70' : 'text-charcoal/60'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

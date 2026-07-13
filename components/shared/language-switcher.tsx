'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { type Locale, localeShort } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    if (open) {
      document.addEventListener('click', handler);
      return () => document.removeEventListener('click', handler);
    }
  }, [open]);

  const switchTo = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div className={cn('relative', className)} onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal/80 hover:text-champagne transition-colors rounded-full hover:bg-champagne/10"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{localeShort[locale]}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute top-full mt-2 w-36 rounded-2xl bg-beige border border-champagne/30 shadow-xl overflow-hidden z-50',
              isRTL ? 'left-0' : 'right-0'
            )}
          >
            <button
              onClick={() => switchTo('fr')}
              className={cn(
                'flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-champagne/10',
                locale === 'fr' ? 'text-champagne font-medium' : 'text-charcoal/70'
              )}
            >
              <span className="text-base">FR</span>
              <span>Français</span>
              {locale === 'fr' && <span className="ml-auto h-2 w-2 rounded-full bg-champagne" />}
            </button>
            <div className="h-px bg-champagne/20" />
            <button
              onClick={() => switchTo('ar')}
              className={cn(
                'flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-champagne/10',
                locale === 'ar' ? 'text-champagne font-medium' : 'text-charcoal/70'
              )}
            >
              <span className="text-base">AR</span>
              <span>العربية</span>
              {locale === 'ar' && <span className="ml-auto h-2 w-2 rounded-full bg-champagne" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

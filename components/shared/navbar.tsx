'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { navLinks, siteConfig } from '@/lib/site-config';
import { LanguageSwitcher } from '@/components/shared/language-switcher';
import { LuxuryButton } from '@/components/shared/luxury-button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { t, isRTL } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => href === pathname;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 glass',
          scrolled ? 'shadow-md py-2' : 'py-4'
        )}
      >
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-105">
              <img
                src="/logo-gold.png"
                alt="Foued Events logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                  isActive(link.href) ? 'text-burgundy' : 'text-charcoal/70 hover:text-burgundy'
                )}
              >
                {t.nav[link.key as keyof typeof t.nav]}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-champagne rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher />
            <div className="hidden md:block">
              <LuxuryButton href="/contact" size="sm" variant="primary">
                {t.nav.quote}
              </LuxuryButton>
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-burgundy transition-colors"
              aria-label={t.common.menu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn('absolute top-0 bottom-0 w-[85%] max-w-sm bg-warmwhite shadow-2xl flex flex-col', isRTL ? 'left-0' : 'right-0')}
            >
              <div className="flex items-center justify-between p-6 border-b border-champagne/20">
                <div className="w-12 h-12">
                  <img src="/logo-gold.png" alt="Foued Events logo" className="w-full h-full object-contain" />
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-charcoal hover:text-burgundy transition-colors" aria-label={t.common.close}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300',
                          isActive(link.href)
                            ? 'bg-champagne/15 text-burgundy'
                            : 'text-charcoal/80 hover:bg-champagne/10 hover:text-burgundy'
                        )}
                      >
                        {t.nav[link.key as keyof typeof t.nav]}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-champagne/20">
                <LuxuryButton href="/contact" size="md" variant="primary" className="w-full">
                  {t.nav.quote}
                </LuxuryButton>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-charcoal/50">
                  <span>{siteConfig.phoneDisplay}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

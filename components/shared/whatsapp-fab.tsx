'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { siteConfig } from '@/lib/site-config';

export function WhatsAppFAB() {
  const { t, isRTL } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltipOpen(true), 1000);
      const closeTimer = setTimeout(() => setTooltipOpen(false), 6000);
      return () => { clearTimeout(timer); clearTimeout(closeTimer); };
    }
  }, [visible]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed bottom-6 z-40 ${isRTL ? 'left-6' : 'right-6'} flex items-center gap-3`}
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 10 : -10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: isRTL ? 10 : -10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative bg-beige rounded-2xl shadow-xl px-4 py-3 max-w-[200px]"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-1.5 right-1.5 text-charcoal/30 hover:text-charcoal/60 transition-colors"
                  aria-label={t.common.close}
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-xs text-charcoal/80 font-medium pr-3">
                  {t.cta.whatsapp}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.whatsapp}
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircle className="h-7 w-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

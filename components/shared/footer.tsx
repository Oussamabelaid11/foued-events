'use client';

import Link from 'next/link';
import { Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { navLinks, siteConfig } from '@/lib/site-config';

export function Footer() {
  const { t, isRTL } = useLanguage();
  const year = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <footer className="relative bg-obsidian text-warmwhite overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px gold-line" />

      {/* Background ornament */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-champagne blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-black">
                <img
                  src="/Presentation_plan_de_marketing_professionnelle_et_moderne_bleu_et_blanc.png"
                  alt="Fouad Events logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <p className="text-sm text-warmwhite/60 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.info.facebook}
                className="w-10 h-10 rounded-full border border-warmwhite/20 flex items-center justify-center text-warmwhite/70 hover:text-champagne hover:border-champagne transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.info.whatsapp}
                className="w-10 h-10 rounded-full border border-warmwhite/20 flex items-center justify-center text-warmwhite/70 hover:text-champagne hover:border-champagne transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label={t.contact.info.phoneLabel}
                className="w-10 h-10 rounded-full border border-warmwhite/20 flex items-center justify-center text-warmwhite/70 hover:text-champagne hover:border-champagne transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-5 text-champagne">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-warmwhite/60 hover:text-champagne transition-colors duration-300"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-medium mb-5 text-champagne">{t.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-champagne mt-1 shrink-0" />
                <span className="text-sm text-warmwhite/60 leading-relaxed">
                  {isRTL ? siteConfig.address.ar : siteConfig.address.fr}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-champagne shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-warmwhite/60 hover:text-champagne transition-colors" dir="ltr">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-champagne shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-warmwhite/60 hover:text-champagne transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours / CTA */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-5 text-champagne">{t.contact.info.hoursLabel}</h3>
            <p className="text-sm text-warmwhite/60 leading-relaxed mb-4">{t.contact.info.hours}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-champagne text-obsidian text-sm font-medium hover:bg-champagne-light transition-all duration-300 luxury-shadow"
            >
              {t.nav.quote}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-warmwhite/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmwhite/40">
            &copy; {year} {t.brandName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-warmwhite/40">{t.footer.madeWith}</span>
            <Link href="/contact" className="text-xs text-warmwhite/40 hover:text-champagne transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

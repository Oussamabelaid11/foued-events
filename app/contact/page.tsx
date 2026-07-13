'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { PageShell } from '@/components/shared/page-shell';
import { SectionHeader } from '@/components/shared/section-header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(2, ' '),
    email: z.string().email(' '),
    phone: z.string().min(4, ' '),
    date: z.string().optional(),
    service: z.string().min(1, ' '),
    message: z.string().min(10, ' '),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-beige/40">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-champagne blur-[120px]" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-champagne" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-burgundy">
              {t.contact.eyebrow}
            </span>
            <span className="h-px w-8 bg-champagne" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight max-w-4xl mx-auto text-balance"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 md:py-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <div className="bg-beige/40 rounded-3xl p-6 md:p-10 border border-champagne/20">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-champagne mb-4" />
                    </motion.div>
                    <p className="font-serif text-xl text-charcoal max-w-md">{t.contact.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="mb-2 block text-charcoal/70">{t.contact.form.name}</Label>
                        <Input
                          {...register('name')}
                          placeholder={t.contact.form.namePlaceholder}
                          className="bg-warmwhite border-champagne/30 rounded-xl focus-visible:ring-champagne"
                        />
                        {errors.name && <span className="text-xs text-burgundy mt-1 block">{t.contact.form.error}</span>}
                      </div>
                      <div>
                        <Label className="mb-2 block text-charcoal/70">{t.contact.form.email}</Label>
                        <Input
                          type="email"
                          {...register('email')}
                          placeholder={t.contact.form.emailPlaceholder}
                          className="bg-warmwhite border-champagne/30 rounded-xl focus-visible:ring-champagne"
                        />
                        {errors.email && <span className="text-xs text-burgundy mt-1 block">{t.contact.form.error}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label className="mb-2 block text-charcoal/70">{t.contact.form.phone}</Label>
                        <Input
                          type="tel"
                          {...register('phone')}
                          placeholder={t.contact.form.phonePlaceholder}
                          className="bg-warmwhite border-champagne/30 rounded-xl focus-visible:ring-champagne"
                          dir="ltr"
                        />
                        {errors.phone && <span className="text-xs text-burgundy mt-1 block">{t.contact.form.error}</span>}
                      </div>
                      <div>
                        <Label className="mb-2 block text-charcoal/70">{t.contact.form.date}</Label>
                        <Input
                          type="date"
                          {...register('date')}
                          placeholder={t.contact.form.datePlaceholder}
                          className="bg-warmwhite border-champagne/30 rounded-xl focus-visible:ring-champagne"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block text-charcoal/70">{t.contact.form.service}</Label>
                      <select
                        {...register('service')}
                        className="w-full h-10 rounded-xl border border-champagne/30 bg-warmwhite px-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-champagne [&>option]:bg-warmwhite [&>option]:text-charcoal"
                      >
                        <option value="">{t.contact.form.servicePlaceholder}</option>
                        {t.contact.form.services.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-xs text-burgundy mt-1 block">{t.contact.form.error}</span>}
                    </div>

                    <div>
                      <Label className="mb-2 block text-charcoal/70">{t.contact.form.message}</Label>
                      <Textarea
                        {...register('message')}
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        className="bg-warmwhite border-champagne/30 rounded-xl focus-visible:ring-champagne resize-none"
                      />
                      {errors.message && <span className="text-xs text-burgundy mt-1 block">{t.contact.form.error}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-champagne text-warmwhite text-sm font-medium hover:bg-champagne-dark transition-all duration-500 luxury-shadow hover:luxury-shadow-lg disabled:opacity-60 w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-warmwhite/30 border-t-warmwhite rounded-full animate-spin" />
                          {t.contact.form.sending}
                        </>
                      ) : (
                        <>
                          <Send className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                          {t.contact.form.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-warmwhite rounded-2xl p-6 border border-champagne/20">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-5">{t.contact.info.phoneLabel}</h3>
                <div className="space-y-4">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                    <span className="w-11 h-11 rounded-xl bg-champagne/10 flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                      <Phone className="h-5 w-5 text-champagne group-hover:text-warmwhite transition-colors duration-300" />
                    </span>
                    <span className="text-sm text-charcoal/70 group-hover:text-champagne transition-colors" dir="ltr">{siteConfig.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                    <span className="w-11 h-11 rounded-xl bg-champagne/10 flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                      <Mail className="h-5 w-5 text-champagne group-hover:text-warmwhite transition-colors duration-300" />
                    </span>
                    <span className="text-sm text-charcoal/70 group-hover:text-champagne transition-colors">{siteConfig.email}</span>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-champagne" />
                    </span>
                    <span className="text-sm text-charcoal/70 leading-relaxed pt-3">
                      {isRTL ? siteConfig.address.ar : siteConfig.address.fr}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-champagne" />
                    </span>
                    <span className="text-sm text-charcoal/70 leading-relaxed pt-3">{t.contact.info.hours}</span>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-obsidian rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-champagne mb-4">{t.footer.followUs}</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#1fa855] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:bg-[#0d5fbf] transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-32 bg-warmwhite">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 text-center">{t.contact.mapTitle}</h2>
            <div className="relative rounded-3xl overflow-hidden luxury-shadow border border-champagne/20 h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.0!2d10.4236!3d36.4794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI4JzQ1LjgiTiAxMMKwMjUnMjQuOSJF!5e0!3m2!1sfr!2stn!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.contact.mapTitle}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}

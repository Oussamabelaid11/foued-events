export type Locale = 'fr' | 'ar';

export const locales: Locale[] = ['fr', 'ar'];
export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  ar: 'العربية',
};

export const localeShort: Record<Locale, string> = {
  fr: 'FR',
  ar: 'AR',
};

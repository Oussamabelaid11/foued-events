import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Groupe Foued — Mariage & Événements de Luxe | Tazarka, Nabeul',
    template: '%s | Groupe Foued',
  },
  description:
    'Groupe Foued, votre wedding planner de luxe à Tazarka, Nabeul. Organisation de mariages, orchestre Lahn Al Khouloud, décoration, traiteur et photographie. Plus de 450 mariages réalisés en Tunisie.',
  keywords: [
    'mariage luxe Tunisie',
    'wedding planner Nabeul',
    'orchestre mariage Tazarka',
    'Lahn Al Khouloud',
    'Groupe Foued',
    'organisateur mariage Tunisie',
    'décoration mariage Nabeul',
    'traiteur mariage Tunisie',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_TN',
    alternateLocale: 'ar_TN',
    url: siteConfig.url,
    title: 'Groupe Foued — Mariage & Événements de Luxe',
    description:
      'Votre wedding planner de luxe à Tazarka, Nabeul. Orchestre, décoration, traiteur et plus pour des mariages d\'exception.',
    siteName: 'Groupe Foued',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Groupe Foued — Mariage & Événements de Luxe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groupe Foued — Mariage & Événements de Luxe',
    description:
      'Votre wedding planner de luxe à Tazarka, Nabeul. Orchestre, décoration, traiteur et plus.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      fr: siteConfig.url,
      ar: siteConfig.url,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Groupe Foued',
    alternateName: 'مجموعة فؤاد',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue Habib Bourguiba',
      addressLocality: 'Tazarka',
      addressRegion: 'Nabeul',
      postalCode: '8011',
      addressCountry: 'TN',
    },
    sameAs: [siteConfig.facebook],
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: 'Groupe Foued',
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue Habib Bourguiba',
      addressLocality: 'Tazarka',
      addressRegion: 'Nabeul',
      postalCode: '8011',
      addressCountry: 'TN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: 'Tunisia',
  };

  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${arabic.variable} font-sans`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

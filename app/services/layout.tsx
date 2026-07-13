import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Organisation, Orchestre, Décoration | Groupe Foued',
  description:
    'Organisation de mariages, orchestre Lahn Al Khouloud, décoration, traiteur, photographie et événements privés. Six pôles d\'expertise pour un mariage d\'exception en Tunisie.',
  alternates: { canonical: '/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

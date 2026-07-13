import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Réalisations & Mariages | Groupe Foued',
  description:
    'Découvrez une sélection de mariages et événements orchestrés par le Groupe Foued. Cérémonies, réceptions, décoration, musique et détails qui font la différence.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

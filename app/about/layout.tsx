import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos — Groupe Foued | Wedding Planner de Luxe à Tazarka',
  description:
    'Découvrez l\'histoire du Groupe Foued, fondé par Foued à Tazarka. Quinze ans d\'expérience, 450+ mariages réalisés, et une passion pour l\'excellence au service de votre plus beau jour.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

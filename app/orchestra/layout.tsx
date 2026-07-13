import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestre Lahn Al Khouloud — Musique Live pour Mariages | Groupe Foued',
  description:
    'Lahn Al Khouloud, l\'orchestre résident du Groupe Foued : 12 musiciens professionnels, répertoire arabe et international. La mélodie de vos souvenirs, de Tazarka à toute la Tunisie.',
  alternates: { canonical: '/orchestra' },
};

export default function OrchestraLayout({ children }: { children: React.ReactNode }) {
  return children;
}

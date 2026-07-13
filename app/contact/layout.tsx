import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Demandez votre Devis | Groupe Foued',
  description:
    'Contactez le Groupe Foued pour organiser votre mariage de luxe à Tazarka, Nabeul. Devis gratuit, réponse sous 24h. Téléphone, WhatsApp et formulaire en ligne.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

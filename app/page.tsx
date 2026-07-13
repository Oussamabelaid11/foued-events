import { PageShell } from '@/components/shared/page-shell';
import { Hero } from '@/components/sections/hero';
import { Editorial } from '@/components/sections/editorial';
import { ServicesPreview } from '@/components/sections/services-preview';
import { Stats } from '@/components/sections/stats';
import { FeaturedPortfolio } from '@/components/sections/featured-portfolio';
import { OrchestraSection } from '@/components/sections/orchestra-section';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQPreview } from '@/components/sections/faq-preview';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Editorial />
      <ServicesPreview />
      <Stats />
      <FeaturedPortfolio />
      <OrchestraSection />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </PageShell>
  );
}

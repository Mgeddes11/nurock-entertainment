import { Hero } from "../components/organisms/Hero";
import { ServicesGrid } from "../components/organisms/ServicesGrid";
import { TheSoundSection } from "../components/organisms/TheSoundSection";
import { CTASection } from "../components/organisms/CTASection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TheSoundSection />
      <CTASection />
    </>
  );
}

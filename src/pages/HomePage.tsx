import { Hero } from "../components/organisms/Hero";
import { CredibilitySection } from "../components/organisms/CredibilitySection";
import { ServicesGrid } from "../components/organisms/ServicesGrid";
import { TheSoundSection } from "../components/organisms/TheSoundSection";
import { CTASection } from "../components/organisms/CTASection";

export function HomePage() {
  return (
    <>
      <Hero />
      <CredibilitySection variant="home" />
      <ServicesGrid />
      <TheSoundSection />
      <CTASection />
    </>
  );
}

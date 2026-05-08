import { Navbar } from "@/components/layout/navbar";

import { CTASection, Footer, HeroSection, PricingSection, ServicesSection, StatsSection, TestimonialsSection } from "@/components/sections";


export default function HomePage() {
  return (
    <main>
      {/* <Navbar /> */}

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />

      <Footer />
    </main>
  )
}
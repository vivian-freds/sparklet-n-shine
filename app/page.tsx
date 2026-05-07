import { Navbar } from '@/components/layout/navbar'

import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { ServicesSection } from '@/components/sections/services'
import { PricingSection } from '@/components/sections/pricing'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

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
import { CTASection, Footer, PricingSection, ServicesSection, TestimonialsSection } from "@/components/sections";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50/50">
      
      {/* Page Header */}
      <section className="relative px-4 pt-32 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Comprehensive <span className="text-blue-600">Cleaning Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            From quick Airbnb turnovers to deep residential cleaning, explore our full range of professional services tailored to meet your exact needs and standards.
          </p>
        </div>
      </section>

      {/* Services List (Uses the existing component) */}
      <ServicesSection />

      {/* Pricing Options */}
      <PricingSection />

      {/* Social Proof */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CTASection />

      <Footer />
    </main>
  );
}

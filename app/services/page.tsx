import { CTASection, Footer, PricingSection, ServicesSection, TestimonialsSection } from "@/components/sections";
import { CalendarCheck, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

const processSteps = [
  {
    title: "1. Request a Quote",
    description: "Reach out via our website, call, or WhatsApp. Tell us about your space and specific cleaning requirements.",
    icon: <PhoneCall className="h-6 w-6 text-blue-600" />
  },
  {
    title: "2. Schedule Your Clean",
    description: "Pick a date and time that fits seamlessly into your routine. We offer flexible booking for homes, offices, and Airbnb.",
    icon: <CalendarCheck className="h-6 w-6 text-blue-600" />
  },
  {
    title: "3. We Get to Work",
    description: "Our vetted professionals arrive fully equipped with premium, eco-friendly products to transform your space.",
    icon: <Sparkles className="h-6 w-6 text-blue-600" />
  },
  {
    title: "4. Enjoy the Shine",
    description: "Relax and enjoy your spotlessly clean environment, backed by our 100% customer satisfaction guarantee.",
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
  }
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50/50">
      
      {/* Page Header */}
      <section className="relative px-4 pt-32 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Comprehensive <span className="text-blue-600">Cleaning Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            From quick Airbnb turnovers to deep residential cleaning, explore our full range of professional services tailored to meet your exact needs and standards. Our team is fully equipped to handle spaces of all sizes across Nairobi.
          </p>
        </div>
      </section>

      {/* Services List (Uses the existing component) */}
      <ServicesSection hideViewAll={true} hideLearnMore={true} />

      {/* How We Work Process Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
           <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Seamless Process</h2>
             <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Booking professional cleaning shouldn&apos;t be a chore. We&apos;ve optimized our workflow to ensure you get a spotless space without any of the stress.</p>
           </div>
           
           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
              {/* Optional connecting line for desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>
              
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                   <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-50 shadow-md transition-transform hover:scale-110">
                     {step.icon}
                   </div>
                   <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                   <p className="text-sm leading-relaxed text-slate-600 px-4">{step.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

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

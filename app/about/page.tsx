import Image from "next/image";
import { CheckCircle2, ShieldCheck, Leaf, Users } from "lucide-react";
import { CTASection, Footer, StatsSection } from "@/components/sections";

const values = [
  {
    title: "Trusted Professionals",
    description: "Every cleaner on our team is thoroughly vetted, trained, and insured to give you total peace of mind.",
    icon: <ShieldCheck className="h-6 w-6 text-yellow-600" />
  },
  {
    title: "Eco-Friendly Products",
    description: "We use safe, sustainable cleaning products that are tough on dirt but gentle on your family and pets.",
    icon: <Leaf className="h-6 w-6 text-yellow-600" />
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. If you're not happy, we'll return to make it right—guaranteed.",
    icon: <Users className="h-6 w-6 text-yellow-600" />
  },
  {
    title: "Unmatched Quality",
    description: "We don't cut corners; we clean them. Experience a meticulous, hotel-standard clean every time.",
    icon: <CheckCircle2 className="h-6 w-6 text-yellow-600" />
  }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32 bg-slate-50/50">
      
      {/* Hero Section */}
      <section className="relative px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Setting the Standard for <br className="hidden sm:block" />
            <span className="text-blue-600">Premium Cleaning</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            At Sparklet & Shine, we believe a clean space is the foundation for a clear mind. We are Nairobi&apos;s premier cleaning service, bringing spotlessness and peace of mind to homes, Air BNBs, and businesses alike.
          </p>
        </div>
      </section>

      {/* Stats Section (Already has image and about text) */}
      <StatsSection hideLearnMore={true} />

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-slate-600">The core values that drive our commitment to excellence.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition hover:shadow-lg">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}

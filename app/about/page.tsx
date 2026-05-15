import Image from "next/image";
import { CheckCircle2, ShieldCheck, Leaf, Users, Target, Award, Sparkles, Heart, Zap } from "lucide-react";
import { CTASection, Footer, StatsSection } from "@/components/sections";

const values = [
  {
    title: "Trusted Professionals",
    description: "Every cleaner on our team is thoroughly vetted, background-checked, and trained to provide peace of mind.",
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
  },
  {
    title: "Eco-Friendly Products",
    description: "We exclusively use safe, sustainable products that are tough on grime but gentle on your family and pets.",
    icon: <Leaf className="h-6 w-6 text-emerald-600" />
  },
  {
    title: "Customer First",
    description: "Your happiness is our priority. If you're not 100% satisfied, we'll return to make it right—guaranteed.",
    icon: <Heart className="h-6 w-6 text-rose-500" />
  },
  {
    title: "Unmatched Quality",
    description: "We bring a hotel-standard clean to every space, ensuring every corner shines with perfection.",
    icon: <Award className="h-6 w-6 text-yellow-500" />
  }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32 bg-slate-50/50">
      
      {/* Hero Section */}
      <section className="relative px-4 pb-20 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-yellow-100/50 blur-3xl" />
        
        <div className="mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Story</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl leading-[1.1]">
            Elevating the <br className="hidden sm:block" />
            <span className="text-blue-600">Standard of Living</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
            Sparklet & Shine was born from a vision to bring premium, reliable, and trustworthy cleaning services to Nairobi&apos;s most discerning homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection hideLearnMore={true} />

      {/* Our Story / Mission Section - MAINTAINED TEXT */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Content Area */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
                <Target className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Mission</span>
              </div>
              
              <h2 className="mb-8 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                Redefining the standard of clean across Nairobi.
              </h2>
              
              <div className="space-y-8 text-base md:text-lg leading-relaxed text-slate-600">
                <p>
                  Sparklet &amp; Shine Co. was founded with a simple goal: to provide reliable, top-tier cleaning services that actually make a difference. We recognized a gap in the market for professional cleaners who treat every home and office with the same meticulous care they would their own.
                </p>
                <p>
                  We are not just a cleaning company; we are your partners in maintaining a healthy, stress-free environment. Whether you manage a bustling Airbnb, a large corporate office, or simply need an extra hand keeping your home spotless, our highly-trained team brings precision, eco-friendly products, and a commitment to excellence to every job.
                </p>
                
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-5">
                    <div className="h-16 w-16 rounded-2xl bg-blue-600 overflow-hidden relative shadow-lg rotate-3 group">
                       <Image 
                         src="/images/founder.png" 
                         alt="Founder" 
                         fill 
                         className="object-cover object-top transition-transform group-hover:scale-110" 
                       />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Sparklet Leadership</h4>
                      <p className="text-sm font-medium text-blue-600">Committed to Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Collage Area */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                   <div className="h-56 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl">
                     <Image src="/images/residential_cleaning_1778827681402.png" alt="Residential Cleaning" fill className="object-cover" />
                   </div>
                   <div className="h-72 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl">
                     <Image src="/images/commercial_cleaning_1778827651938.png" alt="Commercial Cleaning" fill className="object-cover" />
                   </div>
                 </div>
                 <div className="space-y-4 pt-12">
                   <div className="h-72 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl">
                     <Image src="/images/move_in_cleaning_1778827666240.png" alt="Move-in Cleaning" fill className="object-cover" />
                   </div>
                   <div className="h-56 rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-xl">
                     <Image src="/images/post_construction_1778827694625.png" alt="Post-construction" fill className="object-cover" />
                   </div>
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-slate-900 p-6 rounded-3xl shadow-2xl z-20 max-w-[200px] hidden md:block">
                <Zap className="h-8 w-8 mb-2" />
                <p className="font-bold leading-tight">Same Day Availability in Selected Areas</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Meet the Founder / Leadership */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 -z-10 opacity-10 blur-2xl" />
               <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                 <Image 
                   src="/images/founder.png" 
                   alt="Sparklet and Shine Founder" 
                   fill 
                   className="object-cover object-top"
                 />
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
                 <Zap className="h-4 w-4" />
                 <span className="text-xs font-bold uppercase tracking-[0.2em]">Leadership</span>
               </div>
               <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl mb-6">Built on Trust and Integrity.</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8">
                 &quot;I founded Sparklet & Shine with one goal in mind: to restore the value of time for my clients. We don&apos;t just clean surfaces; we create environments where people can thrive, relax, and focus on what matters most. Our team is trained not just in technique, but in empathy and care.&quot;
               </p>
               <div className="flex items-center gap-4">
                 <div className="h-[2px] w-12 bg-blue-600" />
                 <span className="font-bold text-slate-900 uppercase tracking-widest text-sm">Founder & CEO</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl mb-6">Our Core Values</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">The principles that guide every wipe, every sweep, and every interaction with our valued clients.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={idx} className="group relative rounded-[2.5rem] bg-slate-50 p-10 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{value.description}</p>
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

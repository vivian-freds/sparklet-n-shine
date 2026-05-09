

// import Image from "next/image";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const stats = [
//   { label: "Happy Families Served", value: "500+" },
//   { label: "Customer Satisfaction", value: "99%" },
//   { label: "Homes Cleaned", value: "1,000+" },
//   { label: "Satisfaction Guarantee", value: "100%" },
// ];

// export function StatsSection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="container mx-auto px-4">
        
//         {/* --- Stats Grid Area --- */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
//           {stats.map((stat, i) => (
//             <div 
//               key={i} 
//               className="group p-8 rounded-3xl bg-[#f5f3ff] transition-all hover:bg-[#ede9fe] flex flex-col gap-2"
//             >
//               <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
//                 {stat.label}
//               </p>
//               <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
//                 {stat.value}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* --- About Overview Area --- */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Main Hero Image */}
//           <div className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
//             <Image
//               src="/images/about-image.jpg" // Ensure this is in your /public folder
//               alt="Professional cleaning team at work"
//               fill
//               className="object-cover"
//               priority
//             />
//             {/* Dark overlay to make the image feel more "premium" */}
//             <div className="absolute inset-0 bg-black/5" />
//           </div>

//           {/* Overlapping Content Card */}
//           <div className="absolute -bottom-12 right-0 md:right-10 w-[92%] md:max-w-md bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50">
//             <div className="flex items-center gap-2 mb-6 text-[#6366f1]">
//                <Sparkles className="h-5 w-5" />
//                <span className="text-xs font-bold uppercase tracking-[0.2em]">About Us</span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] text-slate-900 mb-8">
//               We Are A Dedicated team of Cleaning Professionals Committed to Making.
//             </h2>

//             <Button 
//               className="rounded-full bg-[#6366f1] hover:bg-[#4f46e5] px-8 py-7 h-auto text-lg font-semibold transition-transform hover:scale-105 active:scale-95"
//             >
//               Learn More About Us
//               <ArrowRight className="ml-3 h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Air BNBs Cleaned", value: "200+" },
  { label: "Offices & Residences", value: "250+" },
  { label: "Customer Satisfaction", value: "99%" },
  { label: "Satisfaction Guarantee", value: "100%" },
];

export function StatsSection() {
  return (
    <section id="about" className="w-full overflow-hidden bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* ---------- Stats Grid ---------- */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-blue-50 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 md:p-8"
            >
              {/* Royal Blue Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-600 transition-colors duration-300 group-hover:text-blue-200 md:text-xs">
                  {stat.label}
                </p>

                <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-white md:text-5xl">
                  {stat.value}
                  <span className="text-yellow-500">.</span>
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* ---------- About Section ---------- */}
        <div className="relative mt-10">

          <div className="flex flex-col overflow-hidden rounded-[2rem] bg-slate-50 md:relative md:block md:h-[420px]">
            {/* Image Container */}
            <div className="relative h-[250px] w-full md:absolute md:inset-0 md:h-full md:w-full">
              <Image
                src="/images/about-image.jpg"
                alt="Professional cleaning team at work"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 hidden md:block" />
            </div>

            {/* About Card */}
            <div className="bg-blue-50 p-6 md:absolute md:bottom-6 md:right-6 md:h-auto md:w-[360px] md:rounded-[2rem] md:bg-white/95 md:p-7 md:shadow-2xl md:backdrop-blur-md">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700 md:bg-yellow-50">
                <Sparkles className="h-4 w-4 text-yellow-600" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl">
                Professional Cleaning Services Designed For Modern Homes.
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Skilled cleaners, eco-friendly products,
                and spotless results tailored for your home.
              </p>

              {/* CTA */}
              <Link href="/about">
                <Button className="mt-5 h-auto rounded-md bg-yellow-500 px-5 py-4 text-sm font-semibold text-slate-900 transition-all hover:bg-yellow-400">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
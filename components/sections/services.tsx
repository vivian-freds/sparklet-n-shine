"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "BNB Cleaning",
    description:
      "Specialized cleaning for Airbnb and short-term rentals. We ensure a 5-star guest experience with rapid turnover and professional staging.",
    image: "/images/bnb-cleaning.jpg",
  },
  {
    id: "02",
    title: "Residential Cleaning",
    description:
      "Personalized home cleaning services tailored to your lifestyle. From deep cleans to regular maintenance, we keep your sanctuary spotless.",
    image: "/images/residential.jpg",
  },
  {
    id: "03",
    title: "Commercial & Office Cleaning",
    description:
      "Create a healthier, more productive workplace with our commercial cleaning services.",
    image: "/images/office-cleaning.jpg",
  },
  {
    id: "04",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Take the stress out of moving with our detailed deep-cleaning service.",
    image: "/images/move-in.jpg",
  },
  {
    id: "05",
    title: "Post-Construction Cleaning",
    description:
      "We remove dust and debris after renovations or new builds.",
    image: "/images/construction.jpg",
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("03");

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* ---------- Header ---------- */}
        <div className="mb-12 md:mb-16">

          {/* Badge */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-slate-300" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Cleaning Services Designed For Your Lifestyle
            </h2>

            <Link href="#">
              <Button
                variant="outline"
                className="group h-auto rounded-full border-slate-200 px-5 py-5 text-sm font-medium text-slate-700 hover:bg-slate-100 md:px-6 md:py-6"
              >
                View All Services

                <div className="ml-3 rounded-full bg-slate-900 p-1 text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight size={14} />
                </div>
              </Button>
            </Link>

          </div>
        </div>

        {/* ---------- Services ---------- */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white">

          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "border-b border-slate-100 transition-all duration-300 last:border-none",
                activeId === service.id && "bg-slate-50/60"
              )}
            >

              {/* Accordion Trigger */}
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full text-left"
              >
                <div className="grid grid-cols-[50px_1fr_auto] items-center gap-3 px-4 py-5 md:grid-cols-[90px_1fr_auto] md:gap-6 md:px-8 md:py-8">

                  {/* Number */}
                  <span className="text-sm font-bold text-slate-400 md:text-lg">
                    {service.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg md:text-3xl">
                    {service.title}
                  </h3>

                  {/* Icon */}
                  <div
                    className={cn(
                      "rounded-full border p-2.5 transition-all duration-300 md:p-3",
                      activeId === service.id
                        ? "rotate-45 border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 text-slate-400"
                    )}
                  >
                    <ArrowUpRight size={18} className="md:h-5 md:w-5" />
                  </div>

                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  activeId === service.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">

                  <div className="flex flex-col gap-7 px-4 pb-6 md:px-8 md:pb-10">

                    {/* Description */}
                    <div className="max-w-3xl">

                      <p className="text-sm leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                        {service.description}
                      </p>

                      <Link href="#">
                        <Button className="mt-6 h-auto rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-slate-800 md:px-7 md:py-5 md:text-base">

                          Learn More

                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>

                    </div>

                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden rounded-[1.5rem] sm:h-[260px] md:h-[320px] md:rounded-[2rem]">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Optional subtle overlay */}
                      <div className="absolute inset-0 bg-black/5" />

                    </div>

                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
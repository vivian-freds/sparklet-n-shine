
import { Navbar, Hero } from "@/components/ui/landing/";
import { GradientSection } from "@/components/ui/shared/gradient-section";


export default function Page() {
  return (
    <>
      {/* 🔥 TOP GRADIENT AREA */}
      <GradientSection className="pt-6 pb-20">
        <Navbar />
        <Hero />
      </GradientSection>

      {/* ⬜ NORMAL SECTIONS */}
      {/* Stats, Services, etc go here */}
    </>
  )
}
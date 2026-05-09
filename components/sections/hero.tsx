import { HeroDetails } from './heroDetails'

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white pb-12">

      {/* Soft Blue Base */}
      <div className="absolute inset-0 bg-blue-50/50" />

      {/* Yellow Glow (Top Left) */}
      <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-300 opacity-30 blur-[120px]" />

      {/* Blue Glow (Center Right) */}
      <div className="absolute -right-[5%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-400 opacity-40 blur-[140px]" />

      {/* Content — sits above glows without needing isolate */}
      <div className="relative z-10">
        <HeroDetails />
      </div>
    </div>
  )
}
import { RadialBlur } from "./radial-blur"

export function HeroGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Gradient */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#f8f5ff]
        via-[#efe7ff]
        to-[#faf8ff]
      " />

      {/* Left Glow */}
      <RadialBlur
        className="
          left-[-120px]
          top-[-100px]
          h-[450px]
          w-[450px]
          bg-violet-400/25
        "
      />

      {/* Right Glow */}
      <RadialBlur
        className="
          right-[-100px]
          bottom-[-100px]
          h-[400px]
          w-[400px]
          bg-fuchsia-300/20
        "
      />

    </div>
  )
}
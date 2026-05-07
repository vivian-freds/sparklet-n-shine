import { RadialBlur } from "./radial-blur"

export function DarkGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 bg-[#071122]" />

      <RadialBlur
        className="
          top-[-150px]
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          bg-violet-600/20
        "
      />

    </div>
  )
}
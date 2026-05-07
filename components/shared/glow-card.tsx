import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({
  children,
  className
}: GlowCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-black/5
        bg-white/90
        backdrop-blur
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        `,
        className
      )}
    >
      {children}
    </div>
  )
}
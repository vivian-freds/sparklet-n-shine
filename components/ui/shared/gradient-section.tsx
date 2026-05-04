export function GradientSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      
      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-200" />

        {/* Glow blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl" />

      </div>

      {children}
    </section>
  )
}
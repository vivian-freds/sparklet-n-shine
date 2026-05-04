import { Container } from "../shared/container"

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="" />


      {/* LEFT IMAGE */}
      <img
        src="/cleaner-left.png"
        alt=""
        className=" md:block absolute left-0 bottom-0 h-[85%] object-contain"
      />

      {/* RIGHT IMAGE */}
      <img
        src="/cleaner-right.png"
        alt=""
        className=" md:block absolute right-0 bottom-0 h-[85%] object-contain"
      />

      {/* CONTENT */}
      <Container>
        <div className="text-center max-w-2xl mx-auto relative z-10">

          <p className="text-sm text-muted-foreground">
            ✨ Spotless Spaces, Stress-Free Living
          </p>

          <h1 className="text-7xl md:text-5xl font-bold mt-4 leading-tight">
            Premium Cleaning <br /> Services You Can <br /> Count On
          </h1>


          <p className="w-3/4 text-center text-xl mx-auto mt-4 text-muted-foreground">
            We don’t just clean — we bring peace of mind with eco-friendly products,
            skilled cleaners, and attention to detail.
          </p>
          

          {/* CTA */}
          <div className="mt-6">
            <button className="bg-primary text-white px-6 py-3 rounded-full shadow-lg">
              Book Your Cleaning Today
            </button>
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="font-semibold">5.0 ⭐</span>
            <span className="text-sm text-muted-foreground">
              50+ Rating
            </span>
          </div>

        </div>
      </Container>
    </section>
  )
}
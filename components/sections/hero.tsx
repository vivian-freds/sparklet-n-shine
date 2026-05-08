import { Navbar } from "../layout/navbar";
import { HeroDetails } from "./heroDetails";


// components/Hero.tsx
export  function HeroSection() {
  return (
    
      <div className="relative isolate min-h-screen w-full overflow-hidden bg-white">
      {/* Soft Purple Base */}
      <div className="absolute inset-0 bg-[#f3e8ff]/60" />

      {/* Blue Glow (Top Left) */}
      <div 
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-400 opacity-40 mix-blend-multiply filter blur-[100px]" 
      />

      {/* Pink/Purple Glow (Center Right) */}
      <div 
        className="absolute top-[20%] -right-[5%] h-[600px] w-[600px] rounded-full bg-purple-400 opacity-50 mix-blend-multiply filter blur-[120px]" 
      />

      {/* Content goes here */}
      <div className="relative z-10">
        <Navbar />
<HeroDetails />

      </div>
    </div>
    
  )
}
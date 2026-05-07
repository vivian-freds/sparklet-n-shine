import { Section } from '@/components/layout/section'
import { DarkGlow } from '@/components/backgrounds/dark-glow'
import { GlowCard } from '@/components/shared/glow-card'

export function TestimonialsSection() {
  return (
    <Section className='bg-[#071122] text-white'>

      <DarkGlow />

      <div className='text-center'>
        <p className='text-sm font-medium text-violet-400'>
          Testimonials
        </p>

        <h2 className='mt-4 text-4xl font-bold'>
          Happy Customers Clean Homes
        </h2>
      </div>

      <div className='mt-16 grid gap-6 lg:grid-cols-3'>

        {[1, 2, 3].map(item => (
          <GlowCard
            key={item}
            className='bg-white/10 p-8 text-white backdrop-blur-xl'
          >
            <p className='text-white/80'>
              Excellent cleaning service and amazing support.
            </p>
          </GlowCard>
        ))}

      </div>

    </Section>
  )
}
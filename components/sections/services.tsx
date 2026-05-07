import { Section } from '@/components/layout/section'
import { GlowCard } from '@/components/shared/glow-card'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Complete home cleaning solutions.'
  },
  {
    title: 'Office Cleaning',
    description: 'Professional workspace cleaning.'
  },
  {
    title: 'Move-In Cleaning',
    description: 'Perfect cleaning before relocation.'
  }
]

export function ServicesSection() {
  return (
    <Section className='bg-[#faf8ff]'>

      <div className='mb-16'>
        <p className='text-sm font-medium text-violet-600'>
          Our Services
        </p>

        <h2 className='mt-4 text-4xl font-bold'>
          Cleaning Services Designed
          For Your Lifestyle
        </h2>
      </div>

      <div className='space-y-6'>
        {services.map(service => (
          <GlowCard
            key={service.title}
            className='p-10'
          >
            <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-center'>

              <div>
                <h3 className='text-2xl font-semibold'>
                  {service.title}
                </h3>

                <p className='mt-3 max-w-xl text-muted-foreground'>
                  {service.description}
                </p>
              </div>

            </div>
          </GlowCard>
        ))}
      </div>

    </Section>
  )
}
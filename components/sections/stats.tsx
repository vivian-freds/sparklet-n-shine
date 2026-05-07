import { Section } from '@/components/layout/section'
import { GlowCard } from '@/components/shared/glow-card'

const stats = [
  {
    label: 'Happy Clients',
    value: '500+'
  },
  {
    label: 'Customer Satisfaction',
    value: '99%'
  },
  {
    label: 'Homes Cleaned',
    value: '1000+'
  },
  {
    label: 'Service Guarantee',
    value: '100%'
  }
]

export function StatsSection() {
  return (
    <Section className='bg-[#f7f3ff]'>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>

        {stats.map(stat => (
          <GlowCard key={stat.label} className='p-8'>
            <p className='text-muted-foreground'>
              {stat.label}
            </p>

            <h3 className='mt-3 text-4xl font-bold'>
              {stat.value}
            </h3>
          </GlowCard>
        ))}

      </div>
    </Section>
  )
}
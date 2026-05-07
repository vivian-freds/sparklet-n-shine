import { Check } from 'lucide-react'

import { Section } from '@/components/layout/section'
import { GlowCard } from '@/components/shared/glow-card'

const plans = [
  {
    name: 'Basic',
    price: '$99'
  },
  {
    name: 'Standard',
    price: '$149',
    featured: true
  },
  {
    name: 'Premium',
    price: '$199'
  }
]

export function PricingSection() {
  return (
    <Section>

      <div className='text-center'>
        <p className='text-sm font-medium text-violet-600'>
          Pricing
        </p>

        <h2 className='mt-4 text-4xl font-bold'>
          Flexible Pricing For Every Home
        </h2>
      </div>

      <div className='mt-16 grid gap-8 lg:grid-cols-3'>

        {plans.map(plan => (
          <GlowCard
            key={plan.name}
            className={`
              p-10
              ${plan.featured ? 'border-violet-500' : ''}
            `}
          >
            <h3 className='text-2xl font-semibold'>
              {plan.name}
            </h3>

            <div className='mt-6 text-5xl font-bold'>
              {plan.price}
            </div>

            <div className='mt-8 space-y-4'>
              <div className='flex items-center gap-3'>
                <Check className='h-5 w-5 text-violet-600' />
                <span>Professional cleaning</span>
              </div>
            </div>

          </GlowCard>
        ))}

      </div>

    </Section>
  )
}
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <Section>

      <div className='relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#7c5cff] to-[#9f6fff] p-16 text-white'>

        <div className='absolute inset-0 bg-white/5' />

        <div className='relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center'>

          <div>
            <h2 className='max-w-2xl text-4xl font-bold'>
              Join Thousands Of Happy Clients
            </h2>

            <p className='mt-4 text-white/80'>
              Book your first cleaning today.
            </p>
          </div>

          <Button
            size='lg'
            variant='secondary'
            className='rounded-full'
          >
            Book Cleaning
          </Button>

        </div>

      </div>

    </Section>
  )
}
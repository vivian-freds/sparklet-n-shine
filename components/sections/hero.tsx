import Image from 'next/image'

import { Section } from '@/components/layout/section'
import { HeroGradient } from '@/components/backgrounds/hero-gradient'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <Section className='min-h-screen pt-40'>

      <HeroGradient />

      <div className='grid items-center gap-16 lg:grid-cols-2'>

        <div>
          <p className='mb-4 text-sm font-medium text-violet-600'>
            #1 Cleaning Service
          </p>

          <h1 className='max-w-xl text-5xl font-bold leading-tight lg:text-7xl'>
            Premium Cleaning Services You Can Count On
          </h1>

          <p className='mt-6 max-w-lg text-lg text-muted-foreground'>
            Premium home and office cleaning solutions for modern lifestyles.
          </p>

          <div className='mt-10 flex gap-4'>
            <Button size='lg' className='rounded-full'>
              Book Cleaning
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='rounded-full'
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 rounded-full bg-violet-500/20 blur-[100px]' />

          <Image
            src='/images/about-image.jpg'
            alt='Cleaner'
            width={600}
            height={700}
            className='relative z-10 mx-auto'
          />
        </div>

      </div>
    </Section>
  )
}
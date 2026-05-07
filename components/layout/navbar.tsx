'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const links = [
  'Home',
  'Services',
  'Pricing',
  'About',
  'Contact'
]

export function Navbar() {
  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-xl'>

        <div className='text-xl font-bold'>
          Cleanx
        </div>

        <nav className='hidden items-center gap-8 md:flex'>
          {links.map(link => (
            <Link
              key={link}
              href='#'
              className='text-sm text-muted-foreground transition hover:text-black'
            >
              {link}
            </Link>
          ))}
        </nav>

        <Button className='rounded-full'>
          Book Now
        </Button>

      </div>
    </header>
  )
}
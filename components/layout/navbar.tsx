// 'use client'

// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

// const links = [
//   'Home',
//   'Services',
//   'Pricing',
//   'About',
//   'Contact'
// ]

// export function Navbar() {
//   return (
//     <header className='fixed top-0  w-full'>
//       <div className='mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-md border border-white/10 px-6 py-4 shadow-lg backdrop-blur-xl'>

//         <div className='text-xl font-bold'>
//           Sparklet & Shine
//         </div>

//         <nav className='hidden items-center gap-8 md:flex'>
//           {links.map(link => (
//             <Link
//               key={link}
//               href='#'
//               className='text-sm text-muted-foreground transition hover:text-black'
//             >
//               {link}
//             </Link>
//           ))}
//         </nav>

//         <Button className='rounded-md'>
//           <div>Book Now</div>
          
//           <p>0718477898</p>
//         </Button>

//       </div>
//     </header>
//   )
// }

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  'Home',
  'Services',
  'Pricing',
  'About',
  'Contact',
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full px-4">
      <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/30  shadow-xl backdrop-blur-xl">

        <div className="flex items-center justify-between px-5 py-2">

          {/* Logo */}
          <h1 className="text-lg font-bold tracking-tight md:text-xl">
            Sparklet & Shine
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-medium text-muted-foreground transition hover:text-purple-600"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="https://wa.me/254718477898"
              target="_blank"
            >
              <Button className="rounded-full bg-purple-500 px-5 text-white hover:bg-purple-600">
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-white/20 px-5 py-5 md:hidden">

            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm font-medium text-muted-foreground"
                >
                  {link}
                </Link>
              ))}
            </nav>

            <Link
              href="https://wa.me/254718477898"
              target="_blank"
            >
              <Button className="mt-6 w-full rounded-full bg-purple-500 text-white hover:bg-purple-600">
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Via WhatsApp
              </Button>
            </Link>

          </div>
        )}
      </div>
    </header>
  )
}
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "../shared/container"


export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 md:border">
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300",
            scrolled
              ? "bg-white/70 backdrop-blur-xl shadow-lg border"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <h1 className="font-bold text-lg">Cleanx</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-primary text-white px-4 py-2 rounded-xl">
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 rounded-2xl bg-white shadow-lg border p-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <Link href="#">Home</Link>
              <Link href="#">Services</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Contact</Link>

              <button className="bg-primary text-white px-4 py-2 rounded-xl mt-2">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Innovation", href: "/innovation" },
    { name: "Our Mission", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-6 md:px-10 h-20 rounded-full border border-white/10 transition-all duration-700 ${
          scrolled ? "bg-black/90 backdrop-blur-2xl shadow-2xl scale-[0.98]" : "bg-white/[0.03] backdrop-blur-md shadow-none"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-8 md:h-12 w-auto object-contain transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/signin">
              <Button variant="ghost" className="text-[13px] uppercase tracking-[0.22em] text-white hover:bg-white/10 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/experience">
              <Button className="rounded-full bg-white text-black hover:bg-neutral-200 text-[12px] uppercase tracking-[0.2em] font-bold px-8 h-10 transition-all hover:scale-105">
                Experience
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden">
          <div className="mb-10">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-4xl font-serif font-light text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={() => setIsOpen(false)} variant="outline" className="mt-8 border-white/20 text-white hover:bg-white/10 rounded-full px-12 py-6">
            Close Menu
          </Button>
        </div>
      )}
    </nav>
  )
}

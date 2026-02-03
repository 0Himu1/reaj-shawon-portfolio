'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0F1419]/95 backdrop-blur-md shadow-md border-b border-[#2A2E37]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#" className={`text-2xl font-bold transition-colors tracking-tight ${
          isScrolled ? 'text-[#10B981]' : 'text-white'
        }`}>
          Reaj
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#work" className={`text-sm font-medium transition-colors hover:text-[#10B981] ${
            isScrolled ? 'text-[#F8FAFC]' : 'text-white'
          }`}>
            Work
          </a>
          <a href="#process" className={`text-sm font-medium transition-colors hover:text-[#10B981] ${
            isScrolled ? 'text-[#F8FAFC]' : 'text-white'
          }`}>
            Process
          </a>
          <a href="#testimonials" className={`text-sm font-medium transition-colors hover:text-[#10B981] ${
            isScrolled ? 'text-[#F8FAFC]' : 'text-white'
          }`}>
            Testimonials
          </a>
          
          <Button className="bg-[#10B981] hover:bg-[#059669] text-[#0F1419] font-semibold px-6 py-2 rounded-lg transition-all">
            Get In Touch
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className={`w-6 h-6 ${isScrolled ? 'text-[#F8FAFC]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

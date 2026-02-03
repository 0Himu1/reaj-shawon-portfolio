'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate text on load
    if (textRef.current) {
      textRef.current.style.opacity = '0'
      textRef.current.style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = 'all 0.8s ease-out'
          textRef.current.style.opacity = '1'
          textRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F1419] via-[#1A1E27] to-[#0F1419]">
      {/* Subtle background texture elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#texture)" />
        </svg>
      </div>

      {/* Floating background elements (camera/pencil outline) */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#10B981" strokeWidth="1">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="25" />
          <path d="M20,50 L30,50 M70,50 L80,50 M50,20 L50,30 M50,70 L50,80" stroke="#10B981" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10" style={{ animation: 'float 6s ease-in-out infinite 1s' }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#34D399" strokeWidth="1">
          <path d="M30,80 Q50,20 70,80" />
          <path d="M35,70 L65,70" />
          <path d="M40,60 L60,60" />
          <path d="M45,50 L55,50" />
        </svg>
      </div>

      {/* Main content */}
      <div ref={textRef} className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-1 text-left">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-3 leading-tight tracking-tight">
              Hello, I'm Reaj Uddin.
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-[#CBD5E1] mb-6 font-medium">
              AI-Powered Meta Marketing & Strategy Specialist
            </p>

            {/* Body text */}
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-light">
              I engineer AI solutions and build high-converting Meta ad funnels for Bangladeshi brands. From customer psychology research to campaign optimization, I deliver measurable results—turning data into revenue through strategic planning and technical execution.
            </p>
          </div>

          {/* Right side - Trust badge and buttons */}
          <div className="flex-1 flex flex-col items-start md:items-end gap-8">
            {/* Trust badge */}
            <div className="bg-[#1A1E27] border border-[#10B981] rounded-lg p-4 shadow-lg w-full md:w-fit">
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-1">Current Role</p>
              <p className="text-lg font-bold text-[#10B981]">🎯 Marketing Strategic Planner at Solution Provider</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-fit">
              <button 
                className="bg-[#10B981] hover:bg-[#059669] text-[#0F1419] px-6 py-2.5 text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#10B981]/20 active:scale-95 font-sans whitespace-nowrap"
                onClick={() => window.scrollTo({ top: document.getElementById('work')?.offsetTop ?? 0, behavior: 'smooth' })}
              >
                View Case Studies
              </button>
              <button 
                className="border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-[#0F1419] px-6 py-2.5 text-sm font-semibold rounded-lg transition-all font-sans whitespace-nowrap"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#10B981] opacity-50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

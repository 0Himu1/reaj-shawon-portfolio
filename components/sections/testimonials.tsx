'use client'

import { useEffect, useRef, useState } from 'react'
import { testimonials } from '@/lib/testimonials.data'

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && cardsRef.current) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.opacity = '0'
          card.style.transform = 'translateY(20px)'
          
          setTimeout(() => {
            card.style.transition = `all 0.6s ease-out ${index * 100}ms`
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }, 50)
        }
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-8 bg-[#0F1419]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3 tracking-tight">
            What Clients Say.
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            Real feedback from real campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="relative bg-[#1A1E27] rounded-lg md:rounded-xl p-5 md:p-6 border border-[#2A2E37] hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:border-[#10B981]"
            >
              {/* Quotation mark background */}
              <div className="absolute top-2 right-4 text-[#10B981] opacity-10 text-5xl font-semibold">
                "
              </div>

              {/* Quote text */}
              <p className="relative z-10 text-sm text-[#CBD5E1] leading-relaxed mb-4 font-light">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="border-t border-[#2A2E37] pt-4">
                <p className="font-semibold text-[#F8FAFC] text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[#94A3B8] font-light mb-1">
                  {testimonial.role}
                </p>
                <p className="text-xs text-[#10B981] font-semibold">
                  {testimonial.company}
                </p>
              </div>

              {/* Stars (optional visual accent) */}
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#10B981] text-xs">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

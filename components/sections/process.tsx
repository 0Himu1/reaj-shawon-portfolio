'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Research',
    description: 'Analyzing the product, audience psychology, and market needs to find the Unique Selling Point (USP).'
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Organizing data into a strategic plan with timelines, content calendars, and KPI targets.'
  },
  {
    number: 3,
    title: 'Execution',
    description: 'Collaborating with design teams to finalize copies, colors, and core messages for seamless experience.'
  },
  {
    number: 4,
    title: 'Campaign Management',
    description: 'Launching awareness and sales campaigns while continuously monitoring and optimizing targeting.'
  },
  {
    number: 5,
    title: 'Growth & Scaling',
    description: 'Working until planned KPIs are met, then scaling successful campaigns to maximize sales.'
  }
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && svgRef.current) {
      // Draw the path animation
      const path = svgRef.current.querySelector('path')
      if (path) {
        const length = path.getTotalLength()
        path.style.strokeDasharray = String(length)
        path.style.strokeDashoffset = String(length)
        
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 1.5s ease-in-out'
          path.style.strokeDashoffset = '0'
        }, 100)
      }
    }
  }, [isVisible])

  return (
      <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-8 bg-[#0F1419]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3 tracking-tight">
            My Campaign Process.
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            A step-by-step breakdown of my campaign process
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* SVG line */}
          <svg 
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: '100%' }}
            preserveAspectRatio="none"
          >
            <path
              d={`M 10%, 50 Q 25%, 100 50%, 150 Q 75%, 200 90%, 250`}
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Steps grid */}
          <div className="grid grid-cols-5 gap-3 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                {/* Step circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981] text-[#0F1419] flex items-center justify-center text-lg font-bold shadow-lg shadow-[#10B981]/20">
                    {step.number}
                  </div>
                </div>

                {/* Step content */}
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pl-10">
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-[#10B981]" />
              )}

              {/* Step circle */}
              <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#10B981] text-[#0F1419] flex items-center justify-center text-xs font-bold shadow-lg shadow-[#10B981]/20">
                {step.number}
              </div>

              {/* Step content */}
              <div className="bg-[#1A1E27] rounded-lg p-4 border border-[#2A2E37]">
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-1 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

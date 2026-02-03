'use client'

import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.style.opacity = '0'
          contentRef.current.style.transform = 'translateY(40px)'
          
          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.style.transition = 'all 0.8s ease-out'
              contentRef.current.style.opacity = '1'
              contentRef.current.style.transform = 'translateY(0)'
            }
          }, 100)
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-8 bg-[#0F1419]">
      <div ref={contentRef} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
              More Than Just a Marketer.
            </h2>
            
            <div className="space-y-4 text-[#CBD5E1] leading-relaxed">
              <p className="text-sm md:text-base font-light">
                I'm a data-driven marketing strategist specializing in Meta Ads and AI-powered customer engagement. With a BBA in Marketing from University of Dhaka, I combine strategic thinking with hands-on technical expertise in campaign optimization, content creation, and emerging technologies.
              </p>
              
              <p className="text-sm md:text-base font-light">
                Currently leading funnel-based Meta marketing campaigns for interior design and e-commerce brands. I believe in understanding customer psychology at every stage, building scalable systems, and creating measurable results. From AI chatbot engineering to designing compelling visual content, I manage the full spectrum of modern digital marketing—research to execution to scaling.
              </p>
            </div>
          </div>

          {/* Right side - Workflow visualization */}
          <div className="bg-[#1A1E27] rounded-lg p-6 border border-[#2A2E37]">
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6 text-center tracking-tight">My Workflow</h3>
            
            <div className="space-y-4">
              {/* Research */}
              <div className="relative pl-7 pb-4 border-l-2 border-[#10B981]">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#10B981] transform -translate-x-2"></div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-1">Customer Research</h4>
                <p className="text-xs text-[#94A3B8] font-light">Deep dive into audience psychology, behavior patterns, and market opportunities. Identify unique selling propositions and competitive advantages.</p>
              </div>

              {/* Strategy */}
              <div className="relative pl-7 pb-4 border-l-2 border-[#10B981]">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#10B981] transform -translate-x-2"></div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-1">Strategy & Planning</h4>
                <p className="text-xs text-[#94A3B8] font-light">Build comprehensive marketing plans using latest algorithms (Andromeda for Meta Ads). Define KPIs, budgets, and timelines. Structure funnel stages.</p>
              </div>

              {/* Execution */}
              <div className="relative pl-7 pb-4 border-l-2 border-[#10B981]">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#10B981] transform -translate-x-2"></div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-1">Creative & Launch</h4>
                <p className="text-xs text-[#94A3B8] font-light">Develop compelling visuals, copy, and content. Produce videos, graphics, and ad creatives. Engineer AI solutions. Deploy campaigns across channels.</p>
              </div>

              {/* Optimization */}
              <div className="relative pl-7">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#10B981] transform -translate-x-2"></div>
                <h4 className="text-sm font-semibold text-[#F8FAFC] mb-1">Optimize & Scale</h4>
                <p className="text-xs text-[#94A3B8] font-light">Monitor metrics daily. A/B test creatives and messaging. Hit KPIs. Scale winning campaigns. Achieve sustainable growth and maximum ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

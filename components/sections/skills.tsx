'use client'

import { useEffect, useRef, useState } from 'react'

const skillsData = [
  {
    title: 'Meta Marketing & AI',
    color: 'bg-[#10B981]',
    skills: [
      'Meta Ads (Andromeda Algorithm)',
      'Funnel-based campaign architecture',
      'AI chatbot engineering & automation',
      'Audience segmentation & targeting',
      'A/B testing & optimization'
    ]
  },
  {
    title: 'Content & Design',
    color: 'bg-[#34D399]',
    skills: [
      'Graphic Design (Illustrator & Photoshop)',
      'Video Editing (Premiere Pro & After Effects)',
      'Content writing & copywriting',
      'Visual storytelling',
      'Brand material design'
    ]
  },
  {
    title: 'Business & Leadership',
    color: 'bg-[#06B6D4]',
    skills: [
      'Strategic planning & KPI management',
      'Customer psychology & sales strategy',
      'Team training & onboarding',
      'Quality assurance protocols',
      'Market research & analysis'
    ]
  }
]

export default function SkillsSection() {
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
          card.style.transform = 'translateY(30px)'
          
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
            My Toolkit.
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            The skills and tools I use to deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-[#1A1E27] rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300 hover:-translate-y-1 border border-[#2A2E37]"
            >
              {/* Color header */}
              <div className={`${skill.color} h-1`} />

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-[#F8FAFC] mb-4 tracking-tight">
                  {skill.title}
                </h3>

                <ul className="space-y-3">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#10B981] font-bold mt-0.5 flex-shrink-0 text-xs">•</span>
                      <span className="text-[#CBD5E1] text-xs leading-relaxed font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

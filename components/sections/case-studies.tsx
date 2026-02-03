'use client'

import { useState } from "react"

import { useRef } from "react"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudiesData } from '@/lib/case-studies.data'

const caseStudies = caseStudiesData
const legacyData = [
  {
    id: 4,
    title: 'New Case Study Title',
    type: 'New Case Study Type',
    metric: 'New Case Study Metric',
    value: 'New Case Study Value',
    spend: 'New Case Study Spend',
    image: '/new-case-study.jpg',
    description: 'New Case Study Description',
    challenge: 'New Case Study Challenge',
    strategy: 'New Case Study Strategy',
    execution: 'New Case Study Execution',
    results: {
      spend: 'New Case Study Spend',
      outcome: 'New Case Study Outcome',
      impact: 'New Case Study Impact',
      keyLearning: 'New Case Study Key Learning'
    },
    campaignData: [
      { name: 'Awareness Campaign', results: '215', reach: '95000', frequency: 2.1, costPerResult: '$1.40', amountSpent: '$301', impressions: '199500', ctr: '1.9%', roas: '2.8x' },
      { name: 'Consideration Campaign', results: '165', reach: '52000', frequency: 1.9, costPerResult: '$1.82', amountSpent: '$300.30', impressions: '98800', ctr: '3.2%', roas: '3.5x' },
      { name: 'Conversion Campaign', results: '220', reach: '38000', frequency: 1.5, costPerResult: '$0.68', amountSpent: '$149.60', impressions: '57000', ctr: '4.5%', roas: '4.2x' }
    ],
    campaignTotals: { name: 'Total Results', results: '600', reach: '185000', frequency: 1.85, costPerResult: '$1.42', amountSpent: '$750.90', impressions: '355300', roas: '3.97x' }
  }
]

export default function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedStudy, setSelectedStudy] = useState(null)

  const handleCardClick = (study) => {
    setSelectedStudy(study)
    setShowModal(true)
  }

  return (
    <>
      <section className="py-20 md:py-32 px-6 md:px-8 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3 tracking-tight">
              Recent Work & Results.
            </h2>
            <p className="text-sm md:text-base text-[#94A3B8] font-light">
              Scroll horizontally to explore case studies
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
              >
                <div className="flex-shrink-0 w-full md:w-96 bg-[#1A1E27] rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300 cursor-pointer snap-center border border-[#2A2E37] h-full group">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#10B981] to-[#0F1419] flex items-center justify-center text-white text-xl font-semibold group-hover:from-[#34D399] transition-all">
                    {study.description}
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <p className="text-xs text-[#10B981] font-semibold uppercase tracking-widest mb-1.5">
                      {study.type}
                    </p>

                    <h3 className="text-sm font-bold text-[#F8FAFC] mb-3 tracking-tight">
                      {study.title}
                    </h3>

                    {/* Key metrics */}
                    <div className="space-y-1.5 mb-4 pb-4 border-b border-[#2A2E37]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-[#10B981]">{study.value}</span>
                        <span className="text-xs text-[#94A3B8] font-light">{study.metric}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#CBD5E1] font-light">💰 {study.spend}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between text-sm font-semibold text-[#10B981] group-hover:text-[#34D399] transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-sm text-[#94A3B8] opacity-70 mt-8 font-light">
            📱 On mobile, swipe to see more cases
          </p>
        </div>
      </section>

    </>
  )
}

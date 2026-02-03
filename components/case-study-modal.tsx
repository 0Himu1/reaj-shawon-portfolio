'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface CaseStudy {
  id: number
  title: string
  type: string
  metric: string
  value: string
  spend: string
  description: string
  challenge: string
  strategy: string
  execution: string
  results: {
    spend: string
    revenue?: string
    leads?: string
    costPerLead?: string
    roas?: string
    keyLearning: string
  }
}

interface CaseStudyModalProps {
  study: CaseStudy
  onClose: () => void
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      {/* Close animation - modal expands from center */}
      <div className="bg-[#1A1E27] rounded-xl md:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ animation: 'scale-in 0.3s ease-out' }}>
        {/* Modal header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#10B981] to-[#059669] text-[#0F1419] p-6 md:p-8 flex justify-between items-start">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest opacity-80 mb-2 font-semibold">{study.type}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{study.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 md:p-8 space-y-8 bg-[#1A1E27]">
          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-[#0F1419] rounded-xl p-6 border border-[#2A2E37]">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] opacity-70 mb-1 font-semibold">Budget Spent</p>
              <p className="text-2xl font-bold text-[#F8FAFC]">{study.results.spend}</p>
            </div>
            {study.results.revenue && (
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] opacity-70 mb-1 font-semibold">Revenue Generated</p>
                <p className="text-2xl font-bold text-[#10B981]">{study.results.revenue}</p>
              </div>
            )}
            {study.results.roas && (
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] opacity-70 mb-1 font-semibold">ROAS</p>
                <p className="text-2xl font-bold text-[#10B981]">{study.results.roas}</p>
              </div>
            )}
            {study.results.leads && (
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] opacity-70 mb-1 font-semibold">Leads Generated</p>
                <p className="text-2xl font-bold text-[#F8FAFC]">{study.results.leads}</p>
              </div>
            )}
            {study.results.costPerLead && (
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94A3B8] opacity-70 mb-1 font-semibold">Cost Per Lead</p>
                <p className="text-2xl font-bold text-[#F8FAFC]">{study.results.costPerLead}</p>
              </div>
            )}
          </div>

          {/* Challenge section */}
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 tracking-tight">1. The Challenge</h3>
            <p className="text-[#CBD5E1] leading-relaxed text-lg font-light">{study.challenge}</p>
          </div>

          {/* Strategy section */}
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 tracking-tight">2. The Strategy (Research & USP)</h3>
            <p className="text-[#CBD5E1] leading-relaxed text-lg font-light">{study.strategy}</p>
          </div>

          {/* Execution section */}
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 tracking-tight">3. Execution (Content & Campaigns)</h3>
            <p className="text-[#CBD5E1] leading-relaxed text-lg font-light">{study.execution}</p>
          </div>

          {/* Key learning */}
          <div className="bg-[#0F1419] border-l-4 border-[#10B981] p-6 rounded-lg">
            <p className="font-semibold text-[#10B981] mb-2">✨ Key Learning</p>
            <p className="text-[#CBD5E1] font-light">{study.results.keyLearning}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <Button
              onClick={onClose}
              className="flex-1 bg-[#10B981] hover:bg-[#059669] text-[#0F1419] font-semibold py-3 rounded-lg transition-all"
            >
              View Another Case Study
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-[#0F1419] font-semibold py-3 rounded-lg transition-all bg-transparent"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

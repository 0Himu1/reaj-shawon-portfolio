'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle2, Lightbulb, Zap, BarChart3 } from 'lucide-react'
import CampaignResultsTable from './campaign-results-table'

interface CaseStudyPageProps {
  study: {
    id: number
    title: string
    type: string
    challenge: string
    strategy: string
    execution: string
    campaignData: any[]
    campaignTotals: any
    results: Record<string, string | number>
    keyMetrics?: Array<{
      label: string
      value: string
      icon: string
    }>
  }
}

export default function CaseStudyPage({ study }: CaseStudyPageProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0F1419] text-[#F8FAFC]">
      {/* Header */}
      <div className="border-b border-[#2A2E37]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#10B981] hover:text-[#34D399] transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">{study.type}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{study.title}</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 space-y-16">
        {/* Challenge Section */}
        <section>
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold">The Challenge</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#CBD5E1] ml-8">
            {study.challenge}
          </p>
        </section>

        {/* Strategy Section */}
        <section>
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold">Research & Strategy</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#CBD5E1] ml-8">
            {study.strategy}
          </p>
        </section>

        {/* Execution Section */}
        <section>
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold">Execution & Optimization</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#CBD5E1] ml-8">
            {study.execution}
          </p>
        </section>

        {/* Campaign Results Table */}
        <section>
          <div className="flex items-start gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold">Campaign Performance</h2>
          </div>
          <div className="ml-8">
            <CampaignResultsTable 
              campaigns={study.campaignData} 
              totals={study.campaignTotals}
            />
          </div>
        </section>

        {/* Key Metrics */}
        <section className="bg-[#1A1E27] rounded-lg p-8 border border-[#2A2E37]">
          <h2 className="text-2xl font-bold mb-6">Key Results</h2>
          {study.keyMetrics && study.keyMetrics.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {study.keyMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{metric.icon}</span>
                    <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">{metric.label}</p>
                  </div>
                  <p className="text-3xl font-bold text-[#10B981]">{metric.value}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(study.results).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-3xl font-bold text-[#10B981]">{String(value)}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Key Learning */}
        <section className="bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 rounded-lg p-8 border border-[#10B981]/30">
          <h3 className="font-semibold text-[#10B981] mb-2 text-sm uppercase tracking-widest">Key Learning</h3>
          <p className="text-sm leading-relaxed text-[#CBD5E1]">
            {String(study.results.keyLearning || study.results['Key Learning'] || 'Strategic insights from this campaign have driven measurable improvements in future projects.')}
          </p>
        </section>

        {/* CTA */}
        <div className="flex gap-4 pt-8 border-t border-[#2A2E37]">
          <button
            onClick={() => router.back()}
            className="flex-1 px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-[#0F1419] font-semibold rounded-lg transition-all text-sm"
          >
            View Another Case Study
          </button>
          <button
            onClick={() => router.push('/#')}
            className="flex-1 px-6 py-3 border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-[#0F1419] font-semibold rounded-lg transition-all text-sm"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  )
}

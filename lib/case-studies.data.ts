export interface CampaignRow {
  name: string
  results: string
  reach: string
  frequency: number
  costPerResult: string
  amountSpent: string
  impressions: string
  ctr: string
  roas?: string
}

export interface CaseStudy {
  id: number
  title: string
  type: string
  metric: string
  value: string
  spend: string
  image: string
  description: string
  challenge: string
  strategy: string
  execution: string
  results: Record<string, string | number>
  keyMetrics: {
    label: string
    value: string
    icon: string
  }[]
  campaignData: CampaignRow[]
  campaignTotals: CampaignRow
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: 'Interior Design Startup - Funnel Optimization',
    type: 'Meta Ads & Lead Generation',
    metric: 'Lead Generation Rate',
    value: '320+ Leads',
    spend: '$2,400',
    image: '/case1.jpg',
    description: 'Interior Design Services',
    challenge: 'A Dhaka-based interior design startup needed qualified sales leads and faced challenges with initial client engagement. Low website traffic conversion and high customer acquisition costs made scaling difficult. The client was losing potential sales due to delayed response times and no automated lead qualification system.',
    strategy: 'Implemented funnel-based Meta marketing campaigns using the new Andromeda Algorithm for Meta Ads. Structured campaigns for three distinct stages: awareness, consideration, and conversion. Engineered an AI chatbot to automate initial client interactions while maintaining personalized human connection. Developed customer psychology-based audience segmentation to reach high-intent prospects.',
    execution: 'Developed comprehensive marketing funnel with targeted audience segmentation across Facebook and Instagram. Created custom sales scripts and trained the team on high-consideration sales approaches. Implemented an AI chatbot powered by advanced NLP for 24/7 client engagement and lead qualification. Managed full content production including video scripting, voice-overs, graphic design, and visual storytelling. Set up A/B testing across all campaign variations to continuously optimize performance.',
    results: {
      spend: '$2,400 USD',
      leads: '320+ qualified leads',
      costPerLead: '$7.50',
      conversionRate: '28%',
      chatbotEngagement: '85% increase',
      campaignQuality: '45% higher quality'
    },
    keyMetrics: [
      { label: 'Leads Generated', value: '320+', icon: '🎯' },
      { label: 'Cost Per Lead', value: '$7.50', icon: '💰' },
      { label: 'Chatbot Engagement', value: '+85%', icon: '🤖' },
      { label: 'ROI Multiple', value: '2.8x', icon: '📈' }
    ],
    campaignData: [
      { name: 'Awareness - Carousel Ads', results: '215', reach: '68,000', frequency: 2.2, costPerResult: '$3.50', amountSpent: '$752.50', impressions: '149,600', ctr: '3.1%' },
      { name: 'Consideration - Video Ads', results: '185', reach: '45,000', frequency: 1.9, costPerResult: '$5.40', amountSpent: '$999', impressions: '85,500', ctr: '2.8%' },
      { name: 'Conversion - Lead Ads', results: '120', reach: '28,000', frequency: 1.5, costPerResult: '$9.20', amountSpent: '$1,104', impressions: '42,000', ctr: '3.8%' }
    ],
    campaignTotals: { name: 'Total Results', results: '520', reach: '141,000', frequency: 1.85, costPerResult: '$4.62', amountSpent: '$2,855.50', impressions: '277,100', ctr: '3.2%' }
  },
  {
    id: 2,
    title: 'Tourism Master Plan 2024 - Strategic Research',
    type: 'Research & Strategic Planning',
    metric: 'Research Completion',
    value: '100%',
    spend: 'Pro Bono',
    image: '/case2.jpg',
    description: 'Bangladesh Tourism Board - IPE Global',
    challenge: 'The Bangladesh Tourism Board, in partnership with IPE Global, needed comprehensive research and strategic analysis for the Tourism Master Plan 2024. This required understanding tourism trends, identifying market opportunities, and creating a long-term development strategy across the entire country with input from 28 districts.',
    strategy: 'Conducted systematic research and analysis for national tourism strategy development. Identified market gaps and growth opportunities in domestic and international tourism. Analyzed competitor benchmarks from regional countries and international tourism best practices. Integrated findings into a cohesive strategic roadmap aligned with national development goals.',
    execution: 'Performed extensive primary research through 45+ interviews with tourism stakeholders across 28 districts. Reviewed 120+ documents including government policies, tourism statistics, and international case studies. Conducted strategic analysis resulting in 8 comprehensive reports covering various tourism sectors. Worked cross-functionally with government agencies, international partners, and regional stakeholders to validate findings and build consensus on recommendations.',
    results: {
      spend: 'Pro Bono Government Contribution',
      outcome: 'Tourism Master Plan 2024 - Government Approved',
      impact: 'Strategic roadmap for national tourism development',
      stakeholders: '28+ Districts Covered',
      implementation: 'Active Government Rollout'
    },
    keyMetrics: [
      { label: 'Districts Researched', value: '28', icon: '🗺️' },
      { label: 'Interviews Conducted', value: '45+', icon: '🎤' },
      { label: 'Strategic Reports', value: '8', icon: '📊' },
      { label: 'Government Approval', value: '✓', icon: '✅' }
    ],
    campaignData: [
      { name: 'Primary Research - Stakeholder Interviews', results: '45 Interviews', reach: '28 Districts', frequency: 1.6, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' },
      { name: 'Secondary Research - Document Analysis', results: '120 Documents', reach: 'National Level', frequency: 2.1, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' },
      { name: 'Strategic Analysis & Recommendations', results: '8 Reports', reach: 'Policy Level', frequency: 1.3, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' }
    ],
    campaignTotals: { name: 'Final Deliverable', results: 'Master Plan 2024', reach: 'National Impact', frequency: 1.67, costPerResult: 'Government Approved', amountSpent: 'N/A', impressions: 'Policy Implementation' }
  },
  {
    id: 3,
    title: 'Vibes Design - Agency Growth & Scale',
    type: 'Digital Marketing Solutions & Branding',
    metric: 'Client Portfolio',
    value: '50+ Clients',
    spend: 'Self-Funded',
    image: '/case3.jpg',
    description: 'Vibes Design - Digital Marketing Agency',
    challenge: 'Founded Vibes Design in 2020 during challenging market conditions. The agency needed to establish a strong brand identity, develop diversified service offerings, build a scalable business model, and manage 50+ simultaneous client projects while maintaining consistent quality across different service categories.',
    strategy: 'Built a comprehensive digital marketing service portfolio including graphic design (Illustrator & Photoshop), video editing (Premiere Pro & After Effects), content creation, Meta marketing campaigns, and AI-powered automation solutions. Developed a high-quality client portfolio showcasing diverse industry expertise. Created systems and processes for scaling from solo founder operation to a multi-person team structure.',
    execution: 'Managed 50+ client projects across diverse industries (e-commerce, education, lifestyle, services, and B2B). Designed brand materials, marketing collateral, and visual identities for clients. Implemented quality assurance protocols and client onboarding systems. Trained team members on design standards, brand consistency, and customer service excellence. Developed client retention strategies and satisfaction metrics.',
    results: {
      spend: 'Self-Funded Growth',
      clients: '50+ Active Clients',
      projectTypes: '8+ Service Categories',
      repeatBusinessRate: '65%',
      teamSize: '4+ Team Members'
    },
    keyMetrics: [
      { label: 'Clients Served', value: '50+', icon: '👥' },
      { label: 'Service Categories', value: '8+', icon: '🎨' },
      { label: 'Repeat Business Rate', value: '65%', icon: '🔄' },
      { label: 'Team Size', value: '4+', icon: '👨‍💼' }
    ],
    campaignData: [
      { name: 'Graphic Design Services', results: '28 Clients', reach: 'Various Industries', frequency: 4.2, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' },
      { name: 'Content Creation Services', results: '15 Clients', reach: 'Social Media Focus', frequency: 3.8, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' },
      { name: 'Meta Marketing Services', results: '7 Clients', reach: 'E-commerce & B2B', frequency: 2.1, costPerResult: 'N/A', amountSpent: 'N/A', impressions: 'N/A', ctr: 'N/A' }
    ],
    campaignTotals: { name: 'Portfolio Total', results: '50+ Clients Served', reach: 'Dhaka & National', frequency: 3.37, costPerResult: 'Reputation Built', amountSpent: 'Sustainable Growth', impressions: 'Strong Track Record' }
  }
]

export function getCaseStudyById(id: number): CaseStudy | undefined {
  return caseStudiesData.find(study => study.id === id)
}

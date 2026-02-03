'use client'

interface CampaignData {
  name: string
  results?: number | string
  reach?: number | string
  frequency?: number
  costPerResult?: number | string
  budgetSpent?: number | string
  amountSpent?: number | string
  impressions?: number | string
  ctr?: number | string
  roas?: string
}

interface CampaignResultsTableProps {
  campaigns: CampaignData[]
  totals?: CampaignData
}

export default function CampaignResultsTable({ campaigns, totals }: CampaignResultsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#2A2E37]">
      <table className="w-full text-sm bg-[#1A1E27]">
        <thead>
          <tr className="border-b border-[#2A2E37] bg-[#0F1419]">
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Campaign Name</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Results</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Reach</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Frequency</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#10B981] tracking-wide">Cost per Result</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Amount Spent</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">Impressions</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-[#F8FAFC] tracking-wide">CTR</th>
            {campaigns[0]?.roas && <th className="px-4 py-3 text-left text-xs font-semibold text-[#10B981] tracking-wide">ROAS</th>}
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => (
            <tr key={index} className="border-b border-[#2A2E37] hover:bg-[#0F1419]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-[#F8FAFC]">{campaign.name}</td>
              <td className="px-4 py-3 text-sm text-[#CBD5E1]">
                {campaign.results || '—'}
              </td>
              <td className="px-4 py-3 text-sm text-[#CBD5E1]">
                {campaign.reach?.toLocaleString?.() || campaign.reach || '—'}
              </td>
              <td className="px-4 py-3 text-sm text-[#CBD5E1]">
                {campaign.frequency?.toFixed(2) || '—'}
              </td>
              <td className="px-4 py-3 text-sm font-semibold text-[#10B981]">
                {campaign.costPerResult || '—'}
              </td>
              <td className="px-4 py-3 text-sm font-semibold text-[#CBD5E1]">
                {campaign.amountSpent || campaign.budgetSpent || '—'}
              </td>
              <td className="px-4 py-3 text-sm text-[#CBD5E1]">
                {campaign.impressions?.toLocaleString?.() || campaign.impressions || '—'}
              </td>
              <td className="px-4 py-3 text-sm text-[#CBD5E1]">
                {campaign.ctr || '—'}
              </td>
              {campaign.roas && <td className="px-4 py-3 text-sm font-semibold text-[#10B981]">{campaign.roas}</td>}
            </tr>
          ))}
          {totals && (
            <tr className="bg-[#0F1419] border-t-2 border-[#10B981]">
              <td className="px-4 py-3 text-sm font-bold text-[#F8FAFC]">Totals</td>
              <td className="px-4 py-3 text-sm font-bold text-[#CBD5E1]">{totals.results || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#CBD5E1]">{totals.reach?.toLocaleString?.() || totals.reach || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#CBD5E1]">{totals.frequency?.toFixed(2) || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#10B981]">{totals.costPerResult || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#10B981]">{totals.amountSpent || totals.budgetSpent || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#CBD5E1]">{totals.impressions?.toLocaleString?.() || totals.impressions || '—'}</td>
              <td className="px-4 py-3 text-sm font-bold text-[#CBD5E1]">{totals.ctr || '—'}</td>
              {totals.roas && <td className="px-4 py-3 text-sm font-bold text-[#10B981]">{totals.roas}</td>}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

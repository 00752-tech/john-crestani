import ClientNicheProfitabilityCalculator from "@/app/affiliate-marketing-tools/niche-profitability-calculator/ClientNicheProfitabilityCalculator"
export const metadata = {
  title: 'Niche Profitability Calculator | Super Affiliate System Pro',
  description: 'Estimate the potential profitability of different niches with our free calculator. Perfect for affiliate marketers looking to find lucrative markets.',
}

export default function NicheProfitabilityCalculatorPage() {
  return <ClientNicheProfitabilityCalculator backUrl="/tools" pageUrlPath="/tools/niche-profitability-calculator" />
}


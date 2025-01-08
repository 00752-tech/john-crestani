import ClientCalculatorPage from "@/app/affiliate-marketing-tools/earnings-calculator/ClientCalculatorPage"

export const metadata = {
  title: 'Free Affiliate Marketing Earnings Calculator | Super Affiliate System Pro',
  description: 'Calculate your potential affiliate marketing earnings for free. Estimate revenue based on traffic, conversion rates, and commission values.',
}

export default function CalculatorPage() {
  return <ClientCalculatorPage pageUrlPath="/tools/affiliate-earning-calculator" backUrl="/tools" />
}


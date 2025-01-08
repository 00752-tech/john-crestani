import ClientROASCalculator from "@/app/advertising-tools/roas-calculator/ClientROASCalculator"

export const metadata = {
    title: 'ROAS Calculator | Super Affiliate System Pro',
    description: 'Calculate your Return on Ad Spend (ROAS) with our free calculator. Optimize your advertising campaigns and improve your marketing ROI.',
  }
  export default function ROASCalculatorPage() {
    return <ClientROASCalculator backUrl="/tools" />
  }
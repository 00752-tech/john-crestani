import ClientInvestmentCalculator from "@/app/financial-tools/investment-calculator/ClientInvestmentCalculator"

export const metadata = {
  title: 'Investment Calculator | Super Affiliate System Pro',
  description: 'Plan your financial future with our free investment calculator. Estimate potential returns based on initial investment, monthly contributions, and expected annual return.',
}

export default function InvestmentCalculatorPage() {
  return <ClientInvestmentCalculator backUrl="/tools" />
}


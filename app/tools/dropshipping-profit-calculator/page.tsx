import ClientDropshippingCalculator from "@/app/ecommerce-tools/dropshipping-profit-calculator/ClientDropshippingCalculator"

export const metadata = {
  title: 'Dropshipping Profit Calculator | Super Affiliate System Pro',
  description: 'Calculate your potential dropshipping profits with our free calculator. Estimate revenue, costs, and profit margins for your e-commerce business.',
}

export default function DropshippingCalculatorPage() {
  return <ClientDropshippingCalculator backUrl="/tools" pageUrlPath="/tools/dropshipping-profit-calculator" />
}


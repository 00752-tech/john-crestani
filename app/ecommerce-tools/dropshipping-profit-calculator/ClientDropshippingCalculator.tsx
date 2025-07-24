import ClientDropshippingCalculator from './ClientDropshippingCalculator'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'End Guesswork: Dropshipping Profit Predictor',
  description:
    'Eliminate financial uncertainty in your dropshipping business. Our free AI-powered calculator helps you accurately predict and optimize profit margins for predictable earnings.',
}

export default function DropshippingCalculatorPage() {
  return (
    <>
      {/* Structured Data: SoftwareApplication */}
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Dropshipping Profit Calculator',
          description:
            'Eliminate financial uncertainty in your dropshipping business. Our free AI-powered calculator helps you accurately predict and optimize profit margins, ensuring predictable earnings and confident decision-making.',
          url: 'https://johncrestani.me/ecommerce-tools/dropshipping-profit-calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          isAccessibleForFree: true,
          creator: {
            '@type': 'Person',
            name: 'John Crestani',
            sameAs: [
              'https://linkedin.com/in/johncrestani',
              'https://twitter.com/johncrestani',
              'https://instagram.com/johncrestani',
            ],
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          featureList: [
            'Estimate potential revenue',
            'Calculate product and shipping costs',
            'Determine profit margins',
            'Project monthly net profit',
            'Identify key financial metrics',
          ],
          softwareHelp: {
            '@type': 'CreativeWork',
            name: 'How to Use the Dropshipping Profit Calculator',
            text: 'Input your product cost, shipping cost, selling price, monthly orders, and marketing cost to instantly calculate your estimated monthly and yearly dropshipping profit.',
          },
        }}
      />

      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How accurate is the dropshipping calculator?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "The calculator provides estimates based on the input values you provide. Actual profits may vary depending on platform fees, refunds, market conditions, and other factors not accounted for in this simple calculation. It's designed to give you a strong foundation for predictable planning, not a guarantee.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is a good profit margin for dropshipping?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "A healthy profit margin for dropshipping typically ranges from 20% to 30%, though some products can achieve higher margins. It's important to consider all costs, including marketing and potential returns, when calculating your target margin. Aim for predictability, not just high numbers.",
              },
            },
            {
              '@type': 'Question',
              name: 'How can I increase my dropshipping profits?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "You can increase profits by finding reliable suppliers with better prices, optimizing your marketing spend, increasing your average order value, and implementing effective upselling strategies. To truly achieve predictable, scalable income and eliminate uncertainty, John Crestani's AI Marketing Club (SAS Pro) offers advanced, AI-powered strategies beyond basic calculations.",
              },
            },
          ],
        }}
      />
      <ClientDropshippingCalculator />
    </>
  )
}

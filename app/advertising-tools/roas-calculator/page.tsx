import ClientROASCalculator from './ClientROASCalculator'
import { JsonLd } from 'react-schemaorg'

export const metadata = {
  title: 'Predictable Profits: AI-Powered ROAS Calculator',
  description:
    'Eliminate the guesswork from your ad spend. Our free AI-powered ROAS calculator helps you predict and optimize ad campaign performance for stable, profitable returns and confident marketing decisions.',
}

export default function ROASCalculatorPage() {
  const pageUrl = 'https://johncrestani.me/advertising-tools/roas-calculator'

  return (
    <>
      {/* Structured Data: SoftwareApplication */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'ROAS Calculator',
          description:
            'Eliminate the guesswork from your ad spend. Our free AI-powered ROAS calculator helps you predict and optimize ad campaign performance for stable, profitable returns and confident marketing decisions.',
          url: pageUrl,
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
            'Calculate Return on Ad Spend (ROAS)',
            'Estimate campaign profitability',
            'Analyze ad effectiveness',
            'Support data-driven marketing decisions',
          ],
          softwareHelp: {
            '@type': 'CreativeWork',
            name: 'How to Use the ROAS Calculator',
            text: 'Input your total ad spend and the total revenue generated from your campaign to instantly calculate your Return on Ad Spend (ROAS).',
          },
        }}
      />

      {/* Structured Data: FAQPage */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a good ROAS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A good ROAS depends on your industry and business model, but generally, a ROAS of 4:1 ($4 in revenue for every $1 spent on ads) is considered a strong indicator of profitability. However, some businesses may require a higher ROAS to be profitable due to other costs. Focus on achieving predictable and sustainable returns.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can I improve my ROAS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'To improve your ROAS and achieve predictable ad performance, focus on refining your audience targeting, crafting compelling and high-converting ad copy and creatives, optimizing your landing pages for maximum conversion, and continually testing and refining your campaigns. John Crestani\'s AI Marketing Club (SAS Pro) provides advanced, AI-powered strategies to systematically boost your ROAS and ensure predictable returns.',
              },
            },
            {
              '@type': 'Question',
              name: 'How often should I calculate my ROAS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It\'s best to calculate your ROAS regularly to maintain predictable campaign performance—ideally weekly or monthly, depending on your ad spend volume and campaign duration. This allows you to quickly identify and adjust underperforming campaigns and confidently scale successful ones for maximum profitability.',
              },
            },
          ],
        }}
      />

      <ClientROASCalculator backUrl="/free-tools" />
    </>
  )
}

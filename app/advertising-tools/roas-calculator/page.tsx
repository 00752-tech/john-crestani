export const metadata = {
  title: 'ROAS Calculator | Super Affiliate System Pro',
  description: 'Calculate your Return on Ad Spend (ROAS) with our free calculator. Optimize your advertising campaigns and improve your marketing ROI.',
}

import ROASCalculator from '@/components/ROASCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'

export default function ROASCalculatorPage() {
  const handleLearnMore = () => {
    window.location.href = '/api/sale'
  }

  const pageUrl = 'https://example.com/advertising-tools/roas-calculator'; // Replace with your actual URL
  const pageTitle = 'ROAS Calculator | Super Affiliate System Pro';

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/tools" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4">
          Return on Ad Spend (ROAS) Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
            <strong>Understanding and improving your Return on Ad Spend (ROAS) is fundamental to running profitable advertising campaigns in affiliate marketing and beyond.</strong><br /><br />
            <strong>ROAS is a key metric</strong> that directly measures the revenue generated for every dollar you spend on advertising, providing immediate insight into campaign performance.<br /><br />
            By calculating your ROAS, you can quickly determine if your campaigns are <strong>making a profit (ROAS above 1x)</strong>, <strong>breaking even (ROAS of 1x)</strong>, or <strong>losing money (ROAS below 1x)</strong>.<br /><br />
            This page is designed to help you achieve goal completion related to ROAS: <strong>easily calculate your ROAS using our tool</strong> and explore how <strong>John Crestani&apos;s Super Affiliate System Pro</strong> teaches comprehensive methods to maximize your profitability.<br /><br />
            You&apos;ll discover essential strategies like <strong>creating high-converting ad campaigns, targeting the right audience, optimizing ad spend, and scaling campaigns effectively</strong>.
          </p>

          <ROASCalculator />

          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Ad Spend:</strong> Enter the total amount you&apos;ve spent on your advertising campaign.
              </li>
              <li>
                <strong className="text-pink-500">Revenue:</strong> Input the total revenue generated from the campaign.
              </li>
              <li>
                <strong className="text-pink-500">Interpreting ROAS:</strong> A ROAS of 1 means you&apos;re breaking even. Anything above 1 indicates profit, while below 1 means you&apos;re losing money on your ads.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Maximize Your ROAS with John Crestani</h2>
            <p className="text-gray-300 mb-4">
              Improving your ROAS is crucial for profitable affiliate marketing. John Crestani&apos;s Super Affiliate System Pro teaches you how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Create high-converting ad campaigns</li>
              <li>Target the right audience for maximum ROI</li>
              <li>Optimize your ad spend across different platforms</li>
              <li>Scale your campaigns profitably</li>
            </ul>
            <button 
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn How to Boost Your ROAS
            </button>
          </div>
        </div>

        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a good ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good ROAS depends on your industry and business model, but generally, a ROAS of 4:1 ($4 in revenue for every $1 spent on ads) is considered good. However, some businesses may require a higher ROAS to be profitable due to other costs."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve my ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To improve your ROAS, focus on targeting the right audience, creating compelling ad copy and creative, optimizing your landing pages, and continually testing and refining your campaigns. John Crestani's Super Affiliate System Pro provides in-depth strategies for maximizing your ROAS."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I calculate my ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's best to calculate your ROAS regularly, ideally weekly or monthly, depending on your ad spend and campaign duration. This allows you to quickly identify and adjust underperforming campaigns, and scale successful ones."
                }
              }
            ]
          }}
        />
        <RelatedTools currentToolUrl="/advertising-tools/roas-calculator" category="advertising" />
      </div>
    </div>
  )
}

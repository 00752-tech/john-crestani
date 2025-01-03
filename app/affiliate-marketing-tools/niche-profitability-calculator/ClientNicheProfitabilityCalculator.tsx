/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import NicheProfitabilityCalculator from '@/components/NicheProfitabilityCalculator'
import ShareButtons from '@/components/ShareButtons'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import RelatedTools from '@/components/RelatedTools'

export default function ClientNicheProfitabilityCalculator() {
  const handleLearnMore = () => {
    window.location.href = '/api/sale'
  }

  const pageUrl = 'https://johncrestani.me/tools/niche-profitability-calculator'
  const pageTitle = 'Calculate Niche Profitability for Affiliate Marketing | Free Tool'

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/free-tools" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4">
          Niche Profitability Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Estimate the potential profitability of different niches for your affiliate marketing campaigns. Input key metrics to see projected clicks, costs, conversions, revenue, and profit.
          </p>
          
          <NicheProfitabilityCalculator />
          
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>
          
          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Monthly Search Volume:</strong> Enter the estimated monthly search volume for your main niche keyword. You can find this data using tools like Google Keyword Planner or SEMrush.
              </li>
              <li>
                <strong className="text-pink-500">Average CPC:</strong> Input the average cost-per-click for ads in your niche. This data is also available in keyword research tools.
              </li>
              <li>
                <strong className="text-pink-500">Conversion Rate:</strong> Estimate the percentage of visitors who will make a purchase. Industry averages range from 1-5%, but this can vary based on your niche and marketing strategy.
              </li>
              <li>
                <strong className="text-pink-500">Average Commission:</strong> Enter the average commission you expect to earn per sale in your chosen niche.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Master Niche Selection with John Crestani</h2>
            <p className="text-gray-300 mb-4">
              {`While this calculator provides valuable insights, successful niche selection requires more than just numbers. John Crestani's Super Affiliate System Pro teaches you:`}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>How to identify untapped, profitable niches</li>
              <li>Strategies to dominate competitive markets</li>
              <li>Techniques to maximize conversions in any niche</li>
              <li>Ways to scale your affiliate marketing business across multiple niches</li>
            </ul>
            <button 
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn Niche Mastery Techniques
            </button>
          </div>
        </div>

        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate is the niche profitability calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This calculator provides estimates based on the input values you provide. Actual profitability may vary depending on factors such as competition, market trends, your specific marketing strategies, and the quality of your affiliate offers."
                }
              },
              {
                "@type": "Question",
                "name": "What makes a niche profitable for affiliate marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A profitable niche typically has a good balance of search volume, reasonable competition, high-paying affiliate programs, and a target audience willing to spend money. Factors like trend stability, recurring purchase potential, and the availability of quality products to promote also contribute to a niche's profitability."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve the profitability of my chosen niche?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To improve niche profitability, focus on creating high-quality content, building a targeted email list, optimizing your conversion funnel, diversifying your traffic sources, and continuously testing and refining your marketing strategies. John Crestani's Super Affiliate System Pro offers in-depth training on these techniques and more."
                }
              }
            ]
          }}
        />
        <RelatedTools currentToolUrl="/affiliate-marketing-tools/niche-profitability-calculator" category="affiliate" />
      </div>
    </div>
  )
}


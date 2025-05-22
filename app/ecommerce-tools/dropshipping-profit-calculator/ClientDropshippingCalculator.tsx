/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import DropshippingCalculator from '@/components/DropshippingCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'

export default function ClientDropshippingCalculator({backUrl="/free-tools", pageUrlPath="/ecommerce-tools/dropshipping-profit-calculator"}: {backUrl?: string, pageUrlPath?: string}) {
  const handleLearnAdvancedStrategies = () => {
    window.location.href = '/api/sale'
  }


  const pageUrl =`https://johncrestani.me${pageUrlPath}`;
  const pageTitle = 'Dropshipping Profit Calculator | Super Affiliate System Pro';

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href={backUrl}
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4">
          Dropshipping Profit Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Discover <strong>how to craft an SEO-optimized first paragraph</strong> that instantly addresses visitor intent and boosts your search engine ranking, using the proven <strong>Goal Completion method</strong> discussed in this guide.
          </p>
          
          <DropshippingCalculator />
          
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Product Cost:</strong> Enter the amount you pay your supplier for each product.
              </li>
              <li>
                <strong className="text-pink-500">Shipping Cost:</strong> Input the average shipping cost per item.
              </li>
              <li>
                <strong className="text-pink-500">Selling Price:</strong> Set your retail price for each product.
              </li>
              <li>
                <strong className="text-pink-500">Monthly Orders:</strong> Estimate how many orders you expect per month.
              </li>
              <li>
                <strong className="text-pink-500">Marketing Cost:</strong> Include your monthly advertising budget.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Scale Your Dropshipping Business</h2>
            <p className="text-gray-300 mb-4">
              While calculating potential profits is important, success in dropshipping requires:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Finding winning products</li>
              <li>Creating high-converting ads</li>
              <li>Optimizing your marketing strategy</li>
              <li>Building sustainable supplier relationships</li>
            </ul>
            <button 
              onClick={handleLearnAdvancedStrategies}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn Advanced Dropshipping Strategies
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
                "name": "How accurate is the dropshipping calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The calculator provides estimates based on the input values you provide. Actual profits may vary depending on platform fees, refunds, market conditions, and other factors not accounted for in this simple calculation."
                }
              },
              {
                "@type": "Question",
                "name": "What is a good profit margin for dropshipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A healthy profit margin for dropshipping typically ranges from 20% to 30%, though some products can achieve higher margins. It's important to consider all costs, including marketing and potential returns, when calculating your target margin."
                }
              },
              {
                "@type": "Question",
                "name": "How can I increase my dropshipping profits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can increase profits by finding reliable suppliers with better prices, optimizing your marketing spend, increasing your average order value, and implementing effective upselling strategies. Programs like Super Affiliate System Pro teach advanced techniques for scaling your dropshipping business."
                }
              }
            ]
          }}
        />
        <RelatedTools currentToolUrl="/ecommerce-tools/dropshipping-profit-calculator" category="ecommerce" />
      </div>
    </div>
  )
}


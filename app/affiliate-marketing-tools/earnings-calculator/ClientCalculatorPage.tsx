/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import AffiliateEarningsCalculator from '@/components/AffiliateEarningsCalculator'
import ShareButtons from '@/components/ShareButtons'
import ToolsCTA from '@/components/ToolsCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import RelatedTools from '@/components/RelatedTools'

export default function ClientCalculatorPage() {
  const handleLearnMore = () => {
    window.location.href = '/api/sale'
  }

  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools/earnings-calculator'
  const pageTitle = 'Calculate Your Affiliate Marketing Earnings for Free | Super Affiliate System Pro'

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/free-tools" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Free Tools
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4">
          Free Affiliate Marketing Earnings Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Use this free calculator to estimate your potential earnings as an affiliate marketer. Input your expected traffic, conversion rate, and average commission to see what you could earn.
          </p>
          
          <AffiliateEarningsCalculator />
          
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>
          
          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Free Calculator</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Monthly Traffic:</strong> Enter the number of visitors you expect to receive each month. This could be from various sources like social media, SEO, or paid advertising.
              </li>
              <li>
                <strong className="text-pink-500">Conversion Rate:</strong> The percentage of visitors who make a purchase through your affiliate links. Industry averages range from 1-5%, but this can vary significantly based on your niche and marketing strategy.
              </li>
              <li>
                <strong className="text-pink-500">Average Commission:</strong> The amount you earn per sale. This varies by product and program - digital products often offer higher commission rates than physical products.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Want to Achieve These Numbers?</h2>
            <p className="text-gray-300 mb-4">
              {`John Crestani's Super Affiliate System Pro teaches you proven strategies to:`}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Drive targeted traffic to your affiliate offers</li>
              <li>Optimize your conversion rates</li>
              <li>Select high-commission products that sell</li>
              <li>Scale your affiliate marketing business</li>
            </ul>
            <button 
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn More About the Course
            </button>
          </div>

          <ToolsCTA />
          <RelatedTools currentToolUrl="/affiliate-marketing-tools/earnings-calculator" category="affiliate" />
        </div>

        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is this affiliate earnings calculator really free?",
                "acceptedAnswer": {
                  "@type":"Answer",
                  "text": "Yes, this calculator is completely free to use. We provide it as a valuable resource for affiliate marketers at all levels."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is the affiliate earnings calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The calculator provides estimates based on the input values you provide. Actual earnings may vary depending on factors such as niche, product quality, marketing strategy, and market conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What is a good conversion rate for affiliate marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Conversion rates typically range from 1-5% in affiliate marketing, though this can vary significantly by niche and traffic quality. Some highly targeted campaigns can achieve even higher rates."
                }
              },
              {
                "@type": "Question",
                "name": "How can I increase my affiliate marketing earnings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can increase earnings by improving traffic quality, optimizing conversion rates, choosing higher-commission products, and implementing effective marketing strategies. John Crestani's Super Affiliate System Pro teaches all these aspects in detail."
                }
              }
            ]
          }}
        />
      </div>
    </div>
  )
}


/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import InvestmentCalculator from '@/components/InvestmentCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'

export default function ClientInvestmentCalculator() {
  const handleInvestInFuture = () => {
    window.location.href = '/api/sale'
  }

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
          Investment Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Use this calculator to estimate the future value of your investments. Input your initial investment, monthly contributions, expected annual return, and investment length to see potential growth over time.
          </p>
          
          <InvestmentCalculator />
          
          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Initial Investment:</strong> {`Enter the amount you're starting with or have already invested.`}
              </li>
              <li>
                <strong className="text-pink-500">Monthly Contribution:</strong> The amount you plan to add to your investment each month.
              </li>
              <li>
                <strong className="text-pink-500">Annual Return:</strong> The expected yearly return on your investment as a percentage. This can vary based on the type of investment and market conditions.
              </li>
              <li>
                <strong className="text-pink-500">Investment Length:</strong> The number of years you plan to keep your money invested.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Invest in Your Affiliate Marketing Career</h2>
            <p className="text-gray-300 mb-4">
             {` While planning your financial future is crucial, investing in your skills can lead to exponential growth in your earning potential. John Crestani's Super Affiliate System Pro teaches you how to:`}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li>Identify lucrative affiliate marketing opportunities</li>
              <li>Create high-converting campaigns</li>
              <li>Scale your affiliate business for long-term success</li>
              <li>Diversify your income streams</li>
            </ul>
            <button 
              onClick={handleInvestInFuture}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Invest in Your Future with Super Affiliate System Pro
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
                "name": "How accurate is the investment calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The calculator provides estimates based on the input values you provide. Actual investment returns may vary depending on market conditions, fees, taxes, and other factors not accounted for in this simple calculation."
                }
              },
              {
                "@type": "Question",
                "name": "What is a good annual return rate to use in the calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A conservative estimate for long-term stock market returns is around 7% per year after inflation. However, returns can vary widely based on the type of investment and market conditions. It's often wise to use a conservative estimate for planning purposes."
                }
              },
              {
                "@type": "Question",
                "name": "How can I increase my investment returns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While there's no guaranteed way to increase returns, some strategies include diversifying your portfolio, investing for the long term, regularly contributing to your investments, and educating yourself about different investment options. Additionally, investing in your skills, such as learning affiliate marketing through programs like John Crestani's Super Affiliate System Pro, can potentially lead to higher income that you can then invest."
                }
              }
            ]
          }}
        />
      </div>
    </div>
  )
}


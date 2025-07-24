/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import DropshippingCalculator from '@/components/DropshippingCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'

interface ClientDropshippingCalculatorProps {
  backUrl?: string
  pageUrlPath?: string
}

export default function ClientDropshippingCalculator({
  backUrl = '/free-tools',
  pageUrlPath = '/ecommerce-tools/dropshipping-profit-calculator',
}: ClientDropshippingCalculatorProps) {
  const handleLearnAdvancedStrategies = () => {
    // Open the affiliate link securely in a new tab
    window.open(
      'https://80625m95s0czdra33fgb2xct8b.hop.clickbank.net/?&traffic_source=droppshipping_calc_pg',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const pageUrl = `https://johncrestani.me${pageUrlPath}`
  const pageTitle = 'End Guesswork: Dropshipping Profit Predictor'

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <style jsx global>{`
        .no-hover,
        .no-hover:hover,
        .no-hover:focus,
        .no-hover:active,
        .no-hover:visited {
          background: linear-gradient(to right, #ec4899, #a21caf) !important;
          color: #fff !important;
          outline: none;
          box-shadow: none !important;
          text-decoration: none !important;
          cursor: pointer !important;
          transition: none !important;
          filter: none !important;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <Link href={backUrl} className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4">
          End Dropshipping Uncertainty: Your Profit Predictor
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Tired of the <strong>guesswork</strong> in dropshipping? Our free, AI-powered Dropshipping Profit Predictor removes uncertainty, giving you the <strong>clarity and confidence</strong> to accurately forecast earnings.
            Calculate revenue, costs, and profit margins to <strong>ensure predictable financial growth</strong> and make data-driven decisions for your e-commerce business.
          </p>

          <DropshippingCalculator />

          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          <div className="mt-12 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Gain Clarity Instantly: How to Use This Calculator</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li>
                <strong className="text-pink-500">Product Cost:</strong> Enter the amount you pay your supplier for each product. This is your foundation for profit.
              </li>
              <li>
                <strong className="text-pink-500">Shipping Cost:</strong> Input the average shipping cost per item. Don&apos;t let hidden fees erode your predictability.
              </li>
              <li>
                <strong className="text-pink-500">Selling Price:</strong> Set your retail price for each product. This directly impacts your revenue potential.
              </li>
              <li>
                <strong className="text-pink-500">Monthly Orders:</strong> Estimate how many orders you expect per month. Predict your sales volume for better planning.
              </li>
              <li>
                <strong className="text-pink-500">Marketing Cost:</strong> Include your monthly advertising budget. Factor in all expenses for a true profit picture.
              </li>
              <li>
                Click &quot;Calculate Profit&quot; to instantly see your estimated monthly and yearly net profits.
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Beyond Guesswork: Secure Your Predictable AI Income</h2>
            <p className="text-gray-300 mb-4">
              Calculating potential dropshipping profits is just the start. True <strong>financial freedom and stability</strong> come from a complete, proven blueprint to consistently generate high-ticket income.
              John Crestani&apos;s AI Marketing Club (SAS Pro) provides the step-by-step system to <strong>confidently navigate the AI economy, eliminate guesswork</strong>, and <strong>future-proof your career</strong>. Learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><strong>Confidently find winning products</strong> that drive consistent sales using AI-powered insights.</li>
              <li><strong>Systematically create high-converting ads</strong> that minimize wasted spend and maximize ROI.</li>
              <li><strong>Automate your dropshipping operations</strong> to achieve predictable, scalable income streams.</li>
              <li><strong>Future-proof your e-commerce business</strong> against market shifts with adaptable AI strategies for long-term stability.</li>
            </ul>
            <button
              onClick={handleLearnAdvancedStrategies}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                outline: 'none',
                filter: 'none',
                cursor: 'pointer',
              }}
            >
              Unlock My Predictable AI Income Blueprint Now!
            </button>
          </div>
        </div>

        <RelatedTools currentToolUrl="/tools/dropshipping-profit-calculator" category="ecommerce" />
      </div>
    </div>
  )
}

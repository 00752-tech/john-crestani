/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { JsonLd } from 'react-schemaorg'

// Simple profitability calculation function
function calculateProfitability(
  averageSalesPerMonth: number,
  averageSaleValue: number,
  averageCommissionRate: number,
  averageProfitMargin: number
) {
  return (
    averageSalesPerMonth *
    averageSaleValue *
    (averageCommissionRate / 100) *
    (averageProfitMargin / 100)
  )
}

export default function NicheProfitabilityCalculator({
  backUrl = '/affiliate-marketing-tools',
}: {
  backUrl?: string
}) {
  const [averageSalesPerMonth, setAverageSalesPerMonth] = useState(0)
  const [averageSaleValue, setAverageSaleValue] = useState(0)
  const [averageCommissionRate, setAverageCommissionRate] = useState(0)
  const [averageProfitMargin, setAverageProfitMargin] = useState(0)
  const [estimatedMonthlyProfit, setEstimatedMonthlyProfit] = useState<number | null>(null)

  const canCalculate =
    averageSalesPerMonth > 0 &&
    averageSaleValue > 0 &&
    averageCommissionRate > 0 &&
    averageProfitMargin > 0

  const handleCalculate = () => {
    if (!canCalculate) return
    const profit = calculateProfitability(
      averageSalesPerMonth,
      averageSaleValue,
      averageCommissionRate,
      averageProfitMargin
    )
    setEstimatedMonthlyProfit(profit)
  }

  const handleReset = () => {
    setAverageSalesPerMonth(0)
    setAverageSaleValue(0)
    setAverageCommissionRate(0)
    setAverageProfitMargin(0)
    setEstimatedMonthlyProfit(null)
  }

  // Custom affiliate link for the no-hover CTA button
  const affiliateLink = "https://13ca6r8tex6r7q1adnc-0y5o19.hop.clickbank.net/?&traffic_source=niche_profit_calc_pg"

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(affiliateLink, "_blank", "noopener,noreferrer")
  }

  const pageTitle = 'Eliminate Niche Uncertainty: Free AI-Powered Profitability Calculator | JohnCrestani.me'
  const pageDesc =
    'Stop guessing your market potential. Our free AI-powered Niche Profitability Calculator helps you confidently identify the most lucrative niches, ensuring predictable earnings and avoiding costly mistakes.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>

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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white pt-32 pb-20"
      >
        <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <Link href={backUrl} className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>

          {/* H1 */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4"
          >
            Conquer Market Uncertainty:<br />
            Your AI-Powered Niche Profitability &amp; Predictability Calculator
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-center mb-12 text-gray-300"
          >
            Are you <strong>nervous about picking the wrong niche</strong> and wasting time or money? Eliminate the guesswork! Our free,&nbsp;
            <strong>AI-powered Niche Profitability Calculator</strong> gives you the <strong>clarity and confidence</strong> to accurately assess market potential.&nbsp;
            Quickly estimate the true profitability of your affiliate marketing niche to <strong>identify lucrative opportunities</strong> and <strong>ensure predictable earnings</strong> from your campaigns, letting you <strong>invest your efforts with certainty</strong>.
          </motion.p>

          {/* Calculator Form */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-900 p-8 rounded-lg mb-10">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleCalculate()
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="averageSalesPerMonth" className="block mb-2 font-semibold text-pink-500">
                  Average Sales per Month
                </label>
                <input
                  id="averageSalesPerMonth"
                  type="number"
                  min={0}
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white"
                  value={averageSalesPerMonth}
                  onChange={(e) => setAverageSalesPerMonth(Number(e.target.value))}
                  placeholder="e.g. 100"
                  required
                />
              </div>

              <div>
                <label htmlFor="averageSaleValue" className="block mb-2 font-semibold text-pink-500">
                  Average Sale Value ($)
                </label>
                <input
                  id="averageSaleValue"
                  type="number"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white"
                  value={averageSaleValue}
                  onChange={(e) => setAverageSaleValue(Number(e.target.value))}
                  placeholder="e.g. 50.00"
                  min={0}
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label htmlFor="averageCommissionRate" className="block mb-2 font-semibold text-pink-500">
                  Average Commission Rate (%)
                </label>
                <input
                  id="averageCommissionRate"
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white"
                  value={averageCommissionRate}
                  onChange={(e) => setAverageCommissionRate(Number(e.target.value))}
                  placeholder="e.g. 10"
                  required
                />
              </div>

              <div>
                <label htmlFor="averageProfitMargin" className="block mb-2 font-semibold text-pink-500">
                  Average Profit Margin (%)
                </label>
                <input
                  id="averageProfitMargin"
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white"
                  value={averageProfitMargin}
                  onChange={(e) => setAverageProfitMargin(Number(e.target.value))}
                  placeholder="e.g. 40"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={!canCalculate}
                  className="flex-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Calculate Profitability
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 rounded-full border border-pink-500 py-3 font-semibold text-pink-500 hover:bg-pink-500 hover:text-black transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>

          {/* Display Estimated Profit */}
          {estimatedMonthlyProfit !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-pink-500 rounded-lg p-6 text-black font-semibold text-center text-xl mb-12"
            >
              Estimated Monthly Profit: ${estimatedMonthlyProfit.toFixed(2)}
            </motion.div>
          )}

          {/* How to Use This Calculator */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gray-900 p-8 rounded-lg mb-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Gain Clarity Instantly: How to Use This Calculator
            </motion.h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Estimate the average number of sales you expect to make per month in your niche.</li>
              <li>Enter the average sale value (price) for each sale.</li>
              <li>Input the typical commission rate percentage you earn per sale.</li>
              <li>Enter the profit margin percentage to factor in your costs and expenses.</li>
              <li>Click &quot;Calculate Profitability&quot; to see your estimated monthly profit.</li>
            </ol>
          </motion.div>

          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-900 p-8 rounded-lg">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Beyond Niche Selection: Secure Your Predictable AI Income
            </motion.h2>
            <p className="text-gray-300 mb-4">
              Knowing your niche potential is powerful, but true <strong>financial freedom and stability</strong> come from having a proven blueprint to consistently generate high-ticket income. John Crestani&apos;s AI Marketing Club (SAS Pro) provides the step-by-step system to <strong>confidently navigate the AI economy, eliminate guesswork</strong>, and <strong>future-proof your career</strong>. Learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <strong>Identify and validate profitable niches</strong> with cutting-edge AI insights.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <strong>Craft high-converting campaigns effortlessly</strong> with AI tools, ensuring consistent engagement and sales.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <strong>Scale your affiliate business with confidence</strong>, building a long-term asset that provides stability.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
                <strong>Diversify your income streams for true financial freedom</strong>, moving beyond single points of failure.
              </motion.li>
            </ul>
            <motion.button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              style={{
                boxShadow: "none",
                textDecoration: "none",
                outline: "none",
                filter: "none",
                cursor: "pointer"
              }}
            >
              Unlock My Predictable AI Income Blueprint Now!
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Structured Data: SoftwareApplication */}
        <JsonLd<any>
          item={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Niche Profitability Calculator',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            operatingSystem: 'Any',
            description:
              'Eliminate market uncertainty and confidently identify the most lucrative affiliate marketing niches. Our free AI-powered calculator helps you estimate true profit potential, ensuring predictable earnings and avoiding costly ventures.',
            creator: {
              '@type': 'Person',
              name: 'John Crestani',
            },
            featureList: [
              'Input average sales per month',
              'Define average sale value',
              'Set commission rate and profit margin',
              'Calculate estimated monthly profit quickly',
            ],
            softwareHelp: {
              '@type': 'CreativeWork',
              name: 'How to Use This Calculator',
              text: 'Input your estimated sales, sale value, commission rate, and profit margin percentages, then calculate to estimate your monthly profit.',
            },
          }}
        />

        {/* Structured Data: FAQPage */}
        <JsonLd<any>
          item={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How accurate is the Niche Profitability Calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The calculator provides estimates based on the data you input. Its accuracy depends on the realism of your average sales, sale value, commission rate, and profit margin. It’s a powerful tool to guide your decisions and reduce uncertainty, but real-world results can vary.',
                },
              },
              {
                '@type': 'Question',
                name: "What if I'm not sure what niche to choose?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Many aspiring affiliates struggle with niche selection. Our calculator helps you quantify potential, but finding genuinely profitable, sustainable niches and knowing how to monetize them is a skill. John Crestani's AI Marketing Club provides the advanced AI tools and proven strategies to confidently identify lucrative niches and build predictable income streams from scratch.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can this calculator help me avoid wasting time on unprofitable niches?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Absolutely. By providing a clear financial projection, this calculator allows you to quickly assess a niche's potential before investing significant time and resources. It's designed to help you make data-driven decisions, eliminating the guesswork and reducing the risk of costly mistakes.",
                },
              },
            ],
          }}
        />
      </motion.div>
    </>
  )
}

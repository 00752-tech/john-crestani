/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Head from 'next/head'
import Link from 'next/link'
import InvestmentCalculator from '@/components/InvestmentCalculator'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import { motion } from 'framer-motion'
import React from 'react'

export default function ClientInvestmentCalculator({ backUrl = '/free-tools' }: { backUrl?: string }) {
  const pageUrl = 'https://johncrestani.me/financial-tools/investment-calculator'
  const pageTitle = 'Secure Your Financial Future: Free Investment Growth Calculator | JohnCrestani.me'
  const pageDesc =
    'Predict your investment growth with our free calculator. Go beyond traditional investments by learning how to multiply your income through AI-powered affiliate marketing with John Crestani.'

  // CTA button opens internal page /api/sale as per your previous setup (no affiliate URL exposure)
  const handleInvestInFuture = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.location.href = '/api/sale'
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {/* Add canonical, og:image, etc. here if needed */}
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white pt-32 pb-20"
      >
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          {/* Back to Tools Link */}
          <Link href={backUrl} className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          >
            Conquer Financial Uncertainty: Your Blueprint to Predictable Investment Growth &amp; Income
          </motion.h1>

          {/* Intro Paragraph with strong Beyond Fear messaging */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
              Are you <strong>anxious about your financial future</strong>? Use our intuitive Investment Calculator to{' '}
              <strong>gain clarity and confidence</strong> by estimating the future value of your investments. While traditional investments offer steady growth, true financial freedom comes from{' '}
              <strong>exponentially growing your earning potential</strong>.<br />
              <br />
              Discover how <strong>investing in your skills</strong>, particularly in AI-powered affiliate marketing through{' '}
              <strong>John Crestani&apos;s AI Marketing Club (SAS Pro)</strong>, can be your ultimate leverage.{' '}
              <strong>Go beyond mere savings</strong> and learn to <strong>identify lucrative opportunities, create high-converting campaigns, scale your business, and diversify your income streams for predictable, reliable wealth creation.</strong>
            </p>
          </motion.div>

          {/* Investment Calculator Component */}
          <InvestmentCalculator />

          {/* How to Use This Calculator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-semibold mb-4"
            >
              Effortlessly Project Your Financial Growth: How to Use This Calculator
            </motion.h2>
            <ul className="space-y-4 text-gray-300">
              {[
                { label: 'Initial Investment', desc: `Enter the amount you're starting with or have already invested.` },
                { label: 'Monthly Contribution', desc: 'The amount you plan to add to your investment each month.' },
                { label: 'Annual Return', desc: 'The expected yearly return on your investment as a percentage. This can vary based on the type of investment and market conditions.' },
                { label: 'Investment Length', desc: 'The number of years you plan to keep your money invested.' },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <strong className="text-pink-500">{item.label}:</strong> {item.desc}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Invest in Your Affiliate Marketing Career Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-semibold mb-4"
            >
              Beyond Traditional Investments: Secure Your Future with Predictable AI Income Streams
            </motion.h2>
            <p className="text-gray-300 mb-4">
              While calculating traditional investment growth is a start, true <strong>financial resilience and freedom</strong> come from creating <strong>multiple, predictable income streams</strong>. John Crestani&apos;s AI Marketing Club (SAS Pro) isn&apos;t just a course; it&apos;s your blueprint to{' '}
              <strong>confidently secure reliable online income</strong> and <strong>regain control</strong> of your financial destiny. Discover how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <strong>Identify and seize lucrative AI-powered opportunities</strong>, turning market shifts into predictable profit.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <strong>Craft high-converting campaigns effortlessly</strong> with AI tools, ensuring consistent engagement and sales.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <strong>Scale your business with confidence</strong>, building a long-term asset that provides stability.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <strong>Diversify your income streams for true financial freedom</strong>, moving beyond single points of failure.
              </motion.li>
            </ul>
            <motion.button
              onClick={handleInvestInFuture}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Unlock My Predictable AI Income Blueprint Now!
            </motion.button>
          </motion.div>
        </motion.div>

        {/* FAQ Schema */}
        <JsonLd<object>
          item={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How accurate is the investment calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The calculator provides estimates based on the input values you provide. Actual investment returns may vary depending on market conditions, fees, taxes, and other factors not accounted for in this simple calculation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a good annual return rate to use in the calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A conservative estimate for long-term stock market returns is around 7% per year after inflation. However, returns can vary widely based on the type of investment and market conditions. It's often wise to use a conservative estimate for planning purposes.",
                },
              },
              {
                '@type': 'Question',
                name: 'How can I increase my investment returns?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "While there's no guaranteed way to increase returns, some strategies include diversifying your portfolio, investing for the long term, regularly contributing to your investments, and educating yourself about different investment options. Additionally, investing in your skills, such as learning affiliate marketing through programs like John Crestani's Super Affiliate System Pro, can potentially lead to higher income that you can then invest.",
                },
              },
            ],
          }}
        />

        {/* SoftwareApplication Schema */}
        <JsonLd<any>
          item={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Investment Growth Calculator',
            applicationCategory: 'FinanceApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            operatingSystem: 'Any',
            description:
              'Conquer financial uncertainty and project your investment growth. Our free calculator helps you visualize potential returns, while empowering you to discover predictable income streams through AI-powered affiliate marketing.',
            creator: {
              '@type': 'Person',
              name: 'John Crestani',
            },
            featureList: [
              'Calculate future value of investments',
              'Factor in initial investment and monthly contributions',
              'Project growth based on annual return and investment length',
            ],
            softwareHelp: {
              '@type': 'CreativeWork',
              name: 'How to Use This Calculator',
              text: '1. Enter your initial investment. 2. Input your monthly contribution. 3. Set your expected annual return. 4. Specify the investment length in years.',
            },
          }}
        />
      </motion.div>
    </>
  )
}

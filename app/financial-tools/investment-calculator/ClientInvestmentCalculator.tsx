'use client';

import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import { motion } from 'framer-motion'
import React from 'react'

// No-hover link to prevent URL preview on hover like CTA buttons
const NoHoverLink = ({
  children,
  url,
}: {
  children: React.ReactNode
  url: string
}) => {
  const openUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={openUrl}
      className="text-pink-500 underline font-semibold hover:text-pink-400 cursor-pointer bg-transparent border-none p-0"
      aria-label={`Open link to ${typeof children === 'string' ? children : 'link'}`}
      type="button"
      tabIndex={0}
    >
      {children}
    </button>
  )
}

// Updated InvestmentCalculator component with proper SAS Pro link in description
const InvestmentCalculator = () => {
  // For demo, fixed estimated value; replace with real logic/state as needed
  const estimatedFutureValue = 19318.14

  return (
    <section className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg text-gray-300 mb-16">
      <h2
        className="text-3xl font-extrabold gradient-text mb-6 text-center"
        style={{ fontWeight: 900 }}
      >
        Estimated Future Value
      </h2>
      <p className="text-center text-4xl font-bold mb-8">${estimatedFutureValue.toLocaleString()}</p>
      <p className="text-lg leading-relaxed text-center mb-6 italic tracking-wide">
        This calculator provides an estimate based on the given inputs. Actual investment returns may vary depending on market conditions and other factors.
      </p>
      <p className="text-lg max-w-xl mx-auto text-center leading-relaxed font-semibold">
        Want to learn how to leverage your investments for affiliate marketing? Check out{' '}
        <a
          href="https://johncrestani.me/super-affiliate-system-pro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline hover:text-pink-400 font-semibold"
          aria-label="Learn more about Super Affiliate System Pro"
        >
          John Crestani&apos;s Super Affiliate System Pro
        </a>.
      </p>
    </section>
  )
}

export default function ClientInvestmentCalculator({ backUrl = '/free-tools' }: { backUrl?: string }) {
  const pageTitle = 'Secure Your Financial Future: Free Investment Growth Calculator | JohnCrestani.me'
  const pageDesc =
    'Predict your investment growth with our free calculator. Go beyond traditional investments by learning how to multiply your income through AI-powered affiliate marketing with John Crestani.'

  // CTA button opens your own SAS Pro landing page in a new tab
  const handleInvestInFuture = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(
      'https://johncrestani.me/super-affiliate-system-pro',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
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
          <Link
            href={backUrl}
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 font-semibold italic"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tools
          </Link>

          {/* Main H1 */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold mb-14 text-center gradient-text leading-relaxed tracking-wide"
            style={{ fontWeight: 900 }}
          >
            <span className="block mb-4" style={{ fontStyle: 'italic' }}>
              Conquer Financial Uncertainty:
            </span>
            <span className="block" style={{ fontWeight: '900' }}>
              Your Blueprint to Predictable <br />
              Investment Growth &amp; Income
            </span>
          </motion.h1>

          {/* Intro Paragraph with no-hover link */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-16 px-4 leading-relaxed"
          >
            <p className="text-2xl text-center text-gray-300 font-semibold mb-12">
              Are you <span className="italic">anxious about your financial future</span>? Use our intuitive{' '}
              <span className="font-bold italic">Investment Calculator</span> to{' '}
              <span className="underline font-bold italic">gain clarity and confidence</span> by estimating the future value of your investments.
            </p>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">
              While <span className="font-semibold italic">traditional investments offer steady growth</span>, true financial freedom comes from{' '}
              <span className="font-bold italic underline">exponentially growing your earning potential</span>.
            </p>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Discover how <span className="font-bold underline italic">investing in your skills</span>, particularly in AI-powered affiliate marketing through{' '}
              <NoHoverLink url="https://johncrestani.me/super-affiliate-system-pro">
                John Crestani&apos;s AI Marketing Club (Super Affiliate System Pro)
              </NoHoverLink>,{' '}
              can be your ultimate leverage.{' '}
              <span className="italic font-semibold">
                Go beyond mere savings
              </span>{' '}
              and learn to{' '}
              <span className="font-bold italic underline">
                identify lucrative opportunities, create high-converting campaigns, scale your business, and diversify your income streams for predictable, reliable wealth creation.
              </span>
            </p>
          </motion.div>

          {/* Investment Calculator Component */}
          <InvestmentCalculator />

          {/* How to Use This Calculator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 bg-gray-900 p-10 rounded-lg shadow-lg"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl sm:text-4xl font-extrabold mb-8 max-w-3xl mx-auto text-center px-4 leading-snug"
              style={{ fontStyle: 'italic' }}
            >
              Effortlessly Project Your Financial Growth:
              <br />
              <span className="font-bold" style={{ textDecoration: 'underline' }}>
                How to Use This Calculator
              </span>
            </motion.h2>
            <ul className="space-y-6 text-gray-300 text-lg max-w-3xl mx-auto px-6 list-disc list-inside">
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
                  className="font-semibold"
                >
                  <span className="text-pink-500">{item.label}:</span>{' '}
                  <span className="italic font-normal">{item.desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Invest in Your Affiliate Marketing Career Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 bg-gray-900 p-10 rounded-lg shadow-lg"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-3xl font-extrabold mb-6 leading-tight"
            >
              Beyond Traditional Investments:
              <br />
              <span className="italic underline">Secure Your Future with Predictable AI Income Streams</span>
            </motion.h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              While calculating traditional investment growth is a start, true{' '}
              <span className="font-bold italic underline">financial resilience and freedom</span> come from creating{' '}
              <span className="font-bold underline">multiple, predictable income streams</span>. John Crestani&apos;s AI Marketing Club (SAS Pro) isn&apos;t just a course; it&apos;s your blueprint to{' '}
              <span className="italic font-semibold">confidently secure reliable online income</span> and{' '}
              <span className="font-extrabold italic underline">regain control</span> of your financial destiny. Discover how to:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg mb-8 max-w-4xl mx-auto px-4">
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <span className="font-bold underline italic">
                  Identify and seize lucrative AI-powered opportunities
                </span>, turning market shifts into predictable profit.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <span className="font-bold underline italic">Craft high-converting campaigns effortlessly</span> with AI tools, ensuring consistent engagement and sales.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
                <span className="font-bold underline italic">Scale your business with confidence</span>, building a long-term asset that provides stability.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}>
                <span className="font-bold underline italic">Diversify your income streams for true financial freedom</span>, moving beyond single points of failure.
              </motion.li>
            </ul>
            <motion.button
              onClick={handleInvestInFuture}
              className="block mx-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-pink-400 text-white font-extrabold py-4 px-12 rounded-full text-xl uppercase tracking-wide transition duration-300"
              aria-label="Unlock Predictable AI Income Blueprint"
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

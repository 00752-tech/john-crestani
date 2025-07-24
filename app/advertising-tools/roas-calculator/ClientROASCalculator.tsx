/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ROASCalculator from '@/components/ROASCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'
import { motion } from 'framer-motion'

interface ClientROASCalculatorProps {
  backUrl?: string
}

export default function ClientROASCalculator({ backUrl = '/free-tools' }: ClientROASCalculatorProps) {
  const handleLearnMore = () => {
    window.open(
      'https://80625m95s0czdra33fgb2xct8b.hop.clickbank.net/?&traffic_source=roas_calc_pg_cta',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const pageUrl = 'https://johncrestani.me/advertising-tools/roas-calculator'
  const pageTitle = 'Predictable Profits: AI-Powered ROAS Calculator'

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Global style for no-hover button */}
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4"
        >
          End Wasted Ad Spend: Your AI-Powered ROAS Predictor
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center mb-8 text-gray-300"
          >
            Are you <strong>uncertain about your ad campaign&apos;s profitability</strong>? Our free, AI-powered ROAS Predictor removes the guesswork, giving you the <strong>clarity and confidence</strong> to accurately forecast advertising returns. Measure the effectiveness of your campaigns to <strong>ensure predictable profits</strong> and make data-driven decisions for stable financial growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ROASCalculator />
          </motion.div>

          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Gain Clarity Instantly: How to Use This Predictor
            </motion.h2>
            <motion.ol
              className="list-decimal list-inside space-y-4 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  label: 'Ad Spend',
                  description: 'Enter the total amount you\'ve spent on your advertising campaign. This is your investment.',
                },
                {
                  label: 'Revenue',
                  description: 'Input the total revenue generated from the campaign. This is your return.',
                },
                {
                  label: 'Calculate ROAS',
                  description: 'Click the button to instantly see your Return on Ad Spend, revealing your campaign\'s efficiency.',
                },
                {
                  label: 'Interpreting Your Results',
                  description: 'A ROAS of 1 means you\'re breaking even. Anything above 1 indicates profit, while below 1 means you\'re losing money. Aim for predictable, positive returns.',
                },
              ].map(({ label, description }, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <strong className="text-pink-500">{label}:</strong> {description}
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Beyond Wasted Spend: Secure Your Predictable AI Income
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-gray-300 mb-4"
            >
              Maximizing your ROAS is critical for achieving <strong>predictable profits and financial stability</strong> in affiliate marketing. John Crestani&apos;s AI Marketing Club (SAS Pro) offers the comprehensive blueprint to <strong>eliminate wasted ad spend</strong>, <strong>confidently scale your campaigns</strong>, and <strong>future-proof your income</strong> in the AI economy. Learn how to:
            </motion.p>
            <motion.ul
              className="list-disc list-inside space-y-2 text-gray-300 mb-6"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                'Consistently create high-converting ad campaigns that guarantee positive ROI.',
                'Precise audience targeting to eliminate wasted spend and secure predictable clicks.',
                'Optimize your ad budget across platforms for maximum efficiency and predictable profit growth.',
                'Scale your affiliate business confidently with a blueprint for long-term, predictable success.',
              ].map((point, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
            <button
              onClick={handleLearnMore}
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
              Unlock My Predictable AI Income Blueprint Now!
            </button>
          </motion.div>
        </div>
        <RelatedTools currentToolUrl="/advertising-tools/roas-calculator" category="advertising" />
      </div>
    </div>
  )
}

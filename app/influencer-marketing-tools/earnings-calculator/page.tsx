/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import InfluencerEarningsCalculator from '@/components/InfluencerEarningsCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'
import { motion } from 'framer-motion'

interface ClientInfluencerEarningsCalculatorProps {
  backUrl?: string
  pageUrlPath?: string
}

export default function ClientInfluencerEarningsCalculator({
  backUrl = '/free-tools',
  pageUrlPath = '/influencer-marketing-tools/earnings-calculator',
}: ClientInfluencerEarningsCalculatorProps) {
  const handleLearnMore = () => {
    window.open(
      'https://3bcbcue6q69w0u3g4p91bo0m3w.hop.clickbank.net/?&traffic_source=influ_earnings_calc_pg',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const pageUrl = `https://johncrestani.me${pageUrlPath}`
  const pageTitle = 'Predictable Income: AI-Powered Influencer Earnings Calculator'

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Global no-hover button styles */}
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
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={backUrl}
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
            aria-label="Back to Tools"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </motion.div>

        {/* Jon Benson-style Heading */}
        <motion.h1
          className="text-center font-extrabold leading-snug tracking-tight max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          aria-label="End Income Uncertainty Your AI Powered Influencer Predictor Heading"
          style={{ lineHeight: 1.25 }}
        >
          <span className="block text-4xl md:text-5xl">End Income Uncertainty</span>
          <span className="block mt-4 text-3xl md:text-4xl font-light text-pink-400">
            Your AI-Powered Influencer Predictor
          </span>
        </motion.h1>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            className="text-xl text-center text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Are you <strong>tired of fluctuating influencer income?</strong> Our free,{" "}
            <strong className="text-pink-400">AI-powered Influencer Predictor</strong> removes the guesswork,
            giving you the <strong>clarity and confidence</strong> to accurately forecast your potential earnings.
            Simply input your follower count, engagement rate, and monthly sponsored posts to instantly project your{" "}
            <strong>predictable monthly income.</strong> Gain control and make data-driven decisions for stable financial
            growth in your influencer career.
          </motion.p>

          {/* Core Calculator Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <InfluencerEarningsCalculator />
          </motion.div>

          {/* Share Buttons */}
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          {/* How to Use This Predictor Section */}
          <motion.div
            className="mt-12 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Gain Clarity Instantly: How to Use This Predictor
            </motion.h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {[
                {
                  text: 'Enter your total followers:',
                  desc: 'Input your total follower count across all relevant platforms. This is your reach.',
                },
                {
                  text: 'Input your engagement rate:',
                  desc: 'This is the average percentage of your followers who interact with your content (likes, comments, shares). If unsure, 3% is a solid starting point for a predictable estimate.',
                },
                {
                  text: 'Set your sponsored posts per month:',
                  desc: 'Enter the number of sponsored content pieces you plan to create monthly. This directly impacts your earning frequency.',
                },
                {
                  text: 'View your estimated predictable earnings:',
                  desc: 'The calculator will instantly display your potential monthly earnings, giving you a clear forecast for your influencer income. Use this insight for confident financial planning.',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <strong className="text-pink-500">{item.text}</strong> {item.desc}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Main CTA Section */}
          <motion.div
            className="mt-8 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Beyond Fluctuating Income: Secure Your Predictable AI Earnings
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              While influence is powerful, <strong>true financial freedom and stability</strong> come from generating{" "}
              <strong>multiple, predictable income streams.</strong> John Crestani’s AI Marketing Club (SAS Pro) provides the complete blueprint to confidently{" "}
              <strong>navigate the AI economy, eliminate guesswork,</strong> and <strong>future-proof your career.</strong> Discover how to:
            </motion.p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                'Convert your influence into <strong>high-ticket, predictable affiliate commissions</strong>.',
                'Automate content creation and promotion using AI for <strong>consistent engagement</strong>.',
                'Strategically identify and tap into <strong>lucrative, stable niches</strong> with AI insights.',
                'Build a <strong>long-term, predictable income asset</strong> that scales beyond single sponsored posts.',
                'Master the art of <strong>data-driven decision-making</strong> to maximize earnings with certainty.',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
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
            <p className="text-sm mt-2 text-gray-400 max-w-xl mx-auto text-center">
              Join the AI Marketing Club for $27, then upgrade to the full Super Affiliate System Pro for just $197 (original price $997).
            </p>
          </motion.div>
        </div>

        {/* Related Tools */}
        <RelatedTools
          currentToolUrl="/influencer-marketing-tools/earnings-calculator"
          category="influencer"
        />
      </div>
    </div>
  )
}

'use client';

import { motion } from 'framer-motion'
import AffiliateLinkCTROptimizer from '@/components/AffiliateLinkCTROptimizer'
import ShareButtons from '@/components/ShareButtons'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import RelatedTools from '@/components/RelatedTools'

export default function ClientLinkCTROptimizer({
  backUrl = '/free-tools',
  pageUrlPath = 'affiliate-marketing-tools/link-ctr-optimizer',
}: {
  backUrl?: string
  pageUrlPath?: string
}) {
  const handleLearnMore = () => {
    window.open(
      'https://13ca6r8tex6r7q1adnc-0y5o19.hop.clickbank.net/?&traffic_source=ctr_optimizer_tool',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const pageUrl = `https://johncrestani.me/${pageUrlPath}`
  const pageTitle = 'Boost Clicks End Wasted Effort... Free CTR Optimizer'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen bg-black text-white pt-32 pb-20"
    >
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
        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
          <Link
            href={backUrl}
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
        >
          Stop Losing Clicks Your AI-Powered Affiliate CTR Predictor
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center mb-8 text-gray-300"
          >
            Are you <strong>frustrated by low click-through rates</strong> and wasted effort? Eliminate the guesswork! Our free AI-powered Affiliate CTR Predictor helps you{' '}
            <strong>confidently forecast and optimize your link performance</strong>. Predict the impact of changes to your link placement, anchor text, and surrounding content to{' '}
            <strong>maximize engagement and boost your earnings with certainty</strong>.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AffiliateLinkCTROptimizer />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <ShareButtons url={pageUrl} title={pageTitle} />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Gain Clarity Instantly: How to Use This Optimizer
            </motion.h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <strong className="text-pink-500">Current CTR:</strong> Enter your typical click-through rate percentage for affiliate links. This is your baseline.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <strong className="text-pink-500">Link Placement:</strong> Adjust the slider to reflect how prominently your link is placed (e.g., above the fold, mid-content, sidebar). Higher scores mean better placement.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <strong className="text-pink-500">Anchor Text Relevance:</strong> Use the slider to rate how relevant and compelling your anchor text is to the linked content and your audience. Higher scores mean more relevant.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <strong className="text-pink-500">Surrounding Content Quality:</strong> Rate the overall quality and value of the content immediately surrounding your affiliate link. High-quality content builds trust and encourages clicks.
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Click &quot;Calculate Improved CTR&quot; to see your estimated potential click-through rate and predicted click increase.
              </motion.li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Beyond Low Clicks: Secure Your Predictable AI Income
            </motion.h2>
            <p className="text-gray-300 mb-4">
              Optimizing your CTR is key, but true <strong>financial freedom and stability</strong> come from a complete, proven blueprint to consistently generate high-ticket income. John Crestani&apos;s AI Marketing Club (SAS Pro) provides the step-by-step system to <strong>confidently navigate the AI economy, eliminate guesswork</strong>, and <strong>future-proof your career</strong>. Learn how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <strong>Confidently create high-converting offers</strong> that maximize clicks and sales with AI insights.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <strong>Systematically eliminate wasted ad spend</strong> by targeting the right audience with precision.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <strong>Automate your affiliate marketing</strong> to achieve predictable, scalable income streams.
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <strong>Future-proof your business</strong> against market shifts with adaptable AI strategies for long-term stability.
              </motion.li>
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
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <RelatedTools
            currentToolUrl="/affiliate-marketing-tools/link-ctr-optimizer"
            category="affiliate"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

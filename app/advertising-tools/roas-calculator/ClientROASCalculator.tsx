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

          {/* How to Use Section ... (rest of your component as per your last full code) */}
          {/* For brevity, please keep the rest unchanged */}
        </div>

        <RelatedTools currentToolUrl="/advertising-tools/roas-calculator" category="advertising" />
      </div>
    </div>
  )
}

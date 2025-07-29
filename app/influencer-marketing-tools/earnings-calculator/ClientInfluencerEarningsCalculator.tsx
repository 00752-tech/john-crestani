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
  // ✅ Added required props for ShareButtons component
  const shareUrl = 'https://johncrestani.me/influencer-marketing-tools/earnings-calculator'
  const shareTitle = 'Influencer Earnings Calculator'

  return (
    <div className="container mx-auto p-4">
      {/* Back link using ArrowLeft and Link */}
      <div className="mb-4 flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-pink-500" />
        <Link href={backUrl} className="text-pink-500 hover:underline">
          Back to Tools
        </Link>
      </div>

      {/* Main Calculator component */}
      <InfluencerEarningsCalculator />

      {/* Share buttons — ✅ passing props */}
      <div className="my-6">
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      {/* Related Tools with animated fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RelatedTools currentPath={pageUrlPath} />
      </motion.div>
    </div>
  )
}

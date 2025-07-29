/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import YouTubeEarningsCalculator from '@/components/YouTubeEarningsCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'
import { motion } from 'framer-motion'

interface ClientYouTubeCalculatorProps {
  backUrl?: string
  pageUrlPath?: string
}

export default function ClientYouTubeCalculator({
  backUrl = '/tools',
  pageUrlPath = '/tools/youtube-earning-calculator',
}: ClientYouTubeCalculatorProps) {
  const shareUrl = 'https://johncrestani.me/tools/youtube-earning-calculator'
  const shareTitle = 'YouTube Earnings Calculator'

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
      <YouTubeEarningsCalculator />

      {/* Share buttons — ✅ correct props passed */}
      <div className="my-6">
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      {/* Related Tools — ✅ correct props passed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RelatedTools
          currentToolUrl={pageUrlPath}
          category="youtube"
        />
      </motion.div>
    </div>
  )
}

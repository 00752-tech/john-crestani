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
  // ... (full component as provided in your previous confirmed code)
}

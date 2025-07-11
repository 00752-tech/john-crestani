'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AIClubBottomCTA() {
  const affiliateLink = "https://1b3d1r3up16k8ueaho3yfz1re1.hop.clickbank.net/?&traffic_source=bottom_cta"

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-500">
          Launch Your Faceless AI Business Today—For Just $27
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          Used by <strong>2,137 creators</strong> to earn daily commissions—
          no camera, no code, no burnout. Built on the same AI that powers viral brands.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-gray-300 mb-8 max-w-xl mx-auto">
          <li>✅ <strong>$27 Entry (Reg. $297)</strong></li>
          <li>✅ Free Website + Hosting + Domain</li>
          <li>✅ 7-Minute Action Checklist</li>
          <li>✅ Deepfake Video Assets + Ad Creatives</li>
          <li>✅ F.I.R. Formula for Viral AI Content</li>
          <li>✅ 60-Day Guarantee — No Risk</li>
        </ul>

        <Link
          href={affiliateLink}
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-4 px-8 rounded-full transition duration-300 shadow-lg"
        >
          YES! I WANT AI MARKETERS CLUB
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          Includes 7-Minute Checklist • Viral Content Generator • Affiliate Tracker
        </p>

        <Link
          href={affiliateLink + "#fir-breakdown"}
          className="mt-6 inline-block text-pink-400 hover:underline text-sm"
        >
          Explore the F.I.R. Formula → Faceless Income in Minutes
        </Link>
      </motion.div>
    </section>
  )
}

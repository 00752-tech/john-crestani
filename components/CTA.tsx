'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function CTA() {
  const handleEnrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.location.href = "https://1b3d1r3up16k8ueaho3yfz1re1.hop.clickbank.net/?&traffic_source=bottom_cta"
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Launch Your Faceless AI Brand—Today for $27
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl mb-8"
        >
          Join 2,000+ creators using AI tools to earn affiliate commissions—without showing their face or coding a thing.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto text-gray-800"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Limited Time Offer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-2xl mb-6"
          >
            Get Everything for Just $27!
          </motion.p>
          <ul className="text-left text-base text-gray-700 mb-6 space-y-2 max-w-md mx-auto">
            <li>✅ AI-Powered Content Prompts</li>
            <li>✅ 7-Minute Monetization Checklist</li>
            <li>✅ Free Website + Hosting + SSL</li>
            <li>✅ Deepfake Video Assets + Ad Templates</li>
            <li>✅ Access to $821/click affiliate offers</li>
          </ul>
          <motion.button
            onClick={handleEnrollClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            YES! I WANT AI MARKETERS CLUB
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4"
          >
            <p className="text-sm text-gray-600">
              60-Day Money-Back Guarantee • AI-Safe Certified • No Tech Required
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="https://1b3d1r3up16k8ueaho3yfz1re1.hop.clickbank.net/?&traffic_source=matrix_demo"
            className="text-white underline hover:text-pink-200 transition duration-300"
          >
            Explore the F.I.R. Formula: How Faceless AI Brands Monetize Fast →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ClientContactPage() {
  const emailAddress = 'info@johncrestani.me'

  const handleAffiliateClick = () => {
    window.open(
      'https://3bcbcue6q69w0u3g4p91bo0m3w.hop.clickbank.net/?&traffic_source=contact_page',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text leading-relaxed pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact John Crestani&apos;s AI Marketing Club
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your journey to <strong>predictable AI income</strong> is important to us. Whether you have questions about the <strong>AI Marketing Club</strong>, need support with our <strong>AI tools</strong>, or want to learn more about <strong>affiliate marketing strategies</strong>, we&apos;re here to help you move <strong>beyond fear</strong> and towards confident financial growth.
          </motion.p>

          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Mail className="w-16 h-16 text-pink-500 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch Via Email</h2>
            <p className="text-lg text-gray-300 mb-6">For all inquiries, please reach out to us at:</p>
            <a
              href={`mailto:${emailAddress}`}
              className="text-2xl font-semibold text-purple-400 hover:text-purple-300 transition duration-300 flex items-center gap-2"
              aria-label={`Email us at ${emailAddress}`}
            >
              <Mail className="w-6 h-6" />
              {emailAddress}
            </a>
            <p className="text-md text-gray-400 mt-4">
              We aim to respond to all inquiries within 1-2 business days.
            </p>
          </motion.div>

          {/* Before You Contact */}
          <motion.div
            className="mt-12 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Before You Contact: Quick Answers &amp; Resources</h2>
            <p className="text-gray-300 mb-4">
              Many common questions about our programs, tools, and affiliate marketing are already answered in our comprehensive resources. We encourage you to explore these options for immediate answers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 text-left">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/free-tools" className="text-pink-500 hover:underline">
                  Our Free AI Tools
                </Link>{' '}
                (calculators and optimization utilities)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/privacy-policy" className="text-pink-500 hover:underline">
                  Privacy Policy
                </Link>{' '}
                (data protection details)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/terms-of-service" className="text-pink-500 hover:underline">
                  Terms of Service
                </Link>{' '}
                (legal terms and conditions)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/affiliate-disclosure" className="text-pink-500 hover:underline">
                  Affiliate Disclosure
                </Link>{' '}
                (transparency about affiliate relationships)
              </motion.li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Ready to Master Predictable AI Income?</h2>
            <p className="text-gray-300 mb-4">
              If you want to remove financial uncertainty and truly transform your online income with AI strategies, the AI Marketing Club is your next step. Discover how to build a highly profitable and predictable online business.
            </p>
            <button
              onClick={handleAffiliateClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock Your Predictable AI Income Blueprint Now!"
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
      </div>
    </div>
  )
}

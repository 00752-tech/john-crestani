/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ROASCalculator from '@/components/ROASCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'
import { motion } from 'framer-motion'

export default function ClientROASCalculator() {
  const handleLearnMore = () => {
    window.location.href = '/api/sale'
  }

  const pageUrl = 'https://example.com/advertising-tools/roas-calculator'; // Replace with your actual URL
  const pageTitle = 'ROAS Calculator | Super Affiliate System Pro';

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/free-tools" 
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
        >
          Return on Ad Spend (ROAS) Calculator
        </motion.h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center mb-8 text-gray-300"
          >
            Use this calculator to measure the effectiveness of your advertising campaigns. Input your ad spend and revenue to see your ROAS.
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
              className="text-2xl font-semibold mb-4"
            >
              How to Use This Calculator
            </motion.h2>
            <motion.ul 
              className="space-y-4 text-gray-300"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { label: 'Ad Spend', text: `Enter the total amount you've spent on your advertising campaign.` },
                { label: 'Revenue', text: 'Input the total revenue generated from the campaign.' },
                { label: 'Interpreting ROAS', text: `A ROAS of 1 means you're breaking even. Anything above 1 indicates profit, while below 1 means you're losing money on your ads.` }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  <strong className="text-pink-500">{item.label}:</strong> {item.text}
                </motion.li>
              ))}
            </motion.ul>
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
              className="text-2xl font-semibold mb-4"
            >
              Maximize Your ROAS with John Crestani
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-gray-300 mb-4"
            >
              {`Improving your ROAS is crucial for profitable affiliate marketing. John Crestani's Super Affiliate System Pro teaches you how to:`}
            </motion.p>
            <motion.ul 
              className="list-disc list-inside space-y-2 text-gray-300 mb-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                'Create high-converting ad campaigns',
                'Target the right audience for maximum ROI',
                'Optimize your ad spend across different platforms',
                'Scale your campaigns profitably'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn How to Boost Your ROAS
            </motion.button>
          </motion.div>
        </div>

        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a good ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good ROAS depends on your industry and business model, but generally, a ROAS of 4:1 ($4 in revenue for every $1 spent on ads) is considered good. However, some businesses may require a higher ROAS to be profitable due to other costs."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve my ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To improve your ROAS, focus on targeting the right audience, creating compelling ad copy and creative, optimizing your landing pages, and continually testing and refining your campaigns. John Crestani's Super Affiliate System Pro provides in-depth strategies for maximizing your ROAS."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I calculate my ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's best to calculate your ROAS regularly, ideally weekly or monthly, depending on your ad spend and campaign duration. This allows you to quickly identify and adjust underperforming campaigns, and scale successful ones."
                }
              }
            ]
          }}
        />
        <RelatedTools currentToolUrl="/advertising-tools/roas-calculator" category="advertising" />
      </div>
    </div>
  )
}


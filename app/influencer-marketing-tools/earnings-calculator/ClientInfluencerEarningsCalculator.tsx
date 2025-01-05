/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import InfluencerEarningsCalculator from '@/components/InfluencerEarningsCalculator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import RelatedTools from '@/components/RelatedTools'
import { motion } from 'framer-motion'

export default function ClientInfluencerEarningsCalculator() {
  const handleLearnMore = () => {
    window.location.href = '/api/sale'
  }
  const pageUrl = '/influencer-marketing-tools/earnings-calculator';
  const pageTitle = 'Influencer Earnings Calculator | Super Affiliate System Pro';

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/free-tools" 
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Influencer Earnings Calculator
        </motion.h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p 
            className="text-xl text-center mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Estimate your potential earnings as an influencer based on your follower count, engagement rate, and the number of sponsored posts you create each month.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <InfluencerEarningsCalculator />
          </motion.div>

          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          <motion.div 
            className="mt-12 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How to Use This Calculator
            </motion.h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {[
                { text: "Enter your number of followers:", desc: "Input your total follower count across all platforms." },
                { text: "Input your engagement rate:", desc: "This is the percentage of your followers who interact with your posts. If you're unsure, 3% is a good starting point." },
                { text: "Set your sponsored posts per month:", desc: "Enter the number of sponsored posts you plan to create each month." },
                { text: "View your estimated earnings:", desc: "The calculator will display your potential monthly earnings based on the information provided." }
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

          <motion.div 
            className="mt-8 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Maximize Your Influence with John Crestani
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {`While being an influencer can be lucrative, combining it with affiliate marketing can significantly boost your earnings. John Crestani's Super Affiliate System Pro teaches you how to:`}
            </motion.p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Leverage your influence to promote high-converting affiliate offers",
                "Create content that engages your audience and drives sales",
                "Negotiate better deals with brands and affiliate programs",
                "Scale your online presence and income"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <button 
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn How to Boost Your Influence and Income
            </button>
          </motion.div>
        </div>

        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Influencer Earnings Calculator",
            "applicationCategory": "FinanceApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "operatingSystem": "Any",
            "description": "Estimate your potential earnings as an influencer based on your follower count, engagement rate, and sponsored post frequency.",
            "creator": {
              "@type": "Person",
              "name": "John Crestani"
            },
            "featureList": [
              "Calculate potential influencer earnings",
              "Adjust for follower count",
              "Consider engagement rate",
              "Factor in sponsored post frequency"
            ],
            "screenshot": "https://johncrestani.me/images/influencer-earnings-calculator-screenshot.jpg",
            "softwareHelp": {
              "@type": "CreativeWork",
              "name": "How to Use This Calculator",
              "text": "1. Enter your number of followers. 2. Input your engagement rate. 3. Set your sponsored posts per month. 4. View your estimated earnings."
            }
          }}
        />

        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate is the influencer earnings calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This calculator provides a rough estimate based on industry averages. Actual earnings can vary widely depending on factors such as niche, audience quality, platform, and individual brand deals."
                }
              },
              {
                "@type": "Question",
                "name": "How can I increase my earnings as an influencer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To increase your earnings, focus on growing your follower count, improving engagement rates, creating high-quality content, and diversifying your income streams. Consider combining influencer marketing with affiliate marketing for potentially higher earnings."
                }
              },
              {
                "@type": "Question",
                "name": "What's a good engagement rate for influencers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A good engagement rate can vary by platform and niche, but generally, rates between 1% to 5% are considered good, while anything above 5% is excellent. Micro-influencers often have higher engagement rates compared to accounts with millions of followers."
                }
              }
            ]
          }}
        />
        <RelatedTools currentToolUrl="/influencer-marketing-tools/earnings-calculator" category="influencer" />
      </div>
    </div>
  )
}


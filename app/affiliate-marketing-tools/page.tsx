/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link'
import Head from 'next/head'
import { Calculator, TrendingUp, DollarSign, Users, Youtube, Maximize2 } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import { motion } from 'framer-motion'

export default function AffiliateMarketingToolsPage() {
  const tools = [
    {
      name: "AI-Powered Affiliate Earnings Calculator",
      description: "Estimate your potential affiliate marketing earnings based on traffic, conversion rates, and commission values.",
      url: "/affiliate-marketing-tools/earnings-calculator",
      icon: Calculator
    },
    {
      name: "AI-Powered Investment Calculator",
      description: "Plan your financial future by calculating potential returns on your investments over time.",
      url: "/financial-tools/investment-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Dropshipping Profit Calculator",
      description: "Calculate potential profits for your dropshipping business by analyzing costs, pricing, and order volume.",
      url: "/ecommerce-tools/dropshipping-profit-calculator",
      icon: DollarSign
    },
    {
      name: "AI-Powered ROAS Calculator",
      description: "Calculate your Return on Ad Spend to measure and improve the effectiveness of your advertising campaigns.",
      url: "/advertising-tools/roas-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Influencer Earnings Calculator",
      description: "Estimate your potential earnings as an influencer based on your follower count and engagement rate.",
      url: "/influencer-marketing-tools/earnings-calculator",
      icon: Users
    },
    {
      name: "AI-Powered YouTube Earnings Calculator",
      description: "Calculate potential YouTube AdSense earnings based on views, CTR, and CPM rates.",
      url: "/content-creation-tools/youtube-earnings-calculator",
      icon: Youtube
    },
    {
      name: "AI-Powered Niche Profitability Calculator",
      description: "Estimate the potential profitability of different niches for your affiliate marketing campaigns.",
      url: "/affiliate-marketing-tools/niche-profitability-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Affiliate Link CTR Optimizer",
      description: "Optimize your affiliate link click-through rates based on placement, anchor text, and content quality.",
      url: "/affiliate-marketing-tools/link-ctr-optimizer",
      icon: Maximize2
    },
  ]

  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools'
  const pageTitle = 'Free AI-powered Affiliate Tools to Scale Faster | JohnCrestani.me'
  const pageDesc = 'Access AI-powered calculators built for affiliates: earnings, niche, CTR. Curated by JohnCrestani.me to help you earn more, optimize faster, and scale smarter.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>

      {/* 🔗 Top-level schema: CollectionPage */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": pageTitle,
          "url": pageUrl,
          "description": pageDesc,
          "about": [
            {
              "@type": "Thing",
              "name": "Affiliate Marketing"
            },
            {
              "@type": "Person",
              "name": "John Crestani",
              "sameAs": [
                "https://linkedin.com/in/johncrestani",
                "https://instagram.com/johncrestani",
                "https://twitter.com/johncrestani"
              ]
            }
          ],
          "creator": {
            "@type": "Person",
            "name": "John Crestani"
          },
          "mainEntity": tools.map((tool) => ({
            "@type": "WebPage",
            "name": tool.name,
            "url": `https://johncrestani.me${tool.url}`
          })),
          "datePublished": "2025-07-08",
          "dateModified": "2025-07-08"
        }}
      />

      {/* 🔗 Secondary schema: ItemList of calculators */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": tools.map((tool, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": tool.name,
              "description": tool.description,
              "url": `https://johncrestani.me${tool.url}`,
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          }))
        }}
      />

      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          >
            AI-Powered Affiliate Marketing Tools & Calculators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Boost your affiliate marketing success with our suite of free AI-powered tools and calculators. Estimate earnings, optimize campaigns, and make data-driven decisions.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {tools.map((tool) => (
              <motion.div key={tool.name} variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }} className="h-full">
                <Link
                  href={tool.url}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors group flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <tool.icon className="w-8 h-8 text-pink-500 mr-3 flex-shrink-0" />
                    <h2 className="text-2xl font-semibold group-hover:text-pink-500 transition-colors">
                      {tool.name}
                    </h2>
                  </div>
                  <p className="text-gray-400 flex-grow">
                    {tool.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <ShareButtons url={pageUrl} title={pageTitle} />
          </motion.div>
        </div>
      </div>
    </>
  )
}

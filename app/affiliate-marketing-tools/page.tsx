/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link'
import Head from 'next/head'
import { Calculator, TrendingUp, DollarSign, Users, Youtube, Maximize2 } from 'lucide-react'
import { JsonLd } from 'react-schemaorg'
import ShareButtons from '@/components/ShareButtons'
import { motion } from 'framer-motion'
import React from 'react'

export default function AffiliateMarketingToolsPage() {
  // All "Beyond Fear" optimized tool descriptions with <strong>
  const tools = [
    {
      name: "AI-Powered Affiliate Earnings Calculator",
      description: (
        <>
          End the earning uncertainty. Predict your <strong>stable affiliate income</strong> by effortlessly calculating potential earnings based on traffic, conversion rates, and commission values. <strong>Gain clear financial foresight</strong>.
        </>
      ),
      schemaDescription: "End the earning uncertainty. Predict your stable affiliate income by effortlessly calculating potential earnings based on traffic, conversion rates, and commission values. Gain clear financial foresight.",
      url: "/affiliate-marketing-tools/earnings-calculator",
      icon: Calculator
    },
    {
      name: "AI-Powered Investment Calculator",
      description: (
        <>
          Take <strong>confident control</strong> of your financial future. Predict potential returns on your investments over time, <strong>reducing risk and building certainty</strong> with AI-driven insights.
        </>
      ),
      schemaDescription: "Take confident control of your financial future. Predict potential returns on your investments over time, reducing risk and building certainty with AI-driven insights.",
      url: "/financial-tools/investment-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Dropshipping Profit Calculator",
      description: (
        <>
          Eliminate profit guesswork. Confidently calculate your dropshipping potential by analyzing costs, pricing, and order volume. <strong>Ensure predictable profitability</strong> and <strong>avoid costly surprises</strong>.
        </>
      ),
      schemaDescription: "Eliminate profit guesswork. Confidently calculate your dropshipping potential by analyzing costs, pricing, and order volume. Ensure predictable profitability and avoid costly surprises.",
      url: "/ecommerce-tools/dropshipping-profit-calculator",
      icon: DollarSign
    },
    {
      name: "AI-Powered ROAS Calculator",
      description: (
        <>
          Stop wasting ad spend. Precisely calculate your Return on Ad Spend (ROAS) to <strong>confidently optimize campaigns</strong>, ensuring <strong>predictable profits</strong> and maximizing your advertising budget.
        </>
      ),
      schemaDescription: "Stop wasting ad spend. Precisely calculate your Return on Ad Spend (ROAS) to confidently optimize campaigns, ensuring predictable profits and maximizing your advertising budget.",
      url: "/advertising-tools/roas-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Influencer Earnings Calculator",
      description: (
        <>
          Remove the guesswork from influencer income. Predict your potential earnings with confidence, analyzing follower count and engagement to <strong>plan your growth predictably</strong>.
        </>
      ),
      schemaDescription: "Remove the guesswork from influencer income. Predict your potential earnings with confidence, analyzing follower count and engagement to plan your growth predictably.",
      url: "/influencer-marketing-tools/earnings-calculator",
      icon: Users
    },
    {
      name: "AI-Powered YouTube Earnings Calculator",
      description: (
        <>
          End the income guessing game. Predict your YouTube AdSense earnings to <strong>gain control</strong> and <strong>confidently plan your channel&apos;s monetization strategy</strong>.
        </>
      ),
      schemaDescription: "End the income guessing game. Predict your YouTube AdSense earnings to gain control and confidently plan your channel's monetization strategy.",
      url: "/content-creation-tools/youtube-earnings-calculator",
      icon: Youtube
    },
    {
      name: "AI-Powered Niche Profitability Calculator",
      description: (
        <>
          Eliminate market uncertainty. Estimate the <strong>true profit potential</strong> of niches for your affiliate campaigns, allowing you to <strong>choose with confidence</strong> and avoid costly ventures.
        </>
      ),
      schemaDescription: "Eliminate market uncertainty. Estimate the true profit potential of niches for your affiliate campaigns, allowing you to choose with confidence and avoid costly ventures.",
      url: "/affiliate-marketing-tools/niche-profitability-calculator",
      icon: TrendingUp
    },
    {
      name: "AI-Powered Affiliate Link CTR Optimizer",
      description: (
        <>
          Boost your clicks, boost your confidence. Optimize affiliate link CTR based on placement, anchor text, and content quality to <strong>maximize earnings predictably</strong>.
        </>
      ),
      schemaDescription: "Boost your clicks, boost your confidence. Optimize affiliate link CTR based on placement, anchor text, and content quality to maximize earnings predictably.",
      url: "/affiliate-marketing-tools/link-ctr-optimizer",
      icon: Maximize2
    },
  ];

  const pageUrl = 'https://johncrestani.me/affiliate-marketing-tools'
  const pageTitle = 'Free AI-powered Affiliate Tools to Scale Faster | JohnCrestani.me'
  const pageDesc = 'Access AI-powered calculators built for affiliates: earnings, niche, CTR. Curated by JohnCrestani.me to help you earn more, optimize faster, and scale smarter.'

  // Affiliate CTA button handler: opens new affiliate link in new tab, never exposes URL
  const ctaAffiliateLink = "https://13ca6r8tex6r7q1adnc-0y5o19.hop.clickbank.net/?&traffic_source=aff_mkt_tools_pg"
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      ctaAffiliateLink,
      "_blank",
      "noopener,noreferrer"
    );
  };

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
              "description": tool.schemaDescription,
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
        {/* No hover effect for CTA button */}
        <style jsx global>{`
          .no-hover,
          .no-hover:hover,
          .no-hover:active,
          .no-hover:focus,
          .no-hover:visited {
            background: linear-gradient(to right, #ec4899, #a21caf) !important;
            color: #fff !important;
            outline: none;
            box-shadow: none !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: none !important;
            filter: none !important;
            opacity: 1 !important; /* Ensure opacity is full */
          }
        `}</style>
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          >
            Unlock Predictable Profits: Your AI-Powered Affiliate &amp; E-commerce Toolkit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Tired of guesswork in your online business? Our free, <strong>AI-powered tools and calculators</strong> are your blueprint to <strong>eliminate uncertainty</strong> and <strong>seize control</strong> of your affiliate marketing and e-commerce ventures. Accurately predict earnings, effortlessly optimize campaigns, and make <strong>confident, data-driven decisions</strong> that lead to <strong>consistent, reliable income</strong>.
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

          {/* Hub-level CTA to main offer, custom affiliate link, no hover effect, homepage button styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Ready to Stop Guessing and Start Earning Consistently?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              These tools give you foresight, but the real power comes from a proven system. Get instant access to John Crestani&apos;s AI Marketing Club for just $27, and unlock the exclusive opportunity to upgrade to **Super Affiliate System Pro** for only $197 (original price: $997). That&apos;s a massive **$800 saving** on the ultimate blueprint to future-proof your income and build genuine financial independence in the AI economy!
            </p>
            <button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-10 rounded-full text-xl font-bold mt-2 select-none"
              tabIndex={0}
              type="button"
              aria-label="Unlock My AI Income Blueprint Now!"
              style={{
                boxShadow: "none",
                textDecoration: "none",
                outline: "none",
                filter: "none",
                cursor: "pointer"
              }}
            >
              Unlock My AI Income Blueprint Now!
            </button>
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

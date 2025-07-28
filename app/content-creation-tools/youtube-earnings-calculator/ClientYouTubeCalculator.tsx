/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import YouTubeCalculator from "@/components/YouTubeCalculator";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "react-schemaorg";
import RelatedTools from "@/components/RelatedTools";
import React from "react";

export default function ClientYouTubeCalculator({
  backUrl = "/free-tools",
  pageUrlPath = "/content-creation-tools/youtube-earnings-calculator",
}: {
  backUrl?: string;
  pageUrlPath?: string;
}) {
  const ctaAffiliateLink =
    "https://4147arbzmafm0s762q695w2v7q.hop.clickbank.net/?&traffic_source=youtube_earnings_calc";

  const pageUrl = `https://johncrestani.me${pageUrlPath}`;
  const pageTitle = "Predict Your YouTube Income: Free AdSense Calculator";

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaAffiliateLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
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
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href={backUrl}
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
          aria-label="Back to Tools"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          aria-label="Reclaim Your Financial Future Free YouTube AdSense Earnings Calculator"
          style={{ lineHeight: 1.25 }}
        >
          <span>Reclaim Your Financial Future</span>
          <br />
          <span>Free YouTube AdSense Earnings Calculator</span>
        </motion.h1>

        {/* Introductory Paragraph */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Are you tired of guessing your YouTube income potential? Our Free YouTube AdSense Earnings Calculator is designed to{" "}
            <strong>remove uncertainty</strong> and give you <strong>predictable insights</strong> into your channel’s monetization. Simply input your estimated views, CTR, and CPM Rate to instantly project your Monthly and Yearly Earnings. <strong>Gain clarity and seize control</strong> of your YouTube financial strategy today.
          </p>

          {/* YouTube Calculator Component */}
          <YouTubeCalculator />

          {/* Social Share Buttons */}
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          {/* How To Use Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-4"
            >
              Effortlessly Predict Your Income: How to Use This Calculator
            </motion.h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {[
                {
                  text: "Average Views per Video",
                  desc: "Input the typical number of views each of your YouTube videos receives.",
                },
                {
                  text: "Click-Through Rate (CTR)",
                  desc: "This is the percentage of viewers who click on ads shown on your videos. A common range is 2% to 10%.",
                },
                {
                  text: "CPM Rate",
                  desc: "Cost Per Mille (thousand views) is what advertisers pay per 1,000 ad impressions. This varies greatly by niche and audience location, typically ranging from $1 to $10+.",
                },
                {
                  text: "Videos per Month",
                  desc: "Enter the average number of new videos you plan to publish each month.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <strong className="text-pink-500">{item.text}:</strong> {item.desc}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Maximize Income Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-4"
            >
              Beyond AdSense: Secure Your Future with Predictable AI Income Streams
            </motion.h2>
            <p className="text-gray-300 mb-4">
              AdSense is a start, but true financial resilience comes from diversifying. John Crestani&apos;s AI Marketing Club (SAS Pro) offers the blueprint to{" "}
              <strong>confidently secure reliable online income</strong> and <strong>regain control</strong> of your financial destiny. Discover how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Monetize your channel with <strong>affiliate marketing</strong>, creating <strong>diversified, predictable income streams</strong>.",
                "Create <strong>high-converting video content effortlessly with AI tools</strong>, ensuring <strong>consistent engagement</strong>.",
                "Build and engage your audience, transforming viewers into <strong>loyal, long-term income sources</strong>.",
                "<strong>Scale your online presence</strong> across platforms, securing your <strong>professional relevance and future</strong>.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
            {/* CTA BUTTON */}
            <button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold mt-2 transition-none select-none"
              tabIndex={0}
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              style={{
                boxShadow: "none",
                textDecoration: "none",
                outline: "none",
                filter: "none",
                cursor: "pointer",
              }}
              type="button"
            >
              Unlock My Predictable AI Income Blueprint Now!
            </button>
            <p className="text-sm text-gray-400 mt-4 text-center max-w-xl mx-auto">
              Join the AI Marketing Club for $27, then upgrade to the full Super Affiliate System Pro for just $197 (original price $997) with an $800 saving!
            </p>
          </motion.div>
        </div>

        {/* Structured Data */}
        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "YouTube AdSense Earnings Calculator",
            applicationCategory: "FinanceApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            operatingSystem: "Any",
            description:
              "Empower yourself to predict YouTube earnings. Our free calculator removes uncertainty, helping you confidently forecast monthly and yearly income with ease.",
            creator: {
              "@type": "Person",
              name: "John Crestani",
            },
            featureList: [
              "Calculate potential YouTube earnings",
              "Estimate monthly and yearly revenue",
              "Factor in video frequency",
              "Consider CTR and CPM rates",
            ],
            softwareHelp: {
              "@type": "CreativeWork",
              name: "How to Use This Calculator",
              text: "1. Enter average views per video. 2. Input your CTR percentage. 3. Set your CPM rate. 4. Specify videos per month.",
            },
          }}
        />

        {/* FAQ Schema */}
        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate is the YouTube earnings calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This calculator provides estimates based on average YouTube AdSense rates. Actual earnings can vary based on factors such as niche, audience location, video length, and seasonality.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good CTR for YouTube ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A good CTR for YouTube ads typically ranges from 2% to 10%. However, this can vary significantly based on your content niche, audience engagement, and ad placement.",
                },
              },
              {
                "@type": "Question",
                name: "How can I increase my YouTube earnings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To increase your YouTube earnings and secure a predictable income, focus on creating engaging, AI-optimized content, understanding your audience demographics, and crucially, diversifying your income streams through high-ticket affiliate marketing and advanced monetization strategies. John Crestani's AI Marketing Club (SAS Pro) provides the complete blueprint to master these methods and achieve consistent financial growth.",
                },
              },
            ],
          }}
        />

        {/* Related Tools */}
        <RelatedTools
          currentToolUrl="/content-creation-tools/youtube-earnings-calculator"
          category="content"
        />
      </div>
    </div>
  );
}

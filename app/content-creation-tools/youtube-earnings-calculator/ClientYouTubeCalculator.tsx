/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import YouTubeCalculator from "@/components/YouTubeCalculator";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "react-schemaorg";
import RelatedTools from "@/components/RelatedTools";

interface ClientYouTubeCalculatorProps {
  backUrl?: string;
  pageUrlPath?: string;
}

export default function ClientYouTubeCalculator({
  backUrl = "/tools",
  pageUrlPath = "/content-creation-tools/youtube-earnings-calculator",
}: ClientYouTubeCalculatorProps) {
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
      {/* Global button style to remove hover transitions and preserve gradient */}
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
        .gradient-text {
          background: linear-gradient(to right, #ec4899, #a21caf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Back Link with smooth fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={backUrl}
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 font-semibold"
            aria-label="Back to Tools"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </motion.div>

        {/* Main Heading with slide & fade animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-tight pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Reclaim Your Financial Future Free YouTube AdSense Earnings Calculator"
        >
          <span>Reclaim Your Financial Future</span>
          <br />
          <span>Free YouTube AdSense Earnings Calculator</span>
        </motion.h1>

        {/* Intro paragraph */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            className="text-xl text-center mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Are you tired of guessing your YouTube income potential? Our Free YouTube AdSense Earnings Calculator is designed to{" "}
            <strong>remove uncertainty</strong> and give you <strong>predictable insights</strong> into your channel’s monetization. Simply input your estimated views, CTR, and CPM Rate to instantly project your Monthly and Yearly Earnings. <strong>Gain clarity and seize control</strong> of your YouTube financial strategy today.
          </motion.p>

          {/* Embedded YouTube Calculator Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <YouTubeCalculator />
          </motion.div>

          {/* Share Buttons */}
          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

          {/* How To Use Section */}
          <motion.section
            className="mt-12 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
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
              Effortlessly Predict Your Income: How to Use This Calculator
            </motion.h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              {[
                {
                  text: "Average Views per Video:",
                  desc: "Input the typical number of views each of your YouTube videos receives.",
                },
                {
                  text: "Click-Through Rate (CTR):",
                  desc: "This is the percentage of viewers who click on ads shown on your videos. A common range is 2% to 10%.",
                },
                {
                  text: "CPM Rate:",
                  desc: "Cost Per Mille (thousand views) is what advertisers pay per 1,000 ad impressions, typically ranging from $1 to $10+.",
                },
                {
                  text: "Videos per Month:",
                  desc: "Enter the average number of new videos you plan to publish each month.",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <strong className="text-pink-500">{item.text}</strong> {item.desc}
                </motion.li>
              ))}
            </ol>
          </motion.section>

          {/* Maximize Income Section */}
          <motion.section
            className="mt-8 bg-gray-900 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
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
              Beyond AdSense: Secure Your Future with Predictable AI Income Streams
            </motion.h2>
            <p className="text-gray-300 mb-4">
              AdSense is a start, but true financial resilience comes from diversifying. John Crestani’s AI Marketing Club (SAS Pro) offers the blueprint to{" "}
              <strong>confidently secure reliable online income</strong> and <strong>regain control</strong> of your financial destiny. Discover how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Monetize your channel with <strong>affiliate marketing</strong>, creating <strong>diversified, predictable income streams</strong>.",
                "Create <strong>high-converting video content effortlessly with AI tools</strong>, ensuring <strong>consistent engagement</strong>.",
                "Build and engage your audience, transforming viewers into <strong>loyal, long-term income sources</strong>.",
                "<strong>Scale your online presence</strong> across platforms, securing your <strong>professional relevance and future</strong>.",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
            <button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-none select-none"
              type="button"
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              style={{
                boxShadow: "none",
                textDecoration: "none",
                outline: "none",
                filter: "none",
                cursor: "pointer",
              }}
            >
              Unlock My Predictable AI Income Blueprint Now!
            </button>
            <p className="text-sm text-gray-400 mt-4 text-center max-w-xl mx-auto">
              Join the AI Marketing Club for $27, then upgrade to the full Super Affiliate System Pro for just $197 (original price $997) with an $800 saving!
            </p>
          </motion.section>
        </div>

        {/* JSON-LD Structured Data */}
        <JsonLd<any>
          item={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "YouTube AdSense Earnings Calculator",
            applicationCategory: "FinanceApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            operatingSystem: "Any",
            description:
              "Empower yourself to predict YouTube earnings. Our free calculator removes uncertainty, helping you confidently forecast monthly and yearly income with ease.",
            creator: { "@type": "Person", name: "John Crestani" },
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
                  text: "To increase your YouTube earnings and secure a predictable income, focus on creating engaging, AI-optimized content, understanding your audience demographics, and diversifying income streams through high-ticket affiliate marketing and monetization strategies.",
                },
              },
            ],
          }}
        />

        {/* Related Tools */}
        <RelatedTools currentToolUrl="/content-creation-tools/youtube-earnings-calculator" category="content" />
      </div>
    </div>
  );
}

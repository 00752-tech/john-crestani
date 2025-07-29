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

export default function ClientYouTubeCalculator({
  backUrl = "/free-tools",
  pageUrlPath = "/content-creation-tools/youtube-earnings-calculator",
}: {
  backUrl?: string;
  pageUrlPath?: string;
}) {
  // Affiliate link for CTA button
  const ctaAffiliateLink =
    "https://4147arbzmafm0s762q695w2v7q.hop.clickbank.net/?&traffic_source=youtube_earnings_calc";

  // Page URL and title for sharing
  const pageUrl = `https://johncrestani.me${pageUrlPath}`;
  const pageTitle = "Predict Your YouTube Income: Free AdSense Calculator";

  // Open affiliate link safely
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaAffiliateLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Global button style overrides */}
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
        .gradient-text {
          background: linear-gradient(to right, #ec4899, #a21caf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Back Link with icon */}
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

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Reclaim Your Financial Future Free YouTube AdSense Earnings Calculator"
        >
          Reclaim Your Financial Future: Free YouTube AdSense Earnings Calculator
        </motion.h1>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Are you tired of guessing your YouTube income potential? Our Free YouTube AdSense Earnings Calculator is designed to{" "}
            <strong>remove uncertainty</strong> and give you <strong>predictable insights</strong> into your channel&apos;s monetization. Simply input your estimated views, CTR, and CPM Rate to instantly project your Monthly and Yearly Earnings. <strong>Gain clarity and seize control</strong> of your YouTube financial strategy today.
          </p>

          {/* YouTubeCalculator Component */}
          <YouTubeCalculator />

          {/* Share Buttons with required props */}
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
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {[
                "Average Views per Video:",
                "Click-Through Rate (CTR):",
                "CPM Rate:",
                "Videos per Month:",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <strong className="text-pink-500">{item}</strong>{" "}
                  {/* Additional description can be added if needed */}
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
              AdSense is a start, but true financial resilience comes from diversifying. John Crestani&apos;s AI Marketing Club (SAS Pro) offers the blueprint to{" "}
              <strong>confidently secure reliable online income</strong> and <strong>regain control</strong> of your financial destiny. Discover how to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Monetize your channel with affiliate marketing, creating diversified, predictable income streams.",
                "Create high-converting video content effortlessly with AI tools, ensuring consistent engagement.",
                "Build and engage your audience, transforming viewers into loyal, long-term income sources.",
                "Scale your online presence across platforms, securing your professional relevance and future.",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold mt-2 transition-none select-none"
              aria-label="Unlock My Predictable AI Income Blueprint Now!"
              type="button"
              style={{ boxShadow: "none", textDecoration: "none", outline: "none", filter: "none", cursor: "pointer" }}
            >
              Unlock My Predictable AI Income Blueprint Now!
            </button>
          </motion.section>
        </div>

        {/* Schema Markups (no schema-dts typing) */}
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
                  text: "To increase your YouTube earnings, focus on creating engaging content, optimizing your video titles and thumbnails, understanding your audience demographics, and diversifying your income streams through methods like affiliate marketing and sponsored content.",
                },
              },
            ],
          }}
        />

        {/* Related Tools with correct prop name */}
        <RelatedTools currentToolUrl="/content-creation-tools/youtube-earnings-calculator" category="content" />
      </div>
    </div>
  );
}

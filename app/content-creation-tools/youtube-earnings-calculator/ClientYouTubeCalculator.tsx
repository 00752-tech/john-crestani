/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
  const handleLearnMore = () => {
    window.location.href = "/api/sale";
  };

  const pageUrl = `https://johncrestani.me${pageUrlPath}`;
  const pageTitle = "Calculate Your YouTube Earnings with Our Free Calculator";

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          href={backUrl}
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
        >
          YouTube AdSense Earnings Calculator
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-center mb-8 text-gray-300">
            Need to estimate your potential YouTube earnings? This free YouTube AdSense Earnings Calculator is designed to help you quickly understand your possible income [user prompt, 1]. By simply entering your estimated views per video, click-through rate (CTR), and CPM Rate, the tool provides an estimate of your Monthly and Yearly Earnings from AdSense. Use this tool to get immediate insight into your YouTube monetization potential.
          </p>

          <YouTubeCalculator />

          <div className="mt-8">
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>

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
              How to Use This Calculator
            </motion.h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {[
                "Average Views per Video",
                "Click-Through Rate (CTR)",
                "CPM Rate",
                "Videos per Month",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <strong className="text-pink-500">{item}:</strong>
                  {/* ... rest of the li content ... */}
                </motion.li>
              ))}
            </ol>
          </motion.div>

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
              Maximize Your YouTube Income
            </motion.h2>
            <p className="text-gray-300 mb-4">
              {`   While AdSense is great, successful YouTubers diversify their income streams. John Crestani's Super Affiliate System Pro teaches you how to:`}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Monetize your channel with affiliate marketing",
                "Create high-converting video content",
                "Build and engage your audience",
                "Scale your online presence across platforms",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <button
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn Advanced YouTube Monetization Strategies
            </button>
          </motion.div>
        </div>

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
              "Calculate your potential YouTube earnings based on views, CTR, and CPM rates.",
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
        <RelatedTools
          currentToolUrl="/content-creation-tools/youtube-earnings-calculator"
          category="content"
        />
      </div>
    </div>
  );
}

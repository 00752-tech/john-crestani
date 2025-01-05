/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import AffiliateLinkCTROptimizer from "@/components/AffiliateLinkCTROptimizer";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "react-schemaorg";
import RelatedTools from "@/components/RelatedTools";

export default function ClientLinkCTROptimizer() {
  const handleLearnMore = () => {
    window.location.href = "/api/sale";
  };

  const pageUrl = "https://johncrestani.me/tools/affiliate-link-ctr-optimizer";
  const pageTitle = "Optimize Your Affiliate Link CTR | Free Calculator";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen bg-black text-white pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
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
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text leading-relaxed pb-4"
        >
          Affiliate Link CTR Optimizer
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center mb-8 text-gray-300"
          >
            Estimate how changes in your affiliate link strategy could impact
            your click-through rates. Optimize your link placement, anchor text,
            and surrounding content for better performance.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AffiliateLinkCTROptimizer />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <ShareButtons url={pageUrl} title={pageTitle} />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              How to Use This Optimizer
            </motion.h2>
            <ul className="space-y-4 text-gray-300">
              {[
                "Current CTR",
                "Link Placement",
                "Anchor Text Relevance",
                "Surrounding Content Quality",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <strong className="text-pink-500">{item}:</strong>
                  {/* ... existing content ... */}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Master Affiliate Link Optimization with John Crestani
            </motion.h2>
            <p className="text-gray-300 mb-4">
              {`While this optimizer provides valuable insights, mastering affiliate link optimization requires in-depth knowledge and strategies. John Crestani's Super Affiliate System Pro teaches you:`}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {[
                "Advanced techniques for crafting high-converting anchor text",
                "Strategies for seamlessly integrating affiliate links into your content",
                "How to use psychology and persuasion to increase click-through rates",
                "Tools and methods for tracking and improving your affiliate link performance",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <button
              onClick={handleLearnMore}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Learn Advanced CTR Optimization Techniques
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <JsonLd<any>
            item={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How accurate is the Affiliate Link CTR Optimizer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This optimizer provides estimates based on general best practices and industry averages. Actual results may vary depending on your specific niche, audience, and content quality. It's best used as a guide for potential improvements rather than a guarantee of exact results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What's a good click-through rate for affiliate links?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A good CTR for affiliate links can vary widely depending on your niche, audience, and placement. Generally, rates between 0.5% to 1% are considered average, while anything above 1% is good. Some highly optimized campaigns can achieve rates of 2-5% or even higher.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I improve my affiliate link click-through rates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To improve your affiliate link CTR, focus on creating high-quality, relevant content, use compelling and honest anchor text, place links strategically within your content, ensure your links are mobile-friendly, and continuously test and optimize your approach. John Crestani's Super Affiliate System Pro offers in-depth training on these techniques and more.",
                  },
                },
              ],
            }}
          />
          <RelatedTools
            currentToolUrl="/affiliate-marketing-tools/link-ctr-optimizer"
            category="affiliate"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

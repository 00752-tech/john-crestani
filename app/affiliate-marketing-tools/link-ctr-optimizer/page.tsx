/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { JsonLd } from "react-schemaorg";

import ClientLinkCTROptizer from "./ClientLinkCTROptizer";

export const metadata = {
  title: "Boost Clicks, End Wasted Effort: Free CTR Optimizer",
  description:
    "Stop losing clicks and wasted effort with our AI-powered Affiliate CTR Optimizer. Predict improvements, maximize earnings, then unlock AI-powered Affiliate training with John Crestani's proven system.",
};

export default function AffiliateLinkOptimizerPage() {
  const backUrl = "/affiliate-tools";
  const ctaUrl =
    "https://0a12bc34defghijklmnopqrs.hop.clickbank.net/?&traffic_source=ctr_optimize_pg";

  const pageTitle = "Unlock Your Affiliate Link CTR Edge & Maximize Earnings";
  const pageDescription =
    "Stop wasting affiliate traffic! Use our free AI-powered CTR Optimizer to predict how changes can boost clicks & commissions, then join John Crestani's AI Marketing Club and SAS Pro for proven income strategies — get your exclusive discount today.";

  // Open external link safely
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaUrl, "_blank", "noopener,noreferrer");
  };

  // Sample testimonials - replace or extend with real data
  const testimonials = [
    {
      name: "Jane D.",
      role: "Affiliate Marketer",
      quote:
        "This CTR optimizer showed me exactly where my links were underperforming. After applying the insights and John’s training, my commissions doubled!",
    },
    {
      name: "Michael S.",
      role: "Content Creator",
      quote:
        "I never realized the impact of link placement until I used the optimizer. Guided by John Crestani’s system, I’m now making reliable five-figure months.",
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://johncrestani.me/affiliate-tools/ctr-optimizer" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://johncrestani.me/affiliate-tools/ctr-optimizer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Affiliate Link CTR Optimizer",
          description:
            "Unlock your affiliate link's full value by predicting CTR improvements with AI, analyze key factors affecting clicks, and boost your commissions.",
          url: "https://johncrestani.me/affiliate-tools/ctr-optimizer",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          isAccessibleForFree: true,
          creator: {
            "@type": "Person",
            name: "John Crestani",
            sameAs: [
              "https://linkedin.com/in/johncrestani",
              "https://twitter.com/johncrestani",
              "https://instagram.com/johncrestani",
            ],
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Estimate CTR improvements based on key factors",
            "Analyze link placement impact",
            "Assess anchor text relevance",
            "Evaluate surrounding content quality",
            "Predict potential CTR gains",
          ],
          softwareHelp: {
            "@type": "CreativeWork",
            name: "How To Use The Affiliate Link CTR Optimizer",
            text: "Input your current CTR and adjust sliders to assess link placement, anchor text, and content quality to predict improvements and optimize your affiliate links.",
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
              name: "How accurate is the Affiliate Link CTR Optimizer?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "The optimizer uses industry best practices and AI to provide estimates. Actual results may vary but it helps pinpoint opportunities for improvement.",
              },
            },
            {
              "@type": "Question",
              name: "What is a good click-through rate for affiliate links?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Generally, CTRs range from 0.5% to 1% as average. Higher rates (2% to 5%) are achievable with optimized strategies taught in John Crestani's training.",
              },
            },
            {
              "@type": "Question",
              name: "How can I improve my affiliate link CTR?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Use this optimizer for insights, then apply proven strategies from John Crestani’s AI Marketing Club to refine your campaigns and drive more targeted traffic.",
              },
            },
            {
              "@type": "Question",
              name: "How does AI Marketing Club and SAS Pro help beyond the optimizer?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "The club and SAS Pro provide in-depth training to monetize improvements, scale your affiliate business, and achieve consistent high-ticket commissions.",
              },
            },
          ],
        }}
      />

      <motion.main className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={backUrl}
              className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 font-semibold italic"
              aria-label="Back to Affiliate Tools"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Affiliate Tools
            </Link>
          </motion.div>

          {/* Hero */}
          <section className="text-center mb-16">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold leading-tight tracking-tight text-white gradient-text"
            >
              <div className="text-5xl md:text-6xl">Unlock Affiliate Link CTR Edge...</div>
              <div className="text-3xl md:text-4xl font-light mt-2 text-pink-400">AI-Powered Optimizer & Proven Training</div>
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Stop wasting traffic and effort. Predict how to boost clicks, then use John Crestani’s proven system to turn clicks into commissions — faster and smarter.
            </motion.p>

            <motion.button
              onClick={handleCTAClick}
              className="mt-8 inline-block whitespace-nowrap bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold uppercase rounded-full px-10 py-4 text-lg shadow-lg transition-all duration-300 outline-none focus:ring-4 focus:ring-pink-400 cursor-pointer"
              aria-label="Join AI Marketing Club and claim your exclusive SAS Pro discount"
            >
              Unlock My AI CTR Edge &amp; SAS Pro Discount
            </motion.button>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <motion.ul
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-gray-300 max-w-4xl mx-auto list-disc list-inside"
            >
              <li><span className="font-bold italic underline">Identify exact weak points</span> limiting your clicks</li>
              <li><span className="font-bold italic underline">Discover how small changes</span> to placement and context can skyrocket CTR</li>
              <li><span className="font-bold italic underline">Make data-driven decisions</span> for faster affiliate sales growth</li>
              <li><span className="font-bold italic underline">Step confidently into AI-powered</span> affiliate marketing strategies</li>
            </motion.ul>
          </section>

          {/* Tool */}
          <motion.section
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 bg-gray-900 p-8 rounded-lg"
          >
            <ClientLinkCTROptizer />
          </motion.section>

          {/* How to Use */}
          <motion.section
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20 bg-gray-900 p-8 rounded-lg"
          >
            <h2 className="text-3xl mb-6 font-semibold text-white gradient-text">How To Use The Optimizer</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 text-lg max-w-3xl mx-auto">
              <li>Enter your affiliate link’s current click-through rate</li>
              <li>Adjust sliders rating link placement, anchor text relevance and content quality</li>
              <li>Watch how small improvements can impact clicks and earnings</li>
              <li>Use the data to boost links then unlock full traffic & conversion training</li>
            </ol>
          </motion.section>

          {/* Bridge */}
          <motion.section
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20 bg-gray-900 p-8 rounded-lg"
          >
            <h2 className="text-3xl mb-6 font-semibold text-white gradient-text">
              From Clicks To Commissions — The Full Blueprint
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
              Knowing your link’s CTR potential is just the start — real affiliates master the full funnel. John Crestani’s AI Marketing Club and Super Affiliate System provide the proven strategies to build predictable high-ticket commissions and long term, AI-augmented success.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-3xl mx-auto text-lg">
              <li>Master high-impact, AI-powered traffic generation</li>
              <li>Build sales funnels proven for massive affiliate commissions</li>
              <li>Access exclusive coaching, templates & insider info</li>
              <li>Unlock the $800 SAS Pro discount & step into the future of affiliate marketing</li>
            </ul>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-center mb-10 text-3xl font-semibold text-white gradient-text">
              What Our Members Say
            </h2>
            <div className="space-y-8">
              {testimonials.map(({ name, role, quote }, i) => (
                <blockquote
                  key={i}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300 italic font-medium"
                >
                  “{quote}”
                  <footer className="mt-3 text-sm font-semibold not-italic text-pink-400">
                    — {name}, {role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-40 text-center"
          >
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight gradient-text">
              Ready To Transform Clicks Into Real Commissions?
            </h2>
            <p className="mb-8 text-xl max-w-3xl mx-auto text-gray-300">
              Don’t let your traffic go to waste — take advantage of our AI-powered tool and proven marketing system to maximize affiliate earnings and secure your financial future.
            </p>
            <motion.button
              onClick={handleCTAClick}
              className="inline-block whitespace-nowrap bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold uppercase rounded-full px-14 py-5 text-xl shadow-lg transition-all duration-300 outline-none focus:ring-4 focus:ring-pink-400 cursor-pointer"
              aria-label="Join AI Marketing Club and claim SAS Pro exclusive discount"
              type="button"
            >
              Unlock My CTR Edge & SAS Pro Discount
            </motion.button>
            <p className="mt-4 text-gray-400 text-sm">
              Join the AI Marketing Club for just $27 and get instant access to exclusive bonuses and the $800 SAS Pro discount.
            </p>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
}

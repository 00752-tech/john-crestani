/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Head from "next/head";
import Link from "next/link";
import { JsonLd } from "react-schemaorg";
import { motion } from "framer-motion";
import React from "react";
import { ArrowLeft } from "lucide-react";

// Placeholder component for the actual niche profitability calculator
// Replace with your actual calculator component
const NicheProfitabilityCalculatorCore = () => {
  return (
    <section className="bg-gray-900 rounded-lg p-8 max-w-3xl mx-auto shadow-lg text-gray-300">
      <h2 className="text-3xl font-extrabold gradient-text mb-6 text-center" style={{ fontWeight: 900 }}>
        Niche Profitability Calculator
      </h2>
      <p className="text-center italic mb-4 text-lg">
        Use this tool to estimate your niche's profitability and make smarter affiliate selections.
      </p>
      {/* Insert your calculator UI here */}
      <div className="border border-gray-700 p-4 rounded-lg text-center text-gray-500">
        [Your interactive calculator component goes here]
      </div>
    </section>
  );
};

export default function NicheProfitabilityCalculatorPage() {
  const pageTitle = "Niche Profitability Calculator: Find Your Most Profitable Niche | JohnCrestani.me";
  const pageDescription =
    "Use our free Niche Profitability Calculator to discover which niches offer the best income potential for your affiliate marketing. Make smarter decisions and maximize your affiliate commissions.";

  const pageCanonicalUrl = "https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator";

  // Example affiliate link to SAS Pro or your preferred CTA
  const ctaUrl = "https://johncrestani.me/super-affiliate-system-pro";

  // Handler for CTA button (window.open with no hover URL preview)
  const openCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageCanonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white py-20 px-6"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Back Link */}
          <Link
            href="/free-tools"
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-10 font-semibold italic"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tools
          </Link>

          {/* Page Heading */}
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-12 text-center gradient-text leading-relaxed tracking-wide"
            style={{ fontWeight: 900 }}
          >
            <span className="block mb-4" style={{ fontStyle: "italic" }}>
              Discover Your Most Profitable Niche:
            </span>
            <span className="block" style={{ fontWeight: 900 }}>
              Use Our Niche Profitability Calculator <br />
              to Find Winning Affiliate Markets
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16 px-4 leading-relaxed">
            Struggling to pick the right niche? Don’t waste time and money on guesswork. Our tool helps you identify niches with the highest earning potential. Make data-driven decisions to maximize your affiliate marketing success.
          </p>

          {/* Calculator Core Component */}
          <NicheProfitabilityCalculatorCore />

          {/* CTA Section */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="mb-6 text-lg italic text-gray-300 max-w-xl mx-auto px-4 leading-relaxed">
              Ready to turn your niche into reliable income? Take the next step to predictable affiliate success with John Crestani’s{" "}
              <button
                type="button"
                onClick={openCta}
                className="text-pink-500 underline font-semibold hover:text-pink-400 cursor-pointer bg-transparent border-none p-0"
                aria-label="Open Super Affiliate System Pro page"
              >
                Super Affiliate System Pro
              </button>{" "}
              program and AI Marketing Club.
            </p>
            <button
              type="button"
              onClick={openCta}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold py-4 px-12 rounded-full text-xl uppercase tracking-wide transition duration-300 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-pink-400"
              aria-label="Unlock Super Affiliate System Pro and AI Marketing Club"
            >
              Unlock Super Affiliate System Pro Now!
            </button>
          </motion.div>

          {/* FAQ Section for the niche calculator tool */}
          <section className="max-w-3xl mx-auto mt-24 text-gray-300 px-4">
            <h2 className="text-3xl font-semibold mb-8 gradient-text text-center">
              Frequently Asked Questions
            </h2>

            {[
              {
                question: "How accurate is this niche profitability calculator?",
                answer:
                  "This calculator provides estimates based on market data inputs and assumptions. Actual niche profitability can vary depending on factors like competition, ad spend, and execution.",
              },
              {
                question: "What inputs do I need to use this calculator?",
                answer:
                  "You’ll provide basic variables like average commission, expected conversion rates, and traffic potential to estimate overall niche earnings.",
              },
              {
                question: "How can this help me choose my affiliate marketing niche?",
                answer:
                  "By quantifying potential profit, you can compare multiple niches objectively and select the one with the most promising payout for your effort.",
              },
            ].map(({ question, answer }, idx) => (
              <details key={idx} className="mb-6 bg-gray-900 p-4 rounded cursor-pointer">
                <summary className="font-semibold text-lg">{question}</summary>
                <p className="mt-2 leading-relaxed">{answer}</p>
              </details>
            ))}
          </section>
        </motion.div>
      </motion.div>

      {/* Structured Data: FAQ */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How accurate is this niche profitability calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "This calculator provides estimates based on market data inputs and assumptions. Actual niche profitability can vary depending on factors like competition, ad spend, and execution.",
              },
            },
            {
              "@type": "Question",
              name: "What inputs do I need to use this calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You’ll provide basic variables like average commission, expected conversion rates, and traffic potential to estimate overall niche earnings.",
              },
            },
            {
              "@type": "Question",
              name: "How can this help me choose my affiliate marketing niche?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "By quantifying potential profit, you can compare multiple niches objectively and select the one with the most promising payout for your effort.",
              },
            },
          ],
        }}
      />
    </>
  );
}

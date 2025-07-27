/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { JsonLd } from "react-schemaorg";

function calculateProfitability(
  averageSalesPerMonth: number,
  averageSaleValue: number,
  averageCommissionRate: number,
  averageProfitMargin: number
) {
  if (
    averageSalesPerMonth <= 0 ||
    averageSaleValue <= 0 ||
    averageCommissionRate <= 0 ||
    averageProfitMargin <= 0
  ) {
    return 0;
  }
  return (
    averageSalesPerMonth *
    averageSaleValue *
    (averageCommissionRate / 100) *
    (averageProfitMargin / 100)
  );
}

export default function NicheProfitabilityCalculatorPage() {
  const backUrl = "/affiliate-marketing-tools";
  const ctaUrl =
    "https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/?&traffic_source=niche_profit_calc_pg_aimc_sasp";

  const [averageSalesPerMonth, setAverageSalesPerMonth] = useState<number>(0);
  const [averageSaleValue, setAverageSaleValue] = useState<number>(0);
  const [averageCommissionRate, setAverageCommissionRate] = useState<number>(0);
  const [averageProfitMargin, setAverageProfitMargin] = useState<number>(0);
  const [estimatedMonthlyProfit, setEstimatedMonthlyProfit] = useState<number>(0);

  // Update profit live as inputs change
  useEffect(() => {
    setEstimatedMonthlyProfit(
      calculateProfitability(
        averageSalesPerMonth,
        averageSaleValue,
        averageCommissionRate,
        averageProfitMargin
      )
    );
  }, [averageSalesPerMonth, averageSaleValue, averageCommissionRate, averageProfitMargin]);

  // Input validation: disable if any input invalid
  const isInputValid =
    averageSalesPerMonth > 0 &&
    averageSaleValue > 0 &&
    averageCommissionRate > 0 &&
    averageProfitMargin > 0;

  // Reset inputs
  const handleReset = () => {
    setAverageSalesPerMonth(0);
    setAverageSaleValue(0);
    setAverageCommissionRate(0);
    setAverageProfitMargin(0);
    setEstimatedMonthlyProfit(0);
  };

  // CTA open handler
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaUrl, "_blank", "noopener,noreferrer");
  };

  const pageTitle =
    "Niche Profitability Calculator... Unlock SAS Pro & AI Marketing Club - End Uncertainty Predict Earnings";
  const pageDesc =
    "Stop guessing & end financial fear! Our free AI-powered calculator helps you confidently identify profitable affiliate niches. Then, unlock John Crestani's AI Marketing Club & Super Affiliate System Pro for a clear path to predictable earnings & career resilience. Get your $800 SAS Pro discount here!";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href="https://johncrestani.me/niche-profitability-calculator" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content="https://johncrestani.me/niche-profitability-calculator" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white py-20 px-6"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Back Link */}
          <Link
            href={backUrl}
            className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-10 font-semibold italic"
            aria-label="Back to Tools"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tools
          </Link>

          {/* Heading */}
          <h1
            className="mb-12 text-center leading-snug tracking-wide"
            aria-label="Niche Profitability Calculator main heading"
          >
            <span
              className="block text-5xl font-extrabold"
              style={{ fontWeight: 900 }}
            >
              Discover Your Most Profitable Niche...
            </span>
            <span
              className="block mt-1 text-3xl font-light text-pink-400"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Use Our Niche Profitability Calculator to Find Winning Affiliate Markets
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12 px-4 leading-relaxed">
            Are you&nbsp;
            <strong>
              nervous about picking the right niche
            </strong>
            &nbsp;and wasting time or money? Eliminate the guesswork! Our free,&nbsp;
            <strong>Niche Profitability Calculator</strong> gives you the clarity and confidence to assess market potential.&nbsp;
            Quickly estimate your affiliate niche profit potential to identify lucrative opportunities and ensure predictable earnings.
            This is your first step towards leveraging AI and proven systems for financial freedom.
          </p>

          {/* Benefits List */}
          <ul className="max-w-3xl mx-auto text-gray-300 text-lg list-disc list-inside mb-16 space-y-4 px-6 leading-relaxed">
            <li>
              <span className="font-bold italic underline">
                Pinpoint lucrative niches
              </span>{" "}
              with a clear financial estimate.
            </li>
            <li>Save time by eliminating unprofitable markets first.</li>
            <li>
              Empower your strategy with data-driven decisions and reduce risk.
            </li>
            <li>Compare multiple niches to find your best affiliate opportunity.</li>
          </ul>

          {/* Calculator Form */}
          <motion.div
            className="bg-gray-900 p-8 rounded-lg mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
              aria-label="Niche Profitability Calculator Input Form"
            >
              <div>
                <label
                  htmlFor="averageSalesPerMonth"
                  className="block mb-2 font-semibold text-pink-500"
                >
                  Average Sales per Month
                </label>
                <input
                  id="averageSalesPerMonth"
                  type="number"
                  min="0"
                  aria-required="true"
                  aria-describedby="salesHelp"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white focus:outline-pink-400"
                  value={averageSalesPerMonth}
                  onChange={(e) =>
                    setAverageSalesPerMonth(Math.max(0, Number(e.target.value)))
                  }
                  placeholder="e.g. 100"
                />
                <p id="salesHelp" className="text-sm text-gray-500 mt-1">
                  Number of sales you expect to make monthly in your niche.
                </p>
              </div>

              <div>
                <label
                  htmlFor="averageSaleValue"
                  className="block mb-2 font-semibold text-pink-500"
                >
                  Average Sale Value ($)
                </label>
                <input
                  id="averageSaleValue"
                  type="number"
                  min="0"
                  step="0.01"
                  aria-required="true"
                  aria-describedby="valueHelp"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white focus:outline-pink-400"
                  value={averageSaleValue}
                  onChange={(e) =>
                    setAverageSaleValue(Math.max(0, Number(e.target.value)))
                  }
                  placeholder="e.g. 50.00"
                />
                <p id="valueHelp" className="text-sm text-gray-500 mt-1">
                  Average monetary value of each sale.
                </p>
              </div>

              <div>
                <label
                  htmlFor="averageCommissionRate"
                  className="block mb-2 font-semibold text-pink-500"
                >
                  Average Commission Rate (%)
                </label>
                <input
                  id="averageCommissionRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  aria-required="true"
                  aria-describedby="commissionHelp"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white focus:outline-pink-400"
                  value={averageCommissionRate}
                  onChange={(e) =>
                    setAverageCommissionRate(
                      Math.min(100, Math.max(0, Number(e.target.value)))
                    )
                  }
                  placeholder="e.g. 10"
                />
                <p id="commissionHelp" className="text-sm text-gray-500 mt-1">
                  Percentage commission earned on each sale.
                </p>
              </div>

              <div>
                <label
                  htmlFor="averageProfitMargin"
                  className="block mb-2 font-semibold text-pink-500"
                >
                  Average Profit Margin (%)
                </label>
                <input
                  id="averageProfitMargin"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  aria-required="true"
                  aria-describedby="marginHelp"
                  className="w-full rounded-md border border-gray-700 bg-black p-3 text-white focus:outline-pink-400"
                  value={averageProfitMargin}
                  onChange={(e) =>
                    setAverageProfitMargin(
                      Math.min(100, Math.max(0, Number(e.target.value)))
                    )
                  }
                  placeholder="e.g. 40"
                />
                <p id="marginHelp" className="text-sm text-gray-500 mt-1">
                  Percentage margin of profit after expenses.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={!isInputValid}
                  className="flex-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
                  aria-disabled={!isInputValid}
                  aria-label="Calculate Profitability"
                >
                  Calculate Profitability
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 rounded-full border border-pink-500 py-3 font-semibold text-pink-500 hover:bg-pink-500 hover:text-black transition"
                  aria-label="Reset input fields"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>

          {/* Result */}
          {isInputValid && estimatedMonthlyProfit > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-pink-500 rounded-lg p-6 text-black font-semibold text-center text-xl mb-12"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              aria-label="Estimated Monthly Profit"
            >
              Estimated Monthly Profit: ${estimatedMonthlyProfit.toFixed(2)}
            </motion.div>
          )}

          {/* How to Use Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-900 p-8 rounded-lg mb-10"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Gain Clarity Instantly... How to Use This Calculator
            </motion.h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Estimate average sales per month for your niche.</li>
              <li>Enter average sale value.</li>
              <li>Input average commission rate percentage.</li>
              <li>Enter profit margin percentage.</li>
              <li>View your estimated monthly profit instantly.</li>
            </ol>
          </motion.div>

          {/* Why This Matters Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900 p-8 rounded-lg mb-10"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white gradient-text">
              Beyond the Numbers... How John Crestani's AI Marketing Club & SAS Pro Transform Uncertainty into Predictability
            </h2>
            <p className="text-gray-300 mb-4">
              Calculating your potential profit is a great start, but what if you had a proven system to <strong>turn those numbers into real results?</strong> In today's AI-driven economy, data alone isn't enough — you need tools, strategies, and support to build predictable income.
            </p>
            <p className="text-gray-300 mb-4">
              That's where <strong>John Crestani's AI Marketing Club</strong> comes in. It provides the exclusive home of the advanced <strong>Super Affiliate System Pro (SASP)</strong>, offering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><strong>Master AI marketing</strong> and future-proof your income.</li>
              <li><strong>Learn high-ticket affiliate strategies</strong> that reliably work in any economy.</li>
              <li><strong>Get an exclusive $800 SASP discount</strong> after joining AIMC for $27.</li>
              <li><strong>Build multiple income streams</strong> and regain financial control.</li>
            </ul>
            <p className="text-gray-300 mb-4 font-bold">
              Don't just estimate profits — <em>start generating them</em> confidently.
            </p>
          </motion.div>

          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Unlock Your Predictable AI Income Blueprint Now!
            </motion.h2>

            <p className="text-gray-300 mb-4">
              Knowing your niche potential is powerful, but true <strong>financial freedom</strong> comes from having a proven blueprint. Join John Crestani's AI Marketing Club and get exclusive access to SAS Pro with an <strong>$800 discount</strong>. Learn to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <strong>Identify & validate profitable niches</strong> with AI insights.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <strong>Craft high-converting campaigns</strong> effortlessly.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
                <strong>Scale your business confidently</strong>, building long-term assets.
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}>
                <strong>Diversify income streams for real freedom</strong>.
              </motion.li>
            </ul>

            <motion.button
              onClick={handleCtaClick}
              className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-10 rounded-full text-xl uppercase font-extrabold tracking-wide select-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
              aria-label="Get AI Marketing Club & unlock your 800 dollar SAS Pro discount now"
              type="button"
            >
              Get AI Marketing Club & Unlock Your $800 SAS Pro Discount Now!
            </motion.button>

            <p className="text-sm text-center text-gray-400 mt-4 max-w-xl mx-auto">
              Join the AI Marketing Club for $27, then upgrade to the full Super Affiliate System Pro for just $197 (original price $997).
            </p>
          </motion.div>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto mt-16 text-gray-300 px-4">
            <h2 className="text-3xl font-semibold mb-8 gradient-text text-center">
              Frequently Asked Questions
            </h2>

            {[
              {
                question: "How accurate is the Niche Profitability Calculator?",
                answer:
                  "The calculator provides estimates based on the data you input. Its accuracy depends on the realism of your inputs. It's a powerful tool to guide decisions but actual results can vary.",
              },
              {
                question: "What if I'm not sure about my niche or how to profit?",
                answer:
                  "The calculator is a start. John Crestani's AI Marketing Club teaches how to find niches, build campaigns, and scale profits with AI-powered tools and the SAS Pro system.",
              },
              {
                question: "Can this calculator help avoid unprofitable niches?",
                answer:
                  "Yes. It helps you assess potential profitability before investing heavily, reducing costly mistakes. The AI Marketing Club provides the next-level system for turning insights into income.",
              },
              {
                question: "How are the AI Marketing Club and SAS Pro related to this calculator?",
                answer:
                  "This calculator estimates niche potential. AIMC & SAS Pro provide the proven tools, strategies, and community you need to actually build predictable affiliate income.",
              },
            ].map(({ question, answer }, idx) => (
              <details key={idx} className="mb-6 bg-gray-900 p-5 rounded cursor-pointer">
                <summary className="font-semibold text-lg cursor-pointer">{question}</summary>
                <p className="mt-2 leading-relaxed">{answer}</p>
              </details>
            ))}
          </section>
        </motion.div>
      </motion.div>

      {/* Structured Data for FAQ (JSON-LD) */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How accurate is the Niche Profitability Calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator provides estimates based on the data you input. Its accuracy depends on the realism of your inputs. It's a powerful tool to guide decisions but actual results can vary.",
              },
            },
            {
              "@type": "Question",
              name: "What if I'm not sure about my niche or how to profit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator is a start. John Crestani's AI Marketing Club teaches how to find niches, build campaigns, and scale profits with AI-powered tools and the SAS Pro system.",
              },
            },
            {
              "@type": "Question",
              name: "Can this calculator help avoid unprofitable niches?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. It helps you assess potential profitability before investing heavily, reducing costly mistakes. The AI Marketing Club provides the next-level system for turning insights into income.",
              },
            },
            {
              "@type": "Question",
              name: "How are the AI Marketing Club and SAS Pro related to this calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "This calculator estimates niche potential. AIMC & SAS Pro provide the proven tools, strategies, and community you need to actually build predictable affiliate income.",
              },
            },
          ],
        }}
      />
    </>
  );
}

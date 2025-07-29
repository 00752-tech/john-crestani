// File: app/where-is-sas-pro-2025/page.tsx

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title:
    "Where is Super Affiliate System Pro in 2025? Get Exclusive Access + Secret Discount",
  description:
    "Searching for Super Affiliate System Pro? John Crestani&apos;s legendary program is now exclusively inside the AI Marketing Club. Discover 2025 access, what&apos;s new, and how to get an $800 SAS Pro discount!",
};

const ctaAffiliateLink =
  "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";

export default function WhereIsSASPro2025() {
  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <main className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Where is Super Affiliate System Pro in 2025?"
        >
          Where is Super Affiliate System Pro in 2025?
          <br />
          Get Exclusive Access + a Secret Discount to John Crestani&apos;s AI Marketing Club
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-xl text-gray-300 mb-10 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Searching for Super Affiliate System Pro? John Crestani&apos;s legendary program is now exclusively inside the AI Marketing Club. Discover 2025 access, what&apos;s new, and how to get an <strong>$800 SAS Pro discount!</strong>
        </motion.p>

        {/* Section: The Evolution */}
        <Section
          title="The Evolution of SAS Pro: From Standalone to AI-Powered Powerhouse"
          content={
            <>
              <p>
                For years, <strong>Super Affiliate System Pro</strong> (SAS Pro) was John Crestani&apos;s flagship training on generating income through paid ads across Facebook, Google, YouTube, and more. Packed with
                over 50 hours of content, templates, and data, it set the gold standard.
              </p>
              <p className="mt-4">
                But marketing moves fast. To empower affiliates for the AI era, John created the <strong>AI Marketing Club (AIMC)</strong>&nbsp;&mdash; your launcher to the future of affiliate success, combining AI tools with proven strategies.
              </p>
              <p className="mt-4">
                You can start with AIMC today for just <strong>$27</strong>, gaining AI-powered marketing tools to automate, optimize, and scale your campaigns faster than ever.
              </p>
              <div className="text-center mt-6">
                <CtaLink href={ctaAffiliateLink}>
                  Click Here to Get Started with AI Marketing Club (and Access SAS Pro!)
                </CtaLink>
              </div>
            </>
          }
        />

        {/* Section: Unlocking SAS Pro Discount */}
        <Section
          title="Unlocking Super Affiliate System Pro: Your Exclusive $800 Discount"
          content={
            <>
              <p>
                Once inside AIMC, the real secret unfolds: an exclusive $800 discount on SAS Pro. Upgrade for only <strong>$197</strong> (originally $997) and unlock:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                <li>
                  <strong>50+ hours</strong> of in-depth paid ads training.
                </li>
                <li>
                  <strong>Proven traffic strategies</strong> across Facebook, Google, YouTube &amp; Native Ads.
                </li>
                <li>Done-for-you templates and campaign creatives to fast-track results.</li>
                <li>Proprietary buyer data for targeting profitable niches.</li>
                <li>Active community and direct mentorship from John Crestani.</li>
              </ul>
              <p className="mt-4">
                This isn&apos;t just a course &mdash; it&apos;s your complete affiliate business blueprint, now supercharged with AI.
              </p>
              <div className="text-center mt-6">
                <CtaLink href={ctaAffiliateLink}>
                  Access Super Affiliate System Pro (with Your Exclusive $800 Discount!)
                </CtaLink>
              </div>
            </>
          }
        />

        {/* Section: Why This Is A Game-Changer */}
        <Section
          title="Why This New Model is a Game-Changer for Affiliates"
          content={
            <>
              <p>The integration of SAS Pro within AIMC delivers:</p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                <li>
                  <strong>Future-proof skills:</strong> Blend classic paid traffic with cutting-edge AI strategies.
                </li>
                <li>
                  <strong>Unbeatable value:</strong> Two powerful programs for a fraction of the price.
                </li>
                <li>
                  <strong>Complete ecosystem:</strong> Training, tools, and community working in harmony.
                </li>
                <li>
                  <strong>Eliminate guesswork:</strong> AI-driven calculators and AI-assistance help target profitable niches and optimize campaigns.
                </li>
              </ul>
              <p className="mt-4">
                For example, use our{" "}
                <Link
                  href="https://johncrestani.me/affiliate-marketing-tools/niche-profitability-calculator"
                  className="text-pink-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Niche Profitability Calculator
                </Link>{" "}
                to project your earning potential before you invest a dime.
              </p>
            </>
          }
        />

        {/* Section: FAQs */}
        <Section
          title="Frequently Asked Questions"
          content={
            <>
              <FaqItem
                question="Is Super Affiliate System Pro still relevant in 2025?"
                answer="Absolutely. SAS Pro combined with AI Marketing Club&apos;s tools brings you both timeless paid ads fundamentals and modern AI-powered advantages."
              />
              <FaqItem
                question="Can I buy SAS Pro without joining AI Marketing Club?"
                answer="No, SAS Pro is now exclusively offered as an upgrade inside AIMC to ensure you have foundational AI tools needed for success."
              />
              <FaqItem
                question="Is John Crestani&apos;s Super Affiliate System Pro legit?"
                answer="Yes, it&apos;s a comprehensive, proven system created by a recognized affiliate marketing expert with ongoing community support."
              />
              <FaqItem
                question="What about pricing and refund policies?"
                answer="AI Marketing Club costs $27 to join. SAS Pro upgrade costs $197 (originally $997). Both come with 100% money-back guarantees."
              />
            </>
          }
        />

        {/* Final CTA */}
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug">
            Your Path to Predictable AI Income Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Embrace the future with John Crestani&apos;s AI Marketing Club bundled with Super Affiliate System Pro &mdash; your unmatched affiliate marketing blueprint for 2025 and beyond.
          </p>
          <CtaLink href={ctaAffiliateLink}>
            Unlock My Predictable AI Income Blueprint Now!
          </CtaLink>
        </motion.div>
      </main>
    </article>
  );
}

// Helper components

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <motion.section
      className="mb-12 bg-gray-900 p-8 rounded-lg"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label={title}
    >
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="prose prose-invert max-w-none">{content}</div>
    </motion.section>
  );
}

function CtaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-hover inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-bold select-none transition-none"
      aria-label="Unlock My Predictable AI Income Blueprint Now!"
      style={{
        boxShadow: "none",
        textDecoration: "none",
        outline: "none",
        filter: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label={`FAQ: ${question}`}
    >
      <h3 className="font-semibold text-lg text-pink-500 mb-1">{question}</h3>
      <p className="text-gray-300 leading-relaxed">{answer}</p>
    </motion.div>
  );
}

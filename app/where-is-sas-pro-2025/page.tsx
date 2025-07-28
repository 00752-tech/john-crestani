// File: app/where-is-sas-pro-2025/page.tsx

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title:
    "Where is Super Affiliate System Pro in 2025? Get Exclusive Access + Secret Discount",
  description:
    "Searching for Super Affiliate System Pro? John Crestani's legendary program is now exclusively inside the AI Marketing Club. Discover 2025 access, what's new, and how to get an $800 SAS Pro discount!",
};

const ctaAffiliateLink =
  "https://f75d2-a2r03odn9fcbizbsbrbz.hop.clickbank.net/?&traffic_source=blog_wheres_sas_pro";

export default function WhereIsSASPro2025() {
  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <main className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Where is Super Affiliate System Pro in 2025?"
        >
          Where is Super Affiliate System Pro in 2025? <br />
          Get Exclusive Access + a Secret Discount to John Crestani&apos;s AI Marketing Club
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-10 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Searching for Super Affiliate System Pro? It&apos;s now inside the AI Marketing Club.
          Discover access, what&apos;s new, and get an <strong>$800 SAS Pro discount!</strong>
        </motion.p>

        {/* Sections */}
        <Section
          title="The Evolution of SAS Pro: From Standalone to AI-Powered Powerhouse"
          content={
            <>
              <p>For years, SAS Pro was John Crestani&apos;s flagship paid ads course.</p>
              <p className="mt-4">
                But marketing evolves. Now inside AIMC, it pairs proven systems with AI tools to turbocharge affiliate success.
              </p>
              <p className="mt-4">Start AIMC today for just <strong>$27</strong>.</p>
              <div className="text-center mt-6">
                <CtaButton href={ctaAffiliateLink}>
                  Click Here to Get Started with AI Marketing Club
                </CtaButton>
              </div>
            </>
          }
        />

        <Section
          title="Unlocking Super Affiliate System Pro: Your Exclusive $800 Discount"
          content={
            <>
              <p>Once inside AIMC, upgrade for just <strong>$197</strong> (normally $997) to unlock:</p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
                <li>50+ hours of in-depth paid ads training</li>
                <li>Done-for-you templates and creatives</li>
                <li>Buyer data + mentorship with John Crestani</li>
              </ul>
              <div className="text-center mt-6">
                <CtaButton href={ctaAffiliateLink}>Get My SAS Pro Discount Now!</CtaButton>
              </div>
            </>
          }
        />

        <Section
          title="Frequently Asked Questions"
          content={
            <>
              <FaqItem
                question="Is SAS Pro still relevant in 2025?"
                answer="Yes. It's now upgraded with AIMC tools and community."
              />
              <FaqItem
                question="Can I buy SAS Pro without AIMC?"
                answer="No. It's exclusive to AIMC members."
              />
              <FaqItem
                question="Is this legit?"
                answer="Absolutely. It's been featured across major media outlets and backed by a 100% guarantee."
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
            Your AI-Powered Income Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Get access to John Crestani&apos;s AI Marketing Club bundled with SAS Pro — your affiliate blueprint for 2025 and beyond.
          </p>
          <CtaButton href={ctaAffiliateLink}>Unlock My Income Blueprint Now!</CtaButton>
        </motion.div>
      </main>
    </article>
  );
}

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
      <div className="space-y-4 text-gray-300 text-lg">{content}</div>
    </motion.section>
  );
}

function CtaButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Unlock My Predictable AI Income Blueprint Now!"
    >
      {children}
    </Link>
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
    <details className="bg-gray-800 rounded-lg p-4 mb-4 group" open>
      <summary className="cursor-pointer text-lg font-semibold text-pink-400 group-open:mb-2">
        {question}
      </summary>
      <p className="text-gray-300 text-base leading-relaxed">{answer}</p>
    </details>
  );
}

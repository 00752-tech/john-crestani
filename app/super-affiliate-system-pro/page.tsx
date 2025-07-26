"use client";

import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageCanonicalUrl = "https://johncrest.me";

const pageTitle =
  "Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club Access &amp; Review - End Fear, Gain Predictability";

const pageDescription =
  "Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani&apos;s AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing. End fear, gain financial predictability and consistent results.";

const ctaAffiliateLink = "https://0b29ap10s7br.clickbank.net";

export default function SuperAffiliateSystemProPage() {
  const affiliateLinkAimc = `${ctaAffiliateLink}?traffic=aimc`;
  const affiliateLinkUpgrade = `${ctaAffiliateLink}?traffic=upgrade`;
  const affiliateLinkFinal = `${ctaAffiliateLink}?traffic=final`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrest.me" },
            { "@type": "ListItem", position: 2, name: "Super Affiliate System Pro", item: pageCanonicalUrl },
          ],
        }}
      />

      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is Super Affiliate System Pro (SASP) available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Super Affiliate System Pro is exclusively available inside John Crestani&apos;s AI Marketing Club.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SASP without joining the AI Marketing Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, SASP is offered only as an exclusive upsell inside the AI Marketing Club membership, which starts at $27.",
              },
            },
            {
              "@type": "Question",
              name: "Is Super Affiliate System Pro a legit program?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it&apos;s created by John Crestani and provides actionable, comprehensive marketing training empowered by AI.",
              },
            },
            {
              "@type": "Question",
              name: "Is SASP a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, it requires consistent effort and is designed to build predictable, sustainable affiliate income.",
              },
            },
            {
              "@type": "Question",
              name: "What&apos;s the refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A 60-day money-back guarantee is included via ClickBank to ensure your peace of mind.",
              },
            },
          ],
        }}
      />

      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro",
          description:
            "Super Affiliate System Pro provides cutting-edge affiliate marketing training enhanced with AI for 2025 success.",
          url: pageCanonicalUrl,
          image: "https://johncrest.me/new_super_affiliate_system_pro.webp",
          brand: { "@type": "Brand", name: "John Crestani" },
          offers: {
            "@type": "Offer",
            url: affiliateLinkAimc,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "John Crestani" },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnLink: "https://support.clickbank.com/",
              merchantReturnMethod: "https://schema.org/ReturnByMail",
              refundType: "https://schema.org/FullRefund",
              restockingFee: "https://schema.org/NoRestockingFee",
              merchantReturnDays: 60,
            },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1550" },
          provider: { "@type": "Organization", name: "John Crestani", url: pageCanonicalUrl },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro by John Crestani
          </h1>

          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join <strong>John Crestani&apos;s AI Marketing Club</strong> today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools plus the Super Affiliate System Pro upgrade for <strong>$197</strong>.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <Image
              src="/new_super_affiliate_system_pro.webp"
              alt="Super Affiliate System Pro"
              width={600}
              height={400}
              priority
              className="rounded-lg mx-auto"
            />
          </div>

          <p className="text-yellow-400 italic mb-6">Official 2025 access – your financial predictability vacuum.</p>

          <Link
            href={affiliateLinkAimc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition hover:scale-105 mx-auto"
            aria-label="Join the AI Marketing Club for $27"
          >
            Join AI Marketing Club for $27
          </Link>
        </section>

        {/* Emotional */}
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">The Fear Vacuum</h2>

          <p>
            In uncertain times, <em>Super Affiliate System Pro</em> acts as a powerful <strong>fear vacuum</strong>, guiding you towards predictable affiliate income powered by AI.
          </p>

          <p>
            Build multiple AI-driven streams and future-proof your career with automation and smart strategies.
          </p>

          <p>
            Regain financial control and purpose with proven system and community support.
          </p>
        </section>

        {/* What is SASP */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">What is Super Affiliate System Pro?</h2>

          <p className="mb-4">
            <em>Super Affiliate System Pro</em> is John Crestani&apos;s flagship affiliate marketing course with over 50 hours of video training, templates, buyer data, and community perks.
          </p>

          <p>
            Updated for 2025 with powerful AI tools and strategies aimed at maximizing affiliate success.
          </p>
        </section>

        {/* Curriculum */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Course Highlights</h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li><strong>AI-enhanced ad creation and scaling strategies</strong></li>
            <li><strong>Ready-made AI-optimized marketing assets</strong></li>
            <li><strong>Exclusive buyer data and case studies</strong></li>
            <li><strong>VIP community access and coaching</strong></li>
            <li><strong>Lifetime updates</strong></li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pricing &amp; Offer</h2>

          <p className="mb-4">
            Official access to the AI Marketing Club is just <strong>$27</strong>.
          </p>

          <p className="mb-6">
            Upgrade to the full Super Affiliate System Pro for <strong>$197</strong> (discounted from $997).
          </p>

          <Link
            href={affiliateLinkUpgrade}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition hover:scale-105 mx-auto"
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Upgrade for $197
          </Link>

          <p className="mt-4 text-sm italic text-gray-400">60-day money-back guarantee included</p>
        </section>

        {/* Pros / Cons */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pros &amp; Cons</h2>
          <div className="md:flex md:space-x-12 text-gray-300">
            <div className="md:w-1/2">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Comprehensive and structured</strong></li>
                <li><strong>AI-powered efficiency</strong></li>
                <li><strong>Done-for-you assets</strong></li>
                <li><strong>Excellent community support</strong></li>
                <li><strong>Lifetime updates</strong></li>
                <li><strong>Predictable income focus</strong></li>
                <li><strong>Future-proof skills</strong></li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <ul className="list-disc list-inside space-y-2">
                <li>Initial upsell structure may confuse some</li>
                <li>Upgrade cost can be significant, but discounted</li>
                <li>Requires commitment; no get-rich-quick promises</li>
                <li>Negative reviews addressed openly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-6 gradient-text">Frequently Asked Questions</h2>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Is Super Affiliate System Pro a scam?</summary>
            <p className="mt-2 text-gray-300">No, it&apos;s a legit program with proven training and support.</p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Can I buy SASP without joining AI Marketing Club?</summary>
            <p className="mt-2 text-gray-300">No, SASP is only available through the club membership.</p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Where is SASP available?</summary>
            <p className="mt-2 text-gray-300">Only via John Crestani&apos;s official club as of 2025.</p>
          </details>
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl mb-6 gradient-text text-center">Success Stories</h2>
          <div className="space-y-8">
            <blockquote className="bg-gray-900 p-6 rounded">
              <p className="italic text-gray-200">
                &quot;John&apos;s course gave me a clear roadmap and the confidence to build predictable income.&quot;
              </p>
              <footer className="mt-2 text-yellow-400 font-semibold text-right">— Sarah K.</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded">
              <p className="italic text-gray-200">
                &quot;The AI tools and support helped me grow despite uncertainty, turning fear into opportunity.&quot;
              </p>
              <footer className="mt-2 text-yellow-400 font-semibold text-right">— Michael B.</footer>
            </blockquote>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={affiliateLinkFinal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition hover:scale-105"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
            >
              Join the AI Marketing Club &amp; Start Your Journey
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

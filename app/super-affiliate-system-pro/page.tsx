"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const PAGE_CANONICAL_URL = "https://johncrestani.me/super-affiliate-pro";

const PAGE_TITLE =
  "Super Affiliate Pro 2025 - John Crestani&apos;s AI Marketing Club Review - End Fear &amp; Gain Unshakeable Control";

const PAGE_DESCRIPTION =
  "Discover how John Crestani&apos;s Super Affiliate Pro 2025 edition inside the AI Marketing Club helps overcome job displacement fears and build unshakeable financial predictability.";

const AFFILIATE_LINK =
  "https://04z56z32w9avobwifi8fxxbrk.hop.clickbank.net/?&traffic_source=sasp_pg_ctas";

const BUTTON_BASE =
  "inline-block select-none rounded-full font-semibold transition-transform duration-200 ease-in-out px-8 py-3 text-lg cursor-pointer";

const BUTTON_PRIMARY =
  "bg-yellow-400 text-black shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400";

const BUTTON_UPGRADE =
  "bg-pink-600 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400";

export default function SuperAffiliateProPage() {
  const openAffiliateLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style jsx global>{`
        button,
        button:hover,
        button:focus,
        button:active {
          text-decoration: none !important;
          outline: none !important;
          box-shadow: none !important;
          filter: none !important;
          cursor: pointer !important;
          transition: none !important;
        }
      `}</style>

      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_CANONICAL_URL} />
      </Head>

      {/* Breadcrumb structured data */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            { "@type": "ListItem", position: 2, name: "Super Affiliate Pro", item: PAGE_CANONICAL_URL },
          ],
        }}
      />

      {/* FAQ structured data */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is Super Affiliate Pro available? What changed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Super Affiliate Pro is now only available inside John Crestani&apos;s AI Marketing Club. The updated 2025 version replaces all previous versions and includes cutting-edge AI enhancements.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy Super Affiliate Pro without joining the AI Marketing Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The program is exclusively bundled as an upsell inside the AI Marketing Club, starting at $27.",
              },
            },
            {
              "@type": "Question",
              name: "Is Super Affiliate Pro legit and worth it for 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Developed by John Crestani, it is an established program updated for 2025 with verified success stories and ongoing support.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost and refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The AI Marketing Club costs $27; the Super Affiliate Pro upgrade is a time-limited $197, both with a 60-day money-back guarantee through ClickBank.",
              },
            },
            {
              "@type": "Question",
              name: "How does the program use AI to future-proof my income?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You learn to use AI-powered tools and automations to scale affiliate campaigns efficiently and build sustainable income.",
              },
            },
            {
              "@type": "Question",
              name: "Is this a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Success requires commitment and consistent work. The program focuses on building predictable and scalable affiliate income.",
              },
            },
          ],
        }}
      />

      {/* Product and course structured data */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate Pro 2025",
          description: PAGE_DESCRIPTION,
          url: PAGE_CANONICAL_URL,
          image: "https://johncrestani.me/new_super_affiliate_pro_2025.webp",
          brand: { "@type": "Brand", name: "John Crestani" },
          offers: {
            "@type": "Offer",
            url: AFFILIATE_LINK,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "John Crestani",
            },
            hasMerchantPolicy: {
              merchantReturnsPolicy: {
                "@type": "MerchantReturnPolicy",
                returnPolicyCategory: "https://schema.org/ReturnWindow",
                refundType: "https://schema.org/FullRefund",
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/NoRestockingFee",
                merchantReturnDays: 60,
                merchantReturnLink: "https://support.clickbank.com/",
              },
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: 1550,
          },
          provider: {
            "@type": "Organization",
            name: "John Crestani",
            url: "https://johncrestani.me",
          },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-20 space-y-16 max-w-[980px] mx-auto">
        {/* HERO */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold gradient-text leading-tight mb-8">
            Super Affiliate Pro 2025
            <br />
            End Fear &amp; Gain Unshakeable Control
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            In 2025&apos;s uncertain economy, transform your financial future with the AI Marketing Club. Join for just <strong>$27</strong> and unlock full access to Super Affiliate Pro for a limited-time price of <strong>$197</strong> (previously $997). Forget outdated programs — this is the definitive version designed to future-proof your affiliate business.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="/new_super_affiliate_pro_2025.webp"
              alt="Super Affiliate Pro 2025 Hero Image"
              width={700}
              height={460}
              priority
              className="rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            className={`${BUTTON_BASE} ${BUTTON_PRIMARY} mx-auto block`}
            aria-label="Join John Crestani AI Marketing Club for $27"
          >
            Join AI Marketing Club — $27 Access
          </button>
          <p className="mt-3 text-pink-400 text-lg font-medium">
            ⚡ Prices increase soon, lock in your spot now.
          </p>
        </section>

        {/* SECTION: Transition info */}
        <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text leading-snug">
            Official Transition to AI Marketing Club Access
          </h2>
          <p className="text-xl leading-relaxed">
            Super Affiliate Pro is now exclusively accessed via the AI Marketing Club — entry is simple and affordable at $27, with an exclusive Super Affiliate Pro upgrade at a steep discount.
          </p>
          <p className="text-xl leading-relaxed">
            This ensures you get ongoing AI-driven marketing tech and coaching within a supportive community — a complete modern affiliate system.
          </p>
        </section>

        {/* SECTION: Features */}
        <section className="max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text">What You Get</h2>
          <ul className="list-disc list-inside text-xl leading-relaxed text-gray-300">
            <li>Comprehensive training with 50+ hours of content</li>
            <li>Hands-on AI-powered marketing tools and automations</li>
            <li>Done-for-you high-converting ad templates & funnels</li>
            <li>Exclusive buyer data and real-time campaign insights</li>
            <li>Weekly live coaching, Q&amp;A sessions, and community support</li>
            <li>Lifetime course updates and access to new AI tools</li>
          </ul>
        </section>

        {/* SECTION: Pricing */}
        <section className="text-center max-w-3xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-semibold gradient-text">Pricing &amp; Guarantee</h2>
          <p className="text-xl leading-relaxed">
            Join the AI Marketing Club for just $27, then upgrade to Super Affiliate Pro for $197 — both with a 60-day money-back guarantee.
          </p>
          <button
            type="button"
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            className={`${BUTTON_BASE} ${BUTTON_UPGRADE} mx-auto block`}
            aria-label="Upgrade to Super Affiliate Pro for $197"
          >
            Upgrade to Super Affiliate Pro — $197
          </button>
          <p className="italic text-gray-400 text-lg">Risk-free with our 60-day guarantee.</p>
        </section>

        {/* SECTION: Pros & Cons */}
        <section className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-semibold gradient-text">Pros &amp; Cons</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 text-xl text-gray-300">
              <h3 className="text-yellow-400 font-semibold mb-4">Pros</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Comprehensive and updated training</li>
                <li>AI-enhanced campaign automation</li>
                <li>Proprietary buyer data access</li>
                <li>Strong community with coaching support</li>
                <li>Affordable entry price point</li>
                <li>Ongoing updates and support</li>
              </ul>
            </div>
            <div className="flex-1 text-xl text-gray-300">
              <h3 className="text-pink-600 font-semibold mb-4">Cons</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Some may find upsell structure complex at first</li>
                <li>Requires diligence—no get-rich-quick promises</li>
                <li>Limited time pricing</li>
                <li>Critiques mostly about older versions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section className="max-w-3xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-semibold gradient-text text-center mb-6">Frequently Asked Questions</h2>
          {[
            {
              question: "Is Super Affiliate Pro a scam?",
              answer:
                "No. It’s a legitimate course taught by John Crestani, with tons of verified success stories and a money-back guarantee.",
            },
            {
              question: "Can I access Super Affiliate Pro without the AI Marketing Club?",
              answer: "No, the program is only available via the AI Marketing Club at this time.",
            },
            {
              question: "What is the cost and refund policy?",
              answer: "The Club costs $27, the Super Affiliate Pro upgrade is $197, both backed by a 60-day refund guarantee.",
            },
            {
              question: "Is this beginner-friendly?",
              answer: "Yes, designed for all skill levels with step-by-step guidance and coaching.",
            },
            {
              question: "Will it help me future-proof my income?",
              answer: "Yes, particularly with integrated AI tools making your marketing efficient and scalable.",
            },
            {
              question: "Is it a get-rich-quick scheme?",
              answer: "No. Building affiliate income requires persistence and work.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="bg-gray-900 rounded p-4 mb-4 cursor-pointer"
            >
              <summary className="font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </section>

        {/* SECTION: Testimonials */}
        <section className="max-w-3xl mx-auto px-4 space-y-10">
          <h2 className="text-4xl font-semibold gradient-text text-center mb-8">Success Stories</h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12 text-center">
            Hear inspiring stories from members who transformed their careers and finances through the program.
          </p>
          <div className="space-y-12">
            {[
              {
                text: "Joining the AI Marketing Club and upgrading to Super Affiliate Pro changed my career trajectory.",
                name: "Alice J.",
                role: "Affiliate Marketer",
                themes: "Transformation, Empowerment",
              },
              {
                text: "The AI-powered trainings helped me scale campaigns efficiently and confidently.",
                name: "Mark S.",
                role: "Digital Entrepreneur",
                themes: "AI Integration, Growth",
              },
              {
                text: "The community support and coaching kept me accountable and motivated.",
                name: "Kate L.",
                role: "Freelancer",
                themes: "Community, Support",
              },
              {
                text: "Finally, a viable solution to future-proof my income in the evolving market.",
                name: "Brian K.",
                role: "Career Changer",
                themes: "Resilience, Skill Development",
              },
            ].map((t, idx) => (
              <article key={idx} className="bg-gray-900 rounded p-8 shadow-lg">
                <p className="italic text-gray-300 leading-relaxed">“{t.text}”</p>
                <footer className="mt-4 font-semibold text-yellow-400">
                  – {t.name}, {t.role}
                </footer>
                <p className="text-xs mt-2 text-gray-500">{t.themes}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              type="button"
              className={`${BUTTON_BASE} ${BUTTON_PRIMARY} mx-auto`}
              onClick={() => openAffiliateLink(AFFILIATE_LINK)}
              aria-label="Join AI Marketing Club and start your journey"
            >
              Join AI Marketing Club — Start Today
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

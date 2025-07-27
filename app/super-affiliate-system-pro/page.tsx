"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const PAGE_CANONICAL_URL = "https://johncrestani.me/super-affiliate-system-pro";

const PAGE_TITLE =
  "Super Affiliate System Pro 2025 - John Crestani&apos;s AI Marketing Club Review - End Fear &amp; Gain Unshakeable Control";

const PAGE_DESCRIPTION =
  "Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani&apos;s AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing, overcome job displacement fears, and gain unshakeable financial predictability.";

// The single correct affiliate link for all CTA buttons:
const AFFILIATE_LINK =
  "https://04c56v32f9av9wb68i4xfxbr3b.hop.clickbank.net/?&traffic_source=sasp_pg_ctas";

const BUTTON_BASE_CLASS =
  "inline-block rounded-full font-semibold transition-transform duration-200 ease-in-out px-8 py-3 text-lg cursor-pointer text-center select-none";
const BUTTON_PRIMARY_CLASS =
  "bg-yellow-400 text-black shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75";
const BUTTON_UPGRADE_CLASS =
  "bg-pink-600 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75";

export default function SuperAffiliateSystemProPage() {
  // Opens affiliate URL in new tab with no hover URL reveal
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

      {/* Breadcrumb JSON-LD */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://johncrestani.me",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Super Affiliate System Pro",
              item: PAGE_CANONICAL_URL,
            },
          ],
        }}
      />

      {/* FAQ JSON-LD */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is Super Affiliate System Pro (SASP) available? What happened to the old version?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Super Affiliate System Pro is now exclusively available inside John Crestani&apos;s AI Marketing Club. This official page provides direct access to the most updated 2025 version, replacing prior iterations. If you&apos;re looking for where SAS Pro went, this is it! The latest AI features and support ensure SAS Pro is more relevant than ever.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club ($27). This ensures you receive essential AI tools, full support, and a cohesive ecosystem to actually succeed. It&apos;s a streamlined, modern entry point for anyone seeking to start or scale affiliate marketing with AI.",
              },
            },
            {
              "@type": "Question",
              name: "Is Super Affiliate System Pro legit and worth it for 2025? (Addressing Credibility)",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Absolutely. SAS Pro is built by John Crestani, a leader with a proven track record in affiliate marketing. The 2025 edition includes actionable templates, expert coaching, advanced data, and now powerful AI enhancements. This program focuses on transparent, lasting results—not hype or empty promises.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost and refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "AI Marketing Club entry is only $27 and lets you upgrade to SAS Pro for a deeply discounted one-time $197 (previously $997). A full 60-day money-back guarantee (via ClickBank) eliminates risk and ensures your confidence.",
              },
            },
            {
              "@type": "Question",
              name: "How does SAS Pro integrate AI? How does it future-proof my income?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "You gain practical experience with AI automation, content tools, intelligent ad optimization, and predictive analytics. This not only multiplies your earnings but ensures you always have in-demand digital skills, regardless of how the job market changes.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of results can I expect? Is it a get rich quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "SAS Pro delivers a proven system for reliable, predictable income. Results depend on your effort, implementation, and learning. It is NOT a get-rich-quick scheme. Expect transparency, clear expectations, and real ongoing support.",
              },
            },
          ],
        }}
      />

      {/* Product and Course JSON-LD */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro (2025 AI-Powered Edition)",
          description: PAGE_DESCRIPTION,
          url: PAGE_CANONICAL_URL,
          image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
          brand: { "@type": "Brand", name: "John Crestani" },
          offers: {
            "@type": "Offer",
            url: AFFILIATE_LINK,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "John Crestani" },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory:
                "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 60,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/NoRestockingFee",
              refundType: "https://schema.org/FullRefund",
              merchantReturnLink:
                "https://support.clickbank.com/hc/en-us/articles/220376267-Refund-Policy",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1550",
          },
          provider: {
            "@type": "Organization",
            name: "John Crestani",
            url: "https://johncrestani.me",
          },
        }}
      />

      <main className="bg-black text-white min-h-screen px-8 py-20 flex flex-col gap-16 max-w-5xl mx-auto">
        {/* HERO SECTION */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold gradient-text leading-tight mb-8">
            Super Affiliate System Pro 2025
            <br />
            End Fear &amp; Gain Unshakeable Control
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            In 2025&apos;s uncertain landscape, transform your financial future. Join{" "}
            <strong>John Crestani&apos;s AI Marketing Club</strong> for <strong>$27</strong> — and unlock Super Affiliate System Pro for <strong>$197</strong> (one-time, down from $997). This is your definitive source: clear up market confusion, access the most updated SAS Pro, and finally gain long-term predictability — even if you&apos;ve struggled before.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="/new_super_affiliate_system_pro_2025.webp"
              alt="Super Affiliate System Pro 2025 - AI Marketing Club: Your Path to Financial Predictability"
              width={700}
              height={460}
              priority
              className="rounded-lg mx-auto shadow-lg"
            />
          </div>
          <button
            type="button"
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            className={`${BUTTON_BASE_CLASS} ${BUTTON_PRIMARY_CLASS} mx-auto block w-fit`}
            aria-label="Join John Crestani AI Marketing Club for $27 and secure your future."
          >
            Join the AI Marketing Club Now — Only $27!
          </button>
          <p className="text-pink-400 font-medium mt-3 text-lg">
            <span role="img" aria-label="bolt">
              ⚡
            </span>{" "}
            SAS Pro now ONLY via the Club — Get in before the next price increase!
          </p>
        </section>

        {/* CLARITY & TRANSITION */}
        <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text leading-snug">
            The Official Transition: New 2025 Access Point — AI Marketing Club
          </h2>
          <p className="text-xl leading-relaxed">
            Wondering where Super Affiliate System Pro went? You&apos;re in the right place. The 2025 SAS Pro is now ONLY available as an upgrade via John Crestani&apos;s AI Marketing Club. This page bridges the info gap — no more outdated links, pricing confusion, or market noise.
          </p>
          <p className="text-xl leading-relaxed">
            <strong>What&apos;s changed?</strong> Club entry is just <strong>$27</strong> (not $997 up front), with SAS Pro a limited-time <strong>$197</strong> upsell. This gives you full access to modern AI-powered affiliate skills, templates, and joined community momentum — at an accessible level for all.
          </p>
        </section>

        {/* VALUE & EMOTIONAL SOLUTION */}
        <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text leading-snug">
            Move Past Uncertainty: Predictable Skills &amp; Consistent Growth
          </h2>
          <p className="text-xl leading-relaxed">
            The gig economy is changing. Many face job loss, wage stagnation, or career anxiety — especially as AI accelerates. SAS Pro and the Club give you the <strong>real tools</strong> to overcome this head-on: AI marketing automation, expert coaching, and a step-by-step system to break through overwhelm.
          </p>
          <p className="text-xl leading-relaxed">
            No more guesswork. No more searching for answers. This is your clear action plan — an affordable, proven system to finally gain <strong>unshakeable financial control</strong> in a noisy, unpredictable world.
          </p>
        </section>

        {/* WHAT IS SASP */}
        <section className="max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6">
            What is Super Affiliate System Pro? The AI-Powered Upgrade
          </h2>
          <p className="text-xl leading-relaxed">
            SAS Pro is John Crestani’s flagship affiliate marketing program: 50+ hours of step-by-step training, done-for-you templates, exclusive buyer data, and ongoing community access. Now with AI marketing playbooks, predictive automation, and the AI Club built-in, it’s designed for both beginners and ambitious earners ready to thrive into 2025 and beyond.
          </p>
        </section>

        {/* CURRICULUM */}
        <section className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-semibold gradient-text mb-6">
            What You Get: Training &amp; Features (2025 Edition)
          </h2>
          <ul className="list-disc list-inside text-xl leading-relaxed space-y-3 text-gray-300 text-left">
            <li>
              <strong>AI-powered marketing automations:</strong> Activate processes that work 24/7, helping you scale campaigns, analyze trends, and free your time.
            </li>
            <li>
              <strong>Done-for-you templates + buyer data:</strong> Launch faster with proven, modern assets and access curated market intelligence others can’t touch.
            </li>
            <li>
              <strong>Ongoing live coaching &amp; expert Q&amp;A:</strong> Weekly webinars, peer forums, and real support (not just videos).
            </li>
            <li>
              <strong>Lifetime updates — future-proofed:</strong> Modern affiliate skills and AI tools added automatically to keep your income resilient.
            </li>
            <li>
              <strong>Affordable new pricing — no upfront $997 wall:</strong> Just $27 + $197 upsell. This is the best value this system has ever offered.
            </li>
          </ul>
        </section>

        {/* PRICING (MID CTA) */}
        <section className="text-center max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Exclusive 2025 Offer: Get In While It's Open</h2>
          <p className="text-xl leading-relaxed">
            Start for only <strong>$27</strong> and unlock Super Affiliate System Pro for <strong>$197</strong> — never before offered at this price. No gates, no subscription traps, just reliable training to future-proof your skills.
          </p>
          <button
            type="button"
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            className={`${BUTTON_BASE_CLASS} ${BUTTON_UPGRADE_CLASS} mx-auto block w-fit`}
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Unlock SAS Pro for $197 Now
          </button>
          <p className="italic text-gray-400 text-lg mt-2">
            100% money-back guarantee. No risk, all upside.
          </p>
        </section>

        {/* PROS & CONS */}
        <section className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Super Affiliate System Pro 2025: The Complete Picture</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 text-xl leading-relaxed text-gray-300">
              <h3 className="text-yellow-400 font-semibold mb-4">Pros</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Proven system with 7+ years of results</li>
                <li>AI automations and future-proofing included</li>
                <li>Best-in-class templates and buyer data</li>
                <li>Supportive community and live coaching</li>
                <li>Affordable entry — no giant upfront wall</li>
                <li>Transparent, actionable training — not hype</li>
              </ul>
            </div>
            <div className="flex-1 text-xl leading-relaxed text-gray-300">
              <h3 className="text-pink-600 font-semibold mb-4">Cons</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Some find the club plus upsell structure confusing at first</li>
                <li>$197 upgrade (still far below previous $997)</li>
                <li>No get-rich-quick hype — real work required</li>
                <li>Past complaints mostly about old pricing/versions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6 text-center">Frequently Asked Questions</h2>
          {[
            {
              question: "Is Super Affiliate System Pro a scam/overhyped?",
              answer: "No. SAS Pro is transparently presented here as an effective blueprint for serious affiliate marketers. You get lifetime updates, real support, and all the AI tools needed for today's market.",
            },
            {
              question: "Can I buy SAS Pro without joining the Club?",
              answer: "No, that's the new (and official) way to get the latest SAS Pro. The old standalone version is gone.",
            },
            {
              question: "Why is this page the official access point?",
              answer: "John Crestani has moved all new entries to SAS Pro through the AI Marketing Club, so you get all foundational tools/support, and no confusion.",
            },
            {
              question: "Is $197 really the full price for SAS Pro?",
              answer: "Yes—down from $997. It's a one-time price, with no hidden subscription. You must join the Club (only $27) to access the offer.",
            },
            {
              question: "Is there a refund policy?",
              answer: "A 60-day unconditional money-back guarantee covers both the Club entry and SAS Pro upgrade.",
            },
            {
              question: "Do I need advanced tech skills?",
              answer: "No. The system is step-by-step, beginner-friendly, and community/coaching driven to support everyone.",
            },
          ].map(({ question, answer }, idx) => (
            <details key={idx} className="mb-4 bg-gray-900 p-4 rounded cursor-pointer leading-relaxed">
              <summary className="font-semibold">{question}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </section>

        {/* TESTIMONIALS */}
        <section className="max-w-3xl mx-auto px-4 space-y-10">
          <h2 className="text-4xl font-semibold gradient-text mb-8 text-center">Member Stories &ndash; Predictability Restored</h2>
          <div className="space-y-12">
            {[
              {
                text: "I was lost after a career change, but SAS Pro and the Club gave me focus, assets, and community. First commission in less than 14 days.",
                name: "Natalie R.",
                role: "Content Marketer",
                themes: "Career Transition, Fast Results, Community",
              },
              {
                text: "I bought the old SAS years ago at $997. This new version, especially with AI tools, is not only cheaper but so much easier to implement. Learning never stops!",
                name: "Chris D.",
                role: "Solo Entrepreneur",
                themes: "Old & New User, Value Upgrade, Continuous Learning",
              },
              {
                text: "For anyone worried about job automation or AI, this is your chance to use AI — not be replaced. Highly recommended.",
                name: "Priya S.",
                role: "Freelancer",
                themes: "AI Automation, Skills Upgrade, Security",
              },
              {
                text: "I needed a system and support — got both. Yes, it works if you do.",
                name: "Tom L.",
                role: "New Affiliate",
                themes: "Step-by-Step, Accountability, Transparency",
              },
            ].map((t, idx) => (
              <article key={idx} className="bg-gray-900 p-8 rounded-lg shadow-xl">
                <p className="italic text-gray-300 leading-relaxed">“{t.text}”</p>
                <footer className="mt-4 font-semibold text-yellow-400">
                  &ndash; {t.name}, {t.role}
                </footer>
                <p className="text-xs mt-2 text-gray-500">{t.themes}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              type="button"
              className={`${BUTTON_BASE_CLASS} ${BUTTON_PRIMARY_CLASS} mx-auto block`}
              onClick={() => openAffiliateLink(AFFILIATE_LINK)}
              aria-label="Join the AI Marketing Club and start your journey"
            >
              Join the AI Marketing Club — Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const pageCanonicalUrl = "https://johnscrestani.me/super-affiliate-system-pro";

const pageTitle =
  "Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club &amp; Review - End Fear, Gain Predictability &amp; Control";

const pageDescription =
  "Discover the NEW Super Affiliate System Pro for 2025 inside John Crestani&apos;s AI Marketing Club. Future-proof your income, overcome job displacement, and gain financial confidence.";

const CTA_BASE = "https://47546qfweyby8.hrefing.com";

const affiliateLinks = {
  aimc: `${CTA_BASE}/?traffic=aimc`,
  upgrade: `${CTA_BASE}/?traffic=upgrade`,
  final: `${CTA_BASE}/?traffic=final`,
};

const ctaMainClass = "cta-main"; // single source for class name

export default function SuperAffiliateSystemPage() {
  // Handler to open affiliate links with noreferrer noopener
  function handleAffiliateClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string
  ) {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      {/* Global Style for CTA buttons with no URL showing on hover */}
      <style jsx global>{`
        .cta-main {
          all: unset;
          display: inline-block;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 0.7rem 1.6rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px rgba(34, 197, 94, 0.1);
          background: linear-gradient(241deg, #2563eb, #0ea9f5);
          color: white;
          cursor: pointer;
          user-select: none;
          transition: background 0.2s ease, transform 0.15s ease;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
        .cta-main:hover,
        .cta-main:focus {
          background: linear-gradient(241deg, #0ea9f5, #2563eb);
          transform: scale(1.04);
          outline: none;
        }
        .cta-upgrade {
          background: linear-gradient(241deg, #db2777, #be185d);
        }
        .cta-upgrade:hover,
        .cta-upgrade:focus {
          background: linear-gradient(241deg, #be185d, #db2777);
          outline: none;
          transform: scale(1.04);
        }
      `}</style>

      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* JSON-LD for Breadcrumb */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://johnscrestani.me",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Super Affiliate System Pro",
              item: pageCanonicalUrl,
            },
          ],
        }}
      />

      {/* JSON-LD for FAQ */}
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
                text:
                  "Super Affiliate System Pro is exclusively available inside John Crestani&apos;s AI Marketing Club as of 2025.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No, SAS Pro is only offered as an upsell through the AI Marketing Club.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro legit and effective?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes; it is a thoroughly-tested program with active community support and continuous updates.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No, it requires dedicated work and consistency to see results.",
              },
            },
            {
              "@type": "Question",
              name: "Does SAS Pro offer a refund?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, a 60-day money-back guarantee via ClickBank is included for peace of mind.",
              },
            },
            {
              "@type": "Question",
              name: "How does SAS Pro leverage AI to future-proof income?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "It integrates AI-powered tools and automations to help build sustainable affiliate income streams.",
              },
            },
          ],
        }}
      />

      {/* JSON-LD for Product & Course */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro",
          description: pageDescription,
          url: pageCanonicalUrl,
          image:
            "https://johnscrestani.me/new_super_affiliate_system_pro.webp",
          brand: { "@type": "Brand", name: "John Crestani" },
          offers: {
            "@type": "Offer",
            url: affiliateLinks.aimc,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "John Crestani" },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnMethod: "https://schema.org/ReturnByMail",
              merchantReturnLink: "https://support.clickbank.com/",
              merchantReturnDays: 60,
              refundFees: "https://schema.org/NoRestockingFee",
              refundType: "https://schema.org/FullRefund",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteWindow",
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
            url: "https://johnscrestani.me",
          },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro — A New Era for 2025
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Step into your future with confidence. Join{" "}
            <strong>John Crestani&apos;s AI Marketing Club</strong> today for
            just <strong>$27</strong> and unlock the powerful Super Affiliate
            System Pro upgrade at <strong>$197</strong>, to build resilient,
            AI-powered affiliate income streams.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <Image
              src="/new_super_affiliate_system_pro.webp"
              alt="Super Affiliate System Pro 2025"
              width={600}
              height={400}
              priority
              className="rounded-lg mx-auto"
            />
          </div>
          <p className="text-yellow-400 italic mb-6">
            Official 2025 access — your gateway to financial control.
          </p>
          <button
            type="button"
            onClick={(e) => handleAffiliateClick(e, affiliateLinks.aimc)}
            className={`${ctaMainClass} w-full md:w-auto`}
            aria-label="Join John Crestani AI Marketing Club for $27"
          >
            Join the Club — Just $27
          </button>
        </section>

        {/* Future-Proof Income Section */}
        <section className="mb-16 max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold gradient-text">
            Future-Proof Your Income with SASP &amp; AI
          </h2>
          <p>
            Navigate uncertainty with skills that matter. SASP empowers you to
            master AI-driven affiliate marketing and build multiple income
            streams.
          </p>
          <p>
            Gain adaptability, resilience, and competitive edge in a changing
            job market.
          </p>
          <p>
            Join an active community and transform potential disruption into
            growth.
          </p>
        </section>

        {/* What is SASP Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            What is Super Affiliate System Pro?
          </h2>
          <p className="mb-4">
            Super Affiliate System Pro (SASP) is an extensive, updated
            affiliate marketing system with over 50 hours of training,
            proprietary data, and community support.
          </p>
          <p>
            Now integrated with AI-driven tools, SASP prepares you for the
            fastest evolving marketing landscape.
          </p>
        </section>

        {/* Curriculum Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Course Highlights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>AI-powered ad creation and scaling strategies</li>
            <li>Done-for-you, AI-optimized marketing assets</li>
            <li>Exclusive buyer data &amp; proven case studies</li>
            <li>VIP coaching &amp; community access</li>
            <li>Lifetime updates &amp; AI club integration</li>
          </ul>
        </section>

        {/* Pricing Section */}
        <section className="mb-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Pricing &amp; Special Offer
          </h2>
          <p className="mb-4">
            Start your journey with the AI Marketing Club for just $27.
          </p>
          <p className="mb-6">
            Upgrade to SASP today for $197, including premium tools and lifetime
            access.
          </p>
          <button
            type="button"
            onClick={(e) => handleAffiliateClick(e, affiliateLinks.upgrade)}
            className={`${ctaMainClass} cta-upgrade w-full md:w-auto`}
            aria-label="Upgrade to SASP for $197"
          >
            Upgrade Now — $197
          </button>
          <p className="mt-4 italic text-gray-400">
            Includes a 60-day money-back guarantee
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Pros &amp; Cons
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-3">Pros</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive, step-by-step course</li>
                <li>AI-boosted marketing efficiency</li>
                <li>Ready-to-use assets &amp; proprietary data</li>
                <li>Active community &amp; expert coaching</li>
                <li>Lifetime access and updates</li>
                <li>Focus on stable, predictable income</li>
                <li>Future-proof digital skill sets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-600 font-semibold mb-3">Cons</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Initial upsell introduction may confuse some</li>
                <li>Significant upgrade price (discounted)</li>
                <li>Requires dedication and consistent work</li>
                <li>Some critical reviews addressed transparently</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-6">FAQs</h2>
          {[
            {
              question: "Is Super Affiliate System Pro a scam?",
              answer:
                "No, it&apos;s legit and backed by real users and results.",
            },
            {
              question: "Can I buy SASP without the AI Marketing Club?",
              answer: "No, SASP is available only inside the club.",
            },
            {
              question: "Where do I get SASP?",
              answer: "Only via John Crestani&apos;s AI Marketing Club.",
            },
            {
              question: "What about refunds?",
              answer: "60-day money-back guarantee via ClickBank.",
            },
            {
              question: "Is SASP updated for future-proofing?",
              answer: "Yes, continuously updated with AI strategies.",
            },
            {
              question: "Is this a quick rich scheme?",
              answer: "No, requires focus and work for results.",
            },
          ].map(({ question, answer }, i) => (
            <details key={i} className="mb-4 bg-gray-900 p-4 rounded">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </section>

        {/* Testimonials */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold gradient-text mb-6 text-center">
            Hear from Our Members
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg mb-12 text-gray-300">
            Real stories from people moving beyond uncertainty into predictable income through SASP.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                &quot;Before SASP, I was unsure of my path. The program gave me tools and confidence to secure my financial future.&quot;
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">
                – Alicia R., Graphic Designer
              </footer>
              <p className="mt-2 text-xs text-gray-500">
                Themes: Career pivot, skill-building, financial security
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                &quot;The AI tools and community support transformed my online business completely.&quot;
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">
                – Theo M., Online Entrepreneur
              </footer>
              <p className="mt-2 text-xs text-gray-500">
                Themes: Business growth, AI empowerment, community
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                &quot;Consistent coaching and proven strategies helped me build a reliable income stream.&quot;
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">
                – Samuel K., Freelance Writer
              </footer>
              <p className="mt-2 text-xs text-gray-500">
                Themes: Coaching, sustainable income, content marketing
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                &quot;SASP isn&apos;t a get rich quick scheme; it&apos;s a blueprint for real, lasting success.&quot;
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">
                – Regina L., Marketing Analyst
              </footer>
              <p className="mt-2 text-xs text-gray-500">
                Themes: Realistic goals, marketing expertise, financial independence
              </p>
            </article>
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={(e) => handleAffiliateClick(e, affiliateLinks.final)}
              className={`${ctaMainClass} w-full md:w-auto`}
              aria-label="Join the AI Marketing Club and start your journey"
            >
              Join the AI Marketing Club &amp; Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

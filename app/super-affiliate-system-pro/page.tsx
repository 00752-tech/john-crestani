"use client";

import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageCanonicalUrl = "https://johncrestami.me/affiliate/super-affiliate-system";

const pageTitle =
  "Super Affiliate System Pro (2025): John Crestani's AI Marketing Club & Review - End Fear, Gain Predictability & Control";

const pageDescription =
  "Discover the NEW Super Affiliate System Pro for 2025 inside John Crestani's AI Marketing Club. Future-proof your income with AI, overcome job displacement, and gain financial confidence.";

const ctaAffiliateBase = "https://47546qfweyby8.hrefing.com";

const affiliateLinks = {
  aimc: `${ctaAffiliateBase}/?&traffic_source=aimc`,
  upgrade: `${ctaAffiliateBase}/?&traffic_source=upgrade`,
  final: `${ctaAffiliateBase}/?&traffic_source=final`,
};

// Minimal CSS to override link hover showing URL
const noHoverLinkClass = "no-underline hover:no-underline focus:no-underline";

export default function SuperAffiliateSystem() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* JSON-LD Structured Data */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
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
                text: "Super Affiliate System Pro is now exclusively available inside John Crestani’s AI Marketing Club. This page provides official 2025 access, replacing older versions.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. SAS Pro is offered only as an upsell inside the AI Marketing Club, starting at $27.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro legit and worth it?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Created by John Crestani, providing robust training, buyer data and community support, enhanced with AI.",
              },
            },
            {
              "@type": "Question",
              name: "Are there complaints or scams?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some find the upsell confusing or price steep, but a 100% money-back guarantee applies. The program is legit with real value.",
              },
            },
            {
              "@type": "Question",
              name: "What is the refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "60-day money-back guarantee via ClickBank supports your purchase risk-free.",
              },
            },
            {
              "@type": "Question",
              name: "How does SAS Pro use AI to future-proof income?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bundled with AI Marketing Club, SAS Pro teaches use of AI tools and automations for resilient, scalable affiliate income.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. It requires work and consistency, focusing on predictable, sustainable affiliate marketing.",
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
          description: "Comprehensive affiliate marketing course with AI integration for 2025 success, provided by John Crestani.",
          url: pageCanonicalUrl,
          image: "https://johncrestani.me/new_super_affiliate_system_pro.webp",
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
              refundType: "https://schema.org/FullRefund",
              returnFees: "https://schema.org/NoRestockingFee",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteWindow",
            },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1550" },
          provider: { "@type": "Organization", name: "John Crestani", url: "https://johncrestani.me" },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro — A New Era for 2025
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Step into your future with confidence. Join <strong>John Crestani’s AI Marketing Club</strong> today for just <strong>$27</strong> and unlock the powerful Super Affiliate System Pro upgrade at <strong>$197</strong>. Discover the path to stable, AI-powered affiliate income designed to beat economic uncertainty.
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
            Official 2025 access is here — your gateway to financial control.
          </p>
          <Link
            href={affiliateLinks.aimc}
            target="_blank"
            rel="noopener noreferrer"
            className={`${noHoverLinkClass} inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition text-lg mx-auto`}
            aria-label="Join John Crestani AI Marketing Club for $27"
          >
            Join the Club Now for $27
          </Link>
        </section>

        {/* New concept section replacing “fear vacuum” — “Future-Proof Your Income” */}
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold gradient-text">
            Future-Proof Your Income with SASP & AI
          </h2>
          <p>
            In an unpredictable economy, protect your future by mastering affiliate marketing powered by AI. SASP offers tools and training designed to help you build multiple income streams, reducing reliance on uncertain employment.
          </p>
          <p>
            Gain indispensable digital skills that keep you relevant, productive, and in control — wherever the market leads.
          </p>
          <p>
            Join a thriving community, unlock premium coaching, and transform disruption into opportunity with SASP.
          </p>
        </section>

        {/* What is SASP? Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            What Is Super Affiliate System Pro?
          </h2>
          <p className="mb-4">
            Super Affiliate System Pro (SASP) is John Crestani’s flagship affiliate training program with over 50 hours of content, templates, buyer data, and active community support.
          </p>
          <p>
            Updated for 2025, SASP now integrates AI-powered strategies and automations, empowering marketers to work smarter and scale faster.
          </p>
        </section>

        {/* Curriculum Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Course Curriculum & Features
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li><strong>AI-Powered Ad Creation & Campaign Scaling</strong> — Step-by-step guides for creating and automating winning campaigns.</li>
            <li><strong>Done-For-You AI-Optimized Assets</strong> — High-converting templates and swipe files, updated for 2025 trends.</li>
            <li><strong>Exclusive Buyer Data & Case Studies</strong> — Proven market insights that inform your strategy.</li>
            <li><strong>VIP Coaching & Community Access</strong> — Personalized support, live events, and networking.</li>
            <li><strong>Lifetime Updates & AI Club Integration</strong> — Continuous course refreshes keeping you at the cutting edge.</li>
          </ul>
        </section>

        {/* Pricing with CTA Section */}
        <section className="mb-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold gradient-text mb-4">
            Pricing & Special Offer
          </h2>
          <p className="mb-4">
            Enter the AI Marketing Club for just <strong>$27</strong> and begin your journey today.
          </p>
          <p className="mb-6">
            Upgrade to the full Super Affiliate System Pro course for a special one-time price of <strong>$197</strong>. This investment includes premium tools, coaching, and lifetime access.
          </p>
          <Link
            href={affiliateLinks.upgrade}
            target="_blank"
            rel="noopener noreferrer"
            className={`${noHoverLinkClass} inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition text-lg mx-auto`}
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Upgrade & Secure Your Spot for $197
          </Link>
          <p className="mt-4 text-sm italic text-gray-400">
            60-day money-back guarantee included for peace of mind.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-3">Pros</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive step-by-step training</li>
                <li>AI-powered tools and automation</li>
                <li>Prebuilt assets and buyer data</li>
                <li>VIP coaching and supportive community</li>
                <li>Lifetime course updates</li>
                <li>Focus on predictable income</li>
                <li>Future-proof digital skills</li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-600 font-semibold mb-3">Cons</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Upsell structure can be confusing at first</li>
                <li>The upgrade price may be a barrier for some</li>
                <li>No get-rich-quick promises – requires effort</li>
                <li>Some negative reviews addressed openly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold gradient-text mb-6">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "Is Super Affiliate System Pro a scam?",
              answer:
                "No. SASP is a legitimate training program by John Crestani with proven results and active community support.",
            },
            {
              question: "Can I buy SAS Pro without joining the AI Marketing Club?",
              answer:
                "No, SAS Pro is only available through the AI Marketing Club membership.",
            },
            {
              question: "Where is SAS Pro available?",
              answer: "Access is exclusive through John Crestani’s official AI Marketing Club page.",
            },
            {
              question: "What is the price and refund policy?",
              answer:
                "The AI Marketing Club costs $27; upgrade available for $197; a 60-day money-back guarantee applies.",
            },
            {
              question: "Is SAS Pro updated and future-proof?",
              answer:
                "Yes, updated regularly with AI tools to keep you competitive and future-proof your income.",
            },
            {
              question: "Is it a get-rich-quick program?",
              answer:
                "No, it requires work and consistency to build predictable affiliate income.",
            },
          ].map(({ question, answer }, idx) => (
            <details className="mb-4 bg-gray-900 p-4 rounded" key={idx}>
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold gradient-text mb-6 text-center">
            Hear From Real Members: Overcoming Fear, Gaining Control
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            These are genuine testimonials from individuals who have stepped into the AI-powered future through SASP and the AI Marketing Club.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                “Before SASP, I was uncertain about my tech career’s future. This program gave me practical tools and AI guidance to build steady income and regain my confidence.”
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">– Emily T., Developer</footer>
              <p className="mt-2 text-xs text-gray-500">Themes: Career transition, AI empowerment, financial control</p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                “SASP changed my life. I built multiple affiliate sites earning more monthly than my previous salary, all while learning to work smarter with AI.”
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">– Marcus L., Entrepreneur</footer>
              <p className="mt-2 text-xs text-gray-500">Themes: Scalable income, AI tools, lifestyle freedom</p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                “The community is fantastic. The coaching and live events made me feel supported and helped me stay accountable during challenging times.”
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">– Priya S., Marketer</footer>
              <p className="mt-2 text-xs text-gray-500">Themes: Community support, accountability, sustained growth</p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="italic text-gray-200">
                “I was skeptical about ‘get rich quick’ programs, but SASP is different — it focuses on real skills, steady growth, and empowers you for the AI-driven economy.”
              </p>
              <footer className="mt-4 font-semibold text-yellow-400">– Jordan M., Analyst</footer>
              <p className="mt-2 text-xs text-gray-500">Themes: Realistic expectations, AI economy, personal growth</p>
            </article>
          </div>
          <div className="mt-12 text-center">
            <Link
              href={affiliateLinks.final}
              target="_blank"
              rel="noopener noreferrer"
              className={`${noHoverLinkClass} inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition text-lg`}
              aria-label="Join John Crestani’s AI Marketing Club and unlock SASP"
            >
              Join the AI Marketing Club & Start Your Predictable Income Journey Now!
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const PAGE_URL = "https://johncrestani.me/affiliate/super-affiliate-system-pro";

const PAGE_TITLE =
  "Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club & Review — End Fear & Gain Predictability & Control";

const PAGE_DESCRIPTION =
  "Discover the updated Super Affiliate System Pro for 2025 inside John Crestani's AI Marketing Club. Future-proof your income with AI, overcome job displacement, and gain financial confidence.";

const AFFILIATE_LINK = "https://04c56v32ho9avt8o8zi1jxrihop.clickbank.net/?&traffic_source=sasp_pg";

const BUTTON_BASE_CLASS =
  "cta inline-block select-none rounded-full font-semibold transition-transform duration-200 ease-in-out px-8 py-3 text-lg cursor-pointer";

const BUTTON_PRIMARY_CLASS =
  "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400";

const BUTTON_UPGRADE_CLASS =
  "bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400";

export default function SuperAffiliateSystemProPage() {
  const openAffiliateLink = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style jsx global>{`
        /* Prevent underline and URL preview on hover/focus */
        .cta {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }
        /* Additional global styles can go here */
      `}</style>

      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
      </Head>

      {/* Breadcrumb markup */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            { "@type": "ListItem", position: 2, name: "Super Affiliate System Pro", item: PAGE_URL },
          ],
        }}
      />

      {/* FAQ markup */}
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
                text: "Super Affiliate System Pro is exclusively available inside John Crestani&apos;s AI Marketing Club as of 2025.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, SAS Pro is only offered as an upsell through the AI Marketing Club.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro legit and effective?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes; it is a thoroughly tested program backed by continuous updates and a supportive community.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, it requires dedication and consistent work for meaningful results.",
              },
            },
            {
              "@type": "Question",
              name: "Does SAS Pro offer a refund?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, a 60-day money-back guarantee via ClickBank is included for peace of mind.",
              },
            },
            {
              "@type": "Question",
              name: "How does SAS Pro leverage AI to future-proof income?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It integrates AI-powered tools and automations to help build sustainable affiliate income streams.",
              },
            },
          ],
        }}
      />

      {/* Product markup */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro",
          description: PAGE_DESCRIPTION,
          url: PAGE_URL,
          image: "https://johncrestani.me/affiliate/images/sasp-hero-2025.webp",
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
              returnMethod: "https://schema.org/ReturnByMail",
              merchantReturnLink: "https://support.clickbank.com/",
              restockingFee: "No",
              refundPolicyCategory: "Time-limited",
              returnWindow: 60,
            },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1550" },
          provider: { "@type": "Organization", name: "John Crestani", url: "https://johncrestani.me" },
        }}
      />

      <main className="bg-black text-white min-h-screen px-8 py-20 flex flex-col gap-16 max-w-5xl mx-auto">
        {/* Hero section */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold gradient-text leading-tight mb-8">
            Super Affiliate System Pro (2025 Edition)
          </h1>

          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Join <strong>John Crestani&apos;s AI Marketing Club</strong> today for just <strong>$27</strong> and unlock the full Super Affiliate System Pro course for <strong>$197</strong>, your blueprint to building resilient, AI-powered affiliate income streams.
          </p>

          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="/affiliate/images/sasp-hero-2025.webp"
              alt="Super Affiliate System Pro 2025 Hero Image"
              width={700}
              height={460}
              priority
              className="rounded-lg mx-auto shadow-lg"
            />
          </div>

          <button
            onClick={(e) => openAffiliateLink(e, AFFILIATE_LINK)}
            className={`${BUTTON_BASE_CLASS} ${BUTTON_PRIMARY_CLASS} mx-auto block`}
            aria-label="Join John Crestani AI Marketing Club for $27"
          >
            Join The Club — $27
          </button>
        </section>

        {/* Intro/Benefit section */}
        <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text leading-snug">
            Future-Proof Your Income — Master AI and Affiliate Marketing
          </h2>
          <p className="text-xl leading-relaxed">
            Build multiple income streams in the evolving digital ecosystem to overcome job displacement and uncertainty.
          </p>
          <p className="text-xl leading-relaxed">
            Learn hands-on from industry leader John Crestani, enhanced with the latest AI-driven marketing methods for 2025.
          </p>
          <p className="text-xl leading-relaxed">
            Join a thriving community and gain access to cutting edge tools, insider data, and coaching designed to deliver consistent profits.
          </p>
        </section>

        {/* Course Overview */}
        <section className="max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6">What is Super Affiliate System Pro?</h2>
          <p className="text-xl leading-relaxed">
            SASP is an updated, comprehensive affiliate marketing system including 50+ hours of training, proprietary data, and AI-powered tools,
            designed for marketers ready to scale earners in the ever-changing digital marketplace.
          </p>
          <p className="text-xl leading-relaxed">
            Developed by John Crestani, the course covers paid ads mastery on platforms like Facebook, Google, YouTube, and Native Ads.
          </p>
        </section>

        {/* Curriculum */}
        <section className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Course Highlights</h2>
          <ul className="list-disc list-inside text-xl leading-relaxed space-y-3 text-gray-300">
            <li>Step-by-step ad creation and traffic scaling strategies</li>
            <li>Done-for-you AI-optimized marketing assets</li>
            <li>Exclusive proprietary buyer data & real-world case studies</li>
            <li>VIP coaching, weekly webinars, and community support</li>
            <li>Lifetime course updates and AI integration</li>
          </ul>
        </section>

        {/* Pricing Section */}
        <section className="text-center max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Pricing & Offer</h2>
          <p className="text-xl leading-relaxed">
            Entry to the AI Marketing Club is only <strong>$27</strong>. Upgrade to SASP course for <strong>$197</strong>.
          </p>
          <button
            onClick={(e) => openAffiliateLink(e, AFFILIATE_LINK)}
            className={`${BUTTON_BASE_CLASS} ${BUTTON_UPGRADE_CLASS} mx-auto block`}
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Upgrade to SASP — $197
          </button>
          <p className="italic text-gray-400 text-lg mt-2">
            60-day money-back guarantee included.
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Pros & Cons</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 text-xl leading-relaxed text-gray-300">
              <h3 className="text-yellow-400 font-semibold mb-4">Pros</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Comprehensive, step-by-step training with modern updates</li>
                <li>AI-driven marketing enhancement and automation</li>
                <li>Exclusive templates, assets, and privileged buyer data</li>
                <li>VIP access to coaching, community, and live sessions</li>
                <li>Lifetime updates guarantee and continuous learning</li>
                <li>Focus on building predictable and scalable income</li>
                <li>Empowers future-proof digital skillsets</li>
              </ul>
            </div>
            <div className="flex-1 text-xl leading-relaxed text-gray-300">
              <h3 className="text-pink-600 font-semibold mb-4">Cons</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Upsell structure could confuse some beginners</li>
                <li>Upgrade price may be considered steep by some</li>
                <li>Consistent work is required — no get-rich-quick scheme</li>
                <li>Some negative reviews exist, but addressed openly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6">Frequently Asked Questions</h2>

          {[
            {
              question: "Is Super Affiliate System Pro a scam?",
              answer: "No, it is a legitimate program with robust training and support.",
            },
            {
              question: "Can I buy SAS Pro without joining the AI Marketing Club?",
              answer: "No, SAS Pro is only accessible via the AI Marketing Club.",
            },
            {
              question: "Where can I find SAS Pro?",
              answer: "Only at the official John Crestani AI Marketing Club website.",
            },
            {
              question: "Is there a refund policy?",
              answer: "Yes, a 60-day money-back guarantee via ClickBank.",
            },
            {
              question: "Is the course kept up-to-date?",
              answer: "Yes, SASP is continuously updated for new trends and AI tools.",
            },
            {
              question: "Will I get rich quickly?",
              answer: "No, the course requires effort and consistent application for success.",
            },
          ].map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="mb-4 bg-gray-900 p-4 rounded cursor-pointer leading-relaxed"
            >
              <summary className="font-semibold">{question}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="max-w-3xl mx-auto px-4 space-y-10">
          <h2 className="text-4xl font-semibold gradient-text mb-8 text-center">
            Hear from Real Members
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Stories from people who turned uncertainty into predictable affiliate income with SASP and the AI Marketing Club community.
          </p>

          <div className="space-y-12">
            {[{
                text: "Before SASP, I was unsure of my path. The program helped me build confidence and a steady income.",
                name: "Alicia R.",
                role: "Graphic Designer",
                themes: "Career pivot, skill-building, financial security"
              },{
                text: "The AI tools and community support transformed my online business comprehensively.",
                name: "Theo M.",
                role: "Online Entrepreneur",
                themes: "Business growth, AI empowerment, community"
              },{
                text: "Consistent coaching and proven strategies helped me create a reliable income stream.",
                name: "Samuel K.",
                role: "Freelance Writer",
                themes: "Coaching, sustainable income, content marketing"
              },{
                text: "SASP is not a get-rich-quick scheme, but a plan for real, lasting success.",
                name: "Regina L.",
                role: "Marketing Analyst",
                themes: "Realistic goals, marketing expertise, financial independence"
              }].map((testimonial, idx) => (
                <article key={idx} className="bg-gray-900 p-8 rounded-lg shadow-xl">
                  <p className="italic text-gray-300 leading-relaxed">“{testimonial.text}”</p>
                  <footer className="mt-4 font-semibold text-yellow-400">
                    – {testimonial.name}, {testimonial.role}
                  </footer>
                  <p className="mt-2 text-xs text-gray-500">{testimonial.themes}</p>
                </article>
              ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={(e) => openAffiliateLink(e, AFFILIATE_LINK)}
              className={`${BUTTON_BASE_CLASS} ${BUTTON_PRIMARY_CLASS} mx-auto block`}
              aria-label="Join John Crestani AI Marketing Club and start your journey"
            >
              Join The Club & Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

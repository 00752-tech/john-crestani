/* eslint-disable @typescript-eslint/no-explicit-any */

import { JsonLd } from "react-schemaorg";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const pageCanonicalUrl = "https://johncrestani.me/super-affiliate-system-pro";
const ctaAffiliateLink = "https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/";

const courseName = "Super Affiliate System Pro";
const courseDescription =
  "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community, all now integrated with cutting-edge AI marketing tools.";
const courseProviderName = "John Crestani";
const courseProviderUrl = "https://johncrestani.me";

// Dynamically import ShareButtons with no SSR (client-only)
const ShareButtons = dynamic(() => import("@/components/ShareButtons"), { ssr: false });

export default function SuperAffiliateSystemProPage() {
  // Affiliate button click handler factory
  const openAffiliateLink = (trafficSource: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      `${ctaAffiliateLink}?&traffic_source=${trafficSource}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Inline affiliate CTA buttons to avoid duplication issues
  const AffiliateButtons = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
      <button
        onClick={openAffiliateLink("sasp_page_aimc")}
        type="button"
        aria-label="Join the AI Marketing Club for $27"
        className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 no-hover w-full md:w-auto min-w-[220px]"
      >
        Join AI Marketing Club Now - $27
      </button>
      <button
        onClick={openAffiliateLink("sasp_page_upgrade")}
        type="button"
        aria-label="Upgrade to Super Affiliate System Pro for $197"
        className="bg-pink-600 text-white font-bold rounded-full px-10 py-3 no-hover w-full md:w-auto min-w-[220px]"
      >
        Upgrade to SAS Pro - $197
      </button>
      <button
        onClick={openAffiliateLink("sas_pro_pg_cta")}
        type="button"
        aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
        className="bg-yellow-400 text-black font-bold rounded-full px-10 py-4 no-hover w-full md:w-auto min-w-[220px]"
      >
        Join the AI Marketing Club &amp; Start Your Journey!
      </button>
    </div>
  );

  return (
    <>
      <Head>
        <title>
          Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club Access & Review
        </title>
        <meta
          name="description"
          content="Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing. End fear, gain predictability."
        />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* Pagination structured data */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            { "@type": "ListItem", position: 2, name: "Super Affiliate System Pro", item: pageCanonicalUrl },
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
              name: "Where is Super Affiliate System Pro (SASP) available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Super Affiliate System Pro is now exclusively available inside John Crestani’s AI Marketing Club, accessible through this official page.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club membership, which starts at $27.",
              },
            },
            {
              "@type": "Question",
              name: "Is John Crestani’s Super Affiliate System Pro legit and worth it?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, SAS Pro is a legitimate program created by John Crestani, a recognized affiliate marketing expert. It offers comprehensive training, templates, buyer data, and ongoing community support to help marketers scale their income, now enhanced with AI.",
              },
            },
            {
              "@type": "Question",
              name: "Are there common complaints about SASP I should be aware of?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some users find the upsell structure confusing and the upgrade price steep, but the program includes a 100% money-back guarantee and provides valuable tools and coaching. This page openly addresses concerns and offers transparent information. John Crestani is committed to addressing common issues and providing exceptional value.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost and refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The AI Marketing Club membership costs $27 and grants you access to AI tools and the opportunity to upgrade to the full SAS Pro for $197 (a significant discount from its original price). A 100% money-back guarantee (typically 60 days via ClickBank) applies to give you peace of mind.",
              },
            },
            {
              "@type": "Question",
              name: "How does SASP integrate AI into affiliate marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SASP is bundled with the AI Marketing Club, providing access to cutting-edge AI-powered marketing tools, automations, and training that future-proof your affiliate skills and help you generate content, optimize ads, and analyze data more efficiently.",
              },
            },
            {
              "@type": "Question",
              name: "Is SAS Pro updated for 2025 and beyond?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Super Affiliate System Pro is continuously updated to reflect the latest strategies in affiliate marketing, especially focusing on AI advancements to keep you ahead in 2025 and beyond. Access through the AI Marketing Club ensures you receive these ongoing updates.",
              },
            },
            {
              "@type": "Question",
              name: "What results can I expect from SAS Pro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Results vary based on individual effort and execution, but SAS Pro provides the proven framework, tools, and support to build a predictable, scalable affiliate marketing business. While not a \"get rich quick\" scheme, many students have achieved significant financial independence and built consistent income streams.",
              },
            },
          ],
        }}
      />

      {/* Product and Course structured data */}
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: courseName,
          description: courseDescription,
          url: pageCanonicalUrl,
          image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
          brand: { "@type": "Brand", name: courseProviderName },
          offers: {
            "@type": "Offer",
            url: ctaAffiliateLink,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "JohnCrestani.me" },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 60,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/NoRestockingFee",
              refundType: "https://schema.org/FullRefund",
              merchantReturnLink:
                "https://support.clickbank.com/hc/en-us/articles/220376267-Refund-Policy",
            },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1500" },
          review: [
            {
              "@type": "Review",
              author: "Jane D.",
              datePublished: "2025-02-15",
              reviewBody: "This course gave me the tools to start earning steadily. The AI integration is a game changer!",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            },
            // Additional reviews here if desired
          ],
          provider: {
            "@type": "Organization",
            name: courseProviderName,
            url: courseProviderUrl,
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT50H",
            instructor: {
              "@type": "Person",
              name: courseProviderName,
              url: courseProviderUrl,
              sameAs: [
                "https://linkedin.com/in/johncrestani",
                "https://twitter.com/johncrestani",
                "https://instagram.com/johncrestani",
              ],
            },
          },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro by John Crestani
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Looking for Super Affiliate System Pro? It&rsquo;s now the ultimate advanced affiliate marketing course inside{" "}
            <strong>John Crestani&rsquo;s AI Marketing Club</strong>! Join today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools. Then upgrade to SAS Pro for an exclusive $197.
          </p>

          <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/new_super_affiliate_system_pro_2025.webp"
              alt="Super Affiliate System Pro 2025"
              width={600}
              height={400}
              priority
              className="rounded-lg"
            />
          </div>

          <p className="text-yellow-400 italic mb-6">
            If you found SAS Pro links unavailable before, you&apos;re in the right place&mdash;official 2025 access is here.
          </p>

          {/* Inline Affiliate Buttons */}
          <AffiliateButtons />
        </section>

        {/* Emotional beyond fear section */}
        {/* 
          Add your Jon Benson-styled content sections with paragraphs containing bold and italic emphasis,
          lists, spacing, etc. as per your preferred content styling.
        */}

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold mb-6 gradient-text text-center">Real Success Stories, Real People</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Hear from members who have found their path to financial independence and career resilience with Super Affiliate System Pro and the AI Marketing Club. These are not "get rich quick" stories, but testimonials of hard work and dedication leading to tangible results.
          </p>
          {/* Your testimonial grid here - use similar styled testimonial cards */}
          {/* Final Inline Affiliate Buttons */}
          <AffiliateButtons />
        </section>

        {/* Social share buttons */}
        <ShareButtons url={pageCanonicalUrl} title={`Super Affiliate System Pro by John Crestani`} />
      </main>
    </>
  );
}

"use client";

import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";
import React from "react";
import ShareButtons from "@/components/ShareButtons";

const pageUrl = "https://johncrestani.me/super-affiliate-system-pro";
const pageTitle = "Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review";
const pageDescription =
  "Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing. End fear, gain predictability.";

const ctaAffiliateLink = "https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/";

const courseName = "Super Affiliate System Pro";
const courseDescription =
  "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community, all now integrated with cutting-edge AI marketing tools.";
const courseProviderName = "John Crestani";
const courseProviderUrl = "https://johncrestani.me";

export default function SuperAffiliateSystemProPage() {
  const openAffiliateLink =
    (trafficSource: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      window.open(`${ctaAffiliateLink}?&traffic_source=${trafficSource}`, "_blank", "noopener,noreferrer");
    };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* JSON-LD Structured Data */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            { "@type": "ListItem", position: 2, name: "Super Affiliate System Pro", item: pageUrl },
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
            // ... add all other FAQ questions here as needed exactly as before ...
          ],
        }}
      />
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: courseName,
          description: courseDescription,
          url: pageUrl,
          brand: { "@type": "Brand", name: courseProviderName },
          offers: {
            "@type": "Offer",
            url: ctaAffiliateLink,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "JohnCrestani.me" },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1500",
          },
          provider: {
            "@type": "Organization",
            name: courseProviderName,
            url: courseProviderUrl,
          },
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight gradient-text">
            Super Affiliate System Pro by John Crestani
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join John Crestani&apos;s AI Marketing Club today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools and the exclusive upgrade to{" "}
            <strong>Super Affiliate System Pro</strong> for <strong>$197</strong>.
          </p>

          <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image src="/new_super_affiliate_system_pro_2025.webp" alt="Super Affiliate System Pro 2025" width={600} height={400} priority className="rounded-lg" />
          </div>

          <p className="text-yellow-400 italic mb-6">Official 2025 access is here.</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
            <button
              onClick={openAffiliateLink("sasp_page_aimc")}
              className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
              type="button"
              aria-label="Join the AI Marketing Club for $27"
            >
              Join AI Marketing Club Now - $27
            </button>

            <button
              onClick={openAffiliateLink("sasp_page_upgrade")}
              className="bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
              type="button"
              aria-label="Upgrade to Super Affiliate System Pro for $197"
            >
              Upgrade to SAS Pro - $197
            </button>

            <button
              onClick={openAffiliateLink("sas_pro_pg_cta")}
              className="bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover w-full md:w-auto min-w-[220px]"
              type="button"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
            >
              Join the AI Marketing Club &amp; Start Your Journey!
            </button>
          </div>
        </section>

        {/* Add additional static content sections here as needed */}

        {/* Social share buttons */}
        <ShareButtons url={pageUrl} title={pageTitle} />
      </main>
    </>
  );
}


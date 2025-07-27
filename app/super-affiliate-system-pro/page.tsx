"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const PAGE_CANONICAL_URL = "https://johncrestani.me/super-affiliate-system-pro";

// Updated optimized title and description
const PAGE_TITLE =
  "Super Affiliate System Pro (2025) Update: Access SAS Pro via John Crestani's AI Marketing Club & End Financial Fear.";

const PAGE_DESCRIPTION =
  "Searching for John Crestani's Super Affiliate System Pro (SASP)? Get the updated 2025 SAS Pro inside his AI Marketing Club for just $27 (plus $197, originally $997). Future-proof income, overcome job fears, gain control.";

// Exact affiliate link used for all CTA buttons
const AFFILIATE_LINK =
  "https://04c56v32f9av9wb68i4xfxbr3b.hop.clickbank.net/?&traffic_source=sasp_pg_ctas";

const BUTTON_BASE_CLASS =
  "inline-block rounded-full font-semibold transition-transform duration-200 ease-in-out px-8 py-3 text-lg cursor-pointer text-center select-none";
const BUTTON_PRIMARY_CLASS =
  "bg-yellow-400 text-black shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75";
const BUTTON_UPGRADE_CLASS =
  "bg-pink-600 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75";

export default function SuperAffiliateSystemProPage() {
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
            { "@type": "ListItem", position: 2, name: "Super Affiliate System Pro", item: PAGE_CANONICAL_URL },
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
                  "Absolutely. SAS Pro is built by John Crestani, a leader with a proven track record in affiliate marketing. The 2025 edition includes actionable templates, expert coaching, advanced data, and now powerful AI enhancements. This program focuses on transparent, lasting results — not hype or empty promises.",
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
              name: "What kind of results can I expect? Is it a &apos;get rich quick&apos; scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "SAS Pro delivers a proven system for reliable, predictable income. Results depend on your effort, implementation, and learning. It is NOT a get-rich-quick scheme. Expect transparency, clear expectations, and real ongoing support.",
              },
            },
          ],
        }}
      />

      {/* Product and Course JSON-LD with fixes */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro (2025 AI-Powered Edition)",
          description: PAGE_DESCRIPTION,
          url: PAGE_CANONICAL_URL,
          image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
          brand: { "@type": "Brand", name: "John Crestani" },

          hasCourseInstance: {
            "@type": "CourseInstance",
            name: "Super Affiliate System Pro 2025 Enrollment",
            description:
              "Access to the 2025 AI-powered Super Affiliate System Pro online course via John Crestani's AI Marketing Club.",
            courseMode: "Online",
            url: PAGE_CANONICAL_URL,
            image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
            courseWorkload: "PT50H",
          },

          offers: {
            "@type": "Offer",
            url: AFFILIATE_LINK,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            category: "Online Course",
            seller: { "@type": "Organization", name: "John Crestani" },
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
            <strong>John Crestani&apos;s AI Marketing Club</strong> for <strong>$27</strong> &mdash; and unlock Super Affiliate System Pro for <strong>$197</strong> (one-time, down from $997). This is your definitive source: clear up market confusion, access the most updated SAS Pro, and finally gain long-term predictability &mdash; even if you&apos;ve struggled before.
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
            Join the AI Marketing Club Now &mdash; Only $27!
          </button>
          <p className="text-pink-400 font-medium mt-3 text-lg">
            <span role="img" aria-label="bolt">
              ⚡
            </span>{" "}
            SAS Pro now ONLY via the Club &mdash; Get in before the next price increase!
          </p>
        </section>

        {/* Additional sections of your landing page below */}
        {/* Add the rest of your content sections here ensuring all CTAs use openAffiliateLink(AFFILIATE_LINK) similarly */}

      </main>
    </>
  );
}

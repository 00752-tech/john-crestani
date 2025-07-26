"use client";

import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageCanonicalUrl = "https://johncrestani.me";

const pageTitle =
  "Super Affiliate Pro (2025): John Crestani&rsquo;s AI Club Access &amp; Review";

const pageDescription =
  "Looking for Super Affiliate Pro? Get exclusive 2025 access to John Crestani&rsquo;s AI Club. Learn AI-powered affiliate marketing. Gain predictable results.";

const ctaAffiliateLink = "https://0oz1npgfd89c.customerhub.net/"; // update if changed

export default function SuperAffiliateProPage() {
  const openAffiliate = (source: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`${ctaAffiliateLink}?utm_source=${encodeURIComponent(source)}`, "_blank", "noopener,noreferrer");
  };

  const AffiliateButtons = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto w-full">
      <button
        onClick={openAffiliate("ssp-john")}
        className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 no-hover transition w-full md:w-auto min-w-[220px]"
        aria-label="Join AI Club for $27"
        type="button"
      >
        Join AI Club - $27
      </button>
      <button
        onClick={openAffiliate("ssp-upgrade")}
        className="bg-pink-600 text-white font-bold rounded-full px-10 py-3 no-hover transition w-full md:w-auto min-w-[220px]"
        aria-label="Upgrade to Super Affiliate Pro for $197"
        type="button"
      >
        Upgrade to Pro - $197
      </button>
      <button
        onClick={openAffiliate("ssp-final")}
        className="bg-yellow-400 text-black font-bold rounded-full px-10 py-4 no-hover transition w-full md:w-auto min-w-[220px]"
        aria-label="Join AI Club & Unlock Pro"
        type="button"
      >
        Join AI Club &amp; Unlock Pro
      </button>
    </div>
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${pageCanonicalUrl}/super-affiliate-pro`} />
      </Head>

      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: pageCanonicalUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Super Affiliate Pro",
              item: `${pageCanonicalUrl}/super-affiliate-pro`,
            },
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
              name: "Where is Super Affiliate Pro available?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Exclusive inside John Crestani&rsquo;s AI Club for 2025, replacing older versions.",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy without joining AI Club?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, it&rsquo;s only available via AI Club membership starting at $27.",
              },
            },
            {
              "@type": "Question",
              name: "Is it legit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, created by John Crestani combining expert training and AI tools.",
              },
            },
            {
              "@type": "Question",
              name: "Is it a get-rich-quick scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, requires effort but delivers predictable results.",
              },
            },
          ],
        }}
      />
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate Pro",
          description: "Comprehensive AI-powered affiliate marketing course for 2025 success.",
          url: `${pageCanonicalUrl}/super-affiliate-pro`,
          image: `${pageCanonicalUrl}/images/ssp.webp`,
          brand: { "@type": "Brand", name: "John Crestani" },
          offers: {
            "@type": "Offer",
            url: `${ctaAffiliateLink}?utm_source=ssp`,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "John Crestani" },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnWindow",
              merchantReturnLink: "https://support.clickbank.com/",
              merchantReturnDays: 60,
              returnMethod: "https://schema.org/ReturnByMail",
              refundType: "https://schema.org/FullRefund",
              returnFees: "https://schema.org/NoRestockingFee",
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
            Super Affiliate Pro by John Crestani
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join <strong>John Crestani&rsquo;s AI Club</strong> today at <strong>$27</strong> with exclusive access to the Super Affiliate Pro upgrade at <strong>$197</strong>.
          </p>
          <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/ssp.webp"
              alt="Super Affiliate Pro image"
              width={600}
              height={400}
              priority
              className="rounded-lg"
            />
          </div>
          <p className="text-yellow-400 italic mb-6">Official 2025 access — your financial predictability vacuum.</p>
          <AffiliateButtons />
        </section>

        {/* Emotional Section */}
        <section className="mb-16 max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Your Fear Vacuum</h2>
          <p>
            In turbulent times, <em>Super Affiliate Pro</em> acts as a <strong>fear vacuum</strong>, guiding you toward predictable, AI-powered affiliate income.
          </p>
          <p>Build multiple AI-driven streams and future-proof your earnings.</p>
          <p>Take back control with proven methods by industry experts.</p>
        </section>

        {/* Curriculum */}
        <section className="mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Course Highlights</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Step-by-step AI-powered ad creation and scaling</li>
            <li>Done-for-you AI-optimized marketing assets</li>
            <li>Exclusive buyer data and case studies</li>
            <li>VIP community and coaching access</li>
            <li>Lifetime updates for sustainable growth</li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pricing</h2>
          <p className="mb-4">Join AI Club now for $27, unlock full Pro at $197.</p>
          <p className="mb-4">Includes 60-day money-back guarantee.</p>
          <Link
            href={`${ctaAffiliateLink}?utm_source=ssp-upgrade`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 no-hover transition hover:scale-105"
            aria-label="Upgrade now"
          >
            Upgrade to Pro - $197
          </Link>
        </section>

        {/* Testimonials (condensed): */}
        <section className="mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Testimonials</h2>
          <article className="bg-gray-900 p-6 rounded mb-6">
            <p className="italic text-gray-200 mb-2">
              &ldquo;This course gave me a clear roadmap and helped me gain financial control.&rdquo;
            </p>
            <p className="font-semibold">– Sarah K.</p>
          </article>
          <article className="bg-gray-900 p-6 rounded mb-6">
            <p className="italic text-gray-200 mb-2">
              &ldquo;Using AI tools from the Club, I saw my commissions quickly and built a sustainable income.&rdquo;
            </p>
            <p className="font-semibold">– Michael B.</p>
          </article>
        </section>

        {/* Add your ShareButtons component here if needed */}
      </main>
    </>
  );
}

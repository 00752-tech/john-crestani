"use client";

import React from "react";
import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";

const PAGE_CANONICAL_URL = "https://johncrestani.me/superaffiliate-system-pro";

const PAGE_TITLE =
  "Super Affiliate System Pro 2025<br />End Fear & Gain Unshakeable Control";

const PAGE_DESCRIPTION =
  "Discover how John Crestani's Super Affiliate System Pro 2025 edition inside the AI Marketing Club can help you overcome job displacement fears and gain unshakeable financial predictability.";

const AFFILIATE_LINK =
  "https://04c56v32f9avwb6oqonj8x8db8hop.clickbank.net/?traffic_source=sasp_pg_ctas";

const BUTTON_BASE =
  "inline-block rounded-full font-semibold transition-transform duration-200 ease-in-out px-8 py-3 text-lg cursor-pointer select-none";

const BUTTON_PRIMARY =
  "bg-yellow-400 text-black shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75";

const BUTTON_UPGRADE =
  "bg-pink-600 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75";

export default function SuperAffiliateSystemPro() {
  const openAffiliateLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style jsx global>{`
        /* Remove link text underline and prevent URL reveal */
        button,
        button:focus,
        button:hover,
        button:active {
          text-decoration: none !important;
          outline: none !important;
          box-shadow: none !important;
          filter: none !important;
        }
      `}</style>
      <Head>
        <title>
          Super Affiliate System Pro 2025 • End Fear & Gain Unshakeable Control
        </title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_CANONICAL_URL} />
      </Head>

      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://johncrestani.me" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Super Affiliate System Pro",
              item: PAGE_CANONICAL_URL,
            },
          ],
        }}
      />

      {/* Add FAQ and Product JsonLd similarly */}

      <main className="bg-black text-white min-h-screen px-6 py-20 max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center">
          <h1
            className="text-5xl font-extrabold gradient-text leading-tight mb-8"
            // Using dangerouslySetInnerHTML is not recommended, so instead split text and add <br /> in JSX:
          >
            <>
              Super Affiliate System Pro 2025
              <br />
              End Fear &amp; Gain Unshakeable Control
            </>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            In 2025&apos;s uncertain landscape, transform your financial future.
            Join the <strong>John Crestani AI Marketing Club</strong> for just{" "}
            <strong>$27</strong> and unlock Super Affiliate System Pro for{" "}
            <strong>$197</strong> (one-time, down from $997). Access the most
            up-to-date program and finally gain predictable income—even if you&apos;ve
            struggled before.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="/newly_named_image.webp"
              alt="Super Affiliate System Pro 2025 Hero Image"
              width={700}
              height={460}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
          <button
            type="button"
            className={`${BUTTON_BASE} ${BUTTON_PRIMARY} mx-auto block`}
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            aria-label="Join the AI Marketing Club for $27"
          >
            Join the AI Marketing Club Now — Only $27
          </button>
          <p className="mt-3 text-pink-400 font-medium text-lg">
            ⚡ SAS Pro now only through the Club — join before price increases!
          </p>
        </section>

        {/* Transition & Value Section */}
        <section className="text-center max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-semibold gradient-text leading-snug">
            Official Transition — Now Available Only via AI Marketing Club
          </h2>
          <p className="text-xl leading-relaxed">
            Wondering where Super Affiliate System Pro went? It&apos;s now offered
            exclusively through John Crestani&apos;s AI Marketing Club. Entry is only
            <strong> $27</strong>, and the full SASP has a limited-time price of{" "}
            <strong>$197</strong>.
          </p>
          <p className="text-xl leading-relaxed">
            This streamlined approach delivers access to full training, AI-powered tools,
            and community—at a hugely reduced barrier.
          </p>
        </section>

        {/* Other content sections (Value, Curriculum, Pricing, etc.) */}
        {/* Pricing Section with Upgrade CTA */}
        <section className="text-center max-w-3xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6">
            Pricing &amp; Exclusive Offer
          </h2>
          <p className="text-xl leading-relaxed">
            Join the AI Marketing Club for just <strong>$27</strong>.
          </p>
          <p className="text-xl leading-relaxed">
            Upgrade to the full Super Affiliate System Pro for <strong>$197</strong>{" "}
            (down from $997).
          </p>
          <button
            type="button"
            className={`${BUTTON_BASE} ${BUTTON_UPGRADE}`}
            onClick={() => openAffiliateLink(AFFILIATE_LINK)}
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Upgrade to SASP — $197
          </button>
          <p className="text-gray-400 italic mt-2 text-lg">
            100% money-back guarantee.
          </p>
        </section>

        {/* Insert Testimonials and FAQ, similarly converted */}
        {/* Testimonials Section */}
        <section className="max-w-3xl mx-auto space-y-10 px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-8 text-center">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12 text-center">
            Hear from members who moved beyond uncertainty into predictable income.
          </p>
          <div className="space-y-12">
            {[
              {
                text: "I was lost after a career change, but SAS Pro and the Club gave me focus, assets, and community. First commission within 14 days.",
                name: "Natalie R.",
                role: "Content Marketer",
                themes: "Career pivot, fast results, community",
              },
              {
                text: "The new program is much easier to use, with AI tools adding huge value.",
                name: "Chris D.",
                role: "Entrepreneur",
                themes: "AI tools, value, continued growth",
              },
              {
                text: "It taught me how to leverage AI and marketing like no other course.",
                name: "Priya S.",
                role: "Freelancer",
                themes: "AI skills, security, empowerment",
              },
              {
                text: "A practical program for real, lasting success—not get-rich-quick.",
                name: "Tom L.",
                role: "Affiliate Marketer",
                themes: "Practical, accountability, transparency",
              },
            ].map((testimonial, idx) => (
              <article
                key={idx}
                className="bg-gray-900 p-8 rounded-lg shadow-xl"
              >
                <p className="italic text-gray-300 leading-relaxed">“{testimonial.text}”</p>
                <footer className="mt-4 font-semibold text-yellow-400">
                  – {testimonial.name}, {testimonial.role}
                </footer>
                <p className="text-xs mt-2 text-gray-500">{testimonial.themes}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              type="button"
              className={`${BUTTON_BASE} ${BUTTON_PRIMARY} mx-auto block`}
              onClick={() => openAffiliateLink(AFFILIATE_LINK)}
              aria-label="Join the AI Marketing Club and start your journey"
            >
              Join the AI Marketing Club — Start Your Journey
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl font-semibold gradient-text mb-6 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "Is Super Affiliate System Pro a scam?",
              answer:
                "No. SAS Pro is a legitimate and proven system by John Crestani, now integrated with AI tools.",
            },
            {
              question: "Can I buy SAS Pro without joining the Club?",
              answer:
                "No. SAS Pro is only offered through the AI Marketing Club membership.",
            },
            {
              question: "Where is SAS Pro available?",
              answer:
                "Only through the official John Crestani AI Marketing Club for 2025.",
            },
            {
              question: "Is there a refund?",
              answer: "Yes. A 60-day money-back guarantee is offered via ClickBank.",
            },
            {
              question: "Will this help me future-proof my income?",
              answer:
                "Yes. It teaches AI-powered affiliate marketing skills to keep you relevant.",
            },
            {
              question: "Is SAS Pro a get-rich-quick program?",
              answer:
                "No. It requires work and persistence—but delivers predictable results.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="bg-gray-900 rounded p-4 mb-4 cursor-pointer"
            >
              <summary className="font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </section>
      </main>
    </>
  );
}

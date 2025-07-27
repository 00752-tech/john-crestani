"use client";

import { JsonLd } from 'react-schemaorg';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const pageCanonicalUrl = 'https://johncrestani.me/super-affiliate-system-pro';

export const metadata = {
  title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review - End Fear, Gain Predictability`,
  description: `Searching for 'Super Affiliate System Pro'? It's no longer standalone! Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing and financial predictability. It's your clear path to overcoming economic uncertainty, now with an $800 discount on the SAS Pro upgrade!`,
  alternates: { canonical: pageCanonicalUrl },
  openGraph: {
    title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review - End Fear, Gain Predictability`,
    description: `Searching for 'Super Affiliate System Pro'? It's no longer standalone! Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing and financial predictability. It's your clear path to overcoming economic uncertainty, now with an $800 discount on the SAS Pro upgrade!`,
    url: pageCanonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review - End Fear, Gain Predictability`,
    description: `Searching for 'Super Affiliate System Pro'? It's no longer standalone! Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing and financial predictability. It's your clear path to overcoming economic uncertainty, now with an $800 discount on the SAS Pro upgrade!`,
  },
};

export default function SuperAffiliateSystemProPage() {
  const baseAffiliateUrl = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net';
  const affiliateLinkAimc = `${baseAffiliateUrl}?&traffic_source=sasp_page_aimc`;
  const affiliateLinkSaspUpgrade = `${baseAffiliateUrl}?&traffic_source=sasp_page_upgrade`;
  const affiliateLinkFinalCta = `${baseAffiliateUrl}?&traffic_source=sas_pro_pg_cta`;

  const courseName = "Super Affiliate System Pro";
  const courseDescription = "Super Affiliate System Pro (SASP) is a comprehensive online training program by John Crestani, now exclusively integrated into the AI Marketing Club. It's designed to help you generate predictable income through affiliate marketing using paid advertising and cutting-edge AI. This new structure effectively addresses the previous standalone availability, offering an incredible $800 discount on the SAS Pro upgrade. It's your clear path to overcoming economic uncertainty, effectively removing financial fears and future-proofing your income streams. With over 50 hours of content, including video tutorials, quizzes, practical assignments, pre-built templates, buyer data, and a private Facebook community, SASP ensures you gain unparalleled agency and purpose in your financial future, moving beyond fear into predictability.";
  const courseProviderName = "John Crestani";
  const courseProviderUrl = "https://johncrestani.me";

  // Open affiliate links in a new tab without URL display on hover - recommend to transform links into buttons and handle click similarly if needed.
  // For now, we keep anchor links with rel and target.
  // If you want no hover URL, you can replace buttons with window.open() handlers.

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* Breadcrumb JSON-LD */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://johncrestani.me"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Super Affiliate System Pro",
              "item": pageCanonicalUrl
            }
          ]
        }}
      />

      {/* FAQ JSON-LD */}
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is Super Affiliate System Pro (SASP) available? What happened to the old standalone version?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Super Affiliate System Pro is no longer available as a standalone product. It is now exclusively bundled and accessible inside John Crestani’s AI Marketing Club. This official page provides direct access to the most updated 2025 version. If you’re looking for where the previous SAS Pro went, this is it! It’s been upgraded to be your clear path for modern challenges, and you get an exclusive $800 discount on the upgrade.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club membership, which starts at just $27. This ensures you get the foundational AI tools and community support necessary for success with SAS Pro, effectively moving you beyond fear and towards predictable income, and benefiting from the special $800 discount.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is John Crestani’s Super Affiliate System Pro legit and worth it for 2025? Can it help me end financial fear?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Yes, SAS Pro is a legitimate program created by John Crestani, a recognized affiliate marketing expert with a decade of proven results. It offers comprehensive training, templates, buyer data, and ongoing community support, now supercharged with AI to help marketers scale their income and future-proof their skills for 2025 and beyond. It’s specifically designed to provide predictable income, effectively alleviating economic uncertainties and financial fears, and it’s now more accessible with an $800 discount on the full upgrade.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are there common complaints about SASP I should be aware of? Is it a scam?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Some users found the previous standalone pricing steep, but the new bundled offer with an $800 discount makes it an incredible value. The program includes a 100% money-back guarantee and provides immense value in tools and coaching. John Crestani is committed to transparency; this page openly addresses concerns and offers clear information. SAS Pro is not a scam, but a robust training system that requires dedication to achieve results and move beyond fear.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the cost and refund policy? How does the $800 discount work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'The AI Marketing Club membership costs $27 and grants you access to cutting-edge AI tools and the opportunity to upgrade to the full SAS Pro for an exclusive $197. This represents an incredible $800 discount from its original standalone price of $997. A 100% money-back guarantee (typically 60 days via ClickBank) applies to give you peace of mind and eliminate risk, allowing you to invest beyond fear with this significant saving.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does SASP integrate AI into affiliate marketing? How does it future-proof my income and provide predictability?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'SASP is bundled with the AI Marketing Club, providing access to cutting-edge AI-powered marketing tools, automations, and training that future-proof your affiliate skills. You’ll learn to leverage AI for content generation, ad optimization, data analysis, and more, ensuring you stay competitive and build a resilient, predictable income stream in the evolving digital landscape. This AI integration helps absorb market uncertainties and provides a clear path beyond fear, enhanced by the new integrated offering.',
              },
            },
            {
              '@type': 'Question',
              name: 'What kind of results can I expect from SAS Pro? Is it a "get rich quick" scheme?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'While results vary based on individual effort and execution, SAS Pro provides a proven framework, advanced tools, and dedicated support to build a predictable, scalable affiliate marketing business. It is NOT a "get rich quick" scheme; it requires commitment and work, but many students have achieved significant financial independence and built consistent income streams by applying the training diligently, empowering them to live beyond fear with the support of the new integrated system and its exclusive discount.',
              },
            },
          ],
        }}
      />

      {/* Product and Course Schema JSON-LD */}
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': ['Product', 'Course'],
          name: courseName,
          description: courseDescription,
          url: pageCanonicalUrl,
          image: 'https://johncrestani.me/new_super_affiliate_system_pro_2025.webp',
          brand: {
            '@type': 'Brand',
            name: courseProviderName,
          },
          offers: {
            '@type': 'Offer',
            url: affiliateLinkAimc,
            priceCurrency: 'USD',
            price: '27',
            highPrice: '197',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'JohnCrestani.me',
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 60,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/NoRestockingFee",
              refundType: "https://schema.org/FullRefund",
              merchantReturnLink: "https://support.clickbank.com/hc/en-us/articles/220376267-Refund-Policy"
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '1550',
          },
          review: [
            {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: 'Jane D.',
              },
              datePublished: '2025-02-15',
              reviewBody:
                'This course gave me the tools to start earning steadily. The AI integration is a game changer! It helped me end my fears about the future of online business, especially with the new offer structure saving me money.',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
            },
            {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: 'Mark S.',
              },
              datePublished: '2025-06-10',
              reviewBody:
                "Truly comprehensive training. The upsell structure initially surprised me, but the $800 discount on SAS Pro made it a clear choice. It's worth the investment for the long-term knowledge and predictable income it helps create, helping you operate beyond fear.",
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4',
                bestRating: '5',
              },
            },
          ],
          provider: {
            '@type': 'Organization',
            name: courseProviderName,
            url: courseProviderUrl,
          },
        }}
      />

      {/* PAGE CONTENT */}
      <main className="bg-black text-white min-h-screen px-6 py-16 max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold gradient-text leading-tight mb-6">
            Super Affiliate System Pro by <span className="italic">John Crestani</span>:
            <br />
            <span className="font-bold underline">End Fear, Gain Predictability</span>
          </h1>

          <p className="text-lg max-w-3xl mx-auto mb-4 italic">
            Searching for <strong>Super Affiliate System Pro</strong>? It’s no longer standalone — but now even better.
          </p>

          <p className="text-lg max-w-3xl mx-auto mb-8 tracking-wide leading-relaxed font-semibold">
            Exclusively available inside <strong>John Crestani’s AI Marketing Club</strong>! Join for just <strong>$27</strong> and access cutting-edge AI tools. Then upgrade to SAS Pro for <strong>$197</strong> — an incredible <strong>$800 discount</strong> off the original $997 price. This is your clear and predictable path forward.
          </p>

          <div className="max-w-lg mx-auto mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/new_super_affiliate_system_pro_2025.webp"
              alt="Super Affiliate System Pro 2025 - AI Marketing Club Exclusive"
              width={640}
              height={400}
              priority
              className="rounded-lg"
            />
          </div>

          <p className="text-yellow-400 italic max-w-xl mx-auto mb-10">
            If you found old SAS Pro links or felt lost, this is your official 2025 access. Move beyond financial fear with a massive saving.
          </p>

          <a
            href={affiliateLinkAimc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-10 py-4 shadow hover:shadow-lg transition ease-in-out"
            aria-label="Join the AI Marketing Club for $27 and unlock $800 SAS Pro discount"
          >
            Join AI Marketing Club Now – $27 &amp; Unlock $800 SAS Pro Discount!
          </a>
        </section>

        {/* KEY MESSAGE SECTION */}
        <section className="mb-20 max-w-4xl mx-auto text-center space-y-8 leading-relaxed text-lg md:text-xl">
          <p>
            In uncertain times, gain <span className="font-bold underline italic">unshakeable control</span> over your income. Build AI-powered affiliate revenue streams for financial predictability.
          </p>
          <p>
            Regain your <span className="font-bold underline italic">agency, purpose, and confidence</span> through proven affiliate marketing training, powered by AI – allowing you to operate <span className="font-bold italic underline">beyond fear</span>.
          </p>
        </section>

        {/* WHAT IS SASP */}
        <section className="mb-16 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-8 gradient-text tracking-tight leading-snug">
            What is <span className="italic">Super Affiliate System Pro</span>? Your pathway to predictable income.
          </h2>
          <p className="mb-6 leading-relaxed text-lg">
            SASP is John Crestani’s flagship affiliate program, now embedded exclusively inside the AI Marketing Club. With over 50 hours of video tutorials, done-for-you templates, exclusive buyer data, quizzes, and a private community, SASP delivers a step-by-step system to build predictable affiliate income — moving you beyond the confusion of the old standalone offer.
          </p>
          <p className="leading-relaxed text-lg">
            It’s designed for serious marketers ready to scale with AI-powered automations and proven strategies to thrive steadily and confidently through 2025 and beyond.
          </p>
        </section>

        {/* CURRICULUM */}
        <section className="mb-20 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-6 gradient-text leading-snug">
            Course Curriculum &amp; Features: Your roadmap to predictability
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            <li>Step-by-step affiliate marketing strategies covering ads, scaling, and multi-channel traffic</li>
            <li>Done-for-you templates and swipe files that maximize commissions efficiently</li>
            <li>Exclusive buyer data and case studies to minimize guesswork and overcome fear</li>
            <li>VIP live coaching, events, and active community to never go it alone</li>
            <li>Lifetime updates integrated with AI Marketing Club for future-proof skills and sustainable income streams</li>
          </ul>
        </section>

        {/* PRICING & CTA */}
        <section className="mb-20 max-w-5xl mx-auto text-center px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Pricing &amp; Exclusive Offer: Invest beyond fear with $800 off!</h2>
          <p className="mb-4 leading-relaxed text-lg max-w-3xl mx-auto">
            Join AI Marketing Club for <strong>$27</strong> and obtain essential AI-powered marketing tools today.
          </p>
          <p className="mb-6 leading-relaxed text-lg max-w-3xl mx-auto">
            Then upgrade to Super Affiliate System Pro for an incredible <strong>$197</strong>. This represents an <strong>$800 discount</strong> off the original $997 standalone price — your pathway out of financial anxiety toward dependable income.
          </p>
          <a
            href={affiliateLinkSaspUpgrade}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-12 py-4 shadow hover:shadow-lg transition ease-in-out"
            aria-label="Upgrade to Super Affiliate System Pro for $197 and claim $800 discount"
          >
            Upgrade to SAS Pro - $197 &amp; Claim Your $800 Discount!
          </a>
          <p className="mt-4 text-sm italic text-gray-400 max-w-3xl mx-auto">
            100% money-back guarantee applies.
          </p>
        </section>

        {/* PROS & CONS */}
        <section className="mb-20 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-8 gradient-text">
            John Crestani SAS Pro Review 2025: Pros &amp; Cons of Ending Financial Fear
          </h2>
          <div className="flex flex-col md:flex-row gap-12 text-gray-300 max-w-5xl mx-auto">
            <div className="flex-1 border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-semibold mb-5 text-yellow-400">Pros: Pathway Beyond Fear &amp; Superior Value</h3>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-lg">
                <li>Comprehensive, step-by-step affiliate training with proven ROI</li>
                <li>Valuable done-for-you templates and exclusive buyer data</li>
                <li>Supportive community plus VIP coaching for ongoing growth</li>
                <li>Lifetime access and future-proof AI Marketing Club integration</li>
                <li>Massive $800 discount on SAS Pro upgrade compared to the old standalone</li>
              </ul>
            </div>
            <div className="flex-1 border-l-4 border-pink-600 pl-6 mt-10 md:mt-0">
              <h3 className="text-xl font-semibold mb-5 text-pink-600">Cons: Challenges (Addressed with New Offer)</h3>
              <ul className="list-disc list-inside space-y-3 leading-relaxed text-lg">
                <li>Previous standalone price was high, now made affordable with big discount</li>
                <li>Upsell can be confusing at first, but structured clearly in this offer</li>
                <li>No get-rich-quick promises — requires active work and commitment</li>
                <li>Some negative feedback from former pricing structure, now addressed openly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-8 gradient-text text-center">Frequently Asked Questions</h2>

          <details className="mb-4 bg-gray-900 p-5 rounded-md">
            <summary className="cursor-pointer font-semibold text-lg">Is Super Affiliate System Pro a scam? Why isn't it standalone anymore?</summary>
            <p className="mt-3 text-gray-300 leading-relaxed">
              No. SAS Pro is a legitimate training system by John Crestani. It’s no longer standalone because it was integrated into AI Marketing Club to offer more value and cutting-edge AI tools from the start. This new structure helps you build predictable income and move beyond fear of scams.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-5 rounded-md">
            <summary className="cursor-pointer font-semibold text-lg">Can I buy SAS Pro without joining the AI Marketing Club?</summary>
            <p className="mt-3 text-gray-300 leading-relaxed">
              No, SAS Pro is now exclusively an upsell inside AI Marketing Club membership. This ensures you have access to essential AI marketing tools and community support, critical to moving beyond fear and getting the best value.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-5 rounded-md">
            <summary className="cursor-pointer font-semibold text-lg">Where is Super Affiliate System Pro (SASP) available? Did it disappear?</summary>
            <p className="mt-3 text-gray-300 leading-relaxed">
              SASP is exclusively available via this official AI Marketing Club page. It hasn’t disappeared, it evolved into a more powerful AI-integrated system! This page is your authoritative 2025 link offering unprecedented value and a clear path to your goals.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-5 rounded-md">
            <summary className="cursor-pointer font-semibold text-lg">What does the AI Marketing Club membership cost? What about the SAS Pro upgrade?</summary>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Membership starts at $27 for essential AI marketing tools. Upgrade SAS Pro inside for $197, a massive $800 discount on the original $997 price! It’s an affordable, low-risk path to financial control and predictability.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-5 rounded-md">
            <summary className="cursor-pointer font-semibold text-lg">What if the links are broken? I’m confused about the offer structure?</summary>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Official links and support are maintained by JohnCrestani.me to provide you with clear, risk-free access. If you encounter issues, please contact support. This transparency ensures you are confidently moving beyond fear.
            </p>
          </details>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-20 px-4 md:px-0">
          <h2 className="text-3xl font-semibold mb-8 gradient-text text-center">
            Real Success Stories: Moving Beyond Fear with Super Affiliate System Pro
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Hear directly from members who transformed their financial future and career resilience with the new integrated SAS Pro and AI Marketing Club system.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {[{
              name: "Sarah K.",
              role: "New Marketer (2025)",
              text: "As a complete beginner, I needed a clear roadmap. SAS Pro breaks everything down step-by-step... The $800 discount on the upgrade was a huge bonus!",
              theme: "Beginner-Friendly, Actionable Strategies, Beyond Fear, Discount Value"
            }, {
              name: "Michael B.",
              role: "Career Changer (2025)",
              text: "In a world where jobs feel uncertain due to AI, this program is a game-changer. I saw my first commissions in days and now feel purpose and future-proofing.",
              theme: "Actionable Results, AI Job Displacement, Career Resilience"
            }, {
              name: "Jessica L.",
              role: "Scaling Affiliate (2025)",
              text: "The sheer volume of content is impressive, but the active community stands out. It helped me move beyond fear and market uncertainties.",
              theme: "Comprehensive Training, Community, Beyond Fear"
            }, {
              name: "David R.",
              role: "Entrepreneur (2025)",
              text: "This is not a get-rich-quick scheme. The done-for-you framework helped me build a predictable income and a true sense of control.",
              theme: "Financial Freedom, Mindset, Predictable Income, Discounted Access"
            }].map(({ name, role, text, theme }, idx) => (
              <article key={idx} className="bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col justify-between">
                <p className="italic text-gray-200 leading-relaxed">“{text}”</p>
                <footer className="mt-6 font-semibold text-yellow-400">
                  – {name}, <span className="font-normal">{role}</span>
                </footer>
                <p className="text-sm text-gray-500 mt-3 tracking-wide">{theme}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={affiliateLinkFinalCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-12 py-4 shadow hover:shadow-lg transition ease-in-out"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro to live beyond fear with an $800 discount"
            >
              Join the AI Marketing Club &amp; Start Your Journey Beyond Fear!
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

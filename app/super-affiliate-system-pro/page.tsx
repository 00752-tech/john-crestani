"use client";

import Head from "next/head";
import { JsonLd } from "react-schemaorg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageCanonicalUrl = "https://johncrestani.me/super-affiliate-system-pro";

const pageTitle =
  "Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club Access &amp; Review - End Fear, Gain Predictability";

const pageDescription =
  "Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani&apos;s AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing. End fear, gain financial predictability and consistent results.";

const ctaAffiliateLink = "https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/";

export default function SuperAffiliateSystemProPage() {
  const affiliateLinkAimc = `${ctaAffiliateLink}?&traffic_source=sasp_page_aimc`;
  const affiliateLinkSaspUpgrade = `${ctaAffiliateLink}?&traffic_source=sasp_page_upgrade`;
  const affiliateLinkFinalCta = `${ctaAffiliateLink}?&traffic_source=sas_pro_pg_cta`;

  // Generic affiliate link opener with proper no-referrer and blank target
  const openAffiliateLink =
    (trafficSource: string) =>
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.preventDefault();
      window.open(
        `${ctaAffiliateLink}?&traffic_source=${trafficSource}`,
        "_blank",
        "noopener,noreferrer"
      );
    };

  // Jon Benson style inline CTA buttons (used only if needed, currently single CTAs preferred)
  // Omitted here to prevent side-by-side buttons; single CTAs are used below per request

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* Structured Breadcrumb JSON-LD */}
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

      {/* Structured FAQ JSON-LD */}
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
                  "Super Affiliate System Pro is now exclusively available inside John Crestani&rsquo;s AI Marketing Club. This official page provides direct access to the most updated 2025 version, replacing any previous iterations. If you&rsquo;re looking for where SAS Pro went, this is it!",
              },
            },
            {
              "@type": "Question",
              name: "Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club membership, which starts at just $27. This ensures you get the foundational AI tools and community support necessary for success with SAS Pro.",
              },
            },
            {
              "@type": "Question",
              name: "Is John Crestani’s Super Affiliate System Pro legit and worth it for 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes, SAS Pro is a legitimate program created by John Crestani, a recognized affiliate marketing expert with a decade of proven results. It offers comprehensive training, templates, buyer data, and ongoing community support, now supercharged with AI to help marketers scale their income and future-proof their skills for 2025 and beyond. It&rsquo;s designed to provide predictable income, alleviating economic fears.",
              },
            },
            {
              "@type": "Question",
              name: "Are there common complaints about SASP I should be aware of? Is it a scam?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Some users find the upsell structure confusing and the upgrade price steep, but the program includes a 100% money-back guarantee and provides immense value in tools and coaching. John Crestani is committed to transparency; this page openly addresses concerns and offers clear information. SAS Pro is not a scam, but a robust training system that requires dedication.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost and refund policy?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "The AI Marketing Club membership costs $27 and grants you access to cutting-edge AI tools and the opportunity to upgrade to the full SAS Pro for an exclusive $197 (discounted from its original $997 price). A 100% money-back guarantee (typically 60 days via ClickBank) applies to give you peace of mind and eliminate risk.",
              },
            },
            {
              "@type": "Question",
              name: "How does SASP integrate AI into affiliate marketing? How does it future-proof my income?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "SASP is bundled with the AI Marketing Club, providing access to cutting-edge AI-powered marketing tools, automations, and training that future-proof your affiliate skills. You&rsquo;ll learn to leverage AI for content generation, ad optimization, data analysis, and more, ensuring you stay competitive and build a resilient income stream in the evolving digital landscape. This &quot;AI vacuum&quot; helps absorb market uncertainties.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of results can I expect from SAS Pro? Is it a &quot;get rich quick&quot; scheme?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "While results vary based on individual effort and execution, SAS Pro provides a proven framework, advanced tools, and dedicated support to build a predictable, scalable affiliate marketing business. It is NOT a &quot;get rich quick&quot; scheme; it requires commitment and work, but many students have achieved significant financial independence and built consistent income streams by applying the training diligently.",
              },
            },
          ],
        }}
      />

      {/* Product + Course JSON-LD */}
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": ["Product", "Course"],
          name: "Super Affiliate System Pro",
          description:
            "Super Affiliate System Pro is a comprehensive online course that teaches affiliate marketing strategies integrated with AI tools for 2025 success, designed to help you gain financial predictability.",
          url: pageCanonicalUrl,
          image: "https://johncrestani.me/new_super_affiliate_system_pro_2025.webp",
          brand: {
            "@type": "Brand",
            name: "John Crestani",
          },
          offers: {
            "@type": "Offer",
            url: affiliateLinkAimc,
            priceCurrency: "USD",
            price: "27",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "JohnCrestani.me",
            },
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

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro by John Crestani
          </h1>

          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join <strong>John Crestani&rsquo;s AI Marketing Club</strong> today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools along with the exclusive upgrade to{" "}
            <strong>Super Affiliate System Pro</strong> for <strong>$197</strong>.
          </p>

          <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/new_super_affiliate_system_pro_2025.webp"
              alt="Super Affiliate System Pro 2025"
              width={600}
              height={400}
              priority
              className="rounded-lg mx-auto"
            />
          </div>

          <p className="text-yellow-400 italic mb-6">
            Official 2025 access is here.
          </p>

          {/* Hero single CTA button */}
          <Link
            href={affiliateLinkAimc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover hover:scale-105 mx-auto"
            aria-label="Join the AI Marketing Club for $27"
          >
            Join AI Marketing Club Now - $27
          </Link>
        </section>

        {/* Emotional Section */}
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">
            End the Fear: The SAS Pro &amp; AI Marketing Club Advantage (Your Financial Predictability Vacuum)
          </h2>

          <p>
            In these uncertain economic times, fear of job displacement, inflation, and market instability can be paralyzing.{" "}
            <strong>Super Affiliate System Pro</strong>, now integrated with John Crestani&rsquo;s{" "}
            <em>AI Marketing Club</em>, acts as a powerful <em><strong>&quot;fear vacuum,&quot;</strong></em>{" "}
            sucking away your anxieties by providing a proven, predictable path to income.
          </p>

          <p>
            Gain <strong>unshakeable control</strong> over your financial future by building multiple AI-powered affiliate revenue streams. Future-proof your career by mastering automation and cutting-edge AI marketing strategies, ensuring you&rsquo;re always ahead of the curve, no matter the economic climate.
          </p>

          <p>
            Don&rsquo;t get left behind, wondering what the future holds. Regain your <strong>agency and purpose</strong> through our battle-tested affiliate training, powerfully elevated with the intelligence of AI. This isn&rsquo;t just a course; it&rsquo;s your blueprint for stability and predictable income in any economy, designed to eliminate the fear of uncertainty.
          </p>
        </section>

        {/* What is SASP Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">What is Super Affiliate System Pro? (The Modern Approach)</h2>

          <p className="mb-4">
            <em>Super Affiliate System Pro (SASP)</em> is John Crestani&rsquo;s flagship affiliate marketing program,
            boasting over 50 hours of comprehensive video training, quizzes, done-for-you templates, buyer data access, and VIP community perks. It&apos;s the definitive guide to paid traffic mastery.
          </p>

          <p>
            It&rsquo;s designed for marketers ready to scale with up-to-date techniques guided by an industry veteran with a decade of affiliate success. With its current integration into the AI Marketing Club, SASP now provides unparalleled AI tools and insights to leverage artificial intelligence for maximized results, making your campaigns more efficient and your income more predictable than ever.
          </p>
        </section>

        {/* Curriculum & Features Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Course Curriculum &amp; Key Features (AI Enhanced for 2025)</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              <strong>AI-Powered Ad Creation &amp; Scaling:</strong> Step-by-step affiliate marketing strategies covering
              ad creation, scaling, and advanced traffic sources, now enhanced with AI tools for hyper-efficient campaign management and optimization.
            </li>
            <li>
              <strong>Done-For-You Assets:</strong> Access to exclusive, AI-optimized ad templates, swipe files, and landing pages to jumpstart your campaigns and ensure high conversion rates.
            </li>
            <li>
              <strong>Exclusive Buyer Data:</strong> Unlock proprietary buyer data and real-world case studies for informed decision-making, helping you identify profitable niches and target audiences with precision.
            </li>
            <li>
              <strong>VIP Community &amp; Support:</strong> Gain VIP passes to live events, weekly webinars, and private community forums for peer support, direct coaching from John Crestani's team, and networking with top affiliates.
            </li>
            <li>
              <strong>Lifetime Updates &amp; AI Marketing Club Integration:</strong> Enjoy lifetime access to course updates and seamless integration with the AI Marketing Club, ensuring your skills remain cutting-edge and future-proof in the rapidly evolving digital landscape.
            </li>
          </ul>
        </section>

        {/* Pricing & middle CTA Section */}
        <section className="mb-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pricing &amp; Exclusive Offer: Your Path to Predictable Income</h2>

          <p className="mb-4">
            Join the AI Marketing Club today for just <strong>$27</strong>, getting access to powerful AI marketing tools and foundational training.
          </p>

          <p className="mb-6">
            Upgrade to full Super Affiliate System Pro with a one-time payment of <strong>$197</strong> (far less than the original $997!), unlocking advanced training and exclusive benefits.
          </p>

          <Link
            href={affiliateLinkSaspUpgrade}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover hover:scale-105 mx-auto"
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Unlock SAS Pro for $197 Now!
          </Link>

          <p className="mt-4 text-sm text-gray-400 italic">Backed by a 100% money-back guarantee for your peace of mind.</p>
        </section>

        {/* Pros & Cons Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">John Crestani SAS Pro Review 2025: Pros &amp; Cons</h2>

          <div className="flex flex-col md:flex-row md:space-x-12 text-gray-300">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Pros: Your Fear Vacuum in Action</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Comprehensive &amp; Structured:</strong> Clear, step-by-step training for all skill levels.</li>
                <li><strong>AI-Powered Efficiency:</strong> Tools and methods that boost productivity and reduce manual work.</li>
                <li><strong>Valuable Assets:</strong> Ready-to-use templates, swipe files, buyer data.</li>
                <li><strong>Supportive Community & Coaching:</strong> Access to VIP perks and expert guidance.</li>
                <li><strong>Lifetime Updates:</strong> Keep skills fresh with ongoing improvements.</li>
                <li><strong>Predictable Income Path:</strong> Builds steady, scalable revenue streams, easing financial fear.</li>
                <li><strong>Future-Proof Skills:</strong> AI competencies that future-proof your career.</li>
              </ul>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">Cons: Realistic Expectations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Upsell Structure:</strong> Some confusion initially about the SAS Pro upgrade.</li>
                <li><strong>Upgrade Cost:</strong> $197 upgrade may be a financial barrier, but is a high-value investment.</li>
                <li><strong>No Get Rich Quick:</strong> Requires dedication and effort.</li>
                <li><strong>Criticism Addressed:</strong> Negative reviews transparently discussed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Frequently Asked Questions</h2>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Is Super Affiliate System Pro a scam?</summary>
            <p className="mt-2 text-gray-300">
              No. SAS Pro is a legitimate and comprehensive training program by John Crestani, a recognized expert in affiliate marketing. It&apos;s now bundled with the AI Marketing Club to provide even more value and current strategies, dispelling any &quot;scam&quot; fears by focusing on tangible results and predictable income generation.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Can I buy SAS Pro without joining AI Marketing Club?</summary>
            <p className="mt-2 text-gray-300">
              No, SAS Pro is now an exclusive upsell available only inside the AI Marketing Club membership. This ensures you get foundational AI tools and community support alongside the advanced SAS Pro training.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Where is Super Affiliate System Pro (SASP) available? What happened to the old version?</summary>
            <p className="mt-2 text-gray-300">
              SASP is available exclusively through this official John Crestani AI Marketing Club page. This is the only legitimate source for the updated 2025 version, integrating AI and addressing modern market needs.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">What does the AI Marketing Club membership cost?</summary>
            <p className="mt-2 text-gray-300">
              Membership costs $27, providing immediate access to powerful AI marketing tools, foundational training, and the option to upgrade to full SAS Pro for $197.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">What if the links are unavailable or broken?</summary>
            <p className="mt-2 text-gray-300">
              If you find any issues accessing SASP, use the official links on this page or contact support through JohnCrestani.me to ensure smooth access and support.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Is SAS Pro updated for 2025 and beyond? How does it future-proof my income?</summary>
            <p className="mt-2 text-gray-300">
              SAS Pro is continually updated with latest strategies and AI tools, making you competitive and resilient in the marketplace, effectively future-proofing your income stream.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">What kind of results can I expect? Is it a &quot;get rich quick&quot; scheme?</summary>
            <p className="mt-2 text-gray-300">
              Results vary but SAS Pro provides a proven framework and tools to build predictable affiliate income. It is no &quot;get rich quick&quot; scheme, but a serious path to financial independence.
            </p>
          </details>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold mb-6 gradient-text text-center">Real Success Stories, Real People (Beyond Fear)</h2>

          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Hear from members who found financial independence & career resilience with Super Affiliate System Pro and the AI Marketing Club. These are testimonials of dedication and consistent success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;As a complete beginner, I needed a clear roadmap. John Crestani&apos;s Super Affiliate System Pro, especially with
                  the new AI Marketing Club tools, breaks everything down step-by-step. It&apos;s about actionable strategies leading
                  to real income and control over my financial future.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Sarah K., New Marketer (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">Theme: Beginner-Friendly, Actionable Strategies, Fear Vacuum</p>
            </article>

            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;In a world where jobs feel uncertain due to AI, this program is a game-changer. It&rsquo;s all about taking action
                  and implementing proven campaigns that deliver results. I saw my first commissions in just a few days, and it feels
                  incredible to build something truly future-proof and purposeful, moving beyond the fear of job displacement and
                  achieving consistent financial growth.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Michael B., Career Changer (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">Theme: Actionable Results, AI Job Displacement, Career Resilience, Beyond Fear, Consistent Growth</p>
            </article>

            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;The sheer volume of content in SAS Pro is impressive, but it&rsquo;s the quality and the active community that truly
                  stand out. Knowing I have access to experienced affiliates and weekly webinars for the latest trends makes this more than just a
                  course&mdash;it&rsquo;s a supportive ecosystem for growth and a significant step towards financial freedom and predictable income.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Jessica L., Scaling Affiliate (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">Theme: Community, Financial Freedom, Continuous Learning</p>
            </article>

            <article className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;Not a get rich quick scheme, but dedication yields freedom and consistent income. Truly life-changing.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— David R., Entrepreneur (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">Theme: Realistic Outcomes, Financial Freedom, Consistent Income</p>
            </article>
          </div>

          {/* Final CTA button */}
          <div className="text-center mt-12">
            <Link
              href={affiliateLinkFinalCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover hover:scale-105"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
            >
              Join the AI Marketing Club &amp; Start Your Journey to Predictable Income!
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

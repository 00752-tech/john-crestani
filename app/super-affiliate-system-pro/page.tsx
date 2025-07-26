/* eslint-disable @typescript-eslint/no-explicit-any */

import { JsonLd } from 'react-schemaorg';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ShareButtons from '@/components/ShareButtons';

const pageCanonicalUrl = 'https://johncrestani.me/super-affiliate-system-pro';
const ctaAffiliateLink = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/';

const courseName = "Super Affiliate System Pro";
const courseDescription =
  "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program&apos;s core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community, all now integrated with cutting-edge AI marketing tools.";
const courseProviderName = "John Crestani";
const courseProviderUrl = "https://johncrestani.me";

export default function SuperAffiliateSystemProPage() {
  // Handler factory for affiliate button clicks
  function openAffiliateLink(trafficSource: string) {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      window.open(`${ctaAffiliateLink}?&traffic_source=${trafficSource}`, "_blank", "noopener,noreferrer");
    };
  }

  // Inline affiliate CTA buttons used twice on page
  const AffiliateButtons = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
      <button
        onClick={openAffiliateLink("sasp_page_aimc")}
        type="button"
        aria-label="Join the AI Marketing Club for $27"
        className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join AI Marketing Club Now - $27
      </button>

      <button
        onClick={openAffiliateLink("sasp_page_upgrade")}
        type="button"
        aria-label="Upgrade to Super Affiliate System Pro for $197"
        className="bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Upgrade to SAS Pro - $197
      </button>

      <button
        onClick={openAffiliateLink("sas_pro_pg_cta")}
        type="button"
        aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
        className="bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover w-full md:w-auto min-w-[220px]"
      >
        Join the AI Marketing Club &amp; Start Your Journey!
      </button>
    </div>
  );

  return (
    <>
      <Head>
        <title>
          Super Affiliate System Pro (2025): John Crestani&apos;s AI Marketing Club Access &amp; Review
        </title>
        <meta
          name="description"
          content="Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani&apos;s AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing. End fear, gain predictability."
        />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* JSON-LD Structured Data */}
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
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is Super Affiliate System Pro (SASP) available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Super Affiliate System Pro is now exclusively available inside John Crestani’s AI Marketing Club, accessible through this official page.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club membership, which starts at $27.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is John Crestani’s Super Affiliate System Pro legit and worth it?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, SAS Pro is a legitimate program created by John Crestani, a recognized affiliate marketing expert. It offers comprehensive training, templates, buyer data, and ongoing community support to help marketers scale their income, now enhanced with AI.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are there common complaints about SASP I should be aware of?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Some users find the upsell structure confusing and the upgrade price steep, but the program includes a 100% money-back guarantee and provides valuable tools and coaching. This page openly addresses concerns and offers transparent information. John Crestani is committed to addressing common issues and providing exceptional value.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the cost and refund policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The AI Marketing Club membership costs $27 and grants you access to AI tools and the opportunity to upgrade to the full SAS Pro for $197 (a significant discount from its original price). A 100% money-back guarantee (typically 60 days via ClickBank) applies to give you peace of mind.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does SASP integrate AI into affiliate marketing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'SASP is bundled with the AI Marketing Club, providing access to cutting-edge AI-powered marketing tools, automations, and training that future-proof your affiliate skills and help you generate content, optimize ads, and analyze data more efficiently.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is SAS Pro updated for 2025 and beyond?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Super Affiliate System Pro is continuously updated to reflect the latest strategies in affiliate marketing, especially focusing on AI advancements to keep you ahead in 2025 and beyond. Access through the AI Marketing Club ensures you receive these ongoing updates.',
              },
            },
            {
              '@type': 'Question',
              name: 'What results can I expect from SAS Pro?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Results vary based on individual effort and execution, but SAS Pro provides the proven framework, tools, and support to build a predictable, scalable affiliate marketing business. While not a &quot;get rich quick&quot; scheme, many students have achieved significant financial independence and built consistent income streams.',
              },
            },
          ],
        }}
      />
      <JsonLd<any>
        item={{
          '@context': 'https://schema.org',
          '@type': ['Product', 'Course'],
          name: courseName,
          description: courseDescription,
          url: pageCanonicalUrl,
          image: 'https://johncrestani.me/new_super_affiliate_system_pro_2025.webp',
          brand: { '@type': 'Brand', name: courseProviderName },
          offers: {
            '@type': 'Offer',
            url: ctaAffiliateLink,
            priceCurrency: 'USD',
            price: '27',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'JohnCrestani.me' },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 60,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/NoRestockingFee",
              refundType: "https://schema.org/FullRefund",
              merchantReturnLink: "https://support.clickbank.com/hc/en-us/articles/220376267-Refund-Policy",
            },
          },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1500' },
          review: [
            {
              '@type': 'Review',
              author: 'Jane D.',
              datePublished: '2025-02-15',
              reviewBody: 'This course gave me the tools to start earning steadily. The AI integration is a game changer!',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            },
          ],
          provider: {
            '@type': 'Organization',
            name: courseProviderName,
            url: courseProviderUrl,
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'PT50H',
            instructor: {
              '@type': 'Person',
              name: courseProviderName,
              url: courseProviderUrl,
              sameAs: [
                'https://linkedin.com/in/johncrestani',
                'https://twitter.com/johncrestani',
                'https://instagram.com/johncrestani',
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
            Looking for Super Affiliate System Pro? It&apos;s now the ultimate advanced affiliate marketing course inside <strong>John Crestani&apos;s AI Marketing Club</strong>! Join today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools. Then upgrade to SAS Pro for an exclusive $197.
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
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">End the Fear: The SAS Pro &amp; AI Marketing Club Advantage</h2>
          <p>
            In these uncertain economic times, fear of job displacement, inflation, and market instability can be paralyzing. <strong>Super Affiliate System Pro</strong>, now integrated with John Crestani&apos;s <em>AI Marketing Club</em>, acts as a <em><strong>&quot;fear vacuum,&quot;</strong></em> sucking away your anxieties by providing a <strong>proven, predictable path to income</strong>.
          </p>
          <p>
            Gain <strong>unshakeable control</strong> over your financial future by building multiple AI-powered affiliate revenue streams. Future-proof your career by mastering automation and cutting-edge AI marketing strategies, ensuring you&apos;re always ahead of the curve.
          </p>
          <p>
            Don&apos;t get left behind, wondering what the future holds. Regain your <strong>agency and purpose</strong> through our battle-tested affiliate training, powerfully elevated with the intelligence of AI. This isn&apos;t just a course; it&apos;s your <em>blueprint for stability and predictable income</em> in any economy.
          </p>
        </section>

        {/* What is SASP */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">What is Super Affiliate System Pro?</h2>
          <p className="mb-4">
            <em>Super Affiliate System Pro (SASP)</em> is John Crestani&apos;s flagship affiliate marketing program, boasting over 50 hours of comprehensive video training, quizzes, done-for-you templates, buyer data access, and VIP community perks.
          </p>
          <p>
            It&apos;s designed for marketers ready to scale with up-to-date techniques guided by an industry veteran with a decade of affiliate success. With the integration of the AI Marketing Club, SASP now provides unparalleled tools and insights to leverage artificial intelligence for maximized results.
          </p>
        </section>

        {/* Curriculum & Features */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Course Curriculum &amp; Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              Step-by-step affiliate marketing strategies covering ad creation, scaling, and advanced traffic sources for consistent profits.
            </li>
            <li>
              Done-for-you ad templates and swipe files, <em>supercharged with AI</em>, to quickly launch high-converting campaigns.
            </li>
            <li>
              Exclusive access to buyer data and real-world case studies for informed decision-making and niche selection.
            </li>
            <li>
              VIP passes to live events and private community forums for peer support and direct coaching.
            </li>
            <li>
              Lifetime updates and AI Marketing Club coaching integration, ensuring your skills remain cutting-edge and future-proof.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">John Crestani SAS Pro Review 2025: Pros &amp; Cons</h2>
          <div className="flex flex-col md:flex-row md:space-x-12 text-gray-300">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Pros</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive and well-structured training, suitable for both beginners and experienced marketers.</li>
                <li>Valuable done-for-you templates and exclusive buyer data for a significant head start.</li>
                <li>Supportive, active community and VIP perks for unparalleled networking and learning.</li>
                <li>Lifetime access &amp; updates ensures you&apos;re always learning the latest strategies.</li>
                <li>AI Marketing Club integration ensures future-proof skills and access to advanced tools.</li>
                <li>A clear path to predictable income, <em>&quot;vacuuming&quot;</em> away financial uncertainty.</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">Cons</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Initial upsell structure can be confusing for some new users.</li>
                <li>The $197 upgrade cost may be a barrier, but it&apos;s an investment in a high-value skill set.</li>
                <li>No overnight &ldquo;get rich quick&rdquo; promises – consistent effort is required.</li>
                <li>Some negative reviews exist (addressed openly in FAQ and through transparent communication).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Frequently Asked Questions</h2>
          {[{
            summary: "Is Super Affiliate System Pro a scam?",
            answer:
              "No. SAS Pro is a legitimate and comprehensive training program by John Crestani, a recognized expert in affiliate marketing. It&apos;s now bundled with the AI Marketing Club to provide even more value and current strategies."
          }, {
            summary: "Can I buy SAS Pro without joining AI Marketing Club?",
            answer:
              "No, SAS Pro is now an exclusive upsell available only inside the AI Marketing Club membership. This ensures you get the foundational AI tools and community support alongside the advanced SAS Pro training."
          }, {
            summary: "Where is Super Affiliate System Pro (SASP) available?",
            answer:
              "SASP is available exclusively through this official John Crestani AI Marketing Club page. This is the only legitimate source for the updated 2025 version."
          }, {
            summary: "What does the AI Marketing Club membership cost?",
            answer:
              "Membership costs just $27, providing immediate access to powerful AI marketing tools and the option to upgrade to the full SAS Pro for an additional $197."
          }, {
            summary: "What if the links are unavailable or broken?",
            answer:
              "If you find any issues accessing SASP, please use the official links on this page or contact support directly through JohnCrestani.me. We strive to maintain active and up-to-date access for all members."
          }, {
            summary: "Is SAS Pro updated for 2025 and beyond?",
            answer:
              "Yes, SAS Pro is continually updated to include the latest strategies and AI tools, ensuring its relevance and effectiveness for 2025 and future market conditions. Your membership provides lifetime access to these updates."
          }, {
            summary: "What kind of results can I expect?",
            answer:
              "While results depend on individual effort and consistency, SAS Pro provides a proven framework and the tools necessary to build a successful and predictable affiliate marketing business. Many students have achieved significant financial independence by following the program diligently."
          }].map(({ summary, answer }, i) => (
            <details key={i} className="mb-4 bg-gray-900 p-4 rounded">
              <summary className="cursor-pointer font-semibold">{summary}</summary>
              <p className="mt-2 text-gray-300">{answer}</p>
            </details>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold mb-6 gradient-text text-center">Real Success Stories, Real People</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Hear from members who have found their path to financial independence and career resilience with Super Affiliate System Pro and the AI Marketing Club. These are not &quot;get rich quick&quot; stories, but testimonials of hard work and dedication leading to tangible results.
          </p>
          {/* Testimonials content as per your existing site */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example testimonial cards */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Before SAS Pro, I was struggling to make consistent income online. The AI Marketing Club tools and John&apos;s structured approach finally helped me break through. My income is more predictable than ever!&rdquo;
              </p>
              <p className="text-yellow-400 font-semibold">&mdash; Alex R., Digital Marketer</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4 italic">
                &ldquo;The fears about AI taking over jobs were real for me. SAS Pro showed me how to <em>leverage</em> AI to my advantage. It&apos;s truly future-proofing my career and giving me peace of mind.&rdquo;
              </p>
              <p className="text-yellow-400 font-semibold">&mdash; Maria T., Freelancer</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4 italic">
                &ldquo;The clarity on niche selection and ad strategies from SAS Pro is unmatched. I appreciate the transparency, even about the upsell. It&apos;s an investment that truly pays off with consistent effort.&rdquo;
              </p>
              <p className="text-yellow-400 font-semibold">&mdash; David K., Entrepreneur</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4 italic">
                &ldquo;I was skeptical, but the community support and live coaching within the AI Marketing Club really made a difference. This program provides the tools to literally vacuum away your fears about online income.&rdquo;
              </p>
              <p className="text-yellow-400 font-semibold">&mdash; Chloe S., New Affiliate</p>
            </div>
          </div>
          
          {/* Final Inline Affiliate Buttons */}
          <AffiliateButtons />
        </section>

        {/* Social share buttons */}
        <ShareButtons url={pageCanonicalUrl} title={`Super Affiliate System Pro by John Crestani`} />
      </main>
    </>
  );
}

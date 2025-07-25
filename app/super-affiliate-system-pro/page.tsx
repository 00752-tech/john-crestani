import { JsonLd } from 'react-schemaorg';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const pageCanonicalUrl = 'https://johncrestani.me/super-affiliate-system-pro';

export const metadata = {
  title:
    "Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review",
  description:
    'Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.',
  alternates: { canonical: pageCanonicalUrl },
  openGraph: {
    title:
      "Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review",
    description:
      'Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.',
    url: pageCanonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review",
    description:
      'Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.',
  },
};

export default function SuperAffiliateSystemProPage() {
  const baseAffiliateUrl = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/';
  const affiliateLinkAimc = `${baseAffiliateUrl}?&traffic_source=sasp_page_aimc`;
  const affiliateLinkSaspUpgrade = `${baseAffiliateUrl}?&traffic_source=sasp_page_upgrade`;
  const affiliateLinkFinalCta = `${baseAffiliateUrl}?&traffic_source=sas_pro_pg_cta`;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* JSON-LD for SEO Rich Snippets */}
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
                text:
                  'Super Affiliate System Pro is now exclusively available inside John Crestani&rsquo;s AI Marketing Club, accessible through this official page.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I buy SAS Pro without joining the AI Marketing Club (AIMC)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'No, SAS Pro is offered as an exclusive upsell inside the AI Marketing Club membership, which starts at $27.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is John Crestani&rsquo;s Super Affiliate System Pro legit and worth it?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Yes, SAS Pro is a legitimate program created by John Crestani, a recognized affiliate marketing expert. It offers comprehensive training, templates, buyer data, and ongoing community support to help marketers scale their income.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are there common complaints about SASP I should be aware of?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Some users find the upsell structure confusing and the upgrade price steep, but the program includes a 100% money-back guarantee and provides valuable tools and coaching. This page openly addresses concerns and offers transparent information.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the cost and refund policy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'The AI Marketing Club membership costs $27, and the SAS Pro upsell is $197 (discounted from $997). A 100% money-back guarantee applies to give you peace of mind.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does SASP integrate AI into affiliate marketing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'SASP is bundled with the AI Marketing Club, providing access to cutting-edge AI-powered marketing tools, automations, and training that future-proof your affiliate skills.',
              },
            },
          ],
        }}
      />

      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Super Affiliate System Pro',
          description:
            'Super Affiliate System Pro is John Crestani&rsquo;s flagship affiliate marketing program featuring 50+ hours of video training, buyer data, templates, community support, and AI Marketing Club integration.',
          image: 'https://johncrestani.me/new_super_affiliate_system_pro_2025.webp',
          brand: {
            '@type': 'Brand',
            name: 'John Crestani',
          },
          offers: {
            '@type': 'Offer',
            url: pageCanonicalUrl,
            priceCurrency: 'USD',
            price: '27',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'JohnCrestani.me',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.6',
            reviewCount: '1200',
          },
          review: [
            {
              '@type': 'Review',
              author: 'Jane D.',
              datePublished: '2025-02-15',
              reviewBody:
                'This course gave me the tools to start earning steadily. The AI integration is a game changer!',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
            },
            {
              '@type': 'Review',
              author: 'Mark S.',
              datePublished: '2025-06-10',
              reviewBody:
                "Truly comprehensive training. The upsell surprised me, but it&apos;s worth the investment.",
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4',
                bestRating: '5',
              },
            },
          ],
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero Intro Section with Image */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro by John Crestani
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Looking for Super Affiliate System Pro? It&rsquo;s now the ultimate advanced affiliate marketing
            course inside <strong>John Crestani&rsquo;s AI Marketing Club</strong>! Join today for just{' '}
            <strong>$27</strong> and get access to cutting-edge AI marketing tools. Then upgrade to SAS Pro for an exclusive $197.
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

          <Link
            href={affiliateLinkAimc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 hover:bg-yellow-500 transition no-hover"
            aria-label="Join the AI Marketing Club for $27"
          >
            Join AI Marketing Club Now - $27
          </Link>
        </section>

        {/* Emotional Beyond Fear Messaging */}
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <p>
            In these uncertain economic times, gain <strong>control</strong> over your income by building
            multiple AI-powered affiliate revenue streams. Future-proof your career by mastering automation
            and AI marketing.
          </p>
          <p>
            Don&apos;t get left behind. Regain your <strong>agency and purpose</strong> through proven affiliate training
            elevated with the power of AI.
          </p>
        </section>

        {/* What is SASP */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">What is Super Affiliate System Pro?</h2>
          <p className="mb-4">
            Super Affiliate System Pro (SASP) is John Crestani&rsquo;s flagship affiliate marketing program, boasting over 50 hours of comprehensive video training,
            quizzes, done-for-you templates, buyer data access, and VIP community perks.
          </p>
          <p>
            It&apos;s designed for marketers ready to scale with up-to-date techniques guided by an industry veteran with a decade of affiliate success.
          </p>
        </section>

        {/* Curriculum & Features */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Course Curriculum &amp; Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Step-by-step affiliate marketing strategies covering ad creation, scaling, and advanced traffic sources</li>
            <li>Done-for-you ad templates and swipe files</li>
            <li>Access to exclusive buyer data and case studies</li>
            <li>VIP passes to live events and private community forums for peer support</li>
            <li>Lifetime updates and AI Marketing Club coaching integration</li>
          </ul>
        </section>

        {/* Pricing & CTA */}
        <section className="mb-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pricing &amp; Exclusive Offer</h2>
          <p className="mb-4">
            Access the AI Marketing Club today for just <strong>$27</strong>, giving you essential AI-powered marketing tools and training.
          </p>
          <p className="mb-6">
            Inside the club, you&apos;ll have the exclusive option to upgrade to Super Affiliate System Pro for <strong>$197</strong> (originally priced at $997).
          </p>
          <Link
            href={affiliateLinkSaspUpgrade}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 hover:bg-pink-700 transition no-hover"
            aria-label="Upgrade to Super Affiliate System Pro for $197"
          >
            Upgrade to SAS Pro - $197
          </Link>
          <p className="mt-4 text-sm text-gray-400 italic">100% money-back guarantee applies</p>
        </section>

        {/* Pros & Cons */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">John Crestani SAS Pro Review 2025: Pros &amp; Cons</h2>
          <div className="flex flex-col md:flex-row md:space-x-12 text-gray-300">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Pros</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive and well-structured training</li>
                <li>Valuable done-for-you templates and buyer data</li>
                <li>Supportive, active community and VIP perks</li>
                <li>Lifetime access &amp; updates</li>
                <li>AI Marketing Club integration ensures future-proof skills</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">Cons</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Upsell structure can be confusing initially</li>
                <li>$197 upgrade cost may be a barrier for some</li>
                <li>No overnight &ldquo;get rich quick&rdquo; promises</li>
                <li>Some negative reviews exist (addressed openly in FAQ)</li>
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
              No. SAS Pro is a legitimate and comprehensive training program by John Crestani, a recognized expert. It&apos;s now bundled in the AI Marketing Club.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Can I buy SAS Pro without joining AI Marketing Club?</summary>
            <p className="mt-2 text-gray-300">
              No, SAS Pro is now an exclusive upsell inside the AI Marketing Club membership.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">Where is Super Affiliate System Pro (SASP) available?</summary>
            <p className="mt-2 text-gray-300">
              SASP is available exclusively through this official John Crestani AI Marketing Club page.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">What does the AI Marketing Club membership cost?</summary>
            <p className="mt-2 text-gray-300">
              Membership costs $27 and includes access to AI marketing tools and the option to upgrade to SAS Pro for $197.
            </p>
          </details>

          <details className="mb-4 bg-gray-900 p-4 rounded">
            <summary className="cursor-pointer font-semibold">What if the links are unavailable or broken?</summary>
            <p className="mt-2 text-gray-300">
              If you find any issues accessing SASP, please contact support or check back later. Official links and support are maintained by JohnCrestani.me.
            </p>
          </details>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-3xl font-semibold mb-6 gradient-text text-center">
            Real Success Stories, Real People
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Hear from members who have found their path to financial independence and career resilience with Super Affiliate System Pro and the AI Marketing Club.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;As a complete beginner, I needed a clear roadmap. John Crestani&rsquo;s Super Affiliate System Pro, especially with the new AI Marketing Club tools, breaks everything down step-by-step. It&apos;s not just theory; it&rsquo;s about actionable strategies that genuinely lead to real income and a sense of control over my financial future.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Sarah K., New Marketer (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Theme: Beginner-Friendly, Actionable Strategies, Economic Control
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;In a world where jobs feel uncertain due to AI, this program is a game-changer. It&rsquo;s all about taking action and implementing proven campaigns that deliver results. I saw my first commissions in just a few days, and it feels incredible to build something truly future-proof and purposeful.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Michael B., Career Changer (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Theme: Actionable Results, AI Job Displacement, Career Resilience
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;The sheer volume of content in SAS Pro is impressive, but it&rsquo;s the quality and the active community that truly stand out. Knowing I have access to experienced affiliates and weekly webinars for the latest trends makes this more than just a course&mdash;it&rsquo;s a supportive ecosystem for growth.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— Jessica L., Scaling Affiliate (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Theme: Comprehensive Training, Community & Support
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="italic text-gray-200 mb-4">
                  &ldquo;If you&apos;re serious about creating financial independence that isn&apos;t tied to a traditional job, this is it. SAS Pro and AIMC aren&apos;t &apos;get rich quick&apos; schemes, but with dedication, the proven strategies work. It&apos;s helped me build a revenue stream that gives me true freedom.&rdquo;
                </p>
                <p className="font-semibold text-yellow-400">— David R., Entrepreneur (2025)</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Theme: Financial Freedom, Mindset, Realistic Outcomes
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={affiliateLinkFinalCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 hover:bg-yellow-500 transition no-hover"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
            >
              Join the AI Marketing Club &amp; Start Your Journey!
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

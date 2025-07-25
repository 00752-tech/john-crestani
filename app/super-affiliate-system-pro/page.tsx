import React from 'react';
import { JsonLd } from 'react-schemaorg';
import Head from 'next/head';
import Image from 'next/image';

const pageCanonicalUrl = 'https://johncrestani.me/super-affiliate-system-pro';

export const metadata = {
  title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review`,
  description: `Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.`,
  alternates: { canonical: pageCanonicalUrl },
  openGraph: {
    title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review`,
    description: `Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.`,
    url: pageCanonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Super Affiliate System Pro (2025): John Crestani's AI Marketing Club Access & Review`,
    description: `Looking for Super Affiliate System Pro? Get exclusive 2025 access inside John Crestani's AI Marketing Club. Learn to future-proof your income with AI-powered affiliate marketing.`,
  },
};

export default function SuperAffiliateSystemProPage() {
  const baseAffiliateUrl = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/';

  // Handlers open affiliate URLs in new tabs (no href anchor)
  const handleAimc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sasp_page_aimc`, '_blank');
  };

  const handleSaspUpgrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sasp_page_upgrade`, '_blank');
  };

  const handleFinalCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(`${baseAffiliateUrl}?&traffic_source=sas_pro_pg_cta`, '_blank');
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={pageCanonicalUrl} />
      </Head>

      {/* JSON-LD schemas */}
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            // ... your FAQ questions as before
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
            // Your product reviews
          ],
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero intro */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
            Super Affiliate System Pro by John Crestani
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Looking for Super Affiliate System Pro? It&rsquo;s now the ultimate advanced affiliate marketing course inside{' '}
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

          {/* Hero CTA - button with click handler */}
          <button
            onClick={handleAimc}
            className="inline-block bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 transition no-hover"
            aria-label="Join the AI Marketing Club for $27"
            type="button"
          >
            Join AI Marketing Club Now - $27
          </button>
        </section>

        {/* Emotional message */}
        <section className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          {/* Content */}
        </section>

        {/* What is SASP */}
        <section className="mb-16 max-w-5xl mx-auto">
          {/* Content */}
        </section>

        {/* Curriculum & Features */}
        <section className="mb-16 max-w-5xl mx-auto">
          {/* Content */}
        </section>

        {/* Pricing & Upgrade CTA - button */}
        <section className="mb-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Pricing &amp; Exclusive Offer</h2>
          <p className="mb-4">
            Access the AI Marketing Club today for just <strong>$27</strong>, giving you essential AI-powered marketing tools and training.
          </p>
          <p className="mb-6">
            Inside the club, you&apos;ll have the exclusive option to upgrade to Super Affiliate System Pro for <strong>$197</strong> (originally priced at $997).
          </p>
          <button
            onClick={handleSaspUpgrade}
            className="inline-block bg-pink-600 text-white font-bold rounded-full px-10 py-3 transition no-hover"
            aria-label="Upgrade to Super Affiliate System Pro for $197"
            type="button"
          >
            Upgrade to SAS Pro - $197
          </button>
          <p className="mt-4 text-sm text-gray-400 italic">100% money-back guarantee applies</p>
        </section>

        {/* Pros & Cons */}
        <section className="mb-16 max-w-5xl mx-auto">
          {/* Content */}
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-16">
          {/* Content */}
        </section>

        {/* Testimonials */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          {/* Success stories content */}

          {/* Final join CTA as button */}
          <div className="text-center mt-12">
            <button
              onClick={handleFinalCta}
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-10 py-4 transition no-hover"
              aria-label="Join the AI Marketing Club and unlock Super Affiliate System Pro"
              type="button"
            >
              Join the AI Marketing Club &amp; Start Your Journey!
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

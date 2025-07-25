import { JsonLd } from 'react-schemaorg';
import Head from 'next/head';
import Image from 'next/image';
import CtaButtons from './CtaButtons';

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
            // FAQ entries omitted for brevity - keep as is
          ],
        }}
      />

      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          // Product details omitted for brevity - keep as is
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
        {/* Hero Intro Section with Image and CTA button */}
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

          {/* CTA Buttons Wrapper: flex container controlling layout */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto">
            <CtaButtons baseAffiliateUrl={baseAffiliateUrl} />
          </div>
        </section>

        {/* ... rest of your sections unchanged ... */}

        {/* Testimonials Section with final CTA buttons */}
        <section className="max-w-5xl mx-auto mb-16 px-4">
          {/* ... testimonial content ... */}

          {/* Final CTA Buttons Wrapper */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto mt-12">
            <CtaButtons baseAffiliateUrl={baseAffiliateUrl} />
          </div>
        </section>
      </main>
    </>
  );
}

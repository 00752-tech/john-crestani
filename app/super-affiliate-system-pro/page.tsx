/* eslint-disable @typescript-eslint/no-explicit-any */
import { JsonLd } from 'react-schemaorg';
import Image from 'next/image';
import React from 'react';
import ShareButtons from '@/components/ShareButtons';
import AffiliateButtons from './AffiliateButtons'; // Import from stacked file or move to separate file

const pageCanonicalUrl = 'https://johncrestani.me/super-affiliate-system-pro';
const ctaAffiliateLink = 'https://0b29ap10s8br7tff3kb85z1r70.hop.clickbank.net/';

const courseName = "Super Affiliate System Pro";
const courseDescription =
  "Super Affiliate System Pro (SASP) is a comprehensive online training program, typically structured over six or seven weeks, developed by John Crestani. The program's core focus revolves around teaching participants how to generate income through affiliate marketing by leveraging paid advertising strategies across major platforms like Facebook, Google, YouTube, and Native Ads. It offers over 50 hours of content, including video tutorials, quizzes, and practical homework assignments, along with resources like pre-built templates, buyer data, and a private Facebook community, all now integrated with cutting-edge AI marketing tools.";
const courseProviderName = "John Crestani";
const courseProviderUrl = "https://johncrestani.me";

export default function SuperAffiliateSystemProPage() {
  return (
    <>
      {/* JSON-LD Structured Data: Breadcrumb */}
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

      {/* JSON-LD Structured Data: FAQ Page */}
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            // ... (put FAQ objects here, same as your original)
            {
              '@type': 'Question',
              name: 'Where is Super Affiliate System Pro (SASP) available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Super Affiliate System Pro is now exclusively available inside John Crestani’s AI Marketing Club, accessible through this official page.',
              },
            },
            // repeat other FAQ questions here as needed...
          ],
        }}
      />

      {/* JSON-LD Structured Data: Product/Course */}
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

      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text leading-tight">
          Super Affiliate System Pro by John Crestani
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Looking for Super Affiliate System Pro? It&apos;s now the ultimate advanced affiliate marketing course inside{' '}
          <strong>John Crestani&apos;s AI Marketing Club</strong>! Join today for just <strong>$27</strong> and get access to cutting-edge AI marketing tools. Then upgrade to SAS Pro for an exclusive $197.
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

        {/* Client Component for buttons */}
        <AffiliateButtons />
      </section>

      {/* ... Other content sections as in your original MainContent ... */}

      {/* Social share buttons */}
      <ShareButtons url={pageCanonicalUrl} title={`Super Affiliate System Pro by John Crestani`} />
    </main>
  );
}

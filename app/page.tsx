import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import WebinarInvite from '@/components/WebinarInvite';
import RelatedTools from '@/components/RelatedTools';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });
const DynamicFreeTools = dynamic(() => import('@/components/FreeTools'), { ssr: false });
const DynamicFeaturedTool = dynamic(() => import('@/components/FeaturedTool'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = 'John Crestani&rsquo;s Super Affiliate System Pro 2025: Still the Best Training?';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Affiliate Training & Super Affiliate System Pro | John Crestani",
    "url": "https://johncrestani.me",
    "about": [
      {
        "@type": "Person",
        "name": "John Crestani",
        "sameAs": [
          "https://www.linkedin.com/in/johncrestani",
          "https://www.instagram.com/johncrestani",
          "https://twitter.com/johncrestani"
        ]
      },
      {
        "@type": "Course",
        "name": "Super Affiliate System Pro",
        "provider": {
          "@type": "Organization",
          "name": "John Crestani",
          "url": "https://johncrestani.me",
          "logo": "https://johncrestani.me/logo.png"
        },
        "description": "Advanced training system for affiliate marketers to scale earnings using paid traffic, video sales letters, and influencer outreach.",
        "educationalCredentialAwarded": "Affiliate Marketing Certification",
        "timeRequired": "P4W",
        "offers": {
          "@type": "Offer",
          "price": "997.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://johncrestani.me"
        }
      },
      {
        "@type": "Service",
        "name": "Free Affiliate Training Webinar",
        "description": "Instant access to John's latest affiliate method with 2025 updates. No cost. No card required.",
        "provider": {
          "@type": "Person",
          "name": "John Crestani"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://johncrestani.me/free-webinar"
        }
      }
    ],
    "mainEntity": {
      "@type": "Service",
      "name": "Affiliate Marketing Training"
    },
    "datePublished": "2025-07-08",
    "dateModified": "2025-07-08"
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Hero />
      <Stats />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFeaturedTool />
      </Suspense>

      {/* ✅ Billionaire’s Toolkit section with full copy + right image */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Feature-rich copy preserved as authored */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">The Billionaire&rsquo;s Toolkit</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The 2025 version of Crestani&rsquo;s training goes beyond affiliate marketing.
              It&rsquo;s a plug-n-play system for monetizing anything online using high ROI paid traffic,
              influencer outreach, and video sales letters proven to convert.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base leading-relaxed">
              <li>Ad templates + copywriting walkthroughs</li>
              <li>Influencer onboarding automation</li>
              <li>Profitable niche targeting tools</li>
              <li>Pre-built landing page flows</li>
              <li>Live strategy sessions & campaign audits</li>
              <li>Exclusive affiliate network access</li>
              <li>Behavioral targeting and retargeting logic</li>
              <li>Mobile optimization and funnel cleanup</li>
            </ul>
          </div>

          {/* Right: Your image placed cleanly */}
          <div className="md:w-1/2">
            <Image
              src="/billionaires-toolkit.PNG"
              alt="Billionaire&rsquo;s Toolkit visual showing featured highlights"
              width={480}
              height={315}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicFreeTools />
      </Suspense>
      <WebinarInvite />
      <Testimonials />

      {/* ✅ Tony testimonial */}
      <div className="flex justify-center my-12 px-4">
        <Image
          src="/images/affiliate-success-tony.png"
          alt="Tony Strange affiliate testimonial—home upgrade and poolside earnings"
          width={640}
          height={360}
          className="rounded-xl shadow-xl"
          priority
        />
      </div>

      <FAQ />
      <CTA />
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </Suspense>
      </div>
      <RelatedTools currentToolUrl={pageUrl} category="affiliate" />
      <Footer />
    </main>
  );
}

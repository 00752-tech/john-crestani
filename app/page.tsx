'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import RelatedTools from '@/components/RelatedTools';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = 'AI Marketers Club $27: John Crestani&rsquo;s 2025 Faceless AI System';

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

  const handleBonusCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      'https://53f01qeukb6sel3b3j5a6o5l3s.hop.clickbank.net/?&traffic_source=ai_marketers_toolkit_cta',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Discover John Crestani&rsquo;s AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      <style jsx global>{`
        .cta-main {
          background-image: linear-gradient(241deg, #FFD600, #F59E42);
          color: #101010;
          font-weight: 500;
          font-size: 1.22rem;
          letter-spacing: .01em;
          padding: 0.95rem 2.6rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.12);
          transition: none;
          border: none;
          outline: none;
          cursor: default !important;
          text-decoration: none !important;
          user-select: none;
        }
        .cta-main:hover,
        .cta-main:active,
        .cta-main:focus,
        .cta-main:visited {
          background-image: linear-gradient(241deg, #FFD600, #F59E42);
          color: #101010;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.12);
          cursor: default !important;
        }
      `}</style>

      <ExitIntentPopup />
      <Hero />

      {/* ... all your other sections as already shown ... */}

      {/* EXAMPLE: Real People. Real Results. Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#171726]">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <Image
            src="/image_58149a.png"
            alt="Real People. Real Results."
            width={90}
            height={90}
            className="mb-6 rounded-full shadow-lg"
            priority={false}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
            Real People. Real Results.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {/* ... your six testimonial cards ... */}
          </div>
          <p className="mt-10 text-center text-pink-300 text-base mx-auto max-w-2xl">
            Real stories. Real transformations. AI Club is helping everyday people achieve more — see what&apos;s possible when you join.
          </p>
        </div>
      </section>

      {/* AI Growth In Focus Section */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <Image
            src="/ai-usage-chart.jpg"
            alt="AI Growth In Focus – Global AI Market Infographic"
            width={700}
            height={1100}
            className="rounded-2xl shadow-xl border-2 border-pink-400 mb-8 bg-white"
            priority={false}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-6 text-center tracking-tight">
            AI Growth In Focus
          </h2>
          <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-4">
            The global AI market is exploding: <b>$1.3 TRILLION in AI-driven sales by 2032</b>. Already, <b>72% of companies worldwide use AI</b> to sharpen their edge.
          </p>
          <p className="text-base md:text-lg text-pink-300 text-center max-w-2xl">
            <span className="font-medium text-yellow-300">
              This massive growth means unprecedented opportunities for smart marketers who leverage AI today.
            </span>
          </p>
        </div>
      </section>
      <p className="text-center text-xs text-gray-400 mt-2 mb-8">
        Infographic: Digital Silk. (2025). AI statistics [Infographic].{' '}
        <a
          href="https://www.digitalsilk.com/digital-trends/ai-statistics/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          digitalsilk.com
        </a>
      </p>

      {/* ... your other sections ... */}
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

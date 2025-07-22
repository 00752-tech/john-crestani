'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WebinarInvite from '@/components/WebinarInvite';
import SkepticismSection from '@/components/SkepticismSection';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = 'AI Marketers Club $27: John Crestani&rsquo;s 2025 Faceless AI System';

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

  // CTA handler for main Bonuses button — opens affiliate link in new tab
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

      {/* EXIT-INTENT POPUP */}
      <ExitIntentPopup />

      {/* HERO */}
      <Hero />

      {/* THREE VALUE PROPS BANNER */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        {/* ... unchanged ... */}
      </section>

      {/* STATS BAR */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        {/* ... unchanged ... */}
      </section>

      {/* BONUSES SECTION */}
      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        {/* ... unchanged ... */}
      </section>

      {/* SECTION 6: Real People. Real Results. */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#171726]">
        {/* ... unchanged ... */}
      </section>

      {/* INDIVIDUAL TESTIMONIAL HIGHLIGHT — ORIGINAL RESTORED */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Image
              src="/bio_image_jason_vientos.webp"
              alt="Jason Vientos – Experienced Affiliate"
              width={220}
              height={220}
              className="rounded-full shadow-lg object-cover border-2 border-yellow-400"
              priority
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <span className="mt-4 text-lg font-semibold text-yellow-400 text-center">Jason Vientos</span>
            <span className="text-xs text-gray-400 text-center">Affiliate Marketer &amp; Brand Partner</span>
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Why I&rsquo;m Promoting This System</h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I&rsquo;ve been in affiliate marketing for over 9 years and followed John Crestani&rsquo;s SAS Pro system since the early days.
              <span className="block mt-2 text-yellow-400 font-medium">
                I rarely promote offers, but this one&rsquo;s different.
              </span>
              This new AI-powered version isn&rsquo;t just another course — it&rsquo;s built for today&rsquo;s landscape.
              If you&rsquo;re tired of spinning your wheels, this is the fastest way to turn AI disruption into reliable online income.
              I&rsquo;ve seen it work, and I recommend it because I believe in the results.
            </p>
            <p className="text-pink-400 text-base md:text-lg mt-6 mb-4 italic">
              AI is replacing jobs—but smart marketers are turning it into online income. Watch how John Crestani did it.
            </p>
            <button
              type="button"
              onClick={() => {
                const videoSection = document.getElementById('john-video');
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full text-sm md:text-base transition"
            >
              Watch: You&rsquo;re Fired! (But You&rsquo;re Hired by AI)
            </button>
          </div>
        </div>
      </section>

      {/* WEBINAR / VIDEO */}
      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* ADDRESS POTENTIAL SKEPTICISM */}
      <SkepticismSection />

      {/* TESTIMONIALS LIST */}
      <Testimonials />

      {/* REMOVED FREE TOOLS SECTION */}

      <div className="flex justify-center my-12 px-4">
        <Image
          src="/ai-usage-chart.jpg"
          alt="AI Usage & Growth Stats for 2025 – Source: DigitalSilk"
          width={700}
          height={1100}
          className="rounded-xl shadow-xl border-2 border-pink-500 bg-white"
          priority
        />
      </div>

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

      <FAQ />
      <CTA />

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </Suspense>
      </div>

      {/* REMOVED RelatedTools */}

      <Footer />
    </main>
  );
}

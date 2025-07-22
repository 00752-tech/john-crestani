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
  const pageTitle = 'AI Marketers Club $27: John Crestani&apos;s 2025 Faceless AI System';

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

  // CTA handler function
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
          content="Discover John Crestani&apos;s AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      </Head>

      <style jsx global>{`
        .cta-main {
          background-image: linear-gradient(241deg, #FFD600, #F59E42);
          color: #101010;
          font-weight: 500;
          font-size: 1.22rem;
          letter-spacing: 0.01em;
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
        .no-hover:hover,
        .no-hover:focus {
          background-image: none !important;
          box-shadow: none !important;
          cursor: pointer !important;
          color: #101010 !important;
        }
        .highlight-yellow {
          color: #FFD600;
          font-weight: 600;
        }
      `}</style>

      <ExitIntentPopup />

      <Hero />

      {/* Your short impactful paragraph */}
      <section className="w-full flex justify-center bg-black px-4">
        <div className="max-w-5xl text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-10 px-4">
          In today&apos;s uncertain global economy, building real financial resilience isn&apos;t just a goal—it's a necessity. The AI Marketing Club doesn&apos;t just teach you skills; it provides a robust pathway to creating new, predictable income streams, empowering you with the stability and control you deserve in these turbulent times.
        </div>
      </section>

      {/* Value Props, Stats, Bonuses, Testimonials, Skepticism, Jason Highlight, Webinar, AI Growth, FAQ, CTA, Social Shares, Footer */}
      {/* Assuming these components internally handle formatting, styles and include all needed props */}

      {/* Make sure you pass down handleBonusCta if your CTA component uses it */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        {/* FREEDOM | AI MASTERY | EASY ONBOARDING Columns */}
        {/* Your columns JSX here... */}
      </section>

      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        {/* Stats Bar JSX here with lighter font weights */}
      </section>

      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        {/* Bonuses Section */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          {/* Bonuses content here */}
          <button
            className="cta-main mt-10"
            onClick={handleBonusCta}
            type="button"
            tabIndex={0}
            aria-label="Claim your spot – Start for $27"
          >
            Claim Your Spot – Start for $27 →
          </button>
        </div>
      </section>

      <Testimonials />

      <SkepticismSection />

      {/* Jason Vientos Highlight with fixed one-line button */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-2xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
          {/* ...Image and texts */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://afe40mfth79r3y7a3ii22qcmeg.hop.clickbank.net/?&traffic_source=jason_trusts_cta',
                '_blank',
                'noopener,noreferrer'
              );
            }}
            className="jason-cta"
          >
            Jason&apos;s Recommended Path: Get AI Club Access →
          </button>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* AI Growth In Focus Section */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
        {/* AI Growth Section content*/}
      </section>

      <FAQ />
      <CTA />

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}

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
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

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
          content="Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
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
        .jason-cta {
          background-color: #FFD600;
          color: #101010;
          font-weight: 600;
          padding: 0.65rem 1.8rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px rgba(250, 204, 21, 0.15);
          user-select: none;
          transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          border: none;
          outline: none;
        }
        .jason-cta:hover {
          background-color: #F7B600;
          box-shadow: 0 6px 28px rgba(250, 204, 21, 0.25);
          color: #101010;
          cursor: pointer;
        }
        .jason-cta:focus,
        .jason-cta:active {
          background-color: #c89a00;
          box-shadow: 0 0 8px 2px #f8d54d;
          color: #101010;
        }
      `}</style>

      <ExitIntentPopup />

      <Hero />

      {/* VALUE PROPS SECTION */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              FREEDOM
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Work from Anywhere. <strong>Reclaim Your Time &amp; Control</strong>: Leave the 9-5 behind &amp; build a life on your terms, <strong>free from burnout</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              AI MASTERY
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              <strong>Future-Proof Your Expertise</strong>: Gain in-demand AI skills effortlessly. Leverage AI tools to launch automated Affiliate systems with ease, <strong>securing your professional relevance</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              EASY ONBOARDING
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Get started quickly without <strong>stress or overwhelm</strong> — focused coaching and step-by-step training to <strong>ease your journey</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-b border-gray-800">
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {/* Stats items here */}
        </div>
      </section>

      {/* BONUS CTA */}
      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-tight">
            Seize Control: Unlock Your <span className="text-white">AI Marketer&apos;s Toolkit</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
            Enroll today and activate these powerful bonuses&mdash;designed to <strong>remove uncertainty</strong> and accelerate your path to <strong>predictable income and renewed purpose</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Bonus items */}
          </div>
          <button
            className="cta-main mt-10"
            onClick={handleBonusCta}
            type="button"
            tabIndex={0}
            aria-label="YES! Secure My AI Marketers Club Access!"
          >
            YES! Secure My AI Marketers Club Access! →
          </button>
        </div>
      </section>

      <Testimonials />

      <SkepticismSection />

      {/* JASON VIENTOS TESTIMONIAL (UPDATED) */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        {/* Testimonial content */}
      </section>

      {/* WEBINAR / VIDEO */}
      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* AI Growth In Focus Section */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
        {/* AI Growth content */}
      </section>

      <p className="text-center text-xs text-gray-400 mt-2 mb-8">
        {/* Infographic credit */}
      </p>

      <FAQ />
      <CTA />

      <div className="container mx-auto px-4 py-8">
        <DynamicShareButtons url={pageUrl} title={pageTitle} />
      </div>

      <Footer />
    </main>
  );
}

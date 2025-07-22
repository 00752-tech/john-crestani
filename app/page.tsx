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
        /* Fix for Jason CTA button active/focus - visible background and text */
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

        /* Value Props Styling */
        .value-prop-badge {
          display: inline-block;
          background-color: #FFD600;
          color: #101010;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.25rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 3px 8px rgba(255, 214, 0, 0.4);
        }
        .value-prop-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #FFD600;
          margin-bottom: 0.75rem;
          font-family: 'Poppins', sans-serif;
          text-shadow: 0 2px 6px rgba(255, 214, 0, 0.4);
        }
        .value-prop-text {
          color: #ccc;
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }
        .value-prop-text strong {
          font-weight: 700;
          color: #FFD600;
        }

        @media (min-width: 768px) {
          .value-prop-text {
            margin-left: 0;
            margin-right: 0;
            max-width: none;
          }
        }

        /* Section border and spacing */
        .value-props-section {
          border-top: 1px solid #333;
          border-bottom: 1px solid #333;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
      `}</style>

      <ExitIntentPopup />

      <Hero />

      {/* Short impactful paragraph (updated with bold and color emphasis) */}
      <section className="w-full flex justify-center bg-black px-4">
        <div className="max-w-5xl text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-10 px-4">
          In{' '}
          <strong className="value-prop-badge">today&apos;s uncertain global economy</strong>, building{' '}
          <strong className="value-prop-badge">real financial resilience</strong> isn&apos;t just a goal&mdash;it&apos;s a necessity. The AI Marketing Club doesn&apos;t just teach you skills; it provides a robust pathway to creating new,{' '}
          <strong className="value-prop-badge">predictable income streams</strong>, empowering you with the{' '}
          <strong className="value-prop-badge">stability and control</strong> you deserve in these turbulent times.
        </div>
      </section>

      {/* VALUE PROPS SECTION (updated texts + styling) */}
      <section className="value-props-section w-full flex justify-center bg-black px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-14 text-center">
          <div>
            <div className="value-prop-badge">FREEDOM</div>
            <h3 className="value-prop-title">Work from Anywhere</h3>
            <p className="value-prop-text">
              <strong>Reclaim Your Time &amp; Control</strong>: Leave the 9-5 behind &amp; build a life on your terms, <strong>free from burnout</strong>.
            </p>
          </div>
          <div>
            <div className="value-prop-badge">AI MASTERY</div>
            <h3 className="value-prop-title">AI Mastery</h3>
            <p className="value-prop-text">
              <strong>Future-Proof Your Expertise</strong>: Gain in-demand AI skills effortlessly. Leverage AI tools to launch automated Affiliate systems with ease, <strong>securing your professional relevance</strong>.
            </p>
          </div>
          <div>
            <div className="value-prop-badge">EASY ONBOARDING</div>
            <h3 className="value-prop-title">Easy Onboarding</h3>
            <p className="value-prop-text">
              Get started quickly without <strong>stress or overwhelm</strong> — focused coaching and step-by-step training to <strong>ease your journey</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {/* ... your existing stats bar content ... */}
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14L3 9.5l9-4.5 9 4.5-9 4.5zm0 0v6m6-3a6 6 0 00-12 0" />
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">50k+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Students Trained</p>
          </div>
          {/* ... repeat for other 4 stats ... */}
          {/* omitted for brevity */}
        </div>
      </section>

      {/* BONUSES SECTION */}
      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-tight">
            Unlock Your <span className="text-white">AI Marketer&apos;s Toolkit</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
            Enroll today and <span className="text-yellow-400 font-semibold">activate these powerful bonuses</span>&mdash;designed to remove friction and launch your results faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Bonus items */}
          </div>
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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* SKEPTICISM SECTION */}
      <SkepticismSection />

      {/* ... rest of your page unchanged ... */}

      <Footer />
    </main>
  );
}

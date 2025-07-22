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
          white-space: nowrap; /* Prevent wrapping */
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
        .highlight-yellow {
          color: #FFD600;
          font-weight: 600;
        }
      `}</style>

      <ExitIntentPopup />

      <Hero />

      {/* Short Impactful Paragraph */}
      <section className="w-full flex justify-center bg-black px-4">
        <div className="max-w-5xl text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-10 px-4">
          In today&apos;s uncertain global economy, building real financial resilience isn&apos;t just a goal—it's a necessity. The AI Marketing Club doesn&apos;t just teach you skills; it provides a robust pathway to creating new, predictable income streams, empowering you with the stability and control you deserve in these turbulent times.
        </div>
      </section>

      {/* VALUE PROPS SECTION */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              FREEDOM
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Work from anywhere. Leave the 9–5 behind &amp; build life on your terms.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              AI MASTERY
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Gain in-demand AI skills effortlessly: Leverage AI tools to launch automated affiliate systems with ease.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              EASY ONBOARDING
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              No tech skills or experience needed. Everything is step-by-step.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="mb-2">
              {/* SVG omitted for brevity */}
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14L3 9.5l9-4.5 9 4.5-9 4.5zm0 0v6m6-3a6 6 0 00-12 0" /></svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">50k+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Students Trained</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              {/* SVG */}
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9.4V7a5 5 0 00-10 0v2.4l-2.3 2.3a2.001 2.001 0 001.4 3.4h14a2.001 2.001 0 001.4-3.4L17 9.4zm-5 9v2m0 0h-2m2 0h2" /></svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">$20M+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Affiliate Earnings</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              {/* SVG */}
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-3-12a7 7 0 00-7 7c0 2.38 1.19 4.47 3.04 5.74A2 2 0 0012 22a2 2 0 001.96-1.26A7.003 7.003 0 0012 2z" /></svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">9+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Years of Innovation</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              {/* SVG */}
              <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.181c.969 0 1.371 1.24.588 1.81l-3.387 2.461a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.387-2.461a1 1 0 00-1.176 0l-3.387 2.461c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.98 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.966z" /></svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">4.6&#9733;</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Avg. Trustpilot Score</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              {/* SVG */}
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-6 0v9a2 2 0 002 2h4a2 2 0 002-2v-1m0 0l4-4a2 2 0 00-2.8-2.8l-2.2 2.2zm0 0v2a4 4 0 01-4 4H7a2 2 0 01-2-2v-5a2 2 0 012-2h1" /></svg>
            </span>
            <div className="text-4xl md:text-5xl font-semibold text-yellow-400">96%</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Student Satisfaction</p>
          </div>
        </div>
      </section>

      {/* The rest of your components go here in order: BONUSES, TESTIMONIALS, SKEPTICISM, etc. */}
      {/* ... */}
      {/* Your Jason Vientos section and others remain unchanged */}

      {/* ... */}
    </main>
  );
}

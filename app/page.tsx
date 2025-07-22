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

      {/* STATS BAR */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {/* Your Stats content here - omitted for brevity */}
        </div>
      </section>

      {/* BONUS CTA SECTION (UPDATED) */}
      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-tight">
            Seize Control: Unlock Your <span className="text-white">AI Marketer&apos;s Toolkit</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
            Enroll today and activate these powerful bonuses&mdash;designed to <strong>remove uncertainty</strong> and accelerate your path to <strong>predictable income and renewed purpose</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Bonus items here */}
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

      {/* Jason Vientos testimonial */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-2xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
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
            <h3 className="text-2xl font-semibold text-white mb-4">Why I&apos;m Promoting This System</h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I&apos;ve been in affiliate marketing for over 9 years and followed John Crestani&apos;s SAS Pro system since the early days.
              <span className="block mt-2 text-yellow-400 font-medium">
                I rarely promote offers, but this one&apos;s different.
              </span>
              This new AI-powered version isn&apos;t just another course — it&apos;s built for today&apos;s landscape.
              If you&apos;re tired of spinning your wheels, this is the fastest way to turn AI disruption into reliable online income.
              I&apos;ve seen it work, and I recommend it because I believe in the results.
            </p>
            <p className="text-pink-400 text-base md:text-lg mt-6 mb-4 italic">
              AI is replacing jobs—but smart marketers are turning it into online income. Watch how John Crestani did it.
            </p>
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
              Start Your AI Income Journey (Jason&apos;s Way) →
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

      {/* AI Growth Section */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="highlight-yellow">Your Future-Proof Income:</span> Tapping into the AI Economy&apos;s Trillion-Dollar Opportunity
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            While others fear the <q className="font-semibold">&apos;skills earthquake&apos;</q> and economic uncertainty, this explosive growth creates unprecedented pathways for <span className="highlight-yellow">financial resilience and career reinvention.</span> <span className="highlight-yellow">Discover how smart marketers are claiming their share.</span>
          </p>
          <Image
            src="/ai-usage-chart.jpg"
            alt="AI Growth In Focus – Global AI Market Infographic"
            width={700}
            height={1100}
            className="rounded-2xl shadow-xl border-2 border-pink-400 mb-8 bg-white"
            priority={false}
          />
          <p className="text-base md:text-lg text-pink-300 max-w-2xl">
            <span className="highlight-yellow">
              This isn&apos;t just a trend; it&apos;s your blueprint for unprecedented income and career stability in the AI economy. It&apos;s time to seize control.
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

      <FAQ />
      <CTA />

      <div className="container mx-auto px-4 py-8">
        <DynamicShareButtons url={pageUrl} title={pageTitle} />
      </div>

      <Footer />
    </main>
  );
}

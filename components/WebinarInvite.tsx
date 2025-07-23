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

      {/* Other sections like ExitIntentPopup, Hero, Value Props, Stats, Bonus CTA */}
      <ExitIntentPopup />
      <Hero />

      {/* ... other sections omitted for brevity ... */}

      <Testimonials />

      <SkepticismSection />

      {/* Jason Vientos testimonial */}
      {/* ... omitted for brevity ... */}

      {/* WEBINAR / VIDEO */}
      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* --- AI Growth In Focus Section with updated body text --- */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="highlight-yellow">Your Future-Proof Income:</span> Tapping into the AI Economy&apos;s Trillion-Dollar Opportunity
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            While others fear the <q className="font-semibold">&apos;skills earthquake&apos;</q> and economic uncertainty, this explosive growth creates unprecedented pathways for <strong>your financial resilience</strong> and <strong>a clear career reinvention</strong>. Discover how smart marketers are <strong>confidently claiming their share and securing their future.</strong>
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

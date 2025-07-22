'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Import only components you render here
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WebinarInvite from '@/components/WebinarInvite';
import SkepticismSection from '@/components/SkepticismSection';
import ExitIntentPopup from '@/components/ExitIntentPopup';

// Dynamic import with no SSR for social share buttons
const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageTitle = 'AI Marketers Club $27: John Crestani&apos;s 2025 Faceless AI System';

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

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

      {/* Global styles etc */}
      <style jsx global>{`
        .highlight-yellow {
          color: #FFD600;
          font-weight: 600;
        }
        /* ... your other global styles here ... */
      `}</style>

      <ExitIntentPopup />

      <Hero />

      {/* Short Impactful Paragraph after Hero */}
      <section className="w-full flex justify-center bg-black px-4">
        <div className="max-w-5xl text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-10 px-4">
          In today&apos;s uncertain global economy, building real financial resilience isn&apos;t just a goal&mdash;it's a necessity. The AI Marketing Club doesn&apos;t just teach you skills; it provides a robust pathway to creating new, predictable income streams, empowering you with the stability and control you deserve in these turbulent times.
        </div>
      </section>

      {/* Your other sections here... */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        {/* FREEDOM | AI MASTERY | EASY ONBOARDING */}
      </section>

      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        {/* Stats bar */}
      </section>

      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        {/* Bonuses section with claim button (handle the logic internally or via props) */}
      </section>

      <Testimonials />

      <SkepticismSection />

      {/* Jason Vientos testimonial section including his CTA button */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        {/* ... */}
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* AI Growth Section */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center text-center">
        {/* ... */}
      </section>

      {/* Infographic credits */}
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
          <DynamicShareButtons url="https://johncrestani.me" title={pageTitle} />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}

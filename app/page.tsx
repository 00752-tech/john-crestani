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
import RelatedTools from '@/components/RelatedTools';
import FreeToolsPreview from '@/components/FreeToolsPreview';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

  const schema = { /* ...your schema here... */ };
  const offerSchema = { /* ...your offerSchema here... */ };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      {/* HERO SECTION */}
      <Hero />

      {/* TESTIMONIAL & VIDEO CTA */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
          <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
            <Image
              src="/cool_greybeard_affiliate.webp"
              alt="Jason Vientos – Affiliate Partner"
              width={220}
              height={220}
              className="rounded-full shadow-lg object-cover border-2 border-yellow-400"
              priority
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <span className="mt-4 text-lg font-medium text-yellow-400 tracking-wide text-center">Jason Vientos</span>
            <span className="text-xs text-gray-400 mt-1 text-center">Affiliate Marketer & Brand Partner</span>
          </div>

          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
              Why I’m Promoting This System
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I’ve been in affiliate marketing for over 9 years and followed John Crestani’s SAS Pro system since the early days.
              <span className="block mt-2 text-yellow-400 font-medium">
                I rarely promote offers, but this one’s different.
              </span>
              This new AI-powered version isn’t just another course — it’s built for today’s landscape. If you’re tired of spinning your wheels, this is the fastest way to turn AI disruption into reliable online income.
              I’ve seen it work, and I recommend it because I believe in the results.
            </p>

            <div className="mt-6">
              <p className="text-gray-300 text-sm md:text-base mb-2 max-w-xl">
                AI is replacing jobs—smart affiliates are turning it into income. Watch the exact training I recommend.
              </p>
              <button
                type="button"
                onClick={() => {
                  const videoSection = document.getElementById('john-video');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full text-sm md:text-base transition duration-200"
              >
                Watch the Training Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WEBINAR SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FREE TOOLS STRATEGIC MID FUNNEL OFFER */}
      <section className="w-full flex justify-center bg-[#13131a] py-14 px-4 border-t border-b border-yellow-600">
        <Suspense fallback={<div>Loading Tools...</div>}>
          <FreeToolsPreview />
        </Suspense>
      </section>

      {/* VISUAL PROOF / INFOGRAPHIC */}
      <div className="flex justify-center my-12 px-4">
        <Image
          src="/ai-usage-chart.jpg"
          alt="AI Statistics 2025 by Digital Silk"
          width={700}
          height={1100}
          className="rounded-xl shadow-xl border-2 border-pink-500 bg-white"
          loading="eager"
        />
      </div>
      <p className="text-center text-xs text-gray-400 mt-2 mb-8">
        Infographic: Digital Silk. (2025). AI statistics [Infographic]. Retrieved June 2025,{' '}
        <a
          href="https://www.digitalsilk.com/digital-trends/ai-statistics/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          digitalsilk.com
        </a>
      </p>

      {/* CROSS-FUNNEL SUPPORT SECTIONS */}
      <FAQ />
      <CTA />

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading Share Buttons...</div>}>
          <DynamicShareButtons url={pageUrl} title={pageTitle} />
        </Suspense>
      </div>

      <RelatedTools currentToolUrl={pageUrl} category="affiliate" />
      <Footer />
    </main>
  );
}

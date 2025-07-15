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

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = "AI Marketers Club $27: John Crestani's 2025 Faceless AI System";

  const schema = { /* your schema markup here */ };
  const offerSchema = { /* your offer schema markup here */ };

  return (
    <main className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Discover John Crestani's AI-powered income system for 2025. Affiliate marketing meets automation. $27 access." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      {/* HERO */}
      <Hero />

      {/* TRUST SECTION */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Image
              src="/cool_greybeard_affiliate.webp"
              alt="Jason Vientos – Experienced Affiliate Promoting SAS Pro"
              width={220}
              height={220}
              className="rounded-full shadow-lg object-cover border-2 border-yellow-400"
              priority
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <span className="mt-4 text-lg font-semibold text-yellow-400 text-center">
              Jason Vientos
            </span>
            <span className="text-xs text-gray-400 text-center">Affiliate Marketer & Brand Partner</span>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-4">Why I’m Promoting This System</h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I’ve been in affiliate marketing for over 9 years and followed John Crestani’s SAS Pro system since the early days.
              <span className="block mt-2 text-yellow-400 font-medium">
                I rarely promote offers, but this one’s different.
              </span>
              This new AI-powered version isn’t just another course — it’s built for today’s landscape. If you’re tired of spinning your wheels, this is the fastest way to turn AI disruption into reliable online income.
              I’ve seen it work, and I recommend it because I believe in the results.
            </p>
            <div className="mt-6">
              <p className="text-gray-300 text-sm md:text-base mb-3">
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
                Watch the Training Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WEBINAR */}
      <Suspense fallback={<div>Loading Webinar...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>

      {/* SOCIAL PROOF & TESTIMONIALS */}
      <Testimonials />

      {/* FREE TOOLS BRIDGE (INLINE) */}
      <section className="w-full flex justify-center bg-[#13131a] py-14 px-4 border-t border-b border-yellow-600">
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col items-center p-6 relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-sm uppercase tracking-widest select-none">
            Free Resource
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
            Free Tools to Maximize Your Affiliate &amp; Online Business Growth
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl text-center mb-7">
            Ready to optimize your campaigns and track your potential? We’ve built a suite of free, powerful calculators and resources to help affiliate marketers and online entrepreneurs like you make smarter decisions. Use them today, on us!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-6">
            <a
              href="/affiliate-marketing-tools/earnings-calculator"
              className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div className="text-lg text-yellow-400 mb-1">Affiliate Earnings Calculator</div>
              <div className="text-gray-300 text-sm">
                Instantly estimate your affiliate profits before you promote. Plan smarter, earn more.
              </div>
            </a>
            <a
              href="/affiliate-marketing-tools/youtube-title-generator"
              className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div className="text-lg text-yellow-400 mb-1">YouTube Title Generator</div>
              <div className="text-gray-300 text-sm">
                Generate high-converting video titles for your channel in seconds.
              </div>
            </a>
          </div>
          <a
            href="/affiliate-marketing-tools"
            className="bg-yellow-400 text-black font-semibold py-2 px-8 rounded-full text-base transition hover:bg-yellow-300 hover:text-black shadow-lg"
          >
            Explore All Free Tools Now
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center max-w-md">
            These free tools are always available—just use them. No signup required.
          </p>
        </div>
      </section>

      {/* INFOGRAPHIC / PROOF */}
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

      {/* FAQ / CTA / SHARE */}
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

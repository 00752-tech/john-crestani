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
  const pageTitle = 'AI Marketers Club $27: John Crestani&rsquo;s 2025 Faceless AI System';

  const schema = { /* schema here */ };
  const offerSchema = { /* offer schema here */ };

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

      {/* HERO */}
      <Hero />

      {/* BONUSES SECTION */}
      <section className="w-full flex justify-center bg-gradient-to-b from-[#181823] to-black border-b border-yellow-700 py-12 px-4">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-tight">
            Unlock Your <span className="text-white">AI Marketer&rsquo;s Toolkit</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
            Enroll today and <span className="text-yellow-400 font-semibold">activate these powerful bonuses</span>—designed to remove friction and launch your results faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* BONUS 1 */}
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                💰 Affiliate Network Access
              </div>
              <p className="text-gray-300 text-sm">
                Earn up to <span className="font-semibold text-yellow-300">$821</span> per sale — join our top-converting private offer.
              </p>
            </div>
            {/* BONUS 2 */}
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                🖥️ FREE Affiliate Website
              </div>
              <p className="text-gray-300 text-sm">
                Done-for-you site + hosting + domain + drag-n-drop editor. Launch in under 15 minutes.
              </p>
            </div>
            {/* BONUS 3 */}
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                👥 Private AI Marketers Club
              </div>
              <p className="text-gray-300 text-sm">
                Tap into peer support, feedback, and ongoing mentorship in our invite-only group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="w-full flex justify-center bg-black py-10 px-4">
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Image
              src="/cool_greybeard_affiliate.webp"
              alt="Jason Vientos – Experienced Affiliate"
              width={220}
              height={220}
              className="rounded-full shadow-lg object-cover border-2 border-yellow-400"
              priority
              style={{ maxWidth: '180px', height: 'auto' }}
            />
            <span className="mt-4 text-lg font-semibold text-yellow-400 text-center">Jason Vientos</span>
            <span className="text-xs text-gray-400 text-center">Affiliate Marketer & Brand Partner</span>
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
            <p className="text-gray-300 text-base md:text-lg mt-6 mb-4">
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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FREE TOOLS SECTION */}
      <section className="w-full flex justify-center bg-[#13131a] py-14 px-4 border-t border-b border-yellow-600">
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col items-center p-6 relative overflow-hidden">
          <div className="mb-3 w-full flex justify-center">
            <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-sm uppercase tracking-widest select-none">
              FREE RESOURCE
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
            Free Tools to Maximize Your Affiliate &amp; Online Business Growth
          </h2>

          <p className="text-gray-200 text-base md:text-lg max-w-2xl text-center mb-7">
            Ready to optimize your campaigns and track your potential? We&rsquo;ve built a suite of free, powerful calculators and resources to help affiliate marketers make smarter decisions. Use them today, on us!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-6">
            {/* Tool Card 1 */}
            <a
              href="/affiliate-marketing-tools/earnings-calculator"
              className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold text-yellow-400 mb-1">
                Affiliate Earnings Calculator
              </div>
              <div className="text-gray-300 text-sm">
                Instantly estimate your affiliate profits before you promote. Plan smarter, earn more.
              </div>
            </a>
            {/* Tool Card 2 */}
            <a
              href="/content-creation-tools/youtube-earnings-calculator"
              className="block p-5 bg-black rounded-lg shadow border border-yellow-400 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold text-yellow-400 mb-1">
                YouTube Earnings Calculator
              </div>
              <div className="text-gray-300 text-sm">
                Estimate your AdSense revenue from YouTube views, CTR &amp; CPM assumptions.
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
            These free tools are always available&mdash;just use them. No signup required.
          </p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
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

      {/* FAQ, CTA, Shares, Footer */}
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

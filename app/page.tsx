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
import RelatedTools from '@/components/RelatedTools';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = 'AI Marketers Club $27: John Crestani&rsquo;s 2025 Faceless AI System';

  const schema = { /* your schema here */ };
  const offerSchema = { /* your offer schema here */ };

  // CTA handler for main Bonuses button — opens affiliate link in new tab
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
          content="Discover John Crestani&rsquo;s AI-powered income system for 2025. Affiliate marketing meets automation. $27 access."
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
      `}</style>

      {/* EXIT-INTENT POPUP */}
      <ExitIntentPopup />

      {/* HERO */}
      <Hero />

      {/* THREE VALUE PROPS BANNER */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              FREEDOM
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Work from anywhere. Leave the 9–5 behind & build life on your terms.
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

      {/* ---- UPDATED STATS BAR WITH BIG ICONS & STATS ---- */}
      <section className="w-full flex justify-center bg-[#111111] py-10 px-4 border-t border-gray-800">
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {/* ...stats bar content unchanged... */}
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14L3 9.5l9-4.5 9 4.5-9 4.5zm0 0v6m6-3a6 6 0 00-12 0" />
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">50k+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Students Trained</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9.4V7a5 5 0 00-10 0v2.4l-2.3 2.3a2.001 2.001 0 001.4 3.4h14a2.001 2.001 0 001.4-3.4L17 9.4zm-5 9v2m0 0h-2m2 0h2" />
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">$20M+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Affiliate Earnings</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-3-12a7 7 0 00-7 7c0 2.38 1.19 4.47 3.04 5.74A2 2 0 0012 22a2 2 0 001.96-1.26A7.003 7.003 0 0012 2z" />
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">9+</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Years of Innovation</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.181c.969 0 1.371 1.24.588 1.81l-3.387 2.461a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.387-2.461a1 1 0 00-1.176 0l-3.387 2.461c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.98 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.966z"/>
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">4.6★</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Avg. Trustpilot Score</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2">
              <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-6 0v9a2 2 0 002 2h4a2 2 0 002-2v-1m0 0l4-4a2 2 0 00-2.8-2.8l-2.2 2.2zm0 0v2a4 4 0 01-4 4H7a2 2 0 01-2-2v-5a2 2 0 012-2h1"/>
              </svg>
            </span>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-400">96%</div>
            <p className="text-gray-400 text-xs mt-1 font-medium">Student Satisfaction</p>
          </div>
        </div>
      </section>

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
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                💰 Affiliate Network Access
              </div>
              <p className="text-gray-300 text-sm">
                Earn up to <span className="font-semibold text-yellow-300">$821</span> per sale — join our top-converting private offer.
              </p>
            </div>
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                🖥️ FREE Affiliate Website
              </div>
              <p className="text-gray-300 text-sm">
                Done-for-you site + hosting + domain + drag-n-drop editor. Launch in under 15 minutes.
              </p>
            </div>
            <div className="bg-[#161618] border border-yellow-500 rounded-2xl p-6 shadow hover:shadow-yellow-500/30 transition">
              <div className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
                👥 Private AI Marketers Club
              </div>
              <p className="text-gray-300 text-sm">
                Join <span className="font-semibold text-yellow-300">700+</span> members: peer support, feedback, and ongoing mentorship in our invite-only group.
              </p>
            </div>
          </div>
          {/* MAIN CTA BUTTON as non-hoverable button */}
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

      {/* ...rest of the page unchanged... */}

      <section className="w-full flex justify-center bg-black py-10 px-4">
        {/* ...testimonials highlight... */}
        <div className="w-full max-w-3xl bg-[#18181b] rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-8 p-8 md:p-14">
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

      {/* ...rest of the page, unchanged... */}
      <Suspense fallback={<div>Loading...</div>}>
        <div id="john-video">
          <WebinarInvite />
        </div>
      </Suspense>
      <SkepticismSection />
      <Testimonials />

      <section className="w-full flex justify-center bg-[#13131a] py-14 px-4 border-t border-b border-yellow-600">
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col items-center p-6 relative overflow-hidden">
          {/* ...free tools... */}
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

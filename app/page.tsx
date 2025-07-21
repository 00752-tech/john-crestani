'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import RelatedTools from '@/components/RelatedTools';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const WebinarInvite = dynamic(() => import('@/components/WebinarInvite'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const SkepticismSection = dynamic(() => import('@/components/SkepticismSection'), { ssr: false });
const DynamicShareButtons = dynamic(() => import('@/components/ShareButtons'), { ssr: false });

export default function Home() {
  const pageUrl = 'https://johncrestani.me';
  const pageTitle = 'AI Marketers Club $27: John Crestani&rsquo;s 2025 Faceless AI System';

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

      {/* STATS BAR */}
      {/* ...your stats bar section goes here... */}

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

      {/* SECTION 6: Real People. Real Results. */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#171726]">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <Image
            src="/image_58149a.png"
            alt="Real People. Real Results."
            width={90}
            height={90}
            className="mb-6 rounded-full shadow-lg"
            priority={false}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
            Real People. Real Results.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {/* ...6 testimonial cards here, as before... */}
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;I made my first commissions without showing my face. AI Club actually works.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Jordan M. <span className="block font-normal text-xs text-gray-400">Beta Tester</span>
              </figcaption>
            </figure>
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;Never felt like I know what I&apos;m doing until this. The steps were easy, support was real.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Samantha R. <span className="block font-normal text-xs text-gray-400">Verified Buyer</span>
              </figcaption>
            </figure>
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;Escaped the 9–5 grind. I finally have a way to build something real.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Derek L. <span className="block font-normal text-xs text-gray-400">Early Access Member</span>
              </figcaption>
            </figure>
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;The community answered all my questions, and the AI tools saved me hours every week.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Priya N. <span className="block font-normal text-xs text-gray-400">Founding Member</span>
              </figcaption>
            </figure>
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;Skeptical at first, but now my content gets traffic and sales, all with AI.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Alex H. <span className="block font-normal text-xs text-gray-400">Tech Newbie</span>
              </figcaption>
            </figure>
            <figure className="relative bg-gradient-to-tl from-[#26263a] to-[#23223a] border-2 border-pink-500 rounded-2xl shadow-2xl p-8 flex flex-col h-full hover:shadow-pink-500/40 transition-shadow duration-200">
              <blockquote className="text-lg text-white font-medium mb-4">
                &ldquo;I finally feel like I&apos;m part of something huge and future-proof. The results speak for themselves.&rdquo;
              </blockquote>
              <figcaption className="text-base text-pink-400 font-semibold">
                Lila F. <span className="block font-normal text-xs text-gray-400">AI Entrepreneur</span>
              </figcaption>
            </figure>
          </div>
          <p className="mt-10 text-center text-pink-300 text-base mx-auto max-w-2xl">
            Real stories. Real transformations. AI Club is helping everyday people achieve more — see what&apos;s possible when you join.
          </p>
        </div>
      </section>

      {/* ...rest of your sections go here INCLUDING... */}

      {/* SECTION 7: AI Growth In Focus */}
      <section className="w-full bg-[#18142a] py-16 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <Image
            src="/ai-usage-chart.jpg"
            alt="AI Growth In Focus – Global AI Market Infographic"
            width={700}
            height={1100}
            className="rounded-2xl shadow-xl border-2 border-pink-400 mb-8 bg-white"
            priority={false}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-6 text-center tracking-tight">
            AI Growth In Focus
          </h2>
          <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-4">
            The global AI market is exploding: <b>$1.3 TRILLION in AI-driven sales by 2032</b>. Already, <b>72% of companies worldwide use AI</b> to sharpen their edge.
          </p>
          <p className="text-base md:text-lg text-pink-300 text-center max-w-2xl">
            <span className="font-medium text-yellow-300">
              This massive growth means unprecedented opportunities for smart marketers who leverage AI today.
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

      {/* ...rest of your components like FAQ, CTA, ShareButtons, RelatedTools, Footer */}
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

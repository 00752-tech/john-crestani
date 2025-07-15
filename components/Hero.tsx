'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime');
  };

  return (
    <>
      {/* HERO TOP SECTION */}
      <section className="min-h-screen bg-black text-white flex items-center overflow-hidden relative">
        <style jsx global>{`
          @font-face {
            font-family: 'Satoshi';
            src: url('/fonts/Satoshi-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          body {
            font-family: 'Satoshi', 'Helvetica Neue', Arial, sans-serif;
          }
          .cta-main {
            background-image: linear-gradient(241deg, #2563eb, #0ea5e9);
            color: white;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.04em;
            padding: 0.7rem 1.6rem;
            border-radius: 9999px;
            box-shadow: 0 4px 24px rgba(34,197,94,0.1);
            transition: background 0.2s, transform 0.15s;
          }
          .cta-main:hover {
            background-image: linear-gradient(241deg, #0ea5e9, #2563eb);
            transform: scale(1.04);
          }
          .brand-gold {
            color: #FFD700;
            font-weight: inherit;
          }
        `}</style>

        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between pt-16 md:pt-0">
          {/* Left Column */}
          <div className="w-full md:w-[55%] md:ml-20 md:pr-6 flex flex-col items-start">
            <span className="kicker text-sm sm:text-base md:text-lg uppercase text-gray-400 tracking-widest mb-4">
              ▲ AI IS CHANGING EVERYTHING
            </span>

            <h1
              className="text-left text-white font-light text-5xl sm:text-6xl md:text-[3.2rem] lg:text-[3.6rem] leading-[1.15] tracking-tight mb-2 max-w-2xl"
              style={{
                fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif",
                letterSpacing: '-0.01em',
              }}
            >
              Discover the <span className="brand-gold">AI system</span> that transforms job uncertainty into{' '}
              <span className="brand-gold">reliable online income</span>.
            </h1>

            <p
              className="text-gray-200 text-base sm:text-lg md:text-xl font-light mb-4 mt-2 max-w-lg text-left leading-relaxed"
              style={{ letterSpacing: '-0.01em' }}
            >
              Even if you’re a total beginner, discover John Crestani’s{' '}
              <span className="brand-gold">proven AI system for 2025</span>—step by step—to generate{' '}
              <span className="brand-gold">consistent, passive commissions</span>. No tech skills required.
            </p>

            {/* CTA Button */}
            <button
              id="hero-cta"
              className="cta-main w-full sm:w-auto text-lg mb-4"
              onClick={handleRevealSecrets}
              type="button"
            >
              Secure My Spot in The AI Marketers Club
            </button>

            {/* Limited Time + Trust */}
            <div className="text-pink-400 text-base font-semibold mt-1 text-left">
              Limited-Time Bonus: Includes Your Custom Affiliate Website - FREE!
              <span className="inline-block ml-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
            </div>

            <div className="flex flex-col items-start mt-3">
              <div className="flex items-center mb-1">
                <span className="text-yellow-400 text-xl mr-1">⭐️⭐️⭐️⭐️⭐️</span>
                <span className="text-gray-300 text-sm ml-2">
                  Trusted by 2,137 early adopters &nbsp;|&nbsp; 4.96 Rating
                </span>
              </div>
              <span className="text-xs text-gray-400">
                Backed by a rock-solid 60-day money-back guarantee.
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden md:flex w-[45%] justify-center items-end">
            <Image
              src="/hero_man_hat.webp"
              alt="John Crestani Headshot"
              width={1600}
              height={1600}
              className="rounded-xl shadow-2xl object-cover"
              priority
              style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
            />
          </div>
        </div>
      </section>

      {/* CORE BENEFITS SECTION (Immediately Below Hero) */}
      <section className="w-full flex justify-center bg-black py-6 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              FREEDOM
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Work from anywhere. Leave the 9–5 behind & build life on your terms.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              AI MASTERY
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              Leverage AI tools to launch automated affiliate systems with ease.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wide mb-2">
              EASY ONBOARDING
            </div>
            <p className="text-sm text-gray-300 max-w-[240px]">
              No tech skills or audience needed. Everything is step-by-step.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

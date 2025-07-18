'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleCta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(
      'https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime'
    );
  };

  return (
    <>
      {/* HERO MAIN */}
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

        <div className="container mx-auto max-w-6xl px-4 sm:px-8 flex flex-col md:flex-row items-start justify-between pt-2 md:pt-0 md:gap-x-16">
          {/* Left Column */}
          <div className="w-full md:w-[60%] flex flex-col items-start space-y-6">
            <span
              className="kicker text-sm sm:text-base md:text-lg uppercase text-gray-400 tracking-wider font-extralight pb-5"
              style={{ letterSpacing: '0.08em' }}
            >
              ▲ AI IS CHANGING EVERYTHING
            </span>

            {/* --- H1 with yellow highlights --- */}
            <h1
              className="text-left text-white font-light text-5xl sm:text-6xl md:text-[3.2rem] lg:text-[3.6rem] leading-[1.13] tracking-tight mb-4 mt-2 max-w-4xl"
              style={{ letterSpacing: '-0.01em' }}
            >
              <span>Seize <span className="brand-gold">Control</span> of Your Future:</span>
              <br className="hidden sm:block" />
              <span>
                Master <span className="brand-gold">AI</span> &amp; <span className="brand-gold">Secure Your Income</span> in a Changing World.
              </span>
            </h1>

            {/* --- Subheadline --- */}
            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light mb-3 mt-1 max-w-2xl text-left leading-relaxed">
              Don&apos;t just survive the AI revolution—<span className="brand-gold">lead it</span>. Even as a total beginner, join our supportive community to build passive income streams and redefine what&apos;s possible for your career.
            </p>

            {/* CTA */}
            <button
              id="hero-cta"
              className="cta-main w-full sm:w-auto text-lg mb-5 mt-2"
              onClick={handleCta}
              type="button"
            >
              Take Control: Start My AI Income Journey
            </button>

            {/* Bonus + Proof */}
            <div className="text-pink-400 text-base font-semibold mt-2 text-left">
              Limited-Time Bonus: Includes Your Custom Affiliate Website&nbsp;—&nbsp;FREE!
              <span className="inline-block ml-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col items-start mt-2 space-y-0.5">
              <div className="flex items-center mb-1">
                <span className="text-yellow-400 text-xl mr-1">⭐️⭐️⭐️⭐️⭐️</span>
                <span className="text-gray-300 text-sm ml-2">
                  Trusted by 2,137 early adopters&nbsp;|&nbsp;4.96 Rating
                </span>
              </div>
              <span className="text-xs text-gray-400">
                Backed by a rock-solid 60-day money-back guarantee.
              </span>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="hidden md:flex w-[40%] justify-center items-center mt-4">
            <Image
              src="/hero_5_lifestyle_guy.webp"
              alt="John Crestani AI Student Modern Image"
              width={2200}
              height={2200}
              className="rounded-xl shadow-2xl object-cover"
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '950px'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

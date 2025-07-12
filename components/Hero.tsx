'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push(
      'https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime'
    )
  }

  return (
    <section
      className="min-h-screen pt-0 pb-2 bg-black text-white overflow-hidden relative flex items-center"
      style={{ minHeight: '100vh' }}
    >
      <style jsx global>{`
        @font-face {
          font-family: 'Satoshi';
          src: url('/fonts/Satoshi-Light.woff2') format('woff2');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'IBM Plex Mono';
          src: url('/fonts/IBMPlexMono-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        body {
          font-family: 'Satoshi', 'Helvetica Neue', Arial, sans-serif;
        }
        .kicker {
          font-family: 'IBM Plex Mono', monospace;
        }
        .cta-main {
          background-image: linear-gradient(241deg, #2563eb, #0ea5e9);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.04em;
          padding: 0.7rem 1.6rem;
          border-radius: 9999px;
          box-shadow: 0 4px 24px 0 rgba(34,197,94,0.10);
          transition: background 0.2s, transform 0.15s;
        }
        .cta-main:hover,
        .cta-main:focus {
          background-image: linear-gradient(241deg, #0ea5e9, #2563eb);
          transform: scale(1.04);
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8">
        {/* Left Column */}
        <div className="w-full md:w-[56%] flex flex-col items-start md:pr-10 ml-10">
          {/* Kicker */}
          <span className="kicker uppercase text-sm sm:text-base md:text-lg text-gray-400 tracking-widest mb-5 mt-2">
            🚨 AI IS CHANGING EVERYTHING
          </span>

          {/* Headline */}
          <h1
            className="font-thin text-white leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl text-left"
            style={{
              fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 200,
            }}
          >
            <span className="text-gray-400">AI threatens your job.</span>{' '}
            <span className="text-white">
              Here&apos;s how to turn it into your{' '}
              <span className="text-yellow-400">untapped goldmine</span>.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 font-extralight text-base sm:text-lg md:text-xl mb-3 mt-1 max-w-lg text-left leading-relaxed">
            John Crestani&apos;s new $27 AI system: leverage the power of AI to build an online income stream – no tech skills needed.
          </p>

          {/* Core Benefits as Horizontal Features */}
          <div className="flex flex-col sm:flex-row gap-6 w-full mb-4 mt-1">
            <div className="flex-1 min-w-[180px]">
              <span className="block text-white text-base sm:text-lg">
                <span className="font-semibold text-blue-400">Escaping the 9-5 grind:</span>{' '}
                <span className="font-normal text-gray-300">Finally achieve the financial freedom you crave.</span>
              </span>
            </div>
            <div className="flex-1 min-w-[180px]">
              <span className="block text-white text-base sm:text-lg">
                <span className="font-semibold text-blue-400">Profiting from the AI revolution:</span>{' '}
                <span className="font-normal text-gray-300">Turn the very thing that scares others into your competitive edge.</span>
              </span>
            </div>
            <div className="flex-1 min-w-[180px]">
              <span className="block text-white text-base sm:text-lg">
                <span className="font-semibold text-blue-400">Working from anywhere:</span>{' '}
                <span className="font-normal text-gray-300">No boss, no burnout, no guesswork—just pure, repeatable income potential.</span>
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="cta-main w-full sm:w-auto mb-3 mt-0"
            onClick={handleRevealSecrets}
            type="button"
          >
            YES! I WANT TO UNLOCK The $27 AI Income System!
          </button>

          {/* Value/Urgency Reinforcement */}
          <div className="text-pink-400 text-base font-semibold mt-2 mb-4 text-left">
            Limited-Time Offer: Secure Your Spot &amp; FREE Website Bonus NOW!
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-start mt-2 mb-20">
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 text-xl mr-1">⭐️⭐️⭐️⭐️⭐️</span>
              <span className="text-gray-300 text-base font-medium ml-2">
                Trusted by 2,137 Early Adopters&nbsp;|&nbsp;4.96 Rating
              </span>
            </div>
            <span className="text-xs text-gray-400">
              Backed by a Rock-Solid 60-Day Money-Back Guarantee.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <Image
            src="/hero_man_hat.webp"
            alt="John Crestani"
            width={1100}
            height={1100}
            className="rounded-lg shadow-2xl object-cover"
            priority
            style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
          />
        </div>
      </div>
    </section>
  )
}

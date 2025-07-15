'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Hero() {
  const router = useRouter()

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push(
      'https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime'
    )
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.08, 1],
      opacity: [1, 0.85, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { end: 50, suffix: "k+", text: "Students Trained" },
    { end: 20, prefix: "$", suffix: "M+", text: "Affiliate Commissions" },
    { end: 9, suffix: "+", text: "Years of Innovation" },
    { end: 4.6, decimals: 1, text: "Avg. Trustpilot Score" },
    { end: 96, suffix: "%", text: "Student Satisfaction" }
  ]

  return (
    <>
      {/* HERO SECTION */}
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
          .brand-gold {
            color: #FFD700;
            font-weight: 700;
          }
        `}</style>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 pt-14 md:pt-0">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col items-start md:pr-6 md:ml-20">
            {/* Kicker */}
            <span className="kicker uppercase text-sm sm:text-base md:text-lg text-gray-400 tracking-widest mb-5 mt-2">
              ▲ AI IS CHANGING EVERYTHING
            </span>

            {/* Headline */}
            <h1 className="text-left leading-tight mb-4 max-w-2xl">
              <span
                className="block text-white text-5xl sm:text-6xl md:text-[3.2rem] lg:text-[3.8rem] font-light"
                style={{
                  fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif",
                  letterSpacing: '-0.01em'
                }}
              >
                Discover the&nbsp;
                <span className="brand-gold">AI system</span>
                &nbsp;that transforms job uncertainty into&nbsp;
                <span className="brand-gold">reliable online income</span>.
              </span>
            </h1>

            {/* ✅ Updated Subheadline */}
            <p
              className="text-gray-200 font-extralight text-base sm:text-lg md:text-xl mb-3 mt-1 max-w-lg text-left leading-relaxed"
              style={{
                fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}
            >
              Even if you’re a total beginner, discover John Crestani’s{' '}
              <span className="brand-gold font-normal">proven AI system for 2025</span>—step by step—to generate
              <span className="brand-gold font-normal"> consistent, passive commissions</span>. No tech skills required.
            </p>

            {/* Core Benefits */}
            <div className="bg-[#151517] rounded-xl p-5 mb-4 mt-1 w-full max-w-lg shadow flex flex-col gap-2">
              <div className="text-gray-300 text-base sm:text-lg font-normal mb-1">
                <span className="font-semibold text-pink-400">Inside the AI Marketers Club, you&apos;ll discover how to:</span>
              </div>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold" style={{ color: '#2596be' }}>Escape The 9-5 Grind:</span>{' '}
                  <span className="text-gray-300">Finally achieve the financial freedom you crave.</span>
                </li>
                <li>
                  <span className="font-semibold" style={{ color: '#2596be' }}>Profit From The AI Revolution:</span>{' '}
                  <span className="text-gray-300">Turn the very thing that scares others into your competitive edge.</span>
                </li>
                <li>
                  <span className="font-semibold" style={{ color: '#2596be' }}>Work From Anywhere:</span>{' '}
                  <span className="text-gray-300">No boss, no burnout, no guesswork – just pure, repeatable income potential.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              id="hero-cta"
              className="cta-main w-full sm:w-auto mb-3 mt-0 text-lg"
              onClick={handleRevealSecrets}
              type="button"
            >
              YES! Show Me The New AI System
            </button>

            {/* Value/Urgency Reinforcement */}
            <div className="text-pink-400 text-base font-semibold mt-2 mb-2 text-left flex items-center gap-2">
              Limited-Time Offer: Secure Your Spot &amp; FREE Website Bonus NOW!
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full animate-pulse" title="Countdown timer coming soon"></span>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-start mb-1">
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
          <div className="hidden md:flex w-[48%] justify-center items-end">
            <Image
              src="/hero_man_hat.webp"
              alt="John Crestani"
              width={1600}
              height={1600}
              className="rounded-lg shadow-2xl object-cover"
              priority
              style={{ width: '100%', height: 'auto', maxWidth: '1600px' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 1600px"
            />
          </div>
        </div>
      </section>

      {/* AUTHORITY & PROOF SECTION */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font

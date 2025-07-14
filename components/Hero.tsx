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

  // Pulse animation for stats
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
          .brand-yellow {
            color: #fde047;
          }
          .brand-blue {
            color: #2563eb;
          }
        `}</style>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 pt-14 md:pt-0">
          {/* Left Column */}
          <div className="w-full md:w-[48%] flex flex-col items-start md:pr-4">
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
                Discover the <span className="brand-blue">AI system</span> that’s turning job loss into <span className="brand-yellow">online income</span>.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-gray-200 font-extralight text-base sm:text-lg md:text-xl mb-3 mt-1 max-w-lg text-left leading-relaxed"
              style={{
                fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}
            >
              Learn how beginners are using AI to generate{' '}
              <span className="brand-yellow font-normal">
                passive commissions
              </span>
              —no experience needed. Step-by-step system for 2025.
            </p>

            {/* Core Benefits */}
            <div className="bg-[#151517] rounded-xl p-5 mb-4 mt-1 w-full max-w-lg shadow flex flex-col gap-2">
              <div className="text-gray-300 text-base sm:text-lg font-normal mb-1">
                <span className="font-semibold text-pink-400">Inside the AI Marketers Club, you&apos;ll discover how to:</span>
              </div>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-blue-400">Escape The 9-5 Grind:</span>{' '}
                  <span className="text-gray-300">Finally achieve the financial freedom you crave.</span>
                </li>
                <li>
                  <span className="font-semibold text-blue-400">Profit From The AI Revolution:</span>{' '}
                  <span className="text-gray-300">Turn the very thing that scares others into your competitive edge.</span>
                </li>
                <li>
                  <span className="font-semibold text-blue-400">Work From Anywhere:</span>{' '}
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
          <div className="hidden md:flex md:w-[48%] justify-center items-center">
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

      {/* AUTHORITY & PROOF SECTION (Immediately after Hero, with animated stats) */}
      <section className="w-full flex justify-center bg-black py-8 px-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-400 mb-6">
            Don&apos;t Just Take Our Word For It. See The Results.
          </h2>
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
              gap-y-8
              gap-x-10
              w-full
              mb-8
              text-center
            "
          >
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                variants={pulseVariants}
                animate="pulse"
                className="flex flex-col items-center min-w-0"
              >
                <span
                  className="text-3xl md:text-4xl font-extrabold break-words"
                  style={{
                    background: "linear-gradient(45deg, #ec4899, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    wordBreak: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  <CountUp
                    start={0}
                    end={item.end}
                    duration={2.5}
                    delay={0.2}
                    separator=""
                    decimals={item.decimals || 0}
                    decimal="."
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                  />
                </span>
                <span className="text-gray-300 text-sm md:text-base text-center mt-2">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 text-gray-400 text-center text-base md:text-lg">
            <span className="font-semibold text-green-400">Join the thousands already securing their future with AI.</span>
          </div>
        </div>
      </section>
    </>
  )
}

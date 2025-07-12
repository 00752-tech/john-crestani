// Hero.tsx — Conversion-Optimized with Emotion and Motion
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  const handleScrollToVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const el = document.getElementById('video')
    if (el) {
      const offset = 80
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime')
  }

  return (
    <section className="relative bg-black text-white min-h-screen pt-0 pb-2 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/ambient-circuit.svg"
          alt="Ambient AI Circuit"
          fill
          priority
          className="object-cover"
        />
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Satoshi';
          src: url('/fonts/Satoshi-Light.woff2') format('woff2');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'DM Sans';
          src: url('/fonts/DMSans-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        body {
          font-family: 'Satoshi', sans-serif;
        }

        .subheadline {
          font-family: 'DM Sans', sans-serif;
        }

        .kicker {
          font-family: 'IBM Plex Mono', monospace;
        }

        h1 {
          font-family: 'Satoshi', sans-serif;
          font-weight: 300;
          font-size: 2.6rem;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        @media (min-width: 640px) { h1 { font-size: 3rem; } }
        @media (min-width: 768px) { h1 { font-size: 4rem; } }
        @media (min-width: 1024px) { h1 { font-size: 4.5rem; } }
      `}</style>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row px-4 sm:px-6 md:px-8 xl:px-8 items-center lg:items-start xl:items-center gap-x-4">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 md:mt-[-40px] mb-6 md:mb-0 flex flex-col"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="kicker text-left text-xs sm:text-sm md:text-base text-gray-400 tracking-wide mb-10 mt-2">
            🚨 Millions will lose jobs to AI by 2026
          </span>

          <h1 className="text-left text-white mb-4 md:mb-6 font-thin leading-tight">
            <span className="text-yellow-400 font-semibold">Escape</span> before AI
            <br />
            <motion.span
              className="text-gray-400 italic block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              replaces you
            </motion.span>
          </h1>

          <p className="subheadline text-sm sm:text-base md:text-lg lg:text-xl text-left mb-6 md:mb-8 leading-relaxed text-gray-300 tracking-tight font-light">
            John Crestani’s $27 AI system flips fear into freedom— <span className="text-white">no boss, no burnout, no guesswork.</span>
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* CTA: Watch Pitch */}
            <button
              className="button-base transparent-button"
              onClick={handleScrollToVideo}
              type="button"
            >
              ▶️ Watch the “You’re Fired” Pitch
            </button>

            {/* CTA: Unlock System */}
            <button
              className="button-base blue-gradient-button group"
              onClick={handleRevealSecrets}
            >
              🔓 Unlock the $27 AI System
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="mt-10 text-left bg-[#111827] border border-gray-700 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
              “I thought I was about to be replaced by AI… then I found Crestani’s course.
              One week later, I had my first commission—and now I wake up to freedom.”
            </p>
            <div className="mt-2 text-sm text-yellow-400 font-semibold">
              — Knox L., Early Adopter
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0 lg:items-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src="/hero_man_hat.webp"
            alt="John Crestani"
            width={1200}
            height={1200}
            priority
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  )
}

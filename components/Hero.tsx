'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  // Scrolls to the video section with a negative offset (moves thumbnail UP)
  const handleScrollToVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const el = document.getElementById('video')
    if (el) {
      const offset = 80 // Adjust for more/less upward movement
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime')
  }

  return (
    <section
      className="min-h-screen pt-0 pb-2 bg-black text-white overflow-hidden relative xl:flex xl:justify-center xl:items-center"
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
        .button-base {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 400;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(.4,0,.2,1);
          height: 60px;
          text-transform: uppercase;
          white-space: nowrap;
          letter-spacing: 0.5px;
          cursor: pointer;
          width: 100%;
          max-width: 380px;
        }
        .blue-gradient-button {
          background-image: linear-gradient(241deg, #2563eb, #0ea5e9);
          color: white;
        }
        .blue-gradient-button:hover {
          background-image: linear-gradient(241deg, #0ea5e9, #2563eb);
          transform: scale(1.05);
        }
        .transparent-button {
          border: 2px solid white;
          background-color: transparent;
          color: white;
        }
        .transparent-button:hover {
          background-color: white;
          color: black;
        }
        .transparent-button:active {
          background-color: #f3f4f6;
          color: black;
        }
        h1 {
          font-family: 'Satoshi', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 200;
          letter-spacing: -0.01em;
          line-height: 1.08;
          font-size: 2.2rem;
        }
        @media (min-width: 640px) {
          h1 { font-size: 3rem; }
        }
        @media (min-width: 768px) {
          h1 { font-size: 4rem; }
        }
        @media (min-width: 1024px) {
          h1 { font-size: 4.5rem; }
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center lg:items-start xl:items-center gap-x-4 px-4 sm:px-6 md:px-8 xl:px-8">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 md:mt-[-40px] mb-6 md:mb-0 flex flex-col"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span className="block kicker text-left uppercase text-sm sm:text-base md:text-lg text-gray-400 tracking-widest mb-10 mt-2">
            🚨 Millions will lose jobs to AI by 2026
          </span>

          <h1 className="text-left mb-4 md:mb-6 text-white font-thin">
            <span className="text-yellow-400 font-semibold">Escape</span> before AI
            <span className="hidden sm:inline"><br /></span>
            <span className="text-gray-400 italic"><i>replaces you</i></span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-left mb-6 md:mb-8 leading-relaxed text-gray-400 font-extralight tracking-tight">
            John Crestani’s $27 AI system flips fear into freedom— <span className="text-gray font-light">no boss, no burnout, no guesswork.</span>
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center">
              <button
                className="button-base transparent-button"
                style={{
                  transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
                  textDecoration: 'none',
                  outline: 'none'
                }}
                onClick={handleScrollToVideo}
                type="button"
              >
                ▶️ Watch the “You’re Fired” Pitch
              </button>

              <div className="mt-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.214 3.726a1 1 0 00.95.69h3.925c.969 0 1.371 1.24.588 1.81l-3.177 2.31a1 1 0 00-.364 1.118l1.214 3.726c.3.921-.755 1.688-1.54 1.118l-3.177-2.31a1 1 0 00-1.175 0l-3.177 2.31c-.784.57-1.838-.197-1.539-1.118l1.214-3.726a1 1 0 00-.364-1.118L2.372 9.153c-.784-.57-.38-1.81.588-1.81h3.925a1 1 0 00.95-.69l1.214-3.726z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400 tracking-tight">
                  Trusted by 2,137 Early Adopters | 4.9/5 Rating | 60-Day Guarantee
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                className="button-base blue-gradient-button group"
                onClick={handleRevealSecrets}
              >
                🔓 Unlock the $27 AI System
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <span className="text-xs sm:text-sm text-gray-400 mt-2 tracking-tight">
                Free: 7-Minute Action Checklist + Viral Content Generator + Affiliate Tracker
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0 lg:items-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-none h-auto">
            <Image
              src="/hero_man_hat.webp"
              alt="John Crestani"
              width={1200}
              height={1200}
              priority
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

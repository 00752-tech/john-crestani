'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'

export default function WebinarInvite() {
  const [loadEmbed, setLoadEmbed] = useState(false)

  const handlePlayVideo = () => setLoadEmbed(true)

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(
      'https://e23bby4zl4fmbt23ddezctdqdl.hop.clickbank.net/?&traffic_source=video_cta_button',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className="py-20 bg-[#0f1629] text-white">
      <article className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-pink-500 leading-snug tracking-tight"
        >
          You’re Not Safe—AI Is Coming for Your Job
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto mb-10"
        >
          John Crestani’s AI pitch opens with a brutal truth: the landscape of work is changing rapidly. If you don’t learn how to harness AI for earning, it will eventually take your spot. But this isn't just a warning; it's a profound opportunity. This video is your wake-up call to not just survive, but thrive in the AI-driven future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* --- Updated Thumbnail Section --- */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-2xl my-10 border-4 border-[#18181b]">
            {!loadEmbed ? (
              <div
                onClick={handlePlayVideo}
                role="button"
                aria-label="Play Video"
                className="absolute inset-0 w-full h-full bg-black cursor-pointer flex items-center justify-center"
                style={{
                  background: 'rgba(0,0,0,0.65)'
                }}
              >
                <div className="absolute inset-0 w-full h-full rounded-lg z-0">
                  <Image
                    src="/you_are_fired_thumbnail.png"
                    alt="You're Fired – AI Pitch Thumbnail"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="z-10 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-red-600 hover:scale-110 transition"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" opacity="0.7"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/SIWVTq8vB28?autoplay=1&rel=0&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              />
            )}
          </div>
          {/* --- End Thumbnail Section --- */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleCtaClick}
              className="inline-block bg-pink-500 text-white font-bold py-4 px-12 rounded-full shadow-lg text-xl cursor-pointer select-none transition-none"
              style={{
                transition: 'none',
                textDecoration: 'none',
                outline: 'none',
                boxShadow: '0 4px 20px 0 rgba(236,72,153,0.20)'
              }}
              tabIndex={0}
              type="button"
            >
              🔐 Invest in Yourself Before AI Replaces You →
            </button>
          </motion.div>
        </motion.div>
      </article>
    </section>
  )
}

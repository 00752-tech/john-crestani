'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'

export default function WebinarInvite() {
  const [loadEmbed, setLoadEmbed] = useState(false)

  const handlePlayVideo = () => setLoadEmbed(true)

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
          John Crestani’s AI pitch opens with a brutal truth—and a path forward. If you don’t learn how to use AI to earn, it will eventually take your spot. This video is your wake-up call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
            {!loadEmbed ? (
              <div
                onClick={handlePlayVideo}
                role="button"
                aria-label="Play Video"
                className="absolute inset-0 w-full h-full bg-black cursor-pointer flex items-center justify-center"
              >
                <div className="absolute inset-0 w-full h-full rounded-lg z-0">
                  <Image
                    src="/vimeo-thumbnail-john-crestani-2025-new-ai-faceless-course.png"
                    alt="You're Fired – AI Pitch Thumbnail"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="z-10">
                  <svg
                    className="w-16 h-16 text-white hover:scale-110 transition"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://player.vimeo.com/video/1003467968?autoplay=1&controls=1&title=0&byline=0&autopause=0"
                title="Vimeo video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              ></iframe>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-12 text-center"
          >
            <a
              href="https://e23bby4zl4fmbt23ddezctdqdl.hop.clickbank.net/?&traffic_source=video_cta_button"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white font-bold py-4 px-12 rounded-full shadow-lg text-xl cursor-pointer select-none"
              style={{
                transition: 'none',
                textDecoration: 'none',
                outline: 'none',
                boxShadow: '0 4px 20px 0 rgba(236,72,153,0.20)'
              }}
              tabIndex={0}
              title=""
              onMouseOver={e => e.currentTarget.style.textDecoration = 'none'}
              onFocus={e => e.currentTarget.style.textDecoration = 'none'}
            >
              🔐 Invest in Yourself Before AI Replaces You →
            </a>
          </motion.div>
        </motion.div>
      </article>
    </section>
  )
}

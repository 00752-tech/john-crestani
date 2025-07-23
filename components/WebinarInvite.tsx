'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function WebinarInvite() {
  const [showModal, setShowModal] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Escape key = close modal
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowModal(false)
    }
    if (showModal) window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [showModal])

  // To trap scroll behind modal
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(
      'https://e23bby4zl4fmbt23ddezctdqdl.hop.clickbank.net/?&traffic_source=video_cta_button',
      '_blank',
      'noopener,noreferrer'
    )
  }

  // Updated event types to avoid 'any'
  const handleOpenModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)

  // Click outside iframe = close modal
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false)
    }
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
          Navigate the AI Tsunami: <span className="text-white">Your Blueprint to Thrive in the Future of Work.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-gray-300 text-base md:text-lg text-center max-w-2xl mx-auto mb-10"
        >
          The shifts are real, but so is the <strong>immense opportunity for those who act</strong>. John Crestani reveals the <strong>actionable strategy</strong> to turn today&apos;s challenges into <strong>unprecedented income</strong> and <strong>renewed purpose</strong>. This isn&apos;t just about avoiding obsolescence; it&apos;s about <strong>seizing control and redefining your professional destiny</strong> in the AI-driven future. Watch this breakthrough to discover how.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* --- Clickable Thumbnail (image + click handler) --- */}
          <div
            className="relative w-full rounded-lg shadow-2xl my-10 border-4 border-[#18181b] cursor-pointer"
            style={{ aspectRatio: '16/9', background: 'black' }}
            onClick={handleOpenModal}
            aria-label="Play Video"
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOpenModal(e)
              }
            }}
          >
            <Image
              src="/video_thumbnail_before_and_after.webp"
              alt="John Crestani Webinar Thumbnail"
              width={1024}
              height={576}
              sizes="(max-width: 640px) 100vw, 75vw"
              className="object-cover rounded-lg w-full h-full"
              priority
              unoptimized={false}
            />
          </div>

          {/* --- Modal --- */}
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all"
              onClick={handleModalClick}
              data-testid="modal-overlay"
            >
              <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
                <button
                  className="absolute -top-10 right-0 z-60 text-white text-5xl md:text-5xl focus:outline-none"
                  aria-label="Close Video"
                  onClick={handleCloseModal}
                >
                  ×
                </button>
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/SIWVTq8vB28?autoplay=1&rel=0&modestbranding=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-2xl bg-black"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </div>
          )}

          {/* --- CTA below video --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleCtaClick}
              className="inline-block bg-pink-500 text-white font-medium py-4 px-12 rounded-full shadow-lg text-xl cursor-pointer select-none transition-none"
              style={{
                transition: 'none',
                textDecoration: 'none',
                outline: 'none',
                boxShadow: '0 4px 20px 0 rgba(236,72,153,0.20)',
              }}
              tabIndex={0}
              type="button"
            >
              Watch John&apos;s Blueprint for AI Income &amp; Control →
            </button>
          </motion.div>
        </motion.div>
      </article>
    </section>
  )
}

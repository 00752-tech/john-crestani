'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

export default function WebinarInvite() {
  const [loadEmbed, setLoadEmbed] = useState(false);

  const handleWebinarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href =
      'https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime';
  };

  const handlePlayVideo = () => setLoadEmbed(true);

  return (
    <section className="py-20 bg-[#0f1629] text-white">
      <article className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Exclusive Webinar Invite
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
            {!loadEmbed ? (
              <div
                onClick={handlePlayVideo}
                role="button"
                aria-label="Play Webinar Video"
                className="absolute inset-0 w-full h-full bg-black cursor-pointer flex items-center justify-center"
              >
                <div className="absolute inset-0 w-full h-full rounded-lg z-0">
                  <Image
                    src="/vimeo%20video%20thumbnail%20with%20john%20crestani%20image.PNG"
                    alt="Exclusive Webinar Preview"
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
                src="https://player.vimeo.com/video/1003467968?muted=1&autoplay=1&title=0&byline=0&autopause=0&controls=0"
                title="Vimeo video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              ></iframe>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleWebinarClick}
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              GET INSTANT ACCESS
            </button>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function WebinarInvite() {
  const [loadEmbed, setLoadEmbed] = useState(false);

  const handleWebinarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href =
      'https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net';
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
          <div className="relative w-full pb-[56.25%]">
            {!loadEmbed ? (
              <div
                onClick={handlePlayVideo}
                role="button"
                aria-label="Play Webinar Video"
                className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center cursor-pointer rounded-lg shadow-2xl overflow-hidden"
              >
                <Image
                  src="https://img.youtube.com/vi/Vh1J7csr6W4/hqdefault.jpg"
                  alt="Preview image for Exclusive Webinar with John Crestani"
                  width={960}
                  height={540}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  priority
                />
                <div className="z-10">
                  <svg
                    className="w-16 h-16 text-white hover:scale-110 transition transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/Vh1J7csr6W4?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

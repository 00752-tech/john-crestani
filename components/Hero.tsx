'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleUnlockBlueprint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime');
  };

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('https://768a1ngyq7fp1x962c6act5k2t.hop.clickbank.net/?&traffic_source=johncrestanime');
  };

  return (
    <section
      className="min-h-screen pt-4 pb-2 bg-black text-white overflow-hidden relative xl:flex xl:justify-center xl:items-center"
      style={{ minHeight: '100vh' }}
    >
      {/* Floating Media Logo removed */}

      {/* Global styles */}
      <style jsx global>{`
        @font-face {
          font-family: 'Neue Haas Unica W1G';
          src: url('/fonts/NeueHaasUnicaW1G-Light.woff2') format('woff2');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        body {
          font-family: 'Neue Haas Unica W1G', sans-serif;
        }

        .button-base {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 400;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
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

        @media (max-width: 640px) {
          h1 {
            font-size: 2.25rem !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center lg:items-start xl:items-center gap-x-4 px-4 sm:px-6 md:px-8 xl:px-8">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center mb-2">
              <Award className="h-6 w-6 mr-2 text-yellow-400" />
              <span className="text-sm sm:text-base md:text-lg font-light text-gray-300 tracking-wider truncate max-w-full">
                ⚠️ FINAL 24 HOURS: Get In for $27 (Reg. $297) + Free Website + $821/Click Offers
              </span>
            </div>
          </div>

          <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 md:mb-10 leading-tight text-white">
            $27 ai System Revealed: John Crestani&apos;s 2025 <span className="text-gray-400">Faceless Formula</span> 
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mb-8 md:mb-12 leading-relaxed text-gray-300 font-light tracking-tight">
            Post AI-generated affiliate content in 7 min/day—no face, no tech, no guesswork. <span className="text-white font-light">Just copy, paste, and profit.</span>.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center">
              <button
                className="button-base transparent-button"
                onClick={handleUnlockBlueprint}
              >
                YES! I WANT IN FOR $27
              </button>

              <div className="mt-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.214 3.726a1 1 0 00.95.69h3.925c.969 0 1.371 1.24.588 1.81l-3.177 2.31a1 1 0 00-.364 1.118l1.214 3.726c.3.921-.755 1.688-1.54 1.118l-3.177-2.31a1 1 0 00-1.175 0l-3.177 2.31c-.784.57-1.838-.197-1.539-1.118l1.214-3.726a1 1 0 00-.364-1.118L2.372 9.153c-.784-.57-.38-1.81.588-1.81h3.925a1 1 0 00.95-.69l1.214-3.726z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400 tracking-tight">Trusted by 2,137 Early Adopters | 4.9/5 Rating | 60-Day Guarantee</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                className="button-base blue-gradient-button group"
                onClick={handleRevealSecrets}
              >
                SHOW ME THE SYSTEM
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
  );
}

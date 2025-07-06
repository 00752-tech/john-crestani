'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter();

  const handleUnlockBlueprint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net");
  };

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net");
  };

  return (
    <>
      <section className="min-h-screen py-8 md:py-12 lg:py-16 bg-black text-white overflow-hidden relative xl:flex xl:justify-center xl:items-center">
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

        <div className="container mx-auto flex flex-col md:flex-row items-center lg:items-start xl:items-center px-4 sm:px-6 md:px-8 xl:px-8">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center mb-2">
                <Award className="h-6 w-6 mr-2 text-yellow-400" />
                <span className="text-sm sm:text-base md:text-lg font-light text-gray-300 tracking-wider truncate max-w-full">
                  ⚠️ Final 72H to Access 2025&apos;s #1 Affiliate Method (71% Failure Fix)
                </span>
              </div>
            </div>

            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 md:mb-10 leading-tight text-white">
              John Crestani&apos;s <span className="text-gray-400"> Super Affiliate System Pro 2025</span> – Still the Best Training? 
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mb-8 md:mb-12 leading-relaxed text-gray-300 font-light tracking-tight">
              Why 71% of affiliate marketers fail  <span className="text-white font-light">(And how John Crestani&apos;s 2025 method beats the odds)</span>. 
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button 
                className="button-base transparent-button"
                data-testid="see-opinions-button"
                onClick={handleUnlockBlueprint}
              >
                Earn More Faster
              </button>
              <div className="flex flex-col items-center">
                <button 
                  className="button-base blue-gradient-button group"
                  data-testid="join-masterclass-button"
                  onClick={handleRevealSecrets}
                >
                  Free: Unlock Affiliate Secrets
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </button>
                <span className="text-xs sm:text-sm text-gray-400 mt-2 tracking-tight">
                  Start for free. No credit card required.
                </span>
              </div>
            </motion.div>

            {/* Featured In Media Strip */}
            <section className="w-full py-6 md:py-8 lg:py-10 bg-black">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="overflow-x-auto whitespace-nowrap flex items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/logos/forbes.png" alt="Forbes" width={140} height={40} className="h-10 w-auto" />
                  <Image src="/logos/nbc.png" alt="NBC" width={120} height={40} className="h-10 w-auto" />
                  <Image src="/logos/cbs.png" alt="CBS" width={120} height={40} className="h-10 w-auto" />
                  <Image src="/logos/fox.png" alt="Fox" width={120} height={40} className="h-10 w-auto" />
                  <Image src="/logos/businessinsider.png" alt="Business Insider" width={160} height={40} className="h-10 w-auto" />
                  <Image src="/logos/entrepreneur.png" alt="Entrepreneur" width={160} height={40} className="h-10 w-auto" />
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0 lg:items-start"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-none h-auto">
              <Image 
                src="/hero_man_hat.png" 
                alt="John Crestani" 
                width={1200} 
                height={1200} 
                className="rounded-lg shadow-2xl object-cover w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

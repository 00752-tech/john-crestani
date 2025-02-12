'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useRouter } from 'next/router'

const Hero: React.FC = () => {
  const router = useRouter()

  const handleUnlockBlueprint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push("https://1bbc1ko45gi5ui658hhb5t7y82.hop.clickbank.net/?cbpage=diroop&campaign=unlockblueprintcta")
  }

  const handleRevealSecrets = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push("https://94746cw02lmakmi73b8z1matdo.hop.clickbank.net/?&campaign=milliondollarsecretscta")
  }

  return (
    <section className="min-h-screen py-20 md:py-24 lg:py-32 bg-black text-white overflow-hidden relative xl:flex xl:justify-center xl:items-center">
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

        .red-gradient-button {
          background-image: linear-gradient(241deg, #FF1C00, #FF4D00);
          color: white;
        }

        .red-gradient-button:hover {
          background-image: linear-gradient(241deg, #FF4D00, #FF1C00);
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

      <div className="container mx-auto flex flex-col md:flex-row items-center lg:items-start xl:items-center px-4 sm:px-6 md:px-8  xl:px-8">
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
              <span className="text-[0.6rem] sm:text-xs md:text-sm font-light text-gray-300 tracking-wider truncate max-w-full">
                TRUSTED BY EXPERTS TAUGHT BY AN AWARD-WINNING EDUCATOR – JOHN CRESTANI
              </span>
            </div>
          </div>
          
          <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 md:mb-10 leading-tight text-white">
            What if everything you&apos;ve been told about  
            <span className="text-gray-400"> affiliate marketing success </span> success is dead wrong?  
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mb-8 md:mb-12 leading-relaxed text-gray-300 font-light tracking-tight">
            Discover the shocking truth behind the 71% failure rate and how to <span className="text-white font-semibold">flip the script to millions...</span>. 
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
                className="button-base red-gradient-button group"
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
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0 lg:items-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[55%] sm:w-full md:w-4/5 lg:w-[73%] xl:w-[65%] h-auto">
            <Image 
              src="/jc 2.png" 
              alt="John Crestani" 
              width={1000} 
              height={1000} 
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow-2xl w-fit object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

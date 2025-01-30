'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-black text-white overflow-hidden relative">
      <style jsx global>{`
        @font-face {
          font-family: 'Euclid Circular A';
          src: url('/fonts/EuclidCircularA-Light.woff2') format('woff2');
          font-weight: 300;
          font-style: normal;
        }

        .button-base {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: normal;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          height: 44px;
        }

        .red-gradient-button {
          background-image: linear-gradient(241deg, #FF1C00, #FF4D00);
          color: white;
          width: 160px;
        }

        .red-gradient-button:hover {
          background-image: linear-gradient(241deg, #FF4D00, #FF1C00);
          transform: scale(1.05);
        }

        .transparent-button {
          border: 2px solid white;
          background-color: transparent;
          color: white;
          width: 200px;
        }

        .transparent-button:hover {
          background-color: white;
          color: black;
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-20 md:px-32">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 -mt-24"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-light text-gray-300 tracking-wider whitespace-nowrap">
                THE GLOBAL EDUCATION AWARD THAT COULD BE YOUR TICKET OUT OF THE 9–5 GRIND
              </span>
            </div>
          </div>
          
          <h1 className="text-left text-4xl md:text-[3rem] font-light mb-10 leading-tight text-white">
            WARNING: This Affiliate Marketing Secret May 
            <span className="text-gray-400"> Shock You </span> 
          </h1>
          
          <p className="text-base text-left sm:text-xl mb-12 leading-relaxed text-gray-300 font-['Euclid_Circular_A'] font-light">
            Unlock your affiliate marketing breakthrough in just 10 minutes with John Crestani&apos;s proven system that consistently delivers results.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              className="button-base transparent-button"
              data-testid="see-opinions-button"
            >
              See students&apos; opinions
            </button>
            <div className="flex flex-col items-center">
              <button 
                className="button-base red-gradient-button group"
                data-testid="join-masterclass-button"
              >
                Try it free
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
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
              <span className="text-xs text-gray-400 mt-1.5 tracking-tight">
                Start for free. No credit card required.
              </span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-3/4 h-auto">
            <Image 
              src="/jc 2.png" 
              alt="John Crestani" 
              width={400} 
              height={600} 
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
   )
}

export default Hero

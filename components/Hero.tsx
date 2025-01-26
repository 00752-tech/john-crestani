'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  // Removed unused function warnings by using the functions
  const handleGetStarted = React.useCallback(() => {
    console.log('CTA Click: See Students Opinions')
    window.location.href = '/api/sale'
  }, [])

  const handleWatchVideo = React.useCallback(() => {
    console.log('CTA Click: Join Free Masterclass')
    window.location.href = '/api/webinar'
  }, [])

  return (
    <section className="pt-36 pb-16 bg-black text-white overflow-hidden relative">
      <style>{`
        @keyframes pulse {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gradient-pulse-text {
          background: linear-gradient(90deg, #ffffff, #00ffff, #ffffff);
          background-size: 200% 200%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: pulse 3s ease infinite;
        }

        .affiliate-income-text {
          background: linear-gradient(45deg, #ec4899, #f472b6);
          background-size: 200% 200%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: affiliateIncomePulse 3s ease infinite;
        }

        @keyframes affiliateIncomePulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .red-gradient-button {
          background-image: linear-gradient(241deg, #FF1C00, #FF4D00);
          color: white;
          padding: 12px 32px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: normal;
          transition: background-image 0.3s ease, transform 0.3s ease;
        }

        .red-gradient-button:hover {
          background-image: linear-gradient(241deg, #FF4D00, #FF1C00);
          transform: scale(1.05);
        }

        .transparent-button {
          border: 2px solid white;
          background-color: transparent;
          color: white;
          padding: 12px 32px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: normal;
          transition: background-color 0.3s ease, color 0.3s ease; 
        }

        .transparent-button:hover {
          background-color: white; 
          color: black; 
        }

        .transparent-button, .red-gradient-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-start mb-4">
            <div className="flex items-center text-2xl text-gray-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c6.23-.05 7.87-5.6 7.4-8.5h-3.4c-.38 0-.62-.23-.63-.62V9.49c-.04-2.2-1.56-4.2-3.4-5.12C10.66 3.84 9.16 2.84 8 2c0 0-1.03 2.11-.13 4.26C5.47 7.19 4 9.44 4 12c0 5.48 4.62 10 8 10z" />
              </svg>
              <span className="text-lg text-left font-semibold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-transparent bg-clip-text">
                GLOBAL RECOGNITION: JOHN CRESTANI RECEIVES TOP HONORS IN EDUCATION
              </span>
            </div>
          </div>
          
          <h1 className="text-left text-3xl md:text-[2.8rem] font-medium mb-6 leading-tight text-white">
            Stuck in a rut? John Crestani&apos;s training can <span style={{ color: '#5B5D63' }} className="affiliate-income-text"> change your life </span> 
          </h1>
          
          <p className="text-base text-left sm:text-xl mb-8 leading-relaxed">
            Exhausted by constant setbacks? Find success with expert training.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={handleGetStarted}
              className="transparent-button flex items-center justify-center group"
              data-testid="see-opinions-button"
            >
              See students&apos; opinions
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
            <button 
              onClick={handleWatchVideo}
              className="red-gradient-button flex items-center justify-center group"
              data-testid="join-masterclass-button"
            >
              Join free masterclass
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
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full w-44 h-44 md:w-44 md:h-44 flex items-center justify-center text-white font-bold text-base md:text-lg text-center p-4 transform md:translate-x-0 md:-translate-y-1/3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-base md:text-3xl gradient-pulse-text">Evolved.</p>
                <p className="text-base md:text-3xl gradient-pulse-text">2025.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

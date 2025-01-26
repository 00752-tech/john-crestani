'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    console.log('CTA Click: See Students Opinions')
    window.location.href = '/api/sale'
  }

  const handleWatchVideo = () => {
    console.log('CTA Click: Join Free Masterclass')
    window.location.href = '/api/webinar'
  }

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
          {/* Rest of the component remains the same */}
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const handleGetStarted = React.useCallback(() => {
    console.log('CTA Click: See Students Opinions')
    window.location.href = '/api/sale'
  }, [])

  const handleWatchVideo = React.useCallback(() => {
    console.log('CTA Click: Join Free Masterclass')
    window.location.href = '/api/webinar'
  }, [])

  return (
    <section className="pt-20 pb-16 bg-black text-white overflow-hidden relative">
      <style>{`
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

      <div className="container mx-auto flex flex-col md:flex-row items-center px-8 md:px-16">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 -mt-24"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Rest of the code remains the same */}
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

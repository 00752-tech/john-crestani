'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleGetStarted = () => {
    window.location.href = '/api/sale'
  }

  const handleWatchVideo = () => {
    window.location.href = '/api/webinar'
  }

  return (
    <section className="pt-32 pb-20 bg-black text-white overflow-hidden">
      <style jsx>{`
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
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ... previous content remains unchanged ... */}
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={handleGetStarted}
              className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              How others use it
            </button>
            <button 
              onClick={handleWatchVideo}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
            >
              Join free masterclass →   
            </button>
          </motion.div>
        </motion.div>
        
        {/* ... Image section remains unchanged ... */}
      </div>
    </section>
  )
}

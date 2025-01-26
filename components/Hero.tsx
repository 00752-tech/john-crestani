'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleGetStarted = () => {
    console.log('CTA Click: See Students Opinions');
    window.location.href = '/api/sale'
  }

  const handleWatchVideo = () => {
    console.log('CTA Click: Join Free Masterclass');
    window.location.href = '/api/webinar'
  }

  return (
    <section className="pt-36 pb-16 bg-black text-white overflow-hidden relative">
      {/* Previous styles remain unchanged */}
      <style>{`
        // ... (previous styles remain the same)

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
          {/* Previous content remains unchanged */}
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Updated Buttons with Arrow Icons */}
            <button 
              onClick={handleGetStarted}
              className="transparent-button flex items-center justify-center group"
              data-testid="see-opinions-button"
            >
              See students' opinions
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
        
        {/* Remaining code stays the same */}
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Previous image and content remain unchanged */}
        </motion.div>
      </div>
    </section>
   )
}

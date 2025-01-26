'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics';

export default function Hero() {
  const handleGetStarted = () => {
    track('CTA_Click', { button: 'See_Students_Opinions', location: 'hero' });
    window.location.href = '/api/sale'
  }

  const handleWatchVideo = () => {
    track('CTA_Click', { button: 'Join_Free_Masterclass', location: 'hero' });
    window.location.href = '/api/webinar'
  }

  return (
    <section className="pt-36 pb-16 bg-black text-white overflow-hidden relative">
      {/* ... (styles remain unchanged) ... */}

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ... (content remains unchanged) ... */}
          
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
              data-testid="see-opinions-button"
            >
              See students' opinions
            </button>
            <button 
              onClick={handleWatchVideo}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
              data-testid="join-masterclass-button"
            >
              Join free masterclass →   
            </button>
          </motion.div>
        </motion.div>
        
        {/* ... (remaining content unchanged) ... */}
      </div>
    </section>
  )
}

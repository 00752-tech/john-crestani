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
    <section className="pt-24 pb-16 bg-black text-white overflow-hidden">
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
                AWARD-WINNING EDUCATOR IN AFFILIATE MARKETING
              </span>
            </div>
          </div>
          
          <h1 className="text-left text-3xl md:text-[2.8rem] font-medium mb-6 leading-tight text-white">
            Break through the <span className="affiliate-income-text">affiliate income barrier</span> with Crestani&apos;s training
          </h1>
          
          <p className="text-base text-left sm:text-xl mb-8 leading-relaxed">
            Say goodbye to stagnant earnings and hello to a proven system that teaches you how to select lucrative offers, craft compelling promotions, and drive sales, all under the guidance of affiliate marketing guru, John Crestani.
          </p>
          
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
              See students&apos; opinions
            </button>
            <button 
              onClick={handleWatchVideo}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
            >
              Join free masterclass →   
            </button>
          </motion.div>
        </motion.div>
        
        {/* Rest of the code remains the same */}
      </div>
    </section>
  )
}

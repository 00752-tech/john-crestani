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
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
             <div className="flex flex-col items-center mb-4">
  <div className="flex flex-col items-center mb-4">
  <div className="flex items-center text-2xl text-gray-500 mb-2">
    <svg className="h-6 w-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.5 2 5 4.5 5 7c0 1.5-1.5 3-3 4-3 5.5-1 8 1 10.5 2 13 4 15.5 7 18 9.5 11" />
    </svg>
    <span className="text-lg text-gray-500">AWARD-WINNING EDUCATOR IN AFFILIATE MARKETING</span>
  </div>
  <h1 className="text-3xl text-white text-center">Unlock the Secrets of Affiliate Success</h1>
</div>

  <h1 className="text-3xl text-white">Unlock the Secrets of Affiliate Success</h1>
</div>
                    <h1 className="text-center sm:text-left text-2xl sm:text-3xl md:text-[2.8rem] font-medium mb-4 leading-snug sm:leading-tight text-white">
          <span className="block mb-1 sm:mb-1">Break through the affiliate income</span>
          <span className="block mb-1">barrier with Crestani&apos;s training</span>
          </h1>
          <h2 className="text-2xl md:text-1xl font-semibold mb-6 gradient-text">
            {` John Crestani's Super Affiliate System Pro`}
          </h2>
          <p className="text-base text-center sm:text-left sm:text-xl mb-8">
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
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
            >
              See how others succeeded
            </button>
            <button 
              onClick={handleWatchVideo}
              className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Get instant access - free webinar! →
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
            <Image 
              src="https://www.gojctraining.com/hosted/images/02/887709d34346a89d87f5a2eca39247/johnnewimg99.png" 
              alt="John Crestani" 
              width={600} 
              height={600} 
              className="rounded-lg shadow-2xl"
            />
            <motion.div 
              className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white font-bold text-base md:text-xl text-center p-4 transform md:translate-x-0 md:-translate-y-1/3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Unlock the New
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function CTA() {
  const handleEnrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "https://1bbc1ko45gi5ui658hhb5t7y82.hop.clickbank.net/?cbpage=diroop&campaign=dirsp1actfast";
  }

  const handleWebinarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "https://eb304ktx6ll4qhe38o6bep4s36.hop.clickbank.net/?&campaign=webifooter";
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        {/* ... (previous code remains unchanged) ... */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        >
          {/* ... (previous code remains unchanged) ... */}
          <motion.button 
            onClick={handleEnrollClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            GET INSTANT ACCESS
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4 flex items-center justify-center"
          >
            <Image 
              src="/low price gurantee.png" 
              alt="Low Price Guarantee" 
              width={50} 
              height={50} 
              className="mr-2"
            />
            <p className="text-sm text-gray-600">
              Low Price Guarantee: We&apos;ll match any competitor&apos;s price!
            </p>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-2 text-sm text-gray-600"
          >
            30-Day Money-Back Guarantee
          </motion.p>
        </motion.div>
        {/* ... (remaining code unchanged) ... */}
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function CTA() {
  const handleEnrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net";
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Unlock Your Affiliate Empire in 2025
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl mb-8"
        >
          Thousands have cracked the code - now it&apos;s your turn to join the ranks of Super Affiliate System Pro millionaires.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Limited Time Offer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-2xl text-gray-600 mb-6"
          >
            Get 50% OFF Today!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex justify-center items-center space-x-4 mb-6"
          >
            <span className="text-4xl font-bold text-gray-400 line-through">$4,997</span>
            <span className="text-4xl font-bold text-gray-400 line-through">$1,994</span>
            <span className="text-5xl font-bold text-pink-500">Act Fast!</span>
          </motion.div>
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="https://a2678p91h18n0p26cka-9z8mee.hop.clickbank.net"
            className="text-white underline hover:text-pink-200 transition duration-300"
          >
            Master the Million-Dollar Matrix: Complimentary Training
          </a>
        </motion.div>
      </div>
    </section>
  )
}

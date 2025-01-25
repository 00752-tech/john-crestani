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
    <section className="pt-36 pb-8 bg-black text-white overflow-hidden relative">
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
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Rest of the existing code remains the same */}
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-black text-white overflow-hidden relative">
      <style jsx global>{`
        @font-face {
          font-family: 'Neue Haas Unica W1G';
          src: url('/fonts/NeueHaasUnicaW1G-Light.woff2') format('woff2');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        body {
          font-family: 'Neue Haas Unica W1G', sans-serif;
        }

        .button-base {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 300;  // Thinner font weight
          letter-spacing: 0.5px;  // Slight letter spacing for readability
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          height: 52px;  // Slightly taller
          text-transform: uppercase;
          white-space: nowrap;
        }

        .red-gradient-button {
          background-image: linear-gradient(241deg, #FF1C00, #FF4D00);
          color: white;
          width: 340px;
        }

        .red-gradient-button:hover {
          background-image: linear-gradient(241deg, #FF4D00, #FF1C00);
          transform: scale(1.05);
        }

        .transparent-button {
          border: 2px solid white;
          background-color: transparent;
          color: white;
          width: 300px;
        }

        .transparent-button:hover {
          background-color: white;
          color: black;
        }
      `}</style>

      {/* Rest of the component remains the same */}
    </section>
   )
}

export default Hero

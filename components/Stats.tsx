'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Stats() {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { end: 50000, suffix: "+", text: "Students Trained" },
    { end: 20000000, suffix: "+", prefix: "$", text: "Affiliate Commissions Earned" },
    { end: 9, suffix: "+", text: "Years of Affiliate Innovation" },
    { end: 4.6, decimals: 1, text: "Average Trustpilot Score" },
    { end: 96, suffix: "%", text: "Student Satisfaction Rate" }
  ]

  return (
    <>
      <section className="bg-black bg-opacity-80 text-white py-2 md:py-4 -mt-12 overflow-hidden">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-gray-800 bg-opacity-50 p-2 md:p-3 rounded-lg z-40"
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="inline-block"
              >
                <CountUp
                  start={0}
                  end={item.end}
                  duration={9}
                  delay={0.2}
                  separator=","
                  decimals={item.decimals || 0}
                  decimal="."
                  prefix={item.prefix || ""}
                  suffix={item.suffix || ""}
                  className="text-xl md:text-2xl lg:text-3xl font-bold transition duration-300"
                  style={{
                    background: "linear-gradient(45deg, #ec4899, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                />
              </motion.div>
              <p className="mt-1 text-xs md:text-sm lg:text-base text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transition to New Offer */}
      <section className="text-center py-10 px-6 bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 tracking-tight mb-4">
          Now Introducing the AI Marketers Club—John’s Fastest, Easiest System Yet
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A proven $27 blueprint for faceless content, automated traffic, and daily commissions—designed for creators who want results without complexity.
        </p>
      </section>
    </>
  )
}

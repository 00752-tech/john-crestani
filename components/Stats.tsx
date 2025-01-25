'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Stats() {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { end: 10833, suffix: "+", text: "Successful Graduates" },
    { end: 15933425, prefix: "$", text: "Revenue Generated" },
    { end: 8, suffix: "+", text: "Years of Innovation" },
    { end: 4.6, decimals: 1, text: "Trustpilot Score" },
    { end: 96, suffix: "%", text: "Client Satisfaction" }
  ]

  return (
    <section className="bg-black bg-opacity-80 text-white py-4 md:py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-gray-800 bg-opacity-50 p-3 md:p-4 rounded-lg"
          >
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="inline-block"
            >
              <CountUp
                start={0}
                end={item.end}
                duration={7}
                delay={0.2}
                separator=","
                decimals={item.decimals || 0}
                decimal="."
                prefix={item.prefix || ""}
                suffix={item.suffix || ""}
                className="text-2xl md:text-3xl lg:text-4xl font-bold transition duration-300"
                style={{
                  background: "linear-gradient(45deg, #ec4899, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              />
            </motion.div>
            <p className="mt-1 text-xs md:text-sm text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

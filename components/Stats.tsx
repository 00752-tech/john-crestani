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
    { end: 10833, suffix: "+", text: "Successful Graduates" },
    { end: 15933425, suffix: "+", prefix: "$", text: "Revenue Generated" },
    { end: 8, suffix: "+", text: "Years of Innovation" },
    { end: 4.6, decimals: 1, text: "Trustpilot Score" },
    { end: 96, suffix: "%", text: "Client Satisfaction" }
  ]

  return (
    <section className="bg-black bg-opacity-80 text-white py-2 md:py-4 -mt-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-gray-800 bg-opacity-50 p-2 md:p-3 rounded-lg"
          >
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="inline-block"
            >
              <CountUp
                start={0}
                end={item.end}
                duration={10}
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
            <p className="mt-1 text-[10px] md:text-xs text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

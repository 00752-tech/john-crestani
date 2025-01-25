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

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {[
          { end: 10833, suffix: "+", text: "Successful Graduates" },
          { end: 15933425, prefix: "$", text: "Revenue Generated" },
          { end: 7, suffix: "+", text: "Years of Innovation" },
          { end: 4.6, decimals: 1, text: "Trustpilot Score" },
          { end: 92, suffix: "%", text: "Client Satisfaction" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * (index + 1) }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="inline-block"
            >
              <CountUp
                start={0}
                end={item.end}
                duration={5}
                delay={0.5}
                separator=","
                decimals={item.decimals || 0}
                decimal="."
                prefix={item.prefix || ""}
                suffix={item.suffix || ""}
                className="text-4xl font-bold text-pink-500 transition duration-300"
                style={{
                  background: "linear-gradient(45deg, #ec4899, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              />
            </motion.div>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

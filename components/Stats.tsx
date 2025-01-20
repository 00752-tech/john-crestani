'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Stats() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={250}
            duration={5}
            delay={0.5}
            suffix="+"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Students Trained</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={15}
            duration={5}
            delay={0.5}
            suffix="M+"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Revenue Generated</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={7}
            duration={5}
            delay={0.5}
            suffix=" Years"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Industry Experience</p>
        </motion.div>
      </div>
    </section>
  )
}

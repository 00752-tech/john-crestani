'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function Stats() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={10833}
            duration={5}
            delay={0.5}
            separator=","
            suffix="+"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Successful Graduates</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={15933425}
            duration={5}
            delay={0.5}
            separator=","
            prefix="$"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Revenue Generated</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={7}
            duration={5}
            delay={0.5}
            suffix="+"
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Years of Innovation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <CountUp
            start={0}
            end={4.6}
            duration={5}
            delay={0.5}
            decimals={1}
            decimal="."
            className="text-4xl font-bold text-cyan-400"
          />
          <p className="mt-2 text-gray-300">Trustpilot Score</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center justify-center">
            <CountUp
              start={0}
              end={92}
              duration={5}
              delay={0.5}
              suffix="%"
              className="text-4xl font-bold text-cyan-400"
            />
          </div>
          <p className="mt-2 text-gray-300">Client Satisfaction</p>
        </motion.div>
      </div>
    </section>
  )
}
